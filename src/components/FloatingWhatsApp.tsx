import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2"
    >
      {/* Subtle contextual tooltip on desktop */}
      <div className="hidden sm:flex items-center gap-2 py-1.5 px-3 rounded-full bg-white text-[#0B3820] text-xs font-semibold shadow-md border border-[#D5E0DA]">
        <span>Besoin d'un renseignement ?</span>
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="text-[#8DA195] hover:text-[#0B3820] p-0.5 rounded-full"
          aria-label="Masquer l'infobulle"
        >
          <X className="w-3 h-3" />
        </button>
      </div>

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-button"
        href={siteConfig.whatsapp.getLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#15803D] hover:bg-[#166534] text-white flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all relative group"
        aria-label="Contacter IDSW sur WhatsApp pour le programme Ambassadeur"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#EAB308] rounded-full border-2 border-white animate-pulse" />
        <MessageSquare className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};
