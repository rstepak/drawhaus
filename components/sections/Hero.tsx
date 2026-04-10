import Image from 'next/image';
import Nav from '@/components/ui/Nav';
import WaitlistForm from '@/components/sections/WaitlistForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Subtle radial glow behind headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Nav */}
      <Nav className="relative z-10" />

      {/* Mobile image — full width, below nav */}
      <div className="relative lg:hidden w-full h-56 sm:h-72 shrink-0">
        <Image
          src="/images/rolex-daytona.jpg"
          alt="Rolex Daytona Cosmograph"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Fade bottom into background */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to top, #0c0b0a, transparent)' }}
        />
        <div aria-hidden="true" className="absolute inset-0" style={{ background: 'rgba(12,11,10,0.3)' }} />
      </div>

      {/* Hero body — split layout on desktop */}
      <div className="relative z-10 flex flex-1 flex-col lg:flex-row lg:items-center">
        {/* Left: text content */}
        <div className="flex flex-1 flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 pb-16 md:pb-24 pt-4 lg:pt-8">
          <div className="max-w-2xl">
            {/* Label */}
            <p className="animate-fade-up text-xs text-gold tracking-[0.25em] uppercase mb-8">
              Invitation-only · Launching 2026
            </p>

            {/* Headline */}
            <h1
              className="animate-fade-up-delay-1 text-parchment leading-[1.05] mb-8"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              Compete for the
              <br />
              <span className="text-gold">extraordinary.</span>
            </h1>

            {/* Divider */}
            <div className="animate-fade-up-delay-1 h-px w-16 bg-border mb-8" />

            {/* Body copy */}
            <p className="animate-fade-up-delay-2 text-muted text-base md:text-lg leading-relaxed mb-12 max-w-lg">
              Creators list what they own. Fans enter to win it. A live draw decides, on camera, in real time, no exceptions.
            </p>

            {/* Waitlist form */}
            <div className="animate-fade-up-delay-3">
              <WaitlistForm />
            </div>
          </div>
        </div>

        {/* Right: editorial image panel — large screens only */}
        <div className="hidden lg:block relative w-[44%] shrink-0 self-stretch">
          <Image
            src="/images/rolex-daytona.jpg"
            alt="Rolex Daytona Cosmograph"
            fill
            className="object-cover object-left"
            priority
            quality={90}
            sizes="(max-width: 1024px) 0vw, 50vw"
          />
          {/* Blend left edge into dark background */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #0c0b0a 0%, rgba(12,11,10,0.2) 25%, transparent 55%)',
            }}
          />
          {/* Blend bottom edge into dark background */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-36"
            style={{ background: 'linear-gradient(to top, #0c0b0a, transparent)' }}
          />
          {/* Very subtle gold vignette overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 80% 30%, rgba(201,168,76,0.04) 0%, transparent 70%)',
            }}
          />
        </div>
      </div>

      {/* Bottom rule */}
      <div className="relative z-10 h-px bg-border mx-6 md:mx-12" />
    </section>
  );
}
