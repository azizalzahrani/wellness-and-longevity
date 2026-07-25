import React from 'react';
import { specialistsData } from '../data/clinicData';
import { UserCheck, Award, Globe, Heart, Calendar, ShieldCheck } from 'lucide-react';

export default function SpecialistsPage({ onOpenBooking, onOpenSpecialistModal }) {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="section-badge">نخبة الأطباء والخبراء</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            فريق استشاري متكامل في طب تطوير العمر والوقاية
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            استشاريون سعوديون ودوليون في مجالات الطب الوقائي، الأيض الخلوي، الاستشفاء، وجودة النوم يكرّسون خبراتهم لرعايتك.
          </p>
        </div>
      </section>

      {/* SPECIALISTS GRID */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {specialistsData.map((spec) => (
              <div key={spec.id} className="specialist-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="specialist-avatar-wrapper">
                    <UserCheck size={72} className="specialist-avatar-icon" />
                  </div>

                  <div className="specialist-info-body">
                    <span className="specialist-title-role">{spec.role}</span>
                    <h3 className="specialist-name">{spec.name}</h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBottom: '0.8rem' }}>
                      <Award size={16} style={{ color: 'var(--color-gold)' }} />
                      <span>{spec.qualifications}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBottom: '1.2rem' }}>
                      <Globe size={16} style={{ color: 'var(--color-gold)' }} />
                      <span>اللغات: {spec.languages.join(' ، ')}</span>
                    </div>

                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                      {spec.bio}
                    </p>

                    <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: '1rem', borderRadius: 'var(--radius-sm)', borderRight: '3px solid var(--color-gold)' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-gold)', marginBottom: '0.3rem' }}>
                        فلسفة الرعاية الشخصية:
                      </div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--color-text-primary)', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                        "{spec.philosophy}"
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 1.8rem 1.8rem 1.8rem' }}>
                  <button
                    onClick={onOpenBooking}
                    className="btn-primary"
                    style={{ width: '100%', padding: '0.8rem 1rem', fontSize: '0.95rem' }}
                  >
                    <Calendar size={18} />
                    <span>طلب استشارة مع {spec.name.split(' ')[1]}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="disclaimer-banner" style={{ marginTop: '4rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-gold)', marginBottom: '0.4rem' }}>
              <ShieldCheck size={18} />
              <span>نزاهة واحترافية إكلينيكية</span>
            </div>
            فريق أثير الطبي ملتزم بأخلاقيات المهنة وتطبيق معايير الممارسة الطبية المعتمدة في المملكة العربية السعودية.
          </div>
        </div>
      </section>
    </div>
  );
}
