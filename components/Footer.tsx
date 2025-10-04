'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="aurora-bg">
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div>
          <p><strong>Email:</strong> <a href="mailto:hello@elphinainnovations.com" style={{ color: 'white' }}>hello@elphinainnovations.com</a></p>
        </div>
        <div className="social-links">
          <a href="#" onClick={(e) => { e.preventDefault(); alert('LinkedIn coming soon'); }}>LinkedIn</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Instagram coming soon'); }}>Instagram</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Medium coming soon'); }}>Medium</a>
        </div>
        <div style={{ marginTop: '2rem', opacity: 0.9 }}>
          <p>© 2025 Elphina Investment Management</p>
        </div>
      </div>
    </footer>
  );
}
