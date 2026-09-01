interface ProviderAccountStatusProps {
  isRtl: boolean;
  status: 'active' | 'inactive';
}

export default function ProviderAccountStatus({ isRtl, status }: ProviderAccountStatusProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col h-full">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white/90 mb-6 text-center">
        {isRtl ? "حالة الحساب" : "Account Status"}
      </h3>
      
      <div className="flex flex-col items-center justify-center mb-8 gap-3">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${status === 'active' ? 'bg-success-50 text-success-500 dark:bg-success-500/10' : 'bg-gray-100 text-gray-500 dark:bg-gray-800'}`}>
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="text-center">
          <div className={`text-lg font-bold ${status === 'active' ? 'text-success-600 dark:text-success-400' : 'text-gray-600 dark:text-gray-400'}`}>
            {isRtl ? (status === 'active' ? "الحساب نشط" : "الحساب غير نشط") : (status === 'active' ? "Active Account" : "Inactive Account")}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {isRtl ? "الحالة" : "Status"}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-success-100 dark:bg-success-500/20 text-success-500 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">{isRtl ? "البريد الإلكتروني موثق" : "Email Verified"}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-success-100 dark:bg-success-500/20 text-success-500 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">{isRtl ? "رقم الهاتف موثق" : "Phone Verified"}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-success-100 dark:bg-success-500/20 text-success-500 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">{isRtl ? "الملف الشخصي موثق" : "Profile Verified"}</span>
        </div>
      </div>
    </div>
  );
}
