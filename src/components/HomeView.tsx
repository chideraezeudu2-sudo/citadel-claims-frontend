import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  Clock, 
  TrendingUp, 
  MapPin, 
  ShieldAlert, 
  FileText, 
  Radio, 
  PenTool, 
  Compass, 
  Bolt,
  FolderSync,
  HelpCircle,
  Zap,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: 'home' | 'pricing' | 'success' | 'portal' | 'privacy' | 'terms') => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Stagger animation helpers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative overflow-x-hidden pt-20">
      
      {/* BACKGROUND DECORATIVE BLURS */}
      <div className="absolute top-0 inset-x-0 h-[1000px] custom-blur-bg pointer-events-none z-0" />

      {/* SECTION 1: HERO */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-8 text-center relative z-10 pt-16 pb-24">
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Eyebrow badge */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-xs text-accent-emerald mb-6 tracking-[0.25em] font-extrabold uppercase"
          >
            INSURANCE CLAIMS ESTIMATING
          </motion.p>

          {/* Typewriter-split responsive title */}
          <motion.h1 
            variants={itemVariants} 
            className="font-display-xl text-4xl sm:text-6xl md:text-7xl font-black text-on-surface mb-8 tracking-tight leading-[1.1]"
          >
            Your estimates, <span className="text-accent-emerald glow-emerald">done.</span>
            <br />
            Before morning.
          </motion.h1>

          {/* Subheadline description */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Send photos and a voice note. Get a carrier-ready estimate back the same day.
            <span className="block mt-4 font-sans text-xs text-on-surface-variant/80 italic font-semibold">
              Built exclusively for independent adjusters.
            </span>
          </motion.p>

          {/* CTA & Trust parameters with Glass water-effect custom-rounded buttons */}
          <motion.div variants={itemVariants} className="space-y-6">
            <button
              onClick={() => onNavigate('pricing')}
              className="glass-button-primary px-10 sm:px-12 py-4.5 sm:py-5 font-extrabold text-[15px] tracking-wider hover:scale-105 active:scale-95 transition-all duration-300 rounded-full cursor-pointer inline-flex items-center gap-3"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 animate-pulse-custom" />
            </button>
            <p className="font-sans text-[11px] text-muted-text/80 tracking-wider font-extrabold uppercase">
              No sales call. $50 setup. Working in under 5 minutes.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* REASSURANCE BADGES */}
      <section className="border-y border-surface-border py-8 bg-surface-container-lowest/80 text-on-surface-variant z-10 relative">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-accent-emerald stroke-[3]" />
            <span className="font-sans text-xs uppercase tracking-wide font-extrabold">No sales call</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-accent-emerald stroke-[3]" />
            <span className="font-sans text-xs uppercase tracking-wide font-extrabold">$50 setup fee</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-accent-emerald stroke-[3]" />
            <span className="font-sans text-xs uppercase tracking-wide font-extrabold">Cancel by text</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM (11PM DILEMMA) */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="glowing-card rounded-2xl p-8 md:p-16 lg:p-20 border border-surface-border">
          <h2 className="font-headline-lg text-2xl sm:text-4xl text-on-surface mb-16 text-center md:text-left leading-snug tracking-tight max-w-4xl font-extrabold">
            You're rebuilding the same estimate at 11pm that should have taken 20 minutes.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16">
            <div className="space-y-4">
              <span className="font-sans text-xs text-accent-emerald font-black tracking-widest block">01 / SUBMISSION</span>
              <h3 className="font-title-md text-lg text-on-surface font-semibold">Claim → Manual Work</h3>
              <p className="text-muted-text text-[15px] leading-relaxed">
                Hours spent clicking through sketch tools and searching for line items you've typed a thousand times before.
              </p>
            </div>
            <div className="space-y-4">
              <span className="font-sans text-xs text-accent-emerald font-black tracking-widest block">02 / EXECUTION</span>
              <h3 className="font-title-md text-lg text-on-surface font-semibold">Rush → Miss items</h3>
              <p className="text-muted-text text-[15px] leading-relaxed">
                Pressure leads to oversight. Missing a single roof accessory or interior detail cuts directly into your fee bill.
              </p>
            </div>
            <div className="space-y-4">
              <span className="font-sans text-xs text-accent-emerald font-black tracking-widest block">03 / CONSEQUENCE</span>
              <h3 className="font-title-md text-lg text-on-surface font-semibold">Resubmit → Another night</h3>
              <p className="text-muted-text text-[15px] leading-relaxed">
                Carrier rejections mean starting over. While you're fixing yesterday's mistakes, tomorrow's claims are piling up.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-accent-emerald pl-6 py-1">
            <p className="italic text-base sm:text-lg text-accent-emerald font-medium">
              "The adjusters closing more claims figured this out. Now it's your turn."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: POSITION STATEMENT (WHITE BG BREAK) */}
      <section className="bg-white text-black py-28 px-6 md:px-8 z-10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <p className="font-sans text-xs text-zinc-500 font-extrabold mb-4 tracking-widest uppercase">
              WE DON'T BUILD SOFTWARE
            </p>
            <h2 className="font-headline-lg text-3xl sm:text-5xl text-neutral-950 max-w-3xl mb-8 font-black tracking-tight leading-none">
              We handle your estimates end to end.
            </h2>
            <p className="font-sans text-base sm:text-lg text-zinc-700 max-w-4xl leading-relaxed">
              Software is just another tool for you to manage. We aren't another subscription for you to learn. We are the forensic desk that sits behind you, turning raw site data into polished, ready-to-bill professional documents while you drive to the next loss.
            </p>
          </div>

          {/* TABLE */}
          <div className="bg-zinc-950 text-white p-8 md:p-12 rounded-2xl border border-zinc-850 overflow-x-auto shadow-2xl">
            <table className="w-full text-left min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 font-sans text-[11px] text-zinc-400 tracking-widest font-black">
                  <th className="pb-6">PARAMETER</th>
                  <th className="pb-6">STARTING POINT</th>
                  <th className="pb-6 text-accent-emerald font-extrabold">CITADEL OUTPUT</th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm sm:text-base divide-y divide-zinc-900 font-medium">
                <tr>
                  <td className="py-6 text-xs text-zinc-400 uppercase tracking-widest font-black">Input</td>
                  <td className="py-6 text-zinc-300 font-sans">Manual Entry</td>
                  <td className="py-6 text-accent-emerald font-sans font-bold flex items-center gap-2">
                    <Check className="w-4 h-4" /> Photos + Voice
                  </td>
                </tr>
                <tr>
                  <td className="py-6 text-xs text-zinc-400 uppercase tracking-widest font-black">Turnaround</td>
                  <td className="py-6 text-zinc-300 font-sans">2–3 Days</td>
                  <td className="py-6 text-accent-emerald font-sans font-bold">&lt; 24 Hours</td>
                </tr>
                <tr>
                  <td className="py-6 text-xs text-zinc-400 uppercase tracking-widest font-black">Rejections</td>
                  <td className="py-6 text-zinc-300 font-sans font-bold text-red-500">15% Average</td>
                  <td className="py-6 text-accent-emerald font-sans font-medium">&lt; 1% Audit Pass</td>
                </tr>
                <tr>
                  <td className="py-6 text-xs text-zinc-400 uppercase tracking-widest font-black">Cost</td>
                  <td className="py-6 text-zinc-300 font-sans font-bold text-red-500">Your Free Time</td>
                  <td className="py-6 text-accent-emerald font-sans font-bold">Transparent Per-Estimate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 flex justify-center w-full text-center">
            <button 
              onClick={() => onNavigate('pricing')}
              className="bg-black/90 hover:bg-black text-white border border-black/20 backdrop-blur px-8 py-4 font-bold rounded-full cursor-pointer inline-flex items-center gap-2 transform hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-wider mx-auto"
            >
              <span>See pricing &amp; plan</span>
              <ArrowRight className="w-4 h-4 text-accent-emerald" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE PROCESS */}
      <section className="py-24 px-6 md:px-8 bg-surface-container-lowest/40 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline-lg text-3xl sm:text-4xl mb-16 text-center md:text-left leading-tight font-black max-w-3xl text-white filter drop-shadow-sm">
            Your estimate delivered in <span className="text-accent-emerald underline decoration-accent-emerald/30 decoration-wavy">Under 24 hours.</span>
            <br />
            <span className="text-[#e5e2e1]/90">Here's exactly how.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Phase 1 */}
            <div className="glowing-card p-8 rounded-2xl flex flex-col justify-between min-h-[260px]">
              <div>
                <span className="font-sans text-xs text-accent-emerald block mb-4 font-black tracking-widest">PHASE 01</span>
                <h3 className="font-title-md text-lg text-on-surface font-semibold mb-3">Submit</h3>
                <p className="text-muted-text text-[13.5px] leading-relaxed mb-6">
                  Upload claim photos and a quick voice memo outlining the scope of loss via our secure portal or simply texting.
                </p>
              </div>
              <p className="font-sans font-extrabold text-white text-[10px] tracking-wider bg-white/5 py-1.5 px-3 rounded-full w-max">
                Deliverable: 2 min Effort
              </p>
            </div>

            {/* Phase 2 */}
            <div className="glowing-card p-8 rounded-2xl flex flex-col justify-between min-h-[260px]">
              <div>
                <span className="font-sans text-xs text-accent-emerald block mb-4 font-black tracking-widest">PHASE 02</span>
                <h3 className="font-title-md text-lg text-on-surface font-semibold mb-3">Processing</h3>
                <p className="text-muted-text text-[13.5px] leading-relaxed mb-6">
                  Our system transcribes your technical notes, labels imagery and categorizes damage into standardized line items.
                </p>
              </div>
              <p className="font-sans font-extrabold text-white text-[10px] tracking-wider bg-white/5 py-1.5 px-3 rounded-full w-max">
                Deliverable: Automated Intake
              </p>
            </div>

            {/* Phase 3 */}
            <div className="glowing-card p-8 rounded-2xl flex flex-col justify-between min-h-[260px]">
              <div>
                <span className="font-sans text-xs text-accent-emerald block mb-4 font-black tracking-widest">PHASE 03</span>
                <h3 className="font-title-md text-lg text-on-surface font-semibold mb-3">Review</h3>
                <p className="text-muted-text text-[13.5px] leading-relaxed mb-6">
                  A senior desk estimator performs a forensic pass to verify pricing database codes and carrier guidelines.
                </p>
              </div>
              <p className="font-sans font-extrabold text-white text-[10px] tracking-wider bg-white/5 py-1.5 px-3 rounded-full w-max">
                Deliverable: Quality Pass
              </p>
            </div>

            {/* Phase 4 */}
            <div className="glowing-card p-8 rounded-2xl flex flex-col justify-between min-h-[260px]">
              <div>
                <span className="font-sans text-xs text-accent-emerald block mb-4 font-black tracking-widest">PHASE 04</span>
                <h3 className="font-title-md text-lg text-on-surface font-semibold mb-3">Delivered</h3>
                <p className="text-muted-text text-[13.5px] leading-relaxed mb-6">
                  Receive a complete carrier-ready PDF estimate delivered to your portal and via SMS.
                </p>
              </div>
              <p className="font-sans font-extrabold text-white text-[10px] tracking-wider bg-accent-emerald/10 text-accent-emerald py-1.5 px-3 rounded-full w-max">
                Deliverable: Same Day
              </p>
            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('pricing')}
              className="glass-button-primary px-12 py-5 font-black uppercase tracking-widest text-[12px] hover:scale-105 active:scale-95 rounded-full cursor-pointer inline-flex items-center gap-3"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: RESULTS (WHITE BG BREAK) */}
      <section className="bg-white text-black py-24 px-6 md:px-8 z-10 relative border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-16">
            <h2 className="font-headline-lg text-3xl sm:text-5xl font-black text-neutral-900 mb-4 tracking-tight leading-none">
              The numbers don't lie.
            </h2>
            <p className="font-title-md text-base sm:text-lg italic text-accent-emerald font-semibold">
              "Independent adjusters closing volume report spending less than 10 minutes per claim."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            <div className="bg-zinc-950 p-10 md:p-12 rounded-2xl border border-zinc-850 shadow-xl text-white">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-display-xl">32</h3>
                  <p className="text-accent-emerald font-sans text-xs uppercase tracking-wider font-extrabold">
                    Claims Per Week Catastrophe Limit
                  </p>
                </div>
                <MapPin className="text-zinc-600 w-10 h-10" />
              </div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed text-sm sm:text-base">
                "During hurricane season, I'm physically exhausted by 6 PM. Citadel handles the heavy paperwork so I can actually sleep, drive more sites, and close double my normal volume."
              </p>
              <p className="font-extrabold text-zinc-100 font-sans text-[13px] uppercase tracking-wider">— Daily Adjuster, Southeast Region</p>
            </div>

            <div className="bg-zinc-950 p-10 md:p-12 rounded-2xl border border-zinc-850 shadow-xl text-white">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-display-xl">2.4x</h3>
                  <p className="text-accent-emerald font-sans text-xs uppercase tracking-wider font-extrabold">
                    Revenue Velocity Multiply
                  </p>
                </div>
                <TrendingUp className="text-zinc-600 w-10 h-10" />
              </div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed text-sm sm:text-base">
                "The volume I can realistically sign off on now is triple what I did solo. The precision of their line items means my fee bills pass carrier review without deductions."
              </p>
              <p className="font-bold text-zinc-100 font-mono text-[13px] uppercase tracking-wider">— CAT Adjuster, Gulf Coast</p>
            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-black text-white hover:bg-zinc-900 border border-zinc-700 px-10 py-4.5 font-bold rounded-full text-sm uppercase tracking-wider cursor-pointer transform hover:scale-105 active:scale-95 transition-all"
            >
              Start Today
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ (HARD QUESTIONS) */}
      <section className="py-24 px-6 md:px-8 bg-black z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline-lg text-2xl sm:text-4xl text-on-surface mb-20 text-center font-extrabold tracking-tight">
            Let's get the real questions out of the way.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Q1 */}
            <div className="space-y-3">
              <h4 className="font-title-md text-base sm:text-lg text-white font-semibold border-b border-surface-border/45 pb-4">
                PDF delivery?
              </h4>
              <p className="text-muted-text text-[14px] leading-relaxed font-sans">
                Yes. We deliver fully formatted carrier-ready PDFs directly to your portal and via SMS link.
              </p>
            </div>

            {/* Q2 */}
            <div className="space-y-3">
              <h4 className="font-title-md text-base sm:text-lg text-white font-semibold border-b border-surface-border/45 pb-4">
                What if there are errors?
              </h4>
              <p className="text-muted-text text-[14px] leading-relaxed font-sans">
                Our AI-powered QA review catches mistakes before delivery. If we ever miss a line item, we correct it instantly at zero added cost.
              </p>
            </div>

            {/* Q3 */}
            <div className="space-y-3">
              <h4 className="font-title-md text-base sm:text-lg text-white font-semibold border-b border-surface-border/45 pb-4">
                Is there a volume limit?
              </h4>
              <p className="text-muted-text text-[14px] leading-relaxed font-sans">
                50 claims per month included. Additional claims are $75 each. Same-day delivery remains intact regardless of volume.
              </p>
            </div>

            {/* Q4 */}
            <div className="space-y-3">
              <h4 className="font-title-md text-base sm:text-lg text-white font-semibold border-b border-surface-border/45 pb-4">
                What do I need to send?
              </h4>
              <p className="text-muted-text text-[14px] leading-relaxed font-sans">
                Simply text labeled site photos and a voice memo describing the damage. We extract measurements and draft the full estimate.
              </p>
            </div>

            {/* Q5 */}
            <div className="space-y-3">
              <h4 className="font-title-md text-base sm:text-lg text-white font-semibold border-b border-surface-border/45 pb-4">
                How does cancellation work?
              </h4>
              <p className="text-muted-text text-[14px] leading-relaxed font-sans">
                Cancel anytime via text. No long-term contracts or platform lock-in during slow months.
              </p>
            </div>

            {/* Q6 */}
            <div className="space-y-3">
              <h4 className="font-title-md text-base sm:text-lg text-white font-semibold border-b border-surface-border/45 pb-4">
                Are there hidden system costs?
              </h4>
              <p className="text-muted-text text-[14px] leading-relaxed font-sans">
                No surprises. $1,700/month + $50 one-time setup fee. No license maintenance or platform royalties.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA WITH GLASSMORPHISM AND PILL CTA */}
      <section className="py-24 px-6 md:px-8 z-10 relative max-w-7xl mx-auto">
        <div className="glowing-card rounded-2xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-surface-border">
          <div className="space-y-6 lg:max-w-2xl">
            <p className="font-sans text-xs text-accent-emerald font-extrabold tracking-wider uppercase">READY TO RECOVER TIME</p>
            <h2 className="font-headline-lg text-2xl sm:text-4xl text-white font-black leading-none tracking-tight">
              Get your first estimate delivered today.
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-text text-[14px] sm:text-base font-sans">
                <Bolt className="w-5 h-5 text-accent-emerald" />
                Upload files in under 5 minutes total
              </li>
              <li className="flex items-center gap-3 text-muted-text text-[14px] sm:text-base font-sans">
                <ShieldCheck className="w-5 h-5 text-accent-emerald" />
                100% compliant desk-audit ready quality
              </li>
              <li className="flex items-center gap-3 text-muted-text text-[14px] sm:text-base font-sans">
                <Clock className="w-5 h-5 text-accent-emerald" />
                24-hour delivery guarantee active
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-auto">
            <button
              onClick={() => onNavigate('pricing')}
              className="glass-button-primary group w-full lg:w-[320px] py-6 px-8 flex justify-between items-center font-bold text-lg hover:scale-[1.03] active:scale-95 rounded-full cursor-pointer leading-none"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform animate-pulse-custom" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
