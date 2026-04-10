'use client';

interface OddsDisplayProps {
  ticketsSelected: number
  totalTickets: number
}

export default function OddsDisplay({
  ticketsSelected,
  totalTickets,
}: OddsDisplayProps) {
  if (ticketsSelected <= 0) {
    return (
      <p className="text-muted text-[14px] tracking-wide transition-colors duration-300">
        Select tickets to see your odds
      </p>
    )
  }

  const pct = (ticketsSelected / totalTickets) * 100

  // Colour states
  let colourClass: string
  let glowClass = ''

  if (pct >= 5) {
    colourClass = 'text-amber-300'
    glowClass = 'drop-shadow-[0_0_6px_rgba(201,168,76,0.5)]'
  } else if (pct >= 2) {
    colourClass = 'text-amber-400'
  } else if (pct >= 0.5) {
    colourClass = 'text-amber-500'
  } else {
    colourClass = 'text-parchment'
  }

  return (
    <p
      className={`text-[14px] tracking-wide transition-colors duration-300 ${colourClass} ${glowClass}`}
    >
      Your odds:{' '}
      <span className="font-semibold">
        {ticketsSelected} in {totalTickets}
      </span>{' '}
      ({pct.toFixed(2)}%)
    </p>
  )
}
