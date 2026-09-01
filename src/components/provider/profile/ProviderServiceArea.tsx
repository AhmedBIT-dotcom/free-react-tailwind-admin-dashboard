import { useState } from "react";

interface ProviderServiceAreaProps {
  isRtl: boolean;
  cityAr: string;
  cityEn: string;
  areasAr: string[];
  areasEn: string[];
}

export default function ProviderServiceArea({ isRtl, cityAr, cityEn, areasAr, areasEn }: ProviderServiceAreaProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [areas, setAreas] = useState(isRtl ? areasAr : areasEn);
  const [newArea, setNewArea] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setAreas(isRtl ? areasAr : areasEn);
    setNewArea("");
    setIsEditing(false);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newArea.trim() !== "" && !areas.includes(newArea.trim())) {
      setAreas([...areas, newArea.trim()]);
      setNewArea("");
    }
  };

  const handleRemove = (areaToRemove: string) => {
    setAreas(areas.filter(a => a !== areaToRemove));
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col h-full">
      <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">
          {isRtl ? "منطقة تقديم الخدمة" : "Service Area"}
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

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 w-20">{isRtl ? "المدينة" : "City"}</span>
            <span className="text-base font-bold text-gray-800 dark:text-white/90">{isRtl ? cityAr : cityEn}</span>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{isRtl ? "المناطق التي أعمل بها" : "Areas I work in"}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {areas.map(area => (
                <div key={area} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{area}</span>
                  {isEditing && (
                    <button 
                      onClick={() => handleRemove(area)}
                      className="p-0.5 text-gray-400 hover:text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10 rounded-full transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {isEditing && (
              <form onSubmit={handleAdd} className="flex gap-2">
                <input 
                  type="text" 
                  value={newArea}
                  onChange={(e) => setNewArea(e.target.value)}
                  placeholder={isRtl ? "أضف منطقة جديدة..." : "Add new area..."}
                  className="flex-1 rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
                />
                <button 
                  type="submit"
                  disabled={!newArea.trim()}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-brand-500 bg-brand-50 hover:bg-brand-100 dark:bg-brand-500/10 dark:hover:bg-brand-500/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-brand-100 dark:border-brand-500/20"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  {isRtl ? "إضافة منطقة" : "Add Area"}
                </button>
              </form>
            )}
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
