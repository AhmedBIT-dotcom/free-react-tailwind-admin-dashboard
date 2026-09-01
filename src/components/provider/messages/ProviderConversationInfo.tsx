import { Conversation } from "./mockData";

interface ProviderConversationInfoProps {
  isRtl: boolean;
  conversation: Conversation | null;
  onClose: () => void;
}

export default function ProviderConversationInfo({
  isRtl,
  conversation,
  onClose
}: ProviderConversationInfoProps) {
  if (!conversation) return null;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-s border-gray-200 dark:border-gray-800 w-full sm:w-80 shrink-0 absolute right-0 top-0 bottom-0 z-20 sm:static lg:block">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 shrink-0">
        <h3 className="font-bold text-gray-800 dark:text-white/90">
          {isRtl ? "معلومات المحادثة" : "Conversation Info"}
        </h3>
        <button 
          onClick={onClose}
          className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        
        {/* Profile */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-4 border-4 border-white dark:border-gray-900 shadow-sm">
            <img src={conversation.avatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <h4 className="text-lg font-bold text-gray-800 dark:text-white/90 mb-1">
            {isRtl ? conversation.customerNameAr : conversation.customerNameEn}
          </h4>
          <span className={`text-sm ${
            conversation.onlineStatus === "online" ? "text-success-500" :
            conversation.onlineStatus === "away" ? "text-warning-500" :
            "text-gray-500"
          }`}>
            {conversation.onlineStatus === "online" ? (isRtl ? "متصل الآن" : "Online") :
             conversation.onlineStatus === "away" ? (isRtl ? "مشغول" : "Away") :
             (isRtl ? "غير متصل" : "Offline")}
          </span>
        </div>

        {/* Details */}
        <div className="space-y-6">
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {isRtl ? "الخدمة" : "Service"}
            </span>
            <div className="flex items-center gap-1.5 text-sm font-medium text-gray-800 dark:text-white/90">
              <span>{isRtl ? conversation.serviceNameAr : conversation.serviceNameEn}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {isRtl ? "رقم الطلب" : "Request ID"}
            </span>
            <span className="text-sm font-medium text-gray-800 dark:text-white/90 uppercase">
              {conversation.requestId}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {isRtl ? "حالة الطلب" : "Status"}
            </span>
            <span className="inline-flex rounded-full bg-warning-50 px-2.5 py-0.5 text-xs font-medium text-warning-700 dark:bg-warning-500/10 dark:text-warning-400">
              {isRtl ? conversation.requestStatusAr : conversation.requestStatusEn}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {isRtl ? "تاريخ الموعد" : "Service Date"}
            </span>
            <span className="text-sm font-medium text-gray-800 dark:text-white/90">
              {isRtl ? conversation.serviceDateAr : conversation.serviceDateEn}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {isRtl ? "المبلغ" : "Amount"}
            </span>
            <span className="text-sm font-bold text-brand-600 dark:text-brand-400">
              {isRtl ? conversation.amountAr : conversation.amountEn}
            </span>
          </div>

        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-800" />

        {/* Actions */}
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 p-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors text-start">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isRtl ? "عرض تفاصيل الطلب" : "View Request Details"}
          </button>
          <button className="w-full flex items-center gap-3 p-3 text-sm font-medium text-error-600 dark:text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10 rounded-lg transition-colors text-start">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.92999 4.93L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isRtl ? "حظر المستخدم" : "Block User"}
          </button>
          <button className="w-full flex items-center gap-3 p-3 text-sm font-medium text-error-600 dark:text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10 rounded-lg transition-colors text-start">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 15V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15ZM4 15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isRtl ? "الإبلاغ عن محادثة" : "Report Conversation"}
          </button>
        </div>

      </div>
    </div>
  );
}
