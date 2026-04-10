import Image from 'next/image';
import Link from 'next/link';
import { getCompetitionById } from '@/lib/competitions';
import TicketProgressBar from '@/components/draw/TicketProgressBar';
import CountdownTimer from '@/components/draw/CountdownTimer';

export default function FeaturedPrize() {
  const comp = getCompetitionById('ap-royal-oak-000')!

  return (
    <section className="bg-surface px-8 py-24 md:px-12 md:py-32 lg:px-20">
      <p className="text-xs text-muted tracking-[0.25em] uppercase mb-16">
        What a draw looks like
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-3xl mx-auto">
        {/* Live competition card */}
        <Link
          href={`/competitions/${comp.id}`}
          className="group relative border border-border bg-surface-raised overflow-hidden flex flex-col"
          style={{ textDecoration: 'none' }}
        >
          {/* Prize image */}
          <div className="relative h-56 overflow-hidden shrink-0">
            <Image
              src="/images/ap-royal-oak.jpg"
              alt={comp.title}
              fill
              className="object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="448px"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 h-24"
              style={{ background: 'linear-gradient(to top, #1e1b17, transparent)' }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: 'rgba(12,11,10,0.2)' }}
            />

            {/* Verified badge */}
            <div className="absolute top-4 right-4 z-10">
              <span
                className="text-xs tracking-[0.2em] uppercase text-gold px-3 py-1.5"
                style={{
                  border: '1px solid rgba(201,168,76,0.4)',
                  background: 'rgba(12,11,10,0.6)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                Verified ✓
              </span>
            </div>
          </div>

          {/* Gold accent line */}
          <div className="h-px bg-gold" style={{ opacity: 0.4 }} />

          {/* Card body */}
          <div className="p-8 flex flex-col flex-1">
            {/* Creator handle */}
            <p className="text-xs text-muted tracking-[0.2em] uppercase mb-5">
              {comp.creatorHandle}
            </p>

            {/* Prize name */}
            <h3
              className="text-parchment leading-tight mb-2"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '2.25rem',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              {comp.title}
            </h3>

            {/* Prize value */}
            <p className="text-muted text-sm leading-relaxed mb-6">
              Estimated value{' '}
              <span className="text-parchment font-medium">
                £{comp.prizeValue.toLocaleString('en-GB')}
              </span>
            </p>

            {/* Progress bar */}
            <TicketProgressBar
              ticketsSold={comp.ticketsSold}
              totalTickets={comp.totalTickets}
              compact
            />

            {/* Divider */}
            <div className="h-px bg-border my-6" />

            {/* Ticket price + countdown */}
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-xs text-muted tracking-[0.2em] uppercase mb-1.5">
                  Ticket price
                </p>
                <p
                  className="text-parchment leading-none"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2rem',
                    fontWeight: 400,
                  }}
                >
                  £{comp.ticketPrice}
                  <span className="text-muted text-sm font-normal ml-1">per ticket</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted tracking-[0.2em] uppercase mb-1.5">
                  Draw closes
                </p>
                <CountdownTimer drawDate={comp.drawDate} compact />
              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto w-full py-4 text-center text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold group-hover:bg-gold/5 transition-colors">
              Enter Draw
            </div>
          </div>
        </Link>

        {/* Second placeholder card */}
        <div
          className="relative border border-border bg-surface-raised overflow-hidden flex flex-col items-center justify-center"
          style={{ minHeight: '480px' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 70%)',
            }}
          />
          <p
            className="text-gold text-center"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '2rem',
              fontStyle: 'italic',
              fontWeight: 300,
              opacity: 0.5,
            }}
          >
            More draws coming.
          </p>
          <p className="text-muted text-xs tracking-[0.2em] uppercase mt-4">
            Applications open now
          </p>
        </div>
      </div>

      <div className="h-px bg-border mt-24" />
    </section>
  )
}
