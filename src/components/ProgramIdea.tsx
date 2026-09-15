import React from 'react';
import { Users2, ArrowUpRight, Share2, Sparkles } from 'lucide-react';

export const ProgramIdea: React.FC = () => {
  return (
    <section
      id="le-programme"
      className="py-20 md:py-28 bg-[#F4F6F4] border-y border-[#E2E8E4] relative overflow-hidden"
      aria-label="Présentation du concept du programme"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Strong Editorial Typography */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#15803D] mb-4">
              <span className="w-2 h-0.5 bg-[#15803D]" />
              <span>Le Concept Fondateur</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0B3820] tracking-tight leading-[1.15] mb-4">
              VOUS AVEZ UN RÉSEAU.
            </h2>

            <p className="font-display text-xl sm:text-2xl font-semibold text-[#1C3A2B] mb-6">
              Transformez vos recommandations en opportunités.
            </p>

            <div className="text-base sm:text-lg text-[#3C5045] leading-relaxed max-w-xl space-y-4">
              <p>
                Le programme Ambassadeur IDSW permet à des partenaires de recommander des étudiants intéressés par les services IDSW et de recevoir une commission lorsqu'une inscription recommandée est validée.
              </p>
              <p className="text-sm text-[#54695D]">
                Autour de vous, des étudiants, proches et collègues nourrissent le projet de se former ou d’étudier en Allemagne. En les orientant vers un institut de référence, vous valorisez votre relation tout en créant une rétribution concrète.
              </p>
            </div>
          </div>

          {/* Right: Modern, Minimalist Connection/Network Visualization */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-[#D5E0DA] p-6 sm:p-8 shadow-xs relative">
              <div className="flex items-center justify-between border-b border-[#EEF3F0] pb-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3820]">
                  Dynamique de Recommandation
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded-md">
                  <Sparkles className="w-3 h-3" />
                  Fluide & Traçable
                </span>
              </div>

              {/* Network Schematic Graphic */}
              <div className="relative py-4">
                <svg
                  className="w-full h-44 text-[#0B3820]"
                  viewBox="0 0 320 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Connection Lines */}
                  <line x1="60" y1="80" x2="160" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="60" y1="80" x2="160" y2="120" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="160" y1="40" x2="260" y2="80" stroke="#0B3820" strokeWidth="2" />
                  <line x1="160" y1="120" x2="260" y2="80" stroke="#0B3820" strokeWidth="2" />

                  {/* Node 1: Vous (Ambassadeur) */}
                  <circle cx="60" cy="80" r="24" fill="#0B3820" />
                  <text x="60" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="sans-serif">
                    VOUS
                  </text>

                  {/* Node 2A: Étudiant A */}
                  <circle cx="160" cy="40" r="18" fill="#F1F5F3" stroke="#94A3B8" strokeWidth="1.5" />
                  <text x="160" y="44" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="600" fontFamily="sans-serif">
                    Contact
                  </text>

                  {/* Node 2B: Étudiant B */}
                  <circle cx="160" cy="120" r="18" fill="#F1F5F3" stroke="#94A3B8" strokeWidth="1.5" />
                  <text x="160" y="124" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="600" fontFamily="sans-serif">
                    Réseau
                  </text>

                  {/* Node 3: IDSW Inscription Validée */}
                  <circle cx="260" cy="80" r="28" fill="#EAB308" />
                  <circle cx="260" cy="80" r="24" fill="#0B3820" />
                  <text x="260" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800" fontFamily="sans-serif">
                    IDSW
                  </text>
                  <text x="260" y="90" textAnchor="middle" fill="#EAB308" fontSize="8" fontWeight="700" fontFamily="sans-serif">
                    VALIDATION
                  </text>
                </svg>
              </div>

              {/* Concise Takeaway Box */}
              <div className="mt-4 pt-4 border-t border-[#EEF3F0] flex items-center justify-between text-xs text-[#4A5D52]">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#0B3820]" />
                  <span>Partage d’information ciblé</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-[#0B3820]">
                  <span>10 000 FCFA</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
