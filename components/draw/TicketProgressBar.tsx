'use client';

interface TicketProgressBarProps {
  ticketsSold: number
  totalTickets: number
  compact?: boolean
}

export default function TicketProgressBar({
  ticketsSold,
  totalTickets,
  compact = false,
}: TicketProgressBarProps) {
  const pct = Math.min(100, Math.round((ticketsSold / totalTickets) * 100))
  const almostFull = pct > 80
  const lastFew = pct > 95

  // Colour transitions based on fill level
  const barColour =
    pct > 80
      ? 'bg-amber-500' // urgent warm tone
      : 'bg-amber-400' // standard amber

  return (
    <div className={compact ? 'flex flex-col gap-1' : 'flex flex-col gap-2'}>
      {/* Progress bar */}
      <div
        className={`w-full bg-surface-raised overflow-hidden ${compact ? 'h-[3px]' : 'h-[5px]'}`}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full ${barColour} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Label row */}
      <div className="flex items-center justify-between">
        <span className={`text-muted ${compact ? 'text-[12px]' : 'text-[13px]'} tracking-wide`}>
          {ticketsSold.toLocaleString('en-GB')} of {totalTickets.toLocaleString('en-GB')} tickets claimed
        </span>

        {lastFew ? (
          <span className="text-amber-400 text-[12px] tracking-[0.12em] uppercase animate-pulse-soft">
            Last few remaining
          </span>
        ) : almostFull ? (
          <span className="text-amber-400 text-[12px] tracking-[0.12em] uppercase animate-pulse-soft">
            Almost full
          </span>
        ) : null}
      </div>
    </div>
  )
}
