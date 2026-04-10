'use client';

import { useState } from 'react';

const PLATFORM_FEE = 0.15;

const presets = [
  {
    label: 'The Watch Drop',
    prizeName: 'Rolex Submariner',
    prize: 9500,
    ticketPrice: 15,
    tickets: 1000,
    tagline: 'List a £9,500 watch. Walk away with £3,250.',
  },
  {
    label: 'The Bag Drop',
    prizeName: 'Louis Vuitton Neverfull',
    prize: 1200,
    ticketPrice: 8,
    tickets: 500,
    tagline: 'Turn a £1,200 bag into £2,200 in profit.',
  },
  {
    label: 'The Big Drop',
    prizeName: 'Audemars Piguet Royal Oak',
    prize: 18000,
    ticketPrice: 20,
    tickets: 2000,
    tagline: 'The biggest prizes attract the most tickets. List accordingly.',
  },
];

function fmt(n: number) {
  return '£' + Math.abs(n).toLocaleString('en-GB', { maximumFractionDigits: 0 });
}

export default function EarningsCalculator() {
  const [prizeValue, setPrizeValue] = useState(5000);
  const [ticketPrice, setTicketPrice] = useState(15);
  const [ticketCount, setTicketCount] = useState(1000);

  const gross = ticketPrice * ticketCount;
  const fee = Math.round(gross * PLATFORM_FEE);
  const earnings = gross - fee - prizeValue;
  const margin = gross > 0 ? (earnings / gross) * 100 : 0;

  function applyPreset(preset: (typeof presets)[0]) {
    setPrizeValue(preset.prize);
    setTicketPrice(preset.ticketPrice);
    setTicketCount(preset.tickets);
  }

  return (
    <div>
      {/* Main calculator card */}
      <div
        className="border p-8 md:p-10 mb-px"
        style={{ borderColor: 'rgba(201,168,76,0.3)', background: 'var(--color-surface)' }}
      >
        <p className="text-[10px] text-gold tracking-[0.25em] uppercase mb-10">
          Earnings Calculator
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Inputs */}
          <div className="space-y-9">
            {/* Prize value */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[10px] text-muted tracking-[0.2em] uppercase">
                  Prize Value
                </label>
                <span
                  className="text-parchment"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  {fmt(prizeValue)}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={prizeValue}
                onChange={(e) => setPrizeValue(Number(e.target.value))}
                className="w-full accent-gold cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-muted">£1,000</span>
                <span className="text-[10px] text-muted">£50,000</span>
              </div>
            </div>

            {/* Ticket price */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[10px] text-muted tracking-[0.2em] uppercase">
                  Ticket Price
                </label>
                <span
                  className="text-parchment"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  {fmt(ticketPrice)}
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={25}
                step={1}
                value={ticketPrice}
                onChange={(e) => setTicketPrice(Number(e.target.value))}
                className="w-full accent-gold cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-muted">£5</span>
                <span className="text-[10px] text-muted">£25</span>
              </div>
            </div>

            {/* Ticket count */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[10px] text-muted tracking-[0.2em] uppercase">
                  Number of Tickets
                </label>
                <span
                  className="text-parchment"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  {ticketCount.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={5000}
                step={100}
                value={ticketCount}
                onChange={(e) => setTicketCount(Number(e.target.value))}
                className="w-full accent-gold cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-muted">100</span>
                <span className="text-[10px] text-muted">5,000</span>
              </div>
            </div>

            {/* Platform fee — display only */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <span className="text-[10px] text-muted tracking-[0.2em] uppercase">
                Platform Fee
              </span>
              <span className="text-muted text-xs tracking-wide">15% (fixed)</span>
            </div>
          </div>

          {/* Outputs */}
          <div className="flex flex-col">
            <div className="space-y-0 flex-1">
              <div className="flex items-center justify-between py-5 border-b border-border">
                <span className="text-[10px] text-muted tracking-[0.2em] uppercase">
                  Gross Revenue
                </span>
                <span className="text-parchment text-sm">{fmt(gross)}</span>
              </div>
              <div className="flex items-center justify-between py-5 border-b border-border">
                <span className="text-[10px] text-muted tracking-[0.2em] uppercase">
                  Platform Fee (15%)
                </span>
                <span className="text-muted text-sm">−{fmt(fee)}</span>
              </div>
              <div className="flex items-center justify-between py-5 border-b border-border">
                <span className="text-[10px] text-muted tracking-[0.2em] uppercase">
                  Prize Value
                </span>
                <span className="text-muted text-sm">−{fmt(prizeValue)}</span>
              </div>
            </div>

            {/* Earnings output */}
            <div className="mt-8 pt-7 border-t" style={{ borderColor: 'rgba(201,168,76,0.4)' }}>
              <p className="text-[10px] text-gold tracking-[0.25em] uppercase mb-3">
                Your Earnings
              </p>
              <p
                className="leading-none mb-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: earnings < 0 ? '#f87171' : 'var(--color-gold)',
                }}
              >
                {earnings < 0 ? '−' : ''}{fmt(earnings)}
              </p>
              <p className="text-muted text-xs tracking-wide">{margin.toFixed(1)}% profit margin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preset scenario cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {presets.map((preset) => {
          const pGross = preset.ticketPrice * preset.tickets;
          const pFee = Math.round(pGross * PLATFORM_FEE);
          const pEarnings = pGross - pFee - preset.prize;

          return (
            <button
              key={preset.label}
              onClick={() => applyPreset(preset)}
              className="bg-surface p-7 md:p-8 text-left transition-colors hover:bg-surface-raised group"
            >
              <p className="text-[10px] text-gold tracking-[0.2em] uppercase mb-4 transition-colors group-hover:text-gold-light">
                {preset.label}
              </p>
              <p className="text-parchment text-sm mb-1">{preset.prizeName}</p>
              <p className="text-muted text-xs mb-5">
                {preset.tickets.toLocaleString()} × {fmt(preset.ticketPrice)}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-[10px] text-muted tracking-wide">Gross</span>
                  <span className="text-[10px] text-parchment">{fmt(pGross)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] text-muted tracking-wide">Platform fee</span>
                  <span className="text-[10px] text-muted">−{fmt(pFee)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="text-[10px] text-muted tracking-wide">Your earnings</span>
                  <span
                    className="text-[10px] font-semibold"
                    style={{ color: pEarnings < 0 ? '#f87171' : 'var(--color-gold)' }}
                  >
                    {pEarnings < 0 ? '−' : ''}{fmt(pEarnings)}
                  </span>
                </div>
              </div>

              <p className="text-muted text-xs leading-relaxed">
                &ldquo;{preset.tagline}&rdquo;
              </p>
              <p className="text-[10px] text-muted tracking-[0.18em] uppercase mt-5 transition-colors group-hover:text-gold">
                Load scenario →
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
