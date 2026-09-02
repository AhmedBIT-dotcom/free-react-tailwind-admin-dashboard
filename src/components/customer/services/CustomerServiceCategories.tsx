import React from "react";
import { ServiceCategory } from "./mockData";

interface CustomerServiceCategoriesProps {
  isRtl: boolean;
  categories: ServiceCategory[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
}

const CustomerServiceCategories: React.FC<CustomerServiceCategoriesProps> = ({
  isRtl,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="w-full mb-8 overflow-x-auto no-scrollbar pb-2">
      <div className="flex items-center gap-3 min-w-max">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex flex-col items-center justify-center px-6 py-4 rounded-xl border transition-all duration-200 min-w-[120px] ${
              selectedCategory === cat.id
                ? "bg-brand-900 border-brand-800 text-white dark:bg-brand-500/20 dark:border-brand-500 dark:text-brand-400"
                : "bg-white border-gray-200 text-gray-700 hover:border-brand-300 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300 dark:hover:border-gray-700"
            }`}
          >
            <div className={`w-8 h-8 flex items-center justify-center mb-2 ${selectedCategory === cat.id ? "text-brand-400 dark:text-brand-400" : "text-gray-400 dark:text-gray-500"}`}>
              {cat.icon || (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 13H12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 17H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className={`text-sm font-bold mb-1 ${selectedCategory === cat.id ? "text-brand-100 dark:text-white" : ""}`}>
              {isRtl ? cat.nameAr : cat.nameEn}
            </span>
            <span className={`text-[10px] ${selectedCategory === cat.id ? "text-brand-200/80 dark:text-brand-400/80" : "text-gray-400 dark:text-gray-500"}`}>
              {isRtl ? cat.descriptionAr : cat.descriptionEn}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomerServiceCategories;
