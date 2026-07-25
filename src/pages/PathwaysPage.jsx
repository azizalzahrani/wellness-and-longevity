import React, { useState } from 'react';
import { carePathways } from '../data/clinicData';
import { Compass, Clock, Target, Calendar, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function PathwaysPage({ onOpenBooking }) {
  const [activePathwayId, setActivePathwayId] = useState(carePathways[0].id);

  const activePathway = carePathways.find(p => p.id === activePathwayId) || carePathways[0];

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="section-badge">مسارات الرعاية المخصصة</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            إطارات عمل حيوية مرنة ومصممة حسب الأهداف
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            مسارات تجمع بين الفحوصات الجزيئية، التغذية الأيضية، وجلسات الاستشفاء في جدول مدروس يضمن التدرج والتوافق الطبي.
          </p>

          {/* PATHWAY SELECTOR TABS */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            {carePathways.map((pathway) => (
              <button
                key={pathway.id}
                onClick={() => setActivePathwayId(pathway.id)}
                style={{
                  padding: '0.8rem 1.6rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'var(--transition-fast)',
                  backgroundColor: activePathwayId === pathway.id ? 'var(--color-charcoal)' : 'var(--color-bg-card)',
                  color: activePathwayId === pathway.id ? 'var(--color-gold)' : 'var(--color-text-primary)',
                  border: activePathwayId === pathway.id ? '1px solid var(--color-gold)' : '1px solid var(--color-stone)',
                  boxShadow: activePathwayId === pathway.id ? 'var(--shadow-md)' : 'none'
                }}
              >
                {pathway.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE PATHWAY DETAILS */}
      <section className="section-padding">
        <div className="container container-narrow">
          <div className="card-luxury" style={{ padding: '3rem 2.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: 'var(--border-subtle)', paddingBottom: '1.5rem' }}>
              <div>
                <span className="section-badge">{activePathway.title}</span>
                <h2 style={{ fontSize: '2rem', marginTop: '0.4rem', color: 'var(--color-charcoal)' }}>
                  {activePathway.subtitle}
                </h2>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontWeight: 600 }}>
                  <Clock size={18} />
                  <span>المدة: {activePathway.duration}</span>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-gold-soft)', padding: '1.2rem 1.5rem', borderRadius: 'var(--radius-sm)', marginBottom: '2.5rem', border: 'var(--border-gold)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '0.3rem' }}>
                <Target size={18} />
                <span>محور التركيز الحيوي:</span>
              </div>
              <p style={{ margin: 0, color: 'var(--color-text-primary)', fontSize: '1.02rem' }}>
                {activePathway.focus}
              </p>
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>
              مراحل الرحلة الزمنية داخل المسار:
            </h3>

            <div className="pathway-timeline">
              {activePathway.steps.map((st) => (
                <div key={st.step} className="timeline-step">
                  <div className="step-num">المرحلة {st.step}</div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--color-charcoal)' }}>
                    {st.title}
                  </h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.98rem', margin: 0, lineHeight: 1.7 }}>
                    {st.detail}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: 'var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.2rem' }}>
              <div style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
                * المسار إطار عمل مرن يتم تشكيله وضبطه إكلينيكياً بعد الاستشارة الأولى.
              </div>

              <button onClick={onOpenBooking} className="btn-primary">
                <Calendar size={18} />
                <span>استفسر عن ملائمة هذا المسار لحالتك</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
