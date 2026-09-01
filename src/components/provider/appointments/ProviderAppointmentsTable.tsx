import { useState } from "react";
import ProviderAppointmentStatusBadge, { AppointmentStatus } from "./ProviderAppointmentStatusBadge";

interface ProviderAppointmentsTableProps {
  isRtl: boolean;
}

interface AppointmentItem {
  id: string;
  customerNameAr: string;
  customerNameEn: string;
  customerPhone: string;
  avatar: string;
  serviceNameAr: string;
  serviceNameEn: string;
  serviceDescAr: string;
  serviceDescEn: string;
  dateAr: string;
  dateEn: string;
  timeAr: string;
  timeEn: string;
  durationAr: string;
  durationEn: string;
  priceAr: string;
  priceEn: string;
  status: AppointmentStatus;
}

const mockAppointments: AppointmentItem[] = [
  {
    id: "APT-1001",
    customerNameAr: "أحمد محمد",
    customerNameEn: "Ahmed Mohammed",
    customerPhone: "0555 123 456",
    avatar: "/images/user/user-15.jpg",
    serviceNameAr: "صيانة مكيفات",
    serviceNameEn: "AC Maintenance",
    serviceDescAr: "صيانة وتنظيف مكيفات",
    serviceDescEn: "AC cleaning and maintenance",
    dateAr: "20/3/2024\nالاثنين",
    dateEn: "20/3/2024\nMonday",
    timeAr: "10:00 ص",
    timeEn: "10:00 AM",
    durationAr: "ساعتان",
    durationEn: "2 hours",
    priceAr: "300 ر.س",
    priceEn: "300 SAR",
    status: "confirmed",
  },
  {
    id: "APT-1002",
    customerNameAr: "محمد علي",
    customerNameEn: "Mohammed Ali",
    customerPhone: "0555 987 654",
    avatar: "/images/user/user-16.jpg",
    serviceNameAr: "إصلاح أعطال السباكة",
    serviceNameEn: "Plumbing Repair",
    serviceDescAr: "إصلاح أعطال السباكة",
    serviceDescEn: "Plumbing issue repair",
    dateAr: "21/3/2024\nالثلاثاء",
    dateEn: "21/3/2024\nTuesday",
    timeAr: "09:00 ص",
    timeEn: "09:00 AM",
    durationAr: "ساعة",
    durationEn: "1 hour",
    priceAr: "150 ر.س",
    priceEn: "150 SAR",
    status: "scheduled",
  },
  {
    id: "APT-1003",
    customerNameAr: "سارة عبدالله",
    customerNameEn: "Sara Abdullah",
    customerPhone: "0555 456 789",
    avatar: "/images/user/user-17.jpg",
    serviceNameAr: "تنظيف منازل",
    serviceNameEn: "Home Cleaning",
    serviceDescAr: "تنظيف شامل للمنزل",
    serviceDescEn: "Full home cleaning",
    dateAr: "21/3/2024\nالثلاثاء",
    dateEn: "21/3/2024\nTuesday",
    timeAr: "02:00 م",
    timeEn: "02:00 PM",
    durationAr: "ساعة ونصف",
    durationEn: "1.5 hours",
    priceAr: "250 ر.س",
    priceEn: "250 SAR",
    status: "progress",
  },
  {
    id: "APT-1004",
    customerNameAr: "خالد حسن",
    customerNameEn: "Khalid Hassan",
    customerPhone: "0555 321 987",
    avatar: "/images/user/user-18.jpg",
    serviceNameAr: "تركيب كهرباء منزلية",
    serviceNameEn: "Electrical Installation",
    serviceDescAr: "تركيب كهرباء منزلية",
    serviceDescEn: "Home electrical installation",
    dateAr: "19/3/2024\nالأحد",
    dateEn: "19/3/2024\nSunday",
    timeAr: "04:30 م",
    timeEn: "04:30 PM",
    durationAr: "ساعة",
    durationEn: "1 hour",
    priceAr: "200 ر.س",
    priceEn: "200 SAR",
    status: "completed",
  },
  {
    id: "APT-1005",
    customerNameAr: "فاطمة أحمد",
    customerNameEn: "Fatima Ahmed",
    customerPhone: "0555 789 123",
    avatar: "/images/user/user-19.jpg",
    serviceNameAr: "إصلاح الأجهزة",
    serviceNameEn: "Appliance Repair",
    serviceDescAr: "صيانة وإصلاح الأجهزة",
    serviceDescEn: "Appliance maintenance",
    dateAr: "19/3/2024\nالأحد",
    dateEn: "19/3/2024\nSunday",
    timeAr: "09:00 ص",
    timeEn: "09:00 AM",
    durationAr: "ساعة",
    durationEn: "1 hour",
    priceAr: "180 ر.س",
    priceEn: "180 SAR",
    status: "cancelled",
  },
  {
    id: "APT-1006",
    customerNameAr: "سالم محمود",
    customerNameEn: "Salem Mahmoud",
    customerPhone: "0555 111 222",
    avatar: "/images/user/user-20.jpg",
    serviceNameAr: "دهان وديكور",
    serviceNameEn: "Painting & Decor",
    serviceDescAr: "دهان غرفة نوم",
    serviceDescEn: "Bedroom painting",
    dateAr: "18/3/2024\nالسبت",
    dateEn: "18/3/2024\nSaturday",
    timeAr: "10:30 ص",
    timeEn: "10:30 AM",
    durationAr: "ثلاث ساعات",
    durationEn: "3 hours",
    priceAr: "500 ر.س",
    priceEn: "500 SAR",
    status: "no_show",
  }
];

const tabs = [
  { id: "all", labelAr: "الكل", labelEn: "All" },
  { id: "today", labelAr: "اليوم", labelEn: "Today" },
  { id: "upcoming", labelAr: "القادمة", labelEn: "Upcoming" },
  { id: "completed", labelAr: "مكتملة", labelEn: "Completed" },
  { id: "cancelled", labelAr: "ملغاة", labelEn: "Cancelled" },
];

export default function ProviderAppointmentsTable({ isRtl }: ProviderAppointmentsTableProps) {
  const [activeTab, setActiveTab] = useState("all");

  const renderTableHead = () => (
    <thead className="bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <tr>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "رقم الموعد" : "Appointment ID"}
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
          {isRtl ? "المدة" : "Duration"}
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
        <table className="min-w-[1200px] w-full text-start">
          {renderTableHead()}
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {mockAppointments.map((apt) => (
              <tr key={apt.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-5 py-4">
                  <span className="text-sm font-medium text-gray-800 dark:text-white/90">{apt.id}</span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
                      <img src={apt.avatar} alt="User" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90 mb-0.5">
                        {isRtl ? apt.customerNameAr : apt.customerNameEn}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400" dir="ltr">
                        {apt.customerPhone}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90 mb-0.5">
                      {isRtl ? apt.serviceNameAr : apt.serviceNameEn}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {isRtl ? apt.serviceDescAr : apt.serviceDescEn}
                    </p>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="whitespace-pre-line leading-relaxed" dir={isRtl ? "rtl" : "ltr"}>
                    {isRtl ? apt.dateAr : apt.dateEn}
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">
                  {isRtl ? apt.timeAr : apt.timeEn}
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">
                  {isRtl ? apt.durationAr : apt.durationEn}
                </td>
                <td className="px-5 py-4 text-sm text-gray-800 dark:text-white/90 font-medium">
                  {isRtl ? apt.priceAr : apt.priceEn}
                </td>
                <td className="px-5 py-4">
                  <ProviderAppointmentStatusBadge status={apt.status} isRtl={isRtl} />
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
          {isRtl ? "عرض 1 - 6 من 128 موعد" : "Showing 1 - 6 of 128 appointments"}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border border-gray-200 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900 p-1">
            <span className="text-sm text-gray-500 px-2">{isRtl ? "عرض" : "Show"}</span>
            <select className="bg-transparent text-sm text-gray-700 dark:text-gray-300 outline-none pr-1">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
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
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">26</button>
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
