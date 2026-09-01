interface ProviderEarningsKpiCardsProps {
  isRtl: boolean;
}

export default function ProviderEarningsKpiCards({ isRtl }: ProviderEarningsKpiCardsProps) {
  const kpis = [
    {
      id: 1,
      title: isRtl ? "إجمالي الأرباح" : "Total Earnings",
      value: isRtl ? "12,450 ر.س" : "12,450 SAR",
      subtitle: isRtl ? "+12.5% من الشهر الماضي" : "+12.5% from last month",
      isPositive: true,
      icon: (
        <svg className="size-6 text-purple-500 dark:text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M21 12V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V12M21 12H17.5C16.1193 12 15 13.1193 15 14.5V14.5C15 15.8807 16.1193 17 17.5 17H21M3 12H6.5C7.88071 12 9 13.1193 9 14.5V14.5C9 15.8807 7.88071 17 6.5 17H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-purple-50 dark:bg-purple-500/10",
      trendLine: "M0 15 Q 5 10, 10 12 T 20 8 T 30 10 T 40 4"
    },
    {
      id: 2,
      title: isRtl ? "أرباح هذا الشهر" : "This Month",
      value: isRtl ? "4,250 ر.س" : "4,250 SAR",
      subtitle: isRtl ? "+8.2% من الشهر الماضي" : "+8.2% from last month",
      isPositive: true,
      icon: (
        <svg className="size-6 text-success-500 dark:text-success-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-success-50 dark:bg-success-500/10",
      trendLine: "M0 12 Q 10 15, 20 10 T 40 5"
    },
    {
      id: 3,
      title: isRtl ? "أرباح هذا الأسبوع" : "This Week",
      value: isRtl ? "1,250 ر.س" : "1,250 SAR",
      subtitle: isRtl ? "+5.4% من الأسبوع الماضي" : "+5.4% from last week",
      isPositive: true,
      icon: (
        <svg className="size-6 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M17 11L15.3402 12.6598C14.5428 13.4572 14.1441 13.8559 13.6826 13.9142C13.2762 13.9656 12.8718 13.8402 12.5694 13.575C12.228 13.2754 11.9796 12.6959 11.4828 11.5368L11.0172 10.4505C10.5204 9.29135 10.272 8.71177 9.93058 8.41215C9.62991 8.14828 9.22554 8.02293 8.81912 8.07431C8.35759 8.13257 7.95892 8.53124 7.16156 9.32861L5 11.4902M21 7V11M21 7H17M21 7L18.4902 9.5098" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-blue-50 dark:bg-blue-500/10",
      trendLine: "M0 10 Q 5 15, 15 10 T 30 15 T 40 10"
    },
    {
      id: 4,
      title: isRtl ? "الأرباح قيد التحويل" : "Pending Earnings",
      value: isRtl ? "2,150 ر.س" : "2,150 SAR",
      subtitle: isRtl ? "في انتظار التحويل" : "Awaiting transfer",
      isPositive: true,
      icon: (
        <svg className="size-6 text-warning-500 dark:text-warning-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-warning-50 dark:bg-warning-500/10",
      trendLine: "M0 15 Q 10 10, 20 15 T 40 15"
    },
    {
      id: 5,
      title: isRtl ? "إجمالي الطلبات المدفوعة" : "Paid Orders",
      value: isRtl ? "58 طلب" : "58 orders",
      subtitle: isRtl ? "+15.3% من الشهر الماضي" : "+15.3% from last month",
      isPositive: true,
      icon: (
        <svg className="size-6 text-brand-500 dark:text-brand-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-brand-50 dark:bg-brand-500/10",
      trendLine: "M0 12 Q 10 15, 20 8 T 40 5"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
      {kpis.map((kpi) => (
        <div key={kpi.id} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col justify-between hover:shadow-sm transition-shadow relative overflow-hidden">
          <div className="flex items-start justify-between mb-4 z-10 relative">
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
          
          <div className="flex items-center justify-between mt-2 z-10 relative">
            <span className={`text-sm ${kpi.isPositive ? 'text-success-600 dark:text-success-500' : 'text-gray-500 dark:text-gray-400'}`}>
              {kpi.subtitle}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 opacity-20 pointer-events-none">
            <svg className="w-full h-full text-current" preserveAspectRatio="none" viewBox="0 0 40 20">
              <path d={kpi.trendLine} fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
