import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { ArrowRight, ArrowLeft, Sparkles, Film } from 'lucide-react';

interface HeroProTechProps {
  onExploreProducts: () => void;
  onReturnToStudio: () => void;
  lang: Language;
}

export const HeroProTech: React.FC<HeroProTechProps> = ({
  onExploreProducts,
  onReturnToStudio,
  lang,
}) => {
  const t = translations[lang].heroProTech;
  const isRtl = lang === 'ar';

  return (
    <section
      id="protech-hero"
      className="section-dark-deep"
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '7.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Grid Background Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          opacity: 0.5,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '800px' }} className="animate-fade-in">
          {/* ProTech Brand Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(220, 38, 38, 0.12)',
              border: '1px solid rgba(220, 38, 38, 0.25)',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-pill)',
              color: 'var(--brand-red)',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1.75rem',
            }}
          >
            <Sparkles size={16} />
            <span>{t.badge}</span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              marginBottom: '1.25rem',
            }}
          >
            {t.title}
          </h1>

          {/* Supporting Message */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              lineHeight: 1.6,
              color: 'var(--text-dark-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '650px',
            }}
          >
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={onExploreProducts}
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.95rem 2rem', gap: '0.5rem' }}
            >
              <span>{t.ctaProducts}</span>
              {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </button>

            <button
              onClick={onReturnToStudio}
              className="btn-secondary-dark"
              style={{
                fontSize: '0.95rem',
                padding: '0.95rem 1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Film size={18} style={{ color: 'var(--text-dark-muted)' }} />
              <span>{t.ctaStudio}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
