import React from 'react';
import { ShieldCheck, XCircle, CheckCircle2 } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section
      id="confiance-responsabilites"
      className="py-20 md:py-28 bg-white border-t border-[#E2E8E4] relative"
      aria-label="Périmètre de responsabilité et cadre de confiance"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#15803D] mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparence & Intégrité</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B3820] tracking-tight leading-tight uppercase mb-4">
            VOUS RECOMMANDEZ.
            <span className="block text-[#15803D]">IDSW ACCOMPAGNE.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#3B4F43] max-w-2xl mx-auto">
            Une répartition claire des rôles pour préserver la confiance de votre réseau et garantir un traitement professionnel de chaque dossier.
          </p>
        </div>

        {/* Comparison Grid: Ce que l'ambassadeur ne garantit pas vs Ce que l'ambassadeur fait */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Box 1: Périmètre de l'ambassadeur (Orientation) */}
          <div className="p-7 rounded-2xl bg-[#FAFBF9] border border-[#D5E0DA] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-[#0B3820] mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#15803D]" />
                <span>Votre Rôle en tant qu'Ambassadeur</span>
              </div>
              <ul className="space-y-3.5 text-sm text-[#3E5246]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-2 flex-shrink-0" />
                  <span>Présenter les services IDSW aux personnes de votre entourage désireuses d'étudier ou se former en Allemagne.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-2 flex-shrink-0" />
                  <span>Transmettre votre code ou lien de recommandation officiel.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-2 flex-shrink-0" />
                  <span>Orienter les candidats vers les conseillers et campus IDSW pour une prise en charge experte.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Box 2: Ce que l'ambassadeur ne garantit PAS */}
          <div className="p-7 rounded-2xl bg-[#FFFBFB] border border-[#F0D5D5] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-[#991B1B] mb-4">
                <XCircle className="w-5 h-5 text-[#DC2626]" />
                <span>Ce que l'ambassadeur n'a pas pour rôle de garantir</span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#7F1D1D] mb-3">
                Pour assurer la rigueur et la déontologie du programme, l’ambassadeur ne formule aucune promesse formelle :
              </p>
              <ul className="space-y-2.5 text-sm text-[#7F1D1D]/90">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-[#DC2626]">•</span>
                  <span>Aucune garantie d’obtention de visa</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-[#DC2626]">•</span>
                  <span>Aucune garantie d’admission universitaire ou scolaire</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-[#DC2626]">•</span>
                  <span>Aucune garantie d’emploi ou de contrat de travail</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-[#DC2626]">•</span>
                  <span>Aucun résultat administratif contraignant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* IDSW Official Responsibility Statement */}
        <div className="max-w-4xl mx-auto mt-8 p-5 rounded-xl bg-[#FAFBF9] border border-[#E2E8E4] text-center">
          <p className="text-xs sm:text-sm text-[#4E6256] leading-relaxed">
            <strong className="text-[#0B3820]">Responsabilité institutionnelle IDSW :</strong> L’institut demeure seul responsable de l’information officielle, des cours linguistiques, de l’instruction rigoureuse des dossiers et de l’accompagnement administratif conformément à ses procédures légales et réglementaires.
          </p>
        </div>
      </div>
    </section>
  );
};
