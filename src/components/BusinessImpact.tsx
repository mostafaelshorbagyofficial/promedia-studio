import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { TrendingUp, Clock, HeartHandshake, ShieldAlert, Rocket } from 'lucide-react';

interface BusinessImpactProps {
  lang: Language;
}

export const BusinessImpact: React.FC<BusinessImpactProps> = ({ lang }) => {
  const t = translations[lang].impactSection;

  return (
    <section id="protech-impact" className="section-dark">
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <span className="badge-tag badge-tag-dark" style={{ marginBottom: '1rem' }}>
            <TrendingUp size={14} /> {t.badge}
          </span>
          <h2 className="section-title" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            {t.title}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', fontSize: '1.1rem' }}>
            {t.subtitle}
          </p>
        </div>

        {/* 5 Key Impact Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
              <TrendingUp size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.6rem' }}>
              {t.p1Title}
            </h3>
            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
              {t.p1Desc}
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
              <Clock size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.6rem' }}>
              {t.p2Title}
            </h3>
            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
              {t.p2Desc}
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
              <HeartHandshake size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.6rem' }}>
              {t.p3Title}
            </h3>
            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
              {t.p3Desc}
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
              <ShieldAlert size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.6rem' }}>
              {t.p4Title}
            </h3>
            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
              {t.p4Desc}
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
              <Rocket size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.6rem' }}>
              {t.p5Title}
            </h3>
            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
              {t.p5Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
