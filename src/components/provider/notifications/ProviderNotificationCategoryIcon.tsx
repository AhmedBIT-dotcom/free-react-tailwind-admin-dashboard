import { NotificationCategory } from "./mockData";

interface ProviderNotificationCategoryIconProps {
  category: NotificationCategory;
  isRead: boolean;
}

export default function ProviderNotificationCategoryIcon({ category, isRead }: ProviderNotificationCategoryIconProps) {
  const getIconConfig = () => {
    switch (category) {
      case "requests":
        return {
          bg: isRead ? "bg-brand-50 dark:bg-brand-500/10" : "bg-brand-100 dark:bg-brand-500/20",
          text: "text-brand-500 dark:text-brand-400",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M9 12H15M9 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        };
      case "messages":
        return {
          bg: isRead ? "bg-blue-50 dark:bg-blue-500/10" : "bg-blue-100 dark:bg-blue-500/20",
          text: "text-blue-500 dark:text-blue-400",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        };
      case "appointments":
        return {
          bg: isRead ? "bg-purple-50 dark:bg-purple-500/10" : "bg-purple-100 dark:bg-purple-500/20",
          text: "text-purple-500 dark:text-purple-400",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        };
      case "payments":
        return {
          bg: isRead ? "bg-success-50 dark:bg-success-500/10" : "bg-success-100 dark:bg-success-500/20",
          text: "text-success-500 dark:text-success-400",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 10H21M7 15H9M5 6H19C20.1046 6 21 6.89543 21 8V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        };
      case "reviews":
        return {
          bg: isRead ? "bg-warning-50 dark:bg-warning-500/10" : "bg-warning-100 dark:bg-warning-500/20",
          text: "text-warning-500 dark:text-warning-400",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        };
      case "services":
        return {
          bg: isRead ? "bg-indigo-50 dark:bg-indigo-500/10" : "bg-indigo-100 dark:bg-indigo-500/20",
          text: "text-indigo-500 dark:text-indigo-400",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99038 8.74926 5.38285 7.75219C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99038 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        };
      case "system":
        return {
          bg: isRead ? "bg-gray-100 dark:bg-gray-800" : "bg-gray-200 dark:bg-gray-700",
          text: "text-gray-600 dark:text-gray-300",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        };
      default:
        return {
          bg: "bg-gray-100 dark:bg-gray-800",
          text: "text-gray-500",
          icon: null
        };
    }
  };

  const { bg, text, icon } = getIconConfig();

  return (
    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${bg} ${text} shrink-0 transition-colors`}>
      {icon}
    </div>
  );
}
