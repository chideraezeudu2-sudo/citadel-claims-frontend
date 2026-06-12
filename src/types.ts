import React from 'react';

export type EstimateStatus = 'PROCESSING' | 'COMPLETE' | 'REVISION';

export interface Estimate {
  id: string; // e.g. CC-0042
  title: string; // e.g. Roof Damage - Residence 402
  type: string; // e.g. Roof, Flood, Fire, Wind
  dateSubmitted: string; // e.g. Oct 24, 2024
  status: EstimateStatus;
  statusText?: string;
  notes?: string; // notes / feedback from adjusters/estimators
  assignedTo?: string; // e.g. Senior Estimator Marcus V.
  estimatedAmount?: number; // e.g. $12,450.00
  completionDate?: string;
  pdfUrl?: string; // mock PDF identifier
}

export interface UserContextType {
  mobileNumber: string;
  setMobileNumber: (num: string) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
  estimates: Estimate[];
  setEstimates: React.Dispatch<React.SetStateAction<Estimate[]>>;
  activeTab: 'home' | 'pricing' | 'success' | 'portal';
  setActiveTab: (tab: 'home' | 'pricing' | 'success' | 'portal') => void;
  addEstimate: (estimate: Omit<Estimate, 'id' | 'dateSubmitted'>) => void;
}
