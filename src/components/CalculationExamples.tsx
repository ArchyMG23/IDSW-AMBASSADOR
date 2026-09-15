import React, { useState } from 'react';
import { calculationExamples } from '../data/ambassadorData';
import { Calculator, AlertCircle, TrendingUp } from 'lucide-react';

export const CalculationExamples: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(5);
  const calculatedTotal = (sliderValue * 10000).toLocaleString('fr-FR');

  return (
    <section
      id="exemples-calcul"
      className="py-20 md:py-28 bg-white border-t border-[#E2E8E4]"
      aria-label="Exemples de calcul indicatifs des commissions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#15803D] mb-3">
            <Calculator className="w-4 h-4" />
            <span>Simulateur & Barème</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0B3820] tracking-tight mb-4">
            Exemples de Calcul
          </h2>

          <p className="text-base sm:text-lg text-[#475C50]">
            Une formule arithmétique simple et constante : <strong className="text-[#0B3820]">10 000 FCFA</strong> par inscription validée.
          </p>
        </div>

        {/* 3 Reference Benchmark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {calculationExamples.map((item) => (
            <div
              key={item.label}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAFBF9] border border-[#D5E0DA] shadow-2xs hover:border-[#0B3820]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] block mb-2">
                  Hypothèse de calcul
                </span>
                <div className="font-display font-bold text-lg text-[#192E23] mb-4">
                  {item.label}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8E4]">
                <div className="font-display font-black text-3xl sm:text-4xl text-[#0B3820] tracking-tight">
                  {item.amount}
                </div>
                <div className="text-xs text-[#5D6F65] mt-1.5">{item.note}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Math Sandbox Slider */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#FAFBF9] border border-[#CBD7D0] shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B3820]">
                Ajustez pour simuler selon votre réseau
              </span>
              <p className="text-xs text-[#55695D]">
                Sélectionnez un nombre d'inscriptions validées pour observer le montant total calculé.
              </p>
            </div>
            <div className="text-right">
              <span className="font-display font-black text-2xl text-[#0B3820]">
                {sliderValue} {sliderValue > 1 ? 'inscriptions' : 'inscription'}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <input
              id="calculator-slider"
              type="range"
              min="1"
              max="20"
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value, 10))}
              className="w-full h-2.5 bg-[#D5E0DA] rounded-lg appearance-none cursor-pointer accent-[#0B3820]"
              aria-label="Nombre d'inscriptions validées simulées"
            />
            <div className="flex justify-between text-[11px] text-[#697B71] font-mono mt-2">
              <span>1</span>
              <span>5</span>
              <span>10</span>
              <span>15</span>
              <span>20</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white border border-[#DCE4DF]">
            <div className="flex items-center gap-2.5">
              <TrendingUp className="w-5 h-5 text-[#15803D]" />
              <span className="text-sm font-semibold text-[#1C3227]">
                Commission totale calculée :
              </span>
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#0B3820]">
              {calculatedTotal} FCFA
            </div>
          </div>
        </div>

        {/* Mandatory Transparency Disclaimer */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#62756B] leading-relaxed">
            <strong className="text-[#0B3820]">Rappel impératif :</strong> Ces chiffres constituent exclusivement des exemples de calcul arithmétique. Ils ne sauraient constituer une promesse, une garantie de gain ou un engagement de résultat. La commission dépend strictement des inscriptions effectives et validées par IDSW.
          </p>
        </div>
      </div>
    </section>
  );
};
