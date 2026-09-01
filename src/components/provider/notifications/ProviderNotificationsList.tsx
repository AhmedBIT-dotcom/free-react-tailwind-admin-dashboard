import { Notification } from "./mockData";
import ProviderNotificationItem from "./ProviderNotificationItem";
import ProviderNotificationsEmptyState from "./ProviderNotificationsEmptyState";

interface ProviderNotificationsListProps {
  isRtl: boolean;
  notifications: Notification[];
  isFilterEmpty: boolean;
  onMarkRead: (id: string) => void;
  onMarkUnread: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ProviderNotificationsList({
  isRtl,
  notifications,
  isFilterEmpty,
  onMarkRead,
  onMarkUnread,
  onDelete
}: ProviderNotificationsListProps) {
  
  if (notifications.length === 0) {
    return <ProviderNotificationsEmptyState isRtl={isRtl} isFilterEmpty={isFilterEmpty} />;
  }

  // Group notifications by dateGroup
  const grouped = notifications.reduce((acc, curr) => {
    if (!acc[curr.dateGroup]) acc[curr.dateGroup] = [];
    acc[curr.dateGroup].push(curr);
    return acc;
  }, {} as Record<string, Notification[]>);

  const getGroupTitle = (group: string) => {
    switch (group) {
      case "today": return isRtl ? "اليوم" : "Today";
      case "yesterday": return isRtl ? "أمس" : "Yesterday";
      case "earlier": return isRtl ? "سابقًا" : "Earlier";
      default: return group;
    }
  };

  const groupOrder = ["today", "yesterday", "earlier"];

  return (
    <div className="flex flex-col gap-8">
      {groupOrder.map(groupKey => {
        const groupNotifications = grouped[groupKey];
        if (!groupNotifications || groupNotifications.length === 0) return null;

        return (
          <div key={groupKey}>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-sm font-bold text-gray-800 dark:text-white/90 shrink-0">
                {getGroupTitle(groupKey)}
              </h3>
              <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div>
            </div>
            
            <div className="flex flex-col gap-2">
              {groupNotifications.map(notification => (
                <ProviderNotificationItem
                  key={notification.id}
                  isRtl={isRtl}
                  notification={notification}
                  onMarkRead={onMarkRead}
                  onMarkUnread={onMarkUnread}
                  onDelete={onDelete}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Pagination / Load More mock */}
      {notifications.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-800 mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isRtl 
              ? `عرض 1–${notifications.length} من أصل ${notifications.length} إشعارًا`
              : `Showing 1–${notifications.length} of ${notifications.length} notifications`}
          </p>
          <div className="flex border border-gray-200 rounded-lg dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900">
            <button disabled className="px-3 py-1.5 text-sm font-medium text-gray-400 bg-gray-50 dark:bg-gray-800 border-e border-gray-200 dark:border-gray-700 cursor-not-allowed">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
              </svg>
            </button>
            <button className="px-3 py-1.5 text-sm font-medium bg-brand-500 text-white border-e border-gray-200 dark:border-gray-700">1</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
