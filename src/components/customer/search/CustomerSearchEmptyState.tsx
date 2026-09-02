import React from "react";

interface CustomerSearchEmptyStateProps {
  isRtl: boolean;
  onClearFilters: () => void;
}

const CustomerSearchEmptyState: React.FC<CustomerSearchEmptyStateProps> = ({ isRtl, onClearFilters }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-theme-sm min-h-[400px]">
      <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 text-gray-400 dark:text-gray-500">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {isRtl ? "لم يتم العثور على نتائج" : "No results found"}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
        {isRtl
          ? "لم نتمكن من العثور على أي خدمات تطابق بحثك. يرجى تجربة كلمات مفتاحية أخرى أو تقليل عوامل التصفية."
          : "We couldn't find any services matching your search. Please try different keywords or reduce your filters."}
      </p>
      <button
        onClick={onClearFilters}
        className="px-6 py-2.5 bg-brand-50 hover:bg-brand-100 text-brand-600 font-medium rounded-xl transition-colors dark:bg-brand-900/20 dark:text-brand-400 dark:hover:bg-brand-900/40"
      >
        {isRtl ? "مسح جميع التصفيات" : "Clear all filters"}
      </button>
    </div>
  );
};

export default CustomerSearchEmptyState;
