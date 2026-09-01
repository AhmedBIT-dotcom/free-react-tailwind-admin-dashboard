import { useState, useEffect } from "react";
import ProviderRequestsKpiCards from "../../../components/provider/requests/ProviderRequestsKpiCards";
import ProviderRequestsFilters from "../../../components/provider/requests/ProviderRequestsFilters";
import ProviderRequestsTable from "../../../components/provider/requests/ProviderRequestsTable";

export default function ProviderRequests() {
  const [isRtl, setIsRtl] = useState(document.documentElement.dir === "rtl");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsRtl(document.documentElement.dir === "rtl");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90 mb-1">
            {isRtl ? "طلبات الخدمة" : "Service Requests"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isRtl
              ? "إدارة ومتابعة جميع طلبات العملاء الخاصة بخدماتك"
              : "Manage and track all customer requests for your services."}
          </p>
        </div>
        <div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-center font-medium text-white hover:bg-brand-600 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 11L12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isRtl ? "تصدير" : "Export"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* KPI Cards */}
        <ProviderRequestsKpiCards isRtl={isRtl} />

        {/* Filters */}
        <ProviderRequestsFilters isRtl={isRtl} />

        {/* Requests Table */}
        <ProviderRequestsTable isRtl={isRtl} />
      </div>
    </>
  );
}
