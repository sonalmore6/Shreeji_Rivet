import { Link } from 'react-router-dom';
import { useState } from 'react';

const quickLinks = [
  { label: 'Home',        path: '/',        icon: 'bi-house-fill' },
  { label: 'About Us',    path: '/about',   icon: 'bi-info-circle-fill' },
  { label: 'Products',    path: '/products',icon: 'bi-grid-fill' },
  { label: 'Contact',     path: '/contact', icon: 'bi-telephone-fill' },
  { label: 'Get Quote',   path: '/contact', icon: 'bi-file-earmark-text-fill' },
];

const productLinks = [
  { label: 'Blind Rivets',             path: '/blind-rivets',             icon: 'bi-circle-fill' },
  { label: 'Structural Rivet',         path: '/structural-rivets',        icon: 'bi-building-fill' },
  { label: 'Rivet Nut',                path: '/rivet-nuts',               icon: 'bi-gear-fill' },
  { label: 'Self-Clinching Fastener',  path: '/self-clinching-fasteners', icon: 'bi-grid-3x3-gap-fill' },
  { label: 'Self-Drilling Screws',     path: '/self-drilling-screws',     icon: 'bi-wrench-adjustable' },
  { label: 'Screws',                   path: '/screws',                   icon: 'bi-tools' },
];

const contactItems = [
  { icon: 'bi-telephone-fill',  text: '+91-9923366110',    href: 'tel:+919923366110',              color: '#22D3EE' },
  { icon: 'bi-telephone-fill',  text: '+91-9552287300',    href: 'tel:+919552287300',              color: '#22D3EE' },
  { icon: 'bi-envelope-fill',   text: 'shreejirivetindia@gmail.com', href: 'mailto:shreejirivetindia@gmail.com',  color: '#F59E0B' },
  { icon: 'bi-geo-alt-fill',    text: 'Plot No. A 11/2/10, Opp. Nashik Engineering Cluster, Ambad MIDC, Nashik – 422010', href: null, color: '#A78BFA' },
];



const stats = [
  { val: '20+',   lbl: 'Years' },
  { val: '500+',  lbl: 'Clients' },
  { val: '1000+', lbl: 'Products' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="site-footer">
      {/* Decorative blobs */}
      <div className="footer-blob footer-blob-1" />
      <div className="footer-blob footer-blob-2" />
      <div className="footer-grid-overlay" />

   

      {/* ── Main footer body ── */}
      <div className="container-xl">
        <div className="footer-inner">
          <div className="footer-cols">

            {/* Brand */}
            <div className="footer-col-brand">
              <Link to="/" className="footer-brand-name">
                Shreeji <span className="company-logo-accent">Rivet</span> India Pvt. Ltd.
              </Link>

              <p className="footer-desc">
                Premium nut &amp; bolt supplier serving India's manufacturing, construction,
                and automotive sectors since 2005. Quality guaranteed.
              </p>

             

            </div>

            {/* Quick Links */}
            <div className="footer-col-links">
              <div className="footer-col-head">
                <i className="bi bi-link-45deg footer-col-head-icon" />
                Quick Links
              </div>
              {quickLinks.map(l => (
                <Link key={l.label} to={l.path} className="footer-nav-link">
                  <span className="footer-nav-arrow"><i className="bi bi-chevron-right" /></span>
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Products */}
            <div className="footer-col-products">
              <div className="footer-col-head">
                <i className="bi bi-gear-fill footer-col-head-icon" />
                Our Products
              </div>
              {productLinks.map(p => (
                <Link key={p.label} to={p.path} className="footer-nav-link">
                  <span className="footer-nav-arrow"><i className="bi bi-chevron-right" /></span>
                  {p.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div className="footer-col-contact">
              <div className="footer-col-head">
                <i className="bi bi-headset footer-col-head-icon" />
                Get In Touch
              </div>
              {contactItems.map((item, i) => (
                <div key={i} className="footer-contact-item">
                  <span className="footer-contact-icon-wrap" style={{ background: `${item.color}15`, borderColor: `${item.color}30` }}>
                    <i className={`bi ${item.icon}`} style={{ color: item.color }} />
                  </span>
                  <div>
                    {item.href
                      ? <a href={item.href} className="footer-contact-link">{item.text}</a>
                      : <span className="footer-contact-text">{item.text}</span>}
                  </div>
                </div>
              ))}

              {/* Map CTA */}
              <Link to="/contact" className="footer-map-btn">
                <i className="bi bi-map-fill" /> View on Map
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="container-xl">
          <div className="footer-bottom-inner">
            <p className="footer-copy mb-0">
              © {new Date().getFullYear()} <span> Shreeji Rivet India Pvt. Ltd.</span> All rights reserved.
            </p>
            
           
          </div>
        </div>
      </div>
    </footer>
  );
}
