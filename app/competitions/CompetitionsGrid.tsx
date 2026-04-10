'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { COMPETITIONS, type Competition } from '@/lib/competitions';
import TicketProgressBar from '@/components/draw/TicketProgressBar';
import CountdownTimer from '@/components/draw/CountdownTimer';

const CATEGORIES = ['all', 'watches', 'fashion', 'sneakers', 'jewellery', 'electronics', 'streetwear'] as const
type CategoryFilter = (typeof CATEGORIES)[number]

type SortKey = 'ending' | 'popular' | 'newest'

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'ending',  label: 'Ending soon' },
  { value: 'popular', label: 'Most popular' },
  { value: 'newest',  label: 'Newest' },
]

function formatPrice(n: number) {
  return n.toLocaleString('en-GB')
}

// Category icons (text placeholders — replace with SVG icons or an icon lib if desired)
const CATEGORY_ICONS: Record<string, string> = {
  watches:     '⌚',
  fashion:     '👜',
  sneakers:    '👟',
  jewellery:   '💎',
  electronics: '📱',
  streetwear:  '🧥',
}

function CompetitionCard({ comp }: { comp: Competition }) {
  const pct = Math.round((comp.ticketsSold / comp.totalTickets) * 100)
  const almostFull = pct > 80

  return (
    <Link
      href={`/competitions/${comp.id}`}
      className="group flex flex-col bg-surface border border-border hover:border-gold/30 transition-all duration-200"
      style={{
        textDecoration: 'none',
      }}
    >
      {/* Image / placeholder area */}
      <div
        className="relative w-full bg-surface-raised overflow-hidden"
        style={{ aspectRatio: '8/5' }}
      >
        {/* Category icon placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-20 select-none" aria-hidden="true">
            {CATEGORY_ICONS[comp.category] ?? '🏆'}
          </span>
        </div>

        {/* Subtle gold glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(201,168,76,0.04) 0%, transparent 70%)',
          }}
        />

        {/* Almost full banner */}
        {almostFull && (
          <div
            className="absolute top-0 left-0 right-0 py-1.5 text-center text-[12px] tracking-[0.15em] uppercase"
            style={{ background: 'rgba(245,158,11,0.85)', color: '#0c0b0a' }}
          >
            Almost full
          </div>
        )}

        {/* Verified badge */}
        {comp.verified && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className="text-[11px] tracking-[0.15em] uppercase text-gold px-2 py-1"
              style={{
                border: '1px solid rgba(201,168,76,0.4)',
                background: 'rgba(12,11,10,0.75)',
                backdropFilter: 'blur(4px)',
              }}
            >
              Verified ✓
            </span>
          </div>
        )}

        {/* Creator chip */}
        <div className="absolute bottom-3 left-3">
          <div
            className="flex items-center gap-2 px-2.5 py-1"
            style={{ background: 'rgba(12,11,10,0.80)', backdropFilter: 'blur(6px)' }}
          >
            <div
              className="w-5 h-5 flex items-center justify-center text-[8px] font-semibold text-background shrink-0"
              style={{ background: 'var(--color-gold)' }}
            >
              {comp.creatorAvatar}
            </div>
            <span className="text-parchment text-[12px] tracking-wide">{comp.creatorHandle}</span>
          </div>
        </div>

        {/* Viewer count */}
        <div className="absolute bottom-3 right-3">
          <span className="text-muted text-[11px] tracking-wide">
            {comp.viewerCount} viewing
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Prize name + value */}
        <div>
          <p className="text-parchment text-[14px] font-medium leading-snug">{comp.title}</p>
          <p className="text-amber-400/80 text-[14px] mt-0.5">
            Valued at £{formatPrice(comp.prizeValue)}
          </p>
        </div>

        {/* Ticket price */}
        <p className="text-muted text-[14px]">
          <span className="text-parchment">£{comp.ticketPrice}</span> per entry
        </p>

        {/* Progress bar (compact) */}
        <TicketProgressBar
          ticketsSold={comp.ticketsSold}
          totalTickets={comp.totalTickets}
          compact
        />

        {/* Countdown (compact) */}
        <CountdownTimer drawDate={comp.drawDate} compact />

        {/* CTA */}
        <div className="mt-auto pt-1 w-full text-center text-[13px] tracking-[0.15em] uppercase py-3 border border-border text-muted group-hover:border-gold/40 group-hover:text-parchment transition-all duration-150">
          Enter Draw →
        </div>
      </div>
    </Link>
  )
}

export default function CompetitionsGrid() {
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [sort, setSort] = useState<SortKey>('ending')

  const filtered = useMemo(() => {
    let result = COMPETITIONS.filter((c) => {
      if (c.status !== 'active') return false
      return category === 'all' || c.category === category
    })

    result = [...result].sort((a, b) => {
      switch (sort) {
        case 'ending': {
          const aMs = new Date(a.drawDate).getTime()
          const bMs = new Date(b.drawDate).getTime()
          return aMs - bMs
        }
        case 'popular':
          return b.ticketsSold - a.ticketsSold
        case 'newest':
          // In mock data, later array index = newer; invert for newest-first
          return COMPETITIONS.indexOf(b) - COMPETITIONS.indexOf(a)
        default:
          return 0
      }
    })

    return result
  }, [category, sort])

  const pillBase =
    'px-3.5 py-1.5 text-[12px] tracking-[0.12em] uppercase border transition-colors duration-150 cursor-pointer'
  const pillActive = 'border-gold/40 text-gold bg-surface-raised'
  const pillInactive = 'border-border text-muted hover:text-parchment hover:border-[#3a342e] bg-transparent'

  return (
    <div>
      {/* Category filter bar */}
      <div className="flex flex-wrap gap-2 mb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`${pillBase} ${category === cat ? pillActive : pillInactive}`}
          >
            {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Sort + results row */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-muted text-[14px] tracking-[0.1em]">
          <span className="text-parchment font-medium">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'draw' : 'draws'} live
        </p>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="bg-surface border border-border text-muted text-[13px] tracking-[0.08em] px-3 py-2 cursor-pointer hover:border-[#3a342e] transition-colors focus:outline-none focus:border-[#3a342e]"
          style={{
            appearance: 'none',
            paddingRight: '2rem',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%236b6358'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
          }}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center text-muted text-sm">
          No draws in this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {filtered.map((comp) => (
            <div key={comp.id} className="bg-background">
              <CompetitionCard comp={comp} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
