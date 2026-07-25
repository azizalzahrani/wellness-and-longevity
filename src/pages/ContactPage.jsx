import React, { useState } from 'react';
import { clinicInfo } from '../data/clinicData';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Car, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage({ onOpenBooking }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "استفسار عام",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="section-badge">تواصل معنا - الرياض</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            موقع العيادة والوصول المباشر
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            يسعدنا استقبالك في حرَم العيادة بموقعها المتميز في حي الهدا بالرياض.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & MAP GRID */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
            {/* Contact Details Card */}
            <div>
              <span className="section-badge">تفاصيل التواصل والزيارة</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>
                نحن هنا لخدمتك وتأمين راحتك
              </h2>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-gold-soft)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.2rem' }}>العنوان والموقع</h3>
                    <p style={{ fontSize: '0.98rem', color: 'var(--color-text-secondary)', margin: 0 }}>{clinicInfo.address}</p>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-gold-soft)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.2rem' }}>الهاتف المباشر</h3>
                    <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} style={{ fontSize: '0.98rem', color: 'var(--color-text-secondary)', dir: 'ltr', display: 'inline-block' }}>
                      {clinicInfo.phone}
                    </a>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#E8F9EE', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.2rem' }}>الواتساب الطبي المباشر</h3>
                    <a href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.98rem', color: '#25D366', fontWeight: 600 }}>
                      {clinicInfo.whatsapp} (تنسيق المواعيد المباشر)
                    </a>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-gold-soft)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.2rem' }}>أوقات العمل</h3>
                    <p style={{ fontSize: '0.98rem', color: 'var(--color-text-secondary)', margin: 0 }}>{clinicInfo.workingHours}</p>
                  </div>
                </li>
              </ul>

              {/* Parking Guidance Box */}
              <div className="card-luxury" style={{ marginTop: '2.5rem', backgroundColor: 'var(--color-bg-surface)', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-gold)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  <Car size={20} />
                  <span>خدمة إيقاف السيارات والوصول الخاص</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.7 }}>
                  توفر العيادة خدمة الفاليه (Valet Parking) وتوقف السيارات الخاص للمراجعين، مع وجود مدخل خاص ومغطى يضمن الخصوصية والحماية من الأجواء الخارجية.
                </p>
              </div>
            </div>

            {/* Interactive SVG Map Graphic Card */}
            <div className="card-luxury" style={{ backgroundColor: 'var(--color-charcoal)', color: '#FFFFFF', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="section-badge" style={{ backgroundColor: 'rgba(192, 154, 83, 0.2)', color: 'var(--color-gold)' }}>
                  خريطة الوصول بالرياض
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                  طريق الأميرة نورة بنت عبدالرحمن - حي الهدا
                </h3>

                {/* Styled SVG Map Illustration */}
                <div style={{
                  width: '100%',
                  height: '240px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(192, 154, 83, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  margin: '1.5rem 0'
                }}>
                  <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Grid Road Pattern */}
                    <path d="M0 60H400M0 180H400M120 0V240M280 0V240" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <path d="M40 120H360" stroke="rgba(192, 154, 83, 0.4)" strokeWidth="12" strokeDasharray="8 8" />

                    {/* Clinic Marker Pin */}
                    <circle cx="200" cy="120" r="32" fill="rgba(192, 154, 83, 0.2)" />
                    <circle cx="200" cy="120" r="16" fill="#C09A53" />
                    <circle cx="200" cy="120" r="6" fill="#FFFFFF" />
                  </svg>

                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(20, 24, 28, 0.9)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    color: 'var(--color-gold)',
                    border: '1px solid rgba(192, 154, 83, 0.4)'
                  }}>
                    مجمع أثير الطبي - حي الهدا
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{ width: '100%', color: '#FFFFFF', borderColor: 'var(--color-gold)' }}
              >
                <Navigation size={18} />
                <span>فتح الاتجاهات عبر تطبيق الخرائط</span>
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="card-luxury" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem', color: 'var(--color-charcoal)' }}>
              إرسال استفسار مباشر للإدارة
            </h3>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">الاسم الكريم *</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل الاسم بالكامل"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">رقم الجوال *</label>
                    <input
                      type="tel"
                      required
                      placeholder="05X XXX XXXX"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">البريد الإلكتروني</label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">موضوع الرسالة</label>
                    <select
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      className="form-select"
                    >
                      <option value="استفسار عام">استفسار عام</option>
                      <option value="حجز جناح خاص">حجز جناح خاص</option>
                      <option value="العضويات والرعاية المؤسسية">العضويات والرعاية المؤسسية</option>
                      <option value="ملاحظات واقتراحات">ملاحظات واقتراحات</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">تفاصيل الرسالة</label>
                  <textarea
                    rows="4"
                    placeholder="اكتب استفسارك أو ملاحظتك بوضوح..."
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>إرسال الرسالة للإدارة</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--color-gold)' }}>
                <CheckCircle2 size={48} style={{ margin: '0 auto 1rem auto' }} />
                <h3>تم إرسال رسالتك بنجاح أ. {contactData.name}</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                  سيتواصل معك مسئول التنسيق بالإدارة خلال ساعات العمل.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
