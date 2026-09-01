import { useState, useEffect } from "react";
import ProviderReviewsKpiCards from "../../../components/provider/reviews/ProviderReviewsKpiCards";
import ProviderReviewsOverview from "../../../components/provider/reviews/ProviderReviewsOverview";
import ProviderReviewsFilters from "../../../components/provider/reviews/ProviderReviewsFilters";
import ProviderReviewsList from "../../../components/provider/reviews/ProviderReviewsList";

export default function ProviderReviews() {
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
            {isRtl ? "التقييمات" : "Reviews"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isRtl
              ? "إدارة تقييمات العملاء وآرائهم حول خدماتك"
              : "Manage customer ratings and feedback about your services"}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* KPI Cards */}
        <ProviderReviewsKpiCards isRtl={isRtl} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Overview Panel */}
          <div className="xl:col-span-1">
            <ProviderReviewsOverview isRtl={isRtl} />
          </div>
          
          {/* Filters & List */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            <ProviderReviewsFilters isRtl={isRtl} />
            <ProviderReviewsList isRtl={isRtl} />
          </div>
        </div>
      </div>
    </>
  );
}
