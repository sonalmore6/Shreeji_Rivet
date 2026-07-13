import { useState, useEffect } from 'react';

const makeInit = (product = '') => ({ name:'', company:'', email:'', phone:'', product, qty:'', size:'', message:'' });

export default function QuoteModal({ open, onClose, defaultProduct = '' }) {
  const [form,    setForm]    = useState(makeInit(defaultProduct));
  const [errors,  setErrors]  = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sendErr, setSendErr] = useState('');

  useEffect(() => {
    if (open) {
      setForm(makeInit(defaultProduct));
      setErrors({});
      setSendErr('');
      setSuccess(false);
    }
  }, [open, defaultProduct]);

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

    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Server error');
      }

      setForm(makeInit(defaultProduct));
      setErrors({});
      setSuccess(true);
      setTimeout(() => { setSuccess(false); onClose(); }, 4000);
    } catch (err) {
      console.error('Send error:', err);
      setSendErr('Failed to send message. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleClose = () => {
    setSuccess(false);
    setErrors({});
    setSendErr('');
    onClose();
  };

  if (!open) return null;

  return (
    <div className={`quote-modal-overlay${open ? ' open' : ''}`} onClick={handleOverlayClick}>
      <div className="quote-modal">

        {/* Header */}
        <div className="quote-modal-head">
          <div>
            <div className="section-badge badge-light d-inline-flex mb-2">Get a Free Quote</div>
            <h2 style={{ fontWeight:900, color:'#0F172A', fontSize:'1.4rem', margin:0, lineHeight:1.2 }}>
              Tell Us Your <span style={{ color:'#2563EB' }}>Requirements</span>
            </h2>
            <p style={{ color:'#64748B', fontSize:'.85rem', marginTop:5, marginBottom:0 }}>
              We'll respond within 2 hours with a competitive quote.
            </p>
          </div>
          <button className="quote-modal-close" onClick={handleClose} aria-label="Close">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Body */}
        <div className="quote-modal-body">
          {success ? (
            <div className="quote-modal-success">
              <div className="quote-modal-success-icon">
                <i className="bi bi-check-circle-fill"></i>
              </div>
              <h3>Message Sent!</h3>
              <p>
                Thank you, <strong>{form.name || 'there'}</strong>! We've received your enquiry and sent a
                confirmation to your email. Our team will get back to you within 2 hours.
              </p>
            </div>
          ) : (
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
                <input className="form-field" placeholder="e.g. Blind Rivets, Bugle Head Screw…"
                  value={form.product} onChange={handleChange('product')} />
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
                <textarea className={`form-field${errors.message ? ' error' : ''}`} rows={4}
                  placeholder="Describe your requirements, quantity, specifications..."
                  value={form.message} onChange={handleChange('message')} />
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>

              {sendErr && (
                <div className="quote-modal-send-err">
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
          )}
        </div>
      </div>
    </div>
  );
}
