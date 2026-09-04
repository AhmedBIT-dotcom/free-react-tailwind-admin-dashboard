import { useLanguage } from "../../../context/LanguageContext";
import { ServiceRequest } from "../requests/mockData";
import { Message } from "./mockMessages";

interface CustomerConversationListProps {
  conversations: {
    request: ServiceRequest;
    lastMessage: Message | null;
  }[];
  selectedRequestId: string | null;
  onSelect: (requestId: string) => void;
}

export default function CustomerConversationList({
  conversations,
  selectedRequestId,
  onSelect,
}: CustomerConversationListProps) {
  const { isRtl } = useLanguage();

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    if (isToday) {
      return date.toLocaleTimeString(isRtl ? "ar-SA" : "en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    }
    
    return date.toLocaleDateString(isRtl ? "ar-SA" : "en-US", {
      weekday: "short",
    });
  };



  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-theme-sm overflow-hidden min-h-[500px]">

      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1 pt-4">
        {conversations.length === 0 ? (
          <div className="p-4 text-center text-sm text-gray-500">
            {isRtl ? "لا توجد نتائج." : "No results found."}
          </div>
        ) : (
          conversations.map((conv) => {
            const isSelected = selectedRequestId === conv.request.id;
            return (
              <button
                key={conv.request.id}
                onClick={() => onSelect(conv.request.id)}
                className={`w-full flex items-start gap-3 p-3 rounded-xl transition-colors text-right ${
                  isSelected
                    ? "bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20"
                    : "bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50"
                } ${!isRtl ? "text-left" : ""}`}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 dark:border-gray-800 shrink-0">
                  <img
                    src={conv.request.providerAvatar}
                    alt={isRtl ? conv.request.providerNameAr : conv.request.providerNameEn}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-1 overflow-hidden">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className={`text-sm font-bold truncate ${isSelected ? "text-brand-700 dark:text-brand-400" : "text-gray-900 dark:text-white"}`}>
                      {isRtl ? conv.request.providerNameAr : conv.request.providerNameEn}
                    </h4>
                    {conv.lastMessage && (
                      <span className="text-[11px] font-medium text-gray-400 shrink-0 whitespace-nowrap">
                        {formatTime(conv.lastMessage.timestamp)}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-medium text-gray-500 truncate">
                    {conv.request.id} · {isRtl ? conv.request.serviceNameAr : conv.request.serviceNameEn}
                  </div>
                  <p className={`text-xs truncate ${isSelected ? "text-brand-600 dark:text-brand-500" : "text-gray-500"}`}>
                    {conv.lastMessage ? conv.lastMessage.content : (isRtl ? "ابدأ المحادثة..." : "Start a conversation...")}
                  </p>
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
