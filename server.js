import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/send-quote', async (req, res) => {
  const { name, company, email, phone, product, qty, size, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  try {
    // Inquiry email → sonalkmore06@gmail.com
    await transporter.sendMail({
      from: `"Shreeji Rivet Website" <${process.env.SMTP_USER}>`,
      to: process.env.INQUIRY_TO || process.env.SMTP_USER,
      subject: `New Quote Enquiry from ${name}`,
      html: `
        <h2>New Quote Enquiry</h2>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Company</b></td><td>${company || '—'}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone || '—'}</td></tr>
          <tr><td><b>Product</b></td><td>${product || '—'}</td></tr>
          <tr><td><b>Quantity</b></td><td>${qty || '—'}</td></tr>
          <tr><td><b>Size / Grade</b></td><td>${size || '—'}</td></tr>
        </table>
        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    // Thank-you email → customer
    await transporter.sendMail({
      from: `"Shreeji Rivet" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for your enquiry, ${name}!`,
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to <b>Shreeji Rivet</b>.<br>
        We have received your enquiry and our team will get back to you within 2 business hours with a competitive quote.</p>
        <p>If you have any urgent queries, feel free to call us at <b>+91-9552287300</b>.</p>
        <p>Warm regards,<br><b>Team Shreeji Rivet</b></p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Mail error:', err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
