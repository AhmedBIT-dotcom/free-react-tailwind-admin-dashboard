import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Message } from "./mockMessages";
import { ServiceRequest } from "../requests/mockData";

interface CustomerChatWindowProps {
  request: ServiceRequest;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export default function CustomerChatWindow({
  request,
  messages,
  onSendMessage,
}: CustomerChatWindowProps) {
  const { isRtl } = useLanguage();
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString(isRtl ? "ar-SA" : "en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-theme-sm overflow-hidden min-h-[500px]">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-800 shrink-0">
            <img
              src={request.providerAvatar}
              alt={isRtl ? request.providerNameAr : request.providerNameEn}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                {isRtl ? request.providerNameAr : request.providerNameEn}
              </h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-500">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
              </svg>
            </div>
            <p className="text-sm text-gray-500">
              {request.id} · {isRtl ? request.serviceNameAr : request.serviceNameEn}
            </p>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white dark:bg-gray-900 relative custom-scrollbar">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 opacity-50">
              <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>{isRtl ? "لا توجد رسائل بعد." : "No messages yet."}</p>
          </div>
        ) : (
          messages.map((msg) => {
            const isCustomer = msg.sender === "CUSTOMER";
            return (
              <div
                key={msg.messageId}
                className={`flex gap-3 max-w-[80%] ${
                  isCustomer ? (isRtl ? "mr-auto flex-row-reverse" : "ml-auto flex-row-reverse") : ""
                }`}
              >
                {!isCustomer && (
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 mt-1">
                    <img
                      src={request.providerAvatar}
                      alt={isRtl ? request.providerNameAr : request.providerNameEn}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className={`flex flex-col ${isCustomer ? "items-end" : "items-start"} gap-1.5`}>
                  <div
                    className={`px-4 py-2.5 text-[15px] leading-relaxed shadow-theme-xs ${
                      isCustomer
                        ? "bg-brand-500 text-white rounded-2xl rounded-tr-sm"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl rounded-tl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                  <span className="text-xs text-gray-400 font-medium px-1">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <form onSubmit={handleSend} className="relative flex items-center gap-3">
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors shrink-0"
            title={isRtl ? "إرفاق ملف" : "Attach file"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.97 16.4299L8.43997 11.9099C7.45997 10.9299 7.45997 9.32993 8.43997 8.34993C9.41997 7.36993 11.02 7.36993 12 8.34993L16.53 12.8799C17.06 13.4099 17.06 14.2899 16.53 14.8199C16 15.3499 15.12 15.3499 14.59 14.8199L10.06 10.2899C9.79997 10.0299 9.79997 9.59993 10.06 9.33993C10.32 9.07993 10.75 9.07993 11.01 9.33993L15.54 13.8699C15.8 14.1299 16.23 14.1299 16.49 13.8699C16.75 13.6099 16.75 13.1799 16.49 12.9199L11.96 8.39993C11.16 7.59993 9.84997 7.59993 9.04997 8.39993C8.24997 9.19993 8.24997 10.5099 9.04997 11.3099L13.58 15.8399C14.07 16.3299 14.86 16.3299 15.34 15.8399C15.83 15.3499 15.83 14.5599 15.34 14.0699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={isRtl ? "اكتب رسالتك..." : "Type your message..."}
            className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:ring-0 focus:outline-none"
          />
          
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="w-11 h-11 shrink-0 bg-brand-500 hover:bg-brand-600 text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRtl ? "rotate-180" : ""}>
              <path d="M21.05 10.15L8.56003 3.51001C4.43003 1.32001 2.21003 3.12001 3.79003 7.37001L5.05003 10.77C5.35003 11.58 5.35003 12.43 5.05003 13.24L3.79003 16.64C2.21003 20.89 4.42003 22.68 8.56003 20.5L21.05 13.86C23.65 12.47 23.65 11.54 21.05 10.15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.43994 12H10.8499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
