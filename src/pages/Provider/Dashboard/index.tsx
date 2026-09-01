import { useState, useEffect } from "react";
import PageMeta from "../../../components/common/PageMeta";

export default function ProviderDashboard() {
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
      <PageMeta
        title={isRtl ? "لوحة تحكم مقدم الخدمة | صنّعة" : "Provider Dashboard | San'ah"}
        description={isRtl ? "لوحة تحكم مقدم الخدمة" : "Provider Dashboard"}
      />
      
      <div className="flex flex-col mb-6 gap-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90">
          {isRtl ? "مرحباً أحمد 👋" : "Welcome Ahmed 👋"}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {isRtl ? "إليك ملخص أعمالك اليوم" : "Here is your summary for today"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {/* KPI Cards Placeholder */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{isRtl ? "إجمالي الطلبات" : "Total Requests"}</h4>
          <p className="font-bold text-gray-800 text-title-sm dark:text-white/90">48</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{isRtl ? "الطلبات المكتملة" : "Completed Requests"}</h4>
          <p className="font-bold text-gray-800 text-title-sm dark:text-white/90">26</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{isRtl ? "الطلبات قيد التنفيذ" : "In Progress Requests"}</h4>
          <p className="font-bold text-gray-800 text-title-sm dark:text-white/90">15</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{isRtl ? "إجمالي الأرباح" : "Total Earnings"}</h4>
          <p className="font-bold text-gray-800 text-title-sm dark:text-white/90">{isRtl ? "4,850 ر.ي" : "4,850 YER"}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        {/* Recent Requests Placeholder */}
        <div className="col-span-1 xl:col-span-2 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800 dark:text-white/90">
              {isRtl ? "الطلبات الأخيرة" : "Recent Requests"}
            </h3>
            <button className="text-sm text-brand-500 dark:text-brand-400 hover:underline">
              {isRtl ? "عرض الكل" : "View All"}
            </button>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center py-10 border border-dashed border-gray-200 dark:border-gray-800 rounded-xl">
            {isRtl ? "لا توجد طلبات أخيرة." : "No recent requests."}
          </div>
        </div>

        {/* Ratings Placeholder */}
        <div className="col-span-1 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h3 className="font-semibold text-gray-800 dark:text-white/90 mb-4">
            {isRtl ? "تقييم العملاء" : "Customer Ratings"}
          </h3>
          <div className="flex items-center justify-center py-8">
            <div className="w-32 h-32 rounded-full border-8 border-brand-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800 dark:text-white">4.8</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
