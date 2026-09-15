import { FAQItem, StepItem } from '../types';

export const stepsData: StepItem[] = [
  {
    number: '01',
    title: 'Candidatez',
    description: 'Vous manifestez votre intérêt pour rejoindre le programme via notre formulaire officiel.',
  },
  {
    number: '02',
    title: 'Soyez validé',
    description: 'L’équipe IDSW examine attentivement votre candidature et valide votre statut d’ambassadeur partenaire.',
  },
  {
    number: '03',
    title: 'Recevez votre code',
    description: 'Vous recevez votre identifiant unique et/ou votre lien de recommandation personnel.',
  },
  {
    number: '04',
    title: 'Recommandez',
    description: 'Vous partagez les opportunités et services IDSW auprès de vos contacts, cercles et réseaux.',
  },
  {
    number: '05',
    title: 'Gagnez',
    description: 'Chaque inscription validée conformément aux conditions du programme génère votre commission de 10 000 FCFA.',
  },
];

export const audienceProfiles = [
  {
    title: 'Étudiants & Diplômés',
    detail: 'En contact quotidien avec des pairs désireux de poursuivre leurs études ou formations en Allemagne.',
  },
  {
    title: 'Commerciaux & Développeurs d’affaires',
    detail: 'Dotés d’une aisance relationnelle et d’un carnet d’adresses actif.',
  },
  {
    title: 'Créateurs de contenu & Médias',
    detail: 'Capables de relayer des opportunités crédibles auprès d’une audience qualifiée.',
  },
  {
    title: 'Professionnels en activité',
    detail: 'Conseillers, consultants ou cadres guidant des proches et collègues en transition de carrière.',
  },
  {
    title: 'Responsables associatifs & Communautaires',
    detail: 'Impliqués dans la réussite éducative et la mobilité internationale de leur communauté.',
  },
  {
    title: 'Particuliers engagés',
    detail: 'Toute personne disposant d’un cercle pertinent souhaitant orienter des profils motivés.',
  },
];

export const ambassadorKitItems = [
  {
    title: 'Code personnel unique',
    description: 'Un identifiant exclusif permettant l’attribution rigoureuse de vos recommandations.',
  },
  {
    title: 'Lien de recommandation direct',
    description: 'Un lien traçable à partager facilement via messageries, réseaux sociaux ou email.',
  },
  {
    title: 'Supports de communication officiels',
    description: 'Fiches de présentation et visuels validés par IDSW pour présenter les services avec exactitude.',
  },
  {
    title: 'Informations détaillées sur les services',
    description: 'Documentation claire sur les cursus linguistiques, démarches et accompagnements vers l’Allemagne.',
  },
  {
    title: 'Accompagnement dédié de l’équipe',
    description: 'Un point de contact direct chez IDSW pour répondre à vos interrogations de terrain.',
  },
  {
    title: 'Système de suivi des recommandations',
    description: 'Un récapitulatif clair de l’état d’avancement de vos recommandations, lorsque celui-ci est disponible.',
  },
];

export const calculationExamples = [
  {
    count: 1,
    label: '1 inscription validée',
    amount: '10 000 FCFA',
    note: 'Premier palier de recommandation concrétisée',
  },
  {
    count: 5,
    label: '5 inscriptions validées',
    amount: '50 000 FCFA',
    note: 'Recommandation active au sein de votre réseau',
  },
  {
    count: 10,
    label: '10 inscriptions validées',
    amount: '100 000 FCFA',
    note: 'Dynamique soutenue de parrainage qualifié',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Dois-je être étudiant pour devenir ambassadeur ?',
    answer:
      'Non. Votre statut actuel n’est pas le critère déterminant. Que vous soyez étudiant, professionnel, commercial, créateur de contenu ou particulier, dès lors que vous disposez d’un réseau pertinent et souhaitez orienter des personnes intéressées vers les opportunités IDSW, vous pouvez candidater.',
  },
  {
    id: 'faq-2',
    question: 'Combien puis-je recevoir ?',
    answer:
      'Chaque inscription validée conforme aux conditions du programme génère une commission de 10 000 FCFA. Il n’y a pas de plafond prédéfini sur le nombre de personnes que vous pouvez recommander.',
  },
  {
    id: 'faq-3',
    question: 'Comment obtenir mon code ambassadeur ?',
    answer:
      'Après avoir soumis votre candidature via le formulaire, l’équipe IDSW procède à son examen. Dès que votre partenariat est validé, votre code d’ambassadeur et/ou votre lien personnalisé vous sont transmis directement.',
  },
  {
    id: 'faq-4',
    question: 'Comment une recommandation est-elle attribuée ?',
    answer:
      'La personne que vous recommandez communique votre code lors de son premier contact ou s’inscrit via votre lien personnel, assurant une traçabilité transparente.',
  },
  {
    id: 'faq-5',
    question: 'Quand la commission est-elle validée ?',
    answer:
      'La commission est validée dès lors que l’étudiant recommandé a finalisé une inscription formelle répondant aux conditions d’éligibilité fixées par le programme IDSW.',
  },
  {
    id: 'faq-6',
    question: 'Puis-je recommander plusieurs personnes ?',
    answer:
      'Oui, absolument. Vous pouvez recommander autant de candidats potentiels que vous le souhaitez au sein de votre réseau académique, familial ou professionnel.',
  },
  {
    id: 'faq-7',
    question: 'L’inscription au programme est-elle gratuite ?',
    answer:
      'Oui. L’adhésion au programme Ambassadeur IDSW est totalement gratuite et ne requiert aucun frais d’entrée.',
  },
  {
    id: 'faq-8',
    question: 'Suis-je salarié d’IDSW ?',
    answer:
      'Non. L’ambassadeur intervient en qualité de partenaire indépendant apporteur d’affaires / recommandeur. Il ne dispose d’aucun lien de subordination salariale avec l’institut.',
  },
  {
    id: 'faq-9',
    question: 'Comment suis-je payé ?',
    answer:
      'Cette information sera communiquée lors de la validation de votre partenariat.',
  },
];
