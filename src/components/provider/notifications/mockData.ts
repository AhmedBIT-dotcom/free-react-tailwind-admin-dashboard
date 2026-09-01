export type NotificationCategory = "requests" | "messages" | "appointments" | "payments" | "reviews" | "services" | "system";
export type NotificationPriority = "normal" | "important";
export type DateGroup = "today" | "yesterday" | "earlier";

export interface Notification {
  id: string;
  category: NotificationCategory;
  priority: NotificationPriority;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  timeAr: string;
  timeEn: string;
  dateGroup: DateGroup;
  isRead: boolean;
  relatedId?: string;
}

export const mockNotifications: Notification[] = [
  // Today
  {
    id: "NOT-1001",
    category: "requests",
    priority: "important",
    titleAr: "طلب خدمة جديد",
    titleEn: "New Service Request",
    descriptionAr: "لديك طلب جديد لخدمة السباكة من محمد أحمد.",
    descriptionEn: "You have a new plumbing service request from Mohammed Ahmed.",
    timeAr: "منذ 10 دقائق",
    timeEn: "10 mins ago",
    dateGroup: "today",
    isRead: false,
    relatedId: "REQ-1001"
  },
  {
    id: "NOT-1002",
    category: "messages",
    priority: "normal",
    titleAr: "رسالة جديدة",
    titleEn: "New Message",
    descriptionAr: "لديك رسالة جديدة من محمد علي بخصوص طلب الخدمة.",
    descriptionEn: "You have a new message from Mohammed Ali regarding a service request.",
    timeAr: "منذ 45 دقيقة",
    timeEn: "45 mins ago",
    dateGroup: "today",
    isRead: false,
  },
  {
    id: "NOT-1003",
    category: "appointments",
    priority: "important",
    titleAr: "تذكير بموعد",
    titleEn: "Appointment Reminder",
    descriptionAr: "لديك موعد خدمة غدًا الساعة 10:00 صباحًا.",
    descriptionEn: "You have a service appointment tomorrow at 10:00 AM.",
    timeAr: "منذ ساعتين",
    timeEn: "2 hours ago",
    dateGroup: "today",
    isRead: false,
    relatedId: "REQ-0998"
  },
  // Yesterday
  {
    id: "NOT-1004",
    category: "payments",
    priority: "normal",
    titleAr: "تم استلام دفعة",
    titleEn: "Payment Received",
    descriptionAr: "تمت إضافة دفعة جديدة بقيمة 450 ر.س إلى رصيدك.",
    descriptionEn: "A new payment of 450 SAR has been added to your balance.",
    timeAr: "أمس - 3:15 م",
    timeEn: "Yesterday - 3:15 PM",
    dateGroup: "yesterday",
    isRead: true,
  },
  {
    id: "NOT-1005",
    category: "reviews",
    priority: "normal",
    titleAr: "تقييم جديد",
    titleEn: "New Review",
    descriptionAr: "حصلت على تقييم 5 نجوم من أحمد سالم.",
    descriptionEn: "You received a 5-star review from Ahmed Salem.",
    timeAr: "أمس - 11:30 ص",
    timeEn: "Yesterday - 11:30 AM",
    dateGroup: "yesterday",
    isRead: true,
    relatedId: "REQ-0995"
  },
  {
    id: "NOT-1006",
    category: "services",
    priority: "normal",
    titleAr: "تم تحديث الخدمة",
    titleEn: "Service Updated",
    descriptionAr: "تم تحديث حالة خدمة تركيب المكيفات.",
    descriptionEn: "The status of AC Installation service has been updated.",
    timeAr: "أمس - 09:00 ص",
    timeEn: "Yesterday - 09:00 AM",
    dateGroup: "yesterday",
    isRead: true,
  },
  // Earlier
  {
    id: "NOT-1007",
    category: "messages",
    priority: "normal",
    titleAr: "رسالة جديدة",
    titleEn: "New Message",
    descriptionAr: "لديك رسالة جديدة من فاطمة علي.",
    descriptionEn: "You have a new message from Fatima Ali.",
    timeAr: "قبل يومين - 4:20 م",
    timeEn: "2 days ago - 4:20 PM",
    dateGroup: "earlier",
    isRead: true,
  },
  {
    id: "NOT-1008",
    category: "system",
    priority: "important",
    titleAr: "تحديث النظام",
    titleEn: "System Update",
    descriptionAr: "تم تحديث سياسة المنصة. يرجى مراجعة الشروط الجديدة.",
    descriptionEn: "Platform policy has been updated. Please review the new terms.",
    timeAr: "قبل 3 أيام",
    timeEn: "3 days ago",
    dateGroup: "earlier",
    isRead: true,
  },
  {
    id: "NOT-1009",
    category: "requests",
    priority: "important",
    titleAr: "طلب خدمة ملغي",
    titleEn: "Service Request Cancelled",
    descriptionAr: "تم إلغاء طلب خدمة كهرباء من العميل.",
    descriptionEn: "An electrical service request was cancelled by the customer.",
    timeAr: "قبل 3 أيام - 2:10 م",
    timeEn: "3 days ago - 2:10 PM",
    dateGroup: "earlier",
    isRead: true,
    relatedId: "REQ-0988"
  },
  {
    id: "NOT-1010",
    category: "payments",
    priority: "normal",
    titleAr: "تم استلام دفعة",
    titleEn: "Payment Received",
    descriptionAr: "تمت إضافة دفعة جديدة بقيمة 200 ر.س إلى رصيدك.",
    descriptionEn: "A new payment of 200 SAR has been added to your balance.",
    timeAr: "قبل 4 أيام",
    timeEn: "4 days ago",
    dateGroup: "earlier",
    isRead: true,
  },
  {
    id: "NOT-1011",
    category: "appointments",
    priority: "normal",
    titleAr: "موعد مكتمل",
    titleEn: "Appointment Completed",
    descriptionAr: "تم وضع علامة 'مكتمل' على موعد خدمة دهانات.",
    descriptionEn: "A painting service appointment was marked as completed.",
    timeAr: "قبل أسبوع",
    timeEn: "1 week ago",
    dateGroup: "earlier",
    isRead: true,
  },
  {
    id: "NOT-1012",
    category: "reviews",
    priority: "normal",
    titleAr: "تقييم جديد",
    titleEn: "New Review",
    descriptionAr: "حصلت على تقييم 4 نجوم من علي حسن.",
    descriptionEn: "You received a 4-star review from Ali Hassan.",
    timeAr: "قبل أسبوع",
    timeEn: "1 week ago",
    dateGroup: "earlier",
    isRead: true,
  },
  {
    id: "NOT-1013",
    category: "system",
    priority: "normal",
    titleAr: "إشعار صيانة",
    titleEn: "Maintenance Notice",
    descriptionAr: "ستكون هناك صيانة مجدولة للموقع غدًا في منتصف الليل.",
    descriptionEn: "There will be scheduled maintenance for the site tomorrow at midnight.",
    timeAr: "قبل أسبوعين",
    timeEn: "2 weeks ago",
    dateGroup: "earlier",
    isRead: true,
  },
  {
    id: "NOT-1014",
    category: "requests",
    priority: "normal",
    titleAr: "طلب مكتمل",
    titleEn: "Request Completed",
    descriptionAr: "تم إكمال طلب خدمة النظافة بنجاح.",
    descriptionEn: "Cleaning service request completed successfully.",
    timeAr: "قبل أسبوعين",
    timeEn: "2 weeks ago",
    dateGroup: "earlier",
    isRead: true,
  },
  {
    id: "NOT-1015",
    category: "messages",
    priority: "normal",
    titleAr: "رسالة جديدة",
    titleEn: "New Message",
    descriptionAr: "لديك رسالة جديدة من الدعم الفني.",
    descriptionEn: "You have a new message from technical support.",
    timeAr: "قبل شهر",
    timeEn: "1 month ago",
    dateGroup: "earlier",
    isRead: true,
  }
];
