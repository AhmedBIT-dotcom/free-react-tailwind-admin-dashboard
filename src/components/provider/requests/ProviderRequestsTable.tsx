import { useState } from "react";
import ProviderRequestStatusBadge, { RequestStatus } from "./ProviderRequestStatusBadge";

interface ProviderRequestsTableProps {
  isRtl: boolean;
}

interface RequestItem {
  id: string;
  customerAr: string;
  customerEn: string;
  avatar: string;
  serviceAr: string;
  serviceEn: string;
  dateAr: string;
  dateEn: string;
  timeAr: string;
  timeEn: string;
  locationAr: string;
  locationEn: string;
  priceAr: string;
  priceEn: string;
  status: RequestStatus;
}

const mockRequests: RequestItem[] = [
  {
    id: "REQ-1024",
    customerAr: "محمد أحمد",
    customerEn: "Mohammed Ahmed",
    avatar: "/images/user/user-15.jpg",
    serviceAr: "تركيب مكيف سبليت",
    serviceEn: "Split AC Installation",
    dateAr: "01 سبتمبر 2026",
    dateEn: "01 Sep 2026",
    timeAr: "10:00 ص",
    timeEn: "10:00 AM",
    locationAr: "حي النخيل، الرياض",
    locationEn: "Al Nakheel, Riyadh",
    priceAr: "250 ر.س",
    priceEn: "250 SAR",
    status: "new",
  },
  {
    id: "REQ-1023",
    customerAr: "علي محمد",
    customerEn: "Ali Mohammed",
    avatar: "/images/user/user-16.jpg",
    serviceAr: "صيانة كهرباء منزل",
    serviceEn: "Home Electrical Maintenance",
    dateAr: "01 سبتمبر 2026",
    dateEn: "01 Sep 2026",
    timeAr: "01:00 م",
    timeEn: "01:00 PM",
    locationAr: "حي الياسمين، الرياض",
    locationEn: "Al Yasmin, Riyadh",
    priceAr: "180 ر.س",
    priceEn: "180 SAR",
    status: "progress",
  },
  {
    id: "REQ-1022",
    customerAr: "خالد عبدالله",
    customerEn: "Khalid Abdullah",
    avatar: "/images/user/user-17.jpg",
    serviceAr: "إصلاح تسربات المياه",
    serviceEn: "Water Leak Repair",
    dateAr: "31 أغسطس 2026",
    dateEn: "31 Aug 2026",
    timeAr: "04:00 م",
    timeEn: "04:00 PM",
    locationAr: "حي العقيق، الرياض",
    locationEn: "Al Aqiq, Riyadh",
    priceAr: "220 ر.س",
    priceEn: "220 SAR",
    status: "completed",
  },
  {
    id: "REQ-1021",
    customerAr: "سارة خالد",
    customerEn: "Sara Khalid",
    avatar: "/images/user/user-18.jpg",
    serviceAr: "تركيب إنارة داخلية",
    serviceEn: "Indoor Lighting",
    dateAr: "31 أغسطس 2026",
    dateEn: "31 Aug 2026",
    timeAr: "11:30 ص",
    timeEn: "11:30 AM",
    locationAr: "حي الملقا، الرياض",
    locationEn: "Al Malqa, Riyadh",
    priceAr: "300 ر.س",
    priceEn: "300 SAR",
    status: "pending",
  },
  {
    id: "REQ-1020",
    customerAr: "أحمد فيصل",
    customerEn: "Ahmed Faisal",
    avatar: "/images/user/user-19.jpg",
    serviceAr: "صيانة سخان المياه",
    serviceEn: "Water Heater Fix",
    dateAr: "30 أغسطس 2026",
    dateEn: "30 Aug 2026",
    timeAr: "09:00 ص",
    timeEn: "09:00 AM",
    locationAr: "حي الربيع، الرياض",
    locationEn: "Al Rabi, Riyadh",
    priceAr: "150 ر.س",
    priceEn: "150 SAR",
    status: "cancelled",
  },
  {
    id: "REQ-1019",
    customerAr: "نورة محمد",
    customerEn: "Noura Mohammed",
    avatar: "/images/user/user-20.jpg",
    serviceAr: "أعمال دهان",
    serviceEn: "Painting Works",
    dateAr: "30 أغسطس 2026",
    dateEn: "30 Aug 2026",
    timeAr: "02:30 م",
    timeEn: "02:30 PM",
    locationAr: "حي النرجس، الرياض",
    locationEn: "Al Narjis, Riyadh",
    priceAr: "200 ر.س",
    priceEn: "200 SAR",
    status: "accepted",
  },
  {
    id: "REQ-1018",
    customerAr: "يوسف علي",
    customerEn: "Youssef Ali",
    avatar: "/images/user/user-01.jpg",
    serviceAr: "تمديدات سباكة كاملة",
    serviceEn: "Full Plumbing Extension",
    dateAr: "29 أغسطس 2026",
    dateEn: "29 Aug 2026",
    timeAr: "03:00 م",
    timeEn: "03:00 PM",
    locationAr: "حي الصحافة، الرياض",
    locationEn: "Al Sahafa, Riyadh",
    priceAr: "400 ر.س",
    priceEn: "400 SAR",
    status: "disputed",
  }
];

const tabs = [
  { id: "all", labelAr: "جميع الطلبات", labelEn: "All Requests", count: 48 },
  { id: "new", labelAr: "جديدة", labelEn: "New", count: 6 },
  { id: "pending", labelAr: "قيد الانتظار", labelEn: "Pending", count: 4 },
  { id: "accepted", labelAr: "مقبولة", labelEn: "Accepted", count: 10 },
  { id: "progress", labelAr: "قيد التنفيذ", labelEn: "In Progress", count: 12 },
  { id: "completed", labelAr: "مكتملة", labelEn: "Completed", count: 26 },
  { id: "cancelled", labelAr: "ملغاة", labelEn: "Cancelled", count: 5 },
  { id: "disputed", labelAr: "متنازع عليها", labelEn: "Disputed", count: 2 },
];

export default function ProviderRequestsTable({ isRtl }: ProviderRequestsTableProps) {
  const [activeTab, setActiveTab] = useState("all");

  const renderTableHead = () => (
    <thead className="bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <tr>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "رقم الطلب" : "Request ID"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "العميل" : "Customer"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "الخدمة" : "Service"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "التاريخ" : "Date"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "الوقت" : "Time"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "الموقع" : "Location"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "السعر" : "Price"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "الحالة" : "Status"}
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
      <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-800 no-scrollbar items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-5 py-4 text-sm font-medium transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === tab.id
                ? "border-brand-500 text-brand-500 dark:border-brand-400 dark:text-brand-400"
                : "border-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white/90"
            }`}
          >
            {isRtl ? tab.labelAr : tab.labelEn}
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                activeTab === tab.id
                  ? "bg-brand-500 text-white dark:bg-brand-400 dark:text-gray-900"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[1000px] w-full text-start">
          {renderTableHead()}
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {mockRequests.map((req) => (
              <tr key={req.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-5 py-4">
                  <span className="text-sm font-medium text-gray-800 dark:text-white/90">{req.id}</span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                      <img src={req.avatar} alt="User Avatar" className="h-full w-full object-cover" />
                    </div>
                    <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {isRtl ? req.customerAr : req.customerEn}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">
                  {isRtl ? req.serviceAr : req.serviceEn}
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">
                  <div dir={isRtl ? "rtl" : "ltr"}>{isRtl ? req.dateAr : req.dateEn}</div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">
                  {isRtl ? req.timeAr : req.timeEn}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.0242C11.66 21.0242 11.34 20.8742 11.13 20.6242C8.06 17.0342 4.5 12.3942 4.5 8.42421C4.5 4.14421 7.86 0.774216 12 0.774216C16.14 0.774216 19.5 4.14421 19.5 8.42421C19.5 12.3942 15.94 17.0342 12.87 20.6242C12.66 20.8742 12.34 21.0242 12 21.0242ZM12 2.27422C8.69 2.27422 6 4.96422 6 8.42421C6 11.6142 9.17 15.7542 12 19.1442C14.83 15.7542 18 11.6142 18 8.42421C18 4.96422 15.31 2.27422 12 2.27422Z" fill="currentColor"/>
                      <path d="M12 11.7542C10.16 11.7542 8.66998 10.2642 8.66998 8.42421C8.66998 6.58421 10.16 5.09421 12 5.09421C13.84 5.09421 15.33 6.58421 15.33 8.42421C15.33 10.2642 13.84 11.7542 12 11.7542ZM12 6.59421C11 6.59421 10.17 7.42421 10.17 8.42421C10.17 9.42421 11 10.2542 12 10.2542C13 10.2542 13.83 9.42421 13.83 8.42421C13.83 7.42421 13 6.59421 12 6.59421Z" fill="currentColor"/>
                    </svg>
                    {isRtl ? req.locationAr : req.locationEn}
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-800 dark:text-white/90 font-medium">
                  {isRtl ? req.priceAr : req.priceEn}
                </td>
                <td className="px-5 py-4">
                  <ProviderRequestStatusBadge status={req.status} isRtl={isRtl} />
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
          {isRtl ? "عرض 1 إلى 10 من 48 طلب" : "Showing 1 to 10 of 48 requests"}
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
              {isRtl ? "السابق" : "Prev"}
            </button>
            <button className="px-3 py-1.5 text-sm font-medium bg-brand-500 text-white border-e border-gray-200 dark:border-gray-700">1</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">2</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">3</button>
            <span className="px-2 py-1.5 text-sm text-gray-500 dark:text-gray-400 border-e border-gray-200 dark:border-gray-700">...</span>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">5</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400">
              {isRtl ? "التالي" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
