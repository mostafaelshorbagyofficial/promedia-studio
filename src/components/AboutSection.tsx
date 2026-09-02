import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { Award, Video, SlidersHorizontal, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = translations[lang].aboutSection;

  return (
    <section id="about" className="section-dark">
      <div className="container">
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge-tag badge-tag-dark" style={{ marginBottom: '1rem' }}>
            <Award size={14} /> {t.badge}
          </span>
          <h2 className="section-title" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            {t.title}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', fontSize: '1.1rem' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          <div className="card-soft-dark">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(220, 38, 38, 0.15)',
                color: 'var(--brand-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <Video size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {t.f1Title}
            </h3>
            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
              {t.f1Desc}
            </p>
          </div>

          <div className="card-soft-dark">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(220, 38, 38, 0.15)',
                color: 'var(--brand-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <SlidersHorizontal size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {t.f2Title}
            </h3>
            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
              {t.f2Desc}
            </p>
          </div>

          <div className="card-soft-dark">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(220, 38, 38, 0.15)',
                color: 'var(--brand-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <Sparkles size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {t.f3Title}
            </h3>
            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
              {t.f3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
