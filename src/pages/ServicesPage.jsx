import React, { useState } from 'react';
import { servicesData } from '../data/clinicData';
import { ChevronLeft, Filter, Sparkles, AlertCircle } from 'lucide-react';

export default function ServicesPage({ onOpenBooking, onOpenServiceModal }) {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = ["الكل", ...new Set(servicesData.map(s => s.category))];

  const filteredServices = selectedCategory === "الكل" 
    ? servicesData 
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="section-badge">خدماتنا الطبية والوقائية</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            عيادات متخصصة في طب تطوير العمر والرعاية المخصصة
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            نقدم تسعة مجالات رعاية متكاملة تغطي كافة جوانب العافية الأيضية، الجسدية، والعصبية بمنهج علمي مبني على البراهين.
          </p>

          {/* CATEGORY FILTERS */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  transition: 'var(--transition-fast)',
                  backgroundColor: selectedCategory === cat ? 'var(--color-gold)' : 'var(--color-bg-card)',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--color-text-primary)',
                  border: selectedCategory === cat ? '1px solid var(--color-gold)' : '1px solid var(--color-stone)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {filteredServices.map((service) => (
              <div key={service.id} className="card-luxury" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600, backgroundColor: 'var(--color-gold-soft)', padding: '0.2rem 0.8rem', borderRadius: 'var(--radius-full)' }}>
                      {service.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: 'var(--color-charcoal)' }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '0.98rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                    {service.summary}
                  </p>

                  <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.4rem' }}>
                      لمن تُقدم هذه الخدمة؟
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                      {service.forWho}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <button
                    onClick={() => onOpenServiceModal(service)}
                    className="btn-outline-gold"
                    style={{ flex: 1, padding: '0.75rem 1rem', fontSize: '0.92rem' }}
                  >
                    <span>التفاصيل الشاملة</span>
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="btn-primary"
                    style={{ flex: 1, padding: '0.75rem 1rem', fontSize: '0.92rem' }}
                  >
                    <span>احجز استشارة</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* MEDICAL DISCLAIMER NOTICE */}
          <div className="disclaimer-banner" style={{ marginTop: '4rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-gold)', marginBottom: '0.4rem' }}>
              <AlertCircle size={18} />
              <span>إشعار طبي ملزم</span>
            </div>
            جميع الخدمات المعروضة تُقدم بناءً على تقييم طبي شامل يجريه الأطباء الاستشاريون في العيادة لتحديد ملائمة كل برنامج لحالتك الصحية الفردية.
          </div>
        </div>
      </section>
    </div>
  );
}
