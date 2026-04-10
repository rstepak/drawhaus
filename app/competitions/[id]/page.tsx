// Server component — params is a Promise in Next.js 16 App Router
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/ui/Nav';
import Footer from '@/components/ui/Footer';
import { getCompetitionById, COMPETITIONS } from '@/lib/competitions';
import CompetitionDetail from './CompetitionDetail';

// TODO: Replace with Supabase fetch by id
// e.g. const { data: competition } = await supabase
//   .from('competitions').select('*').eq('id', id).single()

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return COMPETITIONS.map((c) => ({ id: c.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const competition = getCompetitionById(id)

  if (!competition) {
    return { title: 'Draw not found — Drawhaus' }
  }

  return {
    title: `${competition.title} — Drawhaus`,
    description: `Win a ${competition.title} valued at £${competition.prizeValue.toLocaleString('en-GB')}. Enter from £${competition.ticketPrice}. Draw closes ${new Date(competition.drawDate).toLocaleDateString('en-GB')}.`,
  }
}

export default async function CompetitionPage({ params }: Props) {
  const { id } = await params
  const competition = getCompetitionById(id)

  if (!competition) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />
      <main className="flex-1">
        <CompetitionDetail competition={competition} />
      </main>
      <Footer />
    </div>
  )
}
