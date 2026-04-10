'use client';

import type { BulkPricingTier } from '@/lib/competitions';

interface OddsNudgeProps {
  ticketsSelected: number
  totalTickets: number
  ticketPrice: number
  bulkPricing: BulkPricingTier[]
}

const MILESTONES = [0.5, 1, 2, 5, 10] // percentage milestones

export default function OddsNudge({
  ticketsSelected,
  totalTickets,
  ticketPrice,
  bulkPricing,
}: OddsNudgeProps) {
  if (ticketsSelected <= 0) return null

  const currentPct = (ticketsSelected / totalTickets) * 100

  // Only show when odds < 10% — no nudge needed beyond that
  if (currentPct >= 10) return null

  // Find the next milestone above current odds
  const nextMilestone = MILESTONES.find((m) => m > currentPct)
  if (!nextMilestone) return null

  // Tickets needed to reach that milestone
  const ticketsForMilestone = Math.ceil((nextMilestone / 100) * totalTickets)
  const ticketsNeeded = ticketsForMilestone - ticketsSelected
  if (ticketsNeeded <= 0) return null

  // Check if a bulk tier efficiently covers this gap
  const coveringTier = bulkPricing
    .slice()
    .reverse() // start from largest
    .find((tier) => tier.quantity >= ticketsForMilestone && tier.saving > 0)

  // Cost to add ticketsNeeded individually
  const addOnCost = (ticketsNeeded * ticketPrice).toFixed(0)

  if (coveringTier) {
    return (
      <p className="text-muted text-[13px] tracking-wide leading-relaxed transition-all duration-300 animate-fade-in">
        {coveringTier.label ?? `${coveringTier.quantity} tickets`} gets you to {nextMilestone}% odds
        {coveringTier.saving > 0 && (
          <span className="text-amber-500/80"> — saves £{coveringTier.saving}</span>
        )}
      </p>
    )
  }

  return (
    <p className="text-muted text-[13px] tracking-wide leading-relaxed transition-all duration-300 animate-fade-in">
      Add {ticketsNeeded} more ticket{ticketsNeeded !== 1 ? 's' : ''}{' '}
      <span className="text-parchment/70">(£{addOnCost})</span> → reach {nextMilestone}% odds
    </p>
  )
}
