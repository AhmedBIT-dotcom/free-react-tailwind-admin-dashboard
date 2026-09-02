import React from "react";
import { ServiceListing } from "./mockData";
import { Link } from "react-router";

interface CustomerServiceCardProps {
  service: ServiceListing;
  isRtl: boolean;
}

const CustomerServiceCard: React.FC<CustomerServiceCardProps> = ({ service, isRtl }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-theme-sm hover:shadow-theme-md hover:border-brand-300 transition-all duration-300 dark:bg-gray-900 dark:border-gray-800 dark:hover:border-brand-500/50 flex flex-col sm:flex-row group">
      
      {/* Image Section */}
      <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-gray-100 dark:bg-gray-800">
        <img
          src={service.image}
          alt={isRtl ? service.titleAr : service.titleEn}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/50 backdrop-blur-md rounded-full text-gray-700 hover:text-error-500 hover:bg-white transition-colors dark:bg-gray-900/50 dark:text-gray-300 dark:hover:text-error-400 dark:hover:bg-gray-800">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
          </svg>
        </button>
        <div className={`absolute bottom-3 ${isRtl ? "right-3" : "left-3"} bg-white dark:bg-gray-800 text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-1`}>
          <span className="text-gray-900 dark:text-white">{service.rating}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <span className="text-gray-400 font-normal">({service.reviewCount})</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
          <div>
            <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 text-xs font-medium rounded-md mb-2">
              {isRtl ? service.categoryAr : service.categoryEn}
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-brand-500 transition-colors">
              {isRtl ? service.titleAr : service.titleEn}
            </h3>
          </div>
          <div className={`text-right ${isRtl ? "sm:text-left" : "sm:text-right"}`}>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {service.dailyPrice} <span className="text-sm font-normal text-gray-500">{isRtl ? "ر.س" : "SAR"}</span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {isRtl ? "لليوم الواحد" : "/ day"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
          </svg>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {isRtl ? service.providerNameAr : service.providerNameEn}
          </span>
          <span className="text-gray-300 dark:text-gray-600 mx-1">•</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
          </svg>
          <span>{isRtl ? service.serviceAreaAr : service.serviceAreaEn}</span>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">
          {isRtl ? service.descriptionAr : service.descriptionEn}
        </p>

        <div className="mt-auto flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
          <Link
            to="#"
            className="flex-grow flex items-center justify-center py-2.5 px-4 bg-brand-50 hover:bg-brand-100 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400 dark:hover:bg-brand-500/20 font-medium text-sm rounded-lg transition-colors"
          >
            {isRtl ? "التفاصيل" : "View Details"}
          </Link>
          <Link
            to="#"
            className="flex-grow flex items-center justify-center py-2.5 px-4 bg-brand-500 hover:bg-brand-600 text-white font-medium text-sm rounded-lg transition-colors shadow-theme-xs"
          >
            {isRtl ? "اطلب الخدمة" : "Request Service"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerServiceCard;
