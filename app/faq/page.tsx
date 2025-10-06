'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "About Elphina HCF",
      questions: [
        {
          q: "What is Elphina Humanity-Centric Fund (HCF)?",
          a: "Elphina's Humanity-Centric Fund I is an inaugural $100M venture vehicle designed to advance the future of human-centered health by investing in seed-stage companies at the intersection of AI, biotech, digital therapeutics, environment, functional nutrition, and longevity science. While other funds reinforce vertical strength, Elphina invests in personal strength — helping individuals live longer, healthier, and more empowered lives supported by an infrastructure of vitality."
        },
        {
          q: "What is VitalTechAI (E-VTA)™?",
          a: "VitalTechAI (E-VTA)™ is our investment thesis: Intelligent systems that strengthen the human experience holistically. It represents AI-powered, bio-intelligent platforms that embed into the rhythms of modern life — making health and wellness truly accessible, attainable, personal, preventative, and empowering wherever people live, work, play, connect, and retreat. We're not investing in AI that displaces people; we're backing AI that restores people — their health, clarity, energy, performance, and graceful aging."
        },
        {
          q: "What is Elphina's core mission?",
          a: "Our mission is 'Intelligence Where Life Happens' — to empower innovators building intelligent, human-centered technologies that embed health and wellness to where people live, work, and play. The next evolution in tech isn't about scale; it's about integration. We focus on the spaces people already inhabit and help them evolve into environments of healing, vitality, and high performance."
        },
        {
          q: "How is Elphina different from traditional healthcare VCs?",
          a: "While most healthcare investment flows toward reactive systems, Elphina shifts the lens to proactive. We invest in the paradigm shift from sick care to self-care — from homes to health hubs, from workplaces to wellness ecosystems, from daily habits to regenerative pathways. Our portfolio companies reduce friction, restore agency, and unlock new health data channels through elegant design, ambient intelligence, and scalable engagement."
        }
      ]
    },
    {
      category: "Investment Focus",
      questions: [
        {
          q: "What stage companies does Elphina invest in?",
          a: "We invest in seed-stage companies, with support extending from Pre-Seed through Series B. We partner early and deeply with capital, strategy, network, community, and vision."
        },
        {
          q: "What sectors does Elphina invest in?",
          a: "Our VitalTechAI (E-VTA)™ portfolio spans multiple interconnected sectors: BioTech (genomics, precision medicine, functional biology), Functional Nutrition (food as medicine, nutraceuticals, microbiome), HealthTech (digital wellness platforms, AI coaching), MedTech (wearables, biosensors, diagnostics), Infrastructure of Vitality (end-to-end wellness ecosystems), Corporate Wellness Infrastructure, Media & Communications, and Wellness Real-Estate & Resort Ecosystems."
        },
        {
          q: "What types of technologies are you looking for?",
          a: "We back platforms that: Prevent before progressing, Diagnose with precision, Heal with personalization, Extend vitality (not just lifespan), Empower accessibility and attainability, Provide critical infrastructure, Promote healthy environments and habits, and Drive a paradigm shift in corporate wellness. We focus on ambient health monitoring, functional nutrition systems, AI-enhanced coaching, and platforms that integrate seamlessly into home and workplace routines."
        },
        {
          q: "Do you invest in AgriTech or EnviroTech?",
          a: "Yes, strategically. AgriTech and EnviroTech intersect with our thesis when they support functional nutrition, gut health, clean-label ingredient platforms, or climate-resilient wellness supply chains. Examples include bioremediation, carbon sequestration, bio-based materials, biopesticides, vertical farms, and regenerative agriculture that complements our VitalTechAI (E-VTA)™ focus."
        },
        {
          q: "What is your position on Corporate Wellness?",
          a: "Corporate wellness is not a perk — it's infrastructure. We're leading a new paradigm, funding platforms that transform corporate environments into engines of energy, longevity, and psychological safety. We support SMART automation, evidence-based human-centered workflows that align health with productivity, detect burnout before it happens, integrate functional nutrition and stress resilience, and include on-site Med Pods for timely access to care."
        }
      ]
    },
    {
      category: "The Elphina Advantage",
      questions: [
        {
          q: "What makes Elphina's network unique?",
          a: "We are more than a source of capital; we are an operating ecosystem designed for long-term partnership. Our ecosystem includes executives from Microsoft, Google, Amazon, HP, Booz Allen, CSC, top provider networks, media & entertainment, and next-gen biotech. We offer Fortune 500 transformation pedigree with board-level operators across HealthTech, BioTech, diagnostics, genomics, therapeutics, AI, and neuroscience."
        },
        {
          q: "What support does Elphina provide beyond capital?",
          a: "Portfolio companies gain access to: Operators & experts with deep domain expertise, Distribution gateways (employer benefits, payors, providers, channel partners), Cultural influence (wellness voices, educators, community builders), Scientific & strategic advisors in longevity and behavioral AI, Commercial advisors for B2B/D2C growth, our proprietary 'Rewiring the CEO' leadership program, Clinical/regulatory/security compliance support (HIPAA, GDPR, FDA), and Storytelling & trust-building expertise."
        },
        {
          q: "What is the 'Rewiring the CEO' program?",
          a: "Leadership in the AI era of impactful technology requires new skills and tactics. Our proprietary 'Rewiring the CEO' program is personalized to the individual CEO and tailored to the company's goals, preparing founders to steward accelerated growth with the right mindset, tools, and strategies for this paradigm shift."
        },
        {
          q: "How does Elphina help with go-to-market strategy?",
          a: "We provide sector-integrated support across regulatory navigation, commercialization, clinical validation, globalization, and fundraise readiness. Our platform activates strategic partnerships, distribution pathways, clinical networks, and media leverage to accelerate both traction and trust. We also offer real-time performance dashboards and SLAs to align incentives and monitor progress."
        }
      ]
    },
    {
      category: "Impact & ESG",
      questions: [
        {
          q: "How does Elphina approach impact investing?",
          a: "Elphina raises and deploys impact capital — investments intentionally designed to generate measurable, beneficial outcomes for society and the planet alongside financial returns. HCF I is focused on advancing ESG-aligned, purpose-built ventures that deliver health equity, human performance, and regenerative infrastructure across the environments people inhabit daily."
        },
        {
          q: "How does Elphina align with the UN Sustainable Development Goals (SDGs)?",
          a: "We are committed to the UN's 17 Sustainable Development Goals as a universal call to action. We support SDG-driven startups by: Catalyzing innovation in health, sustainability, and regenerative design, Bridging financial gaps for purpose-driven ventures, Scaling impact by expanding reach and influence, and Providing expertise and mentorship. We recognize that achieving SDGs requires five forms of capital: financial, human, social, produced, and natural."
        },
        {
          q: "What is Elphina's approach to health equity?",
          a: "We focus on behavioral engagement, health equity, and platforms that are scalable to globalize AI technology. Our portfolio makes functional wellness as accessible as broadband, decentralizes care, elevates everyday health literacy, and promotes economic development through microbusiness growth in developing economies."
        }
      ]
    },
    {
      category: "Infrastructure & Innovation",
      questions: [
        {
          q: "What is Infrastructure of Vitality?",
          a: "More than just hardware and software, it's an end-to-end ecosystem built to power deeply personal, regenerative health and wellness experiences in every moment of life. It includes: Secure interoperable data fabric, Ambient sensor networks, AI-driven personalization engines, Regenerative energy & materials, Smart nutritional supply chains, Workplace resilience SMART platforms, Neuro-wellness & diagnostics layers, Developer & partner ecosystems, Immersive media & communications, and Wellness real-estate & resort ecosystems."
        },
        {
          q: "How does Elphina view Media & Communications?",
          a: "Not just channels, but integral parts of personalized well-being. We back 5G/edge-enabled networks for real-time health streaming, AR/VR wellness experiences, telepresence & virtual community hubs, context-aware content delivery (stress-responsive soundscapes, nutrition prompts), and secure personal health broadcasting. Media becomes ambient, trust-driven, and adapts to biometric signals."
        },
        {
          q: "What is Wellness Real-Estate & Resort Ecosystem investing?",
          a: "Built environments that embed wellness tech, regenerative design, and data-driven experiences into homes, workplaces, and retreats. This includes: Biophilic master-planning with sensor networks, Smart guest rooms with adaptive systems, Integrated retreat platforms ('food as medicine' dispensers, AI studios), Data-driven membership models with wellness passports, and Net-zero energy systems with regenerative landscapes. Living and traveling become acts of self-care."
        },
        {
          q: "What's the difference between HealthTech and MedTech in Elphina's portfolio?",
          a: "HealthTech enhances delivery, accessibility, and personalization of care across digital platforms (AI coaching, virtual care, behavioral health apps, patient engagement). MedTech focuses on medical devices for diagnosis, monitoring, and treatment (wearables, biosensors, neurostimulation, smart medical devices). We prioritize non-invasive, passive MedTech designed for continuous use in daily environments — consumer-facing or hybrid-use that bridges clinical precision with ease of use."
        }
      ]
    },
    {
      category: "For Founders",
      questions: [
        {
          q: "What kind of founders is Elphina looking for?",
          a: "We seek bold founders building breakthrough technologies and critical infrastructure that don't just treat but engage, personalize, and impact. We're founder-first and human-first — built by operators who see the human first, whether it's the patient, practitioner, or person behind the product. We partner with visionaries who replace VC ego with empathy, clarity, and precision."
        },
        {
          q: "What should be included in a pitch to Elphina?",
          a: "Your startup should advance one or more of our focus domains with measurable impact and a revenue model tied to better health and well-being. Demonstrate how your technology: Embeds intelligence into daily life (home/work/community), Enables prevention or proactive care, Offers precision and personalization, Scales for global impact, Addresses health equity, and Aligns with our VitalTechAI (E-VTA)™ thesis of restoring human vitality."
        },
        {
          q: "Does Elphina lead rounds or co-invest?",
          a: "We partner early and deeply from Pre-Seed through Series B. We provide capital, strategy, network, community, and vision. Our involvement goes beyond traditional check-writing — we engage as board-level operators and provide hands-on support across regulatory, commercialization, clinical validation, globalization, and fundraise readiness."
        },
        {
          q: "What geographies does Elphina invest in?",
          a: "We have a global perspective with globalization experts in our network. Our focus is on platforms that can scale globally and address health equity worldwide. We support localization, cultural adoption, and economic development in developing economies while maintaining strong ties to innovation hubs."
        }
      ]
    },
    {
      category: "Understanding the Thesis",
      questions: [
        {
          q: "What does 'Where Life Happens, Health & Wellness Should Too' mean?",
          a: "Most health decisions happen outside of hospitals — while brushing your teeth, planning meals, managing stress, or sitting at your desk. We invest in startups that embed intelligence, care, and resilience into these moments. Health becomes infrastructure embedded where life happens: at home, at work, on the move."
        },
        {
          q: "What is Functional Nutrition and why does it matter to Elphina?",
          a: "Functional Nutrition (nutraceuticals, 'food as medicine') is a cornerstone of our BioTech thesis. It goes beyond diets — it leverages biological intelligence to guide gut microbiome support, epigenetic expression through food, metabolic performance, cognitive clarity via neuro-nutrition, and cellular optimization. We fund bio-individual platforms that merge nutritional science, diagnostics, and behavioral tech to activate health from the inside out."
        },
        {
          q: "How does Elphina define the shift from 'Sick Care to Self-Care'?",
          a: "We invest in the paradigm shift from Reactive (health as intervention) to Proactive (health as infrastructure). This means: Episodic sick care → Daily data-driven health activation, Generalized protocols → Precision personalized bio-individual tracking, Centralized treatment → Distributed accessible self-guided platforms, Transactional health data → Continuous consent-based lifestyle-integrated insights, Health as destination → Health embedded where life happens."
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-quote aurora-bg">
        <div className="hero-quote-content">
          <h1>Frequently Asked Questions</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Everything you need to know about Elphina Humanity-Centric Fund</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-white" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.75rem',
                color: 'var(--aurora-purple)',
                marginBottom: '2rem',
                borderBottom: '2px solid var(--periwinkle-light)',
                paddingBottom: '0.75rem',
                fontWeight: '700',
                letterSpacing: '-0.5px'
              }}>
                {category.category}
              </h2>

              {category.questions.map((faq, faqIndex) => {
                const globalIndex = categoryIndex * 100 + faqIndex;
                const isOpen = openIndex === globalIndex;

                return (
                  <div
                    key={faqIndex}
                    style={{
                      marginBottom: '1rem',
                      border: '2px solid var(--off-white)',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        background: isOpen ? 'var(--periwinkle-light)' : 'var(--white)',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '1.0625rem',
                        fontWeight: '600',
                        color: isOpen ? 'var(--white)' : 'var(--charcoal)',
                        transition: 'all 0.3s ease',
                        fontFamily: 'inherit'
                      }}
                    >
                      <span>{faq.q}</span>
                      <span style={{
                        fontSize: '1.25rem',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        color: isOpen ? 'var(--white)' : 'var(--periwinkle)'
                      }}>
                        ▼
                      </span>
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '1.5rem',
                        background: 'var(--off-white)',
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--charcoal)',
                        borderTop: '2px solid var(--periwinkle-light)'
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {/* Contact CTA */}
          <div style={{
            marginTop: '4rem',
            padding: '3.5rem 3rem',
            background: 'linear-gradient(135deg, var(--periwinkle-light), var(--periwinkle))',
            borderRadius: '20px',
            textAlign: 'center',
            color: 'var(--white)',
            boxShadow: '0 10px 40px rgba(138, 141, 203, 0.2)'
          }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: '600' }}>Still have questions?</h3>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: '0.95' }}>
              We&rsquo;re here to help you understand how Elphina can support your vision.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contact" className="btn btn-primary">
                Contact Us
              </Link>
              <a href="mailto:hello@elphinainnovations.com" className="btn btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-off-white" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--charcoal)', fontWeight: '600' }}>
            Learn More About Elphina
          </h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about" className="btn btn-secondary">
              About Us
            </Link>
            <Link href="/#focus" className="btn btn-secondary">
              What We Fund
            </Link>
            <Link href="/#portfolio" className="btn btn-secondary">
              Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
