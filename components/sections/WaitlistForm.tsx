'use client';

import { useState, type FormEvent } from 'react';

interface WaitlistFormProps {
  hint?: string;
}

export default function WaitlistForm({ hint }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: 'fan' }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="animate-fade-up flex flex-col gap-4">
        <div className="flex items-center gap-3 text-gold">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" />
            <path
              d="M5 9l3 3 5-5"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm tracking-wide text-parchment">
            You&rsquo;re in. Know a creator who should list their first prize?
          </span>
        </div>
        <a
          href="https://twitter.com/intent/tweet?text=Just%20joined%20the%20Drawhaus%20waitlist%20%E2%80%94%20a%20new%20UK%20platform%20where%20creators%20list%20luxury%20items%20as%20competition%20prizes.%20Launching%202026.%20drawhaus.co"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold text-xs tracking-[0.15em] uppercase hover:text-gold-light transition-colors"
        >
          Share Drawhaus &rarr;
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className="flex items-stretch border border-border rounded-none overflow-hidden transition-colors focus-within:border-gold"
        style={{ maxWidth: '480px' }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          aria-label="Email address"
          disabled={status === 'loading'}
          className="flex-1 bg-surface px-5 py-4 text-sm text-parchment placeholder:text-muted outline-none min-w-0 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-gold text-[#0c0b0a] px-6 py-4 text-xs font-semibold tracking-widest uppercase whitespace-nowrap transition-colors hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <span className="inline-block w-4 h-4 border border-[#0c0b0a] border-t-transparent rounded-full animate-spin" />
          ) : (
            'Request Invite'
          )}
        </button>
      </div>
      {status === 'error' && message && (
        <p className="mt-3 text-xs text-red-400 tracking-wide">{message}</p>
      )}
      <p className="mt-4 text-xs text-muted tracking-wide">
        {hint ?? 'UK, Australia & New Zealand only · Launching 2026 · No spam.'}
      </p>
    </form>
  );
}
