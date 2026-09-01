interface ProviderEarningsSummaryProps {
  isRtl: boolean;
}

export default function ProviderEarningsSummary({ isRtl }: ProviderEarningsSummaryProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white/90 mb-1">
        {isRtl ? "ملخص الأرباح" : "Earnings Summary"}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {isRtl ? "تفاصيل إيراداتك المالية" : "Your financial revenue details"}
      </p>

      <div className="space-y-4">
        
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-success-50 text-success-500 dark:bg-success-500/10 dark:text-success-400">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {isRtl ? "إجمالي الإيرادات" : "Gross Revenue"}
            </span>
          </div>
          <span className="font-bold text-gray-800 dark:text-white/90">
            {isRtl ? "15,600 ر.س" : "15,600 SAR"}
          </span>
        </div>

        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-error-50 text-error-500 dark:bg-error-500/10 dark:text-error-400">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {isRtl ? "عمولة المنصة (15%)" : "Platform Commission (15%)"}
            </span>
          </div>
          <span className="font-medium text-error-600 dark:text-error-400" dir="ltr">
            -2,340 {isRtl ? "ر.س" : "SAR"}
          </span>
        </div>

        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 text-brand-500 dark:bg-brand-500/10 dark:text-brand-400">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <span className="text-lg font-bold text-brand-600 dark:text-brand-400">
              {isRtl ? "صافي الأرباح" : "Net Earnings"}
            </span>
          </div>
          <span className="text-lg font-bold text-brand-600 dark:text-brand-400">
            {isRtl ? "13,260 ر.س" : "13,260 SAR"}
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-success-500"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {isRtl ? "المدفوع بالفعل" : "Paid"}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-800 dark:text-white/90">
            {isRtl ? "11,110 ر.س" : "11,110 SAR"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-warning-500"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {isRtl ? "قيد التحويل" : "Pending"}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-800 dark:text-white/90">
            {isRtl ? "2,150 ر.س" : "2,150 SAR"}
          </span>
        </div>

      </div>
    </div>
  );
}
