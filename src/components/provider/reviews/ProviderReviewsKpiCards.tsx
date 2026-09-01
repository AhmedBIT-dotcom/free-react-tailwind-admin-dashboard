interface ProviderReviewsKpiCardsProps {
  isRtl: boolean;
}

export default function ProviderReviewsKpiCards({ isRtl }: ProviderReviewsKpiCardsProps) {
  const kpis = [
    {
      id: 1,
      title: isRtl ? "متوسط التقييم" : "Average Rating",
      value: "4.8 / 5",
      subtitle: isRtl ? "بناءً على 248 تقييم" : "Based on 248 reviews",
      isPositive: true,
      icon: (
        <svg className="size-6 text-brand-500 dark:text-brand-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-brand-50 dark:bg-brand-500/10",
      trendLine: "M0 15 Q 5 10, 10 12 T 20 8 T 30 10 T 40 4"
    },
    {
      id: 2,
      title: isRtl ? "إجمالي التقييمات" : "Total Reviews",
      value: "248",
      subtitle: isRtl ? "من أصل 1,436 طلب" : "Out of 1,436 requests",
      isPositive: true,
      icon: (
        <svg className="size-6 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8H17M7 12H13M21 12C21 16.9706 16.9706 21 12 21C10.4182 21 8.932 20.5912 7.68412 19.8821L3 21L4.11786 16.3159C3.40879 15.068 3 13.5818 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-blue-50 dark:bg-blue-500/10",
      trendLine: "M0 12 Q 10 15, 20 10 T 40 5"
    },
    {
      id: 3,
      title: isRtl ? "التقييمات الإيجابية" : "Positive Reviews",
      value: "232",
      subtitle: isRtl ? "93% من التقييمات" : "93% of reviews",
      isPositive: true,
      icon: (
        <svg className="size-6 text-success-500 dark:text-success-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 9V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V7L7 11V21H18.2832C19.261 21 20.1066 20.3069 20.2526 19.3333L21.0026 14.3333C21.1818 13.1396 20.2599 12 19.0332 12H14V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 11V21H7V11H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-success-50 dark:bg-success-500/10",
      trendLine: "M0 10 Q 5 15, 15 10 T 30 15 T 40 10"
    },
    {
      id: 4,
      title: isRtl ? "معدل الرد" : "Response Rate",
      value: "94%",
      subtitle: isRtl ? "متوسط وقت الرد: 6 ساعات" : "Avg response time: 6 hours",
      isPositive: true,
      icon: (
        <svg className="size-6 text-warning-500 dark:text-warning-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-warning-50 dark:bg-warning-500/10",
      trendLine: "M0 15 Q 10 10, 20 15 T 40 15"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
            <span className="text-sm text-gray-500 dark:text-gray-400">
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
