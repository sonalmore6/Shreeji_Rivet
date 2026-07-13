import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

const SERVICE_ID   = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const INQUIRY_TPL  = import.meta.env.VITE_EMAILJS_INQUIRY_TEMPLATE_ID;
const THANKYOU_TPL = import.meta.env.VITE_EMAILJS_THANKYOU_TEMPLATE_ID;
const PUBLIC_KEY   = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactCards = [
  {
    icon: 'bi-telephone-fill', title: 'Call Us',
    lines: ['+91-9552287300', '+91-9923366110', 'We respond within 2 hours'],
    link: { href:'tel:+919923366110', label:'Call Now' },
    iconBg:'rgba(37,99,235,.1)', iconColor:'#1E40AF', borderColor:'rgba(37,99,235,.2)',
    linkColor:'#1E40AF',
  },
  {
    icon: 'bi-envelope-fill', title: 'Email Us',
    lines: ['shreejirivetindia@gmail.com', 'We reply within 24 hrs'],
    link: { href:'mailto:shreejirivetindia@gmail.com', label:'Send Email' },
    iconBg:'rgba(6,182,212,.1)', iconColor:'#0891B2', borderColor:'rgba(6,182,212,.2)',
    linkColor:'#0891B2',
  },
  {
    icon: 'bi-clock-fill', title: 'Business Hours',
    lines: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Sat: 9:00 AM – 2:00 PM', 'Sun: 9:00 AM – 6:00 PM'],
    link: null,
    iconBg:'rgba(245,158,11,.1)', iconColor:'#D97706', borderColor:'rgba(245,158,11,.2)',
    linkColor:'',
  },
  {
    icon: 'bi-whatsapp', title: 'WhatsApp',
    lines: ['+91-9923366110', 'Quick quotes & enquiries'],
    link: { href:'https://wa.me/919923366110?text=Hello%2C%20I%20need%20a%20quote%20for%20fasteners.', label:'Chat Now', external:true },
    iconBg:'rgba(37,211,102,.1)', iconColor:'#16a34a', borderColor:'rgba(37,211,102,.2)',
    linkColor:'#16a34a',
  },
];

const officeStates = ['Maharashtra','Gujarat','Rajasthan','Karnataka','Tamil Nadu','Delhi NCR'];

const whyContact = [
  { icon:'bi-lightning-fill', label:'Response within 2 hours', color:'#22D3EE' },
  { icon:'bi-people-fill',    label:'Dedicated account manager',color:'#FCD34D' },
  { icon:'bi-shield-check',   label:'No obligation quotes',     color:'#86EFAC' },
  { icon:'bi-truck',          label:'48h express delivery',     color:'#FCA5A5' },
];

const INIT = { name:'', company:'', email:'', phone:'', product:'', qty:'', size:'', message:'' };

export default function Contact() {
  const [form,    setForm]    = useState(INIT);
  const [errors,  setErrors]  = useState({});
  const [loading, setLoading] = useState(false);
  const [toast,   setToast]   = useState(false);
  const [sendErr, setSendErr] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (field) => (ev) => {
    setForm(f => ({ ...f, [field]: ev.target.value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
    if (sendErr) setSendErr('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setSendErr('');

    const inquiryParams = {
      from_name:  form.name,
      from_email: form.email,
      company:    form.company  || '—',
      phone:      form.phone    || '—',
      product:    form.product  || '—',
      quantity:   form.qty      || '—',
      size:       form.size     || '—',
      message:    form.message,
    };

    const thankyouParams = {
      to_name:  form.name,
      to_email: form.email,
    };

    try {
      await emailjs.send(SERVICE_ID, INQUIRY_TPL,  inquiryParams,  PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, THANKYOU_TPL, thankyouParams, PUBLIC_KEY);
      setForm(INIT);
      setErrors({});
      setToast(true);
      setTimeout(() => setToast(false), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendErr('Failed to send message. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SEO
        title="Contact Us"
        description="Contact Shreeji Rivet India Pvt. Ltd. at Ambad MIDC, Nashik, Maharashtra for rivet, rivet nut, and fastener quotes. Call +91-9552287300 or WhatsApp for a free quote within 24 hours."
        keywords="Shreeji Rivet India contact, fastener supplier Nashik contact, rivet quote Nashik, Ambad MIDC fastener supplier"
        path="/contact"
      />

      {/* ══ HERO ══ */}
      <section className="contact-page-hero">
        <div className="blob blob-abs" style={{ width:500, height:500, top:'-30%', right:'-8%', background:'radial-gradient(circle,rgba(37,99,235,.18) 0%,transparent 70%)' }} />
        <div className="blob2 blob-abs" style={{ width:350, height:350, bottom:'-20%', left:'-5%', background:'radial-gradient(circle,rgba(6,182,212,.12) 0%,transparent 70%)' }} />
        <div className="dark-grid-overlay" />
        <div className="container-md" style={{ position:'relative', zIndex:1 }}>
          <div className="section-badge badge-dark h-badge d-inline-flex mb-4">
            <span style={{ width:7, height:7, borderRadius:'50%', background:'#10B981', display:'inline-block' }} /> Contact Us
          </div>
          <h1 className="h-anim-1" style={{ fontWeight:900, color:'#fff', fontSize:'clamp(2.2rem,5vw,3.8rem)', marginBottom:20, lineHeight:1.1 }}>
            Let's <span className="gt-cyan">Connect</span> and Grow Together
          </h1>
          <p className="h-anim-2" style={{ color:'rgba(255,255,255,.7)', fontSize:'1.1rem', lineHeight:1.8, margin:0 }}>
            Reach out for quotes, custom orders, or any fastener inquiry. Our team responds within 2 hours.
          </p>
        </div>
        <div style={{ position:'absolute', bottom:-1, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:60 }}>
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#F0F7FF" />
          </svg>
        </div>
      </section>

      {/* ══ CONTACT CARDS ══ */}
      <section style={{ background:'#F0F7FF', padding:'64px 0 48px' }}>
        <div className="container-xl">
          <div className="row g-3">
            {contactCards.map((card, i) => (
              <div key={card.title} className={`col-12 col-sm-6 col-md-3 s-hide d${i+1}`}>
                <div className="contact-info-card" style={{ borderColor:card.borderColor }}>
                  <div className="contact-icon-box" style={{ background:card.iconBg, borderColor:card.borderColor }}>
                    <i className={`bi ${card.icon}`} style={{ color:card.iconColor, fontSize:22 }}></i>
                  </div>
                  <div className="contact-info-title">{card.title}</div>
                  {card.lines.map((l) => <span key={l} className="contact-info-line">{l}</span>)}
                  {card.link && (
                    card.link.external
                      ? <a href={card.link.href} target="_blank" rel="noopener noreferrer"
                          className="contact-link-btn mt-2" style={{ color:card.linkColor, textDecoration:'none' }}>
                          {card.link.label} <i className="bi bi-arrow-right"></i>
                        </a>
                      : <a href={card.link.href}
                          className="contact-link-btn mt-2" style={{ color:card.linkColor, textDecoration:'none' }}>
                          {card.link.label} <i className="bi bi-arrow-right"></i>
                        </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FORM + SIDEBAR ══ */}
      <section style={{ background:'#F0F7FF', padding:'0 0 80px' }}>
        <div className="container-xl">
          <div className="row g-4">

            {/* Form */}
            <div className="col-12 col-lg-7 s-hide-l">
              <div className="contact-form-box">
                <div className="section-badge badge-light d-inline-flex mb-4">Send a Message</div>
                <h2 className="section-title mb-2" style={{ fontSize:'1.7rem' }}>
                  Get a <span style={{ color:'#2563EB' }}>Free Quote</span>
                </h2>
                <p className="section-sub mb-4">Fill in the details below and we'll get back to you within 2 hours.</p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label">
                        <i className="bi bi-person-fill me-1" style={{ color:'#2563EB' }}></i> Full Name *
                      </label>
                      <input className={`form-field${errors.name ? ' error' : ''}`} placeholder="Your full name"
                        value={form.name} onChange={handleChange('name')} />
                      {errors.name && <div className="form-error">{errors.name}</div>}
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label">
                        <i className="bi bi-building me-1" style={{ color:'#2563EB' }}></i> Company Name
                      </label>
                      <input className="form-field" placeholder="Your company (optional)"
                        value={form.company} onChange={handleChange('company')} />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label">
                        <i className="bi bi-envelope-fill me-1" style={{ color:'#2563EB' }}></i> Email Address *
                      </label>
                      <input type="email" className={`form-field${errors.email ? ' error' : ''}`} placeholder="your@email.com"
                        value={form.email} onChange={handleChange('email')} />
                      {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label">
                        <i className="bi bi-telephone-fill me-1" style={{ color:'#2563EB' }}></i> Phone Number
                      </label>
                      <input type="tel" className="form-field" placeholder="+91 9876543210"
                        value={form.phone} onChange={handleChange('phone')} />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-box-seam me-1" style={{ color:'#2563EB' }}></i> Product Interest
                    </label>
                    <select className="form-field" value={form.product} onChange={handleChange('product')}>
                      <option value="">Select a product category</option>
                      <option>Blind Rivets</option>
                      <option>Structural Rivets</option>
                      <option>Rivet Nuts</option>
                      <option>Self-Clinching Fasteners</option>
                      <option>Self-Drilling Screws</option>
                      <option>Screws</option>
                      <option>Bulk Order Enquiry</option>
                      <option>Custom / Special Fasteners</option>
                    </select>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label">
                        <i className="bi bi-stack me-1" style={{ color:'#2563EB' }}></i> Quantity Required
                      </label>
                      <input className="form-field" placeholder="e.g. 5000 pcs / 500 kg"
                        value={form.qty} onChange={handleChange('qty')} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label">
                        <i className="bi bi-rulers me-1" style={{ color:'#2563EB' }}></i> Size / Grade (if known)
                      </label>
                      <input className="form-field" placeholder="e.g. 4.8×19mm, Grade 8.8"
                        value={form.size} onChange={handleChange('size')} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">
                      <i className="bi bi-chat-text-fill me-1" style={{ color:'#2563EB' }}></i> Message *
                    </label>
                    <textarea className={`form-field${errors.message ? ' error' : ''}`} rows={5}
                      placeholder="Describe your requirements, quantity, specifications..."
                      value={form.message} onChange={handleChange('message')} />
                    {errors.message && <div className="form-error">{errors.message}</div>}
                  </div>

                  {sendErr && (
                    <div className="quote-modal-send-err mb-3">
                      <i className="bi bi-exclamation-triangle-fill me-2"></i>{sendErr}
                    </div>
                  )}

                  <button type="submit" className="btn-blue w-100" disabled={loading}>
                    {loading
                      ? <><span className="spinner-border spinner-border-sm me-2" role="status" />&nbsp;Sending…</>
                      : <><i className="bi bi-send-fill me-2"></i> Send Message</>
                    }
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-12 col-lg-5 s-hide-r d-flex flex-column gap-4">

              {/* Address card */}
              <div className="address-card">
                <div style={{ fontWeight:800, color:'#0F172A', fontSize:'1.05rem', marginBottom:20 }}>
                  <i className="bi bi-geo-alt-fill me-2" style={{ color:'#2563EB' }}></i> Our Offices
                </div>
                <div className="d-flex gap-3 mb-4">
                  <div style={{ width:42, height:42, borderRadius:12, background:'rgba(37,99,235,.08)', border:'1.5px solid rgba(37,99,235,.2)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <i className="bi bi-buildings-fill" style={{ color:'#1E40AF', fontSize:18 }}></i>
                  </div>
                  <div>
                    <div style={{ fontWeight:700, color:'#0F172A', fontSize:'.92rem', marginBottom:4 }}>Head Office – Nashik</div>
                    <div style={{ color:'#64748B', fontSize:'.83rem', lineHeight:1.65 }}>Plot No. A 11/2/10, Opp. Nashik Engineering Cluster,<br />Ambad MIDC, Nashik – 422010, Maharashtra</div>
                    <a href="tel:+919552287300" style={{ color:'#1E40AF', fontWeight:700, fontSize:'.82rem', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:4, marginTop:6 }}>
                      <i className="bi bi-telephone-fill"></i> +91-9552287300
                    </a>
                  </div>
                </div>
                <hr style={{ borderColor:'#E2E8F0', margin:'0 0 16px' }} />
                <div style={{ fontWeight:700, color:'#64748B', fontSize:'.77rem', marginBottom:10, textTransform:'uppercase', letterSpacing:'.08em' }}>Serving Across India</div>
                <div className="d-flex flex-wrap">
                  {officeStates.map((s) => <span key={s} className="state-tag">{s}</span>)}
                </div>
              </div>

              {/* Why contact card */}
              <div className="why-contact-card">
                <div style={{ fontWeight:800, color:'#22D3EE', fontSize:'.75rem', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:16 }}>Why Contact Us?</div>
                <div style={{ fontWeight:800, color:'#fff', fontSize:'1.1rem', marginBottom:20, lineHeight:1.3 }}>
                  We Make Ordering <span style={{ color:'#FCD34D' }}>Easy</span>
                </div>
                {whyContact.map((pt) => (
                  <div key={pt.label} className="d-flex align-items-center gap-3 mb-3">
                    <div style={{ width:34, height:34, borderRadius:9, background:'rgba(255,255,255,.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <i className={`bi ${pt.icon}`} style={{ color:pt.color, fontSize:15 }}></i>
                    </div>
                    <span style={{ color:'rgba(255,255,255,.85)', fontSize:'.88rem' }}>{pt.label}</span>
                  </div>
                ))}
                <hr style={{ borderColor:'rgba(6,182,212,.15)', margin:'20px 0' }} />
                <a href="https://wa.me/919552287300?text=Hello%2C%20I%20need%20a%20quote%20for%20fasteners."
                  target="_blank" rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center gap-2"
                  style={{ padding:'12px', borderRadius:12, background:'#25D366', color:'#fff', fontWeight:800, fontSize:'.9rem', textDecoration:'none', transition:'background .2s' }}
                  onMouseEnter={e => e.currentTarget.style.background='#1EBE5A'}
                  onMouseLeave={e => e.currentTarget.style.background='#25D366'}>
                  <i className="bi bi-whatsapp" style={{ fontSize:18 }}></i> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MAP ══ */}
      <section style={{ padding:'0 0 80px', background:'#F0F7FF' }}>
        <div className="container-xl s-hide">
          <div className="section-badge badge-light d-inline-flex mb-4">Find Us</div>
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.170007111879!2d73.7340995!3d19.9593514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddecb22d80ee41%3A0xe23561dc3c6d9c4f!2sValaki%20Enterprise!5e0!3m2!1sen!2sin!4v1775314678669!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border:0, display:'block' }} allowFullScreen loading="lazy" title="Shreeji Location – Ambad MIDC, Nashik"
            />
          </div>
        </div>
      </section>

      {/* ══ TOAST ══ */}
      <div className={`toast-notification${toast ? ' show' : ''}`}>
        <i className="bi bi-check-circle-fill" style={{ fontSize:20, color:'#86EFAC' }}></i>
        Message sent! We'll respond within 2 hours.
      </div>

    </div>
  );
}
