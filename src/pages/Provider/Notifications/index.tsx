import { useState, useEffect } from "react";
import { Notification, mockNotifications } from "../../../components/provider/notifications/mockData";
import ProviderNotificationsSummary from "../../../components/provider/notifications/ProviderNotificationsSummary";
import ProviderNotificationsFilters from "../../../components/provider/notifications/ProviderNotificationsFilters";
import ProviderNotificationsList from "../../../components/provider/notifications/ProviderNotificationsList";

export default function ProviderNotifications() {
  const [isRtl, setIsRtl] = useState(document.documentElement.dir === "rtl");
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsRtl(document.documentElement.dir === "rtl");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, []);

  // Filter Logic
  const filteredNotifications = notifications.filter(notif => {
    // 1. Search
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      notif.titleAr.toLowerCase().includes(q) ||
      notif.titleEn.toLowerCase().includes(q) ||
      notif.descriptionAr.toLowerCase().includes(q) ||
      notif.descriptionEn.toLowerCase().includes(q) ||
      (notif.relatedId && notif.relatedId.toLowerCase().includes(q));

    // 2. Status
    let matchesStatus = true;
    if (statusFilter === "unread") matchesStatus = !notif.isRead;
    if (statusFilter === "read") matchesStatus = notif.isRead;

    // 3. Category
    let matchesCategory = true;
    if (categoryFilter !== "all") matchesCategory = notif.category === categoryFilter;

    // 4. Date
    let matchesDate = true;
    if (dateFilter === "today") matchesDate = notif.dateGroup === "today";
    if (dateFilter === "yesterday") matchesDate = notif.dateGroup === "yesterday";
    // For week/month, we'll map roughly to dateGroup since mock data isn't full Date objects
    if (dateFilter === "week") matchesDate = notif.dateGroup === "today" || notif.dateGroup === "yesterday" || (notif.dateGroup === "earlier" && notif.timeEn.includes("days"));
    if (dateFilter === "month") matchesDate = true; // Includes everything in mock

    return matchesSearch && matchesStatus && matchesCategory && matchesDate;
  });

  // KPI Calculations
  const totalCount = notifications.length;
  const unreadCount = notifications.filter(n => !n.isRead).length;
  const todayCount = notifications.filter(n => n.dateGroup === "today").length;
  const importantCount = notifications.filter(n => n.priority === "important").length;

  // Actions
  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const handleMarkRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const handleMarkUnread = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: false } : n));
  };

  const handleDelete = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setCategoryFilter("all");
    setDateFilter("all");
  };

  const isFilterEmpty = searchQuery !== "" || statusFilter !== "all" || categoryFilter !== "all" || dateFilter !== "all";

  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90 mb-1">
            {isRtl ? "الإشعارات" : "Notifications"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isRtl
              ? "تابع آخر التحديثات والتنبيهات المتعلقة بخدماتك وطلباتك"
              : "Stay updated with the latest activity related to your services and requests"}
          </p>
        </div>
        
        {unreadCount > 0 && (
          <button 
            onClick={handleMarkAllRead}
            className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-gray-900 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 12L15 15.5M10.5 16.5L14 20L22 12M2 12L5.5 15.5L13.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isRtl ? "تحديد الكل كمقروء" : "Mark all as read"}
          </button>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {/* KPI Cards */}
        <ProviderNotificationsSummary 
          isRtl={isRtl}
          totalCount={totalCount}
          unreadCount={unreadCount}
          todayCount={todayCount}
          importantCount={importantCount}
        />

        {/* Filters */}
        <ProviderNotificationsFilters 
          isRtl={isRtl}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          categoryFilter={categoryFilter}
          onCategoryFilterChange={setCategoryFilter}
          dateFilter={dateFilter}
          onDateFilterChange={setDateFilter}
          onClearFilters={handleClearFilters}
        />

        {/* List */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 sm:p-6">
          <ProviderNotificationsList 
            isRtl={isRtl}
            notifications={filteredNotifications}
            isFilterEmpty={isFilterEmpty}
            onMarkRead={handleMarkRead}
            onMarkUnread={handleMarkUnread}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}
