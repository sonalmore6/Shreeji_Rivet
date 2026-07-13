import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuoteModal from './QuoteModal';

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Contact',  path: '/contact' },
];

export default function Header() {
  const [drawerOpen,  setDrawerOpen]  = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [quoteOpen,   setQuoteOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setDrawerOpen(false); }, [location.pathname]);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container-xl">
          <div className="header-inner">

            {/* Logo — left */}
            <Link to="/" className="logo-box" style={{ flexShrink: 0 }}>
              <img src="/images/newlogo.png" alt="Shreeji Rivet Logo" className="header-logo-img" />
            </Link>

            {/* Desktop nav — centre */}
            <nav className="desktop-nav desktop-nav-center">
              {navLinks.map((l) => (
                <Link key={l.path} to={l.path} className={`nav-link-custom${location.pathname === l.path ? ' active' : ''}`}>
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* CTA — right */}
            <div className="btn-header-quote-wrap" style={{ flexShrink: 0 }}>
              <button onClick={() => setQuoteOpen(true)} className="btn-header-quote shimmer-btn">Get Quote</button>
            </div>

            {/* Hamburger */}
            <button className="hamburger-btn" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div className={`mobile-drawer-overlay${drawerOpen ? ' open' : ''}`} onClick={() => setDrawerOpen(false)} />

      {/* Mobile drawer */}
      <div className={`mobile-drawer${drawerOpen ? ' open' : ''}`}>
        <div className="drawer-head">
          <Link to="/" className="logo-box" onClick={() => setDrawerOpen(false)}>
            <img src="/images/newlogo.png" alt="Shreeji Rivet" className="header-logo-img" style={{ height:38 }} />
          </Link>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <i className="bi bi-x"></i>
          </button>
        </div>
        <hr className="drawer-hr" />
        <nav className="drawer-nav">
          {navLinks.map((l) => (
            <Link key={l.path} to={l.path} className={`drawer-nav-link${location.pathname === l.path ? ' active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="drawer-cta-wrap">
          <button onClick={() => { setDrawerOpen(false); setQuoteOpen(true); }} className="drawer-cta">Get Free Quote</button>
        </div>
      </div>

      {/* Spacer */}
      <div className="header-spacer" />

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
