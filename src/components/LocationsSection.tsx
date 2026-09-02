import { useState } from 'react';
import type { StudioLocation, Language } from '../types';
import { translations } from '../i18n/translations';
import { studioLocations } from '../data/locationsData';
import { ArrowRight, ArrowLeft, Maximize2, Layers } from 'lucide-react';

interface LocationsSectionProps {
  onSelectLocation: (loc: StudioLocation) => void;
  lang: Language;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectLocation, lang }) => {
  const t = translations[lang].locationsSection;
  const isRtl = lang === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories dynamically
  const categories = ['All', ...Array.from(new Set(studioLocations.map(l => isRtl && l.categoryAr ? l.categoryAr : l.category)))];

  const filteredLocations = selectedCategory === 'All'
    ? studioLocations
    : studioLocations.filter(l => (isRtl && l.categoryAr ? l.categoryAr : l.category) === selectedCategory);

  return (
    <section id="locations" className="section-light">
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <div className="badge-tag badge-tag-light">
            <Layers size={14} /> {t.badge}
          </div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filters (Mobile Scrollable) */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: '2.5rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          className="category-filter-bar"
        >
          {categories.slice(0, 7).map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.875rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                backgroundColor: selectedCategory === cat ? 'var(--brand-red)' : 'var(--bg-light-surface)',
                color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-light-secondary)',
                border: selectedCategory === cat ? '1px solid var(--brand-red)' : '1px solid var(--border-light-hover)',
                boxShadow: selectedCategory === cat ? '0 2px 8px var(--brand-red-glow)' : 'var(--shadow-sm)',
              }}
            >
              {cat === 'All' ? t.filterAll : cat}
            </button>
          ))}
        </div>

        {/* Scalable Locations Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredLocations.map(location => {
            const name = isRtl && location.nameAr ? location.nameAr : location.name;
            const category = isRtl && location.categoryAr ? location.categoryAr : location.category;
            const shortDesc = isRtl && location.shortDescAr ? location.shortDescAr : location.shortDesc;

            return (
              <div
                key={location.id}
                onClick={() => onSelectLocation(location)}
                className="card-soft-light"
                style={{
                  cursor: 'pointer',
                  padding: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image Preview */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    backgroundColor: '#E2E8F0',
                  }}
                >
                  <img
                    src={location.coverImage}
                    alt={name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="location-card-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: isRtl ? 'auto' : '0.75rem',
                      left: isRtl ? '0.75rem' : 'auto',
                      backgroundColor: 'rgba(7, 11, 20, 0.75)',
                      color: '#FFFFFF',
                      padding: '0.35rem 0.65rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <Maximize2 size={12} /> {location.images.length} {t.photosCount}
                  </div>
                </div>

                {/* Location Info */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--brand-red)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        display: 'block',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {category}
                    </span>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '0.5rem' }}>
                      {name}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                      {shortDesc}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-light)',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: 'var(--brand-red)',
                    }}
                  >
                    <span>{t.exploreSpace}</span>
                    {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .location-card-img:hover {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
};
