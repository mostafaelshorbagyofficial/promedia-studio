import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { ArrowRight, ArrowLeft, ShieldCheck, Cpu } from 'lucide-react';

interface HeroStudioProps {
  onExploreLocations: () => void;
  onSwitchToProTech: () => void;
  lang: Language;
}

export const HeroStudio: React.FC<HeroStudioProps> = ({
  onExploreLocations,
  onSwitchToProTech,
  lang,
}) => {
  const t = translations[lang].heroStudio;
  const isRtl = lang === 'ar';

  return (
    <section
      id="hero"
      className="section-dark-deep"
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '7rem',
      }}
    >
      {/* Background Image with Cinematic Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/studios/location-01/image-01.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.38,
          filter: 'contrast(1.05) brightness(0.85)',
          transform: 'scale(1.03)',
        }}
      />

      {/* Radial Gradient Vignette for Depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 60% 40%, rgba(11, 19, 37, 0.4) 0%, rgba(7, 11, 20, 0.95) 85%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '780px' }} className="animate-fade-in">
          {/* Trust Statement Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-pill)',
              color: '#FFFFFF',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.75rem',
            }}
          >
            <ShieldCheck size={16} style={{ color: 'var(--brand-red)' }} />
            <span>{t.trustBadge}</span>
          </div>

          {/* Main Hero Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              marginBottom: '1.25rem',
            }}
          >
            {t.titleMain}<span style={{ color: 'var(--brand-red)' }}>{t.titleRed}</span>
          </h1>

          {/* Concise Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
              lineHeight: 1.55,
              color: 'var(--text-dark-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '620px',
              fontWeight: 400,
            }}
          >
            {t.subtitle}
          </p>

          {/* Call to Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <button
              onClick={onExploreLocations}
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.95rem 2rem', gap: '0.5rem' }}
            >
              <span>{t.ctaLocations}</span>
              {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </button>

            <button
              onClick={onSwitchToProTech}
              className="btn-secondary-dark"
              style={{
                fontSize: '1rem',
                padding: '0.95rem 1.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Cpu size={18} style={{ color: 'var(--brand-red)' }} />
              <span>{t.ctaProtech}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
