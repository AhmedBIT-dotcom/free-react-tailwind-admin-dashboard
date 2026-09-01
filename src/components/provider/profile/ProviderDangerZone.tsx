import { useState } from "react";

interface ProviderDangerZoneProps {
  isRtl: boolean;
}

export default function ProviderDangerZone({ isRtl }: ProviderDangerZoneProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col h-full overflow-hidden">
      <div className="p-5 sm:p-6 border-b border-error-100 dark:border-error-900/30 flex items-center justify-between bg-error-50/50 dark:bg-error-500/5">
        <h3 className="text-lg font-bold text-error-600 dark:text-error-500 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {isRtl ? "منطقة خطرة" : "Danger Zone"}
        </h3>
      </div>

      <div className="p-5 sm:p-6 flex flex-col justify-center items-center text-center flex-1">
        <h4 className="text-base font-bold text-gray-800 dark:text-white/90 mb-2">
          {isRtl ? "تعطيل الحساب" : "Deactivate Account"}
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed max-w-sm">
          {isRtl 
            ? "يمكنك تعطيل حسابك مؤقتاً. لن يتم حذف بياناتك وسيظل بإمكانك إعادة تفعيله في أي وقت." 
            : "You can deactivate your account temporarily. Your data won't be deleted and you can reactivate it at any time."}
        </p>
        
        <button 
          onClick={() => setShowModal(true)}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-error-500/10 text-error-600 px-6 py-2.5 text-sm font-medium hover:bg-error-500 hover:text-white dark:bg-error-500/20 dark:text-error-400 dark:hover:bg-error-500 dark:hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
          {isRtl ? "تعطيل الحساب" : "Deactivate Account"}
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-sm shadow-xl p-6 border border-gray-100 dark:border-gray-800 animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 rounded-full bg-error-50 text-error-500 dark:bg-error-500/10 mx-auto flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-center text-gray-900 dark:text-white/90 mb-2">
              {isRtl ? "هل أنت متأكد؟" : "Are you sure?"}
            </h4>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
              {isRtl 
                ? "سيتم إخفاء ملفك عن العملاء حتى تقوم بتسجيل الدخول مرة أخرى لإعادة التفعيل." 
                : "Your profile will be hidden from customers until you login again to reactivate."}
            </p>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              >
                {isRtl ? "إلغاء" : "Cancel"}
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-error-500 hover:bg-error-600 rounded-lg transition-colors shadow-sm"
              >
                {isRtl ? "نعم، عطل الحساب" : "Yes, Deactivate"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
