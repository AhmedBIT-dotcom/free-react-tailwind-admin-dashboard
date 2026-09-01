import { useState } from "react";
import { ProviderProfileData } from "./mockData";

interface ProviderProfessionalInformationProps {
  isRtl: boolean;
  profile: ProviderProfileData;
}

export default function ProviderProfessionalInformation({ isRtl, profile }: ProviderProfessionalInformationProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    titleAr: profile.titleAr,
    titleEn: profile.titleEn,
    categoryAr: profile.categoryAr,
    categoryEn: profile.categoryEn,
    specialtyAr: profile.specialtyAr,
    specialtyEn: profile.specialtyEn,
    experienceYears: profile.experienceYears,
    cityAr: profile.cityAr,
    cityEn: profile.cityEn,
    bioAr: profile.bioAr,
    bioEn: profile.bioEn
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setFormData({
      titleAr: profile.titleAr,
      titleEn: profile.titleEn,
      categoryAr: profile.categoryAr,
      categoryEn: profile.categoryEn,
      specialtyAr: profile.specialtyAr,
      specialtyEn: profile.specialtyEn,
      experienceYears: profile.experienceYears,
      cityAr: profile.cityAr,
      cityEn: profile.cityEn,
      bioAr: profile.bioAr,
      bioEn: profile.bioEn
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col h-full">
      <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">
          {isRtl ? "المعلومات المهنية" : "Professional Information"}
        </h3>
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} className="text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors">
            {isRtl ? "تعديل" : "Edit"}
          </button>
        )}
      </div>

      <div className="p-5 sm:p-6 flex-1">
        {showSuccess && (
          <div className="mb-4 p-3 bg-success-50 dark:bg-success-500/10 text-success-600 dark:text-success-400 text-sm rounded-lg flex items-center gap-2">
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            {isRtl ? "تم حفظ التغييرات بنجاح." : "Changes saved successfully."}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-start sm:items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 pt-1 sm:pt-0">{isRtl ? "المسمى المهني" : "Job Title"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <input 
                  type="text" 
                  value={isRtl ? formData.titleAr : formData.titleEn}
                  onChange={(e) => isRtl ? setFormData({...formData, titleAr: e.target.value}) : setFormData({...formData, titleEn: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{isRtl ? formData.titleAr : formData.titleEn}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-start sm:items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 pt-1 sm:pt-0">{isRtl ? "الفئة الرئيسية" : "Main Category"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <select 
                  value={isRtl ? formData.categoryAr : formData.categoryEn}
                  onChange={(e) => isRtl ? setFormData({...formData, categoryAr: e.target.value}) : setFormData({...formData, categoryEn: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90 appearance-none"
                >
                  <option value={isRtl ? "الصيانة المنزلية" : "Home Maintenance"}>{isRtl ? "الصيانة المنزلية" : "Home Maintenance"}</option>
                  <option value={isRtl ? "النظافة" : "Cleaning"}>{isRtl ? "النظافة" : "Cleaning"}</option>
                  <option value={isRtl ? "تكنولوجيا" : "Tech"}>{isRtl ? "تكنولوجيا" : "Tech"}</option>
                </select>
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{isRtl ? formData.categoryAr : formData.categoryEn}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-start sm:items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 pt-1 sm:pt-0">{isRtl ? "التخصص" : "Specialty"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <input 
                  type="text" 
                  value={isRtl ? formData.specialtyAr : formData.specialtyEn}
                  onChange={(e) => isRtl ? setFormData({...formData, specialtyAr: e.target.value}) : setFormData({...formData, specialtyEn: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{isRtl ? formData.specialtyAr : formData.specialtyEn}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-start sm:items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 pt-1 sm:pt-0">{isRtl ? "سنوات الخبرة" : "Years of Experience"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <input 
                  type="number" 
                  value={formData.experienceYears}
                  onChange={(e) => setFormData({...formData, experienceYears: parseInt(e.target.value) || 0})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {formData.experienceYears} {isRtl ? "سنوات" : "years"}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-start sm:items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 pt-1 sm:pt-0">{isRtl ? "منطقة العمل" : "Work Area"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <input 
                  type="text" 
                  value={isRtl ? formData.cityAr : formData.cityEn}
                  onChange={(e) => isRtl ? setFormData({...formData, cityAr: e.target.value}) : setFormData({...formData, cityEn: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{isRtl ? formData.cityAr : formData.cityEn}</span>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-start sm:items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 pt-1 sm:pt-0">{isRtl ? "اللغات" : "Languages"}</span>
            <div className="sm:col-span-2">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {profile.languages.map(l => isRtl ? l.nameAr : l.nameEn).join("، ")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-start pt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 pt-1">{isRtl ? "نبذة تعريفية" : "Bio"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <textarea 
                  rows={4}
                  value={isRtl ? formData.bioAr : formData.bioEn}
                  onChange={(e) => isRtl ? setFormData({...formData, bioAr: e.target.value}) : setFormData({...formData, bioEn: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90 resize-none"
                />
              ) : (
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                  {isRtl ? formData.bioAr : formData.bioEn}
                </p>
              )}
            </div>
          </div>

        </div>
      </div>

      {isEditing && (
        <div className="p-4 sm:p-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end gap-3 shrink-0">
          <button onClick={handleCancel} className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg dark:text-gray-300 dark:hover:bg-gray-800 transition-colors border border-transparent">
            {isRtl ? "إلغاء" : "Cancel"}
          </button>
          <button onClick={handleSave} className="px-4 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors shadow-sm">
            {isRtl ? "حفظ التغييرات" : "Save Changes"}
          </button>
        </div>
      )}
    </div>
  );
}
