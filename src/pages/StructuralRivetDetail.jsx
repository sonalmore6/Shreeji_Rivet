import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { structuralRivetProducts } from '../data/structuralRivets';
import QuoteModal from '../components/QuoteModal';
import SEO from '../components/SEO';
import { SITE_URL } from '../seo/seoConfig';

const DARK_BG = 'linear-gradient(135deg,#060E1F 0%,#0B1426 45%,#0D1B35 100%)';

export default function StructuralRivetDetail() {
  const { id } = useParams();
  const product = structuralRivetProducts.find((p) => p.id === id);
  const [quoteOpen, setQuoteOpen] = useState(false);

  if (!product) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20, padding: 40 }}>
        <i className="bi bi-exclamation-circle" style={{ fontSize: 48, color: '#CBD5E1' }}></i>
        <h2 style={{ color: '#0F172A', fontWeight: 800 }}>Product not found</h2>
        <Link to="/structural-rivets" className="btn-sm-blue">← Back to Structural Rivets</Link>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title={`${product.name} — Structural Rivet`}
        description={product.desc}
        keywords={`${product.name}, Monobolt Rivet, Hemlock Rivet, Structural Rivet, Shreeji Rivet India`}
        path={`/structural-rivets/${product.id}`}
        image={`${SITE_URL}${product.img}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.desc,
          image: `${SITE_URL}${product.img}`,
          brand: { '@type': 'Brand', name: 'Shreeji Rivet India Pvt. Ltd.' },
          category: 'Structural Rivet',
        }}
      />

      {/* ══ HERO ══ */}
      <section style={{ background: DARK_BG, padding: '80px 0 70px', position: 'relative', overflow: 'hidden' }}>
        <div className="blob blob-abs" style={{ width: 500, height: 500, top: '-30%', right: '-8%', background: 'radial-gradient(circle,rgba(220,38,38,.14) 0%,transparent 70%)' }} />
        <div className="blob2 blob-abs" style={{ width: 350, height: 350, bottom: '-20%', left: '-5%', background: 'radial-gradient(circle,rgba(14,165,233,.1) 0%,transparent 70%)' }} />
        <div className="dark-grid-overlay" />

        <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: '.8rem', flexWrap: 'wrap' }}>
            <Link to="/products" style={{ color: '#38BDF8', textDecoration: 'none' }}>Products</Link>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>/</span>
            <Link to="/structural-rivets" style={{ color: '#38BDF8', textDecoration: 'none' }}>Structural Rivets</Link>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,.6)' }}>{product.name}</span>
          </div>

          <div className="row align-items-center g-5">

            {/* Product image */}
            <div className="col-12 col-md-5 s-hide-l">
              <div style={{
                background: 'rgba(255,255,255,.06)', borderRadius: 24, padding: 44,
                display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 300,
                border: '1px solid rgba(220,38,38,.2)',
                boxShadow: '0 0 60px rgba(220,38,38,.06)',
              }}>
                <img src={product.img} alt={product.name} style={{ maxHeight: 260, maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 32px rgba(220,38,38,.15))' }} />
              </div>
            </div>

            {/* Product info */}
            <div className="col-12 col-md-7 s-hide-r">
              <div style={{ fontSize: '.78rem', color: '#FCA5A5', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 14 }}>
                {product.badge}
              </div>
              <h1 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 18, lineHeight: 1.15 }}>
                {product.name}
              </h1>
              <p style={{ color: 'rgba(255,255,255,.65)', lineHeight: 1.85, marginBottom: 28, fontSize: '1rem' }}>
                {product.heroDesc}
              </p>

              {/* Feature chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
                {product.chips.map((chip) => (
                  <span key={chip} style={{
                    padding: '8px 18px', borderRadius: 50, fontSize: '.8rem', fontWeight: 600,
                    background: 'rgba(220,38,38,.12)', border: '1px solid rgba(220,38,38,.3)',
                    color: '#FCA5A5',
                  }}>{chip}</span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button onClick={() => setQuoteOpen(true)} className="btn-gold" style={{ borderRadius: 60, padding: '13px 32px', border: 'none', cursor: 'pointer' }}>
                  Get Quote <i className="bi bi-arrow-right"></i>
                </button>
                <Link to="/structural-rivets" style={{
                  borderRadius: 60, padding: '13px 24px', border: '1.5px solid rgba(255,255,255,.2)',
                  color: 'rgba(255,255,255,.7)', textDecoration: 'none', fontSize: '.9rem', fontWeight: 600,
                  display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all .25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(252,165,165,.5)'; e.currentTarget.style.color = '#FCA5A5'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.2)'; e.currentTarget.style.color = 'rgba(255,255,255,.7)'; }}
                >
                  <i className="bi bi-arrow-left"></i> Back
                </Link>
              </div>
            </div>

          </div>
        </div>

        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* ══ OVERVIEW ══ */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container-lg">
          <div className="text-center s-hide mb-5">
            <div className="section-badge badge-light d-inline-flex mb-3">About This Product</div>
            <h2 className="section-title">Product <span style={{ color: '#DC2626' }}>Overview</span></h2>
          </div>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            {product.overview.map((para, i) => (
              <p key={i} style={{ color: '#475569', lineHeight: 1.9, fontSize: '1rem', marginBottom: i < product.overview.length - 1 ? 20 : 0 }}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SPECIFICATIONS ══ */}
      <section style={{ padding: '80px 0', background: '#F0F7FF' }}>
        <div className="container-lg">
          <div className="text-center s-hide mb-5">
            <div className="section-badge badge-light d-inline-flex mb-3">Technical Data</div>
            <h2 className="section-title">Product <span style={{ color: '#DC2626' }}>Specifications</span></h2>
          </div>
          <div className="row g-4 justify-content-center">
            {product.specs.map((s, i) => (
              <div key={s.title} className={`col-12 col-md-4 s-hide d${i + 1}`}>
                <div style={{
                  padding: '36px 28px', borderRadius: 20, background: '#fff', textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(15,23,42,.06)', border: '1px solid rgba(220,38,38,.1)',
                  transition: 'all .3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(220,38,38,.1)'; e.currentTarget.style.borderColor = 'rgba(220,38,38,.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(15,23,42,.06)'; e.currentTarget.style.borderColor = 'rgba(220,38,38,.1)'; }}
                >
                  <div style={{ width: 60, height: 60, borderRadius: 16, background: 'rgba(220,38,38,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <i className={`bi ${s.icon}`} style={{ color: '#DC2626', fontSize: 26 }}></i>
                  </div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '.95rem', marginBottom: 10 }}>{s.title}</div>
                  <div style={{ fontWeight: 700, color: '#DC2626', fontSize: '1.15rem', marginBottom: 8 }}>{s.value}</div>
                  <div style={{ color: '#94A3B8', fontSize: '.8rem' }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ KEY FEATURES ══ */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container-lg">
          <div className="text-center s-hide mb-5">
            <div className="section-badge badge-light d-inline-flex mb-3">Why Choose This</div>
            <h2 className="section-title">Key <span style={{ color: '#DC2626' }}>Features</span></h2>
          </div>
          <div className="row g-4 justify-content-center">
            {product.features.map((f, i) => (
              <div key={f.title} className={`col-12 col-md-4 s-hide d${i + 1}`}>
                <div style={{
                  padding: '30px 28px', borderRadius: 20, height: '100%',
                  background: 'linear-gradient(135deg,#FFF5F5 0%,#fff 100%)',
                  border: '1.5px solid rgba(220,38,38,.1)',
                  transition: 'all .3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(220,38,38,.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(220,38,38,.1)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(220,38,38,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <i className="bi bi-check-circle-fill" style={{ color: '#DC2626', fontSize: 18 }}></i>
                    </div>
                    <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '.97rem', lineHeight: 1.3 }}>{f.title}</div>
                  </div>
                  <div style={{ width: 36, height: 3, background: 'linear-gradient(90deg,#DC2626,#F87171)', borderRadius: 20, marginBottom: 14, marginLeft: 50 }} />
                  <p style={{ color: '#64748B', fontSize: '.875rem', lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ background: DARK_BG, padding: '70px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="blob2 blob-abs" style={{ width: 400, height: 400, top: '-40%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle,rgba(220,38,38,.08) 0%,transparent 70%)' }} />
        <div className="container-md s-hide" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: 12 }}>
            Interested in <span style={{ color: '#FCA5A5' }}>{product.name}?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.97rem', maxWidth: 500, margin: '0 auto 36px' }}>
            Contact us for pricing, custom sizes, and bulk order discounts.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button onClick={() => setQuoteOpen(true)} className="btn-gold" style={{ borderRadius: 60, padding: '14px 36px', border: 'none', cursor: 'pointer' }}>
              Get a Quote <i className="bi bi-arrow-right"></i>
            </button>
            <Link to="/structural-rivets" className="btn-outline-cyan" style={{ borderRadius: 60, padding: '14px 30px' }}>
              <i className="bi bi-arrow-left"></i> All Structural Rivets
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} defaultProduct={product.name} />
    </div>
  );
}
