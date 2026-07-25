import React, { useState, useEffect } from 'react';
import { clinicInfo } from '../data/clinicData';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';

export default function Header({ activePage, setActivePage, onOpenBooking }) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'عن العيادة' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'pathways', label: 'مسارات الرعاية' },
    { id: 'specialists', label: 'نخبة الأطباء' },
    { id: 'experience', label: 'تجربة العيادة' },
    { id: 'insights', label: 'الصحيفة الطبية' },
    { id: 'membership', label: 'العضويات' },
    { id: 'contact', label: 'اتصل بنا' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`header-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo Brand */}
          <button onClick={() => handleNavClick('home')} className="logo-brand" aria-label="أَثِير الرئيسية">
            <svg className="logo-icon-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 8V32M8 20H32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="20" cy="20" r="3" fill="currentColor" />
            </svg>
            <div>
              <div className="logo-text-title">{clinicInfo.name}</div>
              <div className="logo-text-sub">{clinicInfo.tagline}</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav aria-label="القائمة الرئيسية">
            <ul className="nav-menu-desktop">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="nav-actions-desktop">
            <button onClick={onOpenBooking} className="btn-primary">
              <Calendar size={18} />
              <span>احجز استشارتك</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="mobile-menu-btn"
            aria-label="افتح القائمة"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer-overlay ${mobileDrawerOpen ? 'open' : ''}`} onClick={() => setMobileDrawerOpen(false)}>
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <div className="logo-brand">
              <span className="logo-text-title">{clinicInfo.name}</span>
            </div>
            <button onClick={() => setMobileDrawerOpen(false)} className="modal-close-btn" aria-label="إغلاق القائمة">
              <X size={20} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            <button
              onClick={() => {
                setMobileDrawerOpen(false);
                onOpenBooking();
              }}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <Calendar size={18} />
              <span>احجز استشارتك الآن</span>
            </button>

            <a
              href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', marginTop: '0.8rem' }}
            >
              <span>واتساب المنسق الطبي</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
