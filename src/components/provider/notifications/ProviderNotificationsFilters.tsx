interface ProviderNotificationsFiltersProps {
  isRtl: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  statusFilter: string;
  onStatusFilterChange: (status: string) => void;
  categoryFilter: string;
  onCategoryFilterChange: (category: string) => void;
  dateFilter: string;
  onDateFilterChange: (date: string) => void;
  onClearFilters: () => void;
}

export default function ProviderNotificationsFilters({
  isRtl,
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  categoryFilter,
  onCategoryFilterChange,
  dateFilter,
  onDateFilterChange,
  onClearFilters
}: ProviderNotificationsFiltersProps) {
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
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={isRtl ? "ابحث في الإشعارات..." : "Search notifications..."}
              className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-4 pr-10 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
        </div>

        {/* Status Filter */}
        <div className="lg:col-span-1">
          <select 
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none"
          >
            <option value="all">{isRtl ? "الكل (الحالة)" : "All (Status)"}</option>
            <option value="unread">{isRtl ? "غير مقروءة" : "Unread"}</option>
            <option value="read">{isRtl ? "مقروءة" : "Read"}</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="lg:col-span-1">
          <select 
            value={categoryFilter}
            onChange={(e) => onCategoryFilterChange(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none"
          >
            <option value="all">{isRtl ? "الكل (الفئة)" : "All (Category)"}</option>
            <option value="requests">{isRtl ? "الطلبات" : "Requests"}</option>
            <option value="messages">{isRtl ? "الرسائل" : "Messages"}</option>
            <option value="appointments">{isRtl ? "المواعيد" : "Appointments"}</option>
            <option value="payments">{isRtl ? "المدفوعات" : "Payments"}</option>
            <option value="reviews">{isRtl ? "التقييمات" : "Reviews"}</option>
            <option value="services">{isRtl ? "الخدمات" : "Services"}</option>
            <option value="system">{isRtl ? "النظام" : "System"}</option>
          </select>
        </div>

        {/* Date Filter & Clear */}
        <div className="lg:col-span-1 flex gap-2">
          <select 
            value={dateFilter}
            onChange={(e) => onDateFilterChange(e.target.value)}
            className="flex-1 rounded-lg border border-gray-200 bg-transparent py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 appearance-none"
          >
            <option value="all">{isRtl ? "كل الوقت" : "All Time"}</option>
            <option value="today">{isRtl ? "اليوم" : "Today"}</option>
            <option value="yesterday">{isRtl ? "أمس" : "Yesterday"}</option>
            <option value="week">{isRtl ? "هذا الأسبوع" : "This Week"}</option>
            <option value="month">{isRtl ? "هذا الشهر" : "This Month"}</option>
          </select>
          
          <button 
            onClick={onClearFilters}
            className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-800/80 transition-colors shrink-0"
            title={isRtl ? "مسح الفلاتر" : "Clear Filters"}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4H5C4.44772 4 4 4.44772 4 5V6.61834C4 7.14872 4.21071 7.65736 4.58579 8.03244L10 13.4466V19C10 19.3496 10.1837 19.6734 10.4851 19.8519L13.4851 21.6297C13.8887 21.8689 14 21.6917 14 21.222V13.4466L19.4142 8.03244C19.7893 7.65736 20 7.14872 20 6.61834V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
