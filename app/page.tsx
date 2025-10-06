'use client';

import Link from 'next/link';
import { useState } from 'react';
import FounderForm from '@/components/FounderForm';
import LPForm from '@/components/LPForm';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [showFounderForm, setShowFounderForm] = useState(false);
  const [showLPForm, setShowLPForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="hero aurora-bg">
        <div className="hero-content">
          <h1>&ldquo;The Next Frontier in Tech Isn&rsquo;t Just Smart&hellip; It&rsquo;s Personal, Accessible, And Deeply Impactful to Humans Where They Live, Work, And Play&rdquo;.</h1>
          <p className="hero-subtitle">&mdash; Dr Christine Perales, CEO GP Elphina Humanity Centric Fund</p>
          <h2>Backing impactful human-centered AI, infrastructure, and functional biotech &mdash; VitalTechAI (E-VTA)<span className="tm">&trade;</span><br />Elphina&rsquo;s $100M Fund empowering visionary founders building health and wellness infrastructure for the next generation.</h2>
          <div className="cta-buttons">
            <Link href="#thesis" className="btn btn-primary">Explore the Thesis</Link>
            <Link href="#contact" className="btn btn-secondary">Pitch Us Your Company</Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-white">
        <div className="container">
          <div className="mission-box">
            <h3>Mission: Intelligence Where Life Happens</h3>
            <p>To empower innovators building intelligent, human-centered technologies that embed health and wellness to where people live, work, and play.</p>
          </div>
          <div className="content-text">
            <p><strong>The next evolution in tech isn&rsquo;t about scale &mdash; it&rsquo;s about integration.</strong> Elphina HCF is at the forefront funding impact-driven companies focused on the spaces people already inhabit, and help them evolve into environments of healing, vitality, and high performance by embedding intelligence into:</p>
            <br />
            <ul style={{ listStyle: 'none', paddingLeft: 0, maxWidth: '900px', margin: '0 auto' }}>
              <li style={{ marginBottom: '1rem' }}>✦ <strong>Home environments</strong> via smart diagnostics, wearables, and bioadaptive tools</li>
              <li style={{ marginBottom: '1rem' }}>✦ <strong>Workplaces</strong> via corporate wellness ecosystems paradigm shift, mental health platforms, and productivity-enhancing AI</li>
              <li style={{ marginBottom: '1rem' }}>✦ <strong>Communities</strong> through accessible, scalable tools that decentralize care and elevate everyday health literacy</li>
            </ul>
            <br />
            <p style={{ textAlign: 'center', fontSize: '1.15rem' }}><strong>Providing more than a source of capital; but an operating ecosystem, designed for long-term partnership and growth across the portfolio.</strong></p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="thesis" className="section-off-white">
        <div className="container">
          <div className="section-header">
            <h2>Our Vision: The VitalTechAI (E-VTA)<span className="tm">&trade;</span> Paradigm Shift</h2>
            <p>The Future of Health &amp; Wellness in Motion</p>
          </div>
          <div className="content-text" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p>Elevating human interaction by backing impact technologies that make health and wellness accessible, attainable, personal, preventative, and empowering &mdash; everywhere people live, work, and play.</p>
            <br />
            <p><strong>We&rsquo;re not investing in AI that displaces people; we&rsquo;re backing AI that restores people</strong> &mdash; their health, clarity, energy, performance, and aging. Impact technology that is accessible and attainable, human-centered and infrastructure of vitality where:</p>
            <br />
            <ul style={{ listStyle: 'none', paddingLeft: 0, textAlign: 'center', fontSize: '1.15rem' }}>
              <li style={{ marginBottom: '0.8rem' }}>⚡ Performance is personalized</li>
              <li style={{ marginBottom: '0.8rem' }}>⚡ Work supports well-being</li>
              <li style={{ marginBottom: '0.8rem' }}>⚡ Nutrition adapts to the individual</li>
              <li style={{ marginBottom: '0.8rem' }}>⚡ HMI Technology enhances rather than overwhelms the human experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Movement Section */}
      <section className="section-white">
        <div className="container">
          <div className="section-header">
            <h2>Elphina-HCF is More Than a Fund... It&rsquo;s a Movement.</h2>
          </div>
          <div className="content-text" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <p>Born from a belief that the most meaningful tech of our time should serve human vitality, Elphina backs the builders of tomorrow&rsquo;s health infrastructure.</p>
            <br />
            <p>We are a living ecosystem &mdash; not just for financial capital, but for deep partnership with operators, scientists, and visionaries who replace VC ego with empathy, clarity, and precision:</p>
          </div>
          <div className="three-col-grid" style={{ maxWidth: '1200px', margin: '2rem auto' }}>
            <div className="card">
              <h3>Founders</h3>
              <p>Creating bioadaptive, intelligent platforms</p>
            </div>
            <div className="card">
              <h3>LPs</h3>
              <p>Who care about legacy, wellbeing, and future-proofing civilization</p>
            </div>
            <div className="card">
              <h3>Experts</h3>
              <p>In AI, nutrition, biotech, and healing systems</p>
            </div>
          </div>
          <div className="content-text" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p><strong>And a growing global network of people who see wellness as innovation&rsquo;s highest calling</strong></p>
          </div>
        </div>
      </section>

      {/* What We Fund Section */}
      <section id="focus" className="section-off-white">
        <div className="container">
          <div className="section-header">
            <h2>What We Fund</h2>
            <p>The Intersection of impactful Tech that empowers people, not just systems &mdash; we call it VitalTechAI (E-VTA)<span className="tm">&trade;</span></p>
          </div>
          <div className="investment-grid">
            <div className="investment-card">
              <h4>BioTech</h4>
              <p>Functional biology, agriculture, environment, genomic precision &amp; personalization</p>
            </div>
            <div className="investment-card">
              <h4>Functional Nutrition</h4>
              <p>Precision wellness powered by microbiome &amp; metabolism. Food as Medicine, Nutraceuticals, and Ancestral Healing</p>
            </div>
            <div className="investment-card">
              <h4>HealthTech</h4>
              <p>Personalized care tools and digital wellness platforms</p>
            </div>
            <div className="investment-card">
              <h4>MedTech</h4>
              <p>Smart diagnostics, wearables, and preventative monitoring</p>
            </div>
            <div className="investment-card">
              <h4>Infrastructure of Vitality</h4>
              <p>End-to-end ecosystem built to power deeply personal, regenerative health and wellness experiences</p>
            </div>
            <div className="investment-card">
              <h4>Corporate Wellness Infrastructure</h4>
              <p>Paradigm Shift where SMART automated workflows are personalized and AI tools improve safety, energy, cognition, and retention</p>
            </div>
            <div className="investment-card">
              <h4>Media &amp; Communications</h4>
              <p>Integral parts of personalization, addressing the human factor, health &amp; well-being</p>
            </div>
            <div className="investment-card">
              <h4>Wellness Real-Estate &amp; Resort Ecosystem</h4>
              <p>Canvas for regenerative, data-driven personalized health, wellness, and longevity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Elphina Section */}
      <section id="why" className="section-white">
        <div className="container">
          <div className="section-header">
            <h2>Why Elphina?</h2>
            <p>Founder-first. Human-first. Future-first.</p>
          </div>
          <div className="three-col-grid">
            <div className="card">
              <h3>Deep Expertise</h3>
              <p>Led by tech operators, clinicians, real estate experts, super-aging/longevity researchers, media, and AI pioneers.</p>
            </div>
            <div className="card">
              <h3>Real Support</h3>
              <p>From Seed to Series B, we activate growth through capital + tech + clinical + globalization + cultural resonance &rarr; accelerated strategy.</p>
            </div>
            <div className="card">
              <h3>Regenerative Vision</h3>
              <p>We&rsquo;re investing in systems that heal the whole &mdash; not just parts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VitalTechAI in Action Section */}
      <section id="portfolio" className="section-off-white">
        <div className="container">
          <div className="section-header">
            <h2>VitalTechAI (E-VTA)<span className="tm">&trade;</span> in Action</h2>
            <p>Backed by science. Powered by purpose. Built for daily life.</p>
          </div>
          <div className="content-text" style={{ maxWidth: '1100px', margin: '0 auto 3rem' }}>
            <p><strong>VitalTechAI (E-VTA)<span className="tm">&trade;</span> Paradigm Shift: Health &amp; Wellness in Motion</strong></p>
            <br />
            <p>We back technologies at the intersection of AI, biotech, digital infrastructure, and longevity science that make health and wellness truly accessible, attainable, personal, preventative, and empowering &mdash; wherever people live, work, play, connect, and retreat.</p>
            <br />
            <p>Our focus isn&rsquo;t on AI that displaces people, but on <strong>AI that restores human vitality</strong>: health, clarity, energy, performance, and graceful aging.</p>
          </div>

          <div className="vital-cards">
            <div className="vital-card">
              <h4>Infrastructure-as-Wellness</h4>
              <p>Infrastructure of Vitality from Smart building systems that adapt to occupant biometrics &mdash; optimizing not just comfort but health and well-being &mdash; to Corporate Wellness Infrastructure not just ergonomics, but technology-assisted productivity in the workplace through real-time human-machine interface that have employee health, safety and wellness as a KPI.</p>
            </div>
            <div className="vital-card">
              <h4>Super-Aging &amp; Resilience</h4>
              <p>Longevity, BioHacking &amp; Wellness platforms driving true &ldquo;super-aging&rdquo; through preventive health and resilience against the Silver Tsunami.</p>
            </div>
            <div className="vital-card">
              <h4>BioTech</h4>
              <p>BioTech innovations spanning Genomics, AgriTech, EnviroTech precision medicine and actionable personalized care.</p>
            </div>
            <div className="vital-card">
              <h4>Functional Nutrition: Food as Medicine &amp; Nutraceuticals</h4>
              <p>AI-driven, personalized nutrition ecosystems that tune metabolic performance &mdash; making science-backed &ldquo;food as medicine&rdquo; as well as nutraceutical accessible and actionable for all.</p>
            </div>
            <div className="vital-card">
              <h4>Embedded Monitoring &amp; Diagnostics</h4>
              <p>AI-powered sensors and analytics woven into living spaces and on the move &mdash; catching early warning signs and enabling proactive care right where life happens.</p>
            </div>
            <div className="vital-card">
              <h4>Mental Wellness &amp; Resilience Tech</h4>
              <p>Human-centered AI tools and digital therapeutics for pain relief, trauma recovery, and cognitive resilience &mdash; empowering emotional well-being wherever life happens.</p>
            </div>
            <div className="vital-card">
              <h4>Health &amp; Wellness Real Estate</h4>
              <p>Intelligent, biophilic environments embedded with wellness tech &mdash; creating built spaces that support holistic health and elevate daily living as well as recreational resorts.</p>
            </div>
            <div className="vital-card">
              <h4>Communication &amp; Media</h4>
              <p>Ambient AI-powered Communications &amp; Media experiences personalization including intelligent realities and gaming to increase engagement and self-care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container">
          {!showFounderForm && !showLPForm && !showContactForm ? (
            <div className="cta-grid">
              <div className="cta-box">
                <h3>For Founders</h3>
                <p>Are you building the future of vitality? If your startup is advancing one or more of these domains with measurable impact and a revenue model tied to better health and well-being, we want to hear from you.</p>
                <button className="btn btn-primary" onClick={() => setShowFounderForm(true)}>Apply for Funding</button>
              </div>
              <div className="cta-box">
                <h3>For LPs</h3>
                <p>Invest in the next wave of human-first wellness infrastructure.</p>
                <button className="btn btn-primary" onClick={() => setShowLPForm(true)}>Request the LP Deck</button>
              </div>
              <div className="cta-box">
                <h3>General Inquiry</h3>
                <p>Have questions or want to learn more about Elphina HCF?</p>
                <button className="btn btn-primary" onClick={() => setShowContactForm(true)}>Contact Us</button>
              </div>
            </div>
          ) : showFounderForm ? (
            <div>
              <button
                onClick={() => setShowFounderForm(false)}
                style={{
                  marginBottom: '2rem',
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                ← Back to Options
              </button>
              <FounderForm />
            </div>
          ) : showLPForm ? (
            <div>
              <button
                onClick={() => setShowLPForm(false)}
                style={{
                  marginBottom: '2rem',
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                ← Back to Options
              </button>
              <LPForm />
            </div>
          ) : (
            <div>
              <button
                onClick={() => setShowContactForm(false)}
                style={{
                  marginBottom: '2rem',
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                ← Back to Options
              </button>
              <ContactForm />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
