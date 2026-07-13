import { Link } from 'react-router-dom';
import { rivetNutProducts } from '../data/rivetNuts';
import SEO from '../components/SEO';
import KeywordAliases from '../components/KeywordAliases';

const DARK_BG = 'linear-gradient(135deg,#060E1F 0%,#0B1426 45%,#0D1B35 100%)';
const ACCENT  = '#2563EB';

export default function RivetNuts() {
  return (
    <div>
      <SEO
        title="Rivet Nut / Insert Nut Manufacturer in Nashik"
        description="Rivet Nuts, Insert Nut, Set Nut, Rivet Insert Nut, Insert Rivet Nut & Nutsert supplier in Nashik, Maharashtra. Round, Half-Hex, Full-Hex and Sealed insert nuts in Aluminium, Steel & Stainless Steel."
        keywords="Rivet Nuts, Insert Nut, Set Nut, Rivet Insert Nut, Insert Rivet Nut, Nutsert, rivet nut Nashik, Shreeji Rivet India"
        path="/rivet-nuts"
      />

      {/* ══ HERO ══ */}
      <section style={{ background: DARK_BG, padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="blob blob-abs" style={{ width: 450, height: 450, top: '-25%', right: '-6%', background: 'radial-gradient(circle,rgba(37,99,235,.16) 0%,transparent 70%)' }} />
        <div className="blob2 blob-abs" style={{ width: 300, height: 300, bottom: '-20%', left: '-4%', background: 'radial-gradient(circle,rgba(6,182,212,.1) 0%,transparent 70%)' }} />
        <div className="dark-grid-overlay" />
        <div className="container-md" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: '.8rem' }}>
            <Link to="/products" style={{ color: '#38BDF8', textDecoration: 'none' }}>Products</Link>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Rivet Nut</span>
          </div>
          <div className="section-badge badge-dark h-badge d-inline-flex mb-4">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2563EB', display: 'inline-block' }} /> Rivet Nuts
          </div>
          <h1 className="h-anim-1" style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4.5vw,3.2rem)', marginBottom: 16, lineHeight: 1.1 }}>
            Rivet Nut <span style={{ color: '#93C5FD' }}>Collection</span>
          </h1>
          <p className="h-anim-2" style={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            12 rivet nut variants — open and closed end, round, half-hex, and full-hex body styles, in small and large flange — covering every sheet metal threading requirement from general fabrication to sealed marine assemblies.
          </p>
          <KeywordAliases items={['Insert Nut', 'Set Nut', 'Rivet Insert Nut', 'Insert Rivet Nut', 'Nutsert']} />
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
            <h2 className="section-title">Rivet Nut <span style={{ color: ACCENT }}>Gallery</span></h2>
            <p className="section-sub mt-2" style={{ maxWidth: 640, margin: '12px auto 0' }}>
              Rivet nuts create strong female threads in thin-walled materials from one side only. Select a variant to view full specifications and technical data.
            </p>
          </div>

          {/* Open End group */}
          <div className="s-hide mb-3">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 18px', borderRadius: 50, background: 'rgba(37,99,235,.08)', border: '1px solid rgba(37,99,235,.2)' }}>
              <i className="bi bi-unlock-fill" style={{ color: ACCENT, fontSize: 14 }}></i>
              <span style={{ color: ACCENT, fontWeight: 700, fontSize: '.8rem', letterSpacing: '.05em' }}>OPEN END — 6 variants</span>
            </div>
          </div>
          <div className="row g-4 mb-5">
            {rivetNutProducts.slice(0, 6).map((p, i) => (
              <div key={p.id} className={`col-12 col-sm-6 col-lg-4 s-hide d${(i % 3) + 1}`}>
                <RivetNutCard p={p} accent={ACCENT} />
              </div>
            ))}
          </div>

          {/* Close End group */}
          <div className="s-hide mb-3">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 18px', borderRadius: 50, background: 'rgba(5,150,105,.08)', border: '1px solid rgba(5,150,105,.2)' }}>
              <i className="bi bi-lock-fill" style={{ color: '#059669', fontSize: 14 }}></i>
              <span style={{ color: '#059669', fontWeight: 700, fontSize: '.8rem', letterSpacing: '.05em' }}>CLOSE END (SEALED) — 6 variants</span>
            </div>
          </div>
          <div className="row g-4">
            {rivetNutProducts.slice(6).map((p, i) => (
              <div key={p.id} className={`col-12 col-sm-6 col-lg-4 s-hide d${(i % 3) + 1}`}>
                <RivetNutCard p={p} accent="#059669" />
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
            <h2 className="section-title">Where to Use <span style={{ color: ACCENT }}>Rivet Nuts</span></h2>
            <p className="section-sub mt-2">Ideal wherever strong female threads are needed in thin-walled or single-access materials</p>
          </div>
          <div className="row g-4">
            {[
              { icon: 'bi-car-front-fill',    title: 'Automotive',          desc: 'Thin body panels, door skins, bumper brackets, and seat rail fixings where back-side access is impossible.',  color: '#2563EB' },
              { icon: 'bi-cpu-fill',          title: 'Electronics & Telecom', desc: 'Server racks, control enclosures, telecom base station housings, and PCB mounting in sheet metal chassis.', color: '#0EA5E9' },
              { icon: 'bi-easel2-fill',       title: 'Furniture & Fixtures', desc: 'Metal furniture, display racks, shelving units, and retail fixtures needing flush, reusable thread inserts.', color: '#059669' },
              { icon: 'bi-hospital-fill',     title: 'Medical Equipment',    desc: 'Thin-walled medical device enclosures and diagnostic equipment panels requiring clean, secure fastening.',    color: '#DC2626' },
              { icon: 'bi-airplane-fill',     title: 'Aerospace',            desc: 'Interior cabin fittings, overhead bin brackets, and lightweight aircraft panels with one-side access only.',   color: '#7C3AED' },
              { icon: 'bi-wind',              title: 'HVAC',                 desc: 'Duct assemblies, fan brackets, air handling unit panels, and ventilation covers in HVAC sheet metal work.',    color: '#D97706' },
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
        <div className="blob2 blob-abs" style={{ width: 400, height: 400, top: '-40%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle,rgba(37,99,235,.1) 0%,transparent 70%)' }} />
        <div className="container-md s-hide" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: 12 }}>
            Need a <span style={{ color: '#93C5FD' }}>Custom Specification?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.97rem', maxWidth: 500, margin: '0 auto 36px' }}>
            Tell us the thread size, body type, and material — we'll supply exactly the right rivet nut.
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

function RivetNutCard({ p, accent }) {
  return (
    <Link to={`/rivet-nuts/${p.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div className="blind-rivet-card">
        <div style={{ height: 190, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <img src={p.img} alt={p.name} className="blind-rivet-card-img" />
          <span style={{
            position: 'absolute', top: 14, right: 14,
            background: `linear-gradient(135deg,${accent},${accent}BB)`,
            color: '#fff', fontWeight: 900, fontSize: '.72rem', letterSpacing: '.1em',
            padding: '4px 10px', borderRadius: 6,
          }}>{p.code}</span>
        </div>
        <div style={{ padding: '20px 22px 22px' }}>
          <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '.93rem', marginBottom: 8 }}>{p.name}</div>
          <p style={{ color: '#64748B', fontSize: '.82rem', lineHeight: 1.7, margin: '0 0 16px' }}>{p.desc}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: accent, fontWeight: 700, fontSize: '.82rem' }}>
            View Details <i className="bi bi-arrow-right-circle-fill"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}
