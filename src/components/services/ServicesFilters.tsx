import React from "react";
import { ChevronDownIcon } from "../../icons";

interface ServicesFiltersProps {
  isRtl: boolean;
  filters: {
    search: string;
    category: string;
    provider: string;
    status: string;
    minPrice: string;
    maxPrice: string;
    startDate: string;
    endDate: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
  onReset: () => void;
}

export default function ServicesFilters({ isRtl, filters, setFilters, onReset }: ServicesFiltersProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev: any) => ({ ...prev, [name]: value }));
  };

  const statusOptions = isRtl
    ? [
        { value: "", label: "اختر الحالة" },
        { value: "active", label: "نشطة" },
        { value: "pending", label: "قيد المراجعة" },
        { value: "suspended", label: "موقوفة" },
        { value: "rejected", label: "مرفوضة" },
      ]
    : [
        { value: "", label: "Select Status" },
        { value: "active", label: "Active" },
        { value: "pending", label: "Pending Review" },
        { value: "suspended", label: "Suspended" },
        { value: "rejected", label: "Rejected" },
      ];

  const categoryOptions = isRtl
    ? [
        { value: "", label: "اختر الفئة" },
        { value: "Electrical", label: "كهرباء" },
        { value: "Plumbing", label: "سباكة" },
        { value: "Carpentry", label: "نجارة" },
        { value: "HVAC", label: "تكييف وتبريد" },
        { value: "Painting", label: "دهانات" },
        { value: "Cleaning", label: "تنظيف" },
      ]
    : [
        { value: "", label: "Select Category" },
        { value: "Electrical", label: "Electrical" },
        { value: "Plumbing", label: "Plumbing" },
        { value: "Carpentry", label: "Carpentry" },
        { value: "HVAC", label: "HVAC" },
        { value: "Painting", label: "Painting" },
        { value: "Cleaning", label: "Cleaning" },
      ];

  return (
    <div className="flex flex-col gap-4 bg-gray-50/50 p-4 rounded-xl border border-gray-100 dark:bg-white/[0.02] dark:border-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {isRtl ? "البحث" : "Search"}
          </label>
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder={isRtl ? "ابحث عن خدمة..." : "Search services..."}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {isRtl ? "الفئة" : "Category"}
          </label>
          <div className="relative">
            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            >
              {categoryOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <span className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? "left-4" : "right-4"}`}>
              <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </span>
          </div>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {isRtl ? "الحالة" : "Status"}
          </label>
          <div className="relative">
            <select
              name="status"
              value={filters.status}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            >
              {statusOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <span className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? "left-4" : "right-4"}`}>
              <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </span>
          </div>
        </div>
        
        {/* Date Range */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {isRtl ? "تاريخ الإضافة" : "Added Date"}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
            <span className="text-gray-400">-</span>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-2">
        {/* Price Range */}
        <div className="flex flex-col gap-1.5 w-full sm:w-auto">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {isRtl ? "نطاق السعر" : "Price Range"}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              name="minPrice"
              placeholder={isRtl ? "الأدنى" : "Min"}
              value={filters.minPrice}
              onChange={handleChange}
              className="w-24 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
            <span className="text-gray-400">-</span>
            <input
              type="number"
              name="maxPrice"
              placeholder={isRtl ? "الأعلى" : "Max"}
              value={filters.maxPrice}
              onChange={handleChange}
              className="w-24 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onReset}
            className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/50"
          >
            {isRtl ? "إعادة ضبط" : "Reset Filters"}
          </button>
        </div>
      </div>
    </div>
  );
}
