import React from "react";
import { mockCategories, mockLocations } from "./mockData";

interface CustomerSearchFiltersProps {
  isRtl: boolean;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  selectedLocation: string;
  setSelectedLocation: (val: string) => void;
  priceRange: number;
  setPriceRange: (val: number) => void;
  minRating: number;
  setMinRating: (val: number) => void;
}

const CustomerSearchFilters: React.FC<CustomerSearchFiltersProps> = ({
  isRtl,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
}) => {
  return (
    <div className="w-full lg:w-72 shrink-0">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-theme-sm sticky top-24">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
            <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {isRtl ? "تصفية النتائج" : "Filter Results"}
        </h3>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {isRtl ? "الفئة" : "Category"}
          </label>
          <div className="space-y-2">
            {mockCategories.map((cat) => (
              <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="category"
                    value={cat.id}
                    checked={selectedCategory === cat.id}
                    onChange={() => setSelectedCategory(cat.id)}
                    className="peer sr-only"
                  />
                  <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 peer-checked:border-brand-500 dark:peer-checked:border-brand-500 peer-checked:bg-brand-500 transition-colors"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
                <span className={`text-sm ${selectedCategory === cat.id ? "text-gray-900 dark:text-white font-medium" : "text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200"} transition-colors`}>
                  {isRtl ? cat.nameAr : cat.nameEn}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {isRtl ? "المنطقة" : "Location"}
          </label>
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className={`w-full appearance-none rounded-lg border border-gray-200 bg-transparent py-2.5 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white/90 ${isRtl ? "pr-3 pl-10" : "pl-3 pr-10"}`}
            >
              {mockLocations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {isRtl ? loc.nameAr : loc.nameEn}
                </option>
              ))}
            </select>
            <span className={`absolute top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none ${isRtl ? "left-3" : "right-3"}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {isRtl ? "أقصى سعر يومي" : "Max Daily Price"}
            </label>
            <span className="text-xs font-semibold text-brand-500 bg-brand-50 dark:bg-brand-900/20 px-2 py-0.5 rounded-md">
              {priceRange} {isRtl ? "ر.س" : "SAR"}
            </span>
          </div>
          <input
            type="range"
            min="100"
            max="1500"
            step="50"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-brand-500"
          />
          <div className="flex items-center justify-between mt-1 text-xs text-gray-400">
            <span>100</span>
            <span>1500</span>
          </div>
        </div>

        {/* Minimum Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {isRtl ? "التقييم (الحد الأدنى)" : "Minimum Rating"}
          </label>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="minRating"
                    value={rating}
                    checked={minRating === rating}
                    onChange={() => setMinRating(rating)}
                    className="peer sr-only"
                  />
                  <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 peer-checked:border-brand-500 dark:peer-checked:border-brand-500 peer-checked:bg-brand-500 transition-colors"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={i < rating ? "#F59E0B" : "currentColor"}
                      className={i < rating ? "text-amber-500" : "text-gray-300 dark:text-gray-600"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                    {isRtl ? "وأكثر" : "& up"}
                  </span>
                </div>
              </label>
            ))}
            <label className="flex items-center gap-3 cursor-pointer group mt-2">
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="minRating"
                  value={0}
                  checked={minRating === 0}
                  onChange={() => setMinRating(0)}
                  className="peer sr-only"
                />
                <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 peer-checked:border-brand-500 dark:peer-checked:border-brand-500 peer-checked:bg-brand-500 transition-colors"></div>
                <div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
              </div>
              <span className={`text-sm ${minRating === 0 ? "text-gray-900 dark:text-white font-medium" : "text-gray-600 dark:text-gray-400"}`}>
                {isRtl ? "أي تقييم" : "Any Rating"}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSearchFilters;
