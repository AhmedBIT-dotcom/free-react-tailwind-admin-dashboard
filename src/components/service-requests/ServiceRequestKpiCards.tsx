import {
  DocsIcon,
  PlusIcon,
  TimeIcon,
  TaskIcon,
  CheckCircleIcon,
  CloseLineIcon,
  AlertIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function ServiceRequestKpiCards() {
  const kpis = [
    {
      id: 1,
      title: "إجمالي الطلبات",
      titleEn: "Total Requests",
      value: "5,354",
      icon: <DocsIcon className="size-6 text-brand-500 dark:text-brand-400" />,
      trend: "+11.8%",
      trendType: "up",
      color: "brand"
    },
    {
      id: 2,
      title: "جديدة",
      titleEn: "New",
      value: "634",
      icon: <PlusIcon className="size-6 text-info-500 dark:text-info-400" />,
      trend: "+15.2%",
      trendType: "up",
      color: "info"
    },
    {
      id: 3,
      title: "قيد الانتظار",
      titleEn: "Pending",
      value: "856",
      icon: <TimeIcon className="size-6 text-warning-500 dark:text-warning-400" />,
      trend: "+9.4%",
      trendType: "up",
      color: "warning"
    },
    {
      id: 4,
      title: "قيد التنفيذ",
      titleEn: "In Progress",
      value: "2,450",
      icon: <TaskIcon className="size-6 text-orange-500 dark:text-orange-400" />,
      trend: "+18.7%",
      trendType: "up",
      color: "warning"
    },
    {
      id: 5,
      title: "مكتملة",
      titleEn: "Completed",
      value: "1,286",
      icon: <CheckCircleIcon className="size-6 text-success-500 dark:text-success-400" />,
      trend: "+12.5%",
      trendType: "up",
      color: "success"
    },
    {
      id: 6,
      title: "ملغاة",
      titleEn: "Cancelled",
      value: "128",
      icon: <CloseLineIcon className="size-6 text-error-500 dark:text-error-400" />,
      trend: "-8.3%",
      trendType: "down",
      color: "error"
    },
    {
      id: 7,
      title: "متنازع عليها",
      titleEn: "Disputed",
      value: "56",
      icon: <AlertIcon className="size-6 text-purple-500 dark:text-purple-400" />,
      trend: "+2.1%",
      trendType: "up",
      color: "error" // using error badge for dispute trend
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
      {kpis.map((kpi) => (
        <div key={kpi.id} className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                {kpi.title}
              </span>
              <h4 className="font-bold text-gray-800 text-title-sm dark:text-white/90">
                {kpi.value}
              </h4>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-xl dark:bg-gray-800">
              {kpi.icon}
            </div>
          </div>
          
          <div className="flex items-center gap-1.5">
            <div>
              <Badge color={kpi.trendType === "up" ? "success" : "error"}>
                {kpi.trendType === "up" ? <ArrowUpIcon className="size-3" /> : <ArrowDownIcon className="size-3" />}
                {kpi.trend}
              </Badge>
            </div>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate">
              من الشهر الماضي
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
