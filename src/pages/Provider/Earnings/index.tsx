import { useState, useEffect } from "react";
import ProviderEarningsKpiCards from "../../../components/provider/earnings/ProviderEarningsKpiCards";
import ProviderEarningsChart from "../../../components/provider/earnings/ProviderEarningsChart";
import ProviderEarningsSummary from "../../../components/provider/earnings/ProviderEarningsSummary";
import ProviderEarningsFilters from "../../../components/provider/earnings/ProviderEarningsFilters";
import ProviderTransactionsTable from "../../../components/provider/earnings/ProviderTransactionsTable";

export default function ProviderEarnings() {
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
            {isRtl ? "الأرباح" : "Earnings"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isRtl
              ? "متابعة أرباحك وإيراداتك المالية"
              : "Track your earnings and financial performance"}
          </p>
        </div>
        <div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-center font-medium text-white hover:bg-brand-600 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V16M16 12L12 16M12 16L8 12M12 16V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isRtl ? "تصدير التقرير" : "Export Report"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* KPI Cards */}
        <ProviderEarningsKpiCards isRtl={isRtl} />

        {/* Charts & Summary Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <ProviderEarningsChart isRtl={isRtl} />
          </div>
          <div className="xl:col-span-1">
            <ProviderEarningsSummary isRtl={isRtl} />
          </div>
        </div>

        {/* Filters */}
        <ProviderEarningsFilters isRtl={isRtl} />

        {/* Transactions Table */}
        <ProviderTransactionsTable isRtl={isRtl} />
      </div>
    </>
  );
}
