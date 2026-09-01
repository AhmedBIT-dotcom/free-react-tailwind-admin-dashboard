import {
  BoxCubeIcon,
  CheckCircleIcon,
  AlertIcon,
  DocsIcon,
} from "../../icons";

export default function ServicesKpiCards({ isRtl }: { isRtl: boolean }) {
  const kpis = [
    {
      id: 1,
      title: isRtl ? "إجمالي الخدمات" : "Total Services",
      value: "192",
      icon: <BoxCubeIcon className="size-6 text-brand-500 dark:text-brand-400" />,
      desc: isRtl ? "كل الخدمات" : "All services",
      color: "brand",
      iconBg: "bg-brand-50 dark:bg-brand-500/10"
    },
    {
      id: 2,
      title: isRtl ? "الخدمات النشطة" : "Active Services",
      value: "142",
      icon: <CheckCircleIcon className="size-6 text-success-500 dark:text-success-400" />,
      desc: isRtl ? "خدمة نشطة" : "Active services",
      color: "success",
      iconBg: "bg-success-50 dark:bg-success-500/10"
    },
    {
      id: 3,
      title: isRtl ? "قيد المراجعة" : "Pending Review",
      value: "18",
      icon: <AlertIcon className="size-6 text-warning-500 dark:text-warning-400" />,
      desc: isRtl ? "تنتظر المراجعة" : "Awaiting review",
      color: "warning",
      iconBg: "bg-warning-50 dark:bg-warning-500/10"
    },
    {
      id: 4,
      title: isRtl ? "الفئات" : "Categories",
      value: "10",
      icon: <DocsIcon className="size-6 text-purple-500 dark:text-purple-400" />,
      desc: isRtl ? "إجمالي الفئات" : "Total categories",
      color: "purple",
      iconBg: "bg-purple-50 dark:bg-purple-500/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {kpis.map((kpi) => (
        <div key={kpi.id} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                {kpi.title}
              </span>
              <h4 className="font-bold text-gray-800 text-title-sm dark:text-white/90">
                {kpi.value}
              </h4>
            </div>
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${kpi.iconBg}`}>
              {kpi.icon}
            </div>
          </div>
          
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-gray-400 dark:text-gray-500 truncate">
              {kpi.desc}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
