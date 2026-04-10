import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not Available in Your Region — Drawhaus',
};

export default function RegionUnavailablePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-8 text-center">
      <p className="text-xs tracking-[0.22em] uppercase text-muted mb-6">
        Drawhaus
      </p>
      <h1
        className="text-4xl md:text-5xl font-light text-parchment mb-6 leading-tight"
        style={{ fontFamily: 'var(--font-cormorant)' }}
      >
        Not available in your region
      </h1>
      <p className="text-sm text-muted max-w-sm leading-relaxed mb-10">
        Drawhaus prize competitions are currently open to residents of the United
        Kingdom, Australia, and New Zealand only. This is a legal requirement
        under the relevant gambling and prize competition regulations.
      </p>
      <p className="text-xs text-muted">
        Questions?{' '}
        <a
          href="mailto:hello@drawhaus.co"
          className="text-parchment underline underline-offset-2 hover:text-gold transition-colors"
        >
          hello@drawhaus.co
        </a>
      </p>
      <Link
        href="/"
        className="mt-10 text-xs tracking-widest uppercase text-muted hover:text-parchment transition-colors"
      >
        ← Back to drawhaus.co
      </Link>
    </main>
  );
}
