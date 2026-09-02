import React from "react";
import { Link } from "react-router";
import { ServiceRequest, getStatusDetails } from "./mockData";

interface CustomerRequestCardProps {
  request: ServiceRequest;
  isRtl: boolean;
}

const CustomerRequestCard: React.FC<CustomerRequestCardProps> = ({ request, isRtl }) => {
  const statusDetails = getStatusDetails(request.status, isRtl);
  
  // Format date nicely (mock logic)
  const formattedDate = new Date(request.requestDate).toLocaleDateString(isRtl ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-theme-sm dark:bg-gray-900 dark:border-gray-800 transition-shadow hover:shadow-theme-md">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Main Info */}
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 dark:border-gray-700 shrink-0">
            <img src={request.providerAvatar} alt="Provider" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md">
                {request.id}
              </span>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusDetails.colorClass}`}>
                {statusDetails.label}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              {isRtl ? request.serviceNameAr : request.serviceNameEn}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {isRtl ? request.providerNameAr : request.providerNameEn}
            </p>
          </div>
        </div>

        {/* Details and Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end gap-6 w-full lg:w-auto mt-4 lg:mt-0 pt-4 lg:pt-0 border-t border-gray-100 dark:border-gray-800 lg:border-t-0">
          
          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex flex-col">
              <span className="text-xs mb-1 uppercase tracking-wider">{isRtl ? "التاريخ" : "DATE"}</span>
              <span className="font-medium text-gray-900 dark:text-white">{formattedDate}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs mb-1 uppercase tracking-wider">{isRtl ? "المدة" : "DURATION"}</span>
              <span className="font-medium text-gray-900 dark:text-white">{isRtl ? request.durationAr : request.durationEn}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs mb-1 uppercase tracking-wider">{isRtl ? "المبلغ" : "AMOUNT"}</span>
              <span className="font-bold text-gray-900 dark:text-white">
                {request.totalAmount} <span className="text-xs font-normal text-gray-500">{isRtl ? "ريال" : "SAR"}</span>
              </span>
            </div>
          </div>

          <Link
            to={`/customer/requests/${request.id}`}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-theme-xs dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 w-full sm:w-auto font-medium text-sm"
          >
            {isRtl ? "عرض التفاصيل" : "View Details"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerRequestCard;
