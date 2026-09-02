import React from "react";

interface CustomerSearchBarProps {
  isRtl: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const CustomerSearchBar: React.FC<CustomerSearchBarProps> = ({ isRtl, searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-6 mb-6 shadow-theme-sm">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full">
          <span className={`absolute top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 ${isRtl ? "right-4" : "left-4"}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isRtl ? "ابحث عن خدمة، مزود، أو مجال..." : "Search for a service, provider, or skill..."}
            className={`w-full rounded-xl border border-gray-200 bg-transparent py-3.5 text-base text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white/90 ${isRtl ? "pr-12 pl-4" : "pl-12 pr-4"}`}
          />
        </div>
        <button className="w-full md:w-auto px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors shadow-theme-xs shrink-0">
          {isRtl ? "بحث" : "Search"}
        </button>
      </div>
    </div>
  );
};

export default CustomerSearchBar;
