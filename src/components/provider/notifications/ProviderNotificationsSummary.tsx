interface ProviderNotificationsSummaryProps {
  isRtl: boolean;
  totalCount: number;
  unreadCount: number;
  todayCount: number;
  importantCount: number;
}

export default function ProviderNotificationsSummary({
  isRtl,
  totalCount,
  unreadCount,
  todayCount,
  importantCount
}: ProviderNotificationsSummaryProps) {
  const kpis = [
    {
      id: 1,
      title: isRtl ? "إجمالي الإشعارات" : "Total Notifications",
      value: totalCount.toString(),
      icon: (
        <svg className="size-6 text-brand-500 dark:text-brand-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-brand-50 dark:bg-brand-500/10",
    },
    {
      id: 2,
      title: isRtl ? "غير مقروءة" : "Unread",
      value: unreadCount.toString(),
      icon: (
        <svg className="size-6 text-warning-500 dark:text-warning-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-warning-50 dark:bg-warning-500/10",
    },
    {
      id: 3,
      title: isRtl ? "اليوم" : "Today",
      value: todayCount.toString(),
      icon: (
        <svg className="size-6 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
      id: 4,
      title: isRtl ? "مهمة" : "Important",
      value: importantCount.toString(),
      icon: (
        <svg className="size-6 text-error-500 dark:text-error-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9V14M12 17.5V18M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-error-50 dark:bg-error-500/10",
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <div key={kpi.id} className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03] flex items-center justify-between">
          <div>
            <span className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              {kpi.title}
            </span>
            <h4 className="font-bold text-gray-800 text-2xl dark:text-white/90">
              {kpi.value}
            </h4>
          </div>
          <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${kpi.iconBg}`}>
            {kpi.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
