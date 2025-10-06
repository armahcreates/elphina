'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/fund">Fund</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div style={{ marginTop: 'var(--space-8)' }}>
          <a href="mailto:hello@elphinainnovations.com" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 'var(--text-sm)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}>
            hello@elphinainnovations.com
          </a>
        </div>
        <div className="social-links">
          <a href="#" onClick={(e) => { e.preventDefault(); alert('LinkedIn coming soon'); }}>LinkedIn</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('X coming soon'); }}>X</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Medium coming soon'); }}>Medium</a>
        </div>
        <div>
          <p>© 2025 Elphina Humanity-Centric Fund</p>
        </div>
      </div>
    </footer>
  );
}
