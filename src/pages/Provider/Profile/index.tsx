import { useState, useEffect } from "react";
import PageMeta from "../../../components/common/PageMeta";
import { mockProfileData } from "../../../components/provider/profile/mockData";
import ProviderProfileOverview from "../../../components/provider/profile/ProviderProfileOverview";
import ProviderProfileCompletion from "../../../components/provider/profile/ProviderProfileCompletion";
import ProviderPersonalInformation from "../../../components/provider/profile/ProviderPersonalInformation";
import ProviderProfessionalInformation from "../../../components/provider/profile/ProviderProfessionalInformation";
import ProviderContactInformation from "../../../components/provider/profile/ProviderContactInformation";
import ProviderServiceArea from "../../../components/provider/profile/ProviderServiceArea";
import ProviderLanguages from "../../../components/provider/profile/ProviderLanguages";
import ProviderWorkingHours from "../../../components/provider/profile/ProviderWorkingHours";
import ProviderAccountStatus from "../../../components/provider/profile/ProviderAccountStatus";
import ProviderSecurity from "../../../components/provider/profile/ProviderSecurity";
import ProviderDangerZone from "../../../components/provider/profile/ProviderDangerZone";

export default function ProviderProfile() {
  const [isRtl, setIsRtl] = useState(false);
  const profile = mockProfileData;

  useEffect(() => {
    const checkRtl = () => {
      const dir = document.documentElement.getAttribute("dir");
      setIsRtl(dir === "rtl");
    };

    checkRtl();
    
    const observer = new MutationObserver(checkRtl);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    return () => observer.disconnect();
  }, []);

  const handleEditPhoto = () => {
    // Mock edit photo action
    alert(isRtl ? "تغيير الصورة - (محاكاة)" : "Change Photo - (Mock)");
  };

  return (
    <>
      <PageMeta
        title={isRtl ? "الملف الشخصي | مقدم الخدمة" : "Profile | Provider"}
        description={isRtl ? "إدارة معلوماتك الشخصية والمهنية" : "Manage your personal and professional information"}
      />
      
      <div className="flex flex-col gap-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white/90 mb-1 flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {isRtl ? "الملف الشخصي" : "Profile"}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isRtl ? "إدارة معلوماتك الشخصية والمهنية وإعدادات حسابك." : "Manage your personal information, professional details, and account settings."}
            </p>
          </div>
          
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors shadow-sm shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            {isRtl ? "تعديل الملف الشخصي" : "Edit Profile"}
          </button>
        </div>

        {/* Top Row: Overview (2/3) + Completion (1/3) */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <ProviderProfileOverview 
              isRtl={isRtl} 
              profile={profile} 
              onEditPhoto={handleEditPhoto} 
            />
          </div>
          <div className="xl:col-span-1 h-full">
            <ProviderAccountStatus 
              isRtl={isRtl} 
              status={profile.status}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1 h-full">
            <ProviderProfileCompletion 
              isRtl={isRtl} 
              completionPercentage={profile.completionPercentage} 
            />
          </div>
          <div className="xl:col-span-1 h-full">
            <ProviderPersonalInformation 
              isRtl={isRtl} 
              profile={profile} 
            />
          </div>
          <div className="xl:col-span-1 h-full">
            <ProviderProfessionalInformation 
              isRtl={isRtl} 
              profile={profile} 
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1 h-full">
            <ProviderContactInformation 
              isRtl={isRtl} 
              profile={profile} 
            />
          </div>
          <div className="xl:col-span-1 h-full">
            <ProviderServiceArea 
              isRtl={isRtl} 
              cityAr={profile.cityAr}
              cityEn={profile.cityEn}
              areasAr={profile.serviceAreasAr}
              areasEn={profile.serviceAreasEn}
            />
          </div>
          <div className="xl:col-span-1 h-full flex flex-col gap-6">
            <div className="flex-1">
              <ProviderLanguages 
                isRtl={isRtl} 
                languages={profile.languages} 
              />
            </div>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1 h-full">
            <ProviderWorkingHours 
              isRtl={isRtl} 
              workingHours={profile.workingHours} 
            />
          </div>
          <div className="xl:col-span-1 h-full">
            <ProviderSecurity 
              isRtl={isRtl} 
            />
          </div>
          <div className="xl:col-span-1 h-full">
            <ProviderDangerZone 
              isRtl={isRtl} 
            />
          </div>
        </div>

      </div>
    </>
  );
}
