import React, { useState } from 'react';
import Modal from './Modal';
import { servicesData, carePathways, specialistsData, clinicInfo } from '../data/clinicData';
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialServiceId }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: initialServiceId || servicesData[0].id,
    specialistType: "أي استشاري متخصص",
    date: "",
    timeSlot: "صباحاً (9:00 ص - 12:00 م)",
    fullName: "",
    phone: "",
    email: "",
    notes: "",
    privacyConsent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    "صباحاً (9:00 ص - 12:00 م)",
    "ظهراً (1:00 م - 4:00 م)",
    "مساءً (5:00 م - 8:00 م)"
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1 && !formData.serviceType) return;
    if (step === 2 && !formData.date) return;
    if (step === 3) {
      if (!formData.fullName || !formData.phone || !formData.privacyConsent) return;
      setIsSubmitted(true);
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  const getSelectedServiceName = () => {
    const s = servicesData.find(item => item.id === formData.serviceType);
    if (s) return s.title;
    const p = carePathways.find(item => item.id === formData.serviceType);
    if (p) return p.title;
    return "استشارة عافية عامة";
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title={isSubmitted ? "تم استلام طلبك بنجاح" : "حجز استشارة مخصصة"}>
      {!isSubmitted ? (
        <div>
          {/* Progress Indicators */}
          <div className="wizard-progress">
            <div className={`wizard-step-node ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>1</div>
            <div className={`wizard-step-node ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>2</div>
            <div className={`wizard-step-node ${step >= 3 ? 'active' : ''}`}>3</div>
          </div>

          <form onSubmit={handleNextStep}>
            {/* STEP 1: Select Service / Pathway */}
            {step === 1 && (
              <div>
                <h4 style={{ marginBottom: '1.2rem', color: 'var(--color-charcoal)' }}>
                  الخطوة 1: اختر مجال الرعاية أو الاستشارة المطلوبة
                </h4>

                <div className="form-group">
                  <label className="form-label">الخدمات الطبية والوقائية</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <optgroup label="الخدمات والعيادات">
                      {servicesData.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="مسارات الرعاية المخصصة">
                      {carePathways.map(p => (
                        <option key={p.id} value={p.id}>{p.title}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">التخصص المفضل</label>
                  <select
                    name="specialistType"
                    value={formData.specialistType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="أي استشاري متخصص">أي استشاري متخصص يناسب حالتي</option>
                    {specialistsData.map(sp => (
                      <option key={sp.id} value={sp.name}>{sp.name} - {sp.role}</option>
                    ))}
                  </select>
                </div>

                <div className="disclaimer-banner" style={{ fontSize: '0.88rem' }}>
                  جميع الاستشارات مبنية على تقييم طبي فردي يحدد ملائمة البرامج وضوابط الرعاية.
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                  <span>الانتقال لاختيار الموعد</span>
                </button>
              </div>
            )}

            {/* STEP 2: Select Date & Time */}
            {step === 2 && (
              <div>
                <h4 style={{ marginBottom: '1.2rem', color: 'var(--color-charcoal)' }}>
                  الخطوة 2: حدد الموعد والفترة المفضلة
                </h4>

                <div className="form-group">
                  <label className="form-label">تاريخ الزيارة المقترح</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">الفترة الزمنية المفضلة</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem' }}>
                    {timeSlots.map((slot, idx) => (
                      <label key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.8rem 1rem',
                        backgroundColor: formData.timeSlot === slot ? 'var(--color-gold-soft)' : 'var(--color-bg-surface)',
                        border: formData.timeSlot === slot ? 'var(--border-gold)' : '1px solid var(--color-stone)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer'
                      }}>
                        <input
                          type="radio"
                          name="timeSlot"
                          value={slot}
                          checked={formData.timeSlot === slot}
                          onChange={handleInputChange}
                          style={{ accentColor: 'var(--color-gold)' }}
                        />
                        <span style={{ fontSize: '0.95rem', fontWeight: formData.timeSlot === slot ? 600 : 400 }}>{slot}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.8rem' }}>
                  <button type="button" onClick={() => setStep(1)} className="btn-secondary" style={{ flex: 1 }}>
                    السابق
                  </button>
                  <button type="submit" className="btn-primary" style={{ flex: 2 }}>
                    <span>الانتقال لبيانات المراجع</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Patient Information */}
            {step === 3 && (
              <div>
                <h4 style={{ marginBottom: '1.2rem', color: 'var(--color-charcoal)' }}>
                  الخطوة 3: بيانات المراجع والخصوصية
                </h4>

                <div className="form-group">
                  <label className="form-label">الاسم الكريم بالكامل *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="مثال: عبدالله بن محمد السليمان"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">رقم الجوال *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="05X XXX XXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">البريد الإلكتروني</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">أهداف الزيارة أو ملاحظات خاصة (اختياري)</label>
                  <textarea
                    name="notes"
                    rows="3"
                    placeholder="اكتب باختصار الأهداف الصحية أو تطلعاتك من الاستشارة..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <label className="form-checkbox-label">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    required
                    checked={formData.privacyConsent}
                    onChange={handleInputChange}
                    className="form-checkbox-input"
                  />
                  <span>أوافق على سياسة الخصوصية وسرية المعلومات الطبية الخاصة بعيادة أثير.</span>
                </label>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.8rem' }}>
                  <button type="button" onClick={() => setStep(2)} className="btn-secondary" style={{ flex: 1 }}>
                    السابق
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={!formData.fullName || !formData.phone || !formData.privacyConsent}
                    style={{ flex: 2, opacity: (!formData.fullName || !formData.phone || !formData.privacyConsent) ? 0.6 : 1 }}
                  >
                    <span>تأكيد إرسال طلب الحجز</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      ) : (
        /* CONFIRMATION SCREEN */
        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-sage-soft)',
            color: 'var(--color-sage)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
          }}>
            <CheckCircle2 size={40} />
          </div>

          <h3 style={{ marginBottom: '0.8rem', color: 'var(--color-charcoal)' }}>
            نشكرك أ. {formData.fullName}
          </h3>

          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.8rem', lineHeight: 1.8 }}>
            تم تسجيل طلبك بنجاح. سيتواصل معك المنسق الطبي الخاص خلال ساعات العمل لتأكيد ملائمة الموعد وتزويدك بتفاصيل الاستعداد للزيارة.
          </p>

          <div style={{
            backgroundColor: 'var(--color-bg-surface)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            textAlign: 'right',
            marginBottom: '2rem',
            border: 'var(--border-subtle)'
          }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--color-gold)' }}>ملخص الموعد المقترح:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', fontSize: '0.92rem' }}>
              <div><strong>الخدمة:</strong> {getSelectedServiceName()}</div>
              <div><strong>التخصص:</strong> {formData.specialistType}</div>
              <div><strong>التاريخ:</strong> {formData.date}</div>
              <div><strong>الفترة:</strong> {formData.timeSlot}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <a
              href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                `السلام عليكم، قمت بتقديم طلب حجز استشارة باسم: ${formData.fullName} - الخدمة: ${getSelectedServiceName()}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageCircle size={20} />
              <span>متابعة الطلب فوراً عبر الواتساب</span>
            </a>

            <button onClick={handleReset} className="btn-secondary" style={{ width: '100%' }}>
              إغلاق النافذة
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
