import React, { useState } from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { generateWhatsAppLink } from '../config/whatsapp';
import { Send, Sparkles, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

interface ProTechCTAProps {
  preselectedProduct?: string;
  onReturnToStudio: () => void;
  lang: Language;
}

export const ProTechCTA: React.FC<ProTechCTAProps> = ({
  preselectedProduct,
  onReturnToStudio,
  lang,
}) => {
  const isRtl = lang === 'ar';
  const t = translations[lang].contactSection;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    solution: preselectedProduct || '',
    details: '',
  });
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const brandName = isRtl ? 'برو تك (ProTech)' : 'ProTech';

    let message = '';
    if (isRtl) {
      message = `مرحباً فريق برو تك 👋\n\n` +
        `👤 الاسم: ${formData.name}\n` +
        `📱 رقم الهاتف: ${formData.phone}\n` +
        `✉️ البريد الإلكتروني: ${formData.email}\n` +
        `🏢 الاهتمام: ${brandName}\n` +
        (formData.solution ? `🎯 المنتج/الحل المحدد: ${formData.solution}\n` : '') +
        `📝 متطلبات وتفاصيل المشروع:\n${formData.details}`;
    } else {
      message = `Hello ProTech Team 👋\n\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Interested In: ${brandName}\n` +
        (formData.solution ? `Selected Solution: ${formData.solution}\n` : '') +
        `Project Requirements:\n${formData.details}`;
    }

    const url = generateWhatsAppLink(message);
    setWhatsappUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="protech-cta" className="section-light">
      <div className="container">
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div
            className="card-soft-light"
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-lg)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div>
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className="badge-tag badge-tag-light" style={{ marginBottom: '1rem' }}>
                  <Sparkles size={14} /> {isRtl ? 'بدء مشروعك البرمجي' : 'Start Your Build'}
                </span>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-light-primary)', marginBottom: '0.75rem' }}>
                  {isRtl ? 'لديك فكرة مشروع؟ فلنقم ببنائها.' : 'Have an idea? Let\'s build it.'}
                </h2>
                <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto' }}>
                  {isRtl
                    ? 'من موقع إلكتروني وحتى نظام متكامل بالذكاء الاصطناعي، نبني حلولاً رقمية حول احتياجات عملك.'
                    : 'From a website to a complete AI-powered system, we build digital solutions around real business needs.'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '0.4rem' }}>
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light-hover)',
                        backgroundColor: 'var(--bg-light-base)',
                        outline: 'none',
                        textAlign: isRtl ? 'right' : 'left',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '0.4rem' }}>
                      {t.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light-hover)',
                        backgroundColor: 'var(--bg-light-base)',
                        outline: 'none',
                        textAlign: isRtl ? 'right' : 'left',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '0.4rem' }}>
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light-hover)',
                        backgroundColor: 'var(--bg-light-base)',
                        outline: 'none',
                        textAlign: isRtl ? 'right' : 'left',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '0.4rem' }}>
                      {t.itemLabelProtech}
                    </label>
                    <input
                      type="text"
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      placeholder={t.itemPlaceholderProtech}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light-hover)',
                        backgroundColor: 'var(--bg-light-base)',
                        outline: 'none',
                        textAlign: isRtl ? 'right' : 'left',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '0.4rem' }}>
                    {t.detailsLabelProtech}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.detailsPlaceholderProtech}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light-hover)',
                      backgroundColor: 'var(--bg-light-base)',
                      outline: 'none',
                      resize: 'vertical',
                      textAlign: isRtl ? 'right' : 'left',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '1rem', gap: '0.6rem' }}>
                    <Send size={18} />
                    <span>{t.submitBtnWhatsApp}</span>
                  </button>

                  {whatsappUrl && (
                    <div style={{ textAlign: 'center' }}>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--brand-red)',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        <span>{t.successDesc}</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={onReturnToStudio}
                    className="btn-secondary-light"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', gap: '0.5rem' }}
                  >
                    {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                    <span>{translations[lang].nav.switchStudio}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
