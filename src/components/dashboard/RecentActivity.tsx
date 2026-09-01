import { CheckCircleIcon, DocsIcon, FolderIcon, AlertIcon, ShootingStarIcon } from "../../icons";

export default function RecentActivity() {
  const activities = [
    {
      title: "طلب خدمة جديد",
      description: "تصميم شعار لمطعم",
      time: "منذ 5 دقائق",
      icon: <DocsIcon className="size-5 text-brand-500 dark:text-brand-400" />,
      bg: "bg-brand-50 dark:bg-brand-500/10"
    },
    {
      title: "تم قبول طلب خدمة",
      description: "تطوير موقع إلكتروني",
      time: "منذ 15 دقيقة",
      icon: <CheckCircleIcon className="size-5 text-success-500 dark:text-success-400" />,
      bg: "bg-success-50 dark:bg-success-500/10"
    },
    {
      title: "تم رفع إثبات دفع",
      description: "تصميم هوية بصرية",
      time: "منذ 25 دقيقة",
      icon: <FolderIcon className="size-5 text-error-500 dark:text-error-400" />,
      bg: "bg-error-50 dark:bg-error-500/10"
    },
    {
      title: "تم حل شكوى",
      description: "شكوى عن جودة الخدمة",
      time: "منذ 45 دقيقة",
      icon: <AlertIcon className="size-5 text-warning-500 dark:text-warning-400" />,
      bg: "bg-warning-50 dark:bg-warning-500/10"
    },
    {
      title: "تقييم جديد مقدم",
      description: "تقييم مقدم خدمة",
      time: "منذ ساعة",
      icon: <ShootingStarIcon className="size-5 text-warning-500 dark:text-warning-400" />,
      bg: "bg-warning-50 dark:bg-warning-500/10"
    }
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          النشاط الأخير
        </h3>
      </div>

      <div className="relative">
        <div className="absolute right-6 top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-800 z-0"></div>
        <div className="flex flex-col gap-6 relative z-10">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full ${activity.bg} shadow-sm border border-white dark:border-gray-900`}>
                {activity.icon}
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                    {activity.title}
                  </h5>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {activity.time}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
