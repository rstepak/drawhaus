'use client';

import type { BulkPricingTier } from '@/lib/competitions';

interface BulkSelectorProps {
  bulkPricing: BulkPricingTier[]
  selectedIndex: number | null // index into bulkPricing, or null if custom
  onSelect: (index: number) => void
  customQuantity: number
  onCustomChange: (qty: number) => void
}

export default function BulkSelector({
  bulkPricing,
  selectedIndex,
  onSelect,
  customQuantity,
  onCustomChange,
}: BulkSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Tier grid — 2×2 */}
      <div className="grid grid-cols-2 gap-2">
        {bulkPricing.map((tier, i) => {
          const isSelected = selectedIndex === i
          return (
            <button
              key={tier.quantity}
              onClick={() => onSelect(i)}
              className={`relative flex flex-col items-start p-3 border text-left transition-all duration-150 ${
                isSelected
                  ? 'border-gold bg-surface-raised shadow-[0_0_0_1px_rgba(201,168,76,0.3)] translate-y-[-1px]'
                  : 'border-border bg-surface hover:border-[#3a342e]'
              }`}
            >
              {/* Badges */}
              <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                {tier.popular && (
                  <span
                    className="text-[11px] tracking-[0.12em] uppercase px-1.5 py-0.5"
                    style={{
                      background: 'rgba(201,168,76,0.15)',
                      color: 'var(--color-gold)',
                      border: '1px solid rgba(201,168,76,0.3)',
                    }}
                  >
                    Popular
                  </span>
                )}
                {tier.label && (
                  <span
                    className="text-[11px] tracking-[0.12em] uppercase px-1.5 py-0.5"
                    style={{
                      background: 'rgba(201,168,76,0.1)',
                      color: 'var(--color-gold-light)',
                      border: '1px solid rgba(201,168,76,0.2)',
                    }}
                  >
                    {tier.label}
                  </span>
                )}
              </div>

              {/* Ticket count */}
              <span
                className="text-parchment leading-none mb-1"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                }}
              >
                {tier.quantity}
              </span>
              <span className="text-muted text-[12px] tracking-wide mb-2">
                ticket{tier.quantity !== 1 ? 's' : ''}
              </span>

              {/* Price */}
              <span className="text-parchment text-[13px] font-medium">
                £{tier.price % 1 === 0 ? tier.price : tier.price.toFixed(2)}
              </span>
              <span className="text-muted text-[12px]">
                £{tier.pricePerTicket % 1 === 0 ? tier.pricePerTicket : tier.pricePerTicket.toFixed(2)} / ticket
              </span>

              {/* Saving badge */}
              {tier.saving > 0 && (
                <span
                  className="absolute top-2 right-2 text-[11px] tracking-[0.1em] uppercase px-1.5 py-0.5"
                  style={{
                    background: 'rgba(245,158,11,0.15)',
                    color: 'rgb(245,158,11)',
                    border: '1px solid rgba(245,158,11,0.25)',
                  }}
                >
                  Save £{tier.saving}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Custom quantity input */}
      <div className="flex items-center gap-3">
        <label className="text-muted text-[13px] tracking-[0.1em] uppercase shrink-0">
          Custom
        </label>
        <input
          type="number"
          min={1}
          max={999}
          value={customQuantity || ''}
          placeholder="e.g. 3"
          onChange={(e) => {
            const val = parseInt(e.target.value, 10)
            if (!isNaN(val) && val > 0) {
              onCustomChange(val)
            } else if (e.target.value === '') {
              onCustomChange(0)
            }
          }}
          onFocus={() => {
            // Deselect tier when typing custom
            if (selectedIndex !== null) onSelect(-1)
          }}
          className={`flex-1 bg-surface border px-3 py-2 text-parchment text-[14px] placeholder:text-muted focus:outline-none transition-colors duration-150 ${
            selectedIndex === null && customQuantity > 0
              ? 'border-gold'
              : 'border-border focus:border-[#3a342e]'
          }`}
        />
      </div>
    </div>
  )
}
