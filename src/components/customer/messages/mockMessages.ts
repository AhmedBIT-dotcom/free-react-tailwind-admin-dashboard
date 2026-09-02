export type MessageSender = "CUSTOMER" | "PROVIDER";

export interface Message {
  messageId: string;
  requestId: string;
  sender: MessageSender;
  content: string;
  timestamp: string; // ISO format string
}

export const mockMessages: Message[] = [
  // Conversation for REQ-10024 (Villa Plumbing Installation)
  {
    messageId: "MSG-001",
    requestId: "REQ-10024",
    sender: "PROVIDER",
    content: "مرحباً، سأصل إلى موقعك في الساعة 4 مساءً.",
    timestamp: "2026-08-28T10:30:00Z",
  },
  {
    messageId: "MSG-002",
    requestId: "REQ-10024",
    sender: "CUSTOMER",
    content: "ممتاز، شكراً لك! أراك حينها.",
    timestamp: "2026-08-28T10:32:00Z",
  },
  {
    messageId: "MSG-003",
    requestId: "REQ-10024",
    sender: "PROVIDER",
    content: "يرجى التأكد من أن محبس المياه الرئيسي يمكن الوصول إليه.",
    timestamp: "2026-08-28T10:35:00Z",
  },
  {
    messageId: "MSG-004",
    requestId: "REQ-10024",
    sender: "CUSTOMER",
    content: "لا مشكلة، سيكون جاهزاً.",
    timestamp: "2026-08-28T10:36:00Z",
  },

  // Conversation for REQ-10025 (Deep Home Cleaning)
  {
    messageId: "MSG-005",
    requestId: "REQ-10025",
    sender: "CUSTOMER",
    content: "هل يمكنكم إحضار مواد تنظيف خاصة بالأرضيات الخشبية؟",
    timestamp: "2026-09-01T11:00:00Z",
  },
  {
    messageId: "MSG-006",
    requestId: "REQ-10025",
    sender: "PROVIDER",
    content: "نعم بالتأكيد، نستخدم مواد آمنة ومخصصة للخشب.",
    timestamp: "2026-09-01T11:15:00Z",
  },
  {
    messageId: "MSG-007",
    requestId: "REQ-10025",
    sender: "CUSTOMER",
    content: "شكراً جزيلاً، بانتظاركم.",
    timestamp: "2026-09-01T11:20:00Z",
  },
];
