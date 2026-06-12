import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Settings, Smartphone, MessageSquare, BookMarked, Mail } from 'lucide-react';

interface SuccessViewProps {
  onNavigate: (tab: 'home' | 'pricing' | 'success' | 'portal') => void;
  mobileNumber: string;
}

export default function SuccessView({ onNavigate, mobileNumber }: SuccessViewProps) {
  // Auto-scroll to top when page displays
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pt-32 pb-16 relative">
      
      {/* Background blurs */}
      <div className="absolute top-0 inset-x-0 h-[800px] custom-blur-bg pointer-events-none z-0" />

      {/* Hero Section checkmarks */}
      <section className="w-full max-w-2xl text-center mb-16 z-10">
        <div className="mb-8 flex justify-center">
          <svg className="success-checkmark" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
            <circle className="success-checkmark__circle" cx="26" cy="26" fill="none" r="25" />
            <path className="success-checkmark__check" d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none" />
          </svg>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display-xl text-4xl sm:text-5xl md:text-6xl text-white font-extrabold mb-6 tracking-tight leading-none"
        >
          You're in.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-sans text-base sm:text-lg text-muted-text max-w-lg mx-auto leading-relaxed"
        >
          Your account is being set up right now.
          <br className="hidden md:block" />
          Within the next two minutes, you'll receive a text... Save it. That is your direct line to us.
        </motion.p>
      </section>

      {/* PROTOCOL TIMELINE CARD */}
      <section className="w-full max-w-lg z-10 space-y-8">
        <div className="glowing-card p-8 md:p-10 rounded-2xl border border-surface-border">
          <h2 className="font-sans text-xs text-accent-emerald uppercase tracking-widest font-extrabold mb-8">
            WORKFLOW PROTOCOL
          </h2>

          <div className="space-y-8">
            
            {/* Step 1 */}
            <div className="flex items-start gap-6 group">
              <div className="mt-1 bg-accent-emerald/5 p-2 rounded border border-accent-emerald/10 text-accent-emerald group-hover:scale-110 transition-transform">
                <Settings className="w-5 h-5 text-accent-emerald animate-spin" style={{ animationDuration: '4s' }} />
              </div>
              <div>
                <p className="font-sans text-[10px] text-muted-text uppercase tracking-widest mb-1 font-black">
                  RIGHT NOW
                </p>
                <p className="font-title-md text-base sm:text-lg font-bold text-white leading-snug">
                  Assigning secure carrier SMS line.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 group">
              <div className="mt-1 bg-accent-emerald/5 p-2 rounded border border-accent-emerald/10 text-accent-emerald group-hover:scale-110 transition-transform">
                <Smartphone className="w-5 h-5 text-accent-emerald animate-pulse-custom" />
              </div>
              <div>
                <p className="font-sans text-[10px] text-muted-text uppercase tracking-widest mb-1 font-black">
                  IN 2 MINUTES
                </p>
                <p className="font-title-md text-base sm:text-lg font-bold text-white leading-snug">
                  Number texts you authentication token.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 group">
              <div className="mt-1 bg-accent-emerald/5 p-2 rounded border border-accent-emerald/10 text-accent-emerald group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5 text-accent-emerald" />
              </div>
              <div>
                <p className="font-sans text-[10px] text-muted-text uppercase tracking-widest mb-1 font-black">
                  WHEN READY
                </p>
                <p className="font-title-md text-base sm:text-lg font-bold text-white leading-snug">
                  Text labeled loss photos + quick voice scope.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bookmark Hint */}
        <div className="text-center flex justify-center items-center gap-2 text-muted-text/80 text-xs sm:text-sm font-sans pt-2">
          <BookMarked className="w-4 h-4 text-accent-emerald" />
          <span>
            Your portal link will arrive via SMS within 2 minutes. Save that message.
          </span>
        </div>
      </section>

      {/* ASSISTANCE CONTACTS */}
      <section className="w-full max-w-xl mx-auto mt-16 border-t border-surface-border/40 pt-10 text-center space-y-4 z-10">
        <div>
          <p className="font-sans text-[10px] text-muted-text uppercase tracking-widest mb-2 font-black">
            ASSISTANCE REQUIRED?
          </p>
          <p className="text-sm font-sans text-on-surface flex flex-wrap justify-center items-center gap-2">
            <span>Text your assigned number or email</span>
            <a 
              href="mailto:ops@citadelclaims.com" 
              className="text-accent-emerald font-extrabold hover:underline font-sans inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              ops@citadelclaims.com
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}
