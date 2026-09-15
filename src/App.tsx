import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProgramIdea } from './components/ProgramIdea';
import { CommissionHighlight } from './components/CommissionHighlight';
import { HowItWorks } from './components/HowItWorks';
import { AudienceSection } from './components/AudienceSection';
import { AmbassadorKit } from './components/AmbassadorKit';
import { TrustSection } from './components/TrustSection';
import { CommissionPipeline } from './components/CommissionPipeline';
import { CalculationExamples } from './components/CalculationExamples';
import { FAQSection } from './components/FAQSection';
import { ApplicationForm } from './components/ApplicationForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById('candidature');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProgram = () => {
    const programElement = document.getElementById('le-programme');
    if (programElement) {
      programElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBF9] text-[#111E17] flex flex-col selection:bg-[#15803D]/20 selection:text-[#0B3820]">
      {/* Top Header */}
      <Header onOpenForm={scrollToForm} />

      {/* Main Content Sections in Structured Editorial Flow */}
      <main id="main-content" className="flex-1">
        {/* Section 6: Hero */}
        <Hero onOpenForm={scrollToForm} onExplore={scrollToProgram} />

        {/* Section 8: L'Idée - Vous avez un réseau */}
        <ProgramIdea />

        {/* Section 9: 10 000 FCFA par inscription validée */}
        <CommissionHighlight />

        {/* Section 10: Comment ça marche (5 étapes) */}
        <HowItWorks onOpenForm={scrollToForm} />

        {/* Section 11: Qui peut devenir ambassadeur ? */}
        <AudienceSection />

        {/* Section 12: Ce que vous recevez (Kit ambassadeur) */}
        <AmbassadorKit />

        {/* Section 13: Confiance & Responsabilités */}
        <TrustSection />

        {/* Section 14: Processus de validation de la commission */}
        <CommissionPipeline />

        {/* Section 15: Exemples de calcul */}
        <CalculationExamples />

        {/* Section 16: FAQ accordéon */}
        <FAQSection />

        {/* Section 18: Formulaire de candidature professionnel */}
        <ApplicationForm />

        {/* Section 17: CTA Final */}
        <FinalCTA onOpenForm={scrollToForm} />
      </main>

      {/* Section 20 & 21: Contacts & Footer */}
      <Footer />

      {/* Section 19 & 23: Discret Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
