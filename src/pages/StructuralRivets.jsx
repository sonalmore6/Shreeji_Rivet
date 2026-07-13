import { Link } from 'react-router-dom';
import { structuralRivetProducts } from '../data/structuralRivets';
import SEO from '../components/SEO';
import KeywordAliases from '../components/KeywordAliases';

const DARK_BG = 'linear-gradient(135deg,#060E1F 0%,#0B1426 45%,#0D1B35 100%)';

export default function StructuralRivets() {
  return (
    <div>
      <SEO
        title="Structural Rivets — Monobolt, Hemlock, Bulb Rivet Supplier"
        description="Structural rivet manufacturer in Nashik — Monobolt Rivet, Hemlock Rivet, Hemfix Rivet, Bulb Rivet, Lockbolt, Huckbolt, Stud Bolt & PADOM fasteners for heavy-duty structural, bridge, and industrial applications."
        keywords="Monobolt Rivet, Hemlock Rivet, Hemfix Rivet, Bulb Rivet, Lockbolt, Huckbolt, Stud Bolt, PADOM, structural rivet Nashik, Shreeji Rivet India"
        path="/structural-rivets"
      />

      {/* ══ HERO ══ */}
      <section style={{ background: DARK_BG, padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="blob blob-abs" style={{ width: 450, height: 450, top: '-25%', right: '-6%', background: 'radial-gradient(circle,rgba(220,38,38,.16) 0%,transparent 70%)' }} />
        <div className="blob2 blob-abs" style={{ width: 300, height: 300, bottom: '-20%', left: '-4%', background: 'radial-gradient(circle,rgba(14,165,233,.1) 0%,transparent 70%)' }} />
        <div className="dark-grid-overlay" />
        <div className="container-md" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: '.8rem' }}>
            <Link to="/products" style={{ color: '#38BDF8', textDecoration: 'none' }}>Products</Link>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Structural Rivets</span>
          </div>
          <div className="section-badge badge-dark h-badge d-inline-flex mb-4">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} /> Heavy Duty
          </div>
          <h1 className="h-anim-1" style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4.5vw,3.2rem)', marginBottom: 16, lineHeight: 1.1 }}>
            Structural Rivets <span style={{ color: '#38BDF8' }}>Collection</span>
          </h1>
          <p className="h-anim-2" style={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 620, margin: 0 }}>
            High-strength structural blind rivets engineered for heavy-duty assemblies — from Mono Bolt and Hemlock to Boom Lock and Unigrip — delivering permanent, vibration-resistant joints in steel, bridges, and industrial structures.
          </p>
          <KeywordAliases items={['Monobolt Rivet', 'Hemfix Rivet', 'Lockbolt', 'Huckbolt', 'Stud Bolt', 'PADOM']} />
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
            <h2 className="section-title">Structural Rivets <span style={{ color: '#0EA5E9' }}>Gallery</span></h2>
            <p className="section-sub mt-2" style={{ maxWidth: 640, margin: '12px auto 0' }}>
              Structural blind rivets provide clamping forces comparable to solid rivets while remaining installable from one side. Select a product to view full specifications and technical data.
            </p>
          </div>

          <div className="row g-4">
            {structuralRivetProducts.map((p, i) => (
              <div key={p.id} className={`col-12 col-sm-6 col-lg-4 s-hide d${(i % 3) + 1}`}>
                <Link to={`/structural-rivets/${p.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="blind-rivet-card">
                    {/* Image area */}
                    <div style={{ height: 200, background: '#F0F7FF', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                      <img src={p.img} alt={p.name} className="blind-rivet-card-img" />
                      <span style={{
                        position: 'absolute', top: 14, right: 14,
                        background: 'linear-gradient(135deg,#0EA5E9,#0284C7)',
                        color: '#fff', fontWeight: 900, fontSize: '.75rem', letterSpacing: '.1em',
                        padding: '5px 12px', borderRadius: 6,
                      }}>{p.code}</span>
                    </div>
                    {/* Content */}
                    <div style={{ padding: '22px 24px 24px' }}>
                      <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '.97rem', marginBottom: 8 }}>{p.name}</div>
                      <p style={{ color: '#64748B', fontSize: '.83rem', lineHeight: 1.7, margin: '0 0 18px' }}>{p.desc}</p>
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
            <h2 className="section-title">Where to Use <span style={{ color: '#0EA5E9' }}>Structural Rivets</span></h2>
            <p className="section-sub mt-2">Built for high-load environments where permanent, vibration-resistant joints are critical</p>
          </div>
          <div className="row g-4">
            {[
              { icon: 'bi-building-fill',        title: 'Steel Structures',      desc: 'Bridges, industrial steel frames, and mezzanine floors requiring certified high-load permanent joints.',          color: '#DC2626' },
              { icon: 'bi-gear-wide-connected',  title: 'Heavy Machinery',       desc: 'Equipment frames, crane booms, conveyor structures, and press frames subject to constant vibration loads.',      color: '#2563EB' },
              { icon: 'bi-train-freight-front',  title: 'Rail & Transport',      desc: 'Rail coaches, freight wagons, heavy vehicles, and bus body fabrication demanding structural integrity.',         color: '#059669' },
              { icon: 'bi-tsunami',              title: 'Shipbuilding',          desc: 'Marine structures, ship hulls, and offshore platforms needing corrosion-resistant high-strength fastening.',      color: '#0EA5E9' },
              { icon: 'bi-minecart-loaded',      title: 'Mining Equipment',      desc: 'Dump trucks, crushers, and heavy-duty mining machinery assemblies under extreme mechanical stress.',             color: '#7C3AED' },
              { icon: 'bi-lightning-charge-fill',title: 'Power Infrastructure',  desc: 'Transmission towers, substation frames, and utility structures where certified load ratings are mandatory.',      color: '#D97706' },
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
        <div className="blob2 blob-abs" style={{ width: 400, height: 400, top: '-40%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle,rgba(220,38,38,.1) 0%,transparent 70%)' }} />
        <div className="container-md s-hide" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: 12 }}>
            Need a <span style={{ color: '#38BDF8' }}>Custom Specification?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.97rem', maxWidth: 500, margin: '0 auto 36px' }}>
            Tell us the load requirement, material, and diameter — we'll source exactly what your structure needs.
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
