import { Link } from 'react-router-dom';
import { screwProducts } from '../data/screws';
import SEO from '../components/SEO';

const DARK_BG = 'linear-gradient(135deg,#060E1F 0%,#0B1426 45%,#0D1B35 100%)';
const ACCENT  = '#D97706';
const SOFT    =   {
  background: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 50%, #67E8F9 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};


export default function Screws() {
  return (
    <div>
      <SEO
        title="Screws Manufacturer in Nashik"
        description="High-tensile screws for chipboard, timber, sheet metal, machine assembly, and masonry applications — manufactured to DIN, ISO, and metric standards by Shreeji Rivet India Pvt. Ltd., Nashik."
        keywords="screws manufacturer Nashik, chipboard screws, machine screws, masonry screws, Shreeji Rivet India"
        path="/screws"
      />

      {/* ══ HERO ══ */}
      <section style={{ background: DARK_BG, padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="blob blob-abs" style={{ width: 450, height: 450, top: '-25%', right: '-6%', background: 'radial-gradient(circle,rgba(217,119,6,.16) 0%,transparent 70%)' }} />
        <div className="blob2 blob-abs" style={{ width: 300, height: 300, bottom: '-20%', left: '-4%', background: 'radial-gradient(circle,rgba(6,182,212,.1) 0%,transparent 70%)' }} />
        <div className="dark-grid-overlay" />
        <div className="container-md" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: '.8rem' }}>
            <Link to="/products" style={{ color: '#38BDF8', textDecoration: 'none' }}>Products</Link>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Screws</span>
          </div>
          <div className="section-badge badge-dark h-badge d-inline-flex mb-4">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} /> Screws
          </div>
          <h1 className="h-anim-1" style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4.5vw,3.2rem)', marginBottom: 16, lineHeight: 1.1 }}>
            Premium <span style={SOFT}>Screw Range</span>
          </h1>
          <p className="h-anim-2" style={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            A comprehensive range of high-tensile screws covering chipboard and timber joinery, sheet metal fabrication, machine assembly, and specialty masonry applications — all precision-manufactured to DIN, ISO, and metric standards.
          </p>
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
            <h2 className="section-title">Screw Range <span style={{ color: '#0EA5E9' }}>Gallery</span></h2>
            <p className="section-sub mt-2" style={{ maxWidth: 680, margin: '12px auto 0' }}>
              A comprehensive range of high-tensile screws covering chipboard, timber joinery, sheet metal, machine assembly, and specialty masonry applications. Click any product to view full specifications.
            </p>
          </div>

          <div className="row g-4">
            {screwProducts.map((p, i) => (
              <div key={p.id} className={`col-12 col-sm-6 col-lg-4 s-hide d${(i % 3) + 1}`}>
                <Link to={`/screws/${p.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
            <h2 className="section-title">Where to Use <span style={{ color: ACCENT }}>Our Screws</span></h2>
            <p className="section-sub mt-2">From furniture joinery to precision machine assembly — a screw for every substrate</p>
          </div>
          <div className="row g-4">
            {[
              { icon: 'bi-lamp-fill',            title: 'Furniture & Joinery',   desc: 'Chipboard, MDF, and timber furniture assembly, cabinet making, and wood joinery applications.',                color: '#D97706' },
              { icon: 'bi-house-door-fill',      title: 'Construction',          desc: 'Drywall fixing, steel stud framing, timber wall plates, and structural boarding in building construction.',     color: '#2563EB' },
              { icon: 'bi-plug-fill',            title: 'Electrical',            desc: 'Distribution panel boards, cable management enclosures, and electrical junction box assembly.',                 color: '#059669' },
              { icon: 'bi-car-front-fill',       title: 'Automotive',            desc: 'Interior trim panels, dashboard fixings, and underbody plastic-to-metal components in vehicle manufacturing.',  color: '#DC2626' },
              { icon: 'bi-gear-fill',            title: 'Industrial Assembly',   desc: 'Machine guards, conveyor covers, equipment housings, and precision component assembly in manufacturing.',       color: '#7C3AED' },
              { icon: 'bi-water',                title: 'Marine & Outdoor',      desc: 'Stainless steel screws for boat fittings, outdoor furniture, signage, and corrosion-prone environments.',       color: '#0EA5E9' },
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
        <div className="blob2 blob-abs" style={{ width: 400, height: 400, top: '-40%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle,rgba(217,119,6,.1) 0%,transparent 70%)' }} />
        <div className="container-md s-hide" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: 12 }}>
            Need a <span style={SOFT}>Custom Specification?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.97rem', maxWidth: 500, margin: '0 auto 36px' }}>
            Tell us the type, DIN standard, size, finish, and quantity — we'll quote and supply quickly.
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
