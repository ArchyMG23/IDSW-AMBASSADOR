import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../config/siteConfig';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFBF9]/90 backdrop-blur-md border-b border-[#E2E8E4] py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Left */}
          <a
            href="#"
            className="flex items-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B3820] rounded-lg"
            aria-label="IDSW Programme Ambassadeur Accueil"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-[13.5px] font-medium tracking-tight text-[#2B3E34]"
            aria-label="Navigation principale"
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#0B3820] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0B3820] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Right */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="header-cta-button"
              type="button"
              onClick={onOpenForm}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0B3820] hover:bg-[#072615] transition-all shadow-xs hover:shadow-sm active:scale-[0.98]"
            >
              <span>Devenir Ambassadeur</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right: Compact CTA + Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenForm}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-[#0B3820] active:bg-[#072615]"
            >
              Candidater
            </button>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B3820] hover:bg-[#EAEFEA] rounded-lg focus-visible:outline-hidden"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden border-b border-[#E2E8E4] bg-[#FAFBF9] px-6 py-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-semibold text-[#183023] py-2 border-b border-[#EEF2EF] hover:text-[#0B3820] active:text-[#0B3820]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#0B3820] active:bg-[#072615]"
              >
                <span>Devenir Ambassadeur</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
