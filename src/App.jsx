import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SEO from './components/SEO';
import { organizationSchema } from './seo/seoConfig';
import Header  from './components/Header';
import Footer  from './components/Footer';
import Loader  from './components/Loader';
import Home    from './pages/Home';
import About   from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import BlindRivets from './pages/BlindRivets';
import BlindRivetDetail from './pages/BlindRivetDetail';
import StructuralRivets from './pages/StructuralRivets';
import StructuralRivetDetail from './pages/StructuralRivetDetail';
import RivetNuts from './pages/RivetNuts';
import RivetNutDetail from './pages/RivetNutDetail';
import SelfClinchingFasteners from './pages/SelfClinchingFasteners';
import SelfClinchingFastenerDetail from './pages/SelfClinchingFastenerDetail';
import SelfDrillingScrews from './pages/SelfDrillingScrews';
import SelfDrillingScreDetail from './pages/SelfDrillingScreDetail';
import Screws from './pages/Screws';
import ScrewDetail from './pages/ScrewDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}

function AnimationObserver() {
  const { pathname } = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.s-hide, .s-hide-l, .s-hide-r, .s-hide-s');
      const obs = new IntersectionObserver(
        (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('s-show'); obs.unobserve(e.target); } }); },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );
      els.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
}

function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 900); return () => clearTimeout(t); }, []);
  const v = visible ? ' fab-visible' : '';
  return (
    <div className="fab-stack">
      <a href="tel:+919923366110"
        className={`fab fab-call${v}`}
        aria-label="Call Us">
        <i className="bi bi-telephone-fill"></i>
        <span className="fab-label">Call Us</span>
      </a>
      <a href="https://wa.me/919923366110?text=Hello%2C%20I%20need%20a%20quote%20for%20fasteners."
        target="_blank" rel="noopener noreferrer"
        className={`fab fab-wa${v}`}
        aria-label="WhatsApp">
        <i className="bi bi-whatsapp"></i>
        <span className="fab-label">WhatsApp</span>
      </a>
    </div>
  );
}

function ScrollToTopBtn() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 350);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <button className={`scroll-top-btn${show ? ' show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
      <i className="bi bi-chevron-up"></i>
    </button>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SEO schema={organizationSchema} />
      <Loader />
      <ScrollToTop />
      <AnimationObserver />
      <Header />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/products"             element={<Products />} />
        <Route path="/blind-rivets"              element={<BlindRivets />} />
        <Route path="/blind-rivets/:id"          element={<BlindRivetDetail />} />
        <Route path="/structural-rivets"         element={<StructuralRivets />} />
        <Route path="/structural-rivets/:id"     element={<StructuralRivetDetail />} />
        <Route path="/rivet-nuts"                        element={<RivetNuts />} />
        <Route path="/rivet-nuts/:id"                    element={<RivetNutDetail />} />
        <Route path="/self-clinching-fasteners"          element={<SelfClinchingFasteners />} />
        <Route path="/self-clinching-fasteners/:id"      element={<SelfClinchingFastenerDetail />} />
        <Route path="/self-drilling-screws"              element={<SelfDrillingScrews />} />
        <Route path="/self-drilling-screws/:id"          element={<SelfDrillingScreDetail />} />
        <Route path="/screws"                            element={<Screws />} />
        <Route path="/screws/:id"                        element={<ScrewDetail />} />
        <Route path="/contact"              element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingButtons />
      <ScrollToTopBtn />
    </BrowserRouter>
  );
}

export default App;
