import { useState } from "react";
import { ProviderProfileData } from "./mockData";

interface ProviderWorkingHoursProps {
  isRtl: boolean;
  workingHours: ProviderProfileData["workingHours"];
}

export default function ProviderWorkingHours({ isRtl, workingHours: initialWorkingHours }: ProviderWorkingHoursProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [hours, setHours] = useState(initialWorkingHours);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setHours(initialWorkingHours);
    setIsEditing(false);
  };

  const toggleDayStatus = (index: number) => {
    const newHours = [...hours];
    newHours[index].isOpen = !newHours[index].isOpen;
    if (!newHours[index].isOpen) {
      newHours[index].start = "";
      newHours[index].end = "";
    } else {
      newHours[index].start = "08:00 AM";
      newHours[index].end = "08:00 PM";
    }
    setHours(newHours);
  };

  const updateTime = (index: number, field: 'start' | 'end', value: string) => {
    const newHours = [...hours];
    newHours[index][field] = value;
    setHours(newHours);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col h-full">
      <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">
          {isRtl ? "ساعات العمل" : "Working Hours"}
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

        <div className="flex flex-col gap-3">
          {hours.map((day, idx) => (
            <div key={idx} className="flex items-center justify-between border-b border-gray-50 dark:border-gray-800/50 pb-2 last:border-0 last:pb-0">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200 w-24">
                {isRtl ? day.dayAr : day.dayEn}
              </span>
              
              <div className="flex-1 flex items-center justify-end sm:justify-start gap-4">
                <span className={`flex items-center gap-1.5 text-xs font-medium w-16 ${day.isOpen ? 'text-success-500' : 'text-error-500'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${day.isOpen ? 'bg-success-500' : 'bg-error-500'}`}></span>
                  {day.isOpen ? (isRtl ? "مفتوح" : "Open") : (isRtl ? "مغلق" : "Closed")}
                </span>

                {isEditing ? (
                  <div className="flex items-center gap-2 flex-1 max-w-[200px]">
                    {day.isOpen ? (
                      <>
                        <input 
                          type="text" 
                          value={day.start}
                          onChange={(e) => updateTime(idx, 'start', e.target.value)}
                          className="w-full rounded-md border border-gray-200 bg-transparent px-2 py-1 text-xs outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90 text-center"
                          dir="ltr"
                          placeholder="08:00 AM"
                        />
                        <span className="text-gray-400">-</span>
                        <input 
                          type="text" 
                          value={day.end}
                          onChange={(e) => updateTime(idx, 'end', e.target.value)}
                          className="w-full rounded-md border border-gray-200 bg-transparent px-2 py-1 text-xs outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90 text-center"
                          dir="ltr"
                          placeholder="05:00 PM"
                        />
                      </>
                    ) : (
                      <span className="text-xs text-gray-400 flex-1 text-center">—</span>
                    )}
                    <button 
                      onClick={() => toggleDayStatus(idx)}
                      className="ml-auto text-xs text-brand-500 hover:text-brand-600 p-1"
                    >
                      {day.isOpen ? (isRtl ? "إغلاق" : "Close") : (isRtl ? "فتح" : "Open")}
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400" dir="ltr">
                    {day.isOpen ? (
                      <span>{day.start} - {day.end}</span>
                    ) : (
                      <span>—</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
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
