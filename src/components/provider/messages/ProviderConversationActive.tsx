import { useState, useRef, useEffect } from "react";
import { Conversation } from "./mockData";

interface ProviderConversationActiveProps {
  isRtl: boolean;
  conversation: Conversation | null;
  onShowInfo: () => void;
  onSendMessage: (text: string) => void;
  onBack: () => void;
}

export default function ProviderConversationActive({
  isRtl,
  conversation,
  onShowInfo,
  onSendMessage,
  onBack
}: ProviderConversationActiveProps) {
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message or when conversation changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation?.messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    onSendMessage(inputText);
    setInputText("");
  };

  if (!conversation) {
    return (
      <div className="hidden sm:flex flex-1 flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 text-brand-200 dark:text-brand-900 shadow-sm">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 3.5H3.5C2.39543 3.5 1.5 4.39543 1.5 5.5V16.5C1.5 17.6046 2.39543 18.5 3.5 18.5H7.5L12 23L16.5 18.5H20.5C21.6046 18.5 22.5 17.6046 22.5 16.5V5.5C22.5 4.39543 21.6046 3.5 20.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 11H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 11H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 11H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white/90 mb-2">
          {isRtl ? "اختر محادثة" : "Select a conversation"}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          {isRtl ? "انقر على إحدى المحادثات في القائمة الجانبية لبدء المراسلة" : "Click on a conversation in the sidebar to start messaging"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-gray-50 dark:bg-gray-900 min-w-0">
      
      {/* Header */}
      <div className="flex items-center justify-between p-3 sm:p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="sm:hidden p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={isRtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="relative shrink-0 hidden sm:block">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
              <img src={conversation.avatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 ${
                conversation.onlineStatus === "online" ? "bg-success-500" :
                conversation.onlineStatus === "away" ? "bg-warning-500" : "bg-gray-400"
              }`}
            ></span>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 dark:text-white/90 text-sm sm:text-base">
              {isRtl ? conversation.customerNameAr : conversation.customerNameEn}
            </h3>
            <p className={`text-xs ${conversation.onlineStatus === 'online' ? 'text-success-500' : 'text-gray-500'}`}>
              {conversation.onlineStatus === "online" ? (isRtl ? "متصل الآن" : "Online") :
               conversation.onlineStatus === "away" ? (isRtl ? "مشغول" : "Away") :
               (isRtl ? "غير متصل" : "Offline")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2 pe-4 border-e border-gray-200 dark:border-gray-800 text-end">
            <div>
              <p className="text-xs font-medium text-gray-800 dark:text-white/90">
                {isRtl ? conversation.serviceNameAr : conversation.serviceNameEn}
              </p>
              <p className="text-[11px] text-gray-500 uppercase">{conversation.requestId}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-500 dark:bg-brand-500/10 flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button className="p-2 text-gray-500 hover:text-brand-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V20C22.0032 20.2764 21.8906 20.5407 21.6888 20.7303C21.4871 20.9199 21.2135 21.0187 20.93 21C17.5303 20.6124 14.3168 19.3496 11.6 17.33C9.07684 15.4851 7.02641 12.9806 5.67003 10.12C5.35821 9.42628 5.10931 8.7058 4.93003 7.97C4.85764 7.6974 4.88722 7.40938 5.01183 7.15286C5.13644 6.89634 5.34914 6.68652 5.61003 6.55L8.94003 4.89C9.22485 4.74719 9.55403 4.72145 9.85695 4.81977C10.1599 4.91809 10.413 5.13284 10.56 5.42L12.5 9.5C12.6288 9.77123 12.658 10.0818 12.5807 10.3703C12.5034 10.6587 12.3252 10.9037 12.08 11.05L10.23 12.16C11.3789 14.4716 13.238 16.3262 15.54 17.47L16.64 15.63C16.8373 15.3402 17.1479 15.1384 17.4878 15.0538C17.8277 14.9692 18.1793 15.0064 18.49 15.16L22.61 17.19C22.8837 17.3235 23.0949 17.5583 23.1895 17.8385C23.284 18.1187 23.2536 18.4191 23.1 18.67L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="p-2 text-gray-500 hover:text-brand-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10L21 6V18L15 14V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H15V18H3V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={onShowInfo} className="p-2 text-gray-500 hover:text-brand-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors lg:hidden">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Date Divider mock */}
        <div className="flex items-center justify-center mb-6">
          <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-700/50">
            {isRtl ? "31 أغسطس 2026" : "Aug 31, 2026"}
          </span>
        </div>

        {conversation.messages.map((msg) => {
          const isCustomer = msg.senderId === "customer";
          // Assuming isRtl layout means customer is on the right and provider is on the left by default in arabic chat apps, 
          // but we can follow standard TailAdmin layout: "me" (provider) on right/start depending on dir, customer on left/end.
          // Let's make Provider (Me) align to the end (start for them), Customer align to the start.
          // Standard logic: My messages align to end of flex row.
          const alignClass = isCustomer ? "justify-start" : "justify-end";
          const bubbleClass = isCustomer
            ? "bg-white border-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl rounded-ts-none"
            : "bg-brand-500 text-white border-transparent rounded-2xl rounded-te-none";

          return (
            <div key={msg.id} className={`flex ${alignClass} group`}>
              <div className="max-w-[85%] sm:max-w-[75%] md:max-w-[65%] flex flex-col gap-1">
                <div className={`px-4 py-3 border shadow-sm ${bubbleClass} text-sm leading-relaxed whitespace-pre-wrap relative`}>
                  {isRtl ? msg.textAr : msg.textEn}
                </div>
                <div className={`flex items-center gap-1 ${isCustomer ? "justify-start" : "justify-end"}`}>
                  <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                    {isRtl ? msg.timeAr : msg.timeEn}
                  </span>
                  {!isCustomer && (
                    msg.isRead ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-brand-500">
                        <path d="M11.5 12L15 15.5M10.5 16.5L14 20L22 12M2 12L5.5 15.5L13.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                        <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Composer */}
      <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shrink-0">
        <form onSubmit={handleSend} className="flex flex-col sm:flex-row sm:items-end gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-full p-2 border border-gray-200 dark:border-gray-700">
          
          <div className="flex items-center gap-1 sm:gap-2 px-2 pb-1 sm:pb-0 shrink-0">
            <button type="button" className="p-2 text-gray-500 hover:text-brand-500 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button type="button" className="p-2 text-gray-500 hover:text-brand-500 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="flex-1 min-h-[40px] flex items-center bg-transparent relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
              placeholder={isRtl ? "اكتب رسالتك..." : "Type a message..."}
              className="w-full bg-transparent border-none outline-none resize-none text-sm text-gray-800 dark:text-white/90 placeholder-gray-400 max-h-32 py-2 px-2 scrollbar-hide"
              rows={1}
            />
          </div>

          <button
            type="submit"
            disabled={!inputText.trim()}
            className="w-10 h-10 shrink-0 bg-brand-500 text-white rounded-full flex items-center justify-center hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ms-auto sm:ms-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRtl ? "rotate-180" : ""}>
              <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>

    </div>
  );
}
