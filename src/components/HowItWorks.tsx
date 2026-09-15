import React, { useState } from 'react';
import { stepsData } from '../data/ambassadorData';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';

interface HowItWorksProps {
  onOpenForm: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenForm }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="comment-ca-marche"
      className="py-20 md:py-28 bg-[#FAFBF9] border-t border-[#E2E8E4] relative"
      aria-label="Processus en 5 étapes pour devenir ambassadeur"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#15803D] mb-3">
            <span className="w-2 h-0.5 bg-[#15803D]" />
            <span>Processus Transparent</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0B3820] tracking-tight mb-4">
            Comment ça marche
          </h2>
          <p className="text-base sm:text-lg text-[#4A5D52]">
            Un parcours structuré en 5 temps clairs, de votre manifestation d’intérêt jusqu’au versement de vos commissions.
          </p>
        </div>

        {/* Desktop Progressive Horizontal Timeline (lg screens) */}
        <div className="hidden lg:block mb-14">
          <div className="grid grid-cols-5 gap-6 relative">
            {/* Connecting baseline */}
            <div
              className="absolute top-7 left-[8%] right-[8%] h-[2px] bg-[#D8E2DC] -z-0"
              aria-hidden="true"
            />

            {stepsData.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-left group relative z-10 transition-all cursor-pointer p-3 rounded-xl ${
                    isSelected ? 'bg-white shadow-xs border border-[#CBD5CF]' : 'hover:bg-white/60'
                  }`}
                  aria-pressed={isSelected}
                >
                  {/* Step Bubble */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all ${
                        isSelected
                          ? 'bg-[#0B3820] text-[#EAB308] ring-4 ring-[#0B3820]/15'
                          : 'bg-white border-2 border-[#BAC7C0] text-[#334D3F] group-hover:border-[#0B3820]'
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3
                    className={`font-display font-bold text-base mb-2 uppercase tracking-wide transition-colors ${
                      isSelected ? 'text-[#0B3820]' : 'text-[#2D3E35] group-hover:text-[#0B3820]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#55695D] leading-relaxed">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Editorial Timeline (sm & md) */}
        <div className="block lg:hidden space-y-4 relative pl-6 border-l-2 border-[#D8E2DC] ml-4 mb-12">
          {stepsData.map((step, idx) => (
            <div key={step.number} className="relative group pt-1 pb-6 last:pb-1">
              {/* Timeline dot */}
              <div className="absolute -left-[35px] top-1.5 w-8 h-8 rounded-full bg-[#0B3820] text-[#EAB308] flex items-center justify-center font-display font-bold text-xs ring-4 ring-[#FAFBF9]">
                {step.number}
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#D5E0DA] shadow-2xs">
                <span className="text-[10.5px] font-bold text-[#15803D] uppercase tracking-wider block mb-1">
                  Étape {step.number}
                </span>
                <h3 className="font-display font-bold text-lg text-[#0B3820] uppercase tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#4E6256] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA & Guidance */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#D5E0DA] shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#0B3820] flex-shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#0B3820] block">
                Prêt à commencer dès aujourd’hui ?
              </span>
              <p className="text-xs sm:text-sm text-[#506357]">
                Le dépôt de candidature prend moins de 2 minutes.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0B3820] hover:bg-[#072615] transition-all flex-shrink-0"
          >
            <span>Candidater maintenant</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
