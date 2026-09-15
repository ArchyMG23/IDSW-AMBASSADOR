import { Campus } from '../types';

export const siteConfig = {
  brand: {
    acronym: 'IDSW',
    fullName: 'INSTITUT DER SICHERSTE WEG',
    tagline: 'Votre réseau peut devenir une source de revenus.',
    programTitle: 'PROGRAMME AMBASSADEUR IDSW',
    destinationFocus: 'Opportunités d’études et projets en Allemagne',
  },
  commission: {
    amountNumber: 10000,
    amountFormatted: '10 000 FCFA',
    label: 'par inscription validée',
    description:
      'Chaque inscription validée issue de votre recommandation peut générer une commission de 10 000 FCFA, conformément aux conditions du programme.',
    disclaimer:
      'Une recommandation ne déclenche pas automatiquement une commission. La commission est liée à une inscription remplissant les conditions de validation du programme. Ce montant ne constitue en aucun cas une promesse de revenu fixe ou garanti.',
  },
  whatsapp: {
    // Primary WhatsApp recruitment line (Campus 1 Tsinga / Ambassador Desk)
    phoneDisplay: '+237 656 93 92 98',
    phoneNumber: '237656939298',
    prefilledMessage:
      'Bonjour IDSW, je souhaite devenir ambassadeur et recevoir les informations concernant le programme.',
    getLink(customText?: string) {
      const text = encodeURIComponent(customText || this.prefilledMessage);
      return `https://wa.me/${this.phoneNumber}?text=${text}`;
    },
  },
  contact: {
    email: 'infos@idsw.net',
    website: 'https://www.idsw.net',
    websiteDisplay: 'www.idsw.net',
  },
  campuses: [
    {
      id: 'campus-1',
      city: 'Yaoundé',
      name: 'Campus 1 Yaoundé',
      location: 'Face polyclinique Tsinga',
      phone: '+237 656 93 92 98',
      phoneRaw: '237656939298',
    },
    {
      id: 'campus-2',
      city: 'Yaoundé',
      name: 'Campus 2 Yaoundé',
      location: 'Derrière station Total Jouvence',
      phone: '+237 689 47 02 00',
      phoneRaw: '237689470200',
    },
    {
      id: 'campus-3',
      city: 'Yaoundé',
      name: 'Campus 3 Yaoundé',
      location: 'Mélen — Face polytechnique',
      phone: '+237 686 93 95 05',
      phoneRaw: '237686939505',
    },
    {
      id: 'campus-4',
      city: 'Douala',
      name: 'Campus 4 Douala',
      location: 'Déido — Face château d’eau',
      phone: '+237 676 46 30 66',
      phoneRaw: '237676463066',
    },
    {
      id: 'campus-5',
      city: 'Dakar',
      name: 'Campus 5 Sénégal — Dakar',
      location: 'Restaurant Nigérian',
      phone: '+221 77 693 16 03',
      phoneRaw: '221776931603',
    },
    {
      id: 'campus-6',
      city: 'Nkoabang',
      name: 'Campus 6 Nkoabang',
      location: 'À 100 mètres de la station Green Oil',
      phone: '+237 641 84 66 01',
      phoneRaw: '237641846601',
    },
  ] as Campus[],
  navLinks: [
    { label: 'Le Programme', href: '#le-programme' },
    { label: 'Comment ça marche', href: '#comment-ca-marche' },
    { label: 'Qui peut participer', href: '#qui-peut-participer' },
    { label: 'FAQ', href: '#faq' },
  ],
};
