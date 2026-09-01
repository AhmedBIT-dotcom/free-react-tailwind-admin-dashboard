import { Conversation } from "./mockData";

interface ProviderMessagesSidebarProps {
  isRtl: boolean;
  conversations: Conversation[];
  activeConversationId: string | null;
  onSelectConversation: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: "all" | "unread" | "read" | "active";
  onFilterChange: (filter: "all" | "unread" | "read" | "active") => void;
}

export default function ProviderMessagesSidebar({
  isRtl,
  conversations,
  activeConversationId,
  onSelectConversation,
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange
}: ProviderMessagesSidebarProps) {
  
  const filters = [
    { id: "all", labelAr: "الكل", labelEn: "All" },
    { id: "unread", labelAr: "غير مقروءة", labelEn: "Unread" },
    { id: "read", labelAr: "مقروءة", labelEn: "Read" },
    { id: "active", labelAr: "نشطة", labelEn: "Active" }
  ] as const;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-e border-gray-200 dark:border-gray-800 w-full sm:w-80 lg:w-[350px] shrink-0">
      
      {/* Search & Filters Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 shrink-0">
        <div className="relative mb-4">
          <span className="absolute top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 right-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={isRtl ? "ابحث في المحادثات..." : "Search conversations..."}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-4 pr-10 text-sm text-gray-800 outline-none focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white/90 dark:focus:bg-gray-900 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-brand-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              {isRtl ? filter.labelAr : filter.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.length > 0 ? (
          <div className="divide-y divide-gray-100 dark:divide-gray-800/50">
            {conversations.map((conv) => {
              const isActive = activeConversationId === conv.id;
              const isUnread = conv.unreadCount > 0;

              return (
                <button
                  key={conv.id}
                  onClick={() => onSelectConversation(conv.id)}
                  className={`w-full text-start p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50 ${
                    isActive ? "bg-brand-50/50 dark:bg-brand-500/5" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                        <img src={conv.avatar} alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                      <span
                        className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-900 ${
                          conv.onlineStatus === "online"
                            ? "bg-success-500"
                            : conv.onlineStatus === "away"
                            ? "bg-warning-500"
                            : "bg-gray-400"
                        }`}
                      ></span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`text-sm truncate pe-2 ${isUnread ? 'font-bold text-gray-900 dark:text-white' : 'font-medium text-gray-800 dark:text-white/90'}`}>
                          {isRtl ? conv.customerNameAr : conv.customerNameEn}
                        </h4>
                        <span className={`text-xs whitespace-nowrap shrink-0 ${isUnread ? 'font-medium text-brand-600 dark:text-brand-400' : 'text-gray-500 dark:text-gray-400'}`}>
                          {isRtl ? conv.lastMessageTimeAr : conv.lastMessageTimeEn}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                          {isRtl ? conv.serviceNameAr : conv.serviceNameEn}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <p className={`text-sm truncate ${isUnread ? 'font-medium text-gray-800 dark:text-white/90' : 'text-gray-500 dark:text-gray-400'}`}>
                          {isRtl ? conv.lastMessageAr : conv.lastMessageEn}
                        </p>
                        {isUnread && (
                          <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-brand-500 text-white text-[11px] font-bold shrink-0">
                            {conv.unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 text-gray-400">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C10.4182 21 8.932 20.5912 7.68412 19.8821L3 21L4.11786 16.3159C3.40879 15.068 3 13.5818 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h5 className="text-gray-900 dark:text-white font-medium mb-1">
              {isRtl ? "لا توجد محادثات" : "No conversations"}
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isRtl ? "ستظهر محادثاتك مع العملاء هنا" : "Your conversations with customers will appear here"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
