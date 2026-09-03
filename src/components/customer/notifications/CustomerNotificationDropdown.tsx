import { useState } from "react";
import { Dropdown } from "../../ui/dropdown/Dropdown";
import { DropdownItem } from "../../ui/dropdown/DropdownItem";
import { Link } from "react-router";
import { mockNotifications, SanahNotification } from "./mockData";

const NotificationIcon = ({ type }: { type: SanahNotification["type"] }) => {
  switch (type) {
    case "REQUEST_SENT":
      return (
        <span className="flex items-center justify-center w-10 h-10 bg-blue-50 text-blue-500 rounded-full dark:bg-blue-500/10 dark:text-blue-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "PROVIDER_ACCEPTED":
    case "SERVICE_COMPLETED":
      return (
        <span className="flex items-center justify-center w-10 h-10 bg-success-50 text-success-500 rounded-full dark:bg-success-500/10 dark:text-success-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "PROVIDER_REJECTED":
      return (
        <span className="flex items-center justify-center w-10 h-10 bg-error-50 text-error-500 rounded-full dark:bg-error-500/10 dark:text-error-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "NEW_MESSAGE":
      return (
        <span className="flex items-center justify-center w-10 h-10 bg-brand-50 text-brand-500 rounded-full dark:bg-brand-500/10 dark:text-brand-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "PAYMENT_PROOF_UPLOADED":
      return (
        <span className="flex items-center justify-center w-10 h-10 bg-purple-50 text-purple-500 rounded-full dark:bg-purple-500/10 dark:text-purple-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "PAYMENT_VERIFICATION":
      return (
        <span className="flex items-center justify-center w-10 h-10 bg-blue-50 text-blue-500 rounded-full dark:bg-blue-500/10 dark:text-blue-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "DISPUTE":
      return (
        <span className="flex items-center justify-center w-10 h-10 bg-warning-50 text-warning-500 rounded-full dark:bg-warning-500/10 dark:text-warning-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "SERVICE_CLOSED":
      return (
        <span className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-500 rounded-full dark:bg-gray-800 dark:text-gray-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    case "REVIEW_AVAILABLE":
      return (
        <span className="flex items-center justify-center w-10 h-10 bg-orange-50 text-orange-500 rounded-full dark:bg-orange-500/10 dark:text-orange-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
    default:
      return (
        <span className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-500 rounded-full dark:bg-gray-800 dark:text-gray-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      );
  }
};

export default function CustomerNotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  
  const unreadCount = mockNotifications.filter(n => !n.isRead).length;
  const [notifying, setNotifying] = useState(unreadCount > 0);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins} mins ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    return `${diffDays} days ago`;
  };

  return (
    <div className="sm:relative">
      <button
        className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full dropdown-toggle hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={handleClick}
      >
        <span
          className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${
            !notifying ? "hidden" : "flex"
          }`}
        >
          <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
        </span>
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute mt-[17px] flex h-[480px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark w-[calc(100vw-32px)] max-w-[350px] mr-4 sm:mr-0 sm:max-w-none sm:w-[361px] sm:-right-[240px] lg:right-0"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
          <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Notifications
          </h5>
          <button
            onClick={toggleDropdown}
            className="text-gray-500 transition dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col h-auto overflow-y-auto custom-scrollbar">
          {mockNotifications.slice(0, 5).map((notification) => (
            <li key={notification.id}>
              <DropdownItem
                onItemClick={closeDropdown}
                to={notification.requestId ? `/customer/requests/${notification.requestId}` : "/customer/notifications"}
                className={`flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-white/5 ${!notification.isRead ? 'bg-brand-50/30 dark:bg-brand-900/10' : ''}`}
              >
                <div className="relative shrink-0 mt-1">
                  <NotificationIcon type={notification.type} />
                </div>

                <div className="block flex-1 min-w-0">
                  <span className="mb-1 block text-sm font-semibold text-gray-900 dark:text-white/90">
                    {notification.titleEn}
                  </span>
                  
                  <span className="mb-2 block text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                    {notification.messageEn}
                  </span>

                  <span className="flex items-center gap-2 text-gray-400 text-xs dark:text-gray-500">
                    <span>{formatTime(notification.createdAt)}</span>
                  </span>
                </div>
                
                {!notification.isRead && (
                  <div className="shrink-0 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-brand-500 block"></span>
                  </div>
                )}
              </DropdownItem>
            </li>
          ))}
        </ul>
        <Link
          to="/customer/notifications"
          onClick={closeDropdown}
          className="block px-4 py-2 mt-3 text-sm font-medium text-center text-brand-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-brand-400 dark:hover:bg-gray-700 transition-colors"
        >
          View All Notifications
        </Link>
      </Dropdown>
    </div>
  );
}
