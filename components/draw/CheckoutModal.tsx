'use client';

// TODO: Replace Step 2 (payment form) entirely with Stripe Elements or Stripe Checkout redirect
// e.g. const session = await fetch('/api/checkout', { method: 'POST', body: JSON.stringify({...}) })
//      then router.push(session.url)
//
// TODO: After successful purchase (Step 3), trigger a real confirmation email via:
// POST /api/send-confirmation with { email, competitionId, ticketCount, drawDate }
// using e.g. Resend: resend.emails.send({ to: email, subject: "You're in the draw", ... })

import { useState, useEffect } from 'react';
import Link from 'next/link';
import EntryStreak, { recordEntry, getStreak } from '@/components/draw/EntryStreak';

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  competitionTitle: string
  competitionId: string
  ticketCount: number
  totalPrice: number
  totalTickets: number
  saving: number
  skillAnswered: boolean
  drawDate: string
}

type ModalStep = 'summary' | 'payment' | 'success'

export default function CheckoutModal({
  isOpen,
  onClose,
  onSuccess,
  competitionTitle,
  competitionId,
  ticketCount,
  totalPrice,
  totalTickets,
  saving,
  skillAnswered,
  drawDate,
}: CheckoutModalProps) {
  const [step, setStep] = useState<ModalStep>('summary')
  const [name, setName] = useState('')
  const [card, setCard] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [streakCount, setStreakCount] = useState(0)

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const odds = ((ticketCount / totalTickets) * 100).toFixed(2)
  const drawDateFormatted = new Date(drawDate).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  function handlePurchase() {
    // TODO: Replace with real Stripe payment intent confirmation
    // This is a mock — the payment form data is never sent anywhere
    recordEntry(competitionId) // update streak in localStorage
    const streak = getStreak()
    setStreakCount(streak.length)
    setStep('success')
    onSuccess()
  }

  const inputClass =
    'w-full bg-surface border border-border px-3 py-3 text-parchment text-[13px] placeholder:text-muted focus:outline-none focus:border-[#3a342e] transition-colors'

  const labelClass = 'text-muted text-[12px] tracking-[0.12em] uppercase mb-1.5 block'

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/70"
        style={{ backdropFilter: 'blur(4px)' }}
        onClick={step !== 'success' ? () => { onClose(); setStep('summary') } : undefined}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
        role="dialog"
        aria-modal="true"
        aria-label="Checkout"
      >
        <div
          className="w-full max-w-md bg-surface border border-border pointer-events-auto animate-scale-in"
          style={{ maxHeight: '90vh', overflowY: 'auto' }}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <p className="text-[12px] text-gold tracking-[0.2em] uppercase">
              {step === 'summary' ? 'Order summary' : step === 'payment' ? 'Payment' : 'Confirmed'}
            </p>
            {step !== 'success' && (
              <button
                onClick={() => { onClose(); setStep('summary') }}
                className="text-muted hover:text-parchment transition-colors text-lg leading-none"
                aria-label="Close"
              >
                ×
              </button>
            )}
          </div>

          <div className="px-6 py-6">
            {/* ── STEP 1: SUMMARY ── */}
            {step === 'summary' && (
              <div className="flex flex-col gap-5 animate-fade-in">
                <div>
                  <p className="text-parchment text-[15px] font-medium leading-snug mb-1">
                    {ticketCount} ticket{ticketCount !== 1 ? 's' : ''}
                  </p>
                  <p className="text-muted text-[14px]">{competitionTitle}</p>
                </div>

                <div className="flex flex-col gap-2 py-4 border-t border-b border-border">
                  <div className="flex justify-between">
                    <span className="text-muted text-[14px]">
                      {ticketCount} × £{(totalPrice / ticketCount).toFixed(2)}
                    </span>
                    <span className="text-parchment text-[14px]">
                      £{totalPrice.toFixed(2)}
                    </span>
                  </div>
                  {saving > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted text-[14px]">Bundle saving</span>
                      <span className="text-amber-400 text-[14px]">−£{saving.toFixed(0)}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="text-muted text-[14px] font-medium">Total</span>
                    <span className="text-parchment text-[14px] font-semibold">
                      £{totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted text-[13px] tracking-wide">Your odds of winning</span>
                    <span className="text-parchment text-[14px] font-medium">
                      {ticketCount} in {totalTickets} ({odds}%)
                    </span>
                  </div>
                  {skillAnswered && (
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-[13px]">✓</span>
                      <span className="text-muted text-[13px]">Answer confirmed</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setStep('payment')}
                  className="w-full py-3.5 text-[14px] tracking-[0.15em] uppercase bg-gold text-background font-semibold hover:bg-gold-light transition-colors duration-150"
                >
                  Proceed to payment
                </button>
              </div>
            )}

            {/* ── STEP 2: PAYMENT (MOCK) ── */}
            {step === 'payment' && (
              <div className="flex flex-col gap-5 animate-fade-in">
                {/* TODO: Replace this entire form with <Stripe Elements> or a Stripe Checkout redirect.
                    Card data entered here is NOT processed or stored — this is UI-only mock. */}
                <p className="text-muted text-[13px] tracking-wide">
                  Mock payment form — no real processing occurs.
                </p>

                <div>
                  <label className={labelClass}>Name on card</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="J. Smith"
                    className={inputClass}
                    autoComplete="cc-name"
                  />
                </div>

                <div>
                  <label className={labelClass}>Card number</label>
                  <input
                    type="text"
                    value={card}
                    onChange={(e) => setCard(e.target.value.replace(/\D/g, '').slice(0, 16))}
                    placeholder="4242 4242 4242 4242"
                    className={inputClass}
                    autoComplete="cc-number"
                    inputMode="numeric"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Expiry</label>
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder="MM / YY"
                      className={inputClass}
                      autoComplete="cc-exp"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>CVC</label>
                    <input
                      type="text"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="123"
                      className={inputClass}
                      autoComplete="cc-csc"
                      inputMode="numeric"
                    />
                  </div>
                </div>

                <button
                  onClick={handlePurchase}
                  className="w-full py-3.5 text-[14px] tracking-[0.15em] uppercase bg-gold text-background font-semibold hover:bg-gold-light transition-colors duration-150 animate-pulse-gold"
                >
                  Complete purchase — £{totalPrice.toFixed(2)}
                </button>

                {/* Stripe placeholder badge */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-muted text-[12px] tracking-wide">🔒 Powered by Stripe</span>
                </div>
              </div>
            )}

            {/* ── STEP 3: SUCCESS ── */}
            {step === 'success' && (
              <div className="flex flex-col items-center gap-5 py-4 animate-fade-in text-center">
                {/* CSS checkmark animation */}
                <div className="w-16 h-16 animate-scale-in">
                  <svg viewBox="0 0 52 52" fill="none" className="w-full h-full">
                    <circle
                      cx="26" cy="26" r="24"
                      stroke="rgba(201,168,76,0.3)"
                      strokeWidth="2"
                    />
                    <polyline
                      points="14,26 22,34 38,18"
                      stroke="var(--color-gold)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-checkmark"
                    />
                  </svg>
                </div>

                <div>
                  <p
                    className="text-parchment mb-1"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.75rem',
                      fontStyle: 'italic',
                      fontWeight: 300,
                    }}
                  >
                    You&apos;re in the draw.
                  </p>
                  {name && (
                    <p className="text-muted text-[13px]">
                      Good luck, {name.split(' ')[0]}.
                    </p>
                  )}
                </div>

                <div className="w-full py-4 border-t border-b border-border flex flex-col gap-2">
                  <p className="text-muted text-[13px]">
                    You hold{' '}
                    <span className="text-parchment">{ticketCount}</span> of{' '}
                    <span className="text-parchment">{totalTickets}</span> tickets —{' '}
                    <span className="text-amber-400">{odds}% chance</span>
                  </p>
                  <p className="text-muted text-[13px]">Draw closes {drawDateFormatted}</p>
                  <p className="text-muted text-[13px]">We will email you if you win.</p>
                </div>

                {/* Streak indicator */}
                {streakCount >= 2 && (
                  <div className="w-full">
                    <EntryStreak count={streakCount} />
                  </div>
                )}

                <div className="flex gap-3 w-full pt-2">
                  <Link
                    href="/account"
                    className="flex-1 py-3 text-center text-[13px] tracking-[0.12em] uppercase border border-border text-muted hover:text-parchment hover:border-[#3a342e] transition-colors"
                  >
                    My entries
                  </Link>
                  <Link
                    href="/competitions"
                    className="flex-1 py-3 text-center text-[13px] tracking-[0.12em] uppercase bg-surface-raised border border-border text-parchment hover:border-[#3a342e] transition-colors"
                  >
                    Browse more draws
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
