import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
  variant?: 'badge' | 'compact';
}

export const Logo: React.FC<LogoProps> = ({ className = '', isLight = false, variant = 'badge' }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src="/assets/btn_logo_IDSW.png"
        alt="IDSW - Institut Der Sicherste Weg"
        className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

