import { useState, useEffect } from "react";
import { Conversation, mockConversations } from "../../../components/provider/messages/mockData";
import ProviderMessagesSidebar from "../../../components/provider/messages/ProviderMessagesSidebar";
import ProviderConversationActive from "../../../components/provider/messages/ProviderConversationActive";
import ProviderConversationInfo from "../../../components/provider/messages/ProviderConversationInfo";

export default function ProviderMessages() {
  const [isRtl, setIsRtl] = useState(document.documentElement.dir === "rtl");
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "unread" | "read" | "active">("all");
  
  const [showInfoPanel, setShowInfoPanel] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsRtl(document.documentElement.dir === "rtl");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, []);

  // Filter conversations
  const filteredConversations = conversations.filter(conv => {
    // 1. Filter by search
    const query = searchQuery.toLowerCase();
    const searchMatch = !query || 
      conv.customerNameAr.toLowerCase().includes(query) ||
      conv.customerNameEn.toLowerCase().includes(query) ||
      conv.serviceNameAr.toLowerCase().includes(query) ||
      conv.serviceNameEn.toLowerCase().includes(query) ||
      conv.requestId.toLowerCase().includes(query) ||
      conv.lastMessageAr.toLowerCase().includes(query) ||
      conv.lastMessageEn.toLowerCase().includes(query);
      
    // 2. Filter by status tabs
    let tabMatch = true;
    if (activeFilter === "unread") tabMatch = conv.unreadCount > 0;
    if (activeFilter === "read") tabMatch = conv.unreadCount === 0;
    if (activeFilter === "active") tabMatch = conv.status === "active";
    
    return searchMatch && tabMatch;
  });

  const activeConversation = conversations.find(c => c.id === activeConversationId) || null;

  // Handle select conversation
  const handleSelectConversation = (id: string) => {
    setActiveConversationId(id);
    
    // Mark as read
    setConversations(prev => prev.map(c => 
      c.id === id ? { ...c, unreadCount: 0, status: c.status === 'unread' ? 'read' : c.status } : c
    ));
  };

  // Handle send message
  const handleSendMessage = (text: string) => {
    if (!activeConversationId) return;
    
    const now = new Date();
    const timeEn = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const timeAr = now.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
    
    const newMessage = {
      id: `MSG-${Date.now()}`,
      senderId: "provider" as const,
      textAr: text,
      textEn: text,
      timeAr,
      timeEn,
      isRead: false
    };

    setConversations(prev => prev.map(c => {
      if (c.id === activeConversationId) {
        return {
          ...c,
          lastMessageAr: text,
          lastMessageEn: text,
          lastMessageTimeAr: timeAr,
          lastMessageTimeEn: timeEn,
          messages: [...c.messages, newMessage]
        };
      }
      return c;
    }));
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90 mb-1">
            {isRtl ? "الرسائل" : "Messages"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isRtl
              ? "تواصل مع العملاء وتابع محادثات طلبات الخدمات"
              : "Communicate with customers and manage your service conversations"}
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden relative shadow-sm">
        
        {/* Sidebar - Hidden on mobile if active conversation exists */}
        <div className={`h-full ${activeConversationId ? 'hidden sm:block' : 'block w-full'}`}>
          <ProviderMessagesSidebar
            isRtl={isRtl}
            conversations={filteredConversations}
            activeConversationId={activeConversationId}
            onSelectConversation={handleSelectConversation}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Active Conversation area */}
        <div className={`flex-1 h-full flex ${!activeConversationId ? 'hidden sm:flex' : 'flex'}`}>
          <ProviderConversationActive
            isRtl={isRtl}
            conversation={activeConversation}
            onShowInfo={() => setShowInfoPanel(!showInfoPanel)}
            onSendMessage={handleSendMessage}
            onBack={() => setActiveConversationId(null)}
          />
          
          {/* Info Panel Drawer / Sidebar */}
          {showInfoPanel && (
            <ProviderConversationInfo
              isRtl={isRtl}
              conversation={activeConversation}
              onClose={() => setShowInfoPanel(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
