'use client';

// TODO: In production, viewerCount and recentEntrants should come from
// real-time Supabase subscriptions:
// e.g. supabase.channel('competition:id').on('presence', ...) for viewer count
// and supabase.from('entries').select('name').order('created_at', {ascending:false}).limit(10)
// for recent entrants

import { useState, useEffect } from 'react';

interface SocialProofProps {
  viewerCount: number
  recentEntrants: string[]
  ticketsSold: number
}

export default function SocialProof({
  viewerCount,
  recentEntrants,
  ticketsSold,
}: SocialProofProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (recentEntrants.length <= 1) return

    const interval = setInterval(() => {
      // Fade out, swap name, fade in
      setVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % recentEntrants.length)
        setVisible(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval) // clean up on unmount
  }, [recentEntrants.length])

  const currentName = recentEntrants[currentIndex]

  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-muted text-[13px] tracking-wide">
        <span className="text-parchment/80">{viewerCount}</span> people viewing this draw
      </p>

      {recentEntrants.length > 0 && (
        <p className="text-muted text-[13px] tracking-wide h-[16px]">
          <span
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.3s ease',
              display: 'inline',
            }}
          >
            <span className="text-parchment/70">{currentName}</span> just entered
          </span>
        </p>
      )}

      <p className="text-muted text-[13px] tracking-wide">
        <span className="text-parchment/80">{ticketsSold.toLocaleString('en-GB')}</span> entries so far
      </p>
    </div>
  )
}
