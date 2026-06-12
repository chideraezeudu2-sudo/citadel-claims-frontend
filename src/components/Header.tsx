import { motion } from 'motion/react';
import { Shield, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'pricing' | 'success' | 'portal' | 'privacy' | 'terms';
  setActiveTab: (tab: 'home' | 'pricing' | 'success' | 'portal' | 'privacy' | 'terms') => void;
  mobileNumber?: string;
  isAuthenticated: boolean;
}

export default function Header({
  activeTab,
  setActiveTab,
  mobileNumber,
  isAuthenticated,
}: HeaderProps) {
  // Format phone number to hide detail to match the template (e.g. *** *** 4821)
  const getMaskedPhone = () => {
    if (!mobileNumber) return '*** *** 4821';
    // grab last 4 characters
    const clean = mobileNumber.replace(/\D/g, '');
    const lastFour = clean.slice(-4) || '4821';
    return `*** *** ${lastFour}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center cursor-pointer group"
          id="nav-logo"
        >
          <span className="font-display-xl text-lg sm:text-xl font-black tracking-wide text-white uppercase transition-colors">
            Citadel Claims
          </span>
        </div>

        {/* NAVIGATION TABS WITH GLASS PILL EFFECT */}
        <div className="flex items-center gap-1.5 md:gap-3 bg-white/5 border border-white/5 p-1 rounded-full backdrop-blur-lg">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-4 py-1.5 font-sans text-[12px] tracking-wide transition-all rounded-full ${
              activeTab === 'home'
                ? 'bg-accent-emerald/20 text-accent-emerald font-bold border border-accent-emerald/35'
                : 'text-on-surface-variant hover:text-on-surface border border-transparent'
            }`}
            id="nav-tab-home"
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-4 py-1.5 font-sans text-[12px] tracking-wide transition-all rounded-full ${
              activeTab === 'pricing'
                ? 'bg-accent-emerald/20 text-accent-emerald font-bold border border-accent-emerald/35'
                : 'text-on-surface-variant hover:text-on-surface border border-transparent'
            }`}
            id="nav-tab-pricing"
          >
            Pricing
          </button>
        </div>

        {/* RIGHT ACTION OR ACC STATE WITH GLASS WATER EFFECT */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 py-2 px-4 rounded-full backdrop-blur-md shadow-inner" id="header-secured-badge">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span className="hidden md:inline font-sans text-[10px] tracking-widest text-[#10B981] font-extrabold uppercase">
                SECURED
              </span>
              <span className="font-sans text-xs font-bold text-white tracking-wider">
                {getMaskedPhone()}
              </span>
            </div>
          ) : (
            <button
              onClick={() => setActiveTab('pricing')}
              className="glass-button-primary px-6 py-2.5 rounded-full font-sans text-[12px] font-bold tracking-wider uppercase cursor-pointer leading-none flex items-center gap-2"
              id="header-get-started-btn"
            >
              <span>Get Started</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
