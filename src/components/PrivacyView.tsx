import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

interface PrivacyViewProps {
  onNavigate: (tab: 'home' | 'pricing' | 'success' | 'portal' | 'privacy' | 'terms') => void;
}

export default function PrivacyView({ onNavigate }: PrivacyViewProps) {
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
              <Shield className="w-6 h-6 animate-pulse" />
            </span>
            <span className="font-sans text-xs text-accent-emerald tracking-widest uppercase font-extrabold">
              Compliance & Security Disclaimer
            </span>
          </div>
          <h1 className="font-display-xl text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight leading-none">
            Privacy Policy
          </h1>
          <p className="mt-4 font-sans text-xs text-zinc-500 uppercase tracking-widest font-bold">
            Effective Date: June 12, 2025
          </p>
        </div>

        {/* Content Panel */}
        <div className="bg-neutral-950 border border-white/5 p-8 sm:p-12 rounded-3xl shadow-2xl text-zinc-300 font-sans text-sm sm:text-base space-y-8 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              1. Information We Collect
            </h2>
            <p>
              Citadel Claims collects technical information you provide when using our services. This includes photo claim documentation, sketches, voice memos, text inputs, and mobile phone numbers for identification and delivery of carrier-ready paperwork.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              2. How We Use Your Data
            </h2>
            <p>
              Your data is solely used to construct structured estimates and PDF drafts. We transcribe voice messages and analyze photos exclusively to identify scope-of-work line items. We do not sell or train open-source models with your private adjustor assets.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              3. Data Security and Confidentiality
            </h2>
            <p>
              All uploads and SMS deliveries operate over high-performance HTTPS and industry-standard securely shielded endpoints. Transcripts, media, and active PDF estimate logs are purged continuously in accordance with carrier security practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              4. Third-Party Integrations
            </h2>
            <p>
              Payment transactions and continuous active SMS workflows are handled securely via third-party specialized processors (e.g. Stripe) utilizing advanced verification. No financial credential details ever hit our systems directly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              5. Adjustor Control &amp; Audit
            </h2>
            <p>
              Under our Terms, all delivered files remain fully under the legal ownership and discretion of the submitting adjustor of record. If you require absolute file deletion or historical logs removed, contact our operations desk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-sans text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2">
              6. Contact Support
            </h2>
            <p>
              Please address any compliance or legal inquiries directly to our security and ops team at:
              <br />
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:ops@citadelclaims.com" className="text-accent-emerald hover:underline font-bold">
                ops@citadelclaims.com
              </a>
            </p>
          </section>

        </div>

        {/* Navigation back and to terms */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-neutral-500 font-bold">
          <span>© 2026 Citadel Claims. All Rights Reserved.</span>
          <button
            onClick={() => onNavigate('terms')}
            className="hover:text-accent-emerald underline uppercase tracking-widest font-black cursor-pointer"
          >
            Read Terms of Service
          </button>
        </div>

      </div>
    </main>
  );
}
