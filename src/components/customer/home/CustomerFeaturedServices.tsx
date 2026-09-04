import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router";
import { mockFeaturedServices } from "./mockData";

const CustomerFeaturedServices: React.FC = () => {
  const { isRtl } = useLanguage();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {isRtl ? "خدمات مميزة" : "Featured Services"}
        </h3>
        <Link
          to="/customer/services"
          className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          {isRtl ? "عرض الكل" : "View All"}
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockFeaturedServices.map((service) => (
          <div
            key={service.id}
            className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-theme-sm overflow-hidden hover:shadow-theme-md transition-shadow duration-200 dark:bg-gray-900 dark:border-gray-800"
          >
            {/* Image & Overlay */}
            <div className="relative h-48 bg-gray-200 dark:bg-gray-800">
              <img
                src={service.image}
                alt={isRtl ? service.titleAr : service.titleEn}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                </svg>
              </button>
              <div className="absolute bottom-3 left-3 bg-gray-900/70 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                {service.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">
                {isRtl ? service.titleAr : service.titleEn}
              </h4>
              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                </svg>
                <span className="line-clamp-1">{isRtl ? service.providerNameAr : service.providerNameEn}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 shrink-0">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                </svg>
              </div>

              <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {isRtl ? "من" : "From"} <strong className="text-gray-900 dark:text-white text-base font-bold">{service.price}</strong> {isRtl ? "ر.س" : "SAR"}
                </span>
                <Link
                  to="/customer/services"
                  className="text-xs font-medium bg-brand-50 hover:bg-brand-100 text-brand-600 px-3 py-1.5 rounded-lg transition-colors dark:bg-brand-900/20 dark:text-brand-400 dark:hover:bg-brand-900/40"
                >
                  {isRtl ? "للفترة/الزيارة" : "Per visit"}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeaturedServices;
