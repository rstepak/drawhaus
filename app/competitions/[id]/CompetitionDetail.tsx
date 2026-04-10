'use client';

// TODO: Skill question answer validation should move to a server action / API route before launch.
// The _ci field in skillQuestion is deliberately non-descriptive, but a motivated client
// can still read it. Move to: POST /api/validate-answer { competitionId, answerIndex }
// which returns { correct: boolean } without exposing the correct index.

import { useState, useRef } from 'react';
import type { Competition } from '@/lib/competitions';
import TicketProgressBar from '@/components/draw/TicketProgressBar';
import CountdownTimer from '@/components/draw/CountdownTimer';
import SocialProof from '@/components/draw/SocialProof';
import BulkSelector from '@/components/draw/BulkSelector';
import OddsDisplay from '@/components/draw/OddsDisplay';
import OddsNudge from '@/components/draw/OddsNudge';
import DrawReminder from '@/components/draw/DrawReminder';
import CheckoutModal from '@/components/draw/CheckoutModal';

interface CompetitionDetailProps {
  competition: Competition
}

// sessionStorage key for post-purchase upsell tracking
// The upsell shows at most once per session per competition
function upsellKey(id: string) {
  return `drawhaus_upsell_dismissed_${id}`
}

export default function CompetitionDetail({ competition }: CompetitionDetailProps) {
  // Ticket selection state
  const [selectedTierIndex, setSelectedTierIndex] = useState<number | null>(null)
  const [customQty, setCustomQty] = useState(0)

  // Skill question state
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answerState, setAnswerState] = useState<'idle' | 'wrong' | 'correct'>('idle')
  const [shakeIndex, setShakeIndex] = useState<number | null>(null)

  // Checkout modal
  const [modalOpen, setModalOpen] = useState(false)

  // Post-purchase state
  const [purchaseComplete, setPurchaseComplete] = useState(false)
  // Track whether the one-time upsell has been dismissed this session
  // Derived from sessionStorage to avoid useEffect + setState pattern
  const [upsellDismissed, setUpsellDismissed] = useState(false)

  const ticketSelectorRef = useRef<HTMLDivElement>(null)

  // Effective ticket quantity from selection
  const effectiveQty =
    selectedTierIndex !== null
      ? competition.bulkPricing[selectedTierIndex].quantity
      : customQty

  // Total price
  const totalPrice =
    selectedTierIndex !== null
      ? competition.bulkPricing[selectedTierIndex].price
      : customQty * competition.ticketPrice

  // Saving from bundle (0 if custom)
  const saving =
    selectedTierIndex !== null
      ? competition.bulkPricing[selectedTierIndex].saving
      : 0

  // Whether checkout is enabled
  const canCheckout = effectiveQty > 0 && answerState === 'correct'

  // Find next upsell target: next odds milestone above current
  const currentOdds = (effectiveQty / competition.totalTickets) * 100
  const nextMilestone = [0.5, 1, 2, 5, 10].find((m) => m > currentOdds) ?? 10
  const ticketsForNextMilestone = Math.ceil((nextMilestone / 100) * competition.totalTickets)
  const upsellTicketsNeeded = Math.max(0, ticketsForNextMilestone - effectiveQty)
  const upsellCost = (upsellTicketsNeeded * competition.ticketPrice).toFixed(0)

  // Upsell is shown when: purchase complete, not dismissed, and there are tickets to add
  const showUpsell = purchaseComplete && !upsellDismissed && upsellTicketsNeeded > 0

  function handleAnswerSelect(index: number) {
    if (answerState === 'correct') return // locked once correct

    setSelectedAnswer(index)

    if (index === competition.skillQuestion._ci) {
      setAnswerState('correct')
      setShakeIndex(null)
    } else {
      setAnswerState('wrong')
      setShakeIndex(index)
      // Remove shake class after animation completes
      setTimeout(() => setShakeIndex(null), 500)
    }
  }

  function handleUpsellDismiss() {
    sessionStorage.setItem(upsellKey(competition.id), '1')
    setUpsellDismissed(true)
  }

  function handleUpsellAddTickets() {
    sessionStorage.setItem(upsellKey(competition.id), '1')
    setUpsellDismissed(true)
    // Scroll to ticket selector
    ticketSelectorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const drawDateFormatted = new Date(competition.drawDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <div className="px-8 md:px-12 lg:px-20 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-7xl mx-auto">

          {/* ── LEFT COLUMN: Prize info ── */}
          <div className="flex-1 min-w-0">
            {/* Prize image placeholder */}
            <div
              className="relative w-full bg-surface-raised border border-border overflow-hidden mb-8"
              style={{ aspectRatio: '4/3' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl opacity-10 select-none" aria-hidden="true">
                  {competition.category === 'watches' ? '⌚'
                    : competition.category === 'fashion' ? '👜'
                    : competition.category === 'sneakers' ? '👟'
                    : competition.category === 'jewellery' ? '💎'
                    : competition.category === 'electronics' ? '📱'
                    : '🏆'}
                </span>
              </div>
              {/* Subtle radial light */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.05) 0%, transparent 70%)',
                }}
              />
            </div>

            {/* Verified badge */}
            {competition.verified && (
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="text-[12px] tracking-[0.18em] uppercase text-gold px-3 py-1.5"
                  style={{
                    border: '1px solid rgba(201,168,76,0.4)',
                    background: 'rgba(201,168,76,0.06)',
                  }}
                >
                  Prize verified by Drawhaus ✓
                </span>
              </div>
            )}

            {/* Title */}
            <h1
              className="text-parchment leading-tight mb-3"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
              }}
            >
              {competition.title}
            </h1>

            {/* Creator */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 flex items-center justify-center text-[12px] font-semibold text-background shrink-0"
                style={{ background: 'var(--color-gold)' }}
              >
                {competition.creatorAvatar}
              </div>
              <span className="text-muted text-[14px] tracking-wide">{competition.creatorHandle}</span>
            </div>

            {/* Prize value */}
            <p className="text-muted text-[13px] mb-5">
              Valued at{' '}
              <span className="text-parchment font-medium">
                £{competition.prizeValue.toLocaleString('en-GB')}
              </span>
            </p>

            {/* Description */}
            <p className="text-muted text-[14px] leading-relaxed mb-8">
              {competition.description}
            </p>

            {/* Divider */}
            <div className="h-px bg-border mb-8" />

            {/* How to enter */}
            <div className="mb-8">
              <p className="text-[12px] text-gold tracking-[0.2em] uppercase mb-5">
                How to enter
              </p>
              <ol className="flex flex-col gap-3">
                {['Select your tickets', 'Answer the skill question', 'Checkout securely'].map(
                  (step, i) => (
                    <li key={step} className="flex items-center gap-4">
                      <span
                        className="w-6 h-6 flex items-center justify-center text-[13px] text-background font-semibold shrink-0"
                        style={{ background: 'var(--color-gold)', opacity: 0.7 }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-muted text-[13px]">{step}</span>
                    </li>
                  )
                )}
              </ol>
              <p className="text-muted text-[14px] mt-5">
                <a
                  href="#postal-entry"
                  className="text-muted hover:text-parchment underline underline-offset-2 transition-colors"
                >
                  Free postal entry also available
                </a>
              </p>
            </div>

            {/* Postal entry section (anchor target) */}
            <div id="postal-entry" className="pt-4">
              <div className="h-px bg-border mb-8" />
              <p className="text-[12px] text-muted tracking-[0.2em] uppercase mb-3">Free postal entry</p>
              <p className="text-muted text-[13px] leading-relaxed">
                To enter without payment, send a stamped addressed envelope with your name, email,
                and the competition ID (<span className="text-parchment">{competition.id}</span>) to
                the address on our{' '}
                <a href="/terms" className="text-muted hover:text-parchment underline underline-offset-2 transition-colors">
                  terms page
                </a>
                . Postal entries receive identical odds to paid entries.
              </p>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Purchase panel ── */}
          <div className="w-full lg:w-[42%] lg:shrink-0">
            <div className="lg:sticky lg:top-24 flex flex-col gap-0 border border-border">

              {/* Panel top — progress + countdown + social proof */}
              <div className="p-5 border-b border-border flex flex-col gap-5">
                <TicketProgressBar
                  ticketsSold={competition.ticketsSold}
                  totalTickets={competition.totalTickets}
                />
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-muted text-[12px] tracking-[0.15em] uppercase">Draw closes</p>
                    <CountdownTimer drawDate={competition.drawDate} />
                  </div>
                  <p className="text-muted text-[13px]">{drawDateFormatted}</p>
                </div>
                <SocialProof
                  viewerCount={competition.viewerCount}
                  recentEntrants={competition.recentEntrants}
                  ticketsSold={competition.ticketsSold}
                />
              </div>

              {/* Ticket selection */}
              <div className="p-5 border-b border-border" ref={ticketSelectorRef}>
                <p className="text-[12px] text-gold tracking-[0.2em] uppercase mb-4">
                  Select your tickets
                </p>

                <BulkSelector
                  bulkPricing={competition.bulkPricing}
                  selectedIndex={selectedTierIndex}
                  onSelect={(i) => {
                    if (i === -1) {
                      setSelectedTierIndex(null) // custom mode
                    } else {
                      setSelectedTierIndex(i)
                      setCustomQty(0)
                    }
                  }}
                  customQuantity={customQty}
                  onCustomChange={(qty) => {
                    setCustomQty(qty)
                    setSelectedTierIndex(null)
                  }}
                />

                {/* Live odds */}
                <div className="mt-4 flex flex-col gap-1.5">
                  <OddsDisplay
                    ticketsSelected={effectiveQty}
                    totalTickets={competition.totalTickets}
                  />
                  <OddsNudge
                    ticketsSelected={effectiveQty}
                    totalTickets={competition.totalTickets}
                    ticketPrice={competition.ticketPrice}
                    bulkPricing={competition.bulkPricing}
                  />
                </div>
              </div>

              {/* Skill question — only renders once a quantity is selected */}
              {effectiveQty > 0 && (
                <div
                  className="p-5 border-b border-border animate-slide-up-fade"
                  style={{
                    borderColor: answerState === 'correct' ? 'rgba(34,197,94,0.25)' : undefined,
                    background:
                      answerState === 'correct' ? 'rgba(34,197,94,0.03)' : undefined,
                    transition: 'border-color 0.3s ease, background 0.3s ease',
                  }}
                >
                  <p className="text-[12px] text-gold tracking-[0.2em] uppercase mb-4">
                    Answer to enter
                  </p>
                  <p className="text-parchment text-[14px] leading-snug mb-4">
                    {competition.skillQuestion.question}
                  </p>

                  <div className="flex flex-col gap-2">
                    {competition.skillQuestion.options.map((option, i) => {
                      const isSelected = selectedAnswer === i
                      const isCorrect = answerState === 'correct' && isSelected
                      const isWrong = answerState === 'wrong' && isSelected

                      return (
                        <button
                          key={option}
                          onClick={() => handleAnswerSelect(i)}
                          className={`flex items-center justify-between px-4 py-3 border text-left text-[13px] transition-all duration-150 ${
                            shakeIndex === i ? 'animate-shake' : ''
                          } ${
                            isCorrect
                              ? 'border-green-500/40 bg-green-500/5 text-green-400'
                              : isWrong
                              ? 'border-amber-500/40 bg-amber-500/5 text-amber-400'
                              : isSelected
                              ? 'border-border bg-surface-raised text-parchment'
                              : 'border-border bg-surface text-muted hover:border-[#3a342e] hover:text-parchment'
                          }`}
                        >
                          <span>{option}</span>
                          {isCorrect && (
                            <span className="text-green-400 text-[14px] animate-fade-in">✓</span>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {/* Wrong answer message — never reveals correct answer */}
                  {answerState === 'wrong' && (
                    <p className="text-muted text-[13px] mt-3 animate-fade-in">
                      Not quite — give it another try.
                    </p>
                  )}
                </div>
              )}

              {/* Checkout button + trust signals */}
              <div className="p-5 flex flex-col gap-4">
                {!purchaseComplete ? (
                  <>
                    <button
                      disabled={!canCheckout}
                      onClick={() => setModalOpen(true)}
                      className={`w-full py-4 text-[14px] tracking-[0.18em] uppercase font-semibold transition-all duration-200 ${
                        canCheckout
                          ? 'bg-gold text-background hover:bg-gold-light animate-pulse-gold cursor-pointer'
                          : 'bg-surface-raised text-muted border border-border cursor-not-allowed'
                      }`}
                    >
                      {effectiveQty > 0
                        ? `Enter Draw — £${totalPrice % 1 === 0 ? totalPrice : totalPrice.toFixed(2)}`
                        : 'Select tickets to enter'}
                    </button>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-muted text-[13px]">🔒 Secure checkout</span>
                      </div>
                      <p className="text-center text-muted text-[13px]">
                        Same odds whether you pay or post
                      </p>
                    </div>

                    <DrawReminder
                      competitionId={competition.id}
                      drawDate={competition.drawDate}
                    />
                  </>
                ) : (
                  /* Post-purchase state */
                  <div className="flex flex-col gap-4 animate-slide-up-fade">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-lg">✓</span>
                      <p className="text-parchment text-[14px] font-medium">
                        You&apos;re in the draw
                      </p>
                    </div>

                    <p className="text-muted text-[14px]">
                      Your current odds:{' '}
                      <span className="text-amber-400">
                        {((effectiveQty / competition.totalTickets) * 100).toFixed(2)}%
                      </span>
                    </p>

                    {/* One-time upsell — shown at most once per session per competition */}
                    {showUpsell && upsellTicketsNeeded > 0 && (
                      <div
                        className="flex flex-col gap-3 p-4 border border-border animate-slide-up-fade"
                        style={{ background: 'rgba(201,168,76,0.03)' }}
                      >
                        <p className="text-muted text-[14px] leading-relaxed">
                          Add {upsellTicketsNeeded} more ticket{upsellTicketsNeeded !== 1 ? 's' : ''}{' '}
                          (£{upsellCost}) and reach {nextMilestone}% odds.
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={handleUpsellAddTickets}
                            className="flex-1 py-2.5 text-[13px] tracking-[0.12em] uppercase border border-gold/40 text-gold hover:bg-gold/5 transition-colors"
                          >
                            Add tickets
                          </button>
                          <button
                            onClick={handleUpsellDismiss}
                            className="flex-1 py-2.5 text-[13px] tracking-[0.12em] uppercase border border-border text-muted hover:text-parchment hover:border-[#3a342e] transition-colors"
                          >
                            No thanks
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout modal */}
      <CheckoutModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={() => {
          setModalOpen(false)
          setPurchaseComplete(true)
        }}
        competitionTitle={competition.title}
        competitionId={competition.id}
        ticketCount={effectiveQty}
        totalPrice={totalPrice}
        totalTickets={competition.totalTickets}
        saving={saving}
        skillAnswered={answerState === 'correct'}
        drawDate={competition.drawDate}
      />
    </>
  )
}
