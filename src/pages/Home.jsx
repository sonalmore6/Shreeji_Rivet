import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const stats = [
  { value: 500,  suffix: '+', label: 'Happy Clients',    icon: 'bi-people-fill',   color: '#0EA5E9' },
  { value: 5000, suffix: '+', label: 'Product SKUs',     icon: 'bi-grid-fill',     color: '#059669' },
  { value: 3,    suffix: '+', label: 'Years Experience', icon: 'bi-trophy-fill',   color: '#D97706' },
  { value: 48,   suffix: 'h', label: 'Fast Delivery',    icon: 'bi-truck',         color: '#7C3AED' },
];


const products = [
  { name: 'Blind Rivets',         img: '/images/blind-rivets.jpg' },
  { name: 'Rivet Nut',            img: '/images/rivet-nut.png'    },
  { name: 'Screws',               img: '/images/screws.png'       },
  { name: 'Self-Drilling Screws', img: '/images/sds-screws.png'   },
];

const clients = [
  { name: 'ABB',           logo: '/images/ABB.jpg'          },
  { name: 'Elecon',        logo: '/images/Elecon.webp'      },
  { name: 'Reliable',      logo: '/images/reliable1.png'    },
  { name: 'EKA',           logo: '/images/eka.png'          },
  { name: 'Legrand',       logo: '/images/Legrand.jpg'      },
  { name: 'Efacec',        logo: '/images/efacec.png'       },
  { name: 'Lucy Electric', logo: '/images/LucyElectric.png' },
  { name: 'Siemens',       logo: '/images/Siemens.png'      },
  { name: 'Mahindra',      logo: '/images/mahindra.jpg'     },
];

const marqueeItems = [
  'Hex Bolts','Stainless Steel Nuts','Anchor Bolts','High Tensile Fasteners',
  'Foundation Bolts','Carriage Bolts','Eye Bolts','U-Bolts','Threaded Rods',
];

const featureChips = [
  'Pan-India Delivery',
  'Custom Specifications','Bulk Order Experts',
  '24/7 Technical Support','Quality Guaranteed',
];


function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref     = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const step = target / (2000 / 16);
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const doubled = [...clients, ...clients];

  return (
    <div>
      <SEO
        title="Shreeji Rivet India Pvt. Ltd. — Fastener & Rivet Manufacturer in Nashik"
        description="Shreeji Rivet India Pvt. Ltd. is a leading manufacturer and supplier of Blind Rivets, POP Rivets, Structural Rivets, Rivet Nuts, Self Clinching Fasteners and Self Drilling Screws (SDS) in Nashik, Maharashtra, with pan-India delivery."
        keywords="Shreeji Rivet India Pvt Ltd, Shreeji Rivet, Shreeji Rivet India, fastener rivet in Nashik, rivet manufacturer Nashik, blind rivet, POP rivet, structural rivet, rivet nut, insert nut, self clinching fastener, self drilling screw, SDS"
        path="/"
      />

      {/* ══ HERO ══ */}
      <section className="hero-section">
        <video className="hero-video" src="/images/hero-video.mp4" autoPlay muted loop playsInline poster="/images/hero-bg1.jpg" />
        <div className="hero-overlay" />
        <div className="hero-grid-overlay" />

        <div className="container-xl hero-content">
          <div className="hero-layout">

            {/* LEFT — Text */}
            <div className="hero-left">


              <h1 className="hero-title-main h-anim-1">
                Shreeji <span className="company-logo-accent">Rivet</span> India Pvt. Ltd.
              </h1>
              <div className="hero-title-accent h-anim-1" />
              <p className="hero-title-sub h-anim-1">House of Riveting Fasteners</p>

              <p className="hero-desc h-anim-2">
               Nashik's leading manufacturer and supplier of blind rivets, POP rivets, structural rivets, rivet nuts, self clinching fasteners, self drilling screws (SDS), and industrial fastening solutions — delivered pan-India.
              </p>

              <div className="hero-chips h-anim-2">
                {['Pan-India Delivery', 'Bulk Orders', '24/7 Support', 'Custom Specs'].map(chip => (
                  <span key={chip} className="hero-chip">
                    <i className="bi bi-check-circle-fill" /> {chip}
                  </span>
                ))}
              </div>

              <div className="d-flex flex-column flex-sm-row gap-3 h-anim-3 mb-4">
                <Link to="/products" className="btn-gold shimmer-btn">
                  Explore Products <i className="bi bi-arrow-right" />
                </Link>
                <Link to="/contact" className="btn-outline-cyan">
                  Get Free Quote
                </Link>
              </div>


            </div>



          </div>
        </div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:60 }}>
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#0B1426" />
          </svg>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...marqueeItems].map((item, i) => (
            <div key={i} className="marquee-item-wrap">
              <span className="marquee-text">{item}</span>
              <span className="marquee-dot" />
            </div>
          ))}
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section style={{ background:'#fff', padding:'80px 0' }}>
        <div className="container-lg">
          <div className="row g-5 align-items-center">

            {/* Image */}
            <div className="col-12 col-md-5">
              <div className="about-img-wrap s-hide-l">
                <img src="/images/about1.png" alt="Shreeji Rivets" className="about-img" />
                <div className="about-badge">3+ Years Excellence</div>
              </div>
            </div>

            {/* Content */}
            <div className="col-12 col-md-7">
              <div className="s-hide-r">
                <p className="section-eyebrow">About Us</p>
                <h2 className="section-title mb-3">
                  Shreeji Rivets<br />
                  <em style={{ color:'#F59E0B' }}>House of Riveting Fasteners</em>
                </h2>
                <p className="section-sub mb-4">
                  For over 3 years, Shreeji Rivets has been a trusted supplier of high-quality rivets and fastening solutions. We provide durable, precision-manufactured rivets for construction, automotive, manufacturing, and engineering applications, ensuring reliable performance and on-time delivery.
                </p>
                <div className="row g-2 mb-4">
                  {featureChips.map((chip) => (
                    <div key={chip} className="col-6">
                      <div className="feature-chip">
                        <span className="chip-check">✓</span> {chip}
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-cyan">Connect With Us <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section style={{ background:'#F0F7FF', padding:'80px 0' }}>
        <div className="container-lg">
          <div className="text-center s-hide mb-5">
            <p className="section-eyebrow">Our Products</p>
            <h2 className="section-title">Premium <span className="text-cyan">Fastener Range</span></h2>
            <p className="section-sub mt-2">Engineered fastening solutions with unmatched durability and precision.</p>
          </div>

          <div className="row g-3">
            {products.map((p, i) => (
              <div key={p.name} className={`col-12 col-sm-6 col-md-3 s-hide d${i+1}`}>
                <div className="product-card">
                  <div className="product-img-wrap">
                    <img src={p.img} alt={p.name} className="product-img" />
                    <div className="product-hover-overlay">
                      <span className="product-hover-label">{p.name}</span>
                    </div>
                  </div>
                  <div className="product-body">
                    <p className="product-name">{p.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 s-hide">
            <Link to="/products" className="btn-cyan">View More Products <i className="bi bi-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="why-section">
        <div className="why-blob-1 blob-abs" />
        <div className="why-blob-2 blob-abs" />

        <div className="container-lg" style={{ position:'relative', zIndex:1 }}>

          {/* Header */}
          <div className="text-center s-hide mb-5">
            <span className="why-eyebrow-pill">Why Choose Us</span>
            <h2 className="section-title mt-3">
              The Shreeji <span className="text-cyan">Advantage</span>
            </h2>
            <p className="section-sub mt-2 mx-auto" style={{ maxWidth:520 }}>
              Trusted by 500+ businesses across India for quality, speed, and reliability.
            </p>
          </div>

          {/* Stats */}
          <div className="row g-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`col-6 col-md-3 s-hide d${i+1}`}>
                <div className="stat-card-v2">
                  {/* colored top stripe */}
                  <div style={{ height: 4, background: `linear-gradient(90deg,${s.color},${s.color}88)`, margin: '-36px -20px 28px', borderRadius: '20px 20px 0 0' }} />
                  {/* icon */}
                  <div style={{
                    width: 64, height: 64, borderRadius: 18, margin: '0 auto 18px',
                    background: `linear-gradient(135deg,${s.color}22,${s.color}0d)`,
                    border: `1.5px solid ${s.color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className={`bi ${s.icon}`} style={{ color: s.color, fontSize: '1.6rem' }}></i>
                  </div>
                  <div className="stat-num-v2" style={{ color: s.color }}>
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="stat-lbl-v2">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ CLIENTS ══ */}
      <section style={{ background:'#F0F7FF', padding:'80px 0' }}>
        <div className="container-lg">
          <div className="text-center s-hide mb-5">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
              <div style={{ height:1, width:36, background:'#06B6D4', opacity:.5 }} />
              <span style={{ color:'#06B6D4', fontSize:'.8rem', fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase' }}>Trusted By</span>
              <div style={{ height:1, width:36, background:'#06B6D4', opacity:.5 }} />
            </div>
            <h2 className="section-title">Our Valued <span className="text-cyan">Clients</span></h2>
            <p className="section-sub mt-2">Proudly partnering with industry leaders worldwide</p>
          </div>

          {/* Logo marquee */}
          <div className="logo-marquee mb-2">
            <div className="logo-track">
              {doubled.map((c, i) => (
                <div key={i} className="logo-card">
                  <img src={c.logo} alt={c.name} className="logo-img" />
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="cta-section">
        <div className="blob2 blob-abs" style={{ width:600, height:600, top:'-50%', left:'50%', transform:'translateX(-50%)', background:'radial-gradient(circle,rgba(6,182,212,.1) 0%,transparent 70%)' }} />
        <div className="container-md s-hide" style={{ position:'relative', zIndex:1 }}>
          <div className="cta-ready-badge justify-content-center">
            <span className="cta-dot" />
            <span className="cta-ready-text">Ready to Order?</span>
          </div>
          <h2 style={{ fontWeight:900, color:'#fff', fontSize:'clamp(1.8rem,4vw,2.8rem)', marginBottom:12 }}>
            Get a <span className="text-cyan-l">Free Quote</span> in 24 Hours
          </h2>
          <p style={{ color:'rgba(255,255,255,.65)', fontSize:'1rem', marginBottom:40 }}>
            Our team is ready to help you find the perfect fastener solution for your requirements.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/contact" className="btn-gold shimmer-btn">
              Get Free Quote <i className="bi bi-arrow-right"></i>
            </Link>
            <Link to="/products" className="btn-outline-cyan">View Products</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
