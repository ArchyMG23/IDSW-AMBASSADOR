import React, { useState } from 'react';
import { AmbassadorApplication, FormStatus } from '../types';
import { siteConfig } from '../config/siteConfig';
import {
  submitApplication,
  triggerAutomaticWhatsAppRedirect,
  getDirectWhatsAppUrl,
  buildWhatsAppMessage,
} from '../services/submissionService';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';

interface ApplicationFormProps {
  onSuccess?: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<AmbassadorApplication>({
    fullName: '',
    whatsapp: '',
    email: '',
    cityCountry: '',
    occupation: '',
    motivation: '',
    discoverySource: '',
    acceptedTerms: false,
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submittedData, setSubmittedData] = useState<AmbassadorApplication | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side validation
    if (!formData.fullName.trim()) {
      setStatus('error');
      setErrorMessage('Veuillez renseigner votre nom complet.');
      return;
    }
    if (!formData.whatsapp.trim()) {
      setStatus('error');
      setErrorMessage('Veuillez renseigner votre numéro WhatsApp.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Veuillez renseigner une adresse email valide.');
      return;
    }
    if (!formData.cityCountry.trim()) {
      setStatus('error');
      setErrorMessage('Veuillez renseigner votre ville et pays de résidence.');
      return;
    }
    if (!formData.acceptedTerms) {
      setStatus('error');
      setErrorMessage('Veuillez accepter les conditions du programme Ambassadeur IDSW.');
      return;
    }

    setStatus('loading');

    try {
      // 1. Submit to Google Sheets / Formspree / Email (infos@idsw.net) and archive locally
      const result = await submitApplication(formData);

      setSubmittedData({ ...formData });
      setStatus('success');
      if (onSuccess) onSuccess();

      // 2. Direct automatic redirection to WhatsApp with all responses pre-filled!
      triggerAutomaticWhatsAppRedirect(result.whatsappUrl);
    } catch {
      setStatus('error');
      setErrorMessage(
        'Une erreur est survenue lors de l’envoi. Vous pouvez toutefois contacter directement IDSW sur WhatsApp avec vos informations.'
      );
    }
  };

  const handleCopyMessage = () => {
    if (!submittedData) return;
    const msg = buildWhatsAppMessage(submittedData);
    navigator.clipboard.writeText(msg).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section
      id="candidature"
      className="py-20 md:py-28 bg-white border-t border-[#E2E8E4] scroll-mt-16 relative"
      aria-label="Formulaire officiel de candidature ambassadeur"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#15803D] mb-3">
            <span className="w-2 h-0.5 bg-[#15803D]" />
            <span>Formulaire Officiel</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0B3820] tracking-tight mb-4">
            Rejoindre le Programme Ambassadeur
          </h2>

          <p className="text-base text-[#475C50]">
            Remplissez ce formulaire pour soumettre votre candidature. Vos informations sont transmises à l'équipe IDSW et vous êtes automatiquement basculé sur WhatsApp pour finaliser.
          </p>
        </div>

        {/* Success View */}
        {status === 'success' && submittedData ? (
          <div className="p-8 sm:p-10 rounded-2xl bg-[#F0FDF4] border border-[#86EFAC] text-center max-w-2xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#166534] text-xs font-bold uppercase tracking-wide mb-3">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
              <span>Redirection WhatsApp déclenchée</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0B3820] mb-2">
              Candidature enregistrée avec succès
            </h3>

            <p className="text-sm sm:text-base text-[#234231] leading-relaxed mb-6">
              Merci <strong className="text-[#0B3820]">{submittedData.fullName}</strong>. Votre dossier a été transmis par email à <strong className="text-[#0B3820]">infos@idsw.net</strong> et enregistré pour l'équipe de coordination.
            </p>

            {/* Prominent Direct WhatsApp Button */}
            <div className="p-5 rounded-xl bg-white border border-[#BBF7D0] mb-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3820] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#15803D]" />
                  <span>Discussion WhatsApp pré-remplie</span>
                </span>
                <span className="text-[11px] text-[#55695D]">
                  Numéro : {siteConfig.whatsapp.phoneDisplay}
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#375242] leading-relaxed mb-4">
                Si la fenêtre WhatsApp ne s'est pas ouverte automatiquement (selon les paramètres de votre navigateur), cliquez directement sur le bouton ci-dessous pour ouvrir la discussion avec toutes vos réponses pré-remplies :
              </p>

              <a
                id="direct-whatsapp-redirect-button"
                href={getDirectWhatsAppUrl(submittedData)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] transition-all shadow-md"
              >
                <MessageSquare className="w-5 h-5 text-[#EAB308]" />
                <span>Ouvrir mon message sur WhatsApp</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>
            </div>

            {/* Detail Summary & Copy Action */}
            <div className="p-4 rounded-xl bg-white/70 border border-[#CBD7D0] text-left text-xs sm:text-[13px] text-[#375242] space-y-1.5 mb-6">
              <div className="font-semibold text-[#0B3820] mb-2 flex items-center justify-between">
                <span>Détail de votre candidature transmise :</span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#15803D] hover:underline"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#15803D]" />
                      <span>Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copier le texte</span>
                    </>
                  )}
                </button>
              </div>
              <div><strong>Nom complet :</strong> {submittedData.fullName}</div>
              <div><strong>Numéro WhatsApp :</strong> {submittedData.whatsapp}</div>
              <div><strong>Email :</strong> {submittedData.email}</div>
              <div><strong>Ville & Pays :</strong> {submittedData.cityCountry}</div>
              <div><strong>Profession :</strong> {submittedData.occupation || 'Non spécifié'}</div>
              <div><strong>Transmission :</strong> Email à infos@idsw.net & redirection WhatsApp</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    fullName: '',
                    whatsapp: '',
                    email: '',
                    cityCountry: '',
                    occupation: '',
                    motivation: '',
                    discoverySource: '',
                    acceptedTerms: false,
                  });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-[#375242] hover:bg-[#E0F2E9] transition-colors"
              >
                Déposer une autre candidature
              </button>
            </div>
          </div>
        ) : (
          /* Form Inputs */
          <form
            id="ambassador-application-form"
            onSubmit={handleSubmit}
            noValidate
            className="p-6 sm:p-10 rounded-2xl bg-[#FAFBF9] border border-[#D5E0DA] shadow-xs"
          >
            {/* Error banner */}
            {status === 'error' && errorMessage && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-xs sm:text-sm text-[#991B1B] flex items-center gap-2.5"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-[#DC2626]" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {/* Nom complet */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="field-fullName"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0B3820] mb-2"
                >
                  Nom complet <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  id="field-fullName"
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Ex. Emmanuel Nguemo"
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5CF] bg-white text-sm text-[#183023] focus:border-[#0B3820] focus:ring-1 focus:ring-[#0B3820] outline-hidden transition-all"
                />
              </div>

              {/* Numéro WhatsApp */}
              <div>
                <label
                  htmlFor="field-whatsapp"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0B3820] mb-2"
                >
                  Numéro WhatsApp <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  id="field-whatsapp"
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Ex. +237 6XX XX XX XX"
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5CF] bg-white text-sm text-[#183023] focus:border-[#0B3820] focus:ring-1 focus:ring-[#0B3820] outline-hidden transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="field-email"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0B3820] mb-2"
                >
                  Adresse Email <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  id="field-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex. contact@exemple.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5CF] bg-white text-sm text-[#183023] focus:border-[#0B3820] focus:ring-1 focus:ring-[#0B3820] outline-hidden transition-all"
                />
              </div>

              {/* Ville / Pays */}
              <div>
                <label
                  htmlFor="field-cityCountry"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0B3820] mb-2"
                >
                  Ville / Pays <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  id="field-cityCountry"
                  type="text"
                  name="cityCountry"
                  required
                  value={formData.cityCountry}
                  onChange={handleChange}
                  placeholder="Ex. Yaoundé, Cameroun"
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5CF] bg-white text-sm text-[#183023] focus:border-[#0B3820] focus:ring-1 focus:ring-[#0B3820] outline-hidden transition-all"
                />
              </div>

              {/* Profession / Activité */}
              <div>
                <label
                  htmlFor="field-occupation"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0B3820] mb-2"
                >
                  Profession / Activité
                </label>
                <input
                  id="field-occupation"
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="Ex. Étudiant, Commercial, Enseignant..."
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5CF] bg-white text-sm text-[#183023] focus:border-[#0B3820] focus:ring-1 focus:ring-[#0B3820] outline-hidden transition-all"
                />
              </div>

              {/* Pourquoi souhaitez-vous devenir ambassadeur ? */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="field-motivation"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0B3820] mb-2"
                >
                  Pourquoi souhaitez-vous devenir ambassadeur ?
                </label>
                <textarea
                  id="field-motivation"
                  name="motivation"
                  rows={3}
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Partagez brièvement votre motivation et les opportunités de recommandation au sein de votre entourage..."
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5CF] bg-white text-sm text-[#183023] focus:border-[#0B3820] focus:ring-1 focus:ring-[#0B3820] outline-hidden transition-all resize-none"
                />
              </div>

              {/* Comment avez-vous découvert IDSW ? */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="field-discoverySource"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0B3820] mb-2"
                >
                  Comment avez-vous découvert IDSW ?
                </label>
                <select
                  id="field-discoverySource"
                  name="discoverySource"
                  value={formData.discoverySource}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5CF] bg-white text-sm text-[#183023] focus:border-[#0B3820] focus:ring-1 focus:ring-[#0B3820] outline-hidden transition-all"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="Flyer publicitaire">Flyer publicitaire</option>
                  <option value="Réseaux sociaux">Réseaux sociaux</option>
                  <option value="Recommandation d’un ami / proche">Recommandation d’un ami / proche</option>
                  <option value="Campus IDSW physique">Campus IDSW physique</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
            </div>

            {/* Checkbox Conditions */}
            <div className="mb-8 pt-2 border-t border-[#EAEFEA]">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  id="field-acceptedTerms"
                  type="checkbox"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded text-[#0B3820] border-[#CBD5CF] focus:ring-[#0B3820]"
                />
                <span className="text-xs sm:text-[13px] text-[#42554B] leading-relaxed">
                  J'accepte les conditions du programme Ambassadeur IDSW et confirme que mes recommandations s'effectueront dans le respect des valeurs de l'institut.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                id="submit-application-button"
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0B3820] hover:bg-[#072615] active:scale-[0.98] transition-all disabled:opacity-60 shadow-sm"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#EAB308]" />
                    <span>Transmission & Redirection WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer ma candidature & Ouvrir WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <span className="text-[11.5px] text-[#63776C]">
                Envoi direct par email (infos@idsw.net) & WhatsApp
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

