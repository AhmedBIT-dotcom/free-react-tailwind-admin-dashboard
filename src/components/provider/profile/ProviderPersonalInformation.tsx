import { useState } from "react";
import { ProviderProfileData } from "./mockData";

interface ProviderPersonalInformationProps {
  isRtl: boolean;
  profile: ProviderProfileData;
}

export default function ProviderPersonalInformation({ isRtl, profile }: ProviderPersonalInformationProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstNameAr: profile.firstNameAr,
    firstNameEn: profile.firstNameEn,
    lastNameAr: profile.lastNameAr,
    lastNameEn: profile.lastNameEn,
    phone: profile.phone,
    email: profile.email,
    genderAr: profile.genderAr,
    genderEn: profile.genderEn,
    dob: profile.dob
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    // Save logic mock
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    // Reset to initial props
    setFormData({
      firstNameAr: profile.firstNameAr,
      firstNameEn: profile.firstNameEn,
      lastNameAr: profile.lastNameAr,
      lastNameEn: profile.lastNameEn,
      phone: profile.phone,
      email: profile.email,
      genderAr: profile.genderAr,
      genderEn: profile.genderEn,
      dob: profile.dob
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col h-full">
      <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">
          {isRtl ? "المعلومات الشخصية" : "Personal Information"}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "الاسم الأول" : "First Name"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <input 
                  type="text" 
                  value={isRtl ? formData.firstNameAr : formData.firstNameEn}
                  onChange={(e) => isRtl ? setFormData({...formData, firstNameAr: e.target.value}) : setFormData({...formData, firstNameEn: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{isRtl ? formData.firstNameAr : formData.firstNameEn}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "اسم العائلة" : "Last Name"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <input 
                  type="text" 
                  value={isRtl ? formData.lastNameAr : formData.lastNameEn}
                  onChange={(e) => isRtl ? setFormData({...formData, lastNameAr: e.target.value}) : setFormData({...formData, lastNameEn: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{isRtl ? formData.lastNameAr : formData.lastNameEn}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "رقم الهاتف" : "Phone"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                  dir="ltr"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 block" dir="ltr" style={{textAlign: isRtl ? 'right' : 'left'}}>{formData.phone}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "البريد الإلكتروني" : "Email"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{formData.email}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "الجنس" : "Gender"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <select 
                  value={isRtl ? formData.genderAr : formData.genderEn}
                  onChange={(e) => {
                    const isMale = e.target.value === "ذكر" || e.target.value === "Male";
                    setFormData({...formData, genderAr: isMale ? "ذكر" : "أنثى", genderEn: isMale ? "Male" : "Female"});
                  }}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90 appearance-none"
                >
                  <option value={isRtl ? "ذكر" : "Male"}>{isRtl ? "ذكر" : "Male"}</option>
                  <option value={isRtl ? "أنثى" : "Female"}>{isRtl ? "أنثى" : "Female"}</option>
                </select>
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{isRtl ? formData.genderAr : formData.genderEn}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "تاريخ الميلاد" : "Date of Birth"}</span>
            <div className="sm:col-span-2">
              {isEditing ? (
                <input 
                  type="text" 
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{formData.dob}</span>
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
