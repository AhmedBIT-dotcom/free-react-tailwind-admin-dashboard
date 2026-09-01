import { CalenderIcon, CheckCircleIcon, AlertIcon, DocsIcon } from "../../../icons";

interface ProviderAppointmentsKpiCardsProps {
  isRtl: boolean;
}

export default function ProviderAppointmentsKpiCards({ isRtl }: ProviderAppointmentsKpiCardsProps) {
  const kpis = [
    {
      id: 1,
      title: isRtl ? "إجمالي المواعيد" : "Total Appointments",
      value: "128",
      subtitle: isRtl ? "كل الوقت" : "All time",
      isPositive: true,
      icon: <DocsIcon className="size-6 text-blue-500 dark:text-blue-400" />,
      iconBg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
      id: 2,
      title: isRtl ? "مواعيد اليوم" : "Today's Appointments",
      value: "8",
      subtitle: isRtl ? "اليوم" : "Today",
      isPositive: true,
      icon: <CalenderIcon className="size-6 text-success-500 dark:text-success-400" />,
      iconBg: "bg-success-50 dark:bg-success-500/10",
    },
    {
      id: 3,
      title: isRtl ? "القادمة" : "Upcoming",
      value: "42",
      subtitle: isRtl ? "خلال 7 أيام" : "Next 7 days",
      isPositive: true,
      icon: <CalenderIcon className="size-6 text-warning-500 dark:text-warning-400" />,
      iconBg: "bg-warning-50 dark:bg-warning-500/10",
    },
    {
      id: 4,
      title: isRtl ? "المكتملة" : "Completed",
      value: "65",
      subtitle: isRtl ? "كل الوقت" : "All time",
      isPositive: true,
      icon: <CheckCircleIcon className="size-6 text-purple-500 dark:text-purple-400" />,
      iconBg: "bg-purple-50 dark:bg-purple-500/10",
    },
    {
      id: 5,
      title: isRtl ? "الملغاة" : "Cancelled",
      value: "13",
      subtitle: isRtl ? "كل الوقت" : "All time",
      isPositive: false,
      icon: <AlertIcon className="size-6 text-error-500 dark:text-error-400" />,
      iconBg: "bg-error-50 dark:bg-error-500/10",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
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
