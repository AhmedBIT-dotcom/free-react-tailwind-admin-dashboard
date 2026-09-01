export type ConversationStatus = "active" | "unread" | "read";
export type OnlineStatus = "online" | "offline" | "away";

export interface Message {
  id: string;
  senderId: "customer" | "provider";
  textAr: string;
  textEn: string;
  timeAr: string;
  timeEn: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  customerNameAr: string;
  customerNameEn: string;
  avatar: string;
  serviceNameAr: string;
  serviceNameEn: string;
  requestId: string;
  requestStatusAr: string;
  requestStatusEn: string;
  serviceDateAr: string;
  serviceDateEn: string;
  amountAr: string;
  amountEn: string;
  lastMessageAr: string;
  lastMessageEn: string;
  lastMessageTimeAr: string;
  lastMessageTimeEn: string;
  unreadCount: number;
  onlineStatus: OnlineStatus;
  status: ConversationStatus;
  messages: Message[];
}

export const mockConversations: Conversation[] = [
  {
    id: "CONV-001",
    customerNameAr: "محمد أحمد",
    customerNameEn: "Mohammed Ahmed",
    avatar: "/images/user/user-15.jpg",
    serviceNameAr: "سباكة",
    serviceNameEn: "Plumbing",
    requestId: "REQ-1001",
    requestStatusAr: "قيد التنفيذ",
    requestStatusEn: "In Progress",
    serviceDateAr: "2 سبتمبر 2026",
    serviceDateEn: "Sep 2, 2026",
    amountAr: "450 ر.س",
    amountEn: "450 SAR",
    lastMessageAr: "هل يمكنك الحضور غدًا صباحًا؟",
    lastMessageEn: "Can you come tomorrow morning?",
    lastMessageTimeAr: "10:42 ص",
    lastMessageTimeEn: "10:42 AM",
    unreadCount: 2,
    onlineStatus: "online",
    status: "unread",
    messages: [
      {
        id: "MSG-001",
        senderId: "customer",
        textAr: "السلام عليكم",
        textEn: "Hello",
        timeAr: "10:30 ص",
        timeEn: "10:30 AM",
        isRead: true,
      },
      {
        id: "MSG-002",
        senderId: "customer",
        textAr: "هل يمكنك الحضور غدًا الساعة 10 صباحًا؟",
        textEn: "Can you come tomorrow at 10 AM?",
        timeAr: "10:30 ص",
        timeEn: "10:30 AM",
        isRead: true,
      },
      {
        id: "MSG-003",
        senderId: "provider",
        textAr: "وعليكم السلام ورحمة الله\nنعم بالتأكيد، سأكون عندك الساعة 10 صباحاً.",
        textEn: "Hello\nYes sure, I will be there at 10 AM.",
        timeAr: "10:32 ص",
        timeEn: "10:32 AM",
        isRead: true,
      },
      {
        id: "MSG-004",
        senderId: "customer",
        textAr: "ممتاز، عنواني:\nحي النزهة، شارع 15، منزل رقم 45",
        textEn: "Great, my address:\nAl Nuzha dist, St 15, House 45",
        timeAr: "10:33 ص",
        timeEn: "10:33 AM",
        isRead: true,
      },
      {
        id: "MSG-005",
        senderId: "provider",
        textAr: "تم استلام العنوان. شكراً لك.\nسأوافيك قبل الوصول بـ 15 دقيقة.",
        textEn: "Address received. Thank you.\nI will notify you 15 mins before arrival.",
        timeAr: "10:34 ص",
        timeEn: "10:34 AM",
        isRead: true,
      },
      {
        id: "MSG-006",
        senderId: "customer",
        textAr: "شكراً لك، في انتظارك.",
        textEn: "Thank you, waiting for you.",
        timeAr: "10:35 ص",
        timeEn: "10:35 AM",
        isRead: false,
      },
      {
        id: "MSG-007",
        senderId: "customer",
        textAr: "هل يمكنك الحضور غدًا صباحًا؟",
        textEn: "Can you come tomorrow morning?",
        timeAr: "10:42 ص",
        timeEn: "10:42 AM",
        isRead: false,
      },
    ]
  },
  {
    id: "CONV-002",
    customerNameAr: "سارة عبدالله",
    customerNameEn: "Sara Abdullah",
    avatar: "/images/user/user-17.jpg",
    serviceNameAr: "كهرباء",
    serviceNameEn: "Electrical",
    requestId: "REQ-1002",
    requestStatusAr: "مكتمل",
    requestStatusEn: "Completed",
    serviceDateAr: "1 سبتمبر 2026",
    serviceDateEn: "Sep 1, 2026",
    amountAr: "200 ر.س",
    amountEn: "200 SAR",
    lastMessageAr: "شكراً لك، الخدمة كانت ممتازة",
    lastMessageEn: "Thank you, the service was excellent",
    lastMessageTimeAr: "09:15 ص",
    lastMessageTimeEn: "09:15 AM",
    unreadCount: 1,
    onlineStatus: "offline",
    status: "unread",
    messages: [
      {
        id: "MSG-008",
        senderId: "customer",
        textAr: "شكراً لك، الخدمة كانت ممتازة",
        textEn: "Thank you, the service was excellent",
        timeAr: "09:15 ص",
        timeEn: "09:15 AM",
        isRead: false,
      }
    ]
  },
  {
    id: "CONV-003",
    customerNameAr: "خالد الحربي",
    customerNameEn: "Khalid Alharbi",
    avatar: "/images/user/user-16.jpg",
    serviceNameAr: "تكييف",
    serviceNameEn: "Air Conditioning",
    requestId: "REQ-1003",
    requestStatusAr: "بانتظار التأكيد",
    requestStatusEn: "Awaiting Confirmation",
    serviceDateAr: "3 سبتمبر 2026",
    serviceDateEn: "Sep 3, 2026",
    amountAr: "150 ر.س",
    amountEn: "150 SAR",
    lastMessageAr: "كم ستكون تكلفة إضافة فريون؟",
    lastMessageEn: "How much will adding freon cost?",
    lastMessageTimeAr: "أمس",
    lastMessageTimeEn: "Yesterday",
    unreadCount: 1,
    onlineStatus: "away",
    status: "unread",
    messages: [
      {
        id: "MSG-009",
        senderId: "customer",
        textAr: "كم ستكون تكلفة إضافة فريون؟",
        textEn: "How much will adding freon cost?",
        timeAr: "أمس",
        timeEn: "Yesterday",
        isRead: false,
      }
    ]
  },
  {
    id: "CONV-004",
    customerNameAr: "علي حسن",
    customerNameEn: "Ali Hassan",
    avatar: "/images/user/user-18.jpg",
    serviceNameAr: "دهانات",
    serviceNameEn: "Painting",
    requestId: "REQ-1004",
    requestStatusAr: "مكتمل",
    requestStatusEn: "Completed",
    serviceDateAr: "30 أغسطس 2026",
    serviceDateEn: "Aug 30, 2026",
    amountAr: "1200 ر.س",
    amountEn: "1200 SAR",
    lastMessageAr: "هل متاح يوم الخميس؟",
    lastMessageEn: "Are you available on Thursday?",
    lastMessageTimeAr: "أمس",
    lastMessageTimeEn: "Yesterday",
    unreadCount: 0,
    onlineStatus: "offline",
    status: "read",
    messages: [
      {
        id: "MSG-010",
        senderId: "customer",
        textAr: "هل متاح يوم الخميس؟",
        textEn: "Are you available on Thursday?",
        timeAr: "أمس",
        timeEn: "Yesterday",
        isRead: true,
      }
    ]
  },
  {
    id: "CONV-005",
    customerNameAr: "فاطمة علي",
    customerNameEn: "Fatima Ali",
    avatar: "/images/user/user-19.jpg",
    serviceNameAr: "نجارة",
    serviceNameEn: "Carpentry",
    requestId: "REQ-1005",
    requestStatusAr: "قيد التنفيذ",
    requestStatusEn: "In Progress",
    serviceDateAr: "4 سبتمبر 2026",
    serviceDateEn: "Sep 4, 2026",
    amountAr: "600 ر.س",
    amountEn: "600 SAR",
    lastMessageAr: "تم تأكيد الموعد، شكراً لك",
    lastMessageEn: "Appointment confirmed, thank you",
    lastMessageTimeAr: "أمس",
    lastMessageTimeEn: "Yesterday",
    unreadCount: 0,
    onlineStatus: "online",
    status: "active",
    messages: [
      {
        id: "MSG-011",
        senderId: "customer",
        textAr: "تم تأكيد الموعد، شكراً لك",
        textEn: "Appointment confirmed, thank you",
        timeAr: "أمس",
        timeEn: "Yesterday",
        isRead: true,
      }
    ]
  },
  {
    id: "CONV-006",
    customerNameAr: "يوسف محمود",
    customerNameEn: "Yousef Mahmoud",
    avatar: "/images/user/user-20.jpg",
    serviceNameAr: "تنظيف",
    serviceNameEn: "Cleaning",
    requestId: "REQ-1006",
    requestStatusAr: "ملغى",
    requestStatusEn: "Cancelled",
    serviceDateAr: "5 سبتمبر 2026",
    serviceDateEn: "Sep 5, 2026",
    amountAr: "300 ر.س",
    amountEn: "300 SAR",
    lastMessageAr: "أريد حجز موعد الأسبوع القادم",
    lastMessageEn: "I want to book an appointment next week",
    lastMessageTimeAr: "السبت",
    lastMessageTimeEn: "Saturday",
    unreadCount: 3,
    onlineStatus: "offline",
    status: "unread",
    messages: [
      {
        id: "MSG-012",
        senderId: "customer",
        textAr: "أريد حجز موعد الأسبوع القادم",
        textEn: "I want to book an appointment next week",
        timeAr: "السبت",
        timeEn: "Saturday",
        isRead: false,
      }
    ]
  },
  {
    id: "CONV-007",
    customerNameAr: "أميرة خالد",
    customerNameEn: "Amira Khalid",
    avatar: "/images/user/user-21.jpg",
    serviceNameAr: "تكييف",
    serviceNameEn: "Air Conditioning",
    requestId: "REQ-1007",
    requestStatusAr: "مكتمل",
    requestStatusEn: "Completed",
    serviceDateAr: "28 أغسطس 2026",
    serviceDateEn: "Aug 28, 2026",
    amountAr: "250 ر.س",
    amountEn: "250 SAR",
    lastMessageAr: "شكراً على سرعة الاستجابة",
    lastMessageEn: "Thank you for the fast response",
    lastMessageTimeAr: "الجمعة",
    lastMessageTimeEn: "Friday",
    unreadCount: 0,
    onlineStatus: "offline",
    status: "read",
    messages: [
      {
        id: "MSG-013",
        senderId: "customer",
        textAr: "شكراً على سرعة الاستجابة",
        textEn: "Thank you for the fast response",
        timeAr: "الجمعة",
        timeEn: "Friday",
        isRead: true,
      }
    ]
  },
  {
    id: "CONV-008",
    customerNameAr: "عبدالله محمد",
    customerNameEn: "Abdullah Mohammed",
    avatar: "/images/user/user-22.jpg",
    serviceNameAr: "سباكة",
    serviceNameEn: "Plumbing",
    requestId: "REQ-1008",
    requestStatusAr: "مكتمل",
    requestStatusEn: "Completed",
    serviceDateAr: "27 أغسطس 2026",
    serviceDateEn: "Aug 27, 2026",
    amountAr: "350 ر.س",
    amountEn: "350 SAR",
    lastMessageAr: "تم حل المشكلة، شكراً لك",
    lastMessageEn: "Problem fixed, thank you",
    lastMessageTimeAr: "الجمعة",
    lastMessageTimeEn: "Friday",
    unreadCount: 0,
    onlineStatus: "offline",
    status: "read",
    messages: [
      {
        id: "MSG-014",
        senderId: "customer",
        textAr: "تم حل المشكلة، شكراً لك",
        textEn: "Problem fixed, thank you",
        timeAr: "الجمعة",
        timeEn: "Friday",
        isRead: true,
      }
    ]
  }
];
