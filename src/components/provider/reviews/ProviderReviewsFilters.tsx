interface ProviderReviewsFiltersProps {
  isRtl: boolean;
}

export default function ProviderReviewsFilters({ isRtl }: ProviderReviewsFiltersProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 items-end">
        
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
              placeholder={isRtl ? "ابحث في التقييمات..." : "Search reviews..."}
              className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-4 pr-10 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
        </div>

        {/* Rating */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "التقييم" : "Rating"}
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none">
            <option value="">{isRtl ? "كل التقييمات" : "All Ratings"}</option>
            <option value="5">5 {isRtl ? "نجوم" : "Stars"}</option>
            <option value="4">4 {isRtl ? "نجوم" : "Stars"}</option>
            <option value="3">3 {isRtl ? "نجوم" : "Stars"}</option>
            <option value="2">2 {isRtl ? "نجوم" : "Stars"}</option>
            <option value="1">1 {isRtl ? "نجمة" : "Star"}</option>
          </select>
        </div>

        {/* Service */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "الخدمة" : "Service"}
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none">
            <option value="">{isRtl ? "كل الخدمات" : "All Services"}</option>
            <option value="plumbing">{isRtl ? "سباكة" : "Plumbing"}</option>
            <option value="electrical">{isRtl ? "كهرباء" : "Electrical"}</option>
            <option value="ac">{isRtl ? "تكييف" : "Air Conditioning"}</option>
            <option value="painting">{isRtl ? "دهانات" : "Painting"}</option>
            <option value="carpentry">{isRtl ? "نجارة" : "Carpentry"}</option>
          </select>
        </div>

        {/* Date */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "الفترة" : "Date"}
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none">
            <option value="">{isRtl ? "كل الوقت" : "All Time"}</option>
            <option value="week">{isRtl ? "هذا الأسبوع" : "This Week"}</option>
            <option value="month">{isRtl ? "هذا الشهر" : "This Month"}</option>
            <option value="3months">{isRtl ? "آخر 3 أشهر" : "Last 3 Months"}</option>
            <option value="year">{isRtl ? "هذا العام" : "This Year"}</option>
          </select>
        </div>

        {/* Reply Status */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "حالة الرد" : "Reply Status"}
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none">
            <option value="">{isRtl ? "الكل" : "All"}</option>
            <option value="replied">{isRtl ? "تم الرد" : "Replied"}</option>
            <option value="not_replied">{isRtl ? "لم يتم الرد" : "Not Replied"}</option>
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
