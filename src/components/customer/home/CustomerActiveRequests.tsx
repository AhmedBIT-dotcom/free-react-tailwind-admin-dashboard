import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router";
import { mockActiveRequests } from "./mockData";

const CustomerActiveRequests: React.FC = () => {
  const { isRtl } = useLanguage();

  const getStatusBadge = (status: string, statusAr: string, statusEn: string) => {
    let colorClass = "";
    switch (status) {
      case "PENDING":
      case "ACCEPTED":
      case "READY_TO_START":
        colorClass = "bg-warning-50 text-warning-600 dark:bg-warning-900/20 dark:text-warning-400";
        break;
      case "IN_PROGRESS":
        colorClass = "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400";
        break;
      case "PROVIDER_COMPLETED":
      case "CUSTOMER_CONFIRMED":
        colorClass = "bg-success-50 text-success-600 dark:bg-success-900/20 dark:text-success-400";
        break;
      case "CLOSED":
        colorClass = "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
        break;
      default:
        colorClass = "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    }

    return (
      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${colorClass}`}>
        {isRtl ? statusAr : statusEn}
      </span>
    );
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {isRtl ? "طلباتي النشطة" : "Active Requests"}
        </h3>
        <Link
          to="/customer/requests"
          className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          {isRtl ? "عرض الكل" : "View All"}
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-theme-sm dark:bg-gray-900 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400">
              <tr>
                <th className={`px-4 py-3 font-medium ${isRtl ? "text-right" : "text-left"}`}>
                  {isRtl ? "رقم الطلب" : "Request ID"}
                </th>
                <th className={`px-4 py-3 font-medium ${isRtl ? "text-right" : "text-left"}`}>
                  {isRtl ? "الخدمة / مزود الخدمة" : "Service / Provider"}
                </th>
                <th className={`px-4 py-3 font-medium ${isRtl ? "text-right" : "text-left"}`}>
                  {isRtl ? "التاريخ" : "Date"}
                </th>
                <th className={`px-4 py-3 font-medium ${isRtl ? "text-right" : "text-left"}`}>
                  {isRtl ? "الحالة" : "Status"}
                </th>
                <th className={`px-4 py-3 font-medium text-center`}>
                  {isRtl ? "إجراء" : "Action"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {mockActiveRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                    {request.requestId}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={request.image} alt="Provider" className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {isRtl ? request.serviceNameAr : request.serviceNameEn}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRtl ? request.providerNameAr : request.providerNameEn}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                    {request.date}
                  </td>
                  <td className="px-4 py-3">
                    {getStatusBadge(request.status, request.statusAr, request.statusEn)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Link
                      to="/customer/requests"
                      className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/20 rounded-lg transition-colors"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRtl ? "rotate-180" : ""}>
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerActiveRequests;
