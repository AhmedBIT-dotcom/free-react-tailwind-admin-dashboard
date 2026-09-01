import { useState, useRef, useEffect } from "react";
import { HorizontaLDots, AngleRightIcon, AngleLeftIcon } from "../../icons";

export interface Service {
  id: string;
  nameAr: string;
  nameEn: string;
  providerNameAr: string;
  providerNameEn: string;
  providerAvatar?: string;
  categoryAr: string;
  categoryEn: string;
  categoryValue: string;
  price: number;
  status: 'active' | 'pending' | 'suspended' | 'rejected';
  rating: number;
  requests: number;
  createdAt: string;
}

interface ServicesTableProps {
  services: Service[];
  isRtl: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ServiceStatusBadge = ({ status, isRtl }: { status: Service['status'], isRtl: boolean }) => {
  switch (status) {
    case "active":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success-50 px-2.5 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
          <span className="w-1.5 h-1.5 rounded-full bg-success-500"></span>
          {isRtl ? "نشطة" : "Active"}
        </span>
      );
    case "pending":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-warning-50 px-2.5 py-1 text-xs font-medium text-warning-600 dark:bg-warning-500/10 dark:text-warning-400">
          <span className="w-1.5 h-1.5 rounded-full bg-warning-500"></span>
          {isRtl ? "قيد المراجعة" : "Pending"}
        </span>
      );
    case "suspended":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-error-50 px-2.5 py-1 text-xs font-medium text-error-600 dark:bg-error-500/10 dark:text-error-400">
          <span className="w-1.5 h-1.5 rounded-full bg-error-500"></span>
          {isRtl ? "موقوفة" : "Suspended"}
        </span>
      );
    case "rejected":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
          {isRtl ? "مرفوضة" : "Rejected"}
        </span>
      );
    default:
      return null;
  }
};

export default function ServicesTable({ services, isRtl, currentPage, totalPages, onPageChange }: ServicesTableProps) {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(isRtl ? 'ar-YE' : 'en-US').format(price);
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="border border-gray-200 rounded-xl overflow-hidden dark:border-gray-800">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
              <thead className="bg-gray-50 dark:bg-gray-900/50">
                <tr>
                  <th scope="col" className={`px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {isRtl ? "الخدمة" : "Service"}
                  </th>
                  <th scope="col" className={`px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {isRtl ? "مقدم الخدمة" : "Provider"}
                  </th>
                  <th scope="col" className={`px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {isRtl ? "السعر" : "Price"}
                  </th>
                  <th scope="col" className={`px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {isRtl ? "الحالة" : "Status"}
                  </th>
                  <th scope="col" className={`px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {isRtl ? "التقييم" : "Rating"}
                  </th>
                  <th scope="col" className={`px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {isRtl ? "الطلبات" : "Requests"}
                  </th>
                  <th scope="col" className={`px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {isRtl ? "تاريخ الإضافة" : "Added Date"}
                  </th>
                  <th scope="col" className={`px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 text-center`}>
                    {isRtl ? "الإجراءات" : "Actions"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900/20">
                {services.length > 0 ? (
                  services.map((service) => (
                    <tr key={service.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 dark:bg-gray-800">
                            {service.providerAvatar ? (
                              <img src={service.providerAvatar} alt="Service" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold dark:bg-brand-500/20 dark:text-brand-400">
                                {isRtl ? service.nameAr.charAt(0) : service.nameEn.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                              {isRtl ? service.nameAr : service.nameEn}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {isRtl ? service.categoryAr : service.categoryEn}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {isRtl ? service.providerNameAr : service.providerNameEn}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {formatPrice(service.price)} {isRtl ? "ر.ي" : "YER"}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <ServiceStatusBadge status={service.status} isRtl={isRtl} />
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{service.rating}</span>
                          <span className="text-warning-500 text-sm">★</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{service.requests}</span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{service.createdAt}</span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center relative">
                        <button
                          onClick={() => setOpenDropdownId(openDropdownId === service.id ? null : service.id)}
                          className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                        >
                          <HorizontaLDots className="w-5 h-5" />
                        </button>
                        
                        {openDropdownId === service.id && (
                          <div
                            ref={dropdownRef}
                            className={`absolute top-10 ${isRtl ? 'left-4' : 'right-4'} w-36 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-10 dark:bg-gray-900 dark:border-gray-800`}
                          >
                            <button className={`w-full text-sm px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-300 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                              {isRtl ? "عرض التفاصيل" : "View Details"}
                            </button>
                            <button className={`w-full text-sm px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-300 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                              {isRtl ? "تعديل" : "Edit"}
                            </button>
                            {service.status === 'suspended' ? (
                              <button className={`w-full text-sm px-4 py-2 text-success-600 hover:bg-success-50 dark:hover:bg-success-500/10 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                                {isRtl ? "تنشيط" : "Activate"}
                              </button>
                            ) : (
                              <button className={`w-full text-sm px-4 py-2 text-error-600 hover:bg-error-50 dark:hover:bg-error-500/10 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                                {isRtl ? "إيقاف" : "Suspend"}
                              </button>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                      {isRtl ? "لا توجد خدمات مطابقة للبحث." : "No services found."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {isRtl ? `عرض الصفحة ${currentPage} من ${totalPages}` : `Showing page ${currentPage} of ${totalPages}`}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            >
              {isRtl ? <AngleRightIcon className="w-5 h-5" /> : <AngleLeftIcon className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-1">
              {getPageNumbers().map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => onPageChange(pageNum)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === pageNum
                      ? "bg-brand-500 text-white"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>
            <button
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            >
              {isRtl ? <AngleLeftIcon className="w-5 h-5" /> : <AngleRightIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
