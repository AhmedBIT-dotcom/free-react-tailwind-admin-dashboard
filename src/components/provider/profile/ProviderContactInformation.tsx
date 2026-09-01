import { useState } from "react";
import { ProviderProfileData } from "./mockData";

interface ProviderContactInformationProps {
  isRtl: boolean;
  profile: ProviderProfileData;
}

export default function ProviderContactInformation({ isRtl, profile }: ProviderContactInformationProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    phone: profile.phone,
    whatsapp: profile.whatsapp,
    email: profile.email,
    cityAr: profile.cityAr,
    cityEn: profile.cityEn,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setFormData({
      phone: profile.phone,
      whatsapp: profile.whatsapp,
      email: profile.email,
      cityAr: profile.cityAr,
      cityEn: profile.cityEn,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col h-full">
      <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">
          {isRtl ? "بيانات التواصل" : "Contact Information"}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center flex-wrap">
            <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "رقم الهاتف" : "Phone"}</span>
            <div className="sm:col-span-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {isEditing ? (
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                  dir="ltr"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 flex-1" dir="ltr" style={{textAlign: isRtl ? 'right' : 'left'}}>{formData.phone}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "واتساب" : "WhatsApp"}</span>
            <div className="sm:col-span-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-success-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {isEditing ? (
                <input 
                  type="tel" 
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                  dir="ltr"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 flex-1" dir="ltr" style={{textAlign: isRtl ? 'right' : 'left'}}>{formData.whatsapp}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "البريد الإلكتروني" : "Email"}</span>
            <div className="sm:col-span-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {isEditing ? (
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 flex-1">{formData.email}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "المدينة" : "City"}</span>
            <div className="sm:col-span-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {isEditing ? (
                <input 
                  type="text" 
                  value={isRtl ? formData.cityAr : formData.cityEn}
                  onChange={(e) => isRtl ? setFormData({...formData, cityAr: e.target.value}) : setFormData({...formData, cityEn: e.target.value})}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                />
              ) : (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 flex-1">
                  {isRtl ? formData.cityAr : formData.cityEn} {isRtl ? "، اليمن" : ", Yemen"}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "ساعات العمل" : "Working Hours"}</span>
            <div className="sm:col-span-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200 flex-1">
                08:00 {isRtl ? "ص" : "AM"} - 08:00 {isRtl ? "م" : "PM"}
              </span>
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
