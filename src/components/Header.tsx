import React, { useState, useEffect } from 'react';
import type { ActiveExperience, Language } from '../types';
import { translations } from '../i18n/translations';
import { ProMediaLogo } from './ProMediaLogo';
import { ProTechLogo } from './ProTechLogo';
import { Menu, X, ArrowLeft, ArrowRight, Cpu, Film, Globe } from 'lucide-react';

interface HeaderProps {
  activeExperience: ActiveExperience;
  onSwitchExperience: (exp: ActiveExperience) => void;
  onNavigate: (sectionId: string) => void;
  lang: Language;
  onToggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeExperience,
  onSwitchExperience,
  onNavigate,
  lang,
  onToggleLanguage,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;
  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isProTech = activeExperience === 'protech';

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled
          ? isProTech
            ? 'rgba(11, 19, 37, 0.95)'
            : 'rgba(7, 11, 20, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo - Dynamic Switch */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {isProTech ? (
            <button
              onClick={() => onSwitchExperience('studio')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: isRtl ? 'right' : 'left' }}
              title="Click to explore ProTech"
            >
              <ProTechLogo />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: 'rgba(220, 38, 38, 0.15)',
                  color: 'var(--brand-red)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-pill)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {lang === 'ar' ? 'نمط برو تك' : 'ProTech Mode'}
              </span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate('hero')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              {/* Mandatory White Container Rule on Dark Background */}
              <ProMediaLogo isDarkBackground={true} />
            </button>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }}>
          {!isProTech ? (
            <>
              <button onClick={() => handleNavClick('hero')} className="nav-link">
                {t.home}
              </button>
              <button onClick={() => handleNavClick('locations')} className="nav-link">
                {t.locations}
              </button>
              <button
                onClick={() => onSwitchExperience('protech')}
                className="nav-link-protech"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  padding: '0.4rem 0.9rem',
                  borderRadius: 'var(--radius-pill)',
                  background: 'linear-gradient(135deg, var(--brand-red) 0%, #B91C1C 100%)',
                  boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)',
                  transition: 'all 0.2s ease',
                }}
              >
                <Cpu size={15} /> {t.protech}
              </button>
              <button onClick={() => handleNavClick('about')} className="nav-link">
                {t.about}
              </button>
              <button onClick={() => handleNavClick('contact')} className="nav-link">
                {t.contact}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onSwitchExperience('studio')}
                className="nav-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--brand-red)',
                  fontWeight: 700,
                }}
              >
                {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                {t.backToStudio}
              </button>
              <button onClick={() => handleNavClick('protech-products')} className="nav-link">
                {t.products}
              </button>
              <button onClick={() => handleNavClick('protech-impact')} className="nav-link">
                {t.impact}
              </button>
              <button onClick={() => handleNavClick('protech-cta')} className="nav-link">
                {t.contact}
              </button>
            </>
          )}
        </nav>

        {/* Right Action Bar: Language Switcher & Desktop CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Language Switcher Badge: EN | العربية */}
          <button
            onClick={onToggleLanguage}
            className="lang-switcher-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: '#FFFFFF',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            title={lang === 'en' ? 'Switch to Arabic' : 'الانتقال إلى الإنجليزية'}
          >
            <Globe size={15} style={{ color: 'var(--brand-red)' }} />
            <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
          </button>

          {/* Desktop CTA */}
          <div className="desktop-nav" style={{ display: 'none' }}>
            {!isProTech ? (
              <button onClick={() => handleNavClick('contact')} className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                {t.exploreSpaces}
              </button>
            ) : (
              <button onClick={() => handleNavClick('protech-cta')} className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                {t.startProject}
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              color: '#FFFFFF',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="animate-fade-in"
          style={{
            backgroundColor: 'var(--bg-dark-navy)',
            borderBottom: '1px solid var(--border-dark)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {!isProTech ? (
            <>
              <button
                onClick={() => handleNavClick('hero')}
                style={{ textAlign: isRtl ? 'right' : 'left', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark-primary)' }}
              >
                {t.home}
              </button>
              <button
                onClick={() => handleNavClick('locations')}
                style={{ textAlign: isRtl ? 'right' : 'left', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark-primary)' }}
              >
                {t.locations}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSwitchExperience('protech');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  backgroundColor: 'var(--brand-red)',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  justifyContent: 'center',
                }}
              >
                <Cpu size={18} /> {t.switchProtech}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                style={{ textAlign: isRtl ? 'right' : 'left', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark-primary)' }}
              >
                {t.about}
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                style={{ textAlign: isRtl ? 'right' : 'left', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark-primary)' }}
              >
                {t.contact}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSwitchExperience('studio');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  justifyContent: 'center',
                }}
              >
                <Film size={18} /> {t.switchStudio}
              </button>
              <button
                onClick={() => handleNavClick('protech-products')}
                style={{ textAlign: isRtl ? 'right' : 'left', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark-primary)' }}
              >
                {t.products}
              </button>
              <button
                onClick={() => handleNavClick('protech-impact')}
                style={{ textAlign: isRtl ? 'right' : 'left', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark-primary)' }}
              >
                {t.impact}
              </button>
              <button
                onClick={() => handleNavClick('protech-cta')}
                style={{ textAlign: isRtl ? 'right' : 'left', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark-primary)' }}
              >
                {t.contact}
              </button>
            </>
          )}
        </div>
      )}

      {/* Inline styles for media query responsiveness */}
      <style>{`
        .lang-switcher-btn:hover {
          background-color: rgba(255, 255, 255, 0.18) !important;
          border-color: var(--brand-red) !important;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-dark-secondary);
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #FFFFFF;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
