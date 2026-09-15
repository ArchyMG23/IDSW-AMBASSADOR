import React from 'react';
import { ambassadorKitItems } from '../data/ambassadorData';
import { Package, ShieldCheck } from 'lucide-react';

export const AmbassadorKit: React.FC = () => {
  return (
    <section
      id="kit-ambassadeur"
      className="py-20 md:py-28 bg-[#F4F6F4] border-t border-[#E2E8E4]"
      aria-label="Contenu du kit ambassadeur remis aux partenaires validés"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#15803D] mb-3">
            <span className="w-2 h-0.5 bg-[#15803D]" />
            <span>Outils & Ressources Fournis</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0B3820] tracking-tight mb-4">
            Ce que vous recevez
          </h2>

          <p className="text-base sm:text-lg text-[#475B50] max-w-2xl">
            Dès validation officielle de votre candidature, IDSW met à votre disposition l'ensemble des éléments indispensables pour démarrer vos recommandations en toute confiance.
          </p>
        </div>

        {/* Minimalist 2-Column or 3-Column Grid without excessive ornamentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {ambassadorKitItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-2xl border border-[#D5E0DA] shadow-2xs hover:border-[#0B3820]/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EAEFEA] text-[#0B3820] flex items-center justify-center font-mono font-bold text-xs mb-4">
                0{index + 1}
              </div>
              <h3 className="font-display font-bold text-base text-[#0B3820] mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4E6256] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Strict Realism Note */}
        <div className="text-xs text-[#6A7C72] flex items-center gap-2 max-w-2xl">
          <ShieldCheck className="w-4 h-4 text-[#15803D] flex-shrink-0" />
          <span>
            Transparence IDSW : Les outils et modalités de suivi sont communiqués lors de la validation officielle du partenariat.
          </span>
        </div>
      </div>
    </section>
  );
};
