import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export default function MembershipPage({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState("individual"); // "individual" | "corporate"
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    org: "",
    phone: "",
    email: "",
    details: ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="section-badge">العضويات ورعاية القيادات</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            برامج عافية خاصة للأفراد والمؤسسات
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            رعاية صحية استباقية ومستمرة تضمن المتابعة الطبية على مدار العام للمراجعين المميزين والقيادات التنفيذية.
          </p>

          {/* TAB TOGGLE */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2.5rem' }}>
            <button
              onClick={() => setActiveTab("individual")}
              style={{
                padding: '0.8rem 2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '1rem',
                fontWeight: 600,
                backgroundColor: activeTab === "individual" ? 'var(--color-gold)' : 'var(--color-bg-card)',
                color: activeTab === "individual" ? '#FFFFFF' : 'var(--color-text-primary)',
                border: activeTab === "individual" ? '1px solid var(--color-gold)' : '1px solid var(--color-stone)'
              }}
            >
              عضوية النخبة الوقائية (للأفراد)
            </button>

            <button
              onClick={() => setActiveTab("corporate")}
              style={{
                padding: '0.8rem 2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '1rem',
                fontWeight: 600,
                backgroundColor: activeTab === "corporate" ? 'var(--color-gold)' : 'var(--color-bg-card)',
                color: activeTab === "corporate" ? '#FFFFFF' : 'var(--color-text-primary)',
                border: activeTab === "corporate" ? '1px solid var(--color-gold)' : '1px solid var(--color-stone)'
              }}
            >
              برامج عافية القيادات (للمؤسسات)
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="section-padding">
        <div className="container container-narrow">
          {activeTab === "individual" ? (
            <div>
              <div className="card-luxury" style={{ padding: '3rem 2.5rem', marginBottom: '3rem' }}>
                <span className="section-badge">مفهوم العضوية الفردية</span>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
                  عضوية النخبة الوقائية الشاملة
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  برنامج رعاية سنوي متكامل صُمم خصيصاً للراغبين في متابعة حثيثة لبصمتهم الأيضية وحيويتهم الخلوية. تمنحك العضوية إمكانية الوصول المباشر لاستشارييك وأولوية الحجز في أجنحة أثير بالرياض.
                </p>

                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--color-charcoal)' }}>
                  المزايا الاستثنائية للعضوية:
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
                  <div style={{ padding: '1.2rem', backgroundColor: 'var(--color-bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>فحوصات مدمجة دورية</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>مراجعة نصف سنوية للتحاليل الجزيئية ومؤشرات الأكسدة.</p>
                  </div>
                  <div style={{ padding: '1.2rem', backgroundColor: 'var(--color-bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>أولوية حجز الأجنحة</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>تأكيد فوري للمواعيد في الأوقات المفضلة دون انتظار.</p>
                  </div>
                  <div style={{ padding: '1.2rem', backgroundColor: 'var(--color-bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>خط مباشر للمنسق الطبي</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>تواصل مباشر مع منسق الرعاية الشخصي لتأمين كافة المتطلبات.</p>
                  </div>
                  <div style={{ padding: '1.2rem', backgroundColor: 'var(--color-bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>استشارات افتراضية مرنة</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>جلسات متابعة مرئية عند السفر أو الانشغال.</p>
                  </div>
                </div>

                <div style={{ textAlign: 'center', backgroundColor: 'var(--color-gold-soft)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: 'var(--border-gold)' }}>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', margin: 0 }}>
                    * يتم قبول طلبات الانضمام للعضوية بأعداد محددة سنوياً لضمان المحافظة على أعلى معايير الجودة والخصوصية.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="card-luxury" style={{ padding: '3rem 2.5rem', marginBottom: '3rem' }}>
                <span className="section-badge">مفهوم الرعاية المؤسسية</span>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
                  برامج عافية القيادات والشركات بالرياض
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  نساعد الشركات الوطنية والمؤسسات الكبرى في حماية وتطوير الاستدامة الذهنية والجسدية لأعضاء مجالس الإدارة والتنفيذيين عبر برامج فحص واستشفاء مدمجة.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
                  <div style={{ padding: '1.2rem', backgroundColor: 'var(--color-bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>يوم الفحص التنفيذي المدمج</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>إنجاز كافة الفحوصات الشاملة خلال 3 ساعات في جناح خاص.</p>
                  </div>
                  <div style={{ padding: '1.2rem', backgroundColor: 'var(--color-bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>ورش الأداء والاستشفاء الذهني</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>جلسات عمل تفاعلية لتنظيم الطاقة ومقاومة الإجهاد التنفيذي.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* INQUIRY FORM */}
          <div className="card-luxury" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
              طلب استفسار خاص حول العضويات أو البرامج
            </h3>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">الاسم الكريم *</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل الاسم بالكامل"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">اسم الجهة / الشركة (اختياري)</label>
                    <input
                      type="text"
                      placeholder="مثال: شركة..."
                      value={inquiryData.org}
                      onChange={(e) => setInquiryData({ ...inquiryData, org: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">رقم الجوال *</label>
                    <input
                      type="tel"
                      required
                      placeholder="05X XXX XXXX"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">البريد الإلكتروني</label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">ترافق الاستفسار أو الملاحظات الخاصة</label>
                  <textarea
                    rows="3"
                    placeholder="اذكر باختصار نوع العضوية أو عدد القيادات التي تود الاستفسار عنها..."
                    value={inquiryData.details}
                    onChange={(e) => setInquiryData({ ...inquiryData, details: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>إرسال طلب الانضمام والاستفسار</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--color-gold)' }}>
                <CheckCircle2 size={48} style={{ margin: '0 auto 1rem auto' }} />
                <h3>تم استلام استفسارك بنجاح أ. {inquiryData.name}</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                  سيتواصل معك مسئول العضويات والخدمات الخاصة بالإدارة لإفادتك بكافة التفاصيل وإجراءات التنسيق.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
