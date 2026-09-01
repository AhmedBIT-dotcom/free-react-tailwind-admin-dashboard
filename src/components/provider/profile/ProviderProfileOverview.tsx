import { ProviderProfileData } from "./mockData";

interface ProviderProfileOverviewProps {
  isRtl: boolean;
  profile: ProviderProfileData;
  onEditPhoto: () => void;
}

export default function ProviderProfileOverview({ isRtl, profile, onEditPhoto }: ProviderProfileOverviewProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
      
      {/* Avatar Section */}
      <div className="flex flex-col items-center shrink-0">
        <div className="relative group w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-3 border-4 border-gray-50 dark:border-gray-800">
          <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={onEditPhoto} className="text-white p-2 hover:text-brand-300 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19V15L15 4C15.2652 3.73478 15.6249 3.58579 16 3.58579C16.3751 3.58579 16.7348 3.73478 17 4L20 7C20.2652 7.26522 20.4142 7.62493 20.4142 8C20.4142 8.37507 20.2652 8.73478 20 9L9 20H4V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 flex flex-col justify-center text-center lg:text-start min-w-0">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90">
                {isRtl ? `${profile.firstNameAr} ${profile.lastNameAr}` : `${profile.firstNameEn} ${profile.lastNameEn}`}
              </h2>
              <span className="text-brand-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                </svg>
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              {isRtl ? profile.titleAr : profile.titleEn}
            </p>
          </div>
          
          <div className="flex items-center justify-center lg:justify-end gap-2 shrink-0">
            <span className="inline-flex items-center justify-center rounded-full bg-success-50 px-3 py-1 text-sm font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-success-500"></span>
              {isRtl ? (profile.status === 'active' ? "نشط" : "غير نشط") : (profile.status === 'active' ? "Active" : "Inactive")}
            </span>
          </div>
        </div>

        {/* Stats & Contacts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col items-center lg:items-start gap-1">
            <div className="flex items-center gap-1.5 text-warning-500 font-bold text-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>{profile.rating}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {isRtl ? `${profile.reviewCount} تقييم` : `${profile.reviewCount} Reviews`}
            </span>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-1">
            <div className="flex items-center gap-1.5 text-gray-800 dark:text-white/90 font-medium">
              <svg className="text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="truncate">
                {isRtl ? `${profile.cityAr}، اليمن` : `${profile.cityEn}, Yemen`}
              </span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {isRtl ? "الموقع" : "Location"}
            </span>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-1">
            <div className="flex items-center gap-1.5 text-gray-800 dark:text-white/90 font-medium truncate max-w-full">
              <svg className="text-gray-400 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V20C22.0032 20.2764 21.8906 20.5407 21.6888 20.7303C21.4871 20.9199 21.2135 21.0187 20.93 21C17.5303 20.6124 14.3168 19.3496 11.6 17.33C9.07684 15.4851 7.02641 12.9806 5.67003 10.12C5.35821 9.42628 5.10931 8.7058 4.93003 7.97C4.85764 7.6974 4.88722 7.40938 5.01183 7.15286C5.13644 6.89634 5.34914 6.68652 5.61003 6.55L8.94003 4.89C9.22485 4.74719 9.55403 4.72145 9.85695 4.81977C10.1599 4.91809 10.413 5.13284 10.56 5.42L12.5 9.5C12.6288 9.77123 12.658 10.0818 12.5807 10.3703C12.5034 10.6587 12.3252 10.9037 12.08 11.05L10.23 12.16C11.3789 14.4716 13.238 16.3262 15.54 17.47L16.64 15.63C16.8373 15.3402 17.1479 15.1384 17.4878 15.0538C17.8277 14.9692 18.1793 15.0064 18.49 15.16L22.61 17.19C22.8837 17.3235 23.0949 17.5583 23.1895 17.8385C23.284 18.1187 23.2536 18.4191 23.1 18.67L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="truncate" dir="ltr">{profile.phone}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {isRtl ? "رقم الهاتف" : "Phone"}
            </span>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-1">
            <div className="flex items-center gap-1.5 text-gray-800 dark:text-white/90 font-medium truncate max-w-full">
              <svg className="text-gray-400 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="truncate">{profile.email}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {isRtl ? "البريد الإلكتروني" : "Email"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
