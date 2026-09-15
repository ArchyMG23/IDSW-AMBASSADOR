import { AmbassadorApplication } from '../types';
import { siteConfig } from '../config/siteConfig';

export interface SubmissionResult {
  success: boolean;
  sheetsSynced: boolean;
  emailSent: boolean;
  whatsappUrl: string;
  error?: string;
}

/**
 * Builds the complete pre-filled message for WhatsApp containing all candidate responses.
 */
export function buildWhatsAppMessage(data: AmbassadorApplication): string {
  return [
    `*CANDIDATURE PROGRAMME AMBASSADEUR IDSW*`,
    ``,
    `👤 *Nom complet :* ${data.fullName}`,
    `📱 *WhatsApp :* ${data.whatsapp}`,
    `✉️ *Email :* ${data.email}`,
    `📍 *Ville & Pays :* ${data.cityCountry}`,
    `💼 *Profession / Statut :* ${data.occupation || 'Non renseigné'}`,
    `💡 *Motivation :* ${data.motivation || 'Orientation et recommandation vers les programmes IDSW'}`,
    `📢 *Source de découverte :* ${data.discoverySource || 'Direct / Réseau'}`,
    ``,
    `✅ *Engagement :* Conditions acceptées. Merci de valider ma candidature et de me délivrer mon code officiel d'ambassadeur IDSW.`
  ].join('\n');
}

/**
 * Generates the direct WhatsApp redirection URL
 */
export function getDirectWhatsAppUrl(data: AmbassadorApplication): string {
  const message = buildWhatsAppMessage(data);
  return siteConfig.whatsapp.getLink(message);
}

/**
 * Submits the application to configured endpoints:
 * 1. Google Sheets Webhook (if configured)
 * 2. Formspree / Email endpoint (or FormSubmit API to infos@idsw.net)
 * 3. Local session archive
 */
export async function submitApplication(data: AmbassadorApplication): Promise<SubmissionResult> {
  const timestamp = new Date().toISOString();
  const payload = {
    ...data,
    timestamp,
    recipientEmail: siteConfig.contact.email,
    commissionTarget: '10 000 FCFA par inscription validée',
  };

  let sheetsSynced = false;
  let emailSent = false;

  // 1. Always cache in local storage
  try {
    const stored = localStorage.getItem('idsw_ambassador_applications');
    const list = stored ? JSON.parse(stored) : [];
    list.push(payload);
    localStorage.setItem('idsw_ambassador_applications', JSON.stringify(list));
  } catch (err) {
    console.warn('Local storage write warning:', err);
  }

  // 2. Google Sheets Webhook (if configured via env or default endpoint)
  const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;
  if (googleSheetsUrl) {
    try {
      await fetch(googleSheetsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });
      sheetsSynced = true;
    } catch (err) {
      console.warn('Google Sheets sync warning:', err);
    }
  }

  // 3. Formspree or Email API to infos@idsw.net
  const formspreeUrl = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const emailEndpoint = formspreeUrl || 'https://formsubmit.co/ajax/infos@idsw.net';

  try {
    const emailResponse = await fetch(emailEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `Nouvelle Candidature Ambassadeur IDSW - ${data.fullName}`,
        _replyto: data.email,
        Nom_Complet: data.fullName,
        Numero_WhatsApp: data.whatsapp,
        Adresse_Email: data.email,
        Ville_et_Pays: data.cityCountry,
        Profession: data.occupation || 'Non spécifié',
        Motivation: data.motivation || 'Non spécifié',
        Decouverte_IDSW: data.discoverySource || 'Non spécifié',
        Conditions_Acceptees: data.acceptedTerms ? 'OUI' : 'NON',
        Date_Soumission: new Date().toLocaleString('fr-FR'),
      }),
    });

    if (emailResponse.ok) {
      emailSent = true;
    }
  } catch (err) {
    console.warn('Email dispatch warning (non-blocking for candidate):', err);
  }

  const whatsappUrl = getDirectWhatsAppUrl(data);

  return {
    success: true,
    sheetsSynced,
    emailSent,
    whatsappUrl,
  };
}

/**
 * Triggers automatic browser redirection to WhatsApp
 */
export function triggerAutomaticWhatsAppRedirect(whatsappUrl: string): void {
  // Method 1: Open in a new tab if allowed
  const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  
  // Method 2: If popup blocker blocked the new tab, redirect current window after a brief delay
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    window.location.href = whatsappUrl;
  }
}
