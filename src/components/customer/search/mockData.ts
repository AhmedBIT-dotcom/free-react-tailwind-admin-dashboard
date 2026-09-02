export interface ServiceListing {
  id: string;
  titleAr: string;
  titleEn: string;
  providerNameAr: string;
  providerNameEn: string;
  categoryAr: string;
  categoryEn: string;
  dailyPrice: number;
  rating: number;
  reviewCount: number;
  serviceAreaAr: string;
  serviceAreaEn: string;
  image: string;
  descriptionAr: string;
  descriptionEn: string;
}

export const mockCategories = [
  { id: "all", nameAr: "الكل", nameEn: "All" },
  { id: "cleaning", nameAr: "تنظيف", nameEn: "Cleaning" },
  { id: "maintenance", nameAr: "صيانة", nameEn: "Maintenance" },
  { id: "plumbing", nameAr: "سباكة", nameEn: "Plumbing" },
  { id: "electrical", nameAr: "كهرباء", nameEn: "Electrical" },
  { id: "painting", nameAr: "دهانات وديكور", nameEn: "Painting & Decor" },
];

export const mockLocations = [
  { id: "all", nameAr: "كل المناطق", nameEn: "All Areas" },
  { id: "riyadh", nameAr: "الرياض", nameEn: "Riyadh" },
  { id: "jeddah", nameAr: "جدة", nameEn: "Jeddah" },
  { id: "dammam", nameAr: "الدمام", nameEn: "Dammam" },
];

export const mockServices: ServiceListing[] = [
  {
    id: "1",
    titleAr: "تنظيف شامل للمنازل والفلل",
    titleEn: "Comprehensive Home & Villa Cleaning",
    providerNameAr: "شركة النظافة المثالية",
    providerNameEn: "Perfect Cleaning Co.",
    categoryAr: "تنظيف",
    categoryEn: "Cleaning",
    dailyPrice: 250,
    rating: 4.8,
    reviewCount: 124,
    serviceAreaAr: "الرياض",
    serviceAreaEn: "Riyadh",
    image: "/images/user/user-15.jpg",
    descriptionAr: "خدمة تنظيف شاملة بأحدث المعدات ومواد التنظيف الآمنة. نضمن لك بيئة نظيفة وصحية.",
    descriptionEn: "Comprehensive cleaning service with the latest equipment and safe cleaning materials.",
  },
  {
    id: "2",
    titleAr: "تأسيس وصيانة سباكة",
    titleEn: "Plumbing Installation & Maintenance",
    providerNameAr: "أبو عبدالله للسباكة",
    providerNameEn: "Abu Abdullah Plumbing",
    categoryAr: "سباكة",
    categoryEn: "Plumbing",
    dailyPrice: 300,
    rating: 4.9,
    reviewCount: 89,
    serviceAreaAr: "جدة",
    serviceAreaEn: "Jeddah",
    image: "/images/user/user-16.jpg",
    descriptionAr: "خبرة أكثر من 10 سنوات في صيانة وتأسيس السباكة المنزلية والتجارية بدقة عالية.",
    descriptionEn: "Over 10 years of experience in home and commercial plumbing maintenance.",
  },
  {
    id: "3",
    titleAr: "تمديدات وصيانة كهربائية",
    titleEn: "Electrical Wiring & Maintenance",
    providerNameAr: "الكهرباء الحديثة",
    providerNameEn: "Modern Electrical",
    categoryAr: "كهرباء",
    categoryEn: "Electrical",
    dailyPrice: 350,
    rating: 4.7,
    reviewCount: 215,
    serviceAreaAr: "الرياض",
    serviceAreaEn: "Riyadh",
    image: "/images/user/user-17.jpg",
    descriptionAr: "فحص وصيانة الأعطال الكهربائية، وتمديد الأسلاك، وتركيب الإضاءة والأجهزة الذكية.",
    descriptionEn: "Inspection and maintenance of electrical faults, wiring, and smart device installation.",
  },
  {
    id: "4",
    titleAr: "دهانات داخلية وخارجية",
    titleEn: "Interior & Exterior Painting",
    providerNameAr: "ورشة الألوان",
    providerNameEn: "Colors Workshop",
    categoryAr: "دهانات وديكور",
    categoryEn: "Painting & Decor",
    dailyPrice: 400,
    rating: 4.8,
    reviewCount: 56,
    serviceAreaAr: "الدمام",
    serviceAreaEn: "Dammam",
    image: "/images/user/user-18.jpg",
    descriptionAr: "دهانات عصرية بألوان ثابتة وجودة عالية. تنفيذ أحدث الديكورات وورق الحائط.",
    descriptionEn: "Modern paints with high quality. Implementation of the latest decorations and wallpapers.",
  },
  {
    id: "5",
    titleAr: "صيانة أجهزة التكييف",
    titleEn: "AC Maintenance",
    providerNameAr: "مؤسسة النسيم للتبريد",
    providerNameEn: "Al Naseem Cooling",
    categoryAr: "صيانة",
    categoryEn: "Maintenance",
    dailyPrice: 200,
    rating: 4.6,
    reviewCount: 340,
    serviceAreaAr: "جدة",
    serviceAreaEn: "Jeddah",
    image: "/images/user/user-19.jpg",
    descriptionAr: "تنظيف وصيانة المكيفات الاسبليت والمركزي، وتعبئة الفريون بكفاءة عالية.",
    descriptionEn: "Cleaning and maintenance of split and central air conditioners, and freon refilling.",
  },
  {
    id: "6",
    titleAr: "تنسيق وتنظيف الحدائق",
    titleEn: "Landscaping & Garden Cleaning",
    providerNameAr: "الطبيعة الخضراء",
    providerNameEn: "Green Nature",
    categoryAr: "تنظيف",
    categoryEn: "Cleaning",
    dailyPrice: 500,
    rating: 4.5,
    reviewCount: 42,
    serviceAreaAr: "الرياض",
    serviceAreaEn: "Riyadh",
    image: "/images/user/user-20.jpg",
    descriptionAr: "تصميم وتنسيق الحدائق المنزلية، قص العشب، وزراعة الورود الموسمية.",
    descriptionEn: "Designing home gardens, lawn mowing, and planting seasonal flowers.",
  }
];
