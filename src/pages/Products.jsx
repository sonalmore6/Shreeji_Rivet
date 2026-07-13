import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const products = [
  {
    id: 1, name: 'Blind Rivets', category: 'Rivets',
    tag: 'Bestseller', tagColor: '#F59E0B', tagBg: 'rgba(245,158,11,.12)',
    img: '/images/blind-rivets.jpg',
    link: '/blind-rivets',
    desc: 'Blind pop rivets, solid rivets, and structural rivets for permanent fastening solutions across industries.',
    specs: ['Dia: 2.4mm – 6.4mm', 'Materials: Aluminium / Steel / SS', 'Head Type: Dome, CSK', 'Mandrel: Steel Pull'],
    
  },
  {
    id: 2, name: 'Structural Rivet', category: 'Rivets',
    tag: 'Heavy Duty', tagColor: '#DC2626', tagBg: 'rgba(220,38,38,.1)',
    img: '/images/StructuralRivet/Structural-Rivets-RivetLab-Blog-Banner.webp',
    link: '/structural-rivets',
    desc: 'High-strength blind rivets for heavy-duty applications. Delivers permanent, vibration-resistant fastening in structural steel, bridges, and industrial assemblies.',
    specs: ['Diameter: 3.2 – 6.4 mm', 'Materials: Steel, Stainless, Aluminium', 'Head Type: Dome, Large Flange', 'Application: Structural'],
  
  },
  {
    id: 3, name: 'Rivet Nut', category: 'Rivet Nuts',
    tag: 'Premium', tagColor: '#2563EB', tagBg: 'rgba(37,99,235,.1)',
    img: '/images/rivet-nut.png',
    link: '/rivet-nuts',
    desc: 'Blind threaded inserts for thin-walled materials. Creates strong female threads in sheet metal and composites.',
    specs: ['Thread: M3 – M12', 'Materials: Aluminium, Steel, S.S.', 'Head: Flat / Countersunk', 'Finish: Zinc Plated'],
    
  },
  {
    id: 4, name: 'Self-Clinching Fastener', category: 'Specialty',
    tag: 'Precision', tagColor: '#7C3AED', tagBg: 'rgba(124,58,237,.1)',
    img: '/images/rivet-nut.png',
    link: '/self-clinching-fasteners',
    desc: 'Permanent threaded studs for sheet metal assemblies. High push-out and torque resistance.',
    specs: ['Thread: M3 – M8', 'Lengths: 6mm – 30mm', 'Material: Carbon Steel', 'Install: Press-fit'],
  
  },
  {
    id: 5, name: 'Self-Drilling Screws', category: 'Specialty',
    tag: 'New', tagColor: '#059669', tagBg: 'rgba(5,150,105,.1)',
    img: '/images/sds-screws.png',
    link: '/self-drilling-screws',
    desc: 'Self-drilling screws with SDS design. Ideal for metal-to-metal and metal-to-wood connections.',
    specs: ['Sizes: 4.8×19 – 6.3×100', 'Drill Point: #2 – #5', 'Material: Hardened Carbon Steel', 'Coating: Zinc + Bichromate'],
    
  },
  {
    id: 6, name: 'Screws', category: 'Screws',
    tag: 'High Tensile', tagColor: '#D97706', tagBg: 'rgba(217,119,6,.1)',
    img: '/images/screws.png',
    link: '/screws',
    desc: 'High-performance screws for particle board, MDF, and timber applications. Sharp points and deep threads for superior grip.',
    specs: ['Sizes: 3.5×16 – 5×70', 'Finish: Zinc / Phosphate', 'Head: Pan, CSK, Hex', 'Thread: Fine / Coarse'],
   
  },
];

const whyPoints = [
  { icon:'bi-award-fill',        title:'Certified Quality',    desc:'ISO 9001:2015 certified production with in-house testing lab',          color:'#2563EB' },
  { icon:'bi-lightning-fill',    title:'Fast Delivery',        desc:'48-hour turnaround with pan-India logistics network',                   color:'#F59E0B' },
  { icon:'bi-tools',             title:'Custom Orders',        desc:'Bespoke specifications for bulk orders and special requirements',        color:'#059669' },
  { icon:'bi-headset',           title:'Expert Support',       desc:'Technical guidance from experienced fastener engineers',                 color:'#7C3AED' },
  { icon:'bi-bar-chart-fill',    title:'Bulk Pricing',         desc:'Competitive pricing tiers with volume discounts for large orders',       color:'#0891B2' },
  { icon:'bi-shield-fill-check', title:'Quality Guarantee',    desc:'Every batch tested and certified before dispatch — zero compromise',    color:'#D97706' },
];

export default function Products() {
  return (
    <div>
      <SEO
        title="All Products — Rivets, Rivet Nuts & Fasteners"
        description="Browse Shreeji Rivet India Pvt. Ltd.'s full fastener range: Blind Rivets, POP Rivets, Structural Rivets, Rivet Nuts / Insert Nuts, Self Clinching Fasteners, and Self Drilling Screws (SDS) — manufactured in Nashik, delivered pan-India."
        keywords="blind rivet, POP rivet, aluminium rivet, structural rivet, monobolt rivet, hemlock rivet, rivet nut, insert nut, nutsert, self clinching fastener, clinch nut, self drilling screw, SDS, Shreeji Rivet India"
        path="/products"
      />

      {/* ══ HERO ══ */}
      <section className="products-page-hero">
        <div className="blob blob-abs" style={{ width:500, height:500, top:'-30%', right:'-8%', background:'radial-gradient(circle,rgba(37,99,235,.18) 0%,transparent 70%)' }} />
        <div className="blob2 blob-abs" style={{ width:350, height:350, bottom:'-20%', left:'-5%', background:'radial-gradient(circle,rgba(6,182,212,.12) 0%,transparent 70%)' }} />
        <div className="dark-grid-overlay" />
        <div className="container-md" style={{ position:'relative', zIndex:1 }}>
          <div className="section-badge badge-dark h-badge d-inline-flex mb-4">
            <span style={{ width:7, height:7, borderRadius:'50%', background:'#10B981', display:'inline-block' }} /> Our Products
          </div>
          <h1 className="h-anim-1" style={{ fontWeight:900, color:'#fff', fontSize:'clamp(2.2rem,5vw,3.8rem)', marginBottom:20, lineHeight:1.1 }}>
            Premium <span className="gt-cyan">Rivet &amp; Fastener</span> Solutions
          </h1>
          <p className="h-anim-2" style={{ color:'rgba(255,255,255,.7)', fontSize:'1.1rem', lineHeight:1.8, margin:0 }}>
            ISO-certified, precision-engineered fasteners for automotive, aerospace, HVAC, and industrial applications.
          </p>
        </div>
        <div style={{ position:'absolute', bottom:-1, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:60 }}>
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* ══ PRODUCTS GRID ══ */}
      <section style={{ padding:'80px 0', background:'#fff' }}>
        <div className="container-xl">
          <div className="text-center s-hide mb-5">
            <div className="section-badge badge-light d-inline-flex mb-3">All Products</div>
            <h2 className="section-title">Our Complete <span style={{ color:'#2563EB' }}>Product Range</span></h2>
            <p className="section-sub mt-2">Explore our full catalogue of industrial-grade rivets and fasteners</p>
          </div>

          <div className="row g-5">
            {products.map((p, i) => (
              <div key={p.id} className={`col-12 col-md-6 col-lg-4 s-hide d${(i%3)+1}`}>
                <div className="product-page-card">
                  <div className="product-page-img-wrap">
                    <img src={p.img} alt={p.name} className="product-page-img" />
                    <div className="product-category-tag">{p.category}</div>
                  </div>
                  <div className="product-page-body">
                    <h3 className="product-page-name">{p.name}</h3>
                    <p className="product-page-desc">{p.desc}</p>

                    <div style={{ marginBottom:20 }}>
                      <div className="spec-key-title">Key Specifications</div>
                      {p.specs.slice(0,3).map((s) => (
                        <div key={s} className="spec-item">
                          <i className="bi bi-check-circle-fill spec-icon"></i>
                          <span className="spec-text">{s}</span>
                        </div>
                      ))}
                    </div>

                    <div className="d-flex gap-2 mt-auto">
                      <Link to={p.link || '/contact'} className="btn-sm-blue">
                        <i className="bi bi-eye-fill"></i> View Details
                      </Link>
                      <Link to="/contact" className="btn-sm-outline-gold">
                        <i className="bi bi-send-fill"></i> Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY OUR PRODUCTS ══ */}
      <section style={{ padding:'80px 0', background:'#F0F7FF' }}>
        <div className="container-xl">
          <div className="text-center s-hide mb-5">
            <div className="section-badge badge-light d-inline-flex mb-3">Why Choose Us</div>
            <h2 className="section-title">Why Our <span style={{ color:'#2563EB' }}>Products Stand Out</span></h2>
            <p className="section-sub mt-2">Every fastener we produce meets the highest industry standards</p>
          </div>
          <div className="row g-4">
            {whyPoints.map((pt, i) => (
              <div key={pt.title} className={`col-12 col-sm-6 col-md-4 s-hide d${(i%3)+1}`}>
                <div className="why-point-card" style={{ '--accent': pt.color }}>
                  <div className="why-card-top-bar" />
                  <div className="why-num-box" style={{ background:`linear-gradient(135deg,${pt.color}cc,${pt.color})`, boxShadow:`0 8px 28px ${pt.color}44` }}>
                    <i className={`bi ${pt.icon}`} style={{ color:'#fff', fontSize:24 }}></i>
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
      <section style={{ background:'linear-gradient(135deg,#060E1F 0%,#0B1426 50%,#0D1B35 100%)', padding:'80px 0', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div className="blob2 blob-abs" style={{ width:500, height:500, top:'-40%', left:'50%', transform:'translateX(-50%)', background:'radial-gradient(circle,rgba(6,182,212,.1) 0%,transparent 70%)' }} />
        <div className="container-md s-hide" style={{ position:'relative', zIndex:1 }}>
          <h2 style={{ fontWeight:900, color:'#fff', fontSize:'clamp(1.8rem,4vw,2.8rem)', marginBottom:12 }}>
            Need a Custom <span className="text-cyan-l">Specification?</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,.65)', fontSize:'1rem', marginBottom:40 }}>
            Our engineering team can source or manufacture fasteners to your exact requirements.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/contact" className="btn-gold shimmer-btn">
              Get Custom Quote <i className="bi bi-arrow-right"></i>
            </Link>
            <a href="tel:+919876543210" className="btn-outline-cyan">
              <i className="bi bi-telephone-fill"></i> Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
