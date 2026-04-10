const steps = [
  {
    number: '01',
    title: 'List',
    description:
      'Influencers submit their most prized personal possessions: limited editions, one of a kind pieces, and cultural artefacts with real value.',
  },
  {
    number: '02',
    title: 'Enter',
    description:
      'Fans purchase competition entries at a set price. Every ticket counts equally. No algorithms, no followers-only perks.',
  },
  {
    number: '03',
    title: 'Win',
    description:
      'A certified live draw is conducted transparently, with the full entry pool verified before the winner is revealed in real time.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-background px-8 py-24 md:px-12 md:py-32 lg:px-20">
      {/* Section label */}
      <p className="text-xs text-muted tracking-[0.25em] uppercase mb-16">
        How it works
      </p>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-border">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 border-t border-border md:border-t-0"
            style={{ borderTopWidth: i === 0 ? '1px' : undefined }}
          >
            {/* Step number */}
            <div
              className="text-gold mb-6 leading-none"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '4rem',
                fontWeight: 300,
                fontStyle: 'italic',
                opacity: 0.6,
              }}
            >
              {step.number}
            </div>

            {/* Step title */}
            <h3
              className="text-parchment mb-4 tracking-wide"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.75rem',
                fontWeight: 500,
              }}
            >
              {step.title}
            </h3>

            {/* Step description */}
            <p className="text-muted text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom rule */}
      <div className="h-px bg-border mt-24" />
    </section>
  );
}
