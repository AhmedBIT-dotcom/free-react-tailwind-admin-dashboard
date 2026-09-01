export interface ProviderProfileData {
  id: string;
  firstNameAr: string;
  firstNameEn: string;
  lastNameAr: string;
  lastNameEn: string;
  titleAr: string;
  titleEn: string;
  avatar: string;
  phone: string;
  email: string;
  genderAr: string;
  genderEn: string;
  dob: string;
  
  categoryAr: string;
  categoryEn: string;
  specialtyAr: string;
  specialtyEn: string;
  experienceYears: number;
  cityAr: string;
  cityEn: string;
  
  whatsapp: string;
  
  bioAr: string;
  bioEn: string;
  
  rating: number;
  reviewCount: number;
  status: 'active' | 'inactive';
  completionPercentage: number;
  
  serviceAreasAr: string[];
  serviceAreasEn: string[];
  
  languages: {
    id: string;
    nameAr: string;
    nameEn: string;
    levelAr: string;
    levelEn: string;
  }[];
  
  workingHours: {
    dayAr: string;
    dayEn: string;
    isOpen: boolean;
    start: string;
    end: string;
  }[];
}

export const mockProfileData: ProviderProfileData = {
  id: "PRV-1001",
  firstNameAr: "أحمد",
  firstNameEn: "Ahmed",
  lastNameAr: "محمد",
  lastNameEn: "Mohammed",
  titleAr: "سباك محترف",
  titleEn: "Professional Plumber",
  avatar: "/images/user/user-01.jpg", // default user avatar
  phone: "+967 7XX XXX XXX",
  email: "ahmed@example.com",
  genderAr: "ذكر",
  genderEn: "Male",
  dob: "15 يناير 1990",
  
  categoryAr: "الصيانة المنزلية",
  categoryEn: "Home Maintenance",
  specialtyAr: "السباكة وتمديدات المياه",
  specialtyEn: "Plumbing and Water Extensions",
  experienceYears: 8,
  cityAr: "صنعاء",
  cityEn: "Sanaa",
  
  whatsapp: "+967 7XX XXX XXX",
  
  bioAr: "متخصص في أعمال السباكة والصيانة المنزلية وتمديدات المياه، مع خبرة عملية تمتد لعدة سنوات.",
  bioEn: "Specialized in plumbing, home maintenance, and water extensions, with years of practical experience.",
  
  rating: 4.8,
  reviewCount: 124,
  status: 'active',
  completionPercentage: 85,
  
  serviceAreasAr: ["حدة", "التحرير", "السبعين", "شعوب"],
  serviceAreasEn: ["Hadda", "Tahrir", "Sabeen", "Shu'ub"],
  
  languages: [
    { id: "lang-1", nameAr: "العربية", nameEn: "Arabic", levelAr: "أساسي", levelEn: "Native" },
    { id: "lang-2", nameAr: "الإنجليزية", nameEn: "English", levelAr: "متوسط", levelEn: "Intermediate" }
  ],
  
  workingHours: [
    { dayAr: "الأحد", dayEn: "Sunday", isOpen: true, start: "08:00 AM", end: "08:00 PM" },
    { dayAr: "الإثنين", dayEn: "Monday", isOpen: true, start: "08:00 AM", end: "08:00 PM" },
    { dayAr: "الثلاثاء", dayEn: "Tuesday", isOpen: true, start: "08:00 AM", end: "08:00 PM" },
    { dayAr: "الأربعاء", dayEn: "Wednesday", isOpen: true, start: "08:00 AM", end: "08:00 PM" },
    { dayAr: "الخميس", dayEn: "Thursday", isOpen: true, start: "08:00 AM", end: "08:00 PM" },
    { dayAr: "الجمعة", dayEn: "Friday", isOpen: false, start: "", end: "" },
    { dayAr: "السبت", dayEn: "Saturday", isOpen: true, start: "09:00 AM", end: "09:00 PM" },
  ]
};
