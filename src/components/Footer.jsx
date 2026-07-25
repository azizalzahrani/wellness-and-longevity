import React from 'react';
import { clinicInfo } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Footer({ setActivePage, onOpenBooking }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-architectural">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="logo-brand" style={{ marginBottom: '1.2rem', color: '#FFFFFF' }}>
              <svg className="logo-icon-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#C09A53' }}>
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 8V32M8 20H32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="20" cy="20" r="3" fill="currentColor" />
              </svg>
              <div className="logo-text-group">
                <div className="logo-text-title" style={{ color: '#FFFFFF' }}>{clinicInfo.name}</div>
                <div className="logo-text-sub" style={{ color: 'rgba(232,227,218,0.7)' }}>{clinicInfo.tagline}</div>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'rgba(232, 227, 218, 0.75)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              عيادة أثير لطب العافية وتطوير العمر بالرياض. رعاية صحية استباقية مخصصة تعتمد أحدث البراهين العلمية، وتضمن أقصى درجات الخصوصية والراحة.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '0.7rem 1.4rem', fontSize: '0.92rem' }}>
                احجز استشارتك
              </button>
              <a
                href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '0.7rem 1.4rem', fontSize: '0.92rem' }}
              >
                <MessageCircle size={16} />
                <span>الواتساب</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">الاقسام الرئيسية</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleNavClick('about')} className="footer-link">عن العيادة</button></li>
              <li><button onClick={() => handleNavClick('services')} className="footer-link">خدماتنا الطبية</button></li>
              <li><button onClick={() => handleNavClick('pathways')} className="footer-link">مسارات الرعاية</button></li>
              <li><button onClick={() => handleNavClick('specialists')} className="footer-link">نخبة الأطباء</button></li>
              <li><button onClick={() => handleNavClick('experience')} className="footer-link">تجربة العيادة</button></li>
              <li><button onClick={() => handleNavClick('insights')} className="footer-link">الصحيفة الطبية</button></li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h4 className="footer-col-title">الأنظمة والخصوصية</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleNavClick('legal')} className="footer-link">سياسة الخصوصية</button></li>
              <li><button onClick={() => handleNavClick('legal')} className="footer-link">الشروط والأحكام</button></li>
              <li><button onClick={() => handleNavClick('legal')} className="footer-link">الإخلاء الطبي المعتمد</button></li>
              <li><button onClick={() => handleNavClick('legal')} className="footer-link">سياسة المواعيد والإلغاء</button></li>
              <li><button onClick={() => handleNavClick('legal')} className="footer-link">سرية المراجعين</button></li>
              <li><button onClick={() => handleNavClick('faqs')} className="footer-link">الأسئلة الشائعة</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">التواصل والزيارة</h4>
            <ul className="footer-links-list" style={{ gap: '1.2rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: '#C09A53', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem' }}>{clinicInfo.address}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#C09A53', flexShrink: 0 }} />
                <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} style={{ fontSize: '0.92rem', dir: 'ltr' }}>{clinicInfo.phone}</a>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: '#C09A53', flexShrink: 0 }} />
                <a href={`mailto:${clinicInfo.email}`} style={{ fontSize: '0.92rem' }}>{clinicInfo.email}</a>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Clock size={18} style={{ color: '#C09A53', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.88rem' }}>{clinicInfo.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Medical Disclaimer Box */}
        <div className="footer-disclaimer-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#C09A53', fontWeight: 600 }}>
            <ShieldCheck size={18} />
            <span>إشعار طبي مسئول</span>
          </div>
          {clinicInfo.disclaimer}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} عيادة أثير لطب العافية وتطوير العمر - الرياض. جميع الحقوق محفوظة.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button onClick={() => handleNavClick('legal')} className="footer-link" style={{ fontSize: '0.88rem' }}>الخصوصية</button>
            <button onClick={() => handleNavClick('legal')} className="footer-link" style={{ fontSize: '0.88rem' }}>الشروط</button>
            <button onClick={() => handleNavClick('contact')} className="footer-link" style={{ fontSize: '0.88rem' }}>الموقع والوصول</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
