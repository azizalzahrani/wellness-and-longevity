import React from 'react';
import { clinicInfo, trustIndicators, servicesData, carePathways, specialistsData } from '../data/clinicData';
import { articlesData } from '../data/insightsData';
import { ShieldCheck, ArrowLeft, Calendar, Sparkles, UserCheck, ChevronLeft } from 'lucide-react';

export default function HomePage({ setActivePage, onOpenBooking, onOpenServiceModal, onOpenArticleModal }) {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content-box">
            <div className="hero-tag">
              <Sparkles size={16} />
              <span>عيادة لطب العافية وتطوير العمر - الرياض</span>
            </div>

            <h1 className="hero-headline">
              {clinicInfo.slogan}
            </h1>

            <p className="hero-subheadline">
              وجهة الرياض الأولى للرعاية الصحية الاستباقية المخصصة وطول العمر الخلوي. ندمج بين أحدث علوم الفحوصات الجزيئية والطب الوقائي، ضمن بيئة استشارية فائقة الخصوصية والانعزال المريح.
            </p>

            <div className="hero-actions">
              <button onClick={onOpenBooking} className="btn-primary">
                <Calendar size={18} />
                <span>احجز استشارتك</span>
              </button>

              <button onClick={() => setActivePage('services')} className="btn-secondary">
                <span>اكتشف خدماتنا</span>
                <ArrowLeft size={18} />
              </button>
            </div>
          </div>

          {/* HERO VISUAL CARD */}
          <div className="hero-visual-card">
            <div className="hero-graphic-bg"></div>
            <div className="hero-abstract-circles"></div>

            <div className="hero-card-content">
              <div className="hero-card-badge">ATHEER PRECISION WELLNESS</div>
              <h2 className="hero-card-title">الوقاية الطبية المتقدمة</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                نهج طبي علمي يستبق الظروف الحيوية، يُترجم التحاليل الجزيئية إلى خطة حيوية تمنحك الصفاء والاستدامة.
              </p>
            </div>

            <div className="hero-card-stats">
              <div>
                <div className="stat-item-num">100%</div>
                <div className="stat-item-label">خصوصية وسرية طبية</div>
              </div>
              <div>
                <div className="stat-item-num">9+</div>
                <div className="stat-item-label">تخصصات وقائية مخصصة</div>
              </div>
              <div>
                <div className="stat-item-num">1:1</div>
                <div className="stat-item-label">رعاية استشارية فردية</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderTop: 'var(--border-subtle)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">ركائز الرعاية الطبية</span>
            <h2 className="section-title">نهج يعزز الثقة والاطمئنان العلمي</h2>
            <p className="section-subtitle">
              نلتزم بأعلى درجات المسؤولية الطبية والنزاهة الإكلينيكية دون تقديم وعود مبالغ فيها أو ادعاءات غير مثبتة.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.8rem' }}>
            {trustIndicators.map((item) => (
              <div key={item.id} className="card-luxury" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-gold-soft)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem auto',
                  border: 'var(--border-gold)'
                }}>
                  <ShieldCheck size={26} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES PREVIEW */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">الخدمات الطبية والوقائية</span>
            <h2 className="section-title">عيادات متخصصة لدعم العافية المستدامة</h2>
            <p className="section-subtitle">
              منظومة رعاية متكاملة تشمل الفحوصات الشاملة، التحسين الأيضي، وتجديد الأنسجة.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {servicesData.slice(0, 3).map((service) => (
              <div key={service.id} className="card-luxury" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                    {service.category}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.98rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                    {service.summary}
                  </p>
                </div>
                <button
                  onClick={() => onOpenServiceModal(service)}
                  className="btn-outline-gold"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>التفاصيل وتوقعات الزيارة</span>
                  <ChevronLeft size={18} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={() => setActivePage('services')} className="btn-secondary">
              <span>عرض جميع الخدمات التسع المتخصصة</span>
              <ArrowLeft size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CURATED PATHWAYS PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-text-white)' }}>
        <div className="container">
          <div className="section-header" style={{ color: 'var(--color-text-white)' }}>
            <span className="section-badge" style={{ backgroundColor: 'rgba(192, 154, 83, 0.15)', color: 'var(--color-gold)' }}>
              مسارات الرعاية المخصصة
            </span>
            <h2 className="section-title" style={{ color: 'var(--color-text-white)' }}>إطارات عمل حيوية مرنة وقائمة على الإشراف الطبي</h2>
            <p className="section-subtitle" style={{ color: 'rgba(232, 227, 218, 0.75)' }}>
              رحلات متكاملة تجمع الفحوصات والأنظمة الغذائية وجلسات الاستشفاء لخدمة أهداف صحية دقيقة.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {carePathways.slice(0, 3).map((pathway) => (
              <div key={pathway.id} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(192, 154, 83, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600, marginBottom: '0.4rem' }}>
                    المدة التقديرية: {pathway.duration}
                  </div>
                  <h3 style={{ color: 'var(--color-text-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>
                    {pathway.title}
                  </h3>
                  <p style={{ color: 'rgba(232, 227, 218, 0.75)', fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: 1.7 }}>
                    {pathway.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setActivePage('pathways')}
                  className="btn-outline-gold"
                  style={{ width: '100%', marginTop: '1rem', color: '#FFFFFF', borderColor: 'rgba(192, 154, 83, 0.6)' }}
                >
                  <span>استكشف الجدول الزمني للمسار</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALISTS PREVIEW */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">نخبة الأطباء والخبراء</span>
            <h2 className="section-title">فريق طبي متكامل بخبرات استشارية رفيعة</h2>
            <p className="section-subtitle">
              نخبة من الاستشاريين في الطب الوقائي، التغذية الأيضية، الاستشفاء، وجودة النوم يكرّسون علمهم لرعايتك.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {specialistsData.slice(0, 3).map((specialist) => (
              <div key={specialist.id} className="specialist-card">
                <div className="specialist-avatar-wrapper">
                  <UserCheck size={64} className="specialist-avatar-icon" />
                </div>
                <div className="specialist-info-body">
                  <div className="specialist-title-role">{specialist.role}</div>
                  <h3 className="specialist-name">{specialist.name}</h3>
                  <p className="specialist-bio-short">{specialist.bio}</p>
                  <div style={{ fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--color-text-muted)', borderTop: 'var(--border-subtle)', paddingTop: '0.8rem' }}>
                    "{specialist.philosophy}"
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button onClick={() => setActivePage('specialists')} className="btn-secondary">
              <span>التعرف على جميع الأطباء بالفريق</span>
            </button>
          </div>
        </div>
      </section>

      {/* JOURNAL INSIGHTS PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">الصحيفة الطبية والإرشادية</span>
            <h2 className="section-title">رؤى علمية ومقالات تثقيفية موثوقة</h2>
            <p className="section-subtitle">
              مأثورات وإرشادات مبنية على أحدث الأبحاث العلمية المعتمدة لتعزيز ثقافة الصحة الوقائية.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {articlesData.slice(0, 3).map((article) => (
              <div key={article.id} className="card-luxury" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600, marginBottom: '0.6rem' }}>
                    <span>{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem' }}>{article.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                    {article.summary}
                  </p>
                </div>
                <button
                  onClick={() => onOpenArticleModal(article)}
                  className="btn-outline-gold"
                  style={{ width: '100%' }}
                >
                  <span>قراءة المقال بالكامل</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CONSULTATION CTA */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, var(--color-charcoal) 0%, var(--color-sage) 100%)',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container container-narrow">
          <span className="section-badge" style={{ backgroundColor: 'rgba(192, 154, 83, 0.2)', color: 'var(--color-gold)' }}>
            خطوتك الأولى نحو الاستدامة
          </span>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.2rem' }}>
            ابدأ رحلة العافية بمنهجٍ علميٍّ دقيق
          </h2>
          <p style={{ color: 'rgba(232, 227, 218, 0.85)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            استشاريونا جاهزون لاستقبالك في بيئة هادئة بالرياض ومساعدتك في وضع خارطة الطريق لجسدك وصحتك المستقبلية.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn-primary">
              <Calendar size={18} />
              <span>احجز استشارتك الآن</span>
            </button>
            <button onClick={() => setActivePage('contact')} className="btn-secondary" style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}>
              <span>عرض معلومات الموقع والتواصل</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
