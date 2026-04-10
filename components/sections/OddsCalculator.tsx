'use client';

import { useState } from 'react';

export default function OddsCalculator() {
  const [buying, setBuying] = useState(1);
  const [total, setTotal] = useState(1000);

  const safeBuying = Math.max(1, Math.min(buying, total));
  const odds = total > 0 ? (safeBuying / total) * 100 : 0;

  function handleBuyingChange(val: number) {
    const clamped = Math.max(1, Math.min(val, total));
    setBuying(clamped);
  }

  function handleTotalChange(val: number) {
    const clamped = Math.max(1, val);
    setTotal(clamped);
    if (buying > clamped) setBuying(clamped);
  }

  return (
    <div className="border border-border p-8 md:p-10 bg-surface">
      <p className="text-[10px] text-gold tracking-[0.25em] uppercase mb-8">
        Odds Calculator
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-[10px] text-muted tracking-[0.2em] uppercase mb-3">
            Tickets you&rsquo;re buying
          </label>
          <input
            type="number"
            min={1}
            max={total}
            value={buying}
            onChange={(e) => handleBuyingChange(Number(e.target.value) || 1)}
            className="w-full bg-background border border-border px-4 py-3 text-parchment text-sm outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] text-muted tracking-[0.2em] uppercase mb-3">
            Total tickets in draw
          </label>
          <input
            type="number"
            min={1}
            value={total}
            onChange={(e) => handleTotalChange(Number(e.target.value) || 1)}
            className="w-full bg-background border border-border px-4 py-3 text-parchment text-sm outline-none focus:border-gold transition-colors"
          />
        </div>
      </div>

      <div className="border-t border-border pt-7">
        <p className="text-[10px] text-muted tracking-[0.2em] uppercase mb-3">
          Your odds of winning
        </p>
        <p
          className="text-gold leading-none mb-2"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontStyle: 'italic',
            fontWeight: 300,
          }}
        >
          {safeBuying} in {total.toLocaleString()}
        </p>
        <p className="text-muted text-sm">({odds.toFixed(2)}%)</p>
      </div>

      <p className="text-muted text-xs leading-relaxed mt-6 pt-5 border-t border-border">
        Actual odds for each competition are shown on its competition page, updated in real time as
        tickets sell.
      </p>
    </div>
  );
}
