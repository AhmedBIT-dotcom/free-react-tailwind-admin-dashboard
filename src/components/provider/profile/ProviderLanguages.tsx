import { useState } from "react";
import { ProviderProfileData } from "./mockData";

interface ProviderLanguagesProps {
  isRtl: boolean;
  languages: ProviderProfileData["languages"];
}

export default function ProviderLanguages({ isRtl, languages: initialLanguages }: ProviderLanguagesProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [languages, setLanguages] = useState(initialLanguages);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setLanguages(initialLanguages);
    setIsEditing(false);
  };

  const handleRemove = (idToRemove: string) => {
    setLanguages(languages.filter(l => l.id !== idToRemove));
  };

  const handleAddPlaceholder = () => {
    setLanguages([...languages, {
      id: `lang-${Date.now()}`,
      nameAr: "لغة جديدة",
      nameEn: "New Language",
      levelAr: "مبتدئ",
      levelEn: "Beginner"
    }]);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col h-full">
      <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">
          {isRtl ? "اللغات" : "Languages"}
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
          {languages.map((lang, idx) => (
            <div key={lang.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${idx === 0 ? 'bg-success-500' : 'bg-warning-500'}`}></span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {isRtl ? lang.nameAr : lang.nameEn}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  — {isRtl ? lang.levelAr : lang.levelEn}
                </span>
              </div>
              
              {isEditing && (
                <button 
                  onClick={() => handleRemove(lang.id)}
                  className="p-1.5 text-gray-400 hover:text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          ))}

          {isEditing && (
            <button 
              onClick={handleAddPlaceholder}
              className="mt-2 inline-flex items-center justify-center gap-1.5 w-full py-2.5 text-sm font-medium text-brand-500 bg-transparent border border-dashed border-brand-200 hover:bg-brand-50 dark:border-brand-500/30 dark:hover:bg-brand-500/5 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              {isRtl ? "إضافة لغة" : "Add Language"}
            </button>
          )}
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
