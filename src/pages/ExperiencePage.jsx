import React, { useState } from 'react';
import { experienceSpaces } from '../data/clinicData';
import { MapPin, ChevronRight, ChevronLeft } from 'lucide-react';

export default function ExperiencePage({ onOpenBooking }) {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);

  const currentSpace = experienceSpaces[activeSpaceIndex];

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="section-badge">تجربة العيادة والحرَم الصحي</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            عمارة داخلية تُحاكي الطبيعة وتضمن الخصوصية
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            مساحات مصممة بأحجار الترافرتين الدافئة، الإضاءة الطبيعية، والحلول الصوتية المعزولة لترسخ الهدوء التام والراحة النفسية في الرياض.
          </p>
        </div>
      </section>

      {/* GALLERY FEATURE DISPLAY */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            {/* Architectural SVG Graphic Card */}
            <div style={{
              backgroundColor: 'var(--color-charcoal)',
              borderRadius: 'var(--radius-lg)',
              minHeight: '440px',
              padding: '2.5rem',
              color: '#FFFFFF',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(192, 154, 83, 0.3)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(192, 154, 83, 0.15) 0%, transparent 60%)' }}></div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <span className="section-badge" style={{ backgroundColor: 'rgba(192, 154, 83, 0.2)', color: 'var(--color-gold)' }}>
                  الجناح رقم 0{activeSpaceIndex + 1}
                </span>
                <h2 style={{ color: '#FFFFFF', fontSize: '2.2rem', marginTop: '0.8rem', marginBottom: '1rem' }}>
                  {currentSpace.title}
                </h2>
                <p style={{ color: 'rgba(232, 227, 218, 0.85)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  {currentSpace.desc}
                </p>
              </div>

              {/* Architectural Icon Graphic */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-gold)' }}>
                  <MapPin size={18} />
                  <span style={{ fontSize: '0.92rem' }}>مجمع أثير - حي الهدا، الرياض</span>
                </div>

                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <button
                    onClick={() => setActiveSpaceIndex(prev => (prev === 0 ? experienceSpaces.length - 1 : prev - 1))}
                    className="modal-close-btn"
                    style={{ position: 'static', backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF' }}
                  >
                    <ChevronRight size={20} />
                  </button>
                  <button
                    onClick={() => setActiveSpaceIndex(prev => (prev === experienceSpaces.length - 1 ? 0 : prev + 1))}
                    className="modal-close-btn"
                    style={{ position: 'static', backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF' }}
                  >
                    <ChevronLeft size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* List of Spaces */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {experienceSpaces.map((space, index) => (
                <div
                  key={space.id}
                  onClick={() => setActiveSpaceIndex(index)}
                  style={{
                    padding: '1.5rem 1.8rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: activeSpaceIndex === index ? 'var(--color-gold-soft)' : 'var(--color-bg-card)',
                    border: activeSpaceIndex === index ? 'var(--border-gold)' : 'var(--border-subtle)',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', color: activeSpaceIndex === index ? 'var(--color-gold)' : 'var(--color-charcoal)', marginBottom: '0.4rem' }}>
                    0{index + 1}. {space.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                    {space.desc.substring(0, 85)}...
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button onClick={onOpenBooking} className="btn-primary">
              <span>احجز زيارة واستكشف العيادة بالرياض</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
