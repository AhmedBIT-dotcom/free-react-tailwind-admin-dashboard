import {
  GroupIcon,
  UserIcon,
  UserCircleIcon,
  BoxCubeIcon,
  ArrowUpIcon
} from "../../icons";

export default function UsersKpiCards() {
  const kpis = [
    {
      id: 1,
      title: "إجمالي المستخدمين",
      value: "4,116",
      icon: <GroupIcon className="size-6 text-purple-500 dark:text-purple-400" />,
      trend: "+69",
      color: "purple",
      iconBg: "bg-purple-50 dark:bg-purple-500/10"
    },
    {
      id: 2,
      title: "العملاء",
      value: "2,856",
      icon: <UserIcon className="size-6 text-success-500 dark:text-success-400" />,
      trend: "+45",
      color: "success",
      iconBg: "bg-success-50 dark:bg-success-500/10"
    },
    {
      id: 3,
      title: "مقدمو الخدمات",
      value: "1,248",
      icon: <UserCircleIcon className="size-6 text-blue-500 dark:text-blue-400" />,
      trend: "+23",
      color: "info",
      iconBg: "bg-blue-50 dark:bg-blue-500/10"
    },
    {
      id: 4,
      title: "المدراء",
      value: "12",
      icon: <BoxCubeIcon className="size-6 text-warning-500 dark:text-warning-400" />,
      trend: "+1",
      color: "warning",
      iconBg: "bg-warning-50 dark:bg-warning-500/10"
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
            <span className="flex items-center gap-1 text-sm font-medium text-success-500">
              <ArrowUpIcon className="size-4" />
              {kpi.trend}
            </span>
            <span className="text-sm text-gray-400 dark:text-gray-500 truncate">
              هذا الشهر
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
