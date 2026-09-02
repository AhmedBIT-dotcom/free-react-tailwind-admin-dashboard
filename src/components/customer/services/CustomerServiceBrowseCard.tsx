import React from "react";
import { Link } from "react-router";
import { BrowseServiceListing } from "./mockData";

interface CustomerServiceBrowseCardProps {
  service: BrowseServiceListing;
  isRtl: boolean;
}

const CustomerServiceBrowseCard: React.FC<CustomerServiceBrowseCardProps> = ({ service, isRtl }) => {
  return (
    <Link
      to="#"
      className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-theme-sm overflow-hidden hover:shadow-theme-md transition-all duration-300 dark:bg-gray-900 dark:border-gray-800 group hover:-translate-y-1 block"
    >
      {/* Image & Favorite Overlay */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-800">
        <img
          src={service.image}
          alt={isRtl ? service.titleAr : service.titleEn}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-error-500 transition-colors z-10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title and Verified Badge */}
        <div className="flex items-center gap-2 mb-3">
          <h4 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1">
            {isRtl ? service.titleAr : service.titleEn}
          </h4>
          {service.isProviderVerified && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-500 shrink-0">
              <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
            </svg>
          )}
        </div>

        {/* Provider info and Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{service.rating}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">({service.reviewCount})</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {isRtl ? service.providerNameAr : service.providerNameEn}
            </span>
            <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 border border-gray-200 dark:border-gray-700">
              <img src={service.providerAvatar} alt="Provider" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Price and Location Footer */}
        <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-success-600 dark:text-success-500 leading-none">
              {service.dailyPrice} <span className="text-sm font-normal">{isRtl ? "ريال" : "SAR"}</span>
            </span>
            <span className="text-xs text-gray-400 mt-1">{isRtl ? "يوم /" : "/ day"}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
            </svg>
            {isRtl ? service.serviceAreaAr : service.serviceAreaEn}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CustomerServiceBrowseCard;
