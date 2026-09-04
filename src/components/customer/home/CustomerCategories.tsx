import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router";
import { mockCategories } from "./mockData";
import { BoxCubeIcon } from "../../../icons";

const CustomerCategories: React.FC = () => {
  const { isRtl } = useLanguage();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {isRtl ? "تصفح الفئات" : "Browse Categories"}
        </h3>
        <Link
          to="/customer/services"
          className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          {isRtl ? "عرض الكل" : "View All"}
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {mockCategories.map((category) => (
          <Link
            key={category.id}
            to="/customer/search"
            className="flex flex-col items-center justify-center p-5 bg-white border border-gray-200 rounded-2xl shadow-theme-sm hover:shadow-theme-md hover:-translate-y-1 transition-all duration-200 dark:bg-gray-900 dark:border-gray-800 group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-50 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-200 mb-3 dark:bg-gray-800 dark:text-brand-400 dark:group-hover:bg-brand-500 dark:group-hover:text-white">
              {/* Fallback to GridIcon if icon is null in mock */}
              {category.icon || <BoxCubeIcon />}
            </div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white text-center mb-1">
              {isRtl ? category.nameAr : category.nameEn}
            </h4>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {category.serviceCount} {isRtl ? "خدمة" : "Services"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomerCategories;
