import { Notification } from "./mockData";
import ProviderNotificationCategoryIcon from "./ProviderNotificationCategoryIcon";

interface ProviderNotificationItemProps {
  isRtl: boolean;
  notification: Notification;
  onMarkRead: (id: string) => void;
  onMarkUnread: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ProviderNotificationItem({
  isRtl,
  notification,
  onMarkRead,
  onMarkUnread,
  onDelete
}: ProviderNotificationItemProps) {
  const isUnread = !notification.isRead;
  
  return (
    <div className={`group flex flex-col sm:flex-row gap-4 p-5 rounded-2xl border transition-all ${
      isUnread 
        ? "bg-brand-50/30 border-brand-100 dark:bg-brand-500/5 dark:border-brand-500/10" 
        : "bg-white border-transparent hover:border-gray-200 dark:bg-gray-900/50 dark:hover:border-gray-800"
    }`}>
      
      {/* Icon & Unread Indicator */}
      <div className="flex items-start gap-4 shrink-0">
        <div className="relative">
          <ProviderNotificationCategoryIcon category={notification.category} isRead={!isUnread} />
          {isUnread && (
            <span className={`absolute top-0 ${isRtl ? 'right-0 translate-x-1/4' : 'left-0 -translate-x-1/4'} -translate-y-1/4 w-3 h-3 bg-brand-500 rounded-full border-2 border-white dark:border-gray-900`}></span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h4 className={`text-base truncate ${isUnread ? 'font-bold text-gray-900 dark:text-white' : 'font-medium text-gray-800 dark:text-white/90'}`}>
              {isRtl ? notification.titleAr : notification.titleEn}
            </h4>
            
            {notification.priority === "important" && (
              <span className="inline-flex rounded-full bg-error-50 px-2 py-0.5 text-[10px] font-medium text-error-600 dark:bg-error-500/10 dark:text-error-400">
                {isRtl ? "مهم" : "Important"}
              </span>
            )}

            {notification.relatedId && (
              <span className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                {notification.relatedId}
              </span>
            )}
          </div>
          
          <p className={`text-sm mb-2 leading-relaxed ${isUnread ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
            {isRtl ? notification.descriptionAr : notification.descriptionEn}
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {isRtl ? notification.timeAr : notification.timeEn}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          {isUnread ? (
            <button
              onClick={() => onMarkRead(notification.id)}
              className="inline-flex items-center justify-center rounded-lg border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-600 hover:bg-brand-100 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-400 dark:hover:bg-brand-500/20 transition-colors w-full sm:w-auto"
            >
              {isRtl ? "تحديد كمقروء" : "Mark as read"}
            </button>
          ) : (
            <button
              onClick={() => onMarkUnread(notification.id)}
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto"
            >
              {isRtl ? "تحديد كغير مقروء" : "Mark as unread"}
            </button>
          )}
          
          <button
            onClick={() => onDelete(notification.id)}
            className="p-1.5 text-gray-400 hover:text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10 rounded-lg transition-colors shrink-0"
            title={isRtl ? "حذف" : "Delete"}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M10 11V17M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
