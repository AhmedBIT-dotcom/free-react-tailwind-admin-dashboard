interface ProviderServicesFiltersProps {
  isRtl: boolean;
}

export default function ProviderServicesFilters({ isRtl }: ProviderServicesFiltersProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 items-end">
        
        {/* Search */}
        <div className="lg:col-span-1">
          <div className="relative">
            <span className="absolute top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 right-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <input
              type="text"
              placeholder={isRtl ? "البحث عن خدمة..." : "Search services..."}
              className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-4 pr-10 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
        </div>

        {/* Category */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "الفئة" : "Category"}
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none">
            <option value="">{isRtl ? "كل الفئات" : "All Categories"}</option>
            <option value="electrical">{isRtl ? "كهرباء" : "Electrical"}</option>
            <option value="plumbing">{isRtl ? "سباكة" : "Plumbing"}</option>
            <option value="hvac">{isRtl ? "تكييف" : "HVAC"}</option>
          </select>
        </div>

        {/* Status */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "الحالة" : "Status"}
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none">
            <option value="">{isRtl ? "كل الحالات" : "All Statuses"}</option>
            <option value="active">{isRtl ? "نشطة" : "Active"}</option>
            <option value="review">{isRtl ? "قيد المراجعة" : "Under Review"}</option>
            <option value="suspended">{isRtl ? "موقوفة" : "Suspended"}</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "نطاق السعر" : "Price Range"}
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none">
            <option value="">{isRtl ? "اختر النطاق" : "Select Range"}</option>
            <option value="0-100">0 - 100</option>
            <option value="100-500">100 - 500</option>
            <option value="500+">500+</option>
          </select>
        </div>

      </div>

      <div className="mt-4 flex gap-3 justify-start">
        <button className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white/90 dark:hover:bg-gray-800/80 transition-colors">
          <svg className="me-2 size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4H5C4.44772 4 4 4.44772 4 5V6.61834C4 7.14872 4.21071 7.65736 4.58579 8.03244L10 13.4466V19C10 19.3496 10.1837 19.6734 10.4851 19.8519L13.4851 21.6297C13.8887 21.8689 14 21.6917 14 21.222V13.4466L19.4142 8.03244C19.7893 7.65736 20 7.14872 20 6.61834V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {isRtl ? "مسح الفلاتر" : "Clear Filters"}
        </button>
      </div>
    </div>
  );
}
