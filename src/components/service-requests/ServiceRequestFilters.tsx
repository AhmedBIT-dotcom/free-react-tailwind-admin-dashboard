import { CalenderIcon, PlusIcon } from "../../icons"; // reusing icons 

export default function ServiceRequestFilters() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] w-full">
      <div className="flex flex-col gap-4">
        
        {/* Top actions: Add Button & Filter Title */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              الفلاتر والبحث
            </h3>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">
            <PlusIcon className="w-5 h-5" />
            طلب جديد
          </button>
        </div>

        {/* Filter Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4">
          
          {/* Search */}
          <div className="xl:col-span-2">
            <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">
              بحث
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="بحث برقم الطلب أو العميل أو الخدمة..."
                className="w-full rounded-lg border border-gray-200 bg-transparent py-2 pl-3 pr-10 text-sm outline-none focus:border-brand-500 dark:border-gray-800 dark:bg-white/5 dark:focus:border-brand-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">
              حالة الطلب
            </label>
            <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2 px-3 text-sm outline-none focus:border-brand-500 dark:border-gray-800 dark:bg-white/5 dark:focus:border-brand-500 appearance-none">
              <option value="">جميع الحالات</option>
              <option value="new">جديدة</option>
              <option value="pending">قيد الانتظار</option>
              <option value="in_progress">قيد التنفيذ</option>
              <option value="completed">مكتملة</option>
            </select>
          </div>

          {/* Provider Dropdown */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">
              مقدم الخدمة
            </label>
            <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2 px-3 text-sm outline-none focus:border-brand-500 dark:border-gray-800 dark:bg-white/5 dark:focus:border-brand-500 appearance-none">
              <option value="">جميع مقدمي الخدمة</option>
            </select>
          </div>

          {/* Customer Dropdown */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">
              العميل
            </label>
            <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2 px-3 text-sm outline-none focus:border-brand-500 dark:border-gray-800 dark:bg-white/5 dark:focus:border-brand-500 appearance-none">
              <option value="">جميع العملاء</option>
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">
              تاريخ الطلب
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="من تاريخ - إلى تاريخ"
                className="w-full rounded-lg border border-gray-200 bg-transparent py-2 pl-3 pr-10 text-sm outline-none focus:border-brand-500 dark:border-gray-800 dark:bg-white/5 dark:focus:border-brand-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                <CalenderIcon className="w-4 h-4 text-gray-500" />
              </span>
            </div>
          </div>

        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-2">
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            إعادة ضبط
          </button>
          <button className="rounded-lg bg-gray-900 px-6 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors">
            تطبيق
          </button>
        </div>
      </div>
    </div>
  );
}
