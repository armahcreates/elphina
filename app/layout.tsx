import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elphina Venture Studio | Building VitalTechAI Companies',
  description: 'Building impactful human-centered AI, infrastructure, and functional biotech companies. Elphina Venture Studio creates and scales the next generation of health and wellness technology.',
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
