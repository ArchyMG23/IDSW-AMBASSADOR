import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import heroPhoto from '../assets/images/ambassador_hero_1789484585358.jpg';

interface HeroProps {
  onOpenForm: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenForm, onExplore }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden"
      aria-label="Section d'introduction du programme ambassadeur"
    >
      {/* Background subtle atmospheric gradient glow */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#15803D]/6 via-[#EAB308]/4 to-transparent blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Key Strategic Narrative (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Editorial Program Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3820]/8 border border-[#0B3820]/15 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse" />
              <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#0B3820]">
                Programme Ambassadeur IDSW
              </span>
              <span className="text-zinc-300 text-xs">•</span>
              <span className="text-[11px] font-medium text-[#4A5D52]">Édition Officielle</span>
            </div>

            {/* Strategic Slogan */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] text-[#0A2616] tracking-tight mb-6">
              Votre réseau peut devenir{' '}
              <span className="text-[#0B3820] relative inline-block">
                une source de revenus
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-2 text-[#EAB308]/60"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 6 Q 50 1 100 6" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
              </span>
              .
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#384C41] font-normal leading-relaxed max-w-2xl mb-8">
              Recommandez des étudiants et talents intéressés par les cursus de formation et d’études en Allemagne avec{' '}
              <strong className="font-semibold text-[#0B3820]">IDSW (Institut Der Sicherste Weg)</strong>.
            </p>

            {/* The 10 000 FCFA Commission Callout Banner */}
            <div className="w-full max-w-xl p-5 sm:p-6 rounded-2xl bg-white border border-[#D5E0DA] shadow-xs hover:border-[#0B3820]/40 transition-colors mb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#EAEFEA] pb-3 mb-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#0B3820] tracking-tight">
                    10 000 FCFA
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#5B6D62] uppercase tracking-wide">
                    par inscription validée
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#15803D] bg-[#DCFCE7]/70 px-2.5 py-1 rounded-full w-fit">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Validation officielle IDSW</span>
                </div>
              </div>
              <p className="text-xs sm:text-[13px] text-[#4F6257] leading-relaxed">
                Chaque étudiant recommandé dont l’inscription est validée selon les conditions du programme déclenche votre commission.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={onOpenForm}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-[#0B3820] hover:bg-[#072615] transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                <span>Devenir Ambassadeur</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                type="button"
                onClick={onExplore}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#163625] bg-[#EAEFEA] hover:bg-[#DDE5DD] transition-colors"
              >
                <span>Découvrir le programme</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Reassurance Micro-Items */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#526359] pt-2 border-t border-[#E8EDE9] w-full max-w-xl">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#15803D]" />
                <span>Adhésion 100% gratuite</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#EAB308]" />
                <span>Kit & code personnel fournis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                <span>Accompagnement de l'équipe</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photograph & Realism Badge (5 cols on lg) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer photo frame with clean, subtle border */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D5DFD8] shadow-md bg-white p-2">
                <div className="aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3] rounded-xl overflow-hidden bg-[#E2EAE5] relative">
                  <img
                    src={heroPhoto}
                    alt="Jeune professionnel africain connecté avec son réseau"
                    className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    width={800}
                    height={600}
                  />

                  {/* Gradient bottom shadow inside photo for text badge contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* On-Image Editorial Caption */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#EAB308]" />
                      <span className="text-xs font-semibold tracking-wide drop-shadow-xs">
                        Réseau • Mobilité • Allemagne
                      </span>
                    </div>
                    <span className="text-[11px] font-medium opacity-90 drop-shadow-xs">
                      IDSW Partenariat
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Confidence Badge */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white p-3.5 rounded-xl border border-[#D5DFD8] shadow-md flex items-center gap-3 max-w-[260px]">
                <div className="w-10 h-10 rounded-lg bg-[#0B3820] text-[#EAB308] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  IDSW
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0B3820] leading-tight">
                    Institut Der Sicherste Weg
                  </span>
                  <span className="text-[11px] text-[#55675C] mt-0.5">
                    Formation linguistique & études en Allemagne
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
