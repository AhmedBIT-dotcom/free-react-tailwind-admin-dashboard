import { useState, useEffect } from "react";
import ProviderServicesKpiCards from "../../../components/provider/services/ProviderServicesKpiCards";
import ProviderServicesFilters from "../../../components/provider/services/ProviderServicesFilters";
import ProviderServicesTable from "../../../components/provider/services/ProviderServicesTable";

export default function ProviderServices() {
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
            {isRtl ? "خدماتي" : "My Services"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isRtl
              ? "إدارة الخدمات التي تقدمها للعملاء"
              : "Manage the services you offer to customers"}
          </p>
        </div>
        <div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-center font-medium text-white hover:bg-brand-600 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isRtl ? "إضافة خدمة" : "Add Service"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* KPI Cards */}
        <ProviderServicesKpiCards isRtl={isRtl} />

        {/* Filters */}
        <ProviderServicesFilters isRtl={isRtl} />

        {/* Services Table */}
        <ProviderServicesTable isRtl={isRtl} />
      </div>
    </>
  );
}
