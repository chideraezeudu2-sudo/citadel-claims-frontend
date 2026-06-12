import { Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onNavigate: (tab: 'home' | 'pricing' | 'success' | 'portal' | 'privacy' | 'terms') => void;
  isAuthenticated?: boolean;
}

export default function Footer({ onNavigate, isAuthenticated = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-surface-border py-16 px-6 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-12">
          {/* Logo & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-display-xl text-base font-black text-white uppercase tracking-wide select-none">
                Citadel Claims
              </span>
            </div>
            <p className="text-muted-text text-sm max-w-sm font-sans leading-relaxed">
              The technical authority in insurance estimating for high-volume independent adjusters. Speed without compromise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h5 className="font-sans text-[11px] text-accent-emerald font-extrabold uppercase tracking-widest">Platform</h5>
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[13px] text-muted-text hover:text-accent-emerald text-left transition-colors font-sans uppercase tracking-wider font-semibold"
                >
                  How It Works
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="text-[13px] text-muted-text hover:text-accent-emerald text-left transition-colors font-sans uppercase tracking-wider font-semibold"
                >
                  Pricing
                </button>
                <button
                  onClick={() => onNavigate(isAuthenticated ? 'portal' : 'pricing')}
                  className="text-[13px] text-muted-text hover:text-accent-emerald text-left transition-colors font-sans uppercase tracking-wider font-semibold"
                >
                  Get Started
                </button>
              </nav>
            </div>
            <div className="space-y-3">
              <h5 className="font-sans text-[11px] text-accent-emerald font-extrabold uppercase tracking-widest">Support</h5>
              <nav className="flex flex-col gap-2">
                <a
                  href="mailto:ops@citadelclaims.com"
                  className="text-[13px] text-muted-text hover:text-accent-emerald transition-colors font-sans font-semibold"
                >
                  ops@citadelclaims.com
                </a>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-[13px] text-muted-text hover:text-accent-emerald text-left transition-colors font-sans uppercase tracking-wider font-semibold cursor-pointer"
                  id="footer-link-privacy"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => onNavigate('terms')}
                  className="text-[13px] text-muted-text hover:text-accent-emerald text-left transition-colors font-sans uppercase tracking-wider font-semibold cursor-pointer"
                  id="footer-link-terms"
                >
                  Terms of Service
                </button>
              </nav>
            </div>
          </div>

          {/* Network Status / Server Metrics */}
          <div className="flex flex-col justify-between h-full md:items-end">
            <div className="space-y-2 md:text-right">
              <p className="font-sans text-[10px] text-muted-text uppercase tracking-widest font-extrabold">
                CURRENT NETWORK STATUS
              </p>
              <div className="flex items-center md:justify-end gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
                </span>
                <span className="text-sm font-bold text-on-surface font-sans uppercase tracking-wider">
                  All Systems Operational
                </span>
              </div>
            </div>
            <p className="text-muted-text text-xs font-sans mt-8 font-medium">
              © {currentYear} Citadel Claims. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Flat Bottom Info */}
        <div className="border-t border-surface-border/45 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-xs font-sans text-muted-text font-bold">
            <span>CARRIER COMPLIANT Estimating</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
