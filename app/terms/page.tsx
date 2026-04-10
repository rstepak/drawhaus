import type { Metadata } from 'next';
import Nav from '@/components/ui/Nav';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Drawhaus',
  description:
    'Drawhaus prize competition terms and conditions. Read before entering any competition.',
};

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="py-10 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-6 md:gap-16">
        {/* Section identifier */}
        <div className="md:pt-1">
          <p
            className="text-gold leading-none"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '2rem',
              fontWeight: 300,
              fontStyle: 'italic',
              opacity: 0.7,
            }}
          >
            {number}
          </p>
          <p className="text-[10px] text-muted tracking-[0.18em] uppercase mt-2">
            {title}
          </p>
        </div>

        {/* Clauses */}
        <div className="space-y-4">{children}</div>
      </div>
    </section>
  );
}

function Clause({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p className="text-muted text-sm leading-relaxed">
      <span className="text-parchment font-medium mr-2 select-none">{id}</span>
      {children}
    </p>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />

      <main className="flex-1">
        {/* Page hero */}
        <div className="px-8 md:px-12 lg:px-20 pt-14 pb-16 md:pt-16 md:pb-20 border-b border-border">
          {/* Draft badge */}
          <div className="inline-flex items-center gap-2 border border-gold px-3 py-1.5 mb-8" style={{ borderColor: 'rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.06)' }}>
            <span className="text-gold text-[10px] tracking-[0.2em] uppercase">
              Draft — Not yet in effect
            </span>
          </div>

          <p className="text-[10px] text-gold tracking-[0.25em] uppercase mb-7">
            Legal
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
            Terms &amp;
            <br />
            Conditions.
          </h1>
          <p className="text-muted text-sm tracking-wide">
            Last updated: April 2026
          </p>
          <p className="text-muted text-xs tracking-wide mt-2 max-w-xl leading-relaxed">
            This document is a draft and has not yet been reviewed by UK legal counsel. It is provided for transparency only and is not yet in legal effect.
          </p>
        </div>

        {/* Sections */}
        <div className="px-8 md:px-12 lg:px-20 pb-20">

          <Section number="01" title="About Us">
            <Clause id="1.1">
              Drawhaus (&ldquo;Drawhaus&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a prize competition platform operated by Drawhaus Ltd, a company registered in England and Wales under company number [XXXXXXXX], with registered office at [registered address].
            </Clause>
            <Clause id="1.2">
              Our platform is available at drawhaus.co (the &ldquo;Website&rdquo;) and enables creators to list high-value personal items as competition prizes and fans to purchase tickets for a chance to win.
            </Clause>
            <Clause id="1.3">
              By accessing our Website or entering any competition, you agree to be bound by these Terms and Conditions in full.
            </Clause>
          </Section>

          <Section number="02" title="Eligibility">
            <Clause id="2.1">
              Competitions on Drawhaus are open to individuals aged 18 or over who are resident in the United Kingdom, unless stated otherwise on a specific competition page.
            </Clause>
            <Clause id="2.2">
              Residents of the United States and Canada are not eligible to enter any Drawhaus competition, whether by ticket purchase or postal entry, and are geo-blocked from accessing competition entry on our platform.
            </Clause>
            <Clause id="2.3">
              Employees of Drawhaus Ltd, creators listed on the platform, and their immediate family members are not eligible to enter any competition.
            </Clause>
            <Clause id="2.4">
              By entering a competition, you confirm that you are legally permitted to do so from your jurisdiction and that you meet the eligibility requirements set out above.
            </Clause>
            <Clause id="2.5">
              We reserve the right to verify eligibility at any stage and to disqualify any entry that does not meet these requirements, including after a draw has taken place.
            </Clause>
          </Section>

          <Section number="03" title="How to Enter">
            <Clause id="3.1">
              To enter a competition on Drawhaus you must first create a registered account.
            </Clause>
            <Clause id="3.2">
              <strong className="text-parchment font-medium">Paid Entry:</strong> Select a live competition, answer the skill question correctly, select the number of tickets you wish to purchase, and complete the checkout process. You will receive email confirmation of your entry immediately.
            </Clause>
            <Clause id="3.3">
              <strong className="text-parchment font-medium">Free Postal Entry:</strong> You may enter any live competition for free by sending a handwritten postcard or letter (mechanically produced entries will not be accepted) to the address in clause 3.4. Your entry must include: your full name, registered email address, date of birth, and the name of the specific competition you wish to enter. Only the cost of postage applies. Each valid postal entry has the same chance of winning as each purchased ticket.
            </Clause>
            <Clause id="3.4">
              Postal entries should be sent to: Drawhaus Ltd, [Registered Address], England.
            </Clause>
            <Clause id="3.5">
              Postal entries must arrive before the stated competition closing date to be valid.
            </Clause>
            <Clause id="3.6">
              A skill question is required as part of every competition entry. Only entries where the skill question has been correctly answered will be entered into the draw.
            </Clause>
          </Section>

          <Section number="04" title="Ticket Pricing and Limits">
            <Clause id="4.1">
              Ticket prices are set on a per-competition basis and displayed on each competition page.
            </Clause>
            <Clause id="4.2">
              Bulk ticket discounts may be offered on selected competitions and will be displayed at checkout.
            </Clause>
            <Clause id="4.3">
              We do not accept credit card payments exceeding £250 per month per entrant.
            </Clause>
            <Clause id="4.4">
              A maximum ticket limit per competition may apply and will be displayed on the competition page.
            </Clause>
            <Clause id="4.5">
              All ticket purchases are final. We do not offer refunds on completed entries except where a competition is cancelled by Drawhaus (see clause 7).
            </Clause>
          </Section>

          <Section number="05" title="The Draw">
            <Clause id="5.1">
              Each competition has a stated closing date. At the close of the competition, all valid entries are entered into a random draw to select the winner.
            </Clause>
            <Clause id="5.2">
              Every draw is recorded on video and made available publicly to ensure full transparency.
            </Clause>
            <Clause id="5.3">
              The decision of the draw process is final. No correspondence will be entered into regarding the outcome.
            </Clause>
            <Clause id="5.4">
              Drawhaus reserves the right to use an independent verification service to conduct or audit draws.
            </Clause>
          </Section>

          <Section number="06" title="Prize Verification and Fulfilment">
            <Clause id="6.1">
              All prizes must be physically verified and confirmed to be in the creator&rsquo;s possession before the competition is approved to go live. Drawhaus will not publish a competition until this verification is complete.
            </Clause>
            <Clause id="6.2">
              Winners will be contacted via the email address registered to their account within 48 hours of the draw.
            </Clause>
            <Clause id="6.3">
              Winners must verify their identity before the prize is released. Drawhaus reserves the right to request photo ID and proof of address.
            </Clause>
            <Clause id="6.4">
              Prizes must be claimed within 14 calendar days of winner notification. Unclaimed prizes may be forfeited and a re-draw conducted at Drawhaus&rsquo;s discretion.
            </Clause>
            <Clause id="6.5">
              Where a cash alternative is offered, this will be stated on the individual competition page. The cash value will be determined by Drawhaus in consultation with the creator at the time the competition is listed.
            </Clause>
            <Clause id="6.6">
              If we become aware that a prize has been incorrectly awarded due to an error, we reserve the right to reclaim the prize and award it to the correct recipient.
            </Clause>
          </Section>

          <Section number="07" title="Competition Cancellation">
            <Clause id="7.1">
              Drawhaus reserves the right to cancel, suspend, or modify any competition at any time at its sole discretion, including where minimum ticket thresholds are not met.
            </Clause>
            <Clause id="7.2">
              In the event of cancellation, all ticket purchasers will receive a full refund of their ticket purchase price.
            </Clause>
            <Clause id="7.3">
              Postal entrants will not receive any compensation in the event of cancellation, beyond the cost of return postage if applicable.
            </Clause>
          </Section>

          <Section number="08" title="Limitation of Liability">
            <Clause id="8.1">
              To the fullest extent permitted by law, Drawhaus&rsquo;s liability in connection with any competition is limited to the face value of the tickets purchased by the claimant.
            </Clause>
            <Clause id="8.2">
              Drawhaus accepts no liability for: (a) failure to receive entries due to technical issues; (b) errors in entries submitted by entrants; (c) any loss or damage arising from participation in a competition; (d) any delay or failure in prize delivery caused by circumstances beyond our reasonable control.
            </Clause>
            <Clause id="8.3">
              Nothing in these Terms limits liability for death, personal injury caused by negligence, or any other liability that cannot be excluded by law.
            </Clause>
          </Section>

          <Section number="09" title="Intellectual Property">
            <Clause id="9.1">
              All content on the Drawhaus website, including text, graphics, logos, and competition materials, is the property of Drawhaus Ltd or its licensors and is protected by applicable intellectual property laws.
            </Clause>
            <Clause id="9.2">
              You may not reproduce, distribute, or use any content from this site without our express written permission.
            </Clause>
          </Section>

          <Section number="10" title="Privacy">
            <Clause id="10.1">
              By entering a competition, you agree to the collection and use of your personal data in accordance with our Privacy Policy, available at drawhaus.co/privacy.
            </Clause>
            <Clause id="10.2">
              We will use your data to administer competitions, verify eligibility, contact winners, and comply with legal obligations. We will not sell your data to third parties.
            </Clause>
            <Clause id="10.3">
              Winners may be asked to participate in post-win publicity. This is optional and subject to separate consent.
            </Clause>
          </Section>

          <Section number="11" title="Governing Law">
            <Clause id="11.1">
              These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales.
            </Clause>
            <Clause id="11.2">
              Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </Clause>
          </Section>

          <Section number="12" title="Changes to These Terms">
            <Clause id="12.1">
              Drawhaus reserves the right to update these Terms and Conditions at any time. The current version will always be available at drawhaus.co/terms. Continued use of the platform following any update constitutes acceptance of the revised Terms.
            </Clause>
          </Section>

          <Section number="13" title="Contact">
            <Clause id="13.1">
              For any questions regarding these Terms or our competitions, contact us at:{' '}
              <a
                href="mailto:hello@drawhaus.co"
                className="text-gold hover:text-gold-light transition-colors"
              >
                hello@drawhaus.co
              </a>
            </Clause>
          </Section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
