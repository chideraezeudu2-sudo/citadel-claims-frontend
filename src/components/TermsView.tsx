import React from 'react';
import { BookOpen, ArrowLeft } from 'lucide-react';

interface TermsViewProps {
  onNavigate: (tab: 'home' | 'pricing' | 'success' | 'portal' | 'privacy' | 'terms') => void;
}

export default function TermsView({ onNavigate }: TermsViewProps) {
  return (
    <main className="relative pt-32 pb-24 custom-blur-bg min-h-screen flex flex-col items-center">
      <div className="max-w-4xl w-full px-6 z-10">
        
        {/* Back Button */}
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-accent-emerald transition-colors font-sans text-xs uppercase tracking-widest font-black mb-8 cursor-pointer select-none border border-white/5 bg-white/[0.02] hover:bg-accent-emerald/10 px-4 py-2 rounded-full backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        {/* Title */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2.5 bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald rounded-2xl">
              <BookOpen className="w-6 h-6 animate-pulse" />
            </span>
            <span className="font-sans text-xs text-accent-emerald tracking-widest uppercase font-extrabold">
              Service Agreement
            </span>
          </div>
          <h1 className="font-display-xl text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight leading-none">
            Terms of Service
          </h1>
          <p className="mt-4 font-sans text-xs text-zinc-500 uppercase tracking-widest font-bold">
            Effective Date: June 12, 2025
          </p>
        </div>

        {/* Content Panel */}
        <div className="bg-neutral-950 border border-white/5 p-8 sm:p-12 rounded-3xl shadow-2xl text-zinc-300 font-sans text-sm sm:text-base space-y-8 leading-relaxed">
          
          <div className="border-b border-white/10 pb-6 mb-6">
            <span className="text-white font-black uppercase text-sm tracking-widest block mb-1">
              CITADEL CLAIMS
            </span>
            <p className="text-zinc-400 font-medium font-sans">
              Professional Estimating for Independent Adjusters
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              1. Agreement
            </h2>
            <p>
              By subscribing to Citadel Claims and using our service, you agree to these Terms of Service in full. If you do not agree, do not subscribe or use the service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              2. What We Provide
            </h2>
            <p>
              Citadel Claims provides insurance estimate drafting services delivered via SMS and PDF. You submit photos and a voice note describing a claim. We return a structured, carrier-ready estimate PDF for your review.
            </p>
            <p>
              All estimates are drafts. You, as the licensed adjuster of record, are solely responsible for reviewing, approving, and submitting any estimate to a carrier. Citadel Claims is a support service, not a licensed adjusting firm.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              3. Subscription and Fees
            </h2>
            <p>
              <strong className="text-white">Setup Fee:</strong> A one-time, non-refundable setup fee of $50 is charged at the time of subscription. This fee covers account creation, number assignment, and onboarding infrastructure.
            </p>
            <p>
              <strong className="text-white">Monthly Subscription:</strong> $1,700 per month, billed on a recurring basis through Stripe.
            </p>
            <p>
              <strong className="text-white">Included Volume:</strong> Each monthly billing cycle includes up to 50 claims.
            </p>
            <p>
              <strong className="text-white">Overage Rate:</strong> Claims submitted beyond 50 in a billing cycle are charged at $75 per claim, billed at the end of the cycle.
            </p>
            <p>
              <strong className="text-white">Price Changes:</strong> We reserve the right to change our pricing with 30 days written notice via SMS or email.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              4. Refund Policy
            </h2>
            <p>
              The $50 setup fee is non-refundable under all circumstances.
            </p>
            <p>
              The $1,700 monthly subscription fee is refundable under the following conditions only:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>You request a refund within 48 hours of your billing date, AND</li>
              <li>No claims have been processed during that billing period</li>
            </ul>
            <p>
              Once a claim has been submitted and processed — meaning we have delivered an estimate PDF — the monthly fee for that period is non-refundable.
            </p>
            <p>
              Partial refunds are not available. Refund requests must be submitted to{' '}
              <a href="mailto:ops@citadelclaims.com" className="text-accent-emerald hover:underline font-bold">
                ops@citadelclaims.com
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              5. Cancellation
            </h2>
            <p>
              You may cancel your subscription at any time by texting <strong className="text-white">CANCEL</strong> to your dedicated Citadel Claims number. Cancellation takes effect at the end of your current billing period. You will retain access to your file portal and existing estimates until that date.
            </p>
            <p>
              No refund is issued for the remaining days in a billing period after cancellation unless the conditions in Section 4 are met.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              6. Your Responsibilities
            </h2>
            <p> By using Citadel Claims you agree to: </p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>Submit accurate, complete, and legally obtained photos and voice notes</li>
              <li>Review every estimate before submitting it to a carrier</li>
              <li>Use the service only for legitimate insurance claim purposes</li>
              <li>Not share your dedicated SMS number or portal link with unauthorized parties</li>
              <li>Comply with all applicable laws governing insurance adjusting in your jurisdiction</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              7. Our Responsibility and Guarantee
            </h2>
            <p>
              <strong className="text-white">Free Revision Guarantee:</strong> If an estimate we deliver is rejected by a carrier for any reason attributable to the content of our document, we will revise it free of charge with same-day priority turnaround.
            </p>
            <p>
              <strong className="text-white">48-Hour Accuracy Window:</strong> You have 48 hours after delivery to flag any errors or omissions in an estimate. Within this window, corrections are free. After 48 hours, corrections are still free but subject to standard turnaround.
            </p>
            <p>
              <strong className="text-white">Supplement Protection:</strong> If we miss a line item that was clearly visible in the photos or voice note you submitted, we will build the supplement documentation at no additional charge.
            </p>
            <p>
              <strong className="text-white">Limitations:</strong> Our guarantee applies only to errors traceable to our work product. We are not responsible for carrier rejections caused by adjuster decisions, submission errors, or policy-specific carrier requirements outside our scope of work.
            </p>
            <p>
              We are not liable for any financial loss, missed deadlines, or carrier disputes arising from the use of our estimates. Our total liability in any month is capped at the monthly subscription fee paid for that period.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              8. Intellectual Property
            </h2>
            <p>
              Estimate documents we generate for you are yours to use for their intended purpose. You may not resell, license, or distribute Citadel Claims deliverables as your own product or service.
            </p>
            <p>
              Our website, brand, copy, and systems remain the property of Citadel Claims.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              9. Acceptable Use
            </h2>
            <p> You may not use Citadel Claims to: </p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>Submit fraudulent or fabricated claim information</li>
              <li>Generate estimates for claims you are not authorized to adjust</li>
              <li>Attempt to reverse engineer or replicate our estimating process</li>
              <li>Abuse the revision or supplement guarantee through bad faith submissions</li>
            </ul>
            <p>
              We reserve the right to terminate any account we determine is being used in bad faith, without refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              10. Termination by Us
            </h2>
            <p> We reserve the right to terminate your account at any time if: </p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>Payment fails and is not resolved within 5 business days</li>
              <li>You violate these Terms of Service</li>
              <li>We determine your use of the service is fraudulent or in bad faith</li>
            </ul>
            <p>
              In the event of termination by us without cause, we will issue a prorated refund of the monthly fee for unused days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              11. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the state of Delaware, United States, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration rather than in court, except where prohibited by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              12. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Material changes will be communicated via SMS with at least 14 days notice. Continued use of the service after the effective date of changes constitutes acceptance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              13. Contact
            </h2>
            <p>
              For questions about these Terms:
              <br />
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:ops@citadelclaims.com" className="text-accent-emerald hover:underline font-bold">
                ops@citadelclaims.com
              </a>
              <br />
              <strong className="text-white">Service:</strong>{' '}
              <span className="text-zinc-400">citadelclaims.com</span>
            </p>
          </section>

        </div>

        {/* Navigation back and to privacy */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-neutral-500 font-bold">
          <span>© 2026 Citadel Claims. All Rights Reserved.</span>
          <button
            onClick={() => onNavigate('privacy')}
            className="hover:text-accent-emerald underline uppercase tracking-widest font-black cursor-pointer"
          >
            Read Privacy Policy
          </button>
        </div>

      </div>
    </main>
  );
}
