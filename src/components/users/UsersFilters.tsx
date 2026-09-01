import { CalenderIcon, DownloadIcon } from "../../icons";

export default function UsersFilters() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] w-full mt-6">
      <div className="flex flex-col md:flex-row gap-4 items-end justify-between">
        
        {/* Right side: Filters */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/4 lg:w-2/3">
          {/* Search */}
          <div className="flex-1 min-w-[200px]">
            <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">
              بحث
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث بالاسم، البريد الإلكتروني أو رقم الهاتف..."
                className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-3 pr-10 text-sm outline-none focus:border-brand-500 dark:border-gray-800 dark:bg-white/5 dark:focus:border-brand-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Role Dropdown */}
          <div className="w-full md:w-40">
            <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">
              الدور
            </label>
            <div className="relative">
              <select className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-3 text-sm outline-none focus:border-brand-500 dark:border-gray-800 dark:bg-white/5 dark:focus:border-brand-500 appearance-none">
                <option value="all">الكل</option>
                <option value="customer">عميل</option>
                <option value="provider">مقدم خدمة</option>
                <option value="admin">مدير</option>
              </select>
              <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>

          {/* Date Picker */}
          <div className="w-full md:w-48">
            <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">
              تاريخ التسجيل
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="الكل"
                className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-3 pr-10 text-sm outline-none focus:border-brand-500 dark:border-gray-800 dark:bg-white/5 dark:focus:border-brand-500 cursor-pointer text-gray-500"
                readOnly
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <CalenderIcon className="w-4 h-4 text-gray-500" />
              </span>
            </div>
          </div>
        </div>

        {/* Left side: Action Button */}
        <div>
          <button className="flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors w-full md:w-auto justify-center">
            <DownloadIcon className="w-4 h-4" />
            تصدير
          </button>
        </div>

      </div>
    </div>
  );
}
