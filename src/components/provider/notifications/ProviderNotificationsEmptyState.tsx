interface ProviderNotificationsEmptyStateProps {
  isRtl: boolean;
  isFilterEmpty: boolean;
}

export default function ProviderNotificationsEmptyState({ isRtl, isFilterEmpty }: ProviderNotificationsEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
      <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 text-gray-400">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {isFilterEmpty ? (
        <>
          <h4 className="text-xl font-bold text-gray-800 dark:text-white/90 mb-2">
            {isRtl ? "لا توجد إشعارات مطابقة" : "No matching notifications"}
          </h4>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm">
            {isRtl 
              ? "لم يتم العثور على إشعارات تطابق معايير البحث أو الفلاتر المحددة." 
              : "No notifications match your current search or filter criteria."}
          </p>
        </>
      ) : (
        <>
          <h4 className="text-xl font-bold text-gray-800 dark:text-white/90 mb-2">
            {isRtl ? "لا توجد إشعارات" : "No notifications"}
          </h4>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm">
            {isRtl 
              ? "ستظهر إشعاراتك هنا عند وصول تحديثات جديدة." 
              : "Your notifications will appear here when there is new activity."}
          </p>
        </>
      )}
    </div>
  );
}
