import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import BookingModal from './components/BookingModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PathwaysPage from './pages/PathwaysPage';
import SpecialistsPage from './pages/SpecialistsPage';
import ExperiencePage from './pages/ExperiencePage';
import InsightsPage from './pages/InsightsPage';
import BookingPage from './pages/BookingPage';
import MembershipPage from './pages/MembershipPage';
import FAQsPage from './pages/FAQsPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

import { Calendar, Clock, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState(null);

  // Detail Modal States
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [activeArticleModal, setActiveArticleModal] = useState(null);

  const handleOpenBooking = (serviceId = null) => {
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingServiceId(null);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Router */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onOpenBooking={() => handleOpenBooking()}
            onOpenServiceModal={(service) => setActiveServiceModal(service)}
            onOpenArticleModal={(article) => setActiveArticleModal(article)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onOpenBooking={() => handleOpenBooking()}
            onOpenServiceModal={(service) => setActiveServiceModal(service)}
          />
        )}

        {activePage === 'pathways' && (
          <PathwaysPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {activePage === 'specialists' && (
          <SpecialistsPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {activePage === 'experience' && (
          <ExperiencePage onOpenBooking={() => handleOpenBooking()} />
        )}

        {activePage === 'insights' && (
          <InsightsPage
            onOpenArticleModal={(article) => setActiveArticleModal(article)}
          />
        )}

        {activePage === 'booking' && (
          <BookingPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {activePage === 'membership' && (
          <MembershipPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {activePage === 'faqs' && (
          <FAQsPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {activePage === 'contact' && (
          <ContactPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {activePage === 'legal' && (
          <LegalPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={bookingServiceId}
      />

      {/* Service Detail Modal */}
      {activeServiceModal && (
        <Modal
          isOpen={!!activeServiceModal}
          onClose={() => setActiveServiceModal(null)}
          title={activeServiceModal.title}
        >
          <div style={{ padding: '0.5rem 0' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600, backgroundColor: 'var(--color-gold-soft)', padding: '0.3rem 0.9rem', borderRadius: 'var(--radius-full)' }}>
              {activeServiceModal.category}
            </span>

            <p style={{ marginTop: '1.2rem', fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              {activeServiceModal.summary}
            </p>

            <div style={{ margin: '1.5rem 0', backgroundColor: 'var(--color-bg-surface)', padding: '1.2rem', borderRadius: 'var(--radius-sm)' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>مكونات رحلة الرعاية في هذه الخدمة:</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {activeServiceModal.components.map((comp, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-charcoal)', marginBottom: '0.4rem' }}>توقعات الاستشارة والزيارة الأولى:</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                {activeServiceModal.consultationExpectations}
              </p>
            </div>

            <div className="disclaimer-banner" style={{ fontSize: '0.85rem' }}>
              {activeServiceModal.disclaimer}
            </div>

            <button
              onClick={() => {
                const id = activeServiceModal.id;
                setActiveServiceModal(null);
                handleOpenBooking(id);
              }}
              className="btn-primary"
              style={{ width: '100%', marginTop: '1.5rem' }}
            >
              <Calendar size={18} />
              <span>احجز استشارة في هذا التخصص</span>
            </button>
          </div>
        </Modal>
      )}

      {/* Article Detail Modal */}
      {activeArticleModal && (
        <Modal
          isOpen={!!activeArticleModal}
          onClose={() => setActiveArticleModal(null)}
          title={activeArticleModal.title}
        >
          <div style={{ padding: '0.5rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--color-gold)', fontWeight: 600, marginBottom: '1rem', borderBottom: 'var(--border-subtle)', paddingBottom: '0.8rem' }}>
              <span>{activeArticleModal.category} • {activeArticleModal.date}</span>
              <span>{activeArticleModal.readTime}</span>
            </div>

            <div style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              بقلم: {activeArticleModal.author}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              {activeArticleModal.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="disclaimer-banner" style={{ marginTop: '2rem', fontSize: '0.85rem' }}>
              تنويه: المحتوى المقروء يهدف للثقافة الصحية التوعوية فقط، ولا يُعد تشخيصاً أو علاجاً طبياً مستقلاً.
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
