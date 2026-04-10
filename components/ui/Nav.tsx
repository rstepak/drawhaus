import Link from 'next/link';

interface NavProps {
  className?: string;
}

export default function Nav({ className = '' }: NavProps) {
  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-8 py-5 md:px-12 border-b border-border ${className}`}
      style={{
        background: 'rgba(12, 11, 10, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <Link
        href="/"
        className="text-parchment text-sm font-semibold tracking-[0.2em] uppercase transition-colors hover:text-gold"
        style={{ fontFamily: 'var(--font-geist-sans)' }}
      >
        Drawhaus
      </Link>
      <nav className="flex items-center gap-6 sm:gap-8">
        <Link
          href="/for-creators"
          className="text-muted text-xs tracking-[0.15em] uppercase transition-colors hover:text-parchment"
        >
          For Creators
        </Link>
        <Link
          href="/how-it-works"
          className="text-muted text-xs tracking-[0.15em] uppercase transition-colors hover:text-parchment"
        >
          How it works
        </Link>
        <Link
          href="/#waitlist"
          className="border border-gold/40 text-gold text-xs tracking-[0.15em] uppercase px-4 py-2 hover:bg-gold/5 transition-colors"
        >
          Join Waitlist &rarr;
        </Link>
      </nav>
    </header>
  );
}
