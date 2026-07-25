import React, { useState } from 'react';
import { journalCategories, articlesData } from '../data/insightsData';
import { Search, Clock, ArrowLeft, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function InsightsPage({ onOpenArticleModal }) {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const filteredArticles = articlesData.filter(art => {
    const matchesCategory = selectedCategory === "الكل" || art.category === selectedCategory;
    const matchesSearch = art.title.includes(searchQuery) || art.summary.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
  };

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: 'var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="section-badge">الصحيفة الطبية والإرشادية</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            مأثورات ورؤى تثقيفية في طب تطوير العمر
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            مقالات ودراسات موثوقة نضعها بين يديك لإثراء معرفتك بالصحة الاستباقية، هندسة النوم، التغذية الأيضية، وصحة الأنسجة.
          </p>

          {/* SEARCH & CATEGORY FILTERS */}
          <div style={{ maxWidth: '600px', margin: '2rem auto 0 auto' }}>
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <input
                type="text"
                placeholder="ابحث عن موضوع أو مقال طبي..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingRight: '3rem', borderRadius: 'var(--radius-full)' }}
              />
              <Search size={20} style={{ position: 'absolute', right: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              {journalCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.5rem 1.2rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'var(--transition-fast)',
                    backgroundColor: selectedCategory === cat ? 'var(--color-gold)' : 'var(--color-bg-card)',
                    color: selectedCategory === cat ? '#FFFFFF' : 'var(--color-text-primary)',
                    border: selectedCategory === cat ? '1px solid var(--color-gold)' : '1px solid var(--color-stone)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="section-padding">
        <div className="container">
          {filteredArticles.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
              {filteredArticles.map((article) => (
                <div key={article.id} className="card-luxury" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600, marginBottom: '0.8rem' }}>
                      <span style={{ backgroundColor: 'var(--color-gold-soft)', padding: '0.2rem 0.8rem', borderRadius: 'var(--radius-full)' }}>
                        {article.category}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-text-muted)' }}>
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem', color: 'var(--color-charcoal)', lineHeight: 1.4 }}>
                      {article.title}
                    </h3>

                    <p style={{ fontSize: '0.98rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                      {article.summary}
                    </p>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1rem', borderTop: 'var(--border-subtle)', paddingTop: '0.8rem' }}>
                      بقلم: {article.author}
                    </div>

                    <button
                      onClick={() => onOpenArticleModal(article)}
                      className="btn-outline-gold"
                      style={{ width: '100%', justifyContent: 'space-between' }}
                    >
                      <span>قراءة المقال الكامل</span>
                      <ArrowLeft size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-muted)' }}>
              <h3>لم نجد مقالات تطابق بحثك الحياتي.</h3>
              <p>جرّب البحث عن كلمات أخرى مثل "النوم"، "الأيض"، أو "الكولاجين".</p>
            </div>
          )}

          {/* EDUCATIONAL DISCLAIMER NOTICE */}
          <div className="disclaimer-banner" style={{ marginTop: '4rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-gold)', marginBottom: '0.3rem' }}>
              <ShieldAlert size={18} />
              <span>تنويه تثقيفي مسؤول</span>
            </div>
            المحتوى المنشور في الصحيفة الطبية يهدف لنشر الوعي والتثقيف الوقائي فقط، ولا ينبغي اعتماده كبديل عن الاستشارة الطبية المباشرة مع طبيبك الاستشاري.
          </div>

          {/* NEWSLETTER SUBSCRIBE BOX */}
          <div className="card-luxury" style={{ backgroundColor: 'var(--color-charcoal)', color: '#FFFFFF', marginTop: '4rem', padding: '3.5rem 2.5rem', textAlign: 'center' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <span className="section-badge" style={{ backgroundColor: 'rgba(192, 154, 83, 0.2)', color: 'var(--color-gold)' }}>
                النشرة الإرشادية الشهرية
              </span>
              <h2 style={{ color: '#FFFFFF', fontSize: '2rem', marginTop: '0.6rem', marginBottom: '0.8rem' }}>
                انضم إلى نخبة القراء في طب العافية
              </h2>
              <p style={{ color: 'rgba(232, 227, 218, 0.8)', fontSize: '1rem', marginBottom: '2rem' }}>
                احصل على موجز تنفيذي شهري يتضمن أحدث الأبحاث العلمية المعتمدة في الوقاية وتطوير العمر.
              </p>

              {!newsletterSubmitted ? (
                <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  <input
                    type="email"
                    required
                    placeholder="أدخل بريدك الإلكتروني الشخصي..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="form-input"
                    style={{ flex: 1, minWidth: '260px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}
                  />
                  <button type="submit" className="btn-primary">
                    <span>اشتراك بمجلة أثير</span>
                  </button>
                </form>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', color: 'var(--color-gold)', fontWeight: 600 }}>
                  <CheckCircle2 size={24} />
                  <span>شكراً لاشتراكك. تم تأهيل بريدك الإلكتروني لاستلام موجز أثير الشهري.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
