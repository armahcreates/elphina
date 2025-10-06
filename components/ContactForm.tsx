'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Contact Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div style={{
        padding: '3rem',
        background: 'var(--primary)',
        borderRadius: '16px',
        textAlign: 'center',
        color: 'var(--background)'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '600' }}>Message Sent!</h3>
        <p style={{ fontSize: '1.125rem', opacity: '0.95' }}>We'll get back to you within 24-48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: '700px',
      margin: '0 auto',
      padding: '3rem',
      background: 'var(--background)',
      borderRadius: '16px',
      border: '1px solid var(--border)'
    }}>
      <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: 'var(--primary)', textAlign: 'center', fontWeight: '600' }}>
        Contact Us
      </h3>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontSize: '1rem',
            fontFamily: 'inherit',
            transition: 'border-color 0.2s ease'
          }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid var(--off-white)',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid var(--off-white)',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
          Subject *
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontSize: '1rem',
            background: 'var(--background)',
            fontFamily: 'inherit',
            transition: 'border-color 0.2s ease'
          }}
        >
          <option value="">Select a subject</option>
          <option value="founder-inquiry">Founder Inquiry</option>
          <option value="lp-inquiry">LP Inquiry</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="media">Media Inquiry</option>
          <option value="general">General Question</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Tell us how we can help you..."
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontSize: '1rem',
            fontFamily: 'inherit',
            resize: 'vertical',
            transition: 'border-color 0.2s ease'
          }}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{
          width: '100%',
          padding: '1rem',
          fontSize: '1.1rem',
          cursor: 'pointer'
        }}
      >
        Send Message
      </button>
    </form>
  );
}
