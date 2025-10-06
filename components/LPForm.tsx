'use client';

import { useState } from 'react';

export default function LPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    investorType: '',
    investmentRange: '',
    interests: '',
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
    console.log('LP Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        investorType: '',
        investmentRange: '',
        interests: '',
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
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '600' }}>Thank you for your interest!</h3>
        <p style={{ fontSize: '1.125rem', opacity: '0.95' }}>We'll send you the LP deck and reach out within 2-3 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '3rem',
      background: 'var(--background)',
      borderRadius: '16px',
      border: '1px solid var(--border)'
    }}>
      <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: 'var(--primary)', textAlign: 'center', fontWeight: '600' }}>
        LP Inquiry Form
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
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
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
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
          Organization/Fund *
        </label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
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
            Investor Type *
          </label>
          <select
            name="investorType"
            value={formData.investorType}
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
            <option value="">Select type</option>
            <option value="individual">Individual Investor</option>
            <option value="family-office">Family Office</option>
            <option value="institutional">Institutional Investor</option>
            <option value="fund-of-funds">Fund of Funds</option>
            <option value="corporate">Corporate</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
            Investment Range *
          </label>
          <select
            name="investmentRange"
            value={formData.investmentRange}
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
            <option value="">Select range</option>
            <option value="100k-500k">$100K - $500K</option>
            <option value="500k-1m">$500K - $1M</option>
            <option value="1m-5m">$1M - $5M</option>
            <option value="5m-10m">$5M - $10M</option>
            <option value="10m+">$10M+</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
          Investment Interests
        </label>
        <textarea
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          rows={3}
          placeholder="What aspects of VitalTechAI (E-VTA)™ are you most interested in? (e.g., BioTech, HealthTech, Corporate Wellness)"
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

      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us more about your investment goals and why you're interested in Elphina HCF..."
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
        Request LP Deck
      </button>
    </form>
  );
}
