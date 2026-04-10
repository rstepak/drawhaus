'use client';

import Link from 'next/link';
import { useState } from 'react';
import LogoFull from '@/components/ui/LogoFull';

interface NavProps {
  className?: string;
}

export default function Nav({ className = '' }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border ${className}`}
      style={{
        background: 'rgba(12, 11, 10, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="text-parchment transition-colors hover:text-gold" aria-label="Drawhaus home">
          <LogoFull className="h-9 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`block h-px w-6 bg-parchment transition-transform duration-200 origin-center ${open ? 'translate-y-[8px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-parchment transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-parchment transition-transform duration-200 origin-center ${open ? '-translate-y-[8px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden flex flex-col px-6 pb-6 gap-5 border-t border-border"
          style={{
            background: 'rgba(12, 11, 10, 0.96)',
          }}
        >
          <Link
            href="/for-creators"
            onClick={() => setOpen(false)}
            className="text-muted text-xs tracking-[0.15em] uppercase transition-colors hover:text-parchment pt-5"
          >
            For Creators
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setOpen(false)}
            className="text-muted text-xs tracking-[0.15em] uppercase transition-colors hover:text-parchment"
          >
            How it works
          </Link>
          <Link
            href="/#waitlist"
            onClick={() => setOpen(false)}
            className="border border-gold/40 text-gold text-xs tracking-[0.15em] uppercase px-4 py-3 hover:bg-gold/5 transition-colors text-center"
          >
            Join Waitlist &rarr;
          </Link>
        </nav>
      )}
    </header>
  );
}
