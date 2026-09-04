import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router";
import { DocsIcon, ChatIcon } from "../../../icons";

const CustomerQuickActions: React.FC = () => {
  const { isRtl } = useLanguage();

  const actions = [
    {
      id: "search",
      nameAr: "ابحث عن خدمة",
      nameEn: "Search Services",
      descAr: "اكتشف خدمات جديدة",
      descEn: "Discover new services",
      path: "/customer/search",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.9999 21L16.6499 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      colorClass: "bg-warning-50 text-warning-500 group-hover:bg-warning-500 group-hover:text-white dark:bg-warning-500/20 dark:text-warning-400 dark:group-hover:bg-warning-500 dark:group-hover:text-white",
    },
    {
      id: "requests",
      nameAr: "طلباتي",
      nameEn: "My Requests",
      descAr: "عرض جميع طلباتك",
      descEn: "View all your requests",
      path: "/customer/requests",
      icon: <DocsIcon />,
      colorClass: "bg-success-50 text-success-500 group-hover:bg-success-500 group-hover:text-white dark:bg-success-500/20 dark:text-success-400 dark:group-hover:bg-success-500 dark:group-hover:text-white",
    },
    {
      id: "favorites",
      nameAr: "المفضلة",
      nameEn: "Favorites",
      descAr: "خدماتك المفضلة",
      descEn: "Your favorite services",
      path: "/customer/favorites",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
        </svg>
      ),
      colorClass: "bg-error-50 text-error-500 group-hover:bg-error-500 group-hover:text-white dark:bg-error-500/20 dark:text-error-400 dark:group-hover:bg-error-500 dark:group-hover:text-white",
    },
    {
      id: "messages",
      nameAr: "الرسائل",
      nameEn: "Messages",
      descAr: "تواصل مع مقدمي الخدمة",
      descEn: "Chat with providers",
      path: "/customer/messages",
      icon: <ChatIcon />,
      colorClass: "bg-brand-50 text-brand-500 group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/20 dark:text-brand-400 dark:group-hover:bg-brand-500 dark:group-hover:text-white",
    },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        {isRtl ? "إجراءات سريعة" : "Quick Actions"}
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action) => (
          <Link
            key={action.id}
            to={action.path}
            className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-2xl shadow-theme-sm hover:shadow-theme-md transition-all duration-300 dark:bg-gray-900 dark:border-gray-800 group relative overflow-hidden"
          >
            <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 transition-colors duration-300 ${action.colorClass}`}>
              {action.icon}
            </div>
            <h4 className="text-base font-bold text-gray-900 dark:text-white text-center mb-1">
              {isRtl ? action.nameAr : action.nameEn}
            </h4>
            <span className="text-xs text-gray-500 dark:text-gray-400 text-center mb-4">
              {isRtl ? action.descAr : action.descEn}
            </span>
            
            <div className="mt-auto flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRtl ? "rotate-180" : ""}>
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomerQuickActions;
