'use client';

import Link from 'next/link';
import { Lightbulb, Target, Users, Globe, Sparkles, TrendingUp, Heart, Dna, Activity, Stethoscope, Brain, Cpu } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Hero Quote Section */}
      <section className="hero-quote">
        <div className="hero-quote-content">
          <h1>&ldquo;The Next Frontier in Tech Isn&rsquo;t Just Smart&hellip; It&rsquo;s Personal, Accessible, And Deeply Impactful to Humans Where They Live, Work, And Play&rdquo;</h1>
          <Link href="#about-content" className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn More</Link>
        </div>
      </section>

      {/* Main About Content */}
      <section id="about-content" className="section-white">
        <div className="container">
          <div className="section-header">
            <h2>Illuminating the Future</h2>
            <h3>Building the Next Tech Frontier</h3>
            <p>Creating Human-Centered AI Companies, Powered by Elphina&rsquo;s Pillars of Expertise</p>
          </div>

          {/* About Hero Image */}
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80"
              alt="Elderly person staying active - longevity and wellness"
            />
          </div>

          <div className="highlight-box">
            <h3>Empowering Human Health Where People Live, Work, and Play</h3>
            <p>We&rsquo;re not building AI that displaces people; we&rsquo;re creating AI that restores people—their health, clarity, energy, performance, and longevity. We build tomorrow&rsquo;s human-centered infrastructure of vitality.</p>
          </div>

          <div className="content-text">
            <p>Elphina Venture Studio is a <strong>company creation engine</strong> designed to advance the future of human-centered health by building companies at the intersection of AI, biotech, digital therapeutics, environment, functional nutrition, longevity science and the infrastructure to support vitality.</p>

            <p>While others may aim to reinforce vertical strength, <strong>Elphina builds for personal strength</strong> &mdash; helping individuals live longer, healthier, and more empowered lives supported by an infrastructure of vitality.</p>

            <p>We call our thesis <strong>&ldquo;VitalTechAI (E-VTA)<span className="tm">&trade;</span>&rdquo;</strong>: Intelligent systems that strengthen the human experience holistically. Elphina is purpose-built to create the technologies that will redefine healthcare, wellbeing, aging, workplaces, habitat, and performance through smart, adaptive, and deeply personalized platforms &mdash; transforming global health and wellness into ambient, accessible, and deeply personal experiences.</p>
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="impact-banner">
        <div className="container">
          <h2>IMPACT ISN&rsquo;T A TREND</h2>
          <h3>IT&rsquo;S THE INFRASTRUCTURE OF THE NEXT ECONOMY</h3>
        </div>
      </section>

      {/* Movement Section */}
      <section className="section-white">
        <div className="container">
          <div className="section-header">
            <h2>More Than a Studio<br />It&rsquo;s a Movement</h2>
          </div>

          <div className="content-text">
            <p>In today&rsquo;s economy, <strong>energy is the currency of productivity</strong> and Elphina builds the systems that generate it sustainably. Born from a belief that the most meaningful tech of our time should serve human vitality, we create AI that restores people—their health, clarity, energy, performance, and longevity. We build tomorrow&rsquo;s human-centered infrastructure of vitality.</p>
          </div>

          <div className="section-header" style={{ marginTop: '3rem' }}>
            <h3>We build a living ecosystem of:</h3>
          </div>

          <div className="ecosystem-grid">
            <div className="ecosystem-card">
              <Lightbulb size={44} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.25rem' }} />
              <h4>Founders</h4>
              <p>Creating bioadaptive, intelligent platforms</p>
            </div>
            <div className="ecosystem-card">
              <Target size={44} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.25rem' }} />
              <h4>LPs</h4>
              <p>Who care about legacy, wellbeing, and future-proofing civilization</p>
            </div>
            <div className="ecosystem-card">
              <Users size={44} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.25rem' }} />
              <h4>Experts</h4>
              <p>In AI, nutrition, biotech, and healing systems</p>
            </div>
            <div className="ecosystem-card">
              <Globe size={44} strokeWidth={1.5} style={{ color: 'var(--periwinkle)', marginBottom: '1.25rem' }} />
              <h4>Global Network</h4>
              <p>People who see health, longevity, &amp; wellness as innovation&rsquo;s highest calling</p>
            </div>
          </div>

          <div className="content-text" style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.2rem' }}>
            <p><strong>Together, we don&rsquo;t just envision the future; we build it—creating impactful, personal, accessible, and attainable health and wellness solutions.</strong></p>
          </div>
        </div>
      </section>

      {/* VitalTechAI Details */}
      <section className="section-off-white">
        <div className="container">
          <div className="content-text">
            <p>Elphina builds for a different kind of outcome: <strong>intelligent, regenerative, and deeply human.</strong> Our studio creates the next wave of VitalTechAI (E-VTA)<span className="tm">&trade;</span> platforms &mdash; scientifically rigorous companies that weave human-centered AI and bio-intelligence into every facet of daily life.</p>

            <p>From homes to workplaces to healing environments, our companies enable <strong>true prevention, proactive care, precision treatment, and performance optimization</strong> &mdash; not just better metrics, but a redefinition of what health and wellness can be.</p>

            <p>We reduce friction, restore agency, and unlock new health data channels through elegant design, ambient intelligence, and scalable engagement.</p>
          </div>

          <div className="highlight-box">
            <h3>These are not companies with impact as a footnote</h3>
            <p>They are VitalTechAI (E-VTA)<span className="tm">&trade;</span> platforms building AI-powered, bio-intelligent systems from day one</p>
          </div>
        </div>
      </section>

    </>
  );
}
