import { useState, useEffect } from 'react';

export type DisputeStatus = "OPEN" | "UNDER_REVIEW" | "RESOLVED";

export interface DisputeResolution {
  decision: string;
  reason: string;
  resolvedAt: string;
  resolvedBy: string;
}

export interface DisputeEvidence {
  id: string;
  fileName: string;
  fileSize?: string;
}

export const DISPUTE_CATEGORIES = [
  "Payment not received",
  "Payment amount mismatch",
  "Invalid/unclear payment proof",
  "Transfer to wrong account",
  "Duplicate payment proof",
  "Service not started",
  "Provider did not attend",
  "Service not completed",
  "Service quality problem",
  "Service differs from agreed scope",
  "Duration/timing disagreement",
  "Price/amount disagreement",
  "Unjustified cancellation",
  "Provider/customer disappearance after payment",
  "Inappropriate behavior",
  "Other documented issue"
];

export interface CustomerDispute {
  id: string;
  requestId: string;
  category: string;
  description: string;
  status: DisputeStatus;
  createdAt: string;
  evidence: DisputeEvidence[];
  resolution?: DisputeResolution;
}

const initialMockDisputes: CustomerDispute[] = [
  {
    id: "DSP-5001",
    requestId: "REQ-10024",
    category: "Provider did not attend",
    description: "The provider did not show up at the scheduled time. I waited for 2 hours.",
    status: "OPEN",
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(), // 1 day ago
    evidence: [],
  },
  {
    id: "DSP-5002",
    requestId: "REQ-10022",
    category: "Service quality problem",
    description: "The cleaning was very superficial and some rooms were completely ignored.",
    status: "UNDER_REVIEW",
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(), // 3 days ago
    evidence: [
      { id: "EV-1", fileName: "living_room_after.jpg" }
    ],
  },
  {
    id: "DSP-5003",
    requestId: "REQ-10020",
    category: "Payment amount mismatch",
    description: "Provider asked for 50 SAR more than the agreed amount in cash.",
    status: "RESOLVED",
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(), // 10 days ago
    evidence: [],
    resolution: {
      decision: "Refund issued to customer for the overcharged amount.",
      reason: "Provider confirmed the extra charge was a mistake. Customer provided a receipt of the extra payment.",
      resolvedAt: new Date(Date.now() - 86400000 * 8).toISOString(),
      resolvedBy: "Admin Sarah",
    }
  }
];

// Lightweight shared mock-state approach
class DisputeStore {
  private disputes: CustomerDispute[] = [...initialMockDisputes];
  private listeners: Set<() => void> = new Set();

  getDisputes() {
    return this.disputes;
  }

  addDispute(dispute: CustomerDispute) {
    this.disputes = [dispute, ...this.disputes];
    this.notify();
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener());
  }
}

export const disputeStore = new DisputeStore();

// Custom hook to consume the shared state
export function useCustomerDisputes() {
  const [disputes, setDisputes] = useState<CustomerDispute[]>(disputeStore.getDisputes());

  useEffect(() => {
    const unsubscribe = disputeStore.subscribe(() => {
      setDisputes(disputeStore.getDisputes());
    });
    return unsubscribe;
  }, []);

  return disputes;
}
