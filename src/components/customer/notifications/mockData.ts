export type NotificationType = 
  | "REQUEST_SENT"
  | "PROVIDER_ACCEPTED"
  | "PROVIDER_REJECTED"
  | "NEW_MESSAGE"
  | "PAYMENT_PROOF_UPLOADED"
  | "PAYMENT_VERIFICATION"
  | "SERVICE_COMPLETED"
  | "DISPUTE"
  | "SERVICE_CLOSED"
  | "REVIEW_AVAILABLE";

export interface SanahNotification {
  id: string;
  type: NotificationType;
  titleAr: string;
  titleEn: string;
  messageAr: string;
  messageEn: string;
  createdAt: string;
  isRead: boolean;
  requestId?: string;
}

export const mockNotifications: SanahNotification[] = [
  {
    id: "NOTIF-001",
    type: "PROVIDER_ACCEPTED",
    titleAr: "تم قبول طلبك",
    titleEn: "Request Accepted",
    messageAr: "تم قبول طلبك رقم REQ-10025 من قبل مقدم الخدمة محمد عبدالله",
    messageEn: "Your request REQ-10025 was accepted by provider Mohammed Abdullah",
    createdAt: new Date(Date.now() - 10 * 60000).toISOString(), // 10 mins ago
    isRead: false,
    requestId: "REQ-10025",
  },
  {
    id: "NOTIF-002",
    type: "NEW_MESSAGE",
    titleAr: "رسالة جديدة",
    titleEn: "New Message",
    messageAr: "لديك رسالة جديدة من مقدم الخدمة محمد عبدالله في الطلب REQ-10025",
    messageEn: "You have a new message from provider Mohammed Abdullah for request REQ-10025",
    createdAt: new Date(Date.now() - 60 * 60000).toISOString(), // 1 hour ago
    isRead: false,
    requestId: "REQ-10025",
  },
  {
    id: "NOTIF-003",
    type: "PAYMENT_PROOF_UPLOADED",
    titleAr: "تم رفع إثبات الدفع",
    titleEn: "Payment Proof Uploaded",
    messageAr: "تم رفع إثبات الدفع للطلب رقم REQ-10024 بنجاح",
    messageEn: "Payment proof for request REQ-10024 uploaded successfully",
    createdAt: new Date(Date.now() - 3 * 3600000).toISOString(), // 3 hours ago
    isRead: true,
    requestId: "REQ-10024",
  },
  {
    id: "NOTIF-004",
    type: "PAYMENT_VERIFICATION",
    titleAr: "جارٍ التحقق من الدفع",
    titleEn: "Payment Verified",
    messageAr: "جارٍ التحقق من إثبات الدفع للطلب رقم REQ-10024 من قبل مقدم الخدمة",
    messageEn: "Payment for request REQ-10024 is being verified by the provider",
    createdAt: new Date(Date.now() - 5 * 3600000).toISOString(), // 5 hours ago
    isRead: true,
    requestId: "REQ-10024",
  },
  {
    id: "NOTIF-005",
    type: "PROVIDER_REJECTED",
    titleAr: "تم رفض الطلب",
    titleEn: "Request Rejected",
    messageAr: "تم رفض طلبك رقم REQ-10023 من قبل مقدم الخدمة",
    messageEn: "Your request REQ-10023 was rejected by the provider",
    createdAt: new Date(Date.now() - 24 * 3600000).toISOString(), // 1 day ago
    isRead: true,
    requestId: "REQ-10023",
  },
  {
    id: "NOTIF-006",
    type: "REQUEST_SENT",
    titleAr: "تم إرسال طلبك بنجاح",
    titleEn: "Request Sent Successfully",
    messageAr: "تم إرسال طلبك رقم REQ-10022 بنجاح، سيتم إشعارك عند رد مقدم الخدمة",
    messageEn: "Your request REQ-10022 was sent successfully, you will be notified when the provider responds",
    createdAt: new Date(Date.now() - 26 * 3600000).toISOString(), // 1 day 2 hours ago
    isRead: true,
    requestId: "REQ-10022",
  },
  {
    id: "NOTIF-007",
    type: "SERVICE_COMPLETED",
    titleAr: "خدمة مكتملة",
    titleEn: "Service Completed",
    messageAr: "تم إكمال الخدمة للطلب رقم REQ-10020",
    messageEn: "Service completed for request REQ-10020",
    createdAt: new Date(Date.now() - 3 * 24 * 3600000).toISOString(), // 3 days ago
    isRead: true,
    requestId: "REQ-10020",
  },
  {
    id: "NOTIF-008",
    type: "REVIEW_AVAILABLE",
    titleAr: "متاح لك تقييم",
    titleEn: "Review Available",
    messageAr: "شارك تقييمك لمقدم الخدمة في الطلب رقم REQ-10019",
    messageEn: "Share your review for the provider in request REQ-10019",
    createdAt: new Date(Date.now() - 5 * 24 * 3600000).toISOString(), // 5 days ago
    isRead: true,
    requestId: "REQ-10019",
  },
];
