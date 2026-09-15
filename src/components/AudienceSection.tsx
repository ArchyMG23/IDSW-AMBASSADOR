import React from 'react';
import { audienceProfiles } from '../data/ambassadorData';
import { Check, Sparkles } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  return (
    <section
      id="qui-peut-participer"
      className="py-20 md:py-28 bg-white border-t border-[#E2E8E4] relative"
      aria-label="Profils éligibles au programme ambassadeur"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#15803D] mb-3">
            <span className="w-2 h-0.5 bg-[#15803D]" />
            <span>Éligibilité & Diversité des Talents</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#0B3820] tracking-tight leading-tight uppercase mb-5">
            Votre profil n'est pas le plus important.{' '}
            <span className="text-[#15803D] block sm:inline">Votre réseau l'est.</span>
          </h2>

          {/* Inclusive Framing Statement */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#FAFBF9] border-l-4 border-[#0B3820] border-y border-r border-[#E2E8E4]">
            <p className="text-base sm:text-lg text-[#20362A] font-medium leading-relaxed">
              « Vous disposez d'un réseau pertinent et souhaitez contribuer au développement de projets d'étudiants ? Vous pouvez candidater. »
            </p>
          </div>
        </div>

        {/* Profiles Grid - Asymmetrical Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {audienceProfiles.map((profile, idx) => (
            <div
              key={profile.title}
              className="p-6 rounded-2xl bg-[#FAFBF9] border border-[#E2E8E4] hover:border-[#0B3820]/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#83978C]">
                    0{idx + 1}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#EAEFEA] text-[#15803D] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-[#0B3820] mb-2">
                  {profile.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#506458] leading-relaxed">
                  {profile.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Open Eligibility Notice */}
        <p className="text-xs sm:text-sm text-center text-[#617469] max-w-2xl mx-auto">
          Aucun prérequis de diplôme spécifique ni d'expérience préalable n'est exigé. L'essentiel réside dans votre sérieux, votre écoute et la qualité de vos orientations.
        </p>
      </div>
    </section>
  );
};
