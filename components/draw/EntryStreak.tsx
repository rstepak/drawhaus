'use client';

// Streak tracking uses localStorage under key 'drawhaus_streak'
// Value: string[] of competition IDs entered
// TODO: Move streak tracking to user account in Supabase once auth is in place
// e.g. supabase.from('user_entries').select('competition_id').eq('user_id', userId)

const STORAGE_KEY = 'drawhaus_streak'

export function recordEntry(competitionId: string): void {
  try {
    const existing: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    if (!existing.includes(competitionId)) {
      existing.push(competitionId)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
    }
  } catch {
    // silently fail — streak is non-critical
  }
}

export function getStreak(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  } catch {
    return []
  }
}

interface EntryStreakProps {
  count: number // number of draws entered so far (including this one)
}

export default function EntryStreak({ count }: EntryStreakProps) {
  if (count < 2) return null

  if (count >= 4) {
    return (
      <div
        className="px-4 py-3 border animate-slide-up-fade"
        style={{
          borderColor: 'rgba(201,168,76,0.35)',
          background: 'rgba(201,168,76,0.06)',
        }}
      >
        <p className="text-gold text-[14px] tracking-wide">
          Priority access unlocked — you will hear about new drops first.
        </p>
      </div>
    )
  }

  if (count === 3) {
    return (
      <div className="px-4 py-3 border border-border animate-slide-up-fade">
        <p className="text-muted text-[14px] tracking-wide">
          3 draws entered — one more to unlock priority access.
        </p>
      </div>
    )
  }

  // count === 2
  return (
    <div className="px-4 py-3 border border-border animate-slide-up-fade">
      <p className="text-muted text-[14px] tracking-wide">2 draws entered.</p>
    </div>
  )
}
