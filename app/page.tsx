'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Home as HomeIcon, Briefcase, Users, Dna, Apple, Heart, Activity, Building2, Radio, Palmtree, Lightbulb, Target, Sparkles, ArrowRight } from 'lucide-react';
import FounderForm from '@/components/FounderForm';
import LPForm from '@/components/LPForm';

export default function Home() {
  const [showFounderForm, setShowFounderForm] = useState(false);
  const [showLPForm, setShowLPForm] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="hero aurora-bg">
        <div className="hero-content">
          <h1>Building the Future of Health—Where We Live, Work, and Play</h1>
          <p className="hero-subtitle">Elphina Venture Studio</p>
          <h2>Creating and scaling impactful human-centered AI, infrastructure, and functional biotech companies — VitalTechAI (E-VTA)<span className="tm">™</span></h2>
          <div className="cta-buttons">
            <Link href="#thesis" className="btn btn-primary">Explore Our Approach</Link>
            <Link href="#contact" className="btn btn-secondary">Partner With Us</Link>
          </div>
        </div>
      </section>

      {/* Thesis Section */}
      <section id="thesis" className="section-white">
        <div className="container">
          <div className="thesis-grid">
            <div className="thesis-content">
              <h3>The VitalTechAI (E-VTA)™ Paradigm</h3>
              <p><strong>The next evolution in tech isn't about scale—it's about integration.</strong></p>
              <p>Elphina Venture Studio builds and launches impact-driven companies focused on the spaces people already inhabit, helping them evolve into environments of healing, vitality, and high performance.</p>
              <p>We embed intelligence into:</p>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>• <strong>Home environments</strong> via smart diagnostics and bioadaptive tools</li>
                <li style={{ marginBottom: '0.75rem' }}>• <strong>Workplaces</strong> via corporate wellness ecosystems and productivity-enhancing AI</li>
                <li style={{ marginBottom: '0.75rem' }}>• <strong>Communities</strong> through accessible, scalable tools that decentralize care</li>
              </ul>
            </div>
            <div className="thesis-visual">
              <h4>The Paradigm Shift</h4>
              <div className="paradigm-shift">
                <div>Sickcare</div>
                <span>→</span>
                <div>Selfcare</div>
              </div>
              <p style={{ marginTop: '2rem', fontSize: '1.125rem', opacity: '0.9' }}>From reactive healthcare to proactive, personalized wellness embedded in daily life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-off-white">
        <div className="container">
          <div className="mission-box">
            <h3>Mission: Intelligence Where Life Happens</h3>
            <p>To empower innovators building intelligent, human-centered technologies that embed health and wellness to where people live, work, and play.</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-white">
        <div className="container">
          <div className="section-header">
            <h2>Our Vision: The VitalTechAI (E-VTA)<span className="tm">&trade;</span> Paradigm Shift</h2>
            <p>The Future of Health &amp; Wellness in Motion</p>
          </div>

          {/* Vision Image */}
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80"
              alt="DNA and biotech innovation"
            />
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

      {/* Studio Approach Section */}
      <section className="section-white">
        <div className="container">
          <div className="section-header">
            <h2>A Venture Studio Built for Impact</h2>
          </div>
          <div className="content-text" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <p>Born from a belief that the most meaningful tech of our time should serve human vitality, Elphina builds and scales the companies creating tomorrow&rsquo;s health infrastructure.</p>
            <br />
            <p>We are a living ecosystem &mdash; bringing together operators, scientists, and visionaries who build with empathy, clarity, and precision:</p>
          </div>
          <div className="three-col-grid" style={{ maxWidth: '1200px', margin: '2rem auto' }}>
            <div className="card">
              <Lightbulb size={48} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.5rem' }} />
              <h3>Builders</h3>
              <p>Creating bioadaptive, intelligent platforms from the ground up</p>
            </div>
            <div className="card">
              <Target size={48} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.5rem' }} />
              <h3>Partners</h3>
              <p>Who care about legacy, wellbeing, and future-proofing civilization</p>
            </div>
            <div className="card">
              <Users size={48} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.5rem' }} />
              <h3>Experts</h3>
              <p>In AI, nutrition, biotech, and healing systems</p>
            </div>
          </div>
          <div className="content-text" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p><strong>And a growing global network of people who see wellness as innovation&rsquo;s highest calling</strong></p>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="focus" className="section-white">
        <div className="container">
          <div className="section-header">
            <h2>What We Build</h2>
            <p>The Intersection of impactful Tech that empowers people, not just systems &mdash; we call it VitalTechAI (E-VTA)<span className="tm">&trade;</span></p>
          </div>

          {/* Focus Area Images */}
          <div className="image-grid-3">
            <div>
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80"
                alt="Longevity and wellness research"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1582719366862-a8d74a0e2b31?w=600&q=80"
                alt="Biotech lab and research"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80"
                alt="Wellness and meditation"
              />
            </div>
          </div>

          <div className="investment-grid">
            <div className="investment-card">
              <Dna size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>BioTech</h4>
              <p>Functional biology, agriculture, environment, genomic precision &amp; personalization</p>
            </div>
            <div className="investment-card">
              <Apple size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>Functional Nutrition</h4>
              <p>Precision wellness powered by microbiome &amp; metabolism. Food as Medicine, Nutraceuticals, and Ancestral Healing</p>
            </div>
            <div className="investment-card">
              <Heart size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>HealthTech</h4>
              <p>Personalized care tools and digital wellness platforms</p>
            </div>
            <div className="investment-card">
              <Activity size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>MedTech</h4>
              <p>Smart diagnostics, wearables, and preventative monitoring</p>
            </div>
            <div className="investment-card">
              <Building2 size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>Infrastructure of Vitality</h4>
              <p>End-to-end ecosystem built to power deeply personal, regenerative health and wellness experiences</p>
            </div>
            <div className="investment-card">
              <Briefcase size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>Corporate Wellness Infrastructure</h4>
              <p>Paradigm Shift where SMART automated workflows are personalized and AI tools improve safety, energy, cognition, and retention</p>
            </div>
            <div className="investment-card">
              <Radio size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>Media &amp; Communications</h4>
              <p>Integral parts of personalization, addressing the human factor, health &amp; well-being</p>
            </div>
            <div className="investment-card">
              <Palmtree size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>Wellness Real-Estate &amp; Resort Ecosystem</h4>
              <p>Canvas for regenerative, data-driven personalized health, wellness, and longevity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Elphina Section */}
      <section id="why" className="section-periwinkle-light">
        <div className="container">
          <div className="section-header">
            <h2>Why Elphina?</h2>
            <p>Founder-first. Human-first. Future-first.</p>
          </div>
          <div className="three-col-grid">
            <div className="card">
              <Sparkles size={48} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.5rem' }} />
              <h3>Deep Expertise</h3>
              <p>Led by tech operators, clinicians, real estate experts, super-aging/longevity researchers, media, and AI pioneers.</p>
            </div>
            <div className="card">
              <ArrowRight size={48} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.5rem' }} />
              <h3>Real Support</h3>
              <p>From Seed to Series B, we activate growth through capital + tech + clinical + globalization + cultural resonance &rarr; accelerated strategy.</p>
            </div>
            <div className="card">
              <Heart size={48} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.5rem' }} />
              <h3>Regenerative Vision</h3>
              <p>We&rsquo;re investing in systems that heal the whole &mdash; not just parts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VitalTechAI in Action Section */}
      <section id="portfolio" className="section-white">
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
            <div className="vital-card" style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <Building2 size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>Infrastructure-as-Wellness</h4>
              <p>Smart building systems that adapt to occupant biometrics—optimizing not just comfort but health and well-being. Corporate Wellness Infrastructure with technology-assisted productivity through real-time human-machine interfaces prioritizing employee health, safety, and wellness.</p>
            </div>
            <div className="vital-card" style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <Apple size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>Functional Nutrition & BioTech</h4>
              <p>AI-driven, personalized nutrition ecosystems that tune metabolic performance. BioTech innovations spanning Genomics, AgriTech, and precision medicine making "food as medicine" accessible and actionable for all.</p>
            </div>
            <div className="vital-card" style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <Activity size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>Embedded Monitoring & Diagnostics</h4>
              <p>AI-powered sensors and analytics woven into living spaces and on the move—catching early warning signs and enabling proactive care right where life happens, from home to workplace.</p>
            </div>
            <div className="vital-card" style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <HomeIcon size={40} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1rem' }} />
              <h4>Wellness Environments & Media</h4>
              <p>Intelligent, biophilic environments embedded with wellness tech. Ambient AI-powered communications and media experiences creating personalized engagement platforms for self-care and holistic health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container">
          {!showFounderForm && !showLPForm ? (
            <div className="cta-grid">
              <div className="cta-box">
                <h3>For Entrepreneurs & Builders</h3>
                <p>Have an idea that could transform health and wellness? We provide the resources, expertise, and infrastructure to turn your vision into a thriving company.</p>
                <button className="btn btn-primary" onClick={() => setShowFounderForm(true)}>Partner With Us</button>
              </div>
              <div className="cta-box">
                <h3>For Investors</h3>
                <p>Join us in building the next wave of human-first wellness infrastructure. Partner with our studio and portfolio companies.</p>
                <button className="btn btn-primary" onClick={() => setShowLPForm(true)}>Learn More</button>
              </div>
            </div>
          ) : showFounderForm ? (
            <div>
              <button
                onClick={() => setShowFounderForm(false)}
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
                ← Back to Options
              </button>
              <LPForm />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
