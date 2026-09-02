import type { ProTechProduct, Language } from '../types';
import { translations } from '../i18n/translations';
import { protechProducts } from '../data/protechProducts';
import {
  Globe,
  ShoppingCart,
  Zap,
  Sparkles,
  Bot,
  MessageSquareText,
  Cloud,
  Briefcase,
  Kanban,
  Users,
  Code2,
  Smartphone,
  Monitor,
  Network,
  BarChart3,
  Wrench,
  Layers,
  Server,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={24} />,
  ShoppingCart: <ShoppingCart size={24} />,
  Zap: <Zap size={24} />,
  Sparkles: <Sparkles size={24} />,
  Bot: <Bot size={24} />,
  MessageSquareText: <MessageSquareText size={24} />,
  Cloud: <Cloud size={24} />,
  Briefcase: <Briefcase size={24} />,
  Kanban: <Kanban size={24} />,
  Users: <Users size={24} />,
  Code2: <Code2 size={24} />,
  Smartphone: <Smartphone size={24} />,
  Monitor: <Monitor size={24} />,
  Network: <Network size={24} />,
  BarChart3: <BarChart3 size={24} />,
  Wrench: <Wrench size={24} />,
  Layers: <Layers size={24} />,
  Server: <Server size={24} />,
};

interface ProductsGridProps {
  onSelectProduct: (product: ProTechProduct) => void;
  lang: Language;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({ onSelectProduct, lang }) => {
  const t = translations[lang].productsSection;
  const isRtl = lang === 'ar';

  return (
    <section id="protech-products" className="section-light">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-tag badge-tag-light" style={{ marginBottom: '1rem' }}>
            <Layers size={14} /> {t.badge}
          </span>
          <h2 className="section-title" style={{ color: 'var(--text-light-primary)', marginBottom: '1rem' }}>
            {t.title}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t.subtitle}
          </p>
        </div>

        {/* 18 Interactive Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {protechProducts.map((product) => {
            const title = isRtl && product.titleAr ? product.titleAr : product.title;
            const shortDesc = isRtl && product.shortDescAr ? product.shortDescAr : product.shortDesc;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="card-soft-light"
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.75rem',
                }}
              >
                <div>
                  {/* Icon Badge */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(220, 38, 38, 0.08)',
                      color: 'var(--brand-red)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {iconMap[product.icon] || <Sparkles size={24} />}
                  </div>

                  {/* Product Title */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-light-primary)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
                    {title}
                  </h3>

                  {/* Short Description */}
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-light-secondary)', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                    {shortDesc}
                  </p>
                </div>

                {/* Action Link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--brand-red)',
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '1rem',
                  }}
                >
                  <span>{t.learnMore}</span>
                  {isRtl ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
