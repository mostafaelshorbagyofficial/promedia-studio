import { useEffect } from 'react';
import type { ProTechProduct, Language } from '../types';
import { translations } from '../i18n/translations';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Building2, HelpCircle } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProTechProduct | null;
  onClose: () => void;
  onStartProject: (productTitle: string) => void;
  lang: Language;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onStartProject,
  lang,
}) => {
  const t = translations[lang].productsSection;
  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const title = isRtl && product.titleAr ? product.titleAr : product.title;
  const whatItIs = isRtl && product.whatItIsAr ? product.whatItIsAr : product.whatItIs;
  const whatItCanDo = isRtl && product.whatItCanDoAr ? product.whatItCanDoAr : product.whatItCanDo;
  const businessValue = isRtl && product.businessValueAr ? product.businessValueAr : product.businessValue;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 160,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
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
          backgroundColor: '#FFFFFF',
          color: 'var(--text-light-primary)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-light-hover)',
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
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
            backgroundColor: 'var(--bg-light-card)',
            color: 'var(--text-light-primary)',
            padding: '0.6rem',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-light)',
          }}
          aria-label="Close product modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div
          style={{
            padding: '2.25rem 2rem 1.5rem 2rem',
            borderBottom: '1px solid var(--border-light)',
            backgroundColor: 'var(--bg-light-base)',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: 'var(--brand-red)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            {isRtl ? 'منتج وحل تكنولوجي - برو تك' : 'ProTech Product & Solution'}
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-light-primary)' }}>
            {title}
          </h2>
        </div>

        {/* Modal Body - 3 Clear Sections */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Section 1: WHAT IT IS */}
          <div
            style={{
              backgroundColor: 'var(--bg-light-base)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              borderRight: isRtl ? '4px solid var(--brand-red)' : 'none',
              borderLeft: !isRtl ? '4px solid var(--brand-red)' : 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <HelpCircle size={18} style={{ color: 'var(--brand-red)' }} />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-light-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t.modalWhatItIs}
              </h3>
            </div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-light-primary)', lineHeight: 1.6, fontWeight: 500 }}>
              {whatItIs}
            </p>
          </div>

          {/* Section 2: WHAT IT CAN DO */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Sparkles size={18} style={{ color: 'var(--brand-red)' }} />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-light-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t.modalWhatItCanDo}
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
              {whatItCanDo.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    backgroundColor: 'var(--bg-light-base)',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-red)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--text-light-primary)', lineHeight: 1.5, fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: HOW IT HELPS THE BUSINESS */}
          <div
            style={{
              backgroundColor: 'rgba(220, 38, 38, 0.05)',
              border: '1px solid rgba(220, 38, 38, 0.15)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Building2 size={18} style={{ color: 'var(--brand-red)' }} />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--brand-red)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t.modalHowItHelps}
              </h3>
            </div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-light-primary)', lineHeight: 1.6, fontWeight: 600 }}>
              {businessValue}
            </p>
          </div>

          {/* Modal Footer Action */}
          <div
            style={{
              borderTop: '1px solid var(--border-light)',
              paddingTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-light-primary)' }}>
                {isRtl ? `مهتم بحل ${title}؟` : `Interested in ${title}?`}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light-secondary)' }}>
                {t.modalSub}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onStartProject(title);
              }}
              className="btn-primary"
              style={{ gap: '0.5rem' }}
            >
              <span>{t.modalBuildBtn}</span>
              {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
