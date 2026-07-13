import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

/* 24 tick marks around the outer measurement ring */
const TICKS = Array.from({ length: 24 }, (_, i) => {
  const a   = (i * 15 - 90) * (Math.PI / 180);
  const r1  = 89;
  const r2  = i % 6 === 0 ? 98 : i % 3 === 0 ? 94 : 91;
  const col = i % 6 === 0 ? '#06B6D4' : i % 3 === 0 ? 'rgba(37,99,235,.55)' : 'rgba(37,99,235,.28)';
  const sw  = i % 6 === 0 ? 2 : 1;
  return { a, r1, r2, col, sw };
});

export default function Loader() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(true);
  const [gone,    setGone]    = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    let cancelled = false;

    if (isFirst.current) {
      isFirst.current = false;
      const finish = () => {
        if (cancelled) return;
        setVisible(false);
        setTimeout(() => { if (!cancelled) setGone(true); }, 650);
      };
      const minTimer = setTimeout(finish, 1600);
      if (document.readyState !== 'complete')
        window.addEventListener('load', () => setTimeout(finish, 100), { once: true });
      return () => { cancelled = true; clearTimeout(minTimer); };
    }

    setGone(false);
    setVisible(true);
    const t1 = setTimeout(() => { if (!cancelled) setVisible(false); }, 650);
    const t2 = setTimeout(() => { if (!cancelled) setGone(true); }, 1300);
    return () => { cancelled = true; clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]);

  if (gone) return null;

  return (
    <div className={`page-loader${!visible ? ' loader-hide' : ''}`}>

      <div className="loader-scene">

        {/* ── Phillips-head screw SVG (rotates as one piece) ── */}
        <svg
          className="loader-screw-svg"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Outer flange gradient — bright top-left, dark bottom-right */}
            <radialGradient id="sg1" cx="36%" cy="30%" r="72%">
              <stop offset="0%"   stopColor="#93C5FD" />
              <stop offset="45%"  stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </radialGradient>
            {/* Inner recessed surface */}
            <radialGradient id="sg2" cx="40%" cy="35%" r="65%">
              <stop offset="0%"   stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </radialGradient>
            {/* Clip Phillips cross to inner circle */}
            <clipPath id="icp">
              <circle cx="100" cy="100" r="57" />
            </clipPath>
          </defs>

          {/* Outer measurement ring */}
          <circle cx="100" cy="100" r="97" fill="none"
            stroke="rgba(37,99,235,.12)" strokeWidth="1.5" />

          {/* 24 tick marks */}
          {TICKS.map(({ a, r1, r2, col, sw }, i) => (
            <line key={i}
              x1={100 + r1 * Math.cos(a)} y1={100 + r1 * Math.sin(a)}
              x2={100 + r2 * Math.cos(a)} y2={100 + r2 * Math.sin(a)}
              stroke={col} strokeWidth={sw} strokeLinecap="round"
            />
          ))}

          {/* Drop shadow layer */}
          <circle cx="102" cy="103" r="76" fill="rgba(0,0,0,.28)" />

          {/* ── Screw head outer flange ── */}
          <circle cx="100" cy="100" r="76" fill="url(#sg1)" />

          {/* Flange edge highlight ring */}
          <circle cx="100" cy="100" r="75.5" fill="none"
            stroke="rgba(255,255,255,.22)" strokeWidth="1.5" />
          {/* Chamfer shadow ring */}
          <circle cx="100" cy="100" r="70" fill="none"
            stroke="rgba(0,0,0,.22)" strokeWidth="1" />

          {/* ── Inner recessed drive area ── */}
          <circle cx="100" cy="100" r="58" fill="url(#sg2)" />
          <circle cx="100" cy="100" r="57.5" fill="none"
            stroke="rgba(0,0,0,.38)" strokeWidth="1.5" />

          {/* ── Phillips cross (clipped) ── */}
          <g clipPath="url(#icp)">
            {/* Vertical slot */}
            <rect x="91.5" y="43" width="17" height="114" rx="5" fill="#07101F" />
            {/* Horizontal slot */}
            <rect x="43"   y="91.5" width="114" height="17" rx="5" fill="#07101F" />
            {/* Left bevel highlight */}
            <rect x="91.5" y="43" width="3"   height="114" rx="2" fill="rgba(255,255,255,.13)" />
            {/* Top bevel highlight */}
            <rect x="43"   y="91.5" width="114" height="3"  rx="2" fill="rgba(255,255,255,.13)" />
            {/* Right bevel shadow */}
            <rect x="105.5" y="43" width="3"   height="114" rx="2" fill="rgba(0,0,0,.22)" />
            {/* Bottom bevel shadow */}
            <rect x="43"   y="105.5" width="114" height="3" rx="2" fill="rgba(0,0,0,.22)" />
          </g>

          {/* ── Centre pip ── */}
          <circle cx="100" cy="100" r="9"   fill="rgba(15,28,60,.85)" />
          <circle cx="100" cy="100" r="4.5" fill="rgba(255,255,255,.22)" />
          <circle cx="98"  cy="98"  r="1.8" fill="rgba(255,255,255,.5)" />

          {/* ── 3-D lighting highlight (top-left specular) ── */}
          <ellipse cx="73" cy="69" rx="22" ry="13"
            fill="rgba(255,255,255,.18)" transform="rotate(-38 73 69)" />
          <ellipse cx="69" cy="66" rx="10" ry="6"
            fill="rgba(255,255,255,.12)" transform="rotate(-38 69 66)" />
        </svg>

        {/* Spinning accent rings */}
        <div className="loader-ring-cyan" />
        <div className="loader-ring-gold" />
      </div>

      <div className="loader-brand-text">SHREEJI</div>
      <div className="loader-tagline-text">Precision Fasteners &amp; Rivets</div>

      <div className="loader-dot-row">
        {[0, 1, 2].map(i => (
          <span key={i} className="loader-dot"
            style={{ animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>

    </div>
  );
}
