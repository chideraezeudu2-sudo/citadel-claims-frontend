import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  Download, 
  PhoneCall,
  AlertCircle
} from 'lucide-react';

interface PortalViewProps {
  estimates: any[];
  setEstimates: React.Dispatch<React.SetStateAction<any[]>>;
  mobileNumber: string;
  portalToken: string;
}

const API_BASE = import.meta.env.VITE_API_URL || 'https://citadel-claims-backend.onrender.com';

interface BackendClaim {
  id: string;
  claim_type: string;
  status: string;
  created_at: string;
  completed_at: string | null;
  pdf_url: string | null;
  photo_count: number;
}

interface BackendData {
  client_name: string;
  phone: string;
  claims_used: number;
  claims_included: number;
  claims_remaining: number;
  overage_claims: number;
  overage_cost: number;
  claims: BackendClaim[];
}

export default function PortalView({ setEstimates, mobileNumber, portalToken }: PortalViewProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<BackendData | null>(null);
  const [estimates, setLocalEstimates] = useState<any[]>([]);

  useEffect(() => {
    const fetchPortalData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/portal/${portalToken}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            setError('Portal not found. This link may have expired.');
          } else if (response.status === 403) {
            setError('Your subscription has been cancelled.');
          } else {
            setError('Failed to load portal data.');
          }
          return;
        }
        
        const portalData = await response.json();
        setData(portalData);
        
        const transformedClaims = portalData.claims.map((claim: BackendClaim) => ({
          id: claim.id,
          title: claim.claim_type || 'General Claim',
          type: claim.claim_type?.split(' ')[0] || 'Claim',
          dateSubmitted: new Date(claim.created_at).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          }),
          status: claim.status?.toUpperCase() || 'PENDING',
          pdfUrl: claim.pdf_url || null,
        }));
        
        setLocalEstimates(transformedClaims);
        setEstimates(transformedClaims);
      } catch (err) {
        console.error('Failed to fetch portal data:', err);
        setError('Connection error. Please check your internet.');
      } finally {
        setLoading(false);
      }
    };

    if (portalToken) {
      fetchPortalData();
    }
  }, [portalToken, setEstimates]);

  const getStatusColor = (status: string) => {
    switch (status?.toUpperCase()) {
      case 'COMPLETE':
        return 'text-green-400';
      case 'PROCESSING':
        return 'text-yellow-400';
      case 'FAILED':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  if (loading) {
    return (
      <main className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-0 inset-x-0 h-[800px] portal-blur-bg pointer-events-none z-0" />
        <div className="flex items-center justify-center min-h-[60vh] relative z-10">
          <div className="text-center">
            <div className="w-8 h-8 rounded-full border-2 border-accent-emerald border-t-transparent animate-spin mx-auto mb-4" />
            <p className="text-muted-text font-sans">Loading portal...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-0 inset-x-0 h-[800px] portal-blur-bg pointer-events-none z-0" />
        <div className="flex items-center justify-center min-h-[60vh] relative z-10">
          <div className="text-center max-w-md">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Unable to Load Portal</h2>
            <p className="text-muted-text">{error}</p>
          </div>
        </div>
      </main>
    );
  }

  const claimsThisMonth = data?.claims_used || 0;
  const maxClaims = data?.claims_included || 50;
  const progressPercent = Math.min((claimsThisMonth / maxClaims) * 100, 100);
  const claimsRemaining = data?.claims_remaining || 0;
  const overageCost = data?.overage_cost || 0;

  return (
    <main className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto relative">
      
      <div className="absolute top-0 inset-x-0 h-[800px] portal-blur-bg pointer-events-none z-0" />

      <header className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-surface-container-highest rounded-full mb-4 border border-white/5">
          <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="font-sans text-[10px] uppercase tracking-wider text-[#e5e2e1] font-extrabold">
            Portal Session Securely Authenticated
          </span>
        </div>
        <h1 className="font-display-xl text-3xl sm:text-5xl font-black text-white mb-2 tracking-tight">
          {data?.client_name ? `${data.client_name}'s Portal` : 'Client Portal'}
        </h1>
        <p className="text-muted-text font-sans text-sm sm:text-base">
          Registered Phone:{' '}
          <span className="text-on-surface font-sans font-extrabold bg-white/5 py-1 px-3 rounded-full text-xs border border-white/5">
            {data?.phone || mobileNumber}
          </span>
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 relative z-10">
        
        <div className="lg:col-span-2 glowing-portal-card rounded-lg p-6 sm:p-8 flex flex-col justify-between border border-surface-border">
          <div>
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="font-title-md text-lg sm:text-xl text-white font-bold leading-tight">
                  Claims this month
                </h2>
                <p className="text-muted-text text-xs font-sans mt-0.5">
                  Volume analytics for current billing cycle
                </p>
              </div>
              <div className="text-right">
                <span className="font-display-xl text-3xl sm:text-4xl font-extrabold text-[#e5e2e1] leading-none">
                  {claimsThisMonth}
                </span>
                <span className="text-muted-text font-sans font-extrabold text-xs ml-1">
                  / {maxClaims}
                </span>
              </div>
            </div>

            <div className="w-full h-3.5 bg-[#1a1b1b] rounded-full overflow-hidden mb-5 border border-white/5 relative">
              <div 
                className="h-full bg-gradient-to-r from-accent-emerald to-portal-purple rounded-full transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-5 border-t border-surface-border/40">
            <div className="flex flex-col">
              <span className="text-neutral-500 font-sans text-[9px] uppercase tracking-wider font-extrabold">
                Availability Limit
              </span>
              <span className="text-[#e5e2e1] font-sans text-sm font-extrabold">
                {claimsRemaining} remaining
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-neutral-500 font-sans text-[9px] uppercase tracking-wider font-extrabold">
                Projected Surcharges
              </span>
              <span className="text-accent-emerald font-sans text-sm font-extrabold">
                ${overageCost.toFixed(2)} in overages
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low border border-surface-border rounded-lg p-6 flex flex-col justify-center items-center text-center relative group overflow-hidden">
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-portal-purple/5 rounded-full blur-xl pointer-events-none" />
          <PhoneCall className="w-8 h-8 text-neutral-500 group-hover:text-accent-emerald transition-colors mb-4" />
          
          <h3 className="font-sans text-[10px] text-muted-text uppercase tracking-widest font-extrabold mb-2">
            Submit New Claim
          </h3>
          <p className="text-neutral-400 font-sans text-xs leading-relaxed">
            Text photos + voice note to your dedicated number
          </p>
        </div>
      </div>

      <section className="relative z-10">
        <h2 className="font-title-md text-xl text-white font-bold mb-6">Your Claims</h2>
        
        {estimates.length === 0 ? (
          <div className="bg-surface-container-low border border-surface-border rounded-lg p-12 text-center">
            <FileText className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
            <p className="text-muted-text font-sans">No claims yet. Text your dedicated number to get started!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {estimates.map((claim) => (
              <div 
                key={claim.id}
                className="bg-surface-container-low border border-surface-border rounded-lg p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center">
                    {claim.status === 'COMPLETE' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    ) : claim.status === 'PROCESSING' ? (
                      <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-sans text-white font-bold">{claim.title}</h3>
                    <p className="text-neutral-500 font-sans text-xs">{claim.dateSubmitted}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`font-sans text-xs font-bold uppercase ${getStatusColor(claim.status)}`}>
                    {claim.status}
                  </span>
                  {claim.pdfUrl && (
                    <a 
                      href={claim.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-accent-emerald/10 text-accent-emerald px-4 py-2 rounded-full text-xs font-bold hover:bg-accent-emerald/20 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </main>
  );
}
