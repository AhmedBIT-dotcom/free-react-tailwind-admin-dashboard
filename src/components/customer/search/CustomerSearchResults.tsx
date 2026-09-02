import React from "react";
import CustomerServiceCard from "./CustomerServiceCard";
import { ServiceListing } from "./mockData";

interface CustomerSearchResultsProps {
  isRtl: boolean;
  results: ServiceListing[];
}

const CustomerSearchResults: React.FC<CustomerSearchResultsProps> = ({ isRtl, results }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {results.length} {isRtl ? "خدمات متاحة" : "Services Available"}
        </h2>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {isRtl ? "ترتيب حسب:" : "Sort by:"}
          </label>
          <select className="appearance-none bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg py-2 px-4 pr-8 text-sm font-medium outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:text-white cursor-pointer shadow-theme-xs">
            <option value="recommended">{isRtl ? "الموصى بها" : "Recommended"}</option>
            <option value="price_asc">{isRtl ? "السعر: الأقل للأعلى" : "Price: Low to High"}</option>
            <option value="price_desc">{isRtl ? "السعر: الأعلى للأقل" : "Price: High to Low"}</option>
            <option value="rating">{isRtl ? "الأعلى تقييماً" : "Highest Rated"}</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {results.map((service) => (
          <CustomerServiceCard key={service.id} service={service} isRtl={isRtl} />
        ))}
      </div>
    </div>
  );
};

export default CustomerSearchResults;
