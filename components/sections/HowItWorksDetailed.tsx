const steps = [
  {
    number: '01',
    title: 'Creator lists a prize',
    description:
      'A creator submits their item. We verify it\'s in their possession before a single ticket goes on sale. No listing goes live without this step.',
  },
  {
    number: '02',
    title: 'Fans enter the draw',
    description:
      'Tickets are purchased online. Every competition includes a free postal entry route in line with UK prize competition law.',
  },
  {
    number: '03',
    title: 'Live draw picks the winner',
    description:
      'A live, recorded draw selects the winner on camera. Every entry in the pool — paid and postal — is shown on screen. The prize ships directly from the creator within 5 days.',
  },
];

export default function HowItWorksDetailed() {
  return (
    <section className="bg-surface px-8 py-12 md:px-12 md:py-16 lg:px-20">
      {/* Section label */}
      <p className="text-xs text-muted tracking-[0.25em] uppercase mb-10">
        How it works
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border-t border-border pt-10 pb-10 md:pb-0 md:pr-14 last:md:pr-0"
          >
            {/* Large number */}
            <div
              aria-hidden="true"
              className="text-gold mb-8 leading-none select-none"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '6rem',
                fontWeight: 300,
                fontStyle: 'italic',
                opacity: 0.45,
                lineHeight: 1,
              }}
            >
              {step.number}
            </div>

            {/* Title */}
            <h3
              className="text-parchment mb-5 leading-snug"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '2rem',
                fontWeight: 500,
              }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-muted text-base leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="h-px bg-border mt-14" />
    </section>
  );
}
