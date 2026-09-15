import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenForm: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenForm }) => {
  return (
    <section
      id="cta-final-section"
      className="py-20 md:py-28 bg-[#0B3820] text-white relative overflow-hidden"
      aria-label="Appel à l'action final pour devenir ambassadeur"
    >
      {/* Subtle radial gradient background pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#15803D]/25 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle German micro-accent indicator */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold tracking-wider uppercase mb-6 text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
          <span>Partenariat Ambassadeur IDSW</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mb-4 max-w-4xl mx-auto">
          VOTRE RÉSEAU PEUT DEVENIR{' '}
          <span className="text-[#EAB308]">UNE SOURCE DE REVENUS.</span>
        </h2>

        <p className="text-lg sm:text-xl text-white/80 font-medium mb-10 max-w-xl mx-auto">
          Rejoignez le programme Ambassadeur IDSW.
        </p>

        {/* Both CTAs side by side */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            id="final-cta-apply"
            type="button"
            onClick={onOpenForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#0B3820] bg-white hover:bg-[#F0FDF4] active:scale-[0.98] transition-all shadow-md"
          >
            <span>Devenir Ambassadeur</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="final-cta-whatsapp"
            href={siteConfig.whatsapp.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#15803D] hover:bg-[#166534] active:scale-[0.98] transition-all border border-[#22C55E]/40"
          >
            <MessageSquare className="w-4 h-4 text-[#EAB308]" />
            <span>Parler à IDSW sur WhatsApp</span>
          </a>
        </div>

        <p className="text-xs text-white/50 mt-8">
          Réponse rapide de l’équipe de coordination IDSW
        </p>
      </div>
    </section>
  );
};
