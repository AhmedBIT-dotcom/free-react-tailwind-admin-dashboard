import { useState, useEffect } from "react";
import PageMeta from "../../../components/common/PageMeta";
import { PlusIcon } from "../../../icons";
import { useTheme } from "../../../context/ThemeContext";

import ProviderKpiCards from "../../../components/provider/ProviderKpiCards";
import ProviderRecentRequests from "../../../components/provider/ProviderRecentRequests";
import ProviderEarningsChart from "../../../components/provider/ProviderEarningsChart";
import ProviderRatings from "../../../components/provider/ProviderRatings";
import ProviderAppointments from "../../../components/provider/ProviderAppointments";
import ProviderNotifications from "../../../components/provider/ProviderNotifications";
import ProviderServices from "../../../components/provider/ProviderServices";

export default function ProviderDashboard() {
  const [isRtl, setIsRtl] = useState(document.documentElement.dir === "rtl");
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            {isRtl ? "مرحباً أحمد 👋" : "Welcome Ahmed 👋"}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {isRtl ? "إليك ملخص أعمالك اليوم" : "Here is your business summary for today"}
          </p>
        </div>
        
        <div>
          <button className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
            <PlusIcon className="w-5 h-5" />
            {isRtl ? "إضافة خدمة" : "Add Service"}
          </button>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6">
        <ProviderKpiCards isRtl={isRtl} />

        {/* Middle Row: Requests, Earnings, Ratings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-1">
            <ProviderRecentRequests isRtl={isRtl} />
          </div>
          <div className="lg:col-span-1">
            <ProviderEarningsChart isRtl={isRtl} isDark={isDark} />
          </div>
          <div className="lg:col-span-1">
            <ProviderRatings isRtl={isRtl} isDark={isDark} />
          </div>
        </div>

        {/* Bottom Row: Notifications, Appointments, Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-1">
            <ProviderNotifications isRtl={isRtl} />
          </div>
          <div className="lg:col-span-1">
            <ProviderAppointments isRtl={isRtl} />
          </div>
          <div className="lg:col-span-1">
            <ProviderServices isRtl={isRtl} />
          </div>
        </div>
      </div>
    </>
  );
}
