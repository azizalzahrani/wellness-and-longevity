import React from 'react';
import { clinicInfo } from '../data/clinicData';
import { Calendar, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function BookingPage({ onOpenBooking }) {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="section-badge">حجز استشارة مخصصة</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            ابدأ رحلة العافية في بيئة فائقة الخصوصية بالرياض
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            اختر المجال الصحي المناسب وحدد الموعد الذي يلائم جدول أعمالك، ليتولى المنسق الطبي الخاص تنسيق كافة تفاصيل زيارتك.
          </p>
        </div>
      </section>

      {/* BOOKING OPTIONS SECTION */}
      <section className="section-padding">
        <div className="container container-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Direct Online Booking Card */}
            <div className="card-luxury" style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-gold-soft)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <Calendar size={30} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'var(--color-charcoal)' }}>
                  تأكيد موعد استشارة إلكترونياً
                </h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  تتيح لك هذه الخدمة اختيار التخصص، التاريخ، والموعد المفضل، وسيقوم المنسق الطبي بتأكيد الموعد وإرسال تفاصيل الوصول.
                </p>
              </div>

              <button onClick={onOpenBooking} className="btn-primary" style={{ width: '100%' }}>
                <span>ابدأ حجز استشارتك الآن</span>
              </button>
            </div>

            {/* Direct WhatsApp Concierge Card */}
            <div className="card-luxury" style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#E8F9EE',
                  color: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <MessageCircle size={30} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'var(--color-charcoal)' }}>
                  المنسق الطبي المباشر عبر الواتساب
                </h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  تواصل مباشر وفوري مع المنسق الطبي الخاص بالإدارة لحجز الأجنحة الكبار أو الاستفسار عن تفاصيل الفحوصات الخاصة.
                </p>
              </div>

              <a
                href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(clinicInfo.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageCircle size={20} />
                <span>محادثة الواتساب الفورية</span>
              </a>
            </div>
          </div>

          {/* CONFIDENTIALITY & SUITABILITY GUARANTEE */}
          <div className="card-luxury" style={{ marginTop: '3rem', backgroundColor: 'var(--color-bg-surface)', padding: '2rem 2.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-charcoal)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShieldCheck size={22} style={{ color: 'var(--color-gold)' }} />
              <span>ضوابط وإجراءات تأكيد المواعيد</span>
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
                <span>يتم مراجعة طلب الموعد فور استلامه للتأكد من ملاءمته للحالة ولتحديد الفحوصات التمهيدية المطلوبة قبل الحضور.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
                <span>تضمن العيادة التباعد الزمني والمكاني بين المراجعين للحفاظ على أعلى مستويات الخصوصية والانعزال المريح.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
                <span>يمكنك تعديل أو إعادة جدولة الموعد بسهولة عبر التواصل المباشر مع منسق الرعاية الخاص بك.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
