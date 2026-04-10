const tiles = [
  {
    title: 'Prize Verified Before Go-Live',
    description:
      'Every item is confirmed with the creator before tickets go on sale. No listing without proof of possession.',
  },
  {
    title: 'Legally Compliant',
    description:
      'Operating under UK prize competition law. A free postal entry route is always available on every draw.',
  },
  {
    title: 'Live Recorded Draw',
    description:
      'Every winner is selected on a live, recorded draw. No exceptions. Full transparency, every time.',
  },
  {
    title: 'Instant Payouts',
    description:
      'Creators receive their earnings within 5 business days of draw completion. No delays, no holdbacks.',
  },
];

export default function TrustTiles() {
  return (
    <section className="bg-background px-8 py-14 md:px-12 md:py-20 lg:px-20">
      <p className="text-xs text-muted tracking-[0.25em] uppercase mb-10">
        Why Drawhaus
      </p>

      {/* Grid — gap-px on a coloured parent creates hairline dividers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
        {tiles.map((tile) => (
          <div key={tile.title} className="bg-background p-8 lg:p-10">
            <div className="h-px w-12 bg-gold mb-6" style={{ opacity: 0.7 }} />
            <h3
              className="text-parchment mb-4 leading-snug"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '2rem',
                fontWeight: 500,
              }}
            >
              {tile.title}
            </h3>
            <p className="text-muted text-base leading-relaxed">{tile.description}</p>
          </div>
        ))}
      </div>

      <div className="h-px bg-border mt-14" />
    </section>
  );
}
