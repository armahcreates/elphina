'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        <Link href="/" className="logo">ELPHINA</Link>
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Studio</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/fund" onClick={() => setMobileMenuOpen(false)}>Fund</Link>
          <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          <Link href="/#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Partner With Us</Link>
        </div>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
