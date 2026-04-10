import type { Metadata } from 'next';
import Nav from '@/components/ui/Nav';
import Footer from '@/components/ui/Footer';
import Accordion from '@/components/ui/Accordion';
import type { AccordionItem } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'How It Works | Drawhaus',
  description:
    'Everything you need to know about entering Drawhaus prize competitions, from buying tickets to the live draw and claiming your prize.',
};

const sections: { category: string; items: AccordionItem[] }[] = [
  {
    category: 'How It Works',
    items: [
      {
        question: 'How does Drawhaus work?',
        answer:
          'Drawhaus is a UK prize competition platform where creators and influencers list high-value personal items as prizes. Fans purchase tickets for a chance to win. When the draw closes, a live recorded draw selects the winner at random. Every competition includes a free postal entry route, so no purchase is ever necessary to enter.',
      },
      {
        question: 'Who can enter?',
        answer:
          'Drawhaus competitions are open to UK residents aged 18 and over. By entering, you confirm you are legally permitted to participate from your location. Residents of the United States and Canada are not eligible to purchase tickets or enter any Drawhaus competition. We reserve the right to verify eligibility before awarding any prize.',
      },
      {
        question: 'Do I have to buy tickets to enter?',
        answer:
          'No. Every Drawhaus competition includes a free postal entry route. To enter for free, send a handwritten postcard or letter (no mechanically produced entries) to our registered address, clearly stating your full name, email address, date of birth, and the specific competition you wish to enter. Postal entries have exactly the same chance of winning as purchased tickets. Only the cost of postage applies. No purchase necessary.',
      },
      {
        question: 'Is Drawhaus legal?',
        answer:
          'Yes. Drawhaus operates under UK prize competition law. Our competitions are structured as skill based competitions, not lotteries, which means they fall outside the regulated gambling framework under the Gambling Act 2005. A skill question is required as part of entry. A genuine free postal entry route is always available. We are registered as a company in England and Wales.',
      },
      {
        question: 'How do I enter a competition?',
        answer:
          'Create an account, browse open draws, select a competition, answer the skill question correctly, and complete your purchase. You\'ll receive an email confirming your entry immediately. All your entries are visible in your account under My Competitions.',
      },
      {
        question: 'Do I need an account?',
        answer:
          'Yes. You must have a registered Drawhaus account to enter any competition, whether you\'re purchasing tickets or submitting a postal entry.',
      },
    ],
  },
  {
    category: 'Tickets & Pricing',
    items: [
      {
        question: 'How much do tickets cost?',
        answer:
          'Ticket prices vary depending on the prize value and are set by the creator listing the competition. Prices typically range from £5 to £25 per ticket. The specific price for each competition is shown on the competition page before you enter.',
      },
      {
        question: 'Can I buy multiple tickets?',
        answer:
          'Yes. You can purchase multiple tickets to increase your chances of winning. Bulk purchase discounts may be available on selected competitions. These will be shown at checkout.',
      },
      {
        question: 'Is there a ticket limit?',
        answer:
          'Ticket limits per competition vary and are set at the time the competition is created. The maximum available tickets and current tickets sold are displayed on each competition page in real time.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major debit and credit cards. Please note we do not accept credit card payments exceeding £250 per month per player in line with industry good practice guidelines. We do not accept cash or payment by bank transfer.',
      },
      {
        question: 'Will I get a confirmation when I enter?',
        answer:
          'Yes. You\'ll receive an email confirmation immediately after completing your entry. If it\'s your first time entering, you\'ll also receive a welcome email with your account details.',
      },
    ],
  },
  {
    category: 'The Draw',
    items: [
      {
        question: 'How is the winner selected?',
        answer:
          'When a competition closes, the winner is selected by a verified random draw process. Every draw is recorded on video and published so the result is fully transparent and auditable. The result is final.',
      },
      {
        question: 'When does each competition close?',
        answer:
          'Each competition has a closing date displayed on its individual competition page with a live countdown. You can also view the status of competitions you\'ve entered in your account under My Competitions.',
      },
      {
        question: "What happens if a competition doesn't sell enough tickets?",
        answer:
          'If minimum ticket thresholds are not met before the stated draw date, Drawhaus reserves the right to either extend the competition period or issue full refunds to all ticket purchasers. This will be communicated to entrants via email.',
      },
      {
        question: "What happens if there's a tie?",
        answer:
          'In the event that a random draw produces an error or the integrity of a draw is questioned, Drawhaus reserves the right to conduct a re-draw. The decision of Drawhaus and our independent draw verification process is final.',
      },
    ],
  },
  {
    category: 'Prizes & Winners',
    items: [
      {
        question: 'How do I claim my prize?',
        answer:
          'Winners are contacted directly via the email address registered to their account within 48 hours of the draw. You will be required to verify your identity before the prize is released. Prizes must be claimed within 14 days of notification.',
      },
      {
        question: 'Are prizes verified before the draw goes live?',
        answer:
          "Yes. Every prize must be physically verified and confirmed to be in the creator's possession before a competition is approved and made live on the platform. We do not allow draws to go live until this verification step is complete. This is a non negotiable part of how Drawhaus operates.",
      },
      {
        question: 'Are prizes taxable?',
        answer:
          'Prize winnings from Drawhaus competitions are not subject to income tax in the UK. However, it is your responsibility to check your own tax obligations based on your country of residence. Drawhaus accepts no liability for any tax implications arising from prize receipt.',
      },
      {
        question: 'Can I take a cash alternative?',
        answer:
          'Whether a cash alternative is available will be stated on the individual competition page. Not all competitions will offer a cash alternative. This is at the discretion of the creator listing the prize.',
      },
      {
        question: "What if I don't receive my prize?",
        answer:
          "If you haven't received your prize within the timeframe communicated to you, contact us at hello@drawhaus.co. We take fulfilment seriously and will investigate and resolve any issues promptly.",
      },
    ],
  },
  {
    category: 'Creators & Listings',
    items: [
      {
        question: 'How do I list a prize as a creator?',
        answer:
          "Join the Drawhaus waitlist and we'll be in touch when creator onboarding opens. You'll need to verify your identity, provide proof that the item is in your possession, and agree to our creator terms before any competition goes live.",
      },
      {
        question: 'How does creator payment work?',
        answer:
          'Once the draw closes and the winner is confirmed, creators receive their earnings (ticket revenue minus the Drawhaus platform fee) within a specified number of business days. Full payment terms are outlined in the creator agreement.',
      },
      {
        question: 'What can I list as a prize?',
        answer:
          'Any high-value personal item in good condition. Common categories include watches, handbags, jewellery, streetwear, electronics, and accessories. All items are subject to Drawhaus approval before going live.',
      },
      {
        question: 'What is the Drawhaus platform fee?',
        answer:
          'The platform fee is a percentage of gross ticket revenue and is deducted before creator payout. The specific fee is outlined in your creator agreement. There are no upfront listing fees.',
      },
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />

      <main className="flex-1">
        {/* Page hero */}
        <div className="px-8 md:px-12 lg:px-20 pt-14 pb-20 md:pt-16 md:pb-24 border-b border-border">
          <p className="text-[10px] text-gold tracking-[0.25em] uppercase mb-7">
            UK Prize Competitions
          </p>
          <h1
            className="text-parchment leading-[1.05] mb-6"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '-0.01em',
            }}
          >
            Everything you need
            <br />
            to know.
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-lg">
            How Drawhaus works, what your rights are as an entrant, and how
            prizes are verified and awarded, all in one place.
          </p>
        </div>

        {/* FAQ sections */}
        <div className="px-8 md:px-12 lg:px-20">
          {sections.map((section, i) => (
            <div
              key={section.category}
              className="py-16 md:py-20 border-b border-border last:border-b-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-16">
                {/* Category label */}
                <div className="md:pt-6">
                  <p className="text-[10px] text-muted tracking-[0.22em] uppercase">
                    {section.category}
                  </p>
                  <div className="h-px w-8 bg-gold mt-3" style={{ opacity: 0.5 }} />
                </div>

                {/* Accordion */}
                <div>
                  <Accordion items={section.items} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
