

interface ProviderRequestsFiltersProps {
  isRtl: boolean;
}

export default function ProviderRequestsFilters({ isRtl }: ProviderRequestsFiltersProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 items-end">
        
        {/* Search */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "بحث" : "Search"}
          </label>
          <div className="relative">
            <span className="absolute top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 right-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <input
              type="text"
              placeholder={isRtl ? "ابحث برقم الطلب، اسم العميل..." : "Search by ID, customer name..."}
              className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-4 pr-10 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
        </div>

        {/* Status */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "الحالة" : "Status"}
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none">
            <option value="">{isRtl ? "جميع الحالات" : "All Statuses"}</option>
            <option value="new">{isRtl ? "جديد" : "New"}</option>
            <option value="pending">{isRtl ? "قيد الانتظار" : "Pending"}</option>
            <option value="accepted">{isRtl ? "مقبول" : "Accepted"}</option>
            <option value="progress">{isRtl ? "قيد التنفيذ" : "In Progress"}</option>
            <option value="completed">{isRtl ? "مكتمل" : "Completed"}</option>
            <option value="cancelled">{isRtl ? "ملغي" : "Cancelled"}</option>
            <option value="disputed">{isRtl ? "متنازع عليه" : "Disputed"}</option>
          </select>
        </div>

        {/* Service */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "الخدمة" : "Service"}
          </label>
          <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none">
            <option value="">{isRtl ? "جميع الخدمات" : "All Services"}</option>
            <option value="ac">{isRtl ? "تركيب مكيف سبليت" : "Split AC Installation"}</option>
            <option value="electric">{isRtl ? "صيانة كهرباء منزل" : "Electrical Maintenance"}</option>
            <option value="plumb">{isRtl ? "إصلاح تسربات المياه" : "Water Leak Repair"}</option>
          </select>
        </div>

        {/* Date */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "التاريخ" : "Date"}
          </label>
          <input
            type="date"
            className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none"
          />
        </div>

        {/* Customer */}
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {isRtl ? "العميل" : "Customer"}
          </label>
          <input
            type="text"
            placeholder={isRtl ? "اسم العميل..." : "Customer name..."}
            className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
          />
        </div>

      </div>

      <div className="mt-4 flex gap-3 justify-start">
        <button className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-2 text-center text-sm font-medium text-white hover:bg-brand-600 transition-colors">
          {isRtl ? "تطبيق الفلاتر" : "Apply Filters"}
        </button>
        <button className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white/90 dark:hover:bg-gray-800/80 transition-colors">
          {isRtl ? "مسح الفلاتر" : "Clear Filters"}
        </button>
      </div>
    </div>
  );
}
