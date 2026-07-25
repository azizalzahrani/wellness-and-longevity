import React from 'react';
import { clinicInfo } from '../data/clinicData';
import { Shield, Sparkles, Heart, Compass, CheckCircle2, Lock, Eye } from 'lucide-react';

export default function AboutPage({ onOpenBooking }) {
  const journeySteps = [
    {
      num: "01",
      title: "التقييم التشخيصي الأولي",
      desc: "فحوصات جزيئية وأيضية دقيقة تقيس البصمة الحيوية والعمر الخلوي دون تسرع."
    },
    {
      num: "02",
      title: "الاستشارة المعمقة مع الاستشاري",
      desc: "جلسة خاصة في جناح هادئ لقراءة نتائج الفحوصات ومناقشة تفضيلاتك وأسلوب حياتك."
    },
    {
      num: "03",
      title: "صياغة خطة الرعاية الشخصية",
      desc: "دليل حيوي مدمج يشمل التعديلات الأيضية، جلسات الاستشفاء، والمغذيات المحددة."
    },
    {
      num: "04",
      title: "التطبيق والمتابعة مع المنسق الطبي",
      desc: "متابعة سلسة ومباشرة لتطبيق الخطة وضبطها بالتوافق مع جدول أعمالك اليومي."
    },
    {
      num: "05",
      title: "إعادة التقييم والرعاية المستمرة",
      desc: "قياس التحسن في مؤشرات الطاقة والنوم والأداء بأسلوب علمي مستدام على مدار العام."
    }
  ];

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="section-badge">عن العيادة والمنظومة</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            فلسفتنا: العافية الاستباقية والدقة العلمية
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            تأسست عيادة أثير في الرياض لتكون الملاذ الاستشاري المفضل للراغبين في المحافظة على الحيوية والنشاط الذهني والجسدي على المدى الطويل.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY & VISION */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-badge">رؤيتنا ورسالتنا</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.2rem', color: 'var(--color-charcoal)' }}>
                نُعيد تعريف مفهوم الرعاية الصحية من 'معالجة الأعراض' إلى 'استباق التغيرات'
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                في عيادة أثير، نؤمن بأن الإنسان يستحق أن يعيش جميع سنوات عمره بقمة صفائه الذهني وحيوية جسده. الطب الحديث يمنحنا أدوات قياسية دقيقة تمكننا من فهم لغة الخلايا، واستباق التحديات الأيضية والعصبية قبل ظهورها كأعراض صريحة.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                نسعى لتقديم تجربة استشارية تجمع بين الرقي والخصوصية الفائقة، مع الالتزام التام بالمعايير الإكلينيكية والنزاهة العلمية في كافة خدماتنا.
              </p>
            </div>

            <div className="card-luxury" style={{ backgroundColor: 'var(--color-charcoal)', color: '#FFFFFF', padding: '3rem 2.5rem' }}>
              <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>
                <Compass size={40} />
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: '1rem' }}>
                مبادئ الرعاية في أثير
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', padding: 0 }}>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>الأمان والنزاهة:</strong> التوصيات المبنية على أبحاث معتمدة فقط دون انسياق خلف الصيحات التجميلية المؤقتة.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>التفرّد المطلق:</strong> كل جسد له بصمته الأيضية والجينية الخاصة التي تستوجب خطة منفردة بالكامل.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>السرية والراحة:</strong> مواعيد خاصة وأجنحة معزولة تضمن بيئة مريحة للمراجع في الرياض.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* YOUR JOURNEY SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">رحلتك في أثير</span>
            <h2 className="section-title">خمس خطوات متسلسلة لنظام صحي استباقي</h2>
            <p className="section-subtitle">
              من لحظة تواصلك الأولى وحتى صياغة دليل عافيتك المستمر، نرافقك بخطوات مريحة ومنظمة.
            </p>
          </div>

          <div className="pathway-timeline">
            {journeySteps.map((step) => (
              <div key={step.num} className="timeline-step">
                <div className="step-num">الخطوة {step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.98rem', margin: 0, lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY & DISCRETION STANDARDS */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">معايير الخصوصية والسرية</span>
            <h2 className="section-title">بيئة مصممة لضمان أقصى درجات الانعزال والراحة</h2>
            <p className="section-subtitle">
              نحن ندرك أهمية الخصوصية الشخصية لمراجعينا في المجتمع السعودي، ولذلك صممنا حرَم العيادة بالرياض بعناية فائقة.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card-luxury">
              <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
                <Lock size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>مداخل واستقبالات منفصلة</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                تنسيق مواعيد متباعدة جغرافياً وزمنياً يضمن لك الوصول المباشر إلى جناح الاستشارة دون المرور بصالات انتظار مشتركة.
              </p>
            </div>

            <div className="card-luxury">
              <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
                <Shield size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>تشفير السجلات الصحية</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                تشفير إلكتروني كامل لجميع الفحوصات والنتائج الطبية مع وصول مقتصر فقط على استشاري الرعاية المباشر.
              </p>
            </div>

            <div className="card-luxury">
              <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
                <Eye size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>ضيافة وتنسيق مخصص</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                فريق ضيافة وتنسيق ذو خبرة عالية يضمن إنجاز كافة متطلباتك وتوفير المشروبات الأيضية في جناحك الخاص.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={onOpenBooking} className="btn-primary">
              <span>تواصل مع المنسق الطبي الخاص</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
