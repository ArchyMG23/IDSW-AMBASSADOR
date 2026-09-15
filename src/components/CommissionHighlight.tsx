import React from 'react';
import { ShieldCheck, FileCheck2, AlertCircle } from 'lucide-react';

export const CommissionHighlight: React.FC = () => {
  return (
    <section
      id="commission-section"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
      aria-label="Montant et conditions de la commission ambassadeur"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAEFEA] text-xs font-bold uppercase tracking-widest text-[#0B3820] mb-8">
          <FileCheck2 className="w-3.5 h-3.5 text-[#15803D]" />
          <span>Barème Officiel du Programme</span>
        </div>

        {/* Huge Commission Display */}
        <div className="mb-4">
          <div className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#0B3820] tracking-tight leading-none selection:bg-[#EAB308]/30">
            10 000 FCFA
          </div>
          <div className="font-display font-bold text-lg sm:text-2xl md:text-3xl text-[#5A6D62] tracking-wider uppercase mt-4">
            PAR INSCRIPTION VALIDÉE
          </div>
        </div>

        {/* Rigorous & Transparent Explanation */}
        <div className="max-w-2xl mx-auto mt-8 mb-10">
          <p className="text-lg sm:text-xl text-[#283830] font-medium leading-relaxed">
            « Chaque inscription validée issue de votre recommandation peut générer une commission de 10 000 FCFA, conformément aux conditions du programme. »
          </p>
        </div>

        {/* Professional Ethics & Transparency Notice */}
        <div className="max-w-xl mx-auto p-4 sm:p-5 rounded-xl bg-[#FAFBF9] border border-[#E2E8E4] text-left flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-[#0B3820] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-[13px] text-[#55695E] leading-relaxed">
            <span className="font-semibold text-[#183023] block mb-1">
              Cadre professionnel & éthique
            </span>
            La rémunération est strictement indexée sur la validation administrative effective de l’inscription de l’étudiant auprès d’IDSW. Ce programme valorise un travail qualitatif d'orientation et ne constitue ni un revenu garanti, ni une promesse d'enrichissement.
          </div>
        </div>
      </div>
    </section>
  );
};
