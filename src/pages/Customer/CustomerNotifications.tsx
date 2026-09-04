import { useState } from "react";
import { useNavigate } from "react-router";
import { mockNotifications, SanahNotification } from "../../components/customer/notifications/mockData";
import { useLanguage } from "../../context/LanguageContext";

const NotificationIcon = ({ type }: { type: SanahNotification["type"] }) => {
  switch (type) {
    case "REQUEST_SENT":
      return (
        <span className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-500 rounded-xl dark:bg-blue-500/10 dark:text-blue-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "PROVIDER_ACCEPTED":
    case "SERVICE_COMPLETED":
      return (
        <span className="flex items-center justify-center w-12 h-12 bg-success-50 text-success-500 rounded-xl dark:bg-success-500/10 dark:text-success-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "PROVIDER_REJECTED":
      return (
        <span className="flex items-center justify-center w-12 h-12 bg-error-50 text-error-500 rounded-xl dark:bg-error-500/10 dark:text-error-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "NEW_MESSAGE":
      return (
        <span className="flex items-center justify-center w-12 h-12 bg-brand-50 text-brand-500 rounded-xl dark:bg-brand-500/10 dark:text-brand-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "PAYMENT_PROOF_UPLOADED":
      return (
        <span className="flex items-center justify-center w-12 h-12 bg-purple-50 text-purple-500 rounded-xl dark:bg-purple-500/10 dark:text-purple-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "PAYMENT_VERIFICATION":
      return (
        <span className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-500 rounded-xl dark:bg-blue-500/10 dark:text-blue-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "DISPUTE":
      return (
        <span className="flex items-center justify-center w-12 h-12 bg-warning-50 text-warning-500 rounded-xl dark:bg-warning-500/10 dark:text-warning-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "SERVICE_CLOSED":
      return (
        <span className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-500 rounded-xl dark:bg-gray-800 dark:text-gray-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "REVIEW_AVAILABLE":
      return (
        <span className="flex items-center justify-center w-12 h-12 bg-orange-50 text-orange-500 rounded-xl dark:bg-orange-500/10 dark:text-orange-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    default:
      return (
        <span className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-500 rounded-xl dark:bg-gray-800 dark:text-gray-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
  }
};

export default function CustomerNotifications() {
  const [notifications, setNotifications] = useState<SanahNotification[]>(mockNotifications);
  const navigate = useNavigate();
  const { isRtl } = useLanguage();

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const handleNotificationClick = (notification: SanahNotification) => {
    // Mark as read locally
    if (!notification.isRead) {
      setNotifications((prev) =>
        prev.map((n) => (n.id === notification.id ? { ...n, isRead: true } : n))
      );
    }
    
    // Navigate if there is a request ID
    if (notification.requestId) {
      navigate(`/customer/requests/${notification.requestId}`);
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return isRtl ? `منذ ${diffMins} دقيقة` : `${diffMins} mins ago`;
    if (diffHours < 24) {
      const isToday = date.getDate() === now.getDate();
      if (isToday) {
        return date.toLocaleTimeString(isRtl ? "ar-SA" : "en-US", { hour: "2-digit", minute: "2-digit" });
      }
      return isRtl ? `منذ ${diffHours} ساعة` : `${diffHours} hours ago`;
    }
    return isRtl ? `منذ ${diffDays} يوم` : `${diffDays} days ago`;
  };

  // Group notifications
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const groups = {
    today: notifications.filter(n => new Date(n.createdAt) >= today),
    yesterday: notifications.filter(n => new Date(n.createdAt) >= yesterday && new Date(n.createdAt) < today),
    older: notifications.filter(n => new Date(n.createdAt) < yesterday)
  };

  const NotificationGroup = ({ title, items }: { title: string, items: SanahNotification[] }) => {
    if (items.length === 0) return null;
    
    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 px-2">
          {title}
        </h3>
        <div className="flex flex-col gap-3">
          {items.map((notification) => (
            <div
              key={notification.id}
              onClick={() => handleNotificationClick(notification)}
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white dark:bg-gray-900 border ${
                notification.isRead ? "border-gray-200 dark:border-gray-800" : "border-brand-200 dark:border-brand-900/50"
              } rounded-2xl p-5 sm:p-6 shadow-theme-sm transition-all hover:shadow-theme-md hover:-translate-y-0.5 cursor-pointer`}
            >
              <div className="shrink-0 flex items-start">
                <NotificationIcon type={notification.type} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                  <h4 className={`text-base font-bold ${notification.isRead ? "text-gray-900 dark:text-white" : "text-brand-700 dark:text-brand-300"}`}>
                    {isRtl ? notification.titleAr : notification.titleEn}
                  </h4>
                  <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                    {formatTime(notification.createdAt)}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {isRtl ? notification.messageAr : notification.messageEn}
                </p>
              </div>

              {!notification.isRead && (
                <div className="shrink-0 flex items-center justify-end sm:items-start pt-1">
                  <span className="w-3 h-3 rounded-full bg-brand-500 shadow-sm block"></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Header section */}
      <div className="bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-theme-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-50 dark:bg-brand-500/10 rounded-xl text-brand-600 dark:text-brand-400">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {isRtl ? "الإشعارات" : "Notifications"}
                </h1>
                {unreadCount > 0 && (
                  <span className="bg-brand-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                {isRtl ? "تتبع أحدث التنبيهات المتعلقة بطلباتك ونشاطك على المنصة" : "Track the latest alerts regarding your requests and activity on the platform"}
              </p>
            </div>
          </div>
          {unreadCount > 0 && (
            <button 
              onClick={markAllAsRead}
              className="px-5 py-2.5 bg-brand-50 text-brand-600 rounded-xl hover:bg-brand-100 transition-colors font-medium text-sm flex items-center gap-2 dark:bg-brand-500/10 dark:text-brand-400 dark:hover:bg-brand-500/20 w-full sm:w-auto justify-center shrink-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {isRtl ? "تحديد الكل كمقروء" : "Mark all as read"}
            </button>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex flex-col">
        {notifications.length > 0 ? (
          <>
            <NotificationGroup title={isRtl ? "اليوم" : "Today"} items={groups.today} />
            <NotificationGroup title={isRtl ? "أمس" : "Yesterday"} items={groups.yesterday} />
            <NotificationGroup title={isRtl ? "أقدم" : "Older"} items={groups.older} />
          </>
        ) : (
          <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-theme-sm min-h-[300px]">
            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {isRtl ? "لا توجد إشعارات" : "No Notifications"}
            </h3>
            <p className="text-gray-500 mb-6">
              {isRtl ? "ليس لديك أي إشعارات جديدة في الوقت الحالي." : "You don't have any new notifications at the moment."}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
