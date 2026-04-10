'use client';

// TODO: Connect to email/notification system
// In production, POST to /api/reminders with { competitionId, email, drawDate }
// which triggers a scheduled email 24 hours before draw close via e.g. Resend or SendGrid

import { useState } from 'react';

interface DrawReminderProps {
  competitionId: string
  drawDate: string
}

const STORAGE_KEY = 'drawhaus_reminders'

function getStoredReminders(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

export default function DrawReminder({ competitionId, drawDate }: DrawReminderProps) {
  const [phase, setPhase] = useState<'idle' | 'input' | 'confirmed'>(() => {
    // Lazy initializer — safe on SSR because useState initializers only run on client
    if (typeof window === 'undefined') return 'idle'
    const stored = getStoredReminders()
    return stored[competitionId] ? 'confirmed' : 'idle'
  })
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function handleConfirm() {
    if (!email.includes('@')) {
      setError('Please enter a valid email.')
      return
    }

    // Store in localStorage
    // TODO: Replace with API call to schedule actual email reminder
    const reminders = getStoredReminders()
    reminders[competitionId] = email
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders))

    setPhase('confirmed')
    setError('')
  }

  const drawDateFormatted = new Date(drawDate).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  if (phase === 'confirmed') {
    return (
      <p className="text-muted text-[13px] tracking-wide animate-fade-in">
        We will remind you before the draw closes on {drawDateFormatted}.
      </p>
    )
  }

  if (phase === 'input') {
    return (
      <div className="flex flex-col gap-2 animate-slide-up-fade">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            placeholder="your@email.com"
            onChange={(e) => { setEmail(e.target.value); setError('') }}
            onKeyDown={(e) => e.key === 'Enter' && handleConfirm()}
            autoFocus
            className="flex-1 bg-surface border border-border px-3 py-2 text-parchment text-[14px] placeholder:text-muted focus:outline-none focus:border-[#3a342e] transition-colors"
          />
          <button
            onClick={handleConfirm}
            className="text-[13px] tracking-[0.1em] uppercase px-4 py-2 bg-surface-raised border border-border text-parchment hover:border-[#3a342e] transition-colors"
          >
            Set
          </button>
        </div>
        {error && <p className="text-amber-500 text-[10px]">{error}</p>}
        <p className="text-muted text-[10px] tracking-wide">
          We will email you 24 hours before this draw closes.
        </p>
      </div>
    )
  }

  return (
    <button
      onClick={() => setPhase('input')}
      className="text-muted text-[13px] tracking-wide hover:text-parchment transition-colors text-left"
    >
      Remind me before this closes
    </button>
  )
}
