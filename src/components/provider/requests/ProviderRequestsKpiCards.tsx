import { DocsIcon, CheckCircleIcon, CalenderIcon, DollarLineIcon } from "../../../icons";

interface ProviderRequestsKpiCardsProps {
  isRtl: boolean;
}

export default function ProviderRequestsKpiCards({ isRtl }: ProviderRequestsKpiCardsProps) {
  const kpis = [
    {
      id: 1,
      title: isRtl ? "إجمالي الطلبات" : "All Requests",
      value: "48",
      subtitle: isRtl ? "العدد الإجمالي" : "Total Count",
      change: "+22%",
      isPositive: true,
      icon: <DocsIcon className="size-6 text-purple-500 dark:text-purple-400" />,
      iconBg: "bg-purple-50 dark:bg-purple-500/10",
      color: "purple",
    },
    {
      id: 2,
      title: isRtl ? "الطلبات الجديدة" : "New Requests",
      value: "6",
      subtitle: isRtl ? "من الشهر الماضي" : "From last month",
      change: "+20%",
      isPositive: true,
      icon: <DocsIcon className="size-6 text-brand-500 dark:text-brand-400" />,
      iconBg: "bg-brand-50 dark:bg-brand-500/10",
      color: "brand",
    },
    {
      id: 3,
      title: isRtl ? "قيد التنفيذ" : "In Progress",
      value: "12",
      subtitle: isRtl ? "من الشهر الماضي" : "From last month",
      change: "+8%",
      isPositive: true,
      icon: <CalenderIcon className="size-6 text-orange-500 dark:text-orange-400" />,
      iconBg: "bg-orange-50 dark:bg-orange-500/10",
      color: "orange",
    },
    {
      id: 4,
      title: isRtl ? "مكتملة" : "Completed",
      value: "26",
      subtitle: isRtl ? "أكثر من الماضي" : "More than last",
      change: "+18%",
      isPositive: true,
      icon: <CheckCircleIcon className="size-6 text-success-500 dark:text-success-400" />,
      iconBg: "bg-success-50 dark:bg-success-500/10",
      color: "success",
    },
    {
      id: 5,
      title: isRtl ? "الأرباح من الطلبات" : "Request Earnings",
      value: isRtl ? "4,850 ر.س" : "4,850 SAR",
      subtitle: isRtl ? "أكثر من الماضي" : "More than last",
      change: "+22%",
      isPositive: true,
      icon: <DollarLineIcon className="size-6 text-blue-500 dark:text-blue-400" />,
      iconBg: "bg-blue-50 dark:bg-blue-500/10",
      color: "blue",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
      {kpis.map((kpi) => (
        <div key={kpi.id} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${kpi.iconBg}`}>
              {kpi.icon}
            </div>
            <div className="text-right">
              <span className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                {kpi.title}
              </span>
              <h4 className="font-bold text-gray-800 text-title-md dark:text-white/90">
                {kpi.value}
              </h4>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {kpi.subtitle}
            </span>
            <span className={`text-sm font-medium flex items-center gap-1 ${kpi.isPositive ? 'text-success-500' : 'text-error-500'}`}>
              <span dir="ltr">{kpi.change}</span>
              {kpi.isPositive ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10.5V1.5M6 1.5L1.5 6M6 1.5L10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1.5V10.5M6 10.5L1.5 6M6 10.5L10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
