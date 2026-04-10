'use client';

import type { BulkPricingTier } from '@/lib/competitions';

interface BulkSelectorProps {
  bulkPricing: BulkPricingTier[]
  selectedIndex: number | null
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
              className={`flex flex-col items-start p-3 border text-left transition-all duration-150 ${
                isSelected
                  ? 'border-gold bg-surface-raised shadow-[0_0_0_1px_rgba(201,168,76,0.3)]'
                  : 'border-border bg-surface hover:border-[#3a342e]'
              }`}
            >
              {/* Top row: quantity label + save badge */}
              <div className="flex items-start justify-between w-full gap-1 mb-2">
                <div>
                  <span
                    className="text-parchment leading-none"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.6rem',
                      fontWeight: 400,
                    }}
                  >
                    {tier.quantity}
                  </span>
                  <span className="text-muted text-[11px] tracking-wide ml-1">
                    {tier.quantity !== 1 ? 'tickets' : 'ticket'}
                  </span>
                </div>
                {tier.saving > 0 && (
                  <span
                    className="text-[10px] tracking-[0.08em] uppercase px-1.5 py-0.5 shrink-0 mt-0.5"
                    style={{
                      background: 'rgba(245,158,11,0.12)',
                      color: 'rgb(245,158,11)',
                      border: '1px solid rgba(245,158,11,0.22)',
                    }}
                  >
                    Save £{tier.saving}
                  </span>
                )}
              </div>

              {/* Price row */}
              <span className="text-parchment text-[13px] font-medium">
                £{tier.price % 1 === 0 ? tier.price : tier.price.toFixed(2)}
              </span>
              <span className="text-muted text-[11px]">
                £{tier.pricePerTicket % 1 === 0 ? tier.pricePerTicket : tier.pricePerTicket.toFixed(2)} each
              </span>

              {/* Badges row */}
              {(tier.popular || tier.label) && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {tier.popular && (
                    <span
                      className="text-[10px] tracking-[0.1em] uppercase px-1.5 py-0.5"
                      style={{
                        background: 'rgba(201,168,76,0.12)',
                        color: 'var(--color-gold)',
                        border: '1px solid rgba(201,168,76,0.25)',
                      }}
                    >
                      Popular
                    </span>
                  )}
                  {tier.label && (
                    <span
                      className="text-[10px] tracking-[0.1em] uppercase px-1.5 py-0.5"
                      style={{
                        background: 'rgba(201,168,76,0.08)',
                        color: 'var(--color-gold-light)',
                        border: '1px solid rgba(201,168,76,0.18)',
                      }}
                    >
                      {tier.label}
                    </span>
                  )}
                </div>
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
