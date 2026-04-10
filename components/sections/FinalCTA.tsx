import WaitlistForm from '@/components/sections/WaitlistForm';

export default function FinalCTA() {
  return (
    <section
      id="waitlist"
      className="bg-surface-raised px-8 py-24 md:px-12 md:py-32 lg:px-20"
      style={{
        background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(201,168,76,0.04) 0%, transparent 70%), var(--color-surface-raised)',
      }}
    >
      <div className="max-w-2xl">
        {/* Headline */}
        <h2
          className="text-parchment leading-[1.05] mb-6"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            letterSpacing: '-0.01em',
          }}
        >
          We&rsquo;re building something the influencer economy has never had.
        </h2>

        {/* Subheading */}
        <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-md">
          We&rsquo;re onboarding a founding cohort of creators for our UK launch. If you want to list a prize — or be first in line when draws go live — get on the list now.
        </p>

        {/* Shared waitlist form */}
        <WaitlistForm hint="Founding members get early access and priority draw notifications." />
      </div>
    </section>
  );
}
