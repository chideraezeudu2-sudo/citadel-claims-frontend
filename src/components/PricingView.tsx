import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Lock, ShieldAlert, Phone } from 'lucide-react';

interface PricingViewProps {
  onNavigate: (tab: 'home' | 'pricing' | 'success' | 'portal' | 'privacy' | 'terms') => void;
  mobileNumber: string;
  setMobileNumber: (num: string) => void;
  setIsAuthenticated: (val: boolean) => void;
  setPortalToken: (token: string) => void;
}

const API_BASE = import.meta.env.VITE_API_URL || 'https://citadel-claims-backend.onrender.com';

export default function PricingView({
  onNavigate,
  mobileNumber,
  setMobileNumber,
  setIsAuthenticated,
  setPortalToken,
}: PricingViewProps) {
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Elegant feature list matching the screenshot exactly
  const features = [
    '50 claims per month',
    '$75 overage rate',
    'Same-day PDF delivery',
    'Unlimited free revisions',
    'Accuracy correction',
    'Supplement protection',
    'Confidence scoring',
    'SMS-integrated workflow',
    'Dedicated adjuster line',
    'Weekly performance summary',
    'Adjuster checklist library',
    '24-hr turnaround guarantee',
  ];

  // Auto formats phone numbers as (555) 555-5555
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    // Clear error
    if (error) setError('');

    // Remove non-numeric characters
    const numbersOnly = input.replace(/\D/g, '');
    
    // Format if possible or just store
    if (numbersOnly.length === 0) {
      setMobileNumber('');
      return;
    }

    let formatted = '';
    if (numbersOnly.length <= 3) {
      formatted = `+1 (${numbersOnly}`;
    } else if (numbersOnly.length <= 6) {
      formatted = `+1 (${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(3)}`;
    } else {
      formatted = `+1 (${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(3, 6)}-${numbersOnly.slice(6, 10)}`;
    }
    setMobileNumber(formatted.slice(0, 18));
  };

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if empty or is a mock demo
    const digitsOnly = mobileNumber.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Call backend to create Stripe checkout session
      const response = await fetch(`${API_BASE}/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: digitsOnly })
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url;
      } else {
        setError(data.detail || 'Failed to create checkout session. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError('Connection error. Please check your internet and try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative pt-32 pb-24 custom-blur-bg min-h-screen flex flex-col items-center">
      
      {/* HEADER HERO */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 z-10">
        <span className="inline-block font-sans text-xs text-accent-emerald tracking-widest uppercase mb-6 font-extrabold bg-accent-emerald/10 border border-accent-emerald/20 py-2 px-4 rounded-full">
          Simple Pricing
        </span>
        <h1 className="font-display-xl text-4xl sm:text-5xl md:text-6xl text-white font-extrabold mb-6 tracking-tight leading-none">
          One plan.<br />No surprises.
        </h1>
        <p className="max-w-xl mx-auto font-sans text-base sm:text-lg text-muted-text leading-relaxed">
          Uncompromising precision for independent adjusters. No tiered complexity—just the full authority of Citadel Claims in one single, high-performance plan.
        </p>
      </div>

      {/* REASSURANCE BADGES (Horizontal - Sans-serif) */}
      <div className="max-w-4xl mx-auto px-6 mb-12 flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 text-on-surface-variant z-10">
        <div className="flex items-center gap-2.5">
          <Check className="w-5 h-5 text-accent-emerald stroke-[3.5]" />
          <span className="font-sans text-xs uppercase tracking-wide font-extrabold">No sales call</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Check className="w-5 h-5 text-accent-emerald stroke-[3.5]" />
          <span className="font-sans text-xs uppercase tracking-wide font-extrabold">$50 setup fee</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Check className="w-5 h-5 text-accent-emerald stroke-[3.5]" />
          <span className="font-sans text-xs uppercase tracking-wide font-extrabold">Cancel by text</span>
        </div>
      </div>

      {/* PRICING CARD MAIN */}
      <section className="w-full max-w-2xl px-6 z-10">
        <div className="glowing-card rounded-2xl p-6 sm:p-10 md:p-12 border border-surface-border">
          
          {/* Card Header */}
          <div className="flex flex-col items-center text-center border-b border-surface-border/50 pb-10 mb-10">
            <div className="font-sans text-[11px] tracking-[0.25em] text-accent-emerald uppercase mb-8 font-extrabold">
              CITADEL CLAIMS EXECUTIONS
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display-xl text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter">
                $1,700
              </span>
              <span className="font-sans text-lg text-muted-text font-bold">
                /mo
              </span>
            </div>
            <p className="mt-4 text-xs font-sans text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/20 px-4 py-1.5 rounded-full font-black uppercase tracking-wider select-none">
              + $50 SETUP FEE
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="mt-0.5 relative flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-emerald stroke-[3] group-hover:scale-125 transition-transform" />
                </div>
                <span className="text-[14.5px] font-sans text-on-surface hover:text-white transition-colors font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Form */}
          <form onSubmit={handleContinue} className="mt-12 border-t border-surface-border/40 pt-10">
            <div className="mb-8 relative">
              <label 
                htmlFor="mobile-input" 
                className="block font-sans text-xs text-on-surface-variant uppercase tracking-widest font-black mb-3"
              >
                Your Mobile Number
              </label>

              <div className="relative">
                <input
                  id="mobile-input"
                  type="tel"
                  required
                  value={mobileNumber}
                  onChange={handlePhoneChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-surface-container-lowest border-x-0 border-t-0 border-b-2 border-surface-border pt-4 pb-3 px-1 font-sans text-base sm:text-lg focus:ring-0 focus:border-accent-emerald transition-colors text-white placeholder:text-neutral-700 font-bold outline-hidden tracking-widest"
                />
                <Phone className="absolute right-2 bottom-3.5 w-5 h-5 text-neutral-600 pointer-events-none" />
              </div>

              {error && (
                <div className="mt-3 flex items-center gap-2 text-red-400 text-xs font-sans font-bold">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <p className="mt-4 font-sans text-xs sm:text-sm text-neutral-500 italic">
                You'll be redirected to secure payment.
              </p>
            </div>

            {/* CTA action Button Styled as Glass Morphism / Water droplet rounded pill */}
            <button
               type="submit"
               disabled={isSubmitting}
               className="glass-button-primary block w-full py-5 sm:py-6 rounded-full hover:scale-[1.02] active:scale-98 transition-all duration-200 uppercase tracking-widest text-xs font-extrabold relative cursor-pointer"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>SECURE GATEWAY LOADING...</span>
                </span>
              ) : (
                'Continue to Payment'
              )}
            </button>

            {/* Refund and Setup Fee disclosures placed neatly below the button */}
            <div className="mt-4 text-center">
              <p className="text-[11px] font-sans text-neutral-400 font-medium leading-relaxed">
                The <span className="font-bold text-white">$50 setup fee is non-refundable</span>. 
                The monthly subscription is refundable within 48 hours of billing if no claims have been processed (refer to Section 4 of our <button type="button" onClick={() => onNavigate('terms')} className="underline hover:text-accent-emerald font-semibold transition-colors">Terms of Service</button>).
              </p>
            </div>
          </form>

          {/* Bottom Reassurance without Stripe names */}
          <div className="mt-8 text-center space-y-3">
            <p className="font-sans text-xs sm:text-sm text-muted-text font-medium">
              Cancel anytime by text. No contracts or platform maintenance.
            </p>
            <div className="flex items-center justify-center gap-2 opacity-50 text-neutral-400">
              <Lock className="w-3.5 h-3.5" />
              <span className="font-sans text-[10px] uppercase tracking-widest font-extrabold">
                Secured SSL End-to-End Encryption
              </span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
