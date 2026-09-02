import React, { useState, useEffect } from 'react';
import type { ActiveExperience, Language } from '../types';
import { translations } from '../i18n/translations';
import { generateWhatsAppLink } from '../config/whatsapp';
import { Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  activeExperience: ActiveExperience;
  preselectedItem?: string;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  activeExperience,
  preselectedItem,
  lang,
}) => {
  const t = translations[lang].contactSection;
  const isRtl = lang === 'ar';

  const [experience, setExperience] = useState<ActiveExperience>(activeExperience);
  const [selectedItem, setSelectedItem] = useState<string>(preselectedItem || '');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    details: '',
  });
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  // Sync experience and preselected item if updated from props
  useEffect(() => {
    setExperience(activeExperience);
  }, [activeExperience]);

  useEffect(() => {
    if (preselectedItem) {
      setSelectedItem(preselectedItem);
    }
  }, [preselectedItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const brandName = experience === 'studio'
      ? (isRtl ? 'برو ميديا استديو' : 'ProMedia Studio')
      : (isRtl ? 'برو تك (ProTech)' : 'ProTech');

    // Build structured WhatsApp message matching selected language
    let message = '';
    if (isRtl) {
      message = `مرحباً فريق برو ميديا / برو تك 👋\n\n` +
        `👤 الاسم: ${formData.name}\n` +
        `📱 رقم الهاتف: ${formData.phone}\n` +
        `✉️ البريد الإلكتروني: ${formData.email}\n` +
        `🏢 الاهتمام: ${brandName}\n` +
        (selectedItem ? `🎯 العنصر المحدد: ${selectedItem}\n` : '') +
        `📝 تفاصيل المشروع / الإنتاج:\n${formData.details}`;
    } else {
      message = `Hello ProMedia / ProTech Team 👋\n\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Interested In: ${brandName}\n` +
        (selectedItem ? `Selected Item: ${selectedItem}\n` : '') +
        `Project Details:\n${formData.details}`;
    }

    const url = generateWhatsAppLink(message);
    setWhatsappUrl(url);

    // Launch WhatsApp directly
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section-light">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Info Column */}
          <div>
            <span className="badge-tag badge-tag-light" style={{ marginBottom: '1rem' }}>
              <MessageSquare size={14} /> {t.badge}
            </span>
            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
              {t.title}
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              {t.subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    color: 'var(--brand-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-light-primary)' }}>
                    {t.f1Title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-light-secondary)' }}>
                    {t.f1Desc}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    color: 'var(--brand-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-light-primary)' }}>
                    {t.f2Title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-light-secondary)' }}>
                    {t.f2Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="card-soft-light" style={{ padding: '2.25rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-light-primary)', marginBottom: '0.25rem' }}>
                {t.formTitle}
              </h3>

              {/* Experience Selector */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '0.4rem' }}>
                  {t.experienceLabel}
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setExperience('studio');
                      if (preselectedItem && experience !== 'studio') setSelectedItem('');
                    }}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      border: experience === 'studio' ? '2px solid var(--brand-red)' : '1px solid var(--border-light-hover)',
                      backgroundColor: experience === 'studio' ? 'rgba(220, 38, 38, 0.08)' : 'var(--bg-light-base)',
                      color: experience === 'studio' ? 'var(--brand-red)' : 'var(--text-light-secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {t.optStudio}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setExperience('protech');
                      if (preselectedItem && experience !== 'protech') setSelectedItem('');
                    }}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      border: experience === 'protech' ? '2px solid var(--brand-red)' : '1px solid var(--border-light-hover)',
                      backgroundColor: experience === 'protech' ? 'rgba(220, 38, 38, 0.08)' : 'var(--bg-light-base)',
                      color: experience === 'protech' ? 'var(--brand-red)' : 'var(--text-light-secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {t.optProtech}
                  </button>
                </div>
              </div>

              {/* Full Name */}
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
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light-hover)',
                    backgroundColor: 'var(--bg-light-base)',
                    outline: 'none',
                    textAlign: isRtl ? 'right' : 'left',
                  }}
                />
              </div>

              {/* Phone & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
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
                      padding: '0.75rem 1rem',
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
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light-hover)',
                      backgroundColor: 'var(--bg-light-base)',
                      outline: 'none',
                      textAlign: isRtl ? 'right' : 'left',
                    }}
                  />
                </div>
              </div>

              {/* Dynamic Selected Location or Product Field */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '0.4rem' }}>
                  {experience === 'studio' ? t.itemLabelStudio : t.itemLabelProtech}
                </label>
                <input
                  type="text"
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  placeholder={experience === 'studio' ? t.itemPlaceholderStudio : t.itemPlaceholderProtech}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light-hover)',
                    backgroundColor: 'var(--bg-light-base)',
                    outline: 'none',
                    textAlign: isRtl ? 'right' : 'left',
                  }}
                />
              </div>

              {/* Dynamic Details Area */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '0.4rem' }}>
                  {experience === 'studio' ? t.detailsLabelStudio : t.detailsLabelProtech}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={experience === 'studio' ? t.detailsPlaceholderStudio : t.detailsPlaceholderProtech}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light-hover)',
                    backgroundColor: 'var(--bg-light-base)',
                    outline: 'none',
                    resize: 'vertical',
                    textAlign: isRtl ? 'right' : 'left',
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', gap: '0.6rem' }}>
                <Send size={18} />
                <span>{t.submitBtnWhatsApp}</span>
              </button>

              {whatsappUrl && (
                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
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
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
