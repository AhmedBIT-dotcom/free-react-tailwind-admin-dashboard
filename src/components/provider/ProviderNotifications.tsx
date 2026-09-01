import { AlertIcon, CheckCircleIcon, DollarLineIcon } from "../../icons";

interface Notification {
  id: string;
  titleAr: string;
  titleEn: string;
  timeAr: string;
  timeEn: string;
  type: "request" | "appointment" | "payment";
}

interface ProviderNotificationsProps {
  isRtl: boolean;
}

export default function ProviderNotifications({ isRtl }: ProviderNotificationsProps) {
  const notifications: Notification[] = [
    {
      id: "NOT-01",
      titleAr: "طلب جديد: إصلاح كهرباء منزل",
      titleEn: "New request: Home Electrical Repair",
      timeAr: "منذ 10 دقائق",
      timeEn: "10 mins ago",
      type: "request",
    },
    {
      id: "NOT-02",
      titleAr: "تم تأكيد موعد: غداً 10:00 ص",
      titleEn: "Appointment confirmed: Tomorrow 10:00 AM",
      timeAr: "منذ ساعة",
      timeEn: "1 hour ago",
      type: "appointment",
    },
    {
      id: "NOT-03",
      titleAr: "تم استلام دفعة جديدة",
      titleEn: "New payment received",
      timeAr: "منذ 3 ساعات",
      timeEn: "3 hours ago",
      type: "payment",
    }
  ];

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "request":
        return (
          <div className="w-9 h-9 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 dark:bg-brand-500/10 dark:text-brand-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </div>
        );
      case "appointment":
        return (
          <div className="w-9 h-9 rounded-full bg-success-50 flex items-center justify-center text-success-500 dark:bg-success-500/10 dark:text-success-400">
            <CheckCircleIcon className="w-5 h-5" />
          </div>
        );
      case "payment":
        return (
          <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 dark:bg-blue-500/10 dark:text-blue-400">
            <DollarLineIcon className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 dark:bg-gray-800 dark:text-gray-400">
            <AlertIcon className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-800 dark:text-white/90 text-lg">
          {isRtl ? "الإشعارات" : "Notifications"}
        </h3>
      </div>
      
      <div className="flex flex-col gap-6">
        {notifications.map((notif) => (
          <div key={notif.id} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              {getIcon(notif.type)}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90 mb-1 leading-snug">
                {isRtl ? notif.titleAr : notif.titleEn}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {isRtl ? notif.timeAr : notif.timeEn}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-auto pt-6 text-center">
        <button className="text-sm text-brand-500 dark:text-brand-400 hover:underline flex items-center justify-center gap-1 w-full">
          {isRtl ? "عرض كل الإشعارات" : "View All Notifications"}
          <svg className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
