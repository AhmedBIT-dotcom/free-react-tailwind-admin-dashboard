import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CustomerConversationList from "../../components/customer/messages/CustomerConversationList";
import CustomerChatWindow from "../../components/customer/messages/CustomerChatWindow";
import { mockMessages, Message } from "../../components/customer/messages/mockMessages";
import { mockCustomerRequests } from "../../components/customer/requests/mockData";
import { Link, useSearchParams } from "react-router";

export default function CustomerMessages() {
  const { isRtl } = useLanguage();
  const [messagesState, setMessagesState] = useState<Message[]>(mockMessages);
  const [searchParams] = useSearchParams();
  const requestIdFromUrl = searchParams.get("requestId");
  
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Filter requests that actually have conversations, or you could show all accepted/in-progress requests
  // Here we derive the conversation list based on mockCustomerRequests
  const conversationRequests = mockCustomerRequests.filter(
    (req) => req.status !== "PENDING"
  );

  const conversations = conversationRequests.map((request) => {
    const reqMsgs = messagesState.filter((m) => m.requestId === request.id);
    const lastMessage = reqMsgs.length > 0 ? reqMsgs[reqMsgs.length - 1] : null;
    return {
      request,
      lastMessage,
    };
  });

  // Sort by last message date
  conversations.sort((a, b) => {
    if (!a.lastMessage && !b.lastMessage) return 0;
    if (!a.lastMessage) return 1;
    if (!b.lastMessage) return -1;
    return new Date(b.lastMessage.timestamp).getTime() - new Date(a.lastMessage.timestamp).getTime();
  });

  // Select first conversation by default on desktop if none selected
  useEffect(() => {
    if (hasInitialized || conversations.length === 0) return;

    if (requestIdFromUrl && conversations.some(c => c.request.id === requestIdFromUrl)) {
      setSelectedRequestId(requestIdFromUrl);
    } else {
      setSelectedRequestId(conversations[0].request.id);
    }
    
    setHasInitialized(true);
  }, [conversations, requestIdFromUrl, hasInitialized]);

  const handleSendMessage = (content: string) => {
    if (!selectedRequestId) return;
    
    const newMessage: Message = {
      messageId: `MSG-NEW-${Date.now()}`,
      requestId: selectedRequestId,
      sender: "CUSTOMER",
      content,
      timestamp: new Date().toISOString(),
    };

    setMessagesState((prev) => [...prev, newMessage]);
  };

  const selectedRequest = conversationRequests.find((req) => req.id === selectedRequestId);
  const selectedMessages = messagesState.filter((m) => m.requestId === selectedRequestId);

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {isRtl ? "الرسائل" : "Messages"}
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <Link className="text-gray-500 font-medium hover:text-brand-500" to="/customer">
                {isRtl ? "الرئيسية" : "Home"}
              </Link>
            </li>
            <li className="text-gray-500 font-medium">/</li>
            <li className="text-brand-500 font-medium">{isRtl ? "الرسائل" : "Messages"}</li>
          </ol>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`lg:col-span-1 ${selectedRequestId ? "hidden lg:block" : "block"}`}>
          <CustomerConversationList
            conversations={conversations}
            selectedRequestId={selectedRequestId}
            onSelect={(id) => setSelectedRequestId(id)}
          />
        </div>
        <div className={`lg:col-span-2 h-full min-h-[500px] ${!selectedRequestId ? "hidden lg:block" : "block"}`}>
          {selectedRequest ? (
            <div className="h-full flex flex-col relative">
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setSelectedRequestId(null)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRtl ? "rotate-180" : ""}>
                    <path d="M15 19.9201L8.48 13.4001C7.71 12.6301 7.71 11.3701 8.48 10.6001L15 4.08008" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {isRtl ? "العودة للقائمة" : "Back to list"}
                </button>
              </div>
              <CustomerChatWindow
                request={selectedRequest}
                messages={selectedMessages}
                onSendMessage={handleSendMessage}
              />
            </div>
          ) : (
            <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl flex flex-col items-center justify-center text-gray-400 min-h-[500px]">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 opacity-50">
                <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>{isRtl ? "يرجى تحديد محادثة للبدء" : "Please select a conversation to start"}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
