import React, { useRef, useState } from "react";
import { MockCustomerUser } from "./mockData";

interface CustomerProfileMetaProps {
  user: MockCustomerUser;
}

export default function CustomerProfileMeta({ user }: CustomerProfileMetaProps) {
  const [avatar, setAvatar] = useState(user.avatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Local preview only
      const objectUrl = URL.createObjectURL(file);
      setAvatar(objectUrl);
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col items-center text-center">
      <div className="relative mb-5">
        <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-theme-sm dark:border-gray-900 bg-gray-100 dark:bg-gray-800">
          <img
            src={avatar}
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 focus:outline-none border-2 border-white dark:border-gray-900"
          aria-label="Update Avatar"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0901 10.98C19.2789 10.3541 19.3734 9.71181 19.3734 9.06412C19.3734 4.96696 16.071 1.64413 11.9904 1.64413C7.90977 1.64413 4.60742 4.96696 4.60742 9.06412C4.60742 9.47547 4.64098 9.88265 4.70701 10.2816C2.65064 11.0827 1.18945 13.0487 1.18945 15.3406C1.18945 18.2343 3.51868 20.5796 6.39487 20.5796H17.8483C20.4079 20.5796 22.4828 18.4919 22.4828 15.9163C22.4828 13.5658 20.7381 11.621 19.0901 10.98Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleAvatarChange}
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white/90">
        {user.firstName} {user.lastName}
      </h3>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {user.email}
      </p>

      <div className="mt-6 flex flex-col items-center">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-medium text-gray-600 dark:text-gray-300">Member since</span>
        </div>
        <span className="mt-1 text-sm font-medium text-gray-900 dark:text-white/90">
          Jan 2024
        </span>
      </div>

      <button
        onClick={() => fileInputRef.current?.click()}
        className="mt-8 flex w-full md:w-auto items-center justify-center gap-2 rounded-lg border border-brand-200 text-brand-600 bg-brand-50 px-6 py-2.5 text-sm font-medium shadow-theme-xs hover:bg-brand-100 hover:text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-400 dark:hover:bg-brand-500/20"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.0901 10.98C19.2789 10.3541 19.3734 9.71181 19.3734 9.06412C19.3734 4.96696 16.071 1.64413 11.9904 1.64413C7.90977 1.64413 4.60742 4.96696 4.60742 9.06412C4.60742 9.47547 4.64098 9.88265 4.70701 10.2816C2.65064 11.0827 1.18945 13.0487 1.18945 15.3406C1.18945 18.2343 3.51868 20.5796 6.39487 20.5796H17.8483C20.4079 20.5796 22.4828 18.4919 22.4828 15.9163C22.4828 13.5658 20.7381 11.621 19.0901 10.98Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Change Photo
      </button>
    </div>
  );
}
