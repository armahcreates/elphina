import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elphina Humanity Centric Fund | VitalTechAI Investment',
  description: 'Backing impactful human-centered AI, infrastructure, and functional biotech. Elphina\'s $100M Fund empowering visionary founders building health and wellness infrastructure for the next generation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
