'use client';

import { useState, type FormEvent } from 'react';

export default function CreatorApplicationForm() {
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
        body: JSON.stringify({ email, type: 'creator' }),
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
      <div className="flex items-center gap-3 text-gold animate-fade-up">
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
          Application received. We&rsquo;ll review it within 48 hours.
        </span>
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
            'Apply as a Creator'
          )}
        </button>
      </div>
      {status === 'error' && message && (
        <p className="mt-3 text-xs text-red-400 tracking-wide">{message}</p>
      )}
      <p className="mt-4 text-xs text-muted tracking-wide">
        We&rsquo;ll review your application within 48 hours.
      </p>
    </form>
  );
}
