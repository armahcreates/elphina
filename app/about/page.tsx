import Link from 'next/link';

export const metadata = {
  title: 'About | Elphina Humanity Centric Fund',
  description: 'Lighting the Path to the Next Tech Frontier. Backing Human-Centered AI, Underpinned by Elphina\'s Pillars of Expertise.',
};

export default function About() {
  return (
    <>
      {/* Hero Quote Section */}
      <section className="hero-quote aurora-bg">
        <div className="hero-quote-content">
          <h1>&ldquo;Next Frontier in Tech Isn&rsquo;t Just Smart&hellip; It&rsquo;s Personal, Accessible, And Deeply Impactful to Humans Where They Live, Work, And Play&rdquo;.</h1>
          <Link href="#about-content" className="btn">READ MORE</Link>
        </div>
      </section>

      {/* Main About Content */}
      <section id="about-content" className="section-white">
        <div className="container">
          <div className="section-header">
            <h2>HCF Illuminating the Future</h2>
            <h3>Lighting the Path to the Next Tech Frontier</h3>
            <p>Backing Human-Centered AI, Underpinned by Elphina&rsquo;s Pillars of Expertise.</p>
          </div>

          <div className="highlight-box">
            <h3>Empowering Human Health Where People Live, Work, and Play</h3>
            <p>We&rsquo;re not investing in AI that displaces people; we&rsquo;re backing AI that restores people...their health, clarity, energy, performance, and aging, backing the builders of tomorrow&rsquo;s human centered infrastructure of vitality.</p>
          </div>

          <div className="content-text">
            <p>Elphina&rsquo;s-Humanity-Centric Fund (HCF) I is an inaugural <strong>$100M venture vehicle</strong> designed to advance the future of human-centered health by investing in seed-stage companies at the intersection of AI, biotech, digital therapeutics, environment, functional nutrition, longevity science and the infrastructure to support vitality.</p>

            <p>While other funds may aim to reinforce vertical strength, <strong>Elphina invests in personal strength</strong> &mdash; helping individuals live longer, healthier, and more empowered lives supported by an infrastructure of vitality.</p>

            <p>We call our investment thesis <strong>&ldquo;VitalTechAI (E-VTA)<span className="tm">&trade;</span>&rdquo;</strong>: Intelligent systems that strengthen the human experience holistically. Elphina is purpose-built to fund the technologies that will redefine healthcare, wellbeing, aging, workplaces, habitat, and performance through smart, adaptive, and deeply personalized platforms &mdash; transforming global health and wellness into an ambient, accessible, and deeply personal experiences.</p>
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
      <section className="section-off-white">
        <div className="container">
          <div className="section-header">
            <h2>Elphina HCF is More Than a Fund<br />It&rsquo;s a Movement.</h2>
          </div>

          <div className="content-text">
            <p>In today&rsquo;s economy, <strong>energy is the currency of productivity</strong> and Elphina HCF funds the systems that generates it sustainably. Born from a belief that the most meaningful tech of our time should serve human vitality, HCF is not investing in AI that displaces people; we&rsquo;re backing AI that restores people...their health, clarity, energy, performance, and aging, backing the builders of tomorrow&rsquo;s human centered infrastructure of vitality.</p>
          </div>

          <div className="section-header" style={{ marginTop: '3rem' }}>
            <h3>HCF is funding a living ecosystem of:</h3>
          </div>

          <div className="ecosystem-grid">
            <div className="ecosystem-card">
              <h4>Founders</h4>
              <p>Creating bioadaptive, intelligent platforms</p>
            </div>
            <div className="ecosystem-card">
              <h4>LPs</h4>
              <p>Who care about legacy, wellbeing, and future-proofing civilization</p>
            </div>
            <div className="ecosystem-card">
              <h4>Experts</h4>
              <p>In AI, nutrition, biotech, and healing systems</p>
            </div>
            <div className="ecosystem-card">
              <h4>Global Network</h4>
              <p>People who see health, longevity, &amp; wellness as innovation&rsquo;s highest calling</p>
            </div>
          </div>

          <div className="content-text" style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.2rem' }}>
            <p><strong>Together, we don&rsquo;t just invest in the future; we raise capital to light the path to impactful, personal, accessible, and attainable health and wellness.</strong></p>
          </div>
        </div>
      </section>

      {/* VitalTechAI Details */}
      <section className="section-white">
        <div className="container">
          <div className="content-text">
            <p>HCF raises impact capital for a different kind of outcome: <strong>intelligent, regenerative, and deeply human.</strong> Elphina&rsquo;s HCF backs the next wave of VitalTechAI (E-VTA)<span className="tm">&trade;</span> platforms &mdash; scientifically rigorous startups that weave human-centered AI and bio-intelligence into every facet of daily life.</p>

            <p>From homes to workplaces to healing environments, our portfolio enables <strong>true prevention, proactive care, precision treatment, and performance optimization</strong> &mdash; not just better metrics, but a redefinition of what health and wellness can be.</p>

            <p>These entrepreneurs reduce friction, restore agency, and unlock new health data channels through elegant sleek design, ambient intelligence, and scalable engagement.</p>
          </div>

          <div className="highlight-box">
            <h3>These are not startups with impact as a footnote</h3>
            <p>They are VitalTechAI (E-VTA)<span className="tm">&trade;</span> companies building AI-powered, bio-intelligent systems</p>
          </div>
        </div>
      </section>

      {/* Pillars of Expertise */}
      <section className="section-off-white">
        <div className="container">
          <div className="section-header">
            <h2>Elphina Pillars of Expertise</h2>
            <p>Elphina is more than a source of capital; We&rsquo;re a human-centered venture engine built for long-term value creation and global impact.</p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <h4>Operating Infrastructure</h4>
              <p>We provide the necessary infrastructure, knowledge capital, and growth strategy to our portfolio.</p>
              <p>Our expert ecosystem unites seasoned business executives and operators from:</p>
              <ul>
                <li>BioTech</li>
                <li>HealthTech</li>
                <li>MedTech</li>
                <li>Diagnostics</li>
                <li>Genomics</li>
                <li>Therapeutics</li>
                <li>AI &amp; Neuroscience</li>
              </ul>
            </div>

            <div className="pillar-card">
              <h4>Elite Partnerships</h4>
              <p>Drawn from leading tech and consulting firms:</p>
              <ul>
                <li>Google</li>
                <li>Microsoft</li>
                <li>Amazon</li>
                <li>Booz Allen</li>
                <li>HP</li>
                <li>CSC</li>
                <li>Leading clinical systems</li>
              </ul>
            </div>

            <div className="pillar-card">
              <h4>Scientific &amp; Cultural Expertise</h4>
              <p>We partner with behavioral scientists, longevity researchers, and wellness thought leaders to co-create trust, drive adoption, and tailor solutions to every community and environment.</p>
              <p style={{ marginTop: '1.5rem' }}>The portfolio gains access to a network that supports breakthroughs that drive VitalTechAI (E-VTA)<span className="tm">&trade;</span> into the very fabric of daily life, delivering financial returns to investors and enduring impact for people, portfolios, and the planet.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
