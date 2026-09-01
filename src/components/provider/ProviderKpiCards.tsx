import {
  DocsIcon,
  CheckCircleIcon,
  CalenderIcon, // Let's use a clock icon if available, CalenderIcon is a placeholder
  AlertIcon,
  DollarLineIcon,
} from "../../icons";

interface ProviderKpiCardsProps {
  isRtl: boolean;
}

export default function ProviderKpiCards({ isRtl }: ProviderKpiCardsProps) {
  const kpis = [
    {
      id: 1,
      title: isRtl ? "إجمالي الطلبات" : "Total Requests",
      value: "48",
      subtitle: isRtl ? "كل الطلبات" : "All requests",
      change: "+12%",
      isPositive: true,
      icon: <DocsIcon className="size-6 text-purple-500 dark:text-purple-400" />,
      iconBg: "bg-purple-50 dark:bg-purple-500/10",
      color: "purple",
    },
    {
      id: 2,
      title: isRtl ? "الطلبات المكتملة" : "Completed",
      value: "26",
      subtitle: isRtl ? "تم إنجازها" : "Successfully done",
      change: "+18%",
      isPositive: true,
      icon: <CheckCircleIcon className="size-6 text-success-500 dark:text-success-400" />,
      iconBg: "bg-success-50 dark:bg-success-500/10",
      color: "success",
    },
    {
      id: 3,
      title: isRtl ? "الطلبات قيد التنفيذ" : "In Progress",
      value: "15",
      subtitle: isRtl ? "جاري العمل" : "Currently working",
      change: "+5%",
      isPositive: true,
      icon: <CalenderIcon className="size-6 text-warning-500 dark:text-warning-400" />,
      iconBg: "bg-warning-50 dark:bg-warning-500/10",
      color: "warning",
    },
    {
      id: 4,
      title: isRtl ? "الطلبات الملغاة" : "Cancelled",
      value: "7",
      subtitle: isRtl ? "ملغاة" : "Cancelled requests",
      change: "-8%",
      isPositive: false,
      icon: <AlertIcon className="size-6 text-error-500 dark:text-error-400" />,
      iconBg: "bg-error-50 dark:bg-error-500/10",
      color: "error",
    },
    {
      id: 5,
      title: isRtl ? "إجمالي الأرباح" : "Total Earnings",
      value: isRtl ? "4,850 ر.س" : "4,850 SAR",
      subtitle: isRtl ? "هذا الشهر" : "This month",
      change: "+22%",
      isPositive: true,
      icon: <DollarLineIcon className="size-6 text-blue-500 dark:text-blue-400" />,
      iconBg: "bg-blue-50 dark:bg-blue-500/10",
      color: "blue",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
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
