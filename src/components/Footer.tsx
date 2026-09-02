import React from 'react';
import type { ActiveExperience, Language } from '../types';
import { translations } from '../i18n/translations';
import { ProMediaLogo } from './ProMediaLogo';
import { ProTechLogo } from './ProTechLogo';
import { ArrowUpRight, Cpu } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

interface FooterProps {
  activeExperience: ActiveExperience;
  onSwitchExperience: (exp: ActiveExperience) => void;
  onNavigate: (sectionId: string) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({
  activeExperience,
  onSwitchExperience,
  onNavigate,
  lang,
}) => {
  const t = translations[lang].footer;
  const isProTech = activeExperience === 'protech';

  return (
    <footer className="section-dark-deep" style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '4rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              {!isProTech ? (
                /* MANDATORY RULE: On dark footer background, ProMedia logo MUST have white container badge */
                <ProMediaLogo isDarkBackground={true} />
              ) : (
                <ProTechLogo />
              )}
            </div>
            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.925rem', maxWidth: '340px', lineHeight: 1.6 }}>
              {!isProTech ? t.studioDesc : t.protechDesc}
            </p>

            {/* Social Media Links for ProMedia - Strictly Instagram, Facebook, TikTok (NO YOUTUBE) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href="https://www.instagram.com/pro_mediagroup23?igsi=MWF0aWdndWpyeDM0OA=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1BjRsb7N7m/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@promediagroup1?_r=1&_t=ZS-99Oqb7PMDuG"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {!isProTech ? t.studioHeading : t.protechHeading}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {!isProTech ? (
                <>
                  <li><button onClick={() => onNavigate('hero')} className="footer-link">{translations[lang].nav.home}</button></li>
                  <li><button onClick={() => onNavigate('locations')} className="footer-link">{translations[lang].nav.locations}</button></li>
                  <li><button onClick={() => onNavigate('about')} className="footer-link">{translations[lang].nav.about}</button></li>
                  <li><button onClick={() => onNavigate('contact')} className="footer-link">{translations[lang].nav.contact}</button></li>
                </>
              ) : (
                <>
                  <li><button onClick={() => onNavigate('protech-products')} className="footer-link">{translations[lang].nav.products}</button></li>
                  <li><button onClick={() => onNavigate('protech-impact')} className="footer-link">{translations[lang].nav.impact}</button></li>
                  <li><button onClick={() => onNavigate('protech-cta')} className="footer-link">{translations[lang].nav.contact}</button></li>
                </>
              )}
            </ul>
          </div>

          {/* Ecosystem Switcher Box */}
          <div
            style={{
              backgroundColor: 'var(--bg-dark-card)',
              border: '1px solid var(--border-dark-hover)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div>
              <span className="badge-tag badge-tag-dark" style={{ marginBottom: '0.75rem' }}>
                {lang === 'ar' ? 'منظومة إيكوسيستم' : 'Ecosystem'}
              </span>
              <h5 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                {!isProTech ? t.ecosystemTitleStudio : t.ecosystemTitleProtech}
              </h5>
              <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.875rem' }}>
                {!isProTech ? t.ecosystemSubStudio : t.ecosystemSubProtech}
              </p>
            </div>

            <button
              onClick={() => onSwitchExperience(!isProTech ? 'protech' : 'studio')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: !isProTech ? 'var(--brand-red)' : 'rgba(255,255,255,0.1)',
                color: '#FFFFFF',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: 700,
                fontSize: '0.875rem',
                transition: 'all 0.2s ease',
                width: '100%',
              }}
            >
              <span>{!isProTech ? translations[lang].nav.switchProtech : translations[lang].nav.switchStudio}</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-dark)',
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          className="footer-bottom"
        >
          <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
            {t.rights}
          </p>

          {/* Powered by ProTech Attribution */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-dark-secondary)' }}>
            <span>{t.poweredBy}</span>
            <button
              onClick={() => onSwitchExperience('protech')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'rgba(220, 38, 38, 0.12)',
                color: 'var(--brand-red)',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(220, 38, 38, 0.25)',
                fontSize: '0.8rem',
                fontWeight: 700,
              }}
            >
              <Cpu size={14} /> ProTech
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-pill);
          background-color: var(--bg-dark-card);
          color: var(--text-dark-secondary);
          border: 1px solid var(--border-dark);
          transition: all 0.2s ease;
        }
        .social-btn:hover {
          color: #FFFFFF;
          background-color: var(--brand-red);
          border-color: var(--brand-red);
          transform: translateY(-2px);
        }
        .footer-link {
          font-size: 0.9rem;
          color: var(--text-dark-secondary);
          transition: color 0.2s ease;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }
        .footer-link:hover {
          color: #FFFFFF;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1.5fr !important;
          }
          .footer-bottom {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
};
