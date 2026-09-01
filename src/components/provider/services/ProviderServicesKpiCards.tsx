import { BoxCubeIcon, CheckCircleIcon, CalenderIcon, AlertIcon } from "../../../icons";

interface ProviderServicesKpiCardsProps {
  isRtl: boolean;
}

export default function ProviderServicesKpiCards({ isRtl }: ProviderServicesKpiCardsProps) {
  const kpis = [
    {
      id: 1,
      title: isRtl ? "إجمالي الخدمات" : "Total Services",
      value: "24",
      subtitle: isRtl ? "جميع الخدمات" : "All services",
      isPositive: true,
      icon: <BoxCubeIcon className="size-6 text-blue-500 dark:text-blue-400" />,
      iconBg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
      id: 2,
      title: isRtl ? "الخدمات النشطة" : "Active Services",
      value: "18",
      subtitle: isRtl ? "نشطة الآن" : "Currently active",
      isPositive: true,
      icon: <CheckCircleIcon className="size-6 text-success-500 dark:text-success-400" />,
      iconBg: "bg-success-50 dark:bg-success-500/10",
    },
    {
      id: 3,
      title: isRtl ? "قيد المراجعة" : "Under Review",
      value: "3",
      subtitle: isRtl ? "بانتظار المراجعة" : "Pending review",
      isPositive: false,
      icon: <CalenderIcon className="size-6 text-warning-500 dark:text-warning-400" />,
      iconBg: "bg-warning-50 dark:bg-warning-500/10",
    },
    {
      id: 4,
      title: isRtl ? "الخدمات الموقوفة" : "Suspended Services",
      value: "3",
      subtitle: isRtl ? "موقوفة مؤقتاً" : "Temporarily suspended",
      isPositive: false,
      icon: <AlertIcon className="size-6 text-error-500 dark:text-error-400" />,
      iconBg: "bg-error-50 dark:bg-error-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
          </div>
        </div>
      ))}
    </div>
  );
}
