import React, { useState } from 'react';
import { faqsData } from '../data/clinicData';
import { ChevronDown, Calendar } from 'lucide-react';

export default function FAQsPage({ onOpenBooking }) {
  const [openState, setOpenState] = useState({});

  const toggleAccordion = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="section-badge">الأسئلة الشائعة</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            إجابات دقيقة لجميع تساؤلاتك حول خدماتنا
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            نوفر إجابات شفافة ومسؤولة تغطي تفاصيل المواعيد، الخصوصية الطبية، الاستعداد للفحوصات، وضوابط الرعاية في أثير.
          </p>
        </div>
      </section>

      {/* ACCORDION SECTIONS */}
      <section className="section-padding">
        <div className="container container-narrow">
          {faqsData.map((categoryGroup, catIdx) => (
            <div key={catIdx} style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--color-gold)', marginBottom: '1.2rem', paddingRight: '0.5rem', borderRight: '3px solid var(--color-gold)' }}>
                {categoryGroup.category}
              </h2>

              {categoryGroup.questions.map((item, qIdx) => {
                const key = `${catIdx}-${qIdx}`;
                const isOpen = !!openState[key];
                return (
                  <div key={qIdx} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                    <button
                      onClick={() => toggleAccordion(catIdx, qIdx)}
                      className="accordion-header"
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <ChevronDown className="accordion-icon" />
                    </button>

                    {isOpen && (
                      <div className="accordion-body">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {/* NEED MORE HELP CTA */}
          <div className="card-luxury" style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem 2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'var(--color-charcoal)' }}>
              هل لديك سؤال لم تجد إجابته هنا؟
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', fontSize: '1rem' }}>
              منسق الرعاية الخاص بنا متواجد للإجابة على كافة التساؤلات عبر الهاتف أو الواتساب المباشر.
            </p>
            <button onClick={onOpenBooking} className="btn-primary">
              <Calendar size={18} />
              <span>تواصل مع المنسق الطبي</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
