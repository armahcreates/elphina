'use client';

import Link from 'next/link';
import { TrendingUp, Users, Globe, Target, Lightbulb, Heart, Sparkles, DollarSign } from 'lucide-react';
import { useState } from 'react';
import LPForm from '@/components/LPForm';

export default function Fund() {
  const [showLPForm, setShowLPForm] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="hero aurora-bg">
        <div className="hero-content">
          <h1>Elphina Humanity-Centric Fund</h1>
          <p className="hero-subtitle">Investing in the Future of Human Vitality</p>
          <h2>Backing impactful human-centered AI, infrastructure, and functional biotech companies — VitalTechAI (E-VTA)<span className="tm">™</span></h2>
          <div className="cta-buttons">
            <Link href="#fund-thesis" className="btn btn-primary">Learn About Our Thesis</Link>
            <Link href="#contact" className="btn btn-secondary">Invest With Us</Link>
          </div>
        </div>
      </section>

      {/* Fund Thesis Section */}
      <section id="fund-thesis" className="section-white">
        <div className="container">
          <div className="section-header">
            <h2>Fund Thesis</h2>
            <p>Investing in the Infrastructure of Vitality</p>
          </div>

          {/* Fund Hero Image */}
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=1200&q=80"
              alt="Wellness and healthy lifestyle"
            />
          </div>

          <div className="highlight-box">
            <h3>Human-Centered AI That Restores, Not Replaces</h3>
            <p>We invest in technologies that restore human vitality—health, clarity, energy, performance, and longevity. Our focus is on the infrastructure that makes wellness accessible, attainable, and deeply personal.</p>
          </div>

          <div className="content-text">
            <p>The Elphina Humanity-Centric Fund backs early-stage companies at the intersection of AI, biotech, digital therapeutics, functional nutrition, and longevity science.</p>

            <p>We invest in companies building <strong>VitalTechAI (E-VTA)<span className="tm">&trade;</span></strong>: Intelligent systems that strengthen the human experience holistically—transforming global health and wellness into ambient, accessible, and deeply personal experiences.</p>

            <p>Our portfolio companies are redefining healthcare, wellbeing, aging, workplaces, habitat, and performance through smart, adaptive, and deeply personalized platforms.</p>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="section-off-white">
        <div className="container">
          <div className="section-header">
            <h2>Investment Focus</h2>
            <p>Where We Invest</p>
          </div>

          <div className="three-col-grid">
            <div className="card">
              <Heart size={48} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.5rem' }} />
              <h3>Seed to Series A</h3>
              <p>We back early-stage companies with proven traction and scalable technology</p>
            </div>
            <div className="card">
              <Target size={48} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.5rem' }} />
              <h3>VitalTechAI Focus</h3>
              <p>Companies building human-centered AI and bio-intelligent platforms</p>
            </div>
            <div className="card">
              <Globe size={48} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.5rem' }} />
              <h3>Global Impact</h3>
              <p>Technologies that can scale globally and transform health outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest With Elphina */}
      <section className="section-white">
        <div className="container">
          <div className="section-header">
            <h2>Why Invest With Elphina</h2>
            <p>Strategic Value Beyond Capital</p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <Sparkles size={44} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.25rem' }} />
              <h4>Deep Expertise</h4>
              <p>Our team brings decades of experience across:</p>
              <ul>
                <li>Biotech & Healthtech</li>
                <li>AI & Machine Learning</li>
                <li>Clinical Systems & Therapeutics</li>
                <li>Corporate Strategy & Scaling</li>
                <li>Real Estate & Wellness Infrastructure</li>
              </ul>
            </div>

            <div className="pillar-card">
              <Users size={44} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.25rem' }} />
              <h4>Extensive Network</h4>
              <p>Portfolio companies gain access to:</p>
              <ul>
                <li>Elite partnerships with leading tech firms</li>
                <li>Clinical and research institutions</li>
                <li>Corporate wellness buyers</li>
                <li>Strategic distribution channels</li>
                <li>Follow-on capital providers</li>
              </ul>
            </div>

            <div className="pillar-card">
              <TrendingUp size={44} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.25rem' }} />
              <h4>Active Support</h4>
              <p>We provide hands-on support through:</p>
              <ul>
                <li>Go-to-market strategy</li>
                <li>Product development guidance</li>
                <li>Clinical validation partnerships</li>
                <li>Regulatory navigation</li>
                <li>Subsequent funding rounds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Philosophy */}
      <section className="section-off-white">
        <div className="container">
          <div className="section-header">
            <h2>Our Portfolio Philosophy</h2>
          </div>

          <div className="content-text">
            <p>We invest in companies that are:</p>
            <br />
            <ul style={{ listStyle: 'none', paddingLeft: 0, textAlign: 'center', fontSize: '1.15rem' }}>
              <li style={{ marginBottom: '0.8rem' }}>⚡ <strong>Scientifically rigorous</strong> with validated technology</li>
              <li style={{ marginBottom: '0.8rem' }}>⚡ <strong>Human-centered</strong> in design and execution</li>
              <li style={{ marginBottom: '0.8rem' }}>⚡ <strong>Scalable</strong> across markets and demographics</li>
              <li style={{ marginBottom: '0.8rem' }}>⚡ <strong>Impact-driven</strong> with measurable health outcomes</li>
              <li style={{ marginBottom: '0.8rem' }}>⚡ <strong>Revenue-generating</strong> with sustainable business models</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container">
          {!showLPForm ? (
            <div className="cta-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
              <div className="cta-box">
                <DollarSign size={56} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.5rem' }} />
                <h3>Invest in the Future of Health</h3>
                <p>Join us in backing the next generation of human-centered health and wellness infrastructure. Partner with companies building tomorrow's vitality ecosystem.</p>
                <button className="btn btn-primary" onClick={() => setShowLPForm(true)}>Request Fund Information</button>
              </div>
            </div>
          ) : (
            <div>
              <button
                onClick={() => setShowLPForm(false)}
                style={{
                  marginBottom: '2rem',
                  padding: '0.75rem 1.5rem',
                  background: 'var(--white)',
                  border: '2px solid var(--periwinkle)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--periwinkle)',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--periwinkle)';
                  e.currentTarget.style.color = 'var(--white)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'var(--white)';
                  e.currentTarget.style.color = 'var(--periwinkle)';
                }}
              >
                ← Back
              </button>
              <LPForm />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
