import { Link } from 'react-router-dom';
import { selfClinchingProducts } from '../data/selfClinchingFasteners';
import SEO from '../components/SEO';
import KeywordAliases from '../components/KeywordAliases';

const DARK_BG = 'linear-gradient(135deg,#060E1F 0%,#0B1426 45%,#0D1B35 100%)';
const ACCENT  = '#7C3AED';
const SOFT    = '#C4B5FD';
const LIGHT   = 'rgba(124,58,237,.1)';
const titlecolor = 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 50%, #67E8F9 100%)';
export default function SelfClinchingFasteners() {
  return (
    <div>
      <SEO
        title="Self Clinching Fasteners — Clinch Nut, Rosan Nut Supplier"
        description="Self clinching fastener supplier in Nashik — Clinch Nut, Rosan Nut, Kalli Nut, Clinch Stud, Self Clinch Nut & Standoff for sheet metal, PCB, and electronics enclosure assemblies."
        keywords="Clinch Nut, Rosan Nut, Kalli Nut, Clinch Stud, Self Clinch Nut, Standoff, self clinching fastener Nashik, Shreeji Rivet India"
        path="/self-clinching-fasteners"
      />

      {/* ══ HERO ══ */}
      <section style={{ background: DARK_BG, padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="blob blob-abs" style={{ width: 450, height: 450, top: '-25%', right: '-6%', background: 'radial-gradient(circle,rgba(124,58,237,.16) 0%,transparent 70%)' }} />
        <div className="blob2 blob-abs" style={{ width: 300, height: 300, bottom: '-20%', left: '-4%', background: 'radial-gradient(circle,rgba(6,182,212,.1) 0%,transparent 70%)' }} />
        <div className="dark-grid-overlay" />
        <div className="container-md" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: '.8rem' }}>
            <Link to="/products" style={{ color: '#38BDF8', textDecoration: 'none' }}>Products</Link>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Self-Clinching Fasteners</span>
          </div>
          <div className="section-badge badge-dark h-badge d-inline-flex mb-4">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} /> Specialty
          </div>
          <h1 className="h-anim-1" style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4.5vw,3.2rem)', marginBottom: 16, lineHeight: 1.1 }}>
            Self-Clinching <span style={{ background: titlecolor, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Fasteners</span>
          </h1>
          <p className="h-anim-2" style={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            Self-Clinching Fasteners provide strong, permanent threads and mounting solutions in thin sheet metal applications — designed for electrical enclosures, telecommunications equipment, automotive components, industrial machinery, and precision sheet metal fabrication.
          </p>
          <KeywordAliases items={['Clinch Nut', 'Rosan Nut', 'Kalli Nut', 'Clinch Stud', 'Standoff']} />
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
            <h2 className="section-title">Self-Clinching Fasteners <span style={{ color: '#0EA5E9' }}>Gallery</span></h2>
            <p className="section-sub mt-2" style={{ maxWidth: 680, margin: '12px auto 0' }}>
              Self-clinching fasteners permanently press into sheet metal panels, providing high-strength threads, standoffs, and studs with a single-side installation — no welding, back-side access, or secondary hardware required.
            </p>
          </div>

          <div className="row g-4">
            {selfClinchingProducts.map((p, i) => (
              <div key={p.id} className={`col-12 col-sm-6 col-lg-4 s-hide d${(i % 3) + 1}`}>
                <Link to={`/self-clinching-fasteners/${p.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
            <h2 className="section-title">Where to Use <span style={{ color: '#38BDF8' }}>Self-Clinching Fasteners</span></h2>
            <p className="section-sub mt-2">Wherever permanent threads, standoffs, or studs are needed in thin sheet metal without welding</p>
          </div>
          <div className="row g-4">
            {[
              { icon: 'bi-cpu-fill',             title: 'Electronics Enclosures', desc: 'Server racks, control panels, and network equipment chassis requiring permanent flush-mounted threads.',       color: '#7C3AED' },
              { icon: 'bi-broadcast-pin',        title: 'Telecom Equipment',      desc: 'Base station housings, antenna brackets, and junction boxes in telecom infrastructure assemblies.',            color: '#2563EB' },
              { icon: 'bi-car-front-fill',       title: 'Automotive',             desc: 'Instrument panels, bracket assemblies, and engine bay components in passenger and commercial vehicles.',        color: '#DC2626' },
              { icon: 'bi-gear-wide-connected',  title: 'Industrial Machinery',   desc: 'Control cabinet panels, machine guards, and electrical enclosures on factory automation equipment.',           color: '#059669' },
              { icon: 'bi-shield-fill',          title: 'Defence & Aerospace',    desc: 'Ruggedized sheet metal panels, avionics racks, and mil-spec enclosures requiring vibration-proof fastening.',  color: '#0EA5E9' },
              { icon: 'bi-sun-fill',             title: 'Solar & Energy',         desc: 'Inverter enclosures, battery pack housings, and power distribution panels in renewable energy systems.',       color: '#D97706' },
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
        <div className="blob2 blob-abs" style={{ width: 400, height: 400, top: '-40%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle,rgba(124,58,237,.1) 0%,transparent 70%)' }} />
        <div className="container-md s-hide" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: 12 }}>
            Need a <span style={{ color: SOFT }}>Custom Specification?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.97rem', maxWidth: 500, margin: '0 auto 36px' }}>
            Tell us the thread size, panel thickness, and material — we'll supply the right self-clinching fastener.
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
