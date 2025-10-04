import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link href="/" className="logo">ELPHINA HCF</Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/#focus">What We Fund</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
