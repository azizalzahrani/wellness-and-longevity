import React, { useState } from 'react';
import { legalDocs } from '../data/clinicData';
import { ShieldCheck, FileText, Lock, AlertTriangle, Clock } from 'lucide-react';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("privacy");

  const tabs = [
    { id: "privacy", label: "سياسة الخصوصية" },
    { id: "terms", label: "الشروط والأحكام" },
    { id: "disclaimer", label: "الإخلاء الطبي" },
    { id: "cookies", label: "ملفات الارتباط" },
    { id: "cancellation", label: "سياسة الإلغاء" },
    { id: "confidentiality", label: "سرية المراجعين" }
  ];

  const activeDoc = legalDocs[activeTab] || legalDocs.privacy;

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="section-badge">اللوائح والأحكام الطبية</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            الأنظمة والشفافية الطبية والمعلوماتية
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            نلتزم بكافة الأنظمة واللوائح الصادرة عن الهيئات المعتمدة في المملكة العربية السعودية لضمان حماية بياناتك وسلامة الخدمات.
          </p>

          {/* LEGAL TABS */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  transition: 'var(--transition-fast)',
                  backgroundColor: activeTab === tab.id ? 'var(--color-gold)' : 'var(--color-bg-card)',
                  color: activeTab === tab.id ? '#FFFFFF' : 'var(--color-text-primary)',
                  border: activeTab === tab.id ? '1px solid var(--color-gold)' : '1px solid var(--color-stone)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE LEGAL DOCUMENT */}
      <section className="section-padding">
        <div className="container container-narrow">
          <div className="card-luxury" style={{ padding: '3.5rem 3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: 'var(--border-subtle)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <span className="section-badge">وثيقة رسمية</span>
                <h2 style={{ fontSize: '2rem', marginTop: '0.3rem', color: 'var(--color-charcoal)' }}>
                  {activeDoc.title}
                </h2>
              </div>

              <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                آخر تحديث: {activeDoc.updated}م
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              {activeDoc.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: 'var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.92rem' }}>
              <ShieldCheck size={20} />
              <span>عيادة أثير لطب العافية وتطوير العمر - الرياض، المملكة العربية السعودية.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
