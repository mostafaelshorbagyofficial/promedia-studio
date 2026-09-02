import { useState, useEffect } from 'react';
import type { StudioLocation, Language } from '../types';
import { Lightbox } from './Lightbox';
import { X, Maximize2, CheckCircle2, Calendar } from 'lucide-react';

interface LocationDetailModalProps {
  location: StudioLocation | null;
  onClose: () => void;
  onBookLocation: (locationName: string) => void;
  lang: Language;
}

export const LocationDetailModal: React.FC<LocationDetailModalProps> = ({
  location,
  onClose,
  onBookLocation,
  lang,
}) => {
  const isRtl = lang === 'ar';
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxIndex === null) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, onClose]);

  if (!location) return null;

  const name = isRtl && location.nameAr ? location.nameAr : location.name;
  const category = isRtl && location.categoryAr ? location.categoryAr : location.category;
  const fullDesc = isRtl && location.fullDescAr ? location.fullDescAr : location.fullDesc;
  const specs = isRtl && location.specsAr ? location.specsAr : location.specs;
  const features = isRtl && location.featuresAr ? location.featuresAr : location.features;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 150,
        backgroundColor: 'rgba(7, 11, 20, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto',
      }}
      className="animate-fade-in"
    >
      <div
        style={{
          backgroundColor: 'var(--bg-dark-navy)',
          color: 'var(--text-dark-primary)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-dark-hover)',
          width: '100%',
          maxWidth: '900px',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: 'var(--shadow-card-dark)',
        }}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: isRtl ? 'auto' : '1.25rem',
            left: isRtl ? '1.25rem' : 'auto',
            zIndex: 10,
            backgroundColor: 'rgba(7, 11, 20, 0.65)',
            color: '#FFFFFF',
            padding: '0.6rem',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-dark)',
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Hero Cover Image */}
        <div style={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden' }}>
          <img
            src={location.coverImage}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-dark-navy) 0%, transparent 60%)',
            }}
          />

          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
            <span className="badge-tag badge-tag-dark" style={{ marginBottom: '0.5rem' }}>
              {category}
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#FFFFFF' }}>
              {name}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '2rem' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-dark-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {fullDesc}
          </p>

          {/* Specs Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem',
              backgroundColor: 'var(--bg-dark-card)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-dark)',
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dark-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                {isRtl ? 'المساحة الكلية' : 'Total Area'}
              </span>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>{specs.area}</p>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dark-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                {isRtl ? 'تجهيزات الإضاءة' : 'Lighting Setup'}
              </span>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFFFFF' }}>{specs.lighting}</p>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dark-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                {isRtl ? 'العزل الصوتي' : 'Acoustics'}
              </span>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFFFFF' }}>{specs.acoustics}</p>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dark-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                {isRtl ? 'السعة الاستيعابية' : 'Crew Capacity'}
              </span>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFFFFF' }}>{specs.capacity}</p>
            </div>
          </div>

          {/* Key Features */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1rem' }}>
              {isRtl ? 'المواصفات والمميزات الخاصة' : 'Studio Specifications & Amenities'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-dark-secondary)', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--brand-red)', flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Media Gallery Grid */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF' }}>
                {isRtl ? `معرض الصور (${location.images.length})` : `Studio Gallery (${location.images.length})`}
              </h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dark-muted)' }}>
                {isRtl ? 'انقر على الصورة للتكبير' : 'Tap image for full screen'}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
              {location.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundColor: 'var(--bg-dark-card)',
                  }}
                >
                  <img
                    src={img}
                    alt={`${name} view ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(7, 11, 20, 0.4)',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                  >
                    <Maximize2 size={22} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking CTA Bar */}
          <div
            style={{
              borderTop: '1px solid var(--border-dark)',
              paddingTop: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>
                {isRtl ? `جاهز لحجز ${name}؟` : `Ready to Book ${name}?`}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dark-muted)' }}>
                {isRtl ? 'تواصل مع فريق إدارة الاستديو لحجز المواعيد وتوفير الدعم الفني.' : 'Contact our production studio team for custom dates and rigging support.'}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookLocation(name);
              }}
              className="btn-primary"
              style={{ gap: '0.5rem' }}
            >
              <Calendar size={18} />
              <span>{isRtl ? 'الحجز والاستفسار عبر الواتساب' : 'Inquire & Reserve'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox full screen modal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={location.images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
};
