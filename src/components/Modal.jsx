import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} aria-modal="true" role="dialog">
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn" aria-label="إغلاق النافذة">
          <X size={20} />
        </button>

        {title && (
          <h3 style={{ marginBottom: '1.5rem', paddingLeft: '2rem', color: 'var(--color-charcoal)' }}>
            {title}
          </h3>
        )}

        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
