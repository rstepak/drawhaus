import type { Metadata } from 'next';
import Nav from '@/components/ui/Nav';
import Footer from '@/components/ui/Footer';
import CompetitionsGrid from './CompetitionsGrid';

export const metadata: Metadata = {
  title: 'Competitions — Drawhaus',
  description: 'Browse live prize competitions on Drawhaus. Watches, tech, fashion, cars and more.',
};

export default function CompetitionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />

      <main className="flex-1 px-8 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="mb-10">
          <p className="text-[12px] text-gold tracking-[0.25em] uppercase mb-4">Browse</p>
          <h1
            className="text-parchment leading-[1.05] mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '-0.01em',
            }}
          >
            Open Draws
          </h1>
          <p className="text-muted text-[14px] leading-relaxed max-w-lg">
            Live competitions from verified creators. Every draw is recorded and transparent.
          </p>
        </div>

        <CompetitionsGrid />
      </main>

      <Footer />
    </div>
  );
}
