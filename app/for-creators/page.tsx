import type { Metadata } from 'next';
import Nav from '@/components/ui/Nav';
import Footer from '@/components/ui/Footer';
import Accordion from '@/components/ui/Accordion';
import type { AccordionItem } from '@/components/ui/Accordion';
import EarningsCalculator from '@/components/sections/EarningsCalculator';
import CreatorApplicationForm from '@/components/sections/CreatorApplicationForm';

export const metadata: Metadata = {
  title: 'For Creators — Drawhaus',
  description:
    'Turn high-value personal items into prize draws and keep the profit. No brand deal required. Here\'s how Drawhaus works for creators.',
};

const steps = [
  {
    number: '01',
    title: 'Submit your item',
    description:
      'Tell us what you want to list. We\'ll review it for eligibility — it needs to be a genuine high-value personal item you own, in good condition, with verifiable provenance (box, receipt, or serial number). Most items are approved within 48 hours.',
  },
  {
    number: '02',
    title: 'We verify and set up your draw',
    description:
      'Before anything goes live, we verify the item is in your possession. You\'ll hold onto it until the draw closes. We set your ticket price, total ticket quantity, and draw date. Every competition also includes a free postal entry route as required by UK prize competition law.',
  },
  {
    number: '03',
    title: 'Your audience buys tickets',
    description:
      'Your draw goes live on Drawhaus. You share it with your audience however you want — Stories, posts, TikToks, YouTube — it\'s your channel, your audience, your call. Ticket sales run until the draw date or until all tickets are sold.',
  },
  {
    number: '04',
    title: 'Draw closes, you get paid',
    description:
      'A live recorded draw selects the winner. You ship the item directly to them. Drawhaus transfers your earnings — total ticket revenue minus our platform fee — within 5 business days of draw completion.',
  },
];

const handles = [
  {
    icon: '🔍',
    title: 'Prize Verification',
    description:
      'We confirm the item is real and in your possession before the draw goes live. This protects you as much as it protects your fans.',
  },
  {
    icon: '🎥',
    title: 'The Draw',
    description:
      'Every draw is live, recorded, and independently verified. You never have to worry about credibility — the process speaks for itself.',
  },
  {
    icon: '💳',
    title: 'Payments & Compliance',
    description:
      'We handle ticket payments, payouts, and ensure every competition meets UK prize competition law requirements including the free postal entry route.',
  },
];

const faqItems: AccordionItem[] = [
  {
    question: 'What items can I list?',
    answer:
      'Any genuine high-value personal item you own. Watches, designer handbags, rare sneakers, jewellery, high-end electronics, limited streetwear. Items must be in good condition with verifiable provenance. We don\'t accept cash, experiences, or items you don\'t currently possess.',
  },
  {
    question: 'How is my payment protected?',
    answer:
      'Ticket revenue is held by Drawhaus until the draw completes and the winner is confirmed. Your payout is transferred within 5 business days of draw completion. If a draw doesn\'t meet minimum ticket thresholds, all ticket buyers are refunded and you keep your item.',
  },
  {
    question: 'What if my draw doesn\'t sell all the tickets?',
    answer:
      'You set a minimum ticket threshold with us when listing. If that threshold isn\'t met by the draw date, we either extend the draw period or issue full refunds to ticket buyers and return the item to you. You\'re never forced to give away an item that didn\'t generate enough interest.',
  },
  {
    question: 'What is the platform fee?',
    answer:
      '15% of gross ticket revenue. No listing fee. No upfront costs. We only make money when you do.',
  },
  {
    question: 'Can I promote my draw however I want?',
    answer:
      'Yes. It\'s your audience and your channels. We\'ll provide you with a draw link, assets, and a description you can customise. The only requirement is that all promotion complies with ASA guidelines — competitions must be clearly identified as paid-entry competitions with a free entry route available.',
  },
  {
    question: 'How does the free postal entry route work?',
    answer:
      'UK prize competition law requires that a free entry route is always available alongside paid ticket purchase. We manage this entirely — fans can enter by post, and those entries are included in the draw alongside paid entries. You don\'t need to do anything differently.',
  },
];

export default function ForCreatorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />

      <main className="flex-1">
        {/* ─── HERO ─────────────────────────────────────────────────── */}
        <section className="px-8 md:px-12 lg:px-20 pt-14 pb-24 md:pt-16 md:pb-32 border-b border-border">
          <p className="text-[10px] text-gold tracking-[0.25em] uppercase mb-7">
            For Creators
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
            Your audience.
            <br />
            Your item.
            <br />
            Your payday.
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Drawhaus lets you turn high-value personal items into competition prizes — and keep
            the profit. No brand deal required.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 border border-border text-parchment text-xs tracking-[0.18em] uppercase px-6 py-3.5 transition-colors hover:border-gold hover:text-gold"
          >
            Apply to list a prize →
          </a>
        </section>

        {/* ─── HOW IT WORKS ─────────────────────────────────────────── */}
        <section className="bg-surface px-8 md:px-12 lg:px-20 py-24 md:py-32">
          <p className="text-[10px] text-muted tracking-[0.25em] uppercase mb-16">
            How it works for creators
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`border-t border-border pt-10 pb-10 ${
                  i % 2 === 0 ? 'md:pr-14' : 'md:pl-14'
                } ${i < 2 ? 'md:border-b md:pb-14' : ''} ${
                  i >= 2 ? 'md:pt-14' : ''
                }`}
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

        {/* ─── THE MATHS ────────────────────────────────────────────── */}
        <section className="bg-background px-8 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 mb-16">
            <div>
              <p className="text-[10px] text-muted tracking-[0.25em] uppercase mb-4">
                The maths
              </p>
              <div className="h-px w-8 bg-gold" style={{ opacity: 0.5 }} />
            </div>
            <div>
              <h2
                className="text-parchment leading-[1.08]"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                }}
              >
                Adjust the numbers.
                <br />
                See what you walk away with.
              </h2>
            </div>
          </div>

          <EarningsCalculator />

          <div className="h-px bg-border mt-24" />
        </section>

        {/* ─── WHAT WE HANDLE ───────────────────────────────────────── */}
        <section className="bg-surface px-8 md:px-12 lg:px-20 py-24 md:py-32">
          <p className="text-[10px] text-muted tracking-[0.25em] uppercase mb-16">
            What Drawhaus handles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {handles.map((item) => (
              <div key={item.title} className="bg-surface p-8 lg:p-10">
                <div className="text-3xl mb-6 select-none" aria-hidden="true">
                  {item.icon}
                </div>
                <h3
                  className="text-parchment mb-4 leading-snug"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.6rem',
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-muted text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="h-px bg-border mt-24" />
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────────── */}
        <section className="bg-background px-8 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-16">
            <div className="md:pt-6">
              <p className="text-[10px] text-muted tracking-[0.22em] uppercase">
                Creator FAQ
              </p>
              <div className="h-px w-8 bg-gold mt-3" style={{ opacity: 0.5 }} />
            </div>
            <div>
              <Accordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* ─── BOTTOM CTA ───────────────────────────────────────────── */}
        <section
          id="apply"
          className="bg-surface border-t border-border px-8 md:px-12 lg:px-20 py-24 md:py-32"
        >
          <p className="text-[10px] text-gold tracking-[0.25em] uppercase mb-7">
            Apply to list
          </p>
          <h2
            className="text-parchment leading-[1.08] mb-6 max-w-2xl"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '-0.01em',
            }}
          >
            Ready to list your first prize?
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-lg mb-10">
            We&rsquo;re onboarding a small number of creators for our launch cohort. Apply now
            and we&rsquo;ll be in touch.
          </p>
          <CreatorApplicationForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
