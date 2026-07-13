import { Link } from 'react-router-dom';
import { selfDrillingScrewtProducts } from '../data/selfDrillingScrews';
import SEO from '../components/SEO';
import KeywordAliases from '../components/KeywordAliases';

const DARK_BG = 'linear-gradient(135deg,#060E1F 0%,#0B1426 45%,#0D1B35 100%)';
const ACCENT  = '#059669';
const SOFT    = '#6EE7B7';
const titlecolor = {
  background: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 50%, #67E8F9 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export default function SelfDrillingScrews() {
  return (
    <div>
      <SEO
        title="Self Drilling Screws (SDS) Manufacturer in Nashik"
        description="SDS, Self Drilling Screw, Drilling Screw & Self Tap Screw supplier in Nashik, Maharashtra — Bugle Head, Hex Washer Head, Wafer, Countersunk and specialty self-drilling screws for roofing, cladding, and structural steel."
        keywords="SDS, Self Drilling Screw, Drilling Screw, Self Tap Screw, self drilling screw Nashik, Shreeji Rivet India"
        path="/self-drilling-screws"
      />

      {/* ══ HERO ══ */}
      <section style={{ background: DARK_BG, padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="blob blob-abs" style={{ width: 450, height: 450, top: '-25%', right: '-6%', background: 'radial-gradient(circle,rgba(5,150,105,.16) 0%,transparent 70%)' }} />
        <div className="blob2 blob-abs" style={{ width: 300, height: 300, bottom: '-20%', left: '-4%', background: 'radial-gradient(circle,rgba(6,182,212,.1) 0%,transparent 70%)' }} />
        <div className="dark-grid-overlay" />
        <div className="container-md" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: '.8rem' }}>
            <Link to="/products" style={{ color: '#38BDF8', textDecoration: 'none' }}>Products</Link>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Self-Drilling Screws</span>
          </div>
          <div className="section-badge badge-dark h-badge d-inline-flex mb-4">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} /> Specialty
          </div>
          <h1 className="h-anim-1" style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4.5vw,3.2rem)', marginBottom: 16, lineHeight: 1.1 }}>
            Self-Drilling <span style={titlecolor}>Screws</span>
          </h1>
          <p className="h-anim-2" style={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            Self-drilling screws combine a drill point and cutting thread in a single fastener — eliminating pre-drilling in metal, timber, and masonry applications. Available in 15 head types for roofing, cladding, structural steel, HVAC, and speciality uses.
          </p>
          <KeywordAliases items={['SDS', 'Drilling Screw', 'Self Tap Screw']} />
        </div>
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* ══ PRODUCT GALLERY ══ */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container-xl">
          <div className="text-center s-hide mb-5">
            <div className="section-badge badge-light d-inline-flex mb-3">Product Collection</div>
            <h2 className="section-title">Self-Drilling Screws <span style={{ color: '#0EA5E9' }}>Gallery</span></h2>
            <p className="section-sub mt-2" style={{ maxWidth: 680, margin: '12px auto 0' }}>
              Self-drilling screws combine a drill point and cutting thread in a single fastener — eliminating pre-drilling in metal, timber, and masonry applications. Click any product to view full specifications.
            </p>
          </div>

          <div className="row g-4">
            {selfDrillingScrewtProducts.map((p, i) => (
              <div key={p.id} className={`col-12 col-sm-6 col-lg-4 s-hide d${(i % 3) + 1}`}>
                <Link to={`/self-drilling-screws/${p.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="blind-rivet-card">
                    <div style={{ height: 200, background: '#F0F7FF', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                      <img src={p.img} alt={p.name} className="blind-rivet-card-img" />
                      <span style={{
                        position: 'absolute', top: 14, right: 14,
                        background: 'linear-gradient(135deg,#0EA5E9,#0284C7)',
                        color: '#fff', fontWeight: 900, fontSize: '.72rem', letterSpacing: '.1em',
                        padding: '4px 10px', borderRadius: 6,
                      }}>{p.code}</span>
                    </div>
                    <div style={{ padding: '20px 22px 22px' }}>
                      <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '.93rem', marginBottom: 8 }}>{p.name}</div>
                      <p style={{ color: '#64748B', fontSize: '.82rem', lineHeight: 1.7, margin: '0 0 16px' }}>{p.desc}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#0EA5E9', fontWeight: 700, fontSize: '.82rem' }}>
                        View Details <i className="bi bi-arrow-right-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHERE TO USE ══ */}
      <section style={{ padding: '80px 0', background: '#F0F7FF' }}>
        <div className="container-xl">
          <div className="text-center s-hide mb-5">
            <div className="section-badge badge-light d-inline-flex mb-3">Applications</div>
            <h2 className="section-title">Where to Use <span style={{ color: '#38BDF8' }}>Self-Drilling Screws</span></h2>
            <p className="section-sub mt-2">Eliminating pre-drilling across metal, timber, and masonry construction applications</p>
          </div>
          <div className="row g-4">
            {[
              { icon: 'bi-house-fill',           title: 'Roofing & Cladding',    desc: 'Metal roofing sheets, wall cladding panels, and flashings on industrial and commercial buildings.',            color: '#059669' },
              { icon: 'bi-columns-gap',          title: 'Steel Framing',         desc: 'Light gauge steel stud walls, ceiling tracks, and structural steel purlin-to-rafter connections.',             color: '#2563EB' },
              { icon: 'bi-wind',                 title: 'HVAC Ductwork',         desc: 'Sheet metal duct assembly, fan housing fabrication, and ventilation system installation.',                      color: '#0EA5E9' },
              { icon: 'bi-car-front-fill',       title: 'Automotive',            desc: 'Body panel assembly, trim fixings, and underbody components in car and commercial vehicle manufacturing.',       color: '#DC2626' },
              { icon: 'bi-sun-fill',             title: 'Solar Installations',   desc: 'Mounting frames, rail-to-purlin connections, and panel bracket fixings on rooftop solar systems.',             color: '#D97706' },
              { icon: 'bi-tree-fill',            title: 'Timber to Steel',       desc: 'Timber batten to steel purlin, decking to joist, and wood-to-metal connections in construction and fit-out.',  color: '#7C3AED' },
            ].map((pt, i) => (
              <div key={pt.title} className={`col-12 col-sm-6 col-md-4 s-hide d${(i % 3) + 1}`}>
                <div className="why-point-card" style={{ '--accent': pt.color }}>
                  <div className="why-card-top-bar" />
                  <div className="why-num-box" style={{ background: `linear-gradient(135deg,${pt.color}cc,${pt.color})`, boxShadow: `0 8px 28px ${pt.color}44` }}>
                    <i className={`bi ${pt.icon}`} style={{ color: '#fff', fontSize: 24 }}></i>
                  </div>
                  <div className="why-card-title">{pt.title}</div>
                  <div className="why-card-desc">{pt.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* ══ CTA ══ */}
      <section style={{ background: DARK_BG, padding: '70px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="blob2 blob-abs" style={{ width: 400, height: 400, top: '-40%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle,rgba(5,150,105,.1) 0%,transparent 70%)' }} />
        <div className="container-md s-hide" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: 12 }}>
            Need a <span style={{ color: SOFT }}>Custom Specification?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.97rem', maxWidth: 500, margin: '0 auto 36px' }}>
            Tell us the head type, drill point, size, and coating — we'll supply exactly what your project requires.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/contact" className="btn-gold" style={{ borderRadius: 60, padding: '14px 36px' }}>
              Get a Quote <i className="bi bi-arrow-right"></i>
            </Link>
            <a href="tel:+919876543210" className="btn-outline-cyan" style={{ borderRadius: 60, padding: '14px 36px' }}>
              <i className="bi bi-telephone-fill"></i> Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
