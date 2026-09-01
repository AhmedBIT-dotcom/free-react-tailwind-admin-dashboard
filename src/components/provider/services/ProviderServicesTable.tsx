import { useState } from "react";
import ProviderServiceStatusBadge, { ServiceStatus } from "./ProviderServiceStatusBadge";

interface ProviderServicesTableProps {
  isRtl: boolean;
}

interface ServiceItem {
  id: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  image: string;
  categoryAr: string;
  categoryEn: string;
  priceAr: string;
  priceEn: string;
  orders: number;
  rating: number;
  status: ServiceStatus;
  dateAr: string;
  dateEn: string;
}

const mockServices: ServiceItem[] = [
  {
    id: "SRV-01",
    nameAr: "كهرباء منزلية",
    nameEn: "Home Electrical Services",
    descAr: "تمديدات وصيانة الكهرباء",
    descEn: "Electrical extensions and maintenance",
    image: "/images/user/user-15.jpg", // Mock images
    categoryAr: "كهرباء",
    categoryEn: "Electrical",
    priceAr: "150 ر.س",
    priceEn: "150 SAR",
    orders: 28,
    rating: 4.8,
    status: "active",
    dateAr: "2024/05/10",
    dateEn: "2024/05/10",
  },
  {
    id: "SRV-02",
    nameAr: "صيانة مكيفات",
    nameEn: "AC Maintenance",
    descAr: "تنظيف وصيانة المكيفات",
    descEn: "AC cleaning and maintenance",
    image: "/images/user/user-16.jpg",
    categoryAr: "صيانة",
    categoryEn: "Maintenance",
    priceAr: "200 ر.س",
    priceEn: "200 SAR",
    orders: 35,
    rating: 4.9,
    status: "active",
    dateAr: "2024/05/12",
    dateEn: "2024/05/12",
  },
  {
    id: "SRV-03",
    nameAr: "سباكة منزلية",
    nameEn: "Home Plumbing",
    descAr: "إصلاح تسربات وتركيب أدوات",
    descEn: "Leak repair and fixture installation",
    image: "/images/user/user-17.jpg",
    categoryAr: "سباكة",
    categoryEn: "Plumbing",
    priceAr: "120 ر.س",
    priceEn: "120 SAR",
    orders: 22,
    rating: 4.6,
    status: "review",
    dateAr: "2024/05/15",
    dateEn: "2024/05/15",
  },
  {
    id: "SRV-04",
    nameAr: "دهان وديكور",
    nameEn: "Painting & Decoration",
    descAr: "دهان داخلي وخارجي وديكور",
    descEn: "Indoor, outdoor painting and decor",
    image: "/images/user/user-18.jpg",
    categoryAr: "دهان",
    categoryEn: "Painting",
    priceAr: "300 ر.س",
    priceEn: "300 SAR",
    orders: 18,
    rating: 4.7,
    status: "active",
    dateAr: "2024/05/18",
    dateEn: "2024/05/18",
  },
  {
    id: "SRV-05",
    nameAr: "صيانة الأجهزة",
    nameEn: "Appliance Repair",
    descAr: "صيانة الغسالات والثلاجات",
    descEn: "Washing machines and fridges repair",
    image: "/images/user/user-19.jpg",
    categoryAr: "صيانة",
    categoryEn: "Maintenance",
    priceAr: "250 ر.س",
    priceEn: "250 SAR",
    orders: 12,
    rating: 4.5,
    status: "suspended",
    dateAr: "2024/05/20",
    dateEn: "2024/05/20",
  }
];

const tabs = [
  { id: "all", labelAr: "الكل", labelEn: "All" },
  { id: "active", labelAr: "نشطة", labelEn: "Active" },
  { id: "review", labelAr: "قيد المراجعة", labelEn: "Under Review" },
  { id: "suspended", labelAr: "موقوفة", labelEn: "Suspended" },
];

export default function ProviderServicesTable({ isRtl }: ProviderServicesTableProps) {
  const [activeTab, setActiveTab] = useState("all");

  const renderTableHead = () => (
    <thead className="bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <tr>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "الخدمة" : "Service"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "الفئة" : "Category"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "السعر" : "Price"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-center">
          {isRtl ? "الطلبات" : "Orders"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-center">
          {isRtl ? "التقييم" : "Rating"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "الحالة" : "Status"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "تاريخ الإنشاء" : "Created Date"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-center">
          {isRtl ? "الإجراءات" : "Actions"}
        </th>
      </tr>
    </thead>
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
      
      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-800 no-scrollbar items-center px-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-6 py-4 text-sm font-medium transition-colors border-b-2 flex-1 text-center ${
              activeTab === tab.id
                ? "border-brand-500 text-brand-500 dark:border-brand-400 dark:text-brand-400"
                : "border-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white/90"
            }`}
          >
            {isRtl ? tab.labelAr : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[1000px] w-full text-start">
          {renderTableHead()}
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {mockServices.map((srv) => (
              <tr key={srv.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-16 rounded-md overflow-hidden bg-gray-100 shrink-0">
                      <img src={srv.image} alt={srv.nameEn} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90 mb-0.5">
                        {isRtl ? srv.nameAr : srv.nameEn}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {isRtl ? srv.descAr : srv.descEn}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">
                  {isRtl ? srv.categoryAr : srv.categoryEn}
                </td>
                <td className="px-5 py-4 text-sm text-gray-800 dark:text-white/90 font-medium">
                  {isRtl ? srv.priceAr : srv.priceEn}
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                  {srv.orders}
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span>{srv.rating}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-warning-500">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <ProviderServiceStatusBadge status={srv.status} isRtl={isRtl} />
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">
                  <div dir={isRtl ? "rtl" : "ltr"}>{isRtl ? srv.dateAr : srv.dateEn}</div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-center gap-2 relative">
                    <button className="text-gray-500 hover:text-brand-500 transition-colors p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor"/>
                        <path d="M12 6.5C12.8284 6.5 13.5 5.82843 13.5 5C13.5 4.17157 12.8284 3.5 12 3.5C11.1716 3.5 10.5 4.17157 10.5 5C10.5 5.82843 11.1716 6.5 12 6.5Z" fill="currentColor"/>
                        <path d="M12 20.5C12.8284 20.5 13.5 19.8284 13.5 19C13.5 18.1716 12.8284 17.5 12 17.5C11.1716 17.5 10.5 18.1716 10.5 19C10.5 19.8284 11.1716 20.5 12 20.5Z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (Mock) */}
      <div className="border-t border-gray-100 p-5 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {isRtl ? "عرض 1 - 10 من 24 خدمة" : "Showing 1 - 10 of 24 services"}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border border-gray-200 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900 p-1">
            <span className="text-sm text-gray-500 px-2">{isRtl ? "عرض" : "Show"}</span>
            <select className="bg-transparent text-sm text-gray-700 dark:text-gray-300 outline-none pr-1">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="flex border border-gray-200 rounded-lg dark:border-gray-700 overflow-hidden">
            <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400 border-e border-gray-200 dark:border-gray-700">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
              </svg>
            </button>
            <button className="px-3 py-1.5 text-sm font-medium bg-brand-500 text-white border-e border-gray-200 dark:border-gray-700">1</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">2</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">3</button>
            <span className="px-2 py-1.5 text-sm text-gray-500 dark:text-gray-400 border-e border-gray-200 dark:border-gray-700">...</span>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">4</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
