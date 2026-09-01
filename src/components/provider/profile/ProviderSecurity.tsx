import { useState } from "react";

interface ProviderSecurityProps {
  isRtl: boolean;
}

export default function ProviderSecurity({ isRtl }: ProviderSecurityProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mock save
    setIsEditing(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col h-full">
      <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white/90 flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          {isRtl ? "الأمان" : "Security"}
        </h3>
      </div>

      <div className="p-5 sm:p-6 flex flex-col items-center justify-center flex-1">
        {showSuccess && (
          <div className="mb-4 w-full p-3 bg-success-50 dark:bg-success-500/10 text-success-600 dark:text-success-400 text-sm rounded-lg flex items-center justify-center gap-2">
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            {isRtl ? "تم تغيير كلمة المرور بنجاح." : "Password changed successfully."}
          </div>
        )}

        {!isEditing ? (
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h4 className="text-base font-bold text-gray-800 dark:text-white/90 mb-1">
              {isRtl ? "تغيير كلمة المرور" : "Change Password"}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xs">
              {isRtl ? "حافظ على أمان حسابك بتحديث كلمة المرور بشكل دوري." : "Keep your account secure by updating your password regularly."}
            </p>
            <button 
              onClick={() => setIsEditing(true)}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              {isRtl ? "تغيير كلمة المرور" : "Change Password"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {isRtl ? "كلمة المرور الحالية" : "Current Password"}
              </label>
              <input 
                type="password" 
                required
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {isRtl ? "كلمة المرور الجديدة" : "New Password"}
              </label>
              <input 
                type="password" 
                required
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {isRtl ? "تأكيد كلمة المرور" : "Confirm Password"}
              </label>
              <input 
                type="password" 
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
              />
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button 
                type="button" 
                onClick={handleCancel}
                className="flex-1 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg dark:text-gray-300 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
              >
                {isRtl ? "إلغاء" : "Cancel"}
              </button>
              <button 
                type="submit" 
                disabled={!currentPassword || !newPassword || newPassword !== confirmPassword}
                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRtl ? "حفظ" : "Save"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
