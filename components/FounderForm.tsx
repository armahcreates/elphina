'use client';

import { useState } from 'react';
import { User, Mail, Phone, Building2, Globe, TrendingUp, DollarSign, Target, FileText, Users, MapPin, Send } from 'lucide-react';

export default function FounderForm() {
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    phone: '',
    companyName: '',
    companyWebsite: '',
    stage: '',
    fundingRaised: '',
    sector: '',
    description: '',
    pitchDeck: '',
    teamSize: '',
    location: ''
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
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        founderName: '',
        email: '',
        phone: '',
        companyName: '',
        companyWebsite: '',
        stage: '',
        fundingRaised: '',
        sector: '',
        description: '',
        pitchDeck: '',
        teamSize: '',
        location: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div style={{
        padding: '3rem',
        background: 'linear-gradient(135deg, var(--periwinkle-light), var(--periwinkle))',
        borderRadius: '20px',
        textAlign: 'center',
        color: 'var(--white)',
        boxShadow: '0 10px 40px rgba(138, 141, 203, 0.2)'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '600' }}>Thank you for your submission!</h3>
        <p style={{ fontSize: '1.125rem', opacity: '0.95' }}>We'll review your application and get back to you within 5-7 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '3rem',
      background: 'var(--white)',
      borderRadius: '20px',
      border: '2px solid var(--off-white)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--aurora-purple)', textAlign: 'center', fontWeight: '700' }}>
        Founder Application
      </h3>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
          <User size={18} style={{ color: 'var(--periwinkle)' }} />
          Founder Name *
        </label>
        <input
          type="text"
          name="founderName"
          value={formData.founderName}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.875rem',
            border: '2px solid var(--off-white)',
            borderRadius: '12px',
            fontSize: '1rem',
            fontFamily: 'inherit',
            transition: 'border-color 0.3s ease',
            outline: 'none'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--periwinkle)'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'var(--off-white)'}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
            <Mail size={18} style={{ color: 'var(--periwinkle)' }} />
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
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
            <Phone size={18} style={{ color: 'var(--periwinkle)' }} />
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
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
          <Building2 size={18} style={{ color: 'var(--periwinkle)' }} />
          Company Name *
        </label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.875rem',
            border: '2px solid var(--off-white)',
            borderRadius: '12px',
            fontSize: '1rem',
            fontFamily: 'inherit',
            transition: 'border-color 0.3s ease',
            outline: 'none'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--periwinkle)'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'var(--off-white)'}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
            <Globe size={18} style={{ color: 'var(--periwinkle)' }} />
            Company Website
          </label>
          <input
            type="url"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleChange}
            placeholder="https://"
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
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
            <MapPin size={18} style={{ color: 'var(--periwinkle)' }} />
            Location *
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="City, Country"
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
            <TrendingUp size={18} style={{ color: 'var(--periwinkle)' }} />
            Stage *
          </label>
          <select
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.875rem',
              border: '2px solid var(--off-white)',
              borderRadius: '12px',
              fontSize: '1rem',
              background: 'var(--white)',
              fontFamily: 'inherit',
              transition: 'border-color 0.3s ease',
              outline: 'none'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = 'var(--periwinkle)'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'var(--off-white)'}
          >
            <option value="">Select stage</option>
            <option value="pre-seed">Pre-Seed</option>
            <option value="seed">Seed</option>
            <option value="series-a">Series A</option>
            <option value="series-b">Series B</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
            <Users size={18} style={{ color: 'var(--periwinkle)' }} />
            Team Size *
          </label>
          <input
            type="number"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            required
            min="1"
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
            <Target size={18} style={{ color: 'var(--periwinkle)' }} />
            Sector *
          </label>
          <select
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.875rem',
              border: '2px solid var(--off-white)',
              borderRadius: '12px',
              fontSize: '1rem',
              background: 'var(--white)',
              fontFamily: 'inherit',
              transition: 'border-color 0.3s ease',
              outline: 'none'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = 'var(--periwinkle)'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'var(--off-white)'}
          >
            <option value="">Select sector</option>
            <option value="biotech">BioTech</option>
            <option value="functional-nutrition">Functional Nutrition</option>
            <option value="healthtech">HealthTech</option>
            <option value="medtech">MedTech</option>
            <option value="infrastructure">Infrastructure of Vitality</option>
            <option value="corporate-wellness">Corporate Wellness</option>
            <option value="media">Media & Communications</option>
            <option value="real-estate">Wellness Real-Estate</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
            <DollarSign size={18} style={{ color: 'var(--periwinkle)' }} />
            Funding Raised
          </label>
          <input
            type="text"
            name="fundingRaised"
            value={formData.fundingRaised}
            onChange={handleChange}
            placeholder="e.g., $500K"
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
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
          <FileText size={18} style={{ color: 'var(--periwinkle)' }} />
          Company Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your company, your mission, and how you align with VitalTechAI (E-VTA)™..."
          style={{
            width: '100%',
            padding: '0.875rem',
            border: '2px solid var(--off-white)',
            borderRadius: '12px',
            fontSize: '1rem',
            fontFamily: 'inherit',
            resize: 'vertical',
            transition: 'border-color 0.3s ease',
            outline: 'none'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--periwinkle)'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'var(--off-white)'}
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--charcoal)', fontSize: '1rem' }}>
          <FileText size={18} style={{ color: 'var(--periwinkle)' }} />
          Pitch Deck URL
        </label>
        <input
          type="url"
          name="pitchDeck"
          value={formData.pitchDeck}
          onChange={handleChange}
          placeholder="https://... (Google Drive, Dropbox, etc.)"
          style={{
            width: '100%',
            padding: '0.875rem',
            border: '2px solid var(--off-white)',
            borderRadius: '12px',
            fontSize: '1rem',
            fontFamily: 'inherit',
            transition: 'border-color 0.3s ease',
            outline: 'none'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--periwinkle)'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'var(--off-white)'}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{
          width: '100%',
          padding: '1rem',
          fontSize: '1.1rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}
      >
        <Send size={20} />
        Submit Application
      </button>
    </form>
  );
}
