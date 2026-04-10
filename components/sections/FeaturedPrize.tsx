import Image from 'next/image';

export default function FeaturedPrize() {
  return (
    <section className="bg-surface px-8 py-24 md:px-12 md:py-32 lg:px-20">
      <p className="text-xs text-muted tracking-[0.25em] uppercase mb-16">
        What a draw looks like
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-3xl mx-auto">
        {/* Card */}
        <div className="relative border border-border bg-surface-raised overflow-hidden">

          {/* Prize image */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src="/images/rolex.jpg"
              alt="Audemars Piguet Royal Oak"
              fill
              className="object-cover object-top"
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
              style={{ background: 'rgba(12,11,10,0.25)' }}
            />

            {/* Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span
                className="text-xs tracking-[0.2em] uppercase text-gold px-3 py-1.5"
                style={{
                  border: '1px solid rgba(201,168,76,0.4)',
                  background: 'rgba(12,11,10,0.6)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                Opening soon
              </span>
            </div>
          </div>

          {/* Gold accent line */}
          <div className="h-px bg-gold" style={{ opacity: 0.4 }} />

          {/* Card body */}
          <div className="p-8">
            {/* Creator handle */}
            <p className="text-xs text-muted tracking-[0.2em] uppercase mb-5">
              @username
            </p>

            {/* Prize name */}
            <h3
              className="text-parchment leading-tight mb-2"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '2.75rem',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              Audemars Piguet Royal Oak
            </h3>

            {/* Prize value */}
            <p className="text-muted text-sm leading-relaxed mb-8">
              Estimated value{' '}
              <span className="text-parchment font-medium">£40,000</span>
            </p>

            {/* Divider */}
            <div className="h-px bg-border mb-8" />

            {/* Ticket price + draw opens */}
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs text-muted tracking-[0.2em] uppercase mb-1.5">
                  Ticket price
                </p>
                <p
                  className="text-parchment leading-none"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2.25rem',
                    fontWeight: 400,
                  }}
                >
                  £15
                  <span className="text-muted text-sm font-normal ml-1">
                    per ticket
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted tracking-[0.2em] uppercase mb-1.5">
                  Draw opens
                </p>
                <p className="text-gold text-base tracking-wide">Coming soon</p>
              </div>
            </div>

            {/* CTA */}
            <button
              disabled
              className="w-full py-4 text-xs tracking-[0.2em] uppercase border border-border text-muted cursor-not-allowed"
              style={{ opacity: 0.4 }}
            >
              Enter Draw
            </button>
          </div>
        </div>

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
  );
}
