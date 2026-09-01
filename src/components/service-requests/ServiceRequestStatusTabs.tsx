import {
  PlusIcon,
  TimeIcon,
  CheckCircleIcon,
  TaskIcon,
  CloseLineIcon,
  AlertIcon,
  BoltIcon
} from "../../icons";

export default function ServiceRequestStatusTabs() {
  const tabs = [
    { id: "all", label: "جميع الطلبات", count: "5,354", active: true },
    { id: "new", label: "جديدة", count: "634", icon: <PlusIcon className="w-4 h-4" /> },
    { id: "pending", label: "قيد الانتظار", count: "856", icon: <TimeIcon className="w-4 h-4" /> },
    { id: "accepted", label: "مقبولة", count: "1,024", icon: <BoltIcon className="w-4 h-4" /> },
    { id: "in_progress", label: "قيد التنفيذ", count: "2,450", icon: <TaskIcon className="w-4 h-4" /> },
    { id: "completed", label: "مكتملة", count: "1,286", icon: <CheckCircleIcon className="w-4 h-4" /> },
    { id: "cancelled", label: "ملغاة", count: "128", icon: <CloseLineIcon className="w-4 h-4" /> },
    { id: "disputed", label: "متنازع عليها", count: "56", icon: <AlertIcon className="w-4 h-4" /> },
  ];

  return (
    <div className="flex items-center overflow-x-auto border-b border-gray-200 dark:border-gray-800 custom-scrollbar hide-scrollbar w-full">
      <ul className="flex items-center gap-1 min-w-max px-1">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 relative ${
                tab.active
                  ? "text-brand-500 border-brand-500"
                  : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600"
              }`}
            >
              {tab.icon && (
                <span className={tab.active ? "text-brand-500" : "text-gray-400 dark:text-gray-500"}>
                  {tab.icon}
                </span>
              )}
              {tab.label}
              {tab.count && (
                <span
                  className={`ml-1.5 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    tab.active
                      ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
