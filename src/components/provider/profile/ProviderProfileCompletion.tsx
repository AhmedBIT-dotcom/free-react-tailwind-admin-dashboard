interface ProviderProfileCompletionProps {
  isRtl: boolean;
  completionPercentage: number;
}

export default function ProviderProfileCompletion({ isRtl, completionPercentage }: ProviderProfileCompletionProps) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (completionPercentage / 100) * circumference;

  const checklist = [
    { labelAr: "الصورة الشخصية", labelEn: "Profile Photo", done: true },
    { labelAr: "المعلومات الأساسية", labelEn: "Basic Information", done: true },
    { labelAr: "بيانات التواصل", labelEn: "Contact Information", done: true },
    { labelAr: "الخدمات", labelEn: "Services", done: true },
    { labelAr: "منطقة العمل", labelEn: "Service Area", done: true },
    { labelAr: "نبذة تعريفية", labelEn: "Bio", done: false },
  ];

  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white/90 mb-6 text-center">
        {isRtl ? "اكتمال الملف الشخصي" : "Profile Completion"}
      </h3>
      
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-6">
        {/* Circle Progress */}
        <div className="relative shrink-0 flex items-center justify-center">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              className="text-gray-100 dark:text-gray-800"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="64"
              cy="64"
            />
            <circle
              className="text-brand-500 transition-all duration-1000 ease-in-out"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="64"
              cy="64"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-800 dark:text-white/90">
              {completionPercentage}%
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {completionPercentage >= 80 ? (isRtl ? "ممتاز!" : "Great!") : (isRtl ? "جيد" : "Good")}
            </span>
          </div>
        </div>

        {/* Checklist */}
        <div className="flex-1 w-full">
          <ul className="flex flex-col gap-3">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between text-sm">
                <span className={item.done ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-500"}>
                  {isRtl ? item.labelAr : item.labelEn}
                </span>
                {item.done ? (
                  <svg className="w-5 h-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="9" strokeWidth={2} />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="w-full mt-auto inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">
        {isRtl ? "أكمل البيانات الناقصة" : "Complete Missing Data"}
      </button>
    </div>
  );
}
