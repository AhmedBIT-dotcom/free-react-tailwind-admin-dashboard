export type PaymentProofStatus =
  | "AWAITING_UPLOAD"
  | "PENDING_VERIFICATION"
  | "VERIFIED"
  | "DISPUTED"
  | "REJECTED";

export interface PaymentProof {
  proofId: string;
  requestId: string;
  transferredAmount?: number;
  transferReference?: string;
  transferDateTime?: string;
  receiptFile?: string;
  uploadTimestamp?: string;
  verificationTimestamp?: string;
  verificationActor?: string;
  status: PaymentProofStatus;
  rejectionReason?: string;
}

export const mockPaymentProofs: PaymentProof[] = [
  {
    proofId: "PRF-001",
    requestId: "REQ-10025",
    status: "AWAITING_UPLOAD"
  },
  {
    proofId: "PRF-002",
    requestId: "REQ-10024",
    transferredAmount: 1200,
    transferReference: "TRX-83921831",
    transferDateTime: "2026-08-28T10:00:00Z",
    receiptFile: "receipt_villa.pdf",
    uploadTimestamp: "2026-08-28T10:15:00Z",
    status: "PENDING_VERIFICATION"
  },
  {
    proofId: "PRF-003",
    requestId: "REQ-10023",
    transferredAmount: 300,
    transferReference: "TRX-10293812",
    transferDateTime: "2026-08-25T15:00:00Z",
    receiptFile: "payment_slip.jpg",
    uploadTimestamp: "2026-08-25T15:30:00Z",
    verificationTimestamp: "2026-08-25T16:00:00Z",
    verificationActor: "Provider",
    status: "VERIFIED"
  },
  {
    proofId: "PRF-006",
    requestId: "REQ-10022",
    transferredAmount: 850,
    transferReference: "TRX-55443322",
    transferDateTime: "2026-08-20T12:00:00Z",
    receiptFile: "bank_transfer.png",
    uploadTimestamp: "2026-08-20T12:05:00Z",
    verificationTimestamp: "2026-08-20T13:00:00Z",
    verificationActor: "Provider",
    status: "DISPUTED"
  },
  {
    proofId: "PRF-005",
    requestId: "REQ-10021",
    transferredAmount: 600,
    transferReference: "TRX-INVALID",
    transferDateTime: "2026-08-16T09:00:00Z",
    receiptFile: "wrong_receipt.jpg",
    uploadTimestamp: "2026-08-16T09:10:00Z",
    verificationTimestamp: "2026-08-16T10:00:00Z",
    verificationActor: "Provider",
    status: "REJECTED",
    rejectionReason: "The receipt does not match the agreed amount or account."
  }
];
