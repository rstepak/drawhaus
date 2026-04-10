'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  drawDate: string // ISO date string
  compact?: boolean // compact mode: days + hours only
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

function calcTimeLeft(drawDate: string): TimeLeft {
  const diff = new Date(drawDate).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds, expired: false }
}

export default function CountdownTimer({ drawDate, compact = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calcTimeLeft(drawDate))

  useEffect(() => {
    if (timeLeft.expired) return

    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft(drawDate))
    }, 1000)

    return () => clearInterval(interval) // clean up on unmount
  }, [drawDate, timeLeft.expired])

  if (timeLeft.expired) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-muted text-[13px] tracking-[0.15em] uppercase">Draw closed</span>
      </div>
    )
  }

  const totalHours = timeLeft.days * 24 + timeLeft.hours
  const isUrgent = totalHours < 24
  const isCritical = totalHours < 1

  const urgentClass = isCritical
    ? 'text-red-400 border-red-400/30'
    : isUrgent
    ? 'text-amber-400 border-amber-400/30'
    : 'text-parchment border-border'

  const labelClass = isCritical
    ? 'text-red-400/60'
    : isUrgent
    ? 'text-amber-400/60'
    : 'text-muted'

  const boxBase = `flex flex-col items-center justify-center border ${urgentClass} ${
    compact ? 'px-2.5 py-1.5 min-w-[36px]' : 'px-3 py-2 min-w-[48px]'
  } transition-colors duration-500`

  const numClass = compact ? 'text-sm font-semibold tabular-nums leading-none' : 'text-xl font-semibold tabular-nums leading-none'
  const lbl = compact ? 'text-[10px] tracking-[0.1em] uppercase mt-0.5' : 'text-[11px] tracking-[0.12em] uppercase mt-1'

  const segments = compact
    ? [
        { value: timeLeft.days,  label: 'd' },
        { value: timeLeft.hours, label: 'h' },
      ]
    : [
        { value: timeLeft.days,    label: 'days' },
        { value: timeLeft.hours,   label: 'hrs' },
        { value: timeLeft.minutes, label: 'min' },
        { value: timeLeft.seconds, label: 'sec' },
      ]

  return (
    <div className="flex items-center gap-1.5">
      {segments.map(({ value, label }) => (
        <div key={label} className={boxBase}>
          <span className={numClass}>{String(value).padStart(2, '0')}</span>
          <span className={`${lbl} ${labelClass}`}>{label}</span>
        </div>
      ))}
    </div>
  )
}
