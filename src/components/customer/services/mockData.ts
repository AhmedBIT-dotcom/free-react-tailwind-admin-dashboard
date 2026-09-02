import React from "react";


export interface ServiceCategory {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr?: string;
  descriptionEn?: string;
  icon?: React.ReactNode;
}

export interface BrowseServiceListing {
  id: string;
  titleAr: string;
  titleEn: string;
  providerNameAr: string;
  providerNameEn: string;
  isProviderVerified: boolean;
  categoryAr: string;
  categoryEn: string;
  dailyPrice: number;
  rating: number;
  reviewCount: number;
  serviceAreaAr: string;
  serviceAreaEn: string;
  image: string;
  providerAvatar: string;
}

export const mockBrowseCategories: ServiceCategory[] = [
  { id: "all", nameAr: "جميع الخدمات", nameEn: "All Services", descriptionAr: "جميع التصنيفات", descriptionEn: "All categories", icon: null },
  { id: "plumbing", nameAr: "السباكة", nameEn: "Plumbing", descriptionAr: "أعمال السباكة", descriptionEn: "Plumbing works", icon: null },
  { id: "electrical", nameAr: "الكهرباء", nameEn: "Electrical", descriptionAr: "أعمال الكهرباء", descriptionEn: "Electrical works", icon: null },
  { id: "carpentry", nameAr: "النجارة", nameEn: "Carpentry", descriptionAr: "أعمال النجارة", descriptionEn: "Carpentry works", icon: null },
  { id: "cleaning", nameAr: "التنظيف", nameEn: "Cleaning", descriptionAr: "أعمال التنظيف", descriptionEn: "Cleaning works", icon: null },
  { id: "ac", nameAr: "التكييف", nameEn: "AC", descriptionAr: "صيانة التكييف", descriptionEn: "AC maintenance", icon: null },
];

export const mockBrowseServices: BrowseServiceListing[] = [
  {
    id: "1",
    titleAr: "سباكة متكاملة",
    titleEn: "Complete Plumbing",
    providerNameAr: "مؤسسة النظافة",
    providerNameEn: "Cleaning Est.",
    isProviderVerified: true,
    categoryAr: "السباكة",
    categoryEn: "Plumbing",
    dailyPrice: 250,
    rating: 4.8,
    reviewCount: 128,
    serviceAreaAr: "الرياض",
    serviceAreaEn: "Riyadh",
    image: "/images/user/user-16.jpg",
    providerAvatar: "/images/user/user-01.png"
  },
  {
    id: "2",
    titleAr: "تمديدات كهربائية",
    titleEn: "Electrical Wiring",
    providerNameAr: "كهربائي معتمد",
    providerNameEn: "Certified Electrician",
    isProviderVerified: true,
    categoryAr: "الكهرباء",
    categoryEn: "Electrical",
    dailyPrice: 300,
    rating: 4.9,
    reviewCount: 96,
    serviceAreaAr: "الرياض",
    serviceAreaEn: "Riyadh",
    image: "/images/user/user-17.jpg",
    providerAvatar: "/images/user/user-02.png"
  },
  {
    id: "3",
    titleAr: "نجارة وأثاث مخصص",
    titleEn: "Carpentry & Custom Furniture",
    providerNameAr: "نجار محترف",
    providerNameEn: "Pro Carpenter",
    isProviderVerified: true,
    categoryAr: "النجارة",
    categoryEn: "Carpentry",
    dailyPrice: 350,
    rating: 4.7,
    reviewCount: 74,
    serviceAreaAr: "الرياض",
    serviceAreaEn: "Riyadh",
    image: "/images/user/user-18.jpg",
    providerAvatar: "/images/user/user-03.png"
  },
  {
    id: "4",
    titleAr: "تنظيف المنازل",
    titleEn: "Home Cleaning",
    providerNameAr: "كلين برو",
    providerNameEn: "Clean Pro",
    isProviderVerified: true,
    categoryAr: "التنظيف",
    categoryEn: "Cleaning",
    dailyPrice: 200,
    rating: 4.6,
    reviewCount: 58,
    serviceAreaAr: "الرياض",
    serviceAreaEn: "Riyadh",
    image: "/images/user/user-15.jpg",
    providerAvatar: "/images/user/user-04.png"
  },
  {
    id: "5",
    titleAr: "دهانات داخلية",
    titleEn: "Interior Painting",
    providerNameAr: "دهانات الرياض",
    providerNameEn: "Riyadh Paints",
    isProviderVerified: true,
    categoryAr: "الدهانات",
    categoryEn: "Painting",
    dailyPrice: 180,
    rating: 4.5,
    reviewCount: 43,
    serviceAreaAr: "الرياض",
    serviceAreaEn: "Riyadh",
    image: "/images/user/user-19.jpg",
    providerAvatar: "/images/user/user-05.png"
  },
  {
    id: "6",
    titleAr: "صيانة المكيفات",
    titleEn: "AC Maintenance",
    providerNameAr: "تبريد مثالي",
    providerNameEn: "Perfect Cooling",
    isProviderVerified: true,
    categoryAr: "التكييف",
    categoryEn: "AC",
    dailyPrice: 220,
    rating: 4.8,
    reviewCount: 67,
    serviceAreaAr: "الرياض",
    serviceAreaEn: "Riyadh",
    image: "/images/user/user-20.jpg",
    providerAvatar: "/images/user/user-06.png"
  },
  {
    id: "7",
    titleAr: "تركيب شاشات",
    titleEn: "Screen Installation",
    providerNameAr: "تركيب احترافي",
    providerNameEn: "Pro Install",
    isProviderVerified: true,
    categoryAr: "الكهرباء",
    categoryEn: "Electrical",
    dailyPrice: 150,
    rating: 4.7,
    reviewCount: 35,
    serviceAreaAr: "الرياض",
    serviceAreaEn: "Riyadh",
    image: "/images/user/user-21.jpg",
    providerAvatar: "/images/user/user-07.png"
  },
  {
    id: "8",
    titleAr: "تنسيق حدائق",
    titleEn: "Landscaping",
    providerNameAr: "حدائق المملكة",
    providerNameEn: "Kingdom Gardens",
    isProviderVerified: true,
    categoryAr: "أخرى",
    categoryEn: "Other",
    dailyPrice: 250,
    rating: 4.6,
    reviewCount: 29,
    serviceAreaAr: "الرياض",
    serviceAreaEn: "Riyadh",
    image: "/images/user/user-22.jpg",
    providerAvatar: "/images/user/user-08.png"
  }
];
