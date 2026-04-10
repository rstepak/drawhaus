import Image from 'next/image';

export default function DualAudience() {
  return (
    <section className="bg-background px-8 py-24 md:px-12 md:py-32 lg:px-20">
      {/* Section label */}
      <p className="text-xs text-muted tracking-[0.25em] uppercase mb-16">
        Built for both sides of the draw
      </p>

      {/* Two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
        {/* For Creators */}
        <div className="pb-16 md:pb-0 md:pr-16 lg:pr-20">
          {/* Column image */}
          <div className="relative h-72 sm:h-80 overflow-hidden mb-10">
            <Image
              src="/images/birkin.png"
              alt=""
              fill
              className="object-cover object-center grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, #0c0b0a 0%, rgba(12,11,10,0.3) 40%, transparent 70%)',
              }}
            />
          </div>

          <p className="text-xs text-gold tracking-[0.22em] uppercase mb-7">
            For Creators
          </p>
          <h2
            className="text-parchment leading-[1.08] mb-6"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
            }}
          >
            Turn your wardrobe
            <br />
            into a payday.
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-sm">
            List a watch. List a bag. List anything you own that your audience would pay to win. Set your own ticket price, keep the profit, and give your most loyal fans a genuine shot at something real. We handle verification, the draw, and the payout.
          </p>
          <a
            href="/for-creators"
            className="inline-flex items-center gap-2 border border-border text-parchment text-xs tracking-[0.18em] uppercase px-6 py-3.5 transition-colors hover:border-gold hover:text-gold"
          >
            Apply to list a prize &rarr;
          </a>
        </div>

        {/* For Fans */}
        <div className="pt-16 md:pt-0 md:pl-16 lg:pl-20">
          {/* Column image */}
          <div className="relative h-72 sm:h-80 overflow-hidden mb-10">
            <Image
              src="/images/sneakers.png"
              alt=""
              fill
              className="object-cover object-center grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, #0c0b0a 0%, rgba(12,11,10,0.3) 40%, transparent 70%)',
              }}
            />
          </div>

          <p className="text-xs text-gold tracking-[0.22em] uppercase mb-7">
            For Fans
          </p>
          <h2
            className="text-parchment leading-[1.08] mb-6"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
            }}
          >
            Win something real from
            <br />
            someone you actually follow.
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-sm">
            Not a lottery. Not a giveaway. A proper competition — with transparent odds, a live recorded draw, and a prize that actually ships to your door. Starting from a few pounds an entry.
          </p>
          <a
            href="/competitions"
            className="inline-flex items-center gap-2 border border-border text-parchment text-xs tracking-[0.18em] uppercase px-6 py-3.5 transition-colors hover:border-gold hover:text-gold"
          >
            Browse open draws &rarr;
          </a>
        </div>
      </div>

      <div className="h-px bg-border mt-24" />
    </section>
  );
}
