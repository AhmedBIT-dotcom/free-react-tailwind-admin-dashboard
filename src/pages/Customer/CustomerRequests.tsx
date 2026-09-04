import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CustomerRequestCard from "../../components/customer/requests/CustomerRequestCard";
import { mockCustomerRequests, RequestStatus } from "../../components/customer/requests/mockData";

export default function CustomerRequests() {
  const { isRtl } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<RequestStatus | "ALL">("ALL");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "amount_desc" | "amount_asc">("newest");

  // Filter and Sort Logic
  const filteredRequests = mockCustomerRequests.filter((req) => {
    // 1. Status Filter
    if (statusFilter !== "ALL" && req.status !== statusFilter) return false;
    
    // 2. Search Query (Mock search across service name and provider name)
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchAr = req.serviceNameAr.toLowerCase().includes(q) || req.providerNameAr.toLowerCase().includes(q) || req.id.toLowerCase().includes(q);
      const matchEn = req.serviceNameEn.toLowerCase().includes(q) || req.providerNameEn.toLowerCase().includes(q) || req.id.toLowerCase().includes(q);
      if (!matchAr && !matchEn) return false;
    }
    
    return true;
  }).sort((a, b) => {
    // Sorting
    switch (sortBy) {
      case "newest":
        return new Date(b.requestDate).getTime() - new Date(a.requestDate).getTime();
      case "oldest":
        return new Date(a.requestDate).getTime() - new Date(b.requestDate).getTime();
      case "amount_desc":
        return b.totalAmount - a.totalAmount;
      case "amount_asc":
        return a.totalAmount - b.totalAmount;
      default:
        return 0;
    }
  });

  return (
    <div className="w-full">
      {/* Header section */}
      <div className="bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-theme-sm">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {isRtl ? "طلباتي" : "My Requests"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {isRtl
            ? "تابع حالة طلباتك الحالية والسابقة وتواصل مع مقدمي الخدمات."
            : "Track the status of your current and past requests and communicate with service providers."}
        </p>
      </div>

      {/* Filters Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        
        {/* Search */}
        <div className="relative flex-1">
          <span className="absolute top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 right-4 (rtl) rtl:right-4 ltr:left-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRtl ? "right-4 absolute" : "left-4 absolute"}>
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <input
            type="text"
            placeholder={isRtl ? "ابحث برقم الطلب، الخدمة، أو المزود..." : "Search by request ID, service, or provider..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full rounded-xl border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 py-3 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:text-white/90 shadow-theme-xs ${isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'}`}
          />
        </div>

        {/* Status Filter */}
        <div className="relative w-full md:w-56">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as RequestStatus | "ALL")}
            className="appearance-none w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl py-3 px-4 pr-10 text-sm font-medium outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:text-white cursor-pointer shadow-theme-xs text-gray-700"
          >
            <option value="ALL">{isRtl ? "جميع الحالات" : "All Statuses"}</option>
            <option value="PENDING">{isRtl ? "قيد الانتظار" : "Pending"}</option>
            <option value="ACCEPTED">{isRtl ? "مقبول" : "Accepted"}</option>
            <option value="READY_TO_START">{isRtl ? "جاهز للبدء" : "Ready to Start"}</option>
            <option value="IN_PROGRESS">{isRtl ? "قيد التنفيذ" : "In Progress"}</option>
            <option value="PROVIDER_COMPLETED">{isRtl ? "أكمله مزود الخدمة" : "Provider Completed"}</option>
            <option value="CUSTOMER_CONFIRMED">{isRtl ? "مؤكد من العميل" : "Customer Confirmed"}</option>
            <option value="CLOSED">{isRtl ? "مغلق" : "Closed"}</option>
          </select>
          <span className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none text-gray-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>

        {/* Sort */}
        <div className="relative w-full md:w-48">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="appearance-none w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl py-3 px-4 pr-10 text-sm font-medium outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:text-white cursor-pointer shadow-theme-xs text-gray-700"
          >
            <option value="newest">{isRtl ? "ترتيب: الأحدث أولاً" : "Sort: Newest First"}</option>
            <option value="oldest">{isRtl ? "ترتيب: الأقدم أولاً" : "Sort: Oldest First"}</option>
            <option value="amount_desc">{isRtl ? "ترتيب: الأعلى سعراً" : "Sort: Highest Amount"}</option>
            <option value="amount_asc">{isRtl ? "ترتيب: الأقل سعراً" : "Sort: Lowest Amount"}</option>
          </select>
          <span className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none text-gray-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>

      {/* Requests List */}
      <div className="flex flex-col gap-4 mb-8">
        {filteredRequests.length > 0 ? (
          filteredRequests.map(request => (
            <CustomerRequestCard key={request.id} request={request} isRtl={isRtl} />
          ))
        ) : (
          <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-theme-sm min-h-[300px]">
            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.75 9H8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.75 15H8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {isRtl ? "لا توجد طلبات مطابقة" : "No matching requests found"}
            </h3>
            <p className="text-gray-500 mb-6">
              {isRtl 
                ? "لم نتمكن من العثور على أي طلبات تتطابق مع معايير البحث والفلترة الحالية." 
                : "We couldn't find any requests matching your current search and filter criteria."}
            </p>
            {(searchQuery || statusFilter !== "ALL") && (
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("ALL");
                  setSortBy("newest");
                }}
                className="px-5 py-2.5 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors font-medium text-sm"
              >
                {isRtl ? "مسح الفلاتر" : "Clear Filters"}
              </button>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
