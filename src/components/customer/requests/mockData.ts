export type RequestStatus = 
  | "PENDING" 
  | "ACCEPTED" 
  | "READY_TO_START" 
  | "IN_PROGRESS" 
  | "PROVIDER_COMPLETED" 
  | "CUSTOMER_CONFIRMED" 
  | "CLOSED";

export type PaymentTiming = "BEFORE_SERVICE" | "DURING_SERVICE" | "AFTER_SERVICE";

export interface ServiceRequest {
  id: string;
  serviceNameAr: string;
  serviceNameEn: string;
  providerNameAr: string;
  providerNameEn: string;
  providerAvatar: string;
  requestDate: string;
  durationAr: string;
  durationEn: string;
  totalAmount: number;
  paymentTiming: PaymentTiming;
  status: RequestStatus;
}

export const mockCustomerRequests: ServiceRequest[] = [
  {
    id: "REQ-10025",
    serviceNameAr: "تنظيف شامل للمنزل",
    serviceNameEn: "Deep Home Cleaning",
    providerNameAr: "شركة النظافة المثالية",
    providerNameEn: "Perfect Cleaners Co.",
    providerAvatar: "/images/user/user-01.jpg",
    requestDate: "2026-09-01T10:30:00Z",
    durationAr: "يوم واحد",
    durationEn: "1 Day",
    totalAmount: 450,
    paymentTiming: "AFTER_SERVICE",
    status: "PENDING"
  },
  {
    id: "REQ-10024",
    serviceNameAr: "تأسيس سباكة فيلا",
    serviceNameEn: "Villa Plumbing Installation",
    providerNameAr: "أحمد السباك",
    providerNameEn: "Ahmed the Plumber",
    providerAvatar: "/images/user/user-02.jpg",
    requestDate: "2026-08-28T09:15:00Z",
    durationAr: "3 أيام",
    durationEn: "3 Days",
    totalAmount: 1200,
    paymentTiming: "DURING_SERVICE",
    status: "IN_PROGRESS"
  },
  {
    id: "REQ-10023",
    serviceNameAr: "صيانة مكيفات اسبليت",
    serviceNameEn: "Split AC Maintenance",
    providerNameAr: "مؤسسة التبريد السريع",
    providerNameEn: "Fast Cooling Est.",
    providerAvatar: "/images/user/user-03.jpg",
    requestDate: "2026-08-25T14:20:00Z",
    durationAr: "نصف يوم",
    durationEn: "Half Day",
    totalAmount: 300,
    paymentTiming: "AFTER_SERVICE",
    status: "PROVIDER_COMPLETED"
  },
  {
    id: "REQ-10022",
    serviceNameAr: "دهانات وديكور للصالون",
    serviceNameEn: "Living Room Painting & Decor",
    providerNameAr: "محمود للديكورات",
    providerNameEn: "Mahmoud Decorations",
    providerAvatar: "/images/user/user-04.jpg",
    requestDate: "2026-08-20T11:00:00Z",
    durationAr: "يومان",
    durationEn: "2 Days",
    totalAmount: 850,
    paymentTiming: "BEFORE_SERVICE",
    status: "CLOSED"
  },
  {
    id: "REQ-10021",
    serviceNameAr: "نقل اثاث مكتبي",
    serviceNameEn: "Office Furniture Moving",
    providerNameAr: "شركة العبور السريع",
    providerNameEn: "Fast Transit Co.",
    providerAvatar: "/images/user/user-05.jpg",
    requestDate: "2026-08-15T16:45:00Z",
    durationAr: "يوم واحد",
    durationEn: "1 Day",
    totalAmount: 600,
    paymentTiming: "BEFORE_SERVICE",
    status: "ACCEPTED"
  }
];

export const getStatusDetails = (status: RequestStatus, isRtl: boolean) => {
  const map: Record<RequestStatus, { labelAr: string; labelEn: string; colorClass: string }> = {
    PENDING: {
      labelAr: "قيد الانتظار",
      labelEn: "Pending",
      colorClass: "bg-warning-50 text-warning-700 dark:bg-warning-500/10 dark:text-warning-400 border-warning-200 dark:border-warning-500/20"
    },
    ACCEPTED: {
      labelAr: "مقبول",
      labelEn: "Accepted",
      colorClass: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400 border-brand-200 dark:border-brand-500/20"
    },
    READY_TO_START: {
      labelAr: "جاهز للبدء",
      labelEn: "Ready to Start",
      colorClass: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400 border-brand-200 dark:border-brand-500/20"
    },
    IN_PROGRESS: {
      labelAr: "قيد التنفيذ",
      labelEn: "In Progress",
      colorClass: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400 border-brand-200 dark:border-brand-500/20"
    },
    PROVIDER_COMPLETED: {
      labelAr: "أكمله مزود الخدمة",
      labelEn: "Provider Completed",
      colorClass: "bg-success-50 text-success-700 dark:bg-success-500/10 dark:text-success-400 border-success-200 dark:border-success-500/20"
    },
    CUSTOMER_CONFIRMED: {
      labelAr: "مؤكد من العميل",
      labelEn: "Customer Confirmed",
      colorClass: "bg-success-50 text-success-700 dark:bg-success-500/10 dark:text-success-400 border-success-200 dark:border-success-500/20"
    },
    CLOSED: {
      labelAr: "مغلق",
      labelEn: "Closed",
      colorClass: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700"
    }
  };

  const statusConfig = map[status];
  return {
    label: isRtl ? statusConfig.labelAr : statusConfig.labelEn,
    colorClass: statusConfig.colorClass
  };
};
