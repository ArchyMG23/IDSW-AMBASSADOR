export interface Campus {
  id: string;
  city: string;
  name: string;
  location: string;
  phone: string;
  phoneRaw: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface AmbassadorApplication {
  fullName: string;
  whatsapp: string;
  email: string;
  cityCountry: string;
  occupation: string;
  motivation: string;
  discoverySource: string;
  acceptedTerms: boolean;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';
