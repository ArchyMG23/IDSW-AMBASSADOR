import React from 'react';
import { ArrowRight, ArrowDown, Check, Info } from 'lucide-react';

const pipelineStages = [
  { id: '1', title: 'PROSPECT', desc: 'Contact orienté par vos soins' },
  { id: '2', title: 'CANDIDATURE', desc: 'Dépôt du dossier chez IDSW' },
  { id: '3', title: 'INSCRIPTION', desc: 'Confirmation formelle du cursus' },
  { id: '4', title: 'VALIDATION', desc: 'Contrôle de conformité IDSW' },
  { id: '5', title: 'COMMISSION', desc: 'Attribution de vos 10 000 FCFA' },
];

export const CommissionPipeline: React.FC = () => {
  return (
    <section
      id="processus-commission"
      className="py-16 md:py-24 bg-[#F4F6F4] border-t border-[#E2E8E4]"
      aria-label="Schéma du cycle de validation de la commission"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#15803D] mb-3">
            <span className="w-2 h-0.5 bg-[#15803D]" />
            <span>Transparence Financière</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0B3820] tracking-tight mb-3">
            Le Cycle d’Attribution de la Commission
          </h2>

          <p className="text-sm sm:text-base text-[#4C6054]">
            Chaque étape est documentée pour assurer une traçabilité totale entre votre recommandation et votre rétribution.
          </p>
        </div>

        {/* Pipeline Flow: Horizontal on Desktop, Vertical on Mobile */}
        <div className="max-w-5xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-[#D5E0DA] shadow-xs mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {pipelineStages.map((stage, idx) => (
              <React.Fragment key={stage.id}>
                <div className="flex flex-col items-center text-center w-full md:w-auto flex-1">
                  <div className="w-9 h-9 rounded-full bg-[#FAFBF9] border border-[#CBD7D0] flex items-center justify-center font-mono font-bold text-xs text-[#0B3820] mb-2">
                    0{stage.id}
                  </div>
                  <span className="font-display font-black text-sm tracking-wider uppercase text-[#0B3820]">
                    {stage.title}
                  </span>
                  <span className="text-[11px] text-[#55695D] mt-1 max-w-[130px] leading-tight">
                    {stage.desc}
                  </span>
                </div>

                {/* Arrow Divider between stages */}
                {idx < pipelineStages.length - 1 && (
                  <div className="text-[#8DA195] py-1 md:py-0">
                    <ArrowRight className="hidden md:block w-4 h-4" />
                    <ArrowDown className="block md:hidden w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Strict Regulatory Notice */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-white border border-[#E2E8E4] flex items-start gap-3 text-xs sm:text-[13px] text-[#475C50] leading-relaxed">
          <Info className="w-4 h-4 text-[#0B3820] flex-shrink-0 mt-0.5" />
          <p>
            « Une recommandation ne déclenche pas automatiquement une commission. La commission est liée à une inscription remplissant les conditions de validation du programme. »
          </p>
        </div>
      </div>
    </section>
  );
};
