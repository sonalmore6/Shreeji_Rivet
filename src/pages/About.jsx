import SEO from '../components/SEO';

const DARK_BG = 'linear-gradient(135deg,#060E1F 0%,#0B1426 45%,#0D1B35 100%)';

const heroStats = [
  { val:'3+',       lbl:'Years Active'  },
  { val:'5000+',    lbl:'SKUs Stocked'  },
  { val:'Same-Day', lbl:'Dispatch'      },
  { val:'IS/DIN',   lbl:'Certified'     },
];

const missionPoints = [
  'Genuine IS / DIN grade material, always stocked and verified',
  'Same-day dispatch for all in-stock orders',
  'No minimum order quantity for regular customers',
];

const visionPoints = [
  'Maharashtra\'s most dependable one-stop wholesale supplier',
  'Known for right stock, right grade, and the best price',
  'Trusted by factories, contractors, and fabricators pan-India',
];

const timeline = [
  { year:'2005', icon:'bi-shop',             color:'#0EA5E9', bg:'rgba(14,165,233,.1)',  title:'Company Founded',     desc:'Opened as a small hardware trading shop in MIDC Nashik, Maharashtra.' },
  { year:'2008', icon:'bi-graph-up-arrow',   color:'#10B981', bg:'rgba(16,185,129,.1)',  title:'Wholesale Expansion', desc:'Expanded into wholesale supply of nuts, bolts, screws and industrial fasteners.' },
  { year:'2013', icon:'bi-boxes',            color:'#F59E0B', bg:'rgba(245,158,11,.1)',  title:'5000+ SKUs Stocked',  desc:'Grew inventory to cover every grade, size, and finish for industrial needs.' },
  { year:'2018', icon:'bi-truck-front-fill', color:'#7C3AED', bg:'rgba(124,58,237,.1)',  title:'Pan-India Delivery',  desc:'Launched fast delivery across Maharashtra and pan-India supply network.' },
  { year:'2025', icon:'bi-trophy-fill',      color:'#0EA5E9', bg:'rgba(14,165,233,.1)',  title:'3+ Years of Trust',   desc:'Serving factories, contractors, fabricators, and hardware traders reliably.' },
];



const galleryItems = [
  { src:'/images/about.jpeg',       caption:'Main Warehouse — MIDC Nashik', tag:'Warehouse', tall:true },
  { src:'/images/team.png',       caption:'Meet Our Team',                 tag:'Products'           },
  { src:'/images/machine.png', caption:'Certified Stock Shelves',       tag:'IS / DIN'           },
  { src:'/images/deal.webp',     caption:'Customer Support & Operations', tag:'Operations'         },
  { src:'/images/Rockwell-Hardness-Tester.jpeg',     caption:'Hardness Testing Machine',     tag:'Stock'              },
];

// const galleryBottom = [
//   { src:'/images/rivet-nut.png',  caption:'Hex Nuts & Bolts'    },
//   { src:'/images/sds-screws.png', caption:'Quality Checking'    },
//   { src:'/images/hero-bg2.jpg',   caption:'Stainless Fasteners' },
// ];

const coreValues = [
  { icon:'bi-award-fill',       tag:'Quality',   title:'Genuine Grades',          desc:'We stock only genuine IS, DIN, and BS grade fasteners. No mixed lots, no substandard substitutes — what\'s on the label is exactly what you receive.' },
  { icon:'bi-shield-check',     tag:'Trust',     title:'Honest Pricing',          desc:'Transparent wholesale pricing with no hidden charges. Whether you\'re a small workshop or a large project, you always receive fair and competitive rates.' },
  { icon:'bi-box-seam',         tag:'Inventory', title:'Deep Stock Availability', desc:'From hex bolts to threaded rods, coach screws, U-bolts, eye bolts, and foundation bolts — thousands of sizes are ready for same-day dispatch.' },
  { icon:'bi-truck-front-fill', tag:'Service',   title:'Fast Delivery',           desc:'Same-day dispatch for in-stock products and quick Pan-India delivery ensure your projects stay on schedule without material-shortage delays.' },
];

export default function About() {
  return (
    <div>
      <SEO
        title="About Us"
        description="Shreeji Rivet India Pvt. Ltd. — Nashik-based manufacturer and wholesale supplier of genuine IS/DIN grade rivets, rivet nuts, and fasteners since 2005. Right stock, honest pricing, same-day dispatch across Maharashtra and pan-India."
        keywords="Shreeji Rivet India Pvt Ltd, about Shreeji Rivet, fastener manufacturer Nashik, rivet supplier Nashik Maharashtra, IS DIN grade fasteners"
        path="/about"
      />

      {/* ══ HERO ══ */}
      <section className="products-page-hero">
        <div className="blob blob-abs" style={{ width:500, height:500, top:'-30%', right:'-8%', background:'radial-gradient(circle,rgba(14,165,233,.18) 0%,transparent 70%)' }} />
        <div className="blob2 blob-abs" style={{ width:350, height:350, bottom:'-20%', left:'-5%', background:'radial-gradient(circle,rgba(6,182,212,.12) 0%,transparent 70%)' }} />
        <div className="dark-grid-overlay" />
        <div className="container-md" style={{ position:'relative', zIndex:1 }}>
          <div className="section-badge badge-dark h-badge d-inline-flex mb-4">
            <span style={{ width:7, height:7, borderRadius:'50%', background:'#10B981', display:'inline-block' }} /> About Us
          </div>
          <h1 className="h-anim-1" style={{ fontWeight:900, color:'#fff', fontSize:'clamp(2.2rem,5vw,3.8rem)', marginBottom:20, lineHeight:1.1 }}>
            Fasteners You Can <span className="gt-cyan">Trust</span>
          </h1>
          <p className="h-anim-2" style={{ color:'rgba(255,255,255,.7)', fontSize:'1.1rem', lineHeight:1.8, margin:0 }}>
            Nashik-based wholesale supplier of genuine IS / DIN grade fasteners — right stock, honest pricing, same-day dispatch.
          </p>

          <div className="about-hero-stats h-anim-2" style={{ justifyContent:'center' }}>
            {heroStats.map((s) => (
              <div className="about-hero-stat" key={s.lbl}>
                <div className="about-hero-stat-val">{s.val}</div>
                <div className="about-hero-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position:'absolute', bottom:-1, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:60 }}>
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* ══ COMPANY STORY ══ */}
      <section style={{ padding:'80px 0', background:'#fff' }}>
        <div className="container-xl">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-md-6">
              <div className="s-hide-l" style={{ position:'relative' }}>
                <img
                  src="/images/about1.png"
                  alt="Shreeji Fasteners Warehouse"
                  style={{ width:'100%', borderRadius:20, boxShadow:'0 30px 80px rgba(15,23,42,.18)', display:'block', height:420 }}
                />
                <div style={{
                  position:'absolute', bottom:-25, right:-20, padding:'20px 24px', borderRadius:16, textAlign:'center',
                  background:'linear-gradient(135deg,#0EA5E9,#0284C7)',
                  boxShadow:'0 16px 50px rgba(14,165,233,.45)', minWidth:130,
                }}>
                  <div style={{ fontSize:'2.4rem', fontWeight:900, color:'#fff', lineHeight:1 }}>3+</div>
                  <div style={{ fontSize:'.78rem', color:'rgba(255,255,255,.85)', marginTop:4 }}>Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="s-hide-r">
                <div className="section-badge badge-light d-inline-flex mb-3">Our Story</div>
                <h2 className="section-title mb-3">
                  Started Small, <span style={{ color:'#0EA5E9' }}>Stocked Everything</span>
                </h2>
                <p className="section-sub mb-3">
                  Shreeji Fasteners opened its doors in 2023 in MIDC Nashik as a small hardware trading shop.
                  Over the years, we grew into one of Maharashtra's most reliable wholesale suppliers of
                  <strong style={{ color:'#0F172A' }}> Rivet ,Rivet nuts, screws, studs</strong> —
                  stocking thousands of items across every grade, size, and finish.
                </p>
                <p className="section-sub mb-3">
                  We built our reputation the old-fashioned way: keep the right stock, give an honest price,
                  and deliver on time. Our warehouse in Nashik supplies factories, contractors, fabricators,
                  and hardware traders across Maharashtra and pan-India.
                </p>
                {/* Pull quote */}
                <div style={{ display:'flex', alignItems:'stretch', gap:16, margin:'24px 0 28px' }}>
                  <div style={{ width:3, background:'linear-gradient(to bottom,#0EA5E9,#0284C7)', borderRadius:4, flexShrink:0 }} />
                  <p style={{ fontStyle:'italic', fontSize:'1.05rem', color:'#0F172A', lineHeight:1.6, margin:0 }}>
                    "We don't just sell nuts and bolts — we make sure you get exactly what fits your job."
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VISION & MISSION ══ */}
      <section style={{ padding:'80px 0', background:'#F0F7FF' }}>
        <div className="container-xl">
          <div className="text-center s-hide mb-5">
            <div className="section-badge badge-light d-inline-flex mb-3">Our Purpose</div>
            <h2 className="section-title">Vision &amp; <span style={{ color:'#0EA5E9' }}>Mission</span></h2>
            <p className="section-sub mt-2">What drives us every day — from our warehouse shelves to your doorstep</p>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 s-hide-l">
              <div className="dark-card">
                <div style={{ position:'absolute', top:-40, right:-40, width:160, height:160, borderRadius:'50%', background:'rgba(14,165,233,.06)' }} />
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div style={{ padding:12, background:'rgba(14,165,233,.15)', borderRadius:12, border:'1px solid rgba(14,165,233,.25)' }}>
                    <i className="bi bi-eye-fill" style={{ color:'#38BDF8', fontSize:28 }}></i>
                  </div>
                  <h4 style={{ fontWeight:800, color:'#38BDF8', margin:0 }}>Our Vision</h4>
                </div>
                <p style={{ fontSize:'1rem', lineHeight:1.9, color:'rgba(255,255,255,.85)', marginBottom:24 }}>
                  To be Maharashtra's most dependable one-stop wholesale supplier of Rivet ,Rivet nuts, screws, studs
                  and all industrial fasteners — known for having the right stock, the right grade, and
                  the best price, every single time a customer walks in or calls us.
                </p>
                <hr style={{ borderColor:'rgba(14,165,233,.15)', marginBottom:20 }} />
                {visionPoints.map((p) => (
                  <div key={p} className="d-flex gap-2 align-items-start mb-2">
                    <i className="bi bi-check-circle-fill" style={{ color:'#38BDF8', fontSize:15, marginTop:2, flexShrink:0 }}></i>
                    <span style={{ color:'rgba(255,255,255,.8)', fontSize:'.9rem' }}>{p}</span>
                  </div>
                ))}
                <div style={{ marginTop:24, borderLeft:'3px solid #0EA5E9', paddingLeft:14 }}>
                  <p style={{ fontStyle:'italic', color:'#38BDF8', margin:0, fontSize:'.95rem' }}>
                    "Every bolt counts. Every customer matters."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 s-hide-r">
              <div className="gold-card">
                <div style={{ position:'absolute', top:-40, right:-40, width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,.12)' }} />
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div style={{ padding:12, background:'rgba(255,255,255,.25)', borderRadius:12 }}>
                    <i className="bi bi-bullseye" style={{ color:'#0F172A', fontSize:28 }}></i>
                  </div>
                  <h4 style={{ fontWeight:800, color:'#0F172A', margin:0 }}>Our Mission</h4>
                </div>
                <p style={{ fontSize:'1rem', lineHeight:1.9, color:'rgba(15,23,42,.85)', marginBottom:24 }}>
                  Genuine-grade material, fair wholesale prices, and honest service — so our customers
                  never stop their work waiting for hardware. We dispatch fast and deliver right.
                </p>
                <hr style={{ borderColor:'rgba(15,23,42,.2)', marginBottom:20 }} />
                {missionPoints.map((p) => (
                  <div key={p} className="d-flex gap-2 align-items-start mb-2">
                    <i className="bi bi-check-circle-fill" style={{ color:'#0F172A', fontSize:15, marginTop:2, flexShrink:0 }}></i>
                    <span style={{ color:'rgba(15,23,42,.85)', fontSize:'.9rem' }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="s-hide mt-5" style={{
            display:'flex', alignItems:'center', justifyContent:'center',
            border:'1px solid rgba(14,165,233,.15)', borderRadius:20,
            background:'#fff', overflow:'hidden',
          }}>
            {[
              { val:'3+',       lbl:'Years in business'  },
              { val:'5000+',    lbl:'SKUs in stock'       },
              { val:'Same day', lbl:'Dispatch promise'    },
              { val:'IS / DIN', lbl:'Grade certified'     },
            ].map((s, i, arr) => (
              <div key={s.lbl} style={{ display:'flex', alignItems:'center', flex:1 }}>
                <div style={{ flex:1, textAlign:'center', padding:'28px 16px' }}>
                  <div style={{ fontSize:'1.4rem', fontWeight:700, color:'#0EA5E9' }}>{s.val}</div>
                  <div style={{ fontSize:11, color:'#475569', marginTop:4 }}>{s.lbl}</div>
                </div>
                {i < arr.length - 1 && <div style={{ width:1, height:40, background:'rgba(14,165,233,.15)', flexShrink:0 }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section style={{ padding:'90px 0', background:'#F8FAFF' }}>
        <div className="container-lg">
          <div className="text-center s-hide mb-5">
            <div className="section-badge badge-light d-inline-flex mb-3">Our Journey</div>
            <h2 className="section-title">Milestones <span style={{ color:'#0EA5E9' }}>Over the Years</span></h2>
            <p className="section-sub mt-2">Two decades of growth — one step at a time</p>
          </div>

          <div style={{ position:'relative', paddingTop:8 }}>
            {/* Center line */}
            <div className="d-none d-md-block" style={{
              position:'absolute', left:'50%', top:0, bottom:0, width:3,
              background:'linear-gradient(180deg,#0EA5E9 0%,#7C3AED 60%,#EC4899 100%)',
              transform:'translateX(-50%)', borderRadius:4,
              boxShadow:'0 0 18px rgba(14,165,233,.25)',
            }} />

            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={item.year}
                  className={`d-flex align-items-center mb-5 s-hide d${(i%3)+1}`}
                  style={{ flexDirection: isLeft ? 'row' : 'row-reverse', gap:0 }}
                >
                  {/* Card side */}
                  <div className="flex-fill d-none d-md-block" style={{ padding: isLeft ? '0 36px 0 0' : '0 0 0 36px' }}>
                    <div style={{
                      padding:'24px 28px', borderRadius:20,
                      background:'#fff',
                      border:`1.5px solid ${item.color}30`,
                      boxShadow:'0 6px 28px rgba(15,23,42,.07)',
                      transition:'all .35s ease',
                      textAlign: isLeft ? 'right' : 'left',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow=`0 20px 50px ${item.color}25`; e.currentTarget.style.borderColor=`${item.color}60`; }}
                      onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 28px rgba(15,23,42,.07)'; e.currentTarget.style.borderColor=`${item.color}30`; }}
                    >
                      <div style={{ display:'flex', alignItems:'center', gap:12, justifyContent: isLeft ? 'flex-end' : 'flex-start', marginBottom:12 }}>
                        {!isLeft && (
                          <div style={{ width:38, height:38, borderRadius:10, background:item.bg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                            <i className={`bi ${item.icon}`} style={{ color:item.color, fontSize:18 }}></i>
                          </div>
                        )}
                        <div style={{ fontWeight:800, color:'#0F172A', fontSize:'1rem' }}>{item.title}</div>
                        {isLeft && (
                          <div style={{ width:38, height:38, borderRadius:10, background:item.bg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                            <i className={`bi ${item.icon}`} style={{ color:item.color, fontSize:18 }}></i>
                          </div>
                        )}
                      </div>
                      <div style={{ width:36, height:3, borderRadius:20, background:item.color, marginBottom:12, marginLeft: isLeft ? 'auto' : 0 }} />
                      <p style={{ color:'#64748B', fontSize:'.875rem', lineHeight:1.75, margin:0 }}>{item.desc}</p>
                    </div>
                  </div>

                  {/* Year badge */}
                  <div style={{ flexShrink:0, position:'relative', zIndex:2 }}>
                    <div style={{
                      width:76, height:76, borderRadius:'50%',
                      background:`linear-gradient(135deg,${item.color},${item.color}BB)`,
                      display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column',
                      boxShadow:`0 0 0 5px ${item.color}20, 0 10px 32px ${item.color}50`,
                      border:'3px solid #fff',
                    }}>
                      <span style={{ fontWeight:900, color:'#fff', fontSize:'1rem', lineHeight:1 }}>{item.year}</span>
                    </div>
                  </div>

                  {/* Mobile card (stacks below badge on small screens) */}
                  <div className="flex-fill d-md-none" style={{ paddingLeft:16 }}>
                    <div style={{
                      padding:'18px 20px', borderRadius:16,
                      background:'#fff', border:`1.5px solid ${item.color}30`,
                      boxShadow:'0 4px 16px rgba(15,23,42,.06)',
                    }}>
                      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                        <div style={{ width:32, height:32, borderRadius:8, background:item.bg, display:'flex', alignItems:'center', justifyContent:'center' }}>
                          <i className={`bi ${item.icon}`} style={{ color:item.color, fontSize:15 }}></i>
                        </div>
                        <div style={{ fontWeight:800, color:'#0F172A', fontSize:'.9rem' }}>{item.title}</div>
                      </div>
                      <p style={{ color:'#64748B', fontSize:'.82rem', lineHeight:1.7, margin:0 }}>{item.desc}</p>
                    </div>
                  </div>

                  {/* Empty side for desktop alternating */}
                  <div className="flex-fill d-none d-md-block" />
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ══ GALLERY ══ */}
      <section style={{ padding:'80px 0', background:'#fff' }}>
        <div className="container-xl">
          <div className="text-center s-hide mb-5">
            <div className="section-badge badge-light d-inline-flex mb-3">Our Facility</div>
            <h2 className="section-title">Company <span style={{ color:'#0EA5E9' }}>Gallery</span></h2>
            <p className="section-sub mt-2">A look inside our warehouse, operations, and the products that keep industries running</p>
          </div>

          {/* Masonry top grid */}
          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <div key={i} className={`s-hide d${(i%3)+1} ${item.tall ? 'gallery-item-tall' : ''}`} style={{
                position:'relative', overflow:'hidden', borderRadius:14,
                background:'#e8e8e8', cursor:'pointer',
              }}>
                <img src={item.src} alt={item.caption}
                  style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform .65s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform='scale(1.07)'}
                  onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                />
                <div className="gallery-overlay" style={{ alignItems:'flex-end', padding:18 }}>
                  <span style={{ color:'#fff', fontWeight:600, fontSize:12, letterSpacing:'.04em' }}>{item.caption}</span>
                </div>
                <span style={{
                  position:'absolute', top:12, left:12,
                  background:'#0EA5E9', color:'#fff', fontSize:10, fontWeight:700,
                  letterSpacing:'.08em', textTransform:'uppercase',
                  padding:'4px 10px', borderRadius:4,
                }}>{item.tag}</span>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          {/* <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, marginTop:10 }}>
            {galleryBottom.map((item, i) => (
              <div key={i} className={`s-hide d${i+1}`} style={{
                height:180, borderRadius:14, overflow:'hidden',
                position:'relative', background:'#e8e8e8', cursor:'pointer',
              }}>
                <img src={item.src} alt={item.caption}
                  style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform .65s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform='scale(1.07)'}
                  onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                />
                <div className="gallery-overlay" style={{ alignItems:'flex-end', padding:14 }}>
                  <span style={{ color:'#fff', fontWeight:600, fontSize:12 }}>{item.caption}</span>
                </div>
              </div>
            ))}
          </div> */}

          {/* Responsive override */}
          <style>{`
            .gallery-grid {
              display:grid;
              grid-template-columns:1.6fr 1fr 1fr;
              grid-template-rows:220px 220px;
              gap:10px;
            }
            .gallery-item-tall { grid-row:1/3; }
            @media (max-width:900px) {
              .gallery-grid { grid-template-columns:1fr 1fr; grid-template-rows:repeat(3,200px); }
            }
            @media (max-width:600px) {
              .gallery-grid { grid-template-columns:1fr !important; grid-template-rows:repeat(5,200px) !important; }
              .gallery-item-tall { grid-row:auto !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section style={{ background:DARK_BG, padding:'80px 0', position:'relative', overflow:'hidden' }}>
        <div className="blob2 blob-abs" style={{ width:450, height:450, top:'-20%', left:'-5%', background:'radial-gradient(circle,rgba(14,165,233,.12) 0%,transparent 70%)' }} />
        <div className="container-xl" style={{ position:'relative', zIndex:1 }}>
          <div className="text-center s-hide mb-5">
            <div className="section-badge badge-dark d-inline-flex mb-3">
              <span style={{ width:7, height:7, borderRadius:'50%', background:'#10B981', display:'inline-block' }} /> Principles
            </div>
            <h2 className="section-title section-title-white">
              Our Core <span className="gt-cyan">Values</span>
            </h2>
            <p className="section-sub mt-2" style={{ color:'rgba(255,255,255,.55)' }}>
              The principles that have earned the trust of industries, contractors, and fabricators for nearly two decades.
            </p>
          </div>
          <div className="row g-3">
            {coreValues.map((v, i) => (
              <div key={v.title} className={`col-12 col-sm-6 col-md-3 s-hide d${i+1}`}>
                <div className="cert-card" style={{ textAlign:'left' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
                    <div className="cert-icon-box">
                      <i className={`bi ${v.icon}`} style={{ color:'#22D3EE', fontSize:26 }}></i>
                    </div>
                    <span style={{
                      padding:'5px 12px', borderRadius:50, fontSize:11, fontWeight:700,
                      background:'rgba(14,165,233,.12)', border:'1px solid rgba(14,165,233,.25)',
                      color:'#38BDF8', textTransform:'uppercase', letterSpacing:1,
                    }}>{v.tag}</span>
                  </div>
                  <div style={{ fontWeight:800, color:'#fff', fontSize:'1rem', marginBottom:10 }}>{v.title}</div>
                  <div style={{ width:50, height:3, borderRadius:20, background:'linear-gradient(90deg,#0EA5E9,#38BDF8)', marginBottom:14 }} />
                  <div style={{ color:'rgba(255,255,255,.6)', fontSize:'.85rem', lineHeight:1.8 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      {/* <section style={{
        position:'relative', padding:'100px 6%', overflow:'hidden',
        textAlign:'center', background:DARK_BG,
      }}>
        <div className="blob blob-abs" style={{ width:600, height:600, top:'-30%', right:'-10%', background:'radial-gradient(circle,rgba(14,165,233,.1) 0%,transparent 70%)' }} />
        <div className="blob2 blob-abs" style={{ width:400, height:400, bottom:'-20%', left:'-8%', background:'radial-gradient(circle,rgba(14,165,233,.08) 0%,transparent 70%)' }} />
        <div className="container-md" style={{ position:'relative', zIndex:1 }}>
          <div className="section-badge badge-dark d-inline-flex mb-4 s-hide">
            <span style={{ width:7, height:7, borderRadius:'50%', background:'#10B981', display:'inline-block' }} /> Ready to Order?
          </div>
          <h2 className="s-hide" style={{ fontSize:'clamp(2rem,4.5vw,3.2rem)', fontWeight:700, color:'#fff', marginBottom:18, lineHeight:1.15 }}>
            Need Rivets<br />
            <em style={{ color:'#0EA5E9', fontStyle:'italic' }}>or Any Fastener?</em>
          </h2>
          <p className="s-hide" style={{ color:'rgba(255,255,255,.65)', fontSize:'.97rem', marginBottom:40, maxWidth:600, margin:'0 auto 40px' }}>
            Tell us what you need — size, grade, quantity. We'll give you a wholesale price and dispatch it fast.
            No order too small, no requirement too specific.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap s-hide">
            <a href="/contact" className="btn-gold" style={{ borderRadius:60, padding:'14px 36px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              Get a Quote
            </a>
            <a href="tel:+919876543210" className="btn-outline-cyan" style={{ borderRadius:60, padding:'14px 36px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section> */}

    </div>
  );
}
