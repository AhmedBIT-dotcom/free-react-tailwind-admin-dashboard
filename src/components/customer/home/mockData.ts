export interface CategoryItem {
  id: string;
  nameAr: string;
  nameEn: string;
  icon: React.ReactNode;
  serviceCount: number;
}

export interface FeaturedService {
  id: string;
  titleAr: string;
  titleEn: string;
  providerNameAr: string;
  providerNameEn: string;
  price: number;
  rating: number;
  image: string;
}

export type RequestStatus = 
  | "PENDING"
  | "ACCEPTED"
  | "READY_TO_START"
  | "IN_PROGRESS"
  | "PROVIDER_COMPLETED"
  | "CUSTOMER_CONFIRMED"
  | "CLOSED";

export interface ActiveRequest {
  id: string;
  requestId: string;
  serviceNameAr: string;
  serviceNameEn: string;
  providerNameAr: string;
  providerNameEn: string;
  date: string;
  status: RequestStatus;
  statusAr: string;
  statusEn: string;
  image: string;
}

export const mockCategories: CategoryItem[] = [
  {
    id: "1",
    nameAr: "تنظيف",
    nameEn: "Cleaning",
    icon: null, // Will be populated in component
    serviceCount: 24,
  },
  {
    id: "2",
    nameAr: "صيانة",
    nameEn: "Maintenance",
    icon: null,
    serviceCount: 18,
  },
  {
    id: "3",
    nameAr: "سباكة",
    nameEn: "Plumbing",
    icon: null,
    serviceCount: 16,
  },
  {
    id: "4",
    nameAr: "كهرباء",
    nameEn: "Electrical",
    icon: null,
    serviceCount: 15,
  },
  {
    id: "5",
    nameAr: "دهانات وديكور",
    nameEn: "Painting & Decor",
    icon: null,
    serviceCount: 12,
  },
  {
    id: "6",
    nameAr: "نقل وتخزين",
    nameEn: "Moving & Storage",
    icon: null,
    serviceCount: 10,
  },
];

export const mockFeaturedServices: FeaturedService[] = [
  {
    id: "1",
    titleAr: "تنظيف المنازل",
    titleEn: "Home Cleaning",
    providerNameAr: "شركة النظافة المثالية",
    providerNameEn: "Perfect Cleaning Co.",
    price: 150,
    rating: 4.8,
    image: "/images/user/user-15.jpg",
  },
  {
    id: "2",
    titleAr: "سباكة منزلية",
    titleEn: "Home Plumbing",
    providerNameAr: "أبو عبدالله للسباكة",
    providerNameEn: "Abu Abdullah Plumbing",
    price: 120,
    rating: 4.9,
    image: "/images/user/user-16.jpg",
  },
  {
    id: "3",
    titleAr: "تمديدات كهربائية",
    titleEn: "Electrical Wiring",
    providerNameAr: "الكهرباء الحديثة",
    providerNameEn: "Modern Electrical",
    price: 200,
    rating: 4.7,
    image: "/images/user/user-17.jpg",
  },
  {
    id: "4",
    titleAr: "دهانات داخلية",
    titleEn: "Interior Painting",
    providerNameAr: "ورشة الألوان",
    providerNameEn: "Colors Workshop",
    price: 180,
    rating: 4.8,
    image: "/images/user/user-18.jpg",
  },
];

export const mockActiveRequests: ActiveRequest[] = [
  {
    id: "1",
    requestId: "#REQ-2024-1058",
    serviceNameAr: "تنظيف شامل للمنزل",
    serviceNameEn: "Comprehensive Home Cleaning",
    providerNameAr: "شركة النظافة المثالية",
    providerNameEn: "Perfect Cleaning Co.",
    date: "20 مايو 2024",
    status: "IN_PROGRESS",
    statusAr: "قيد التنفيذ",
    statusEn: "In Progress",
    image: "/images/user/user-15.jpg",
  },
  {
    id: "2",
    requestId: "#REQ-2024-1032",
    serviceNameAr: "تمديدات كهربائية جديدة",
    serviceNameEn: "New Electrical Wiring",
    providerNameAr: "الكهرباء الحديثة",
    providerNameEn: "Modern Electrical",
    date: "18 مايو 2024",
    status: "ACCEPTED",
    statusAr: "مقبول",
    statusEn: "Accepted",
    image: "/images/user/user-17.jpg",
  },
  {
    id: "3",
    requestId: "#REQ-2024-0987",
    serviceNameAr: "إصلاح تسرب المياه",
    serviceNameEn: "Water Leak Repair",
    providerNameAr: "أبو عبدالله للسباكة",
    providerNameEn: "Abu Abdullah Plumbing",
    date: "15 مايو 2024",
    status: "CUSTOMER_CONFIRMED",
    statusAr: "مؤكد من العميل",
    statusEn: "Customer Confirmed",
    image: "/images/user/user-16.jpg",
  },
  {
    id: "4",
    requestId: "#REQ-2024-0912",
    serviceNameAr: "دهانات غرفة النوم",
    serviceNameEn: "Bedroom Painting",
    providerNameAr: "ورشة الألوان",
    providerNameEn: "Colors Workshop",
    date: "10 مايو 2024",
    status: "CLOSED",
    statusAr: "مغلق",
    statusEn: "Closed",
    image: "/images/user/user-18.jpg",
  },
];
