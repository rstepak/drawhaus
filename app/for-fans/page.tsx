import type { Metadata } from 'next';
import Nav from '@/components/ui/Nav';
import Footer from '@/components/ui/Footer';
import Accordion from '@/components/ui/Accordion';
import type { AccordionItem } from '@/components/ui/Accordion';
import OddsCalculator from '@/components/sections/OddsCalculator';

export const metadata: Metadata = {
  title: 'For Fans | Drawhaus',
  description:
    'Transparent odds, real prizes, fair draws. Here\'s exactly how Drawhaus competitions work, what your odds are, and why you can trust the process.',
};

const steps = [
  {
    number: '01',
    title: 'The prize is verified first',
    description:
      'Before any competition goes live, we confirm the item is physically in the creator\'s possession. We check provenance: box, receipt, or serial number where applicable. No competition goes live until this step is complete.',
  },
  {
    number: '02',
    title: 'Tickets go on sale',
    description:
      'Paid tickets are available to purchase on the competition page. Every competition also includes a free postal entry route. You never have to spend money to enter.',
  },
  {
    number: '03',
    title: 'You answer a skill question',
    description:
      'A skill question is required as part of every entry. This is what legally distinguishes a Drawhaus competition from a lottery under UK law.',
  },
  {
    number: '04',
    title: 'The draw closes',
    description:
      'Either when all tickets are sold or when the stated draw date is reached, whichever comes first. The competition page always shows the closing date and how many tickets remain.',
  },
  {
    number: '05',
    title: 'A live recorded draw picks the winner',
    description:
      'The winner is selected using a verified random process, conducted live on video. The full draw is recorded and published. Every entry, paid and postal, is included.',
  },
  {
    number: '06',
    title: 'The winner is contacted and verified',
    description:
      'We contact the winner directly via their registered email within 48 hours. Identity verification is required before the prize is released. The prize ships directly from the creator.',
  },
];

const trustCards = [
  {
    icon: '🔒',
    title: 'Prize Verified Before Go-Live',
    description:
      'We don\'t allow a competition to go live until we\'ve confirmed the prize exists and is in the creator\'s possession. No exceptions.',
  },
  {
    icon: '🎥',
    title: 'Live, Recorded Draw',
    description:
      'Every winner is selected on a live, recorded draw. The video is published. You can watch it. The process is the same every time.',
  },
  {
    icon: '✓',
    title: 'Independent Verification',
    description:
      'Our draw process is conducted using independently verified random selection. We don\'t pick winners manually.',
  },
  {
    icon: '⚖️',
    title: 'Skill Question Required',
    description:
      'A skill question is part of every entry. This is what keeps Drawhaus competitions legal under UK prize competition law, and what separates us from an unlicensed lottery.',
  },
];

const faqItems: AccordionItem[] = [
  {
    question: 'Can I get a refund on my tickets?',
    answer:
      'All ticket purchases are final once a competition is entered. The only exception is if Drawhaus cancels a competition, in which case all ticket purchasers receive a full refund automatically.',
  },
  {
    question: 'What happens if the competition doesn\'t sell all its tickets?',
    answer:
      'If minimum thresholds aren\'t met, Drawhaus will either extend the draw period or cancel the competition and issue full refunds. You\'ll be notified by email either way.',
  },
  {
    question: 'How do I know the draw is genuinely random?',
    answer:
      'Every draw is conducted live on video using a verified random selection process and published in full. You can watch every draw that has ever taken place on Drawhaus. If you have concerns about any specific draw result, contact us at hello@drawhaus.co.',
  },
  {
    question: 'How will I know if I\'ve won?',
    answer:
      'Winners are contacted via the email address registered to their Drawhaus account within 48 hours of the draw. Check your spam folder. You\'ll need to verify your identity before the prize is released.',
  },
  {
    question: 'Are winnings taxable?',
    answer:
      'Prize winnings from Drawhaus competitions are generally not subject to income tax in the UK. However, you\'re responsible for understanding your own tax obligations based on your circumstances. We recommend speaking to a financial adviser if you\'re unsure.',
  },
  {
    question: 'Who can enter?',
    answer:
      'UK residents aged 18 and over. US and Canadian residents cannot enter. By entering any competition you confirm you meet the eligibility requirements.',
  },
  {
    question: 'What if I don\'t receive my prize?',
    answer:
      'Contact us at hello@drawhaus.co. We take prize fulfilment seriously and will investigate and resolve any issues directly.',
  },
];

export default function ForFansPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />

      <main className="flex-1">
        {/* ─── HERO ─────────────────────────────────────────────────── */}
        <section className="px-8 md:px-12 lg:px-20 pt-14 pb-24 md:pt-16 md:pb-32 border-b border-border">
          <p className="text-[10px] text-gold tracking-[0.25em] uppercase mb-7">
            For Fans
          </p>
          <h1
            className="text-parchment leading-[1.05] mb-7"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '-0.01em',
            }}
          >
            Transparent odds.
            <br />
            Real prizes.
            <br />
            Fair draws.
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl">
            Drawhaus is a UK prize competition platform. Here&rsquo;s exactly how everything
            works, what your odds are, and why you can trust the process.
          </p>
        </section>

        {/* ─── HOW A DRAW WORKS ─────────────────────────────────────── */}
        <section className="bg-surface px-8 md:px-12 lg:px-20 py-24 md:py-32">
          <p className="text-[10px] text-muted tracking-[0.25em] uppercase mb-16">
            How a draw works
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`border-t border-border pt-10 pb-10 ${
                  i % 2 === 0 ? 'md:pr-14' : 'md:pl-14'
                } ${i < 4 ? 'md:border-b md:pb-14' : ''} ${
                  i >= 2 ? 'md:pt-14' : ''
                } ${i >= 4 ? 'md:pt-14' : ''}`}
              >
                <div
                  aria-hidden="true"
                  className="text-gold mb-8 leading-none select-none"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '5rem',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    opacity: 0.4,
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-parchment mb-5 leading-snug"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.9rem',
                    fontWeight: 500,
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-muted text-base leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="h-px bg-border mt-24" />
        </section>

        {/* ─── YOUR ODDS ────────────────────────────────────────────── */}
        <section className="bg-background px-8 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-16">
            <div className="md:pt-2">
              <p className="text-[10px] text-muted tracking-[0.22em] uppercase">
                Odds
              </p>
              <div className="h-px w-8 bg-gold mt-3" style={{ opacity: 0.5 }} />
            </div>

            <div>
              {/* Highlighted card */}
              <div
                className="border p-8 md:p-10 mb-10"
                style={{
                  borderColor: 'rgba(201,168,76,0.3)',
                  background: 'var(--color-surface)',
                }}
              >
                <h2
                  className="text-parchment leading-[1.08] mb-7"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                  }}
                >
                  What are my actual odds?
                </h2>

                <div className="space-y-5 text-muted text-base leading-relaxed">
                  <p>
                    Your odds depend entirely on how many tickets are in the draw and how many
                    you hold. We make this simple:
                  </p>
                  <p>
                    If a draw has 1,000 total tickets and you buy 1 ticket, your odds of winning
                    are{' '}
                    <span className="text-parchment">1 in 1,000, or 0.1%.</span>
                  </p>
                  <p>
                    If you buy 10 tickets in the same draw, your odds are{' '}
                    <span className="text-parchment">10 in 1,000, or 1%.</span>
                  </p>
                  <p>Every competition page shows:</p>
                  <ul className="space-y-1 pl-0">
                    <li className="flex gap-3">
                      <span className="text-gold shrink-0">·</span>
                      <span>Total tickets available</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold shrink-0">·</span>
                      <span>Tickets sold so far (updated in real time)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold shrink-0">·</span>
                      <span>
                        Your current odds (calculated automatically based on how many you&rsquo;ve
                        selected)
                      </span>
                    </li>
                  </ul>
                  <p>
                    We don&rsquo;t hide this. We don&rsquo;t bury it. Your odds are shown clearly
                    before you buy.
                  </p>
                  <p className="text-sm border-t border-border pt-5 mt-5">
                    Postal entries are included in the same draw as paid entries. A free postal
                    entry has{' '}
                    <span className="text-parchment">exactly the same chance of winning</span> as
                    a paid ticket.
                  </p>
                </div>
              </div>

              <OddsCalculator />
            </div>
          </div>

          <div className="h-px bg-border mt-24" />
        </section>

        {/* ─── FREE ENTRY ROUTE ─────────────────────────────────────── */}
        <section className="bg-surface px-8 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-16">
            <div className="md:pt-2">
              <p className="text-[10px] text-muted tracking-[0.22em] uppercase">
                Free entry
              </p>
              <div className="h-px w-8 bg-gold mt-3" style={{ opacity: 0.5 }} />
            </div>

            <div>
              <h2
                className="text-parchment leading-[1.08] mb-7"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                }}
              >
                You never have to spend money to enter.
              </h2>
              <div className="space-y-5 text-muted text-base leading-relaxed">
                <p>
                  Every single competition on Drawhaus includes a free postal entry route. This
                  is a legal requirement we take seriously, not a loophole we hide in the small
                  print.
                </p>
                <p className="text-parchment text-sm tracking-wide">
                  To enter any competition for free:
                </p>
                <ol className="space-y-3 pl-0">
                  {[
                    'Send a handwritten postcard or letter to our registered address',
                    'Include your full name, email address, date of birth, and the name of the competition',
                    'Your entry must arrive before the draw closes',
                    'Only the cost of a stamp applies',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        className="text-gold shrink-0 leading-relaxed"
                        style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}
                      >
                        {i + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div
                  className="border-l-2 pl-5 py-1 mt-6"
                  style={{ borderColor: 'rgba(201,168,76,0.4)' }}
                >
                  <p>
                    Free postal entries are entered into the same draw as paid tickets. The odds
                    are identical. There is no tier system, no separate free-entry pool, and no
                    disadvantage to entering by post.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-border mt-24" />
        </section>

        {/* ─── HOW WE KEEP IT FAIR ──────────────────────────────────── */}
        <section className="bg-background px-8 md:px-12 lg:px-20 py-24 md:py-32">
          <p className="text-[10px] text-muted tracking-[0.25em] uppercase mb-16">
            How we keep it fair
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {trustCards.map((card) => (
              <div key={card.title} className="bg-background p-8 lg:p-10">
                <div className="text-3xl mb-6 select-none" aria-hidden="true">
                  {card.icon}
                </div>
                <h3
                  className="text-parchment mb-4 leading-snug"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.6rem',
                    fontWeight: 500,
                  }}
                >
                  {card.title}
                </h3>
                <p className="text-muted text-base leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="h-px bg-border mt-24" />
        </section>

        {/* ─── IS THIS LEGAL ────────────────────────────────────────── */}
        <section className="bg-surface px-8 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-16">
            <div className="md:pt-2">
              <p className="text-[10px] text-muted tracking-[0.22em] uppercase">
                Legality
              </p>
              <div className="h-px w-8 bg-gold mt-3" style={{ opacity: 0.5 }} />
            </div>

            <div>
              <h2
                className="text-parchment leading-[1.08] mb-7"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                }}
              >
                Yes. Here&rsquo;s why.
              </h2>
              <div className="space-y-5 text-muted text-base leading-relaxed">
                <p>
                  Drawhaus operates under UK prize competition law. Our competitions are not
                  lotteries. Here&rsquo;s the difference:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border my-8">
                  <div className="bg-surface p-6">
                    <p className="text-[10px] text-muted tracking-[0.2em] uppercase mb-3">
                      A lottery
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      A game of pure chance where you pay to enter. Requires a gambling licence
                      under the Gambling Act 2005.
                    </p>
                  </div>
                  <div className="bg-surface p-6">
                    <p className="text-[10px] text-gold tracking-[0.2em] uppercase mb-3">
                      A prize competition
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      Requires skill or judgement as part of entry. With a genuine skill
                      requirement and free entry route, falls outside regulated gambling.
                    </p>
                  </div>
                </div>

                <p>
                  Drawhaus competitions require a correctly answered skill question to enter. A
                  free postal entry route is always available. Both of these are non negotiable
                  on our platform.
                </p>
                <p>
                  We are registered as a company in England and Wales. Our full terms and
                  conditions are available at{' '}
                  <a
                    href="/terms"
                    className="text-parchment underline underline-offset-4 decoration-border hover:decoration-gold transition-colors"
                  >
                    drawhaus.co/terms
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-border mt-24" />
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────────── */}
        <section className="bg-background px-8 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-16">
            <div className="md:pt-6">
              <p className="text-[10px] text-muted tracking-[0.22em] uppercase">Fan FAQ</p>
              <div className="h-px w-8 bg-gold mt-3" style={{ opacity: 0.5 }} />
            </div>
            <div>
              <Accordion items={faqItems} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
