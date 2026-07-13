export default function KeywordAliases({ items, label = 'Also searched as' }) {
  return (
    <div className="h-anim-2" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginTop: 22 }}>
      <span style={{ color: 'rgba(255,255,255,.5)', fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em' }}>
        {label}:
      </span>
      {items.map((kw) => (
        <span key={kw} style={{
          background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)',
          color: 'rgba(255,255,255,.8)', fontSize: '.8rem', fontWeight: 600,
          padding: '5px 12px', borderRadius: 20,
        }}>{kw}</span>
      ))}
    </div>
  );
}
