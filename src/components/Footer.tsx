import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Globe, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const [campusesExpanded, setCampusesExpanded] = useState(false);

  return (
    <footer
      id="main-footer"
      className="bg-[#081B11] text-[#E2EAE5] pt-16 pb-12 border-t border-[#123020]"
      aria-label="Pied de page et contacts officiels IDSW"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand + Quick Links + Digital Touchpoints */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#143B25]">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="md:col-span-5">
            <Logo isLight className="mb-4" />
            <p className="text-sm text-[#A3B8AD] leading-relaxed max-w-sm mb-5">
              <strong className="text-white">IDSW (Institut Der Sicherste Weg)</strong> accompagne les personnes intéressées par les opportunités de formation, d’études et de projets liés à l’Allemagne.
            </p>
            <div className="text-xs text-[#7F9A8C]">
              Programme Ambassadeur officiel • Édition 2026
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308] block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm text-[#C4D5CB]">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#candidature"
                  className="text-[#86EFAC] hover:underline font-semibold flex items-center gap-1.5"
                >
                  <span>Formulaire de Candidature</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Central Digital Contact (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308] block mb-4">
              Canaux Officiels
            </span>
            <div className="space-y-3 text-sm text-[#C4D5CB]">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#EAB308]" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <a
                href={siteConfig.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-[#EAB308]" />
                <span>{siteConfig.contact.websiteDisplay}</span>
              </a>

              <a
                href={siteConfig.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#86EFAC] hover:text-white transition-colors font-medium"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp : {siteConfig.whatsapp.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Nos Campus (Clean, Non-bloated presentation) */}
        <div className="py-8 border-b border-[#143B25]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308] block">
                Nos 6 Campus
              </span>
              <p className="text-xs text-[#8BA396] mt-0.5">
                Cameroun (Yaoundé, Douala, Nkoabang) & Sénégal (Dakar)
              </p>
            </div>

            {/* Mobile accordion toggle */}
            <button
              type="button"
              onClick={() => setCampusesExpanded(!campusesExpanded)}
              className="md:hidden flex items-center gap-1.5 text-xs font-semibold text-[#86EFAC] bg-[#123020] px-3 py-1.5 rounded-lg"
            >
              <span>{campusesExpanded ? 'Réduire' : 'Afficher les 6 campus'}</span>
              {campusesExpanded ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Grid: Always visible on desktop, toggleable on mobile to prevent clutter */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${
              campusesExpanded ? 'block' : 'hidden md:grid'
            }`}
          >
            {siteConfig.campuses.map((campus) => (
              <div
                key={campus.id}
                className="p-3.5 rounded-xl bg-[#0F291B] border border-[#18462B] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs text-white">
                      {campus.name}
                    </span>
                    <span className="text-[10px] text-[#EAB308] font-mono px-1.5 py-0.5 rounded bg-black/20">
                      {campus.city}
                    </span>
                  </div>
                  <p className="text-xs text-[#9BB1A5] flex items-center gap-1.5 mb-2">
                    <MapPin className="w-3 h-3 text-[#EAB308] flex-shrink-0" />
                    <span>{campus.location}</span>
                  </p>
                </div>
                <a
                  href={`tel:${campus.phoneRaw}`}
                  className="text-xs text-[#86EFAC] hover:text-white flex items-center gap-1.5 pt-1.5 border-t border-[#18462B]"
                >
                  <Phone className="w-3 h-3 flex-shrink-0" />
                  <span>{campus.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Mentions & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A9385]">
          <p>
            © {new Date().getFullYear()} IDSW — Institut Der Sicherste Weg. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <span>Programme Ambassadeur</span>
            <span>Conditions d’attribution des commissions</span>
            <a
              href={siteConfig.contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              idsw.net
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
