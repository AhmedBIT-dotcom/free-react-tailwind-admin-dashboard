import { useState } from "react";
import { ServiceRequest } from "../requests/mockData";
import { PaymentProof } from "./mockPaymentData";

interface CustomerPaymentSectionProps {
  request: ServiceRequest;
  paymentProof?: PaymentProof;
  isRtl: boolean;
}

export default function CustomerPaymentSection({ request, paymentProof, isRtl }: CustomerPaymentSectionProps) {
  // Local state for frontend simulation
  const [isSimulatedSubmit, setIsSimulatedSubmit] = useState(false);
  const [amount, setAmount] = useState<string>(paymentProof?.transferredAmount?.toString() || "");
  const [reference, setReference] = useState<string>(paymentProof?.transferReference || "");
  const [date, setDate] = useState<string>(paymentProof?.transferDateTime ? paymentProof.transferDateTime.substring(0, 16) : "");
  const [file, setFile] = useState<File | null>(null);

  // Use simulated submitted state or the mock proof status
  const currentStatus = isSimulatedSubmit ? "PENDING_VERIFICATION" : (paymentProof?.status || "AWAITING_UPLOAD");

  const getTimingText = (timing: string) => {
    switch (timing) {
      case "BEFORE_SERVICE": return isRtl ? "قبل الخدمة" : "Before Service";
      case "DURING_SERVICE": return isRtl ? "أثناء الخدمة" : "During Service";
      case "AFTER_SERVICE": return isRtl ? "بعد الخدمة" : "After Service";
      default: return timing;
    }
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "AWAITING_UPLOAD":
        return {
          label: isRtl ? "بانتظار الرفع" : "Awaiting Upload",
          colorClass: "bg-warning-50 text-warning-700 dark:bg-warning-500/10 dark:text-warning-400 border-warning-200 dark:border-warning-500/20"
        };
      case "PENDING_VERIFICATION":
        return {
          label: isRtl ? "قيد المراجعة" : "Pending Verification",
          colorClass: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400 border-brand-200 dark:border-brand-500/20"
        };
      case "VERIFIED":
        return {
          label: isRtl ? "تم التحقق" : "Verified",
          colorClass: "bg-success-50 text-success-700 dark:bg-success-500/10 dark:text-success-400 border-success-200 dark:border-success-500/20"
        };
      case "DISPUTED":
        return {
          label: isRtl ? "متنازع عليه" : "Disputed",
          colorClass: "bg-error-50 text-error-700 dark:bg-error-500/10 dark:text-error-400 border-error-200 dark:border-error-500/20"
        };
      case "REJECTED":
        return {
          label: isRtl ? "مرفوض" : "Rejected",
          colorClass: "bg-error-50 text-error-700 dark:bg-error-500/10 dark:text-error-400 border-error-200 dark:border-error-500/20"
        };
      default:
        return {
          label: status,
          colorClass: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700"
        };
    }
  };

  const statusConfig = getStatusConfig(currentStatus);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && reference && date && file) {
      setIsSimulatedSubmit(true);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-theme-sm mt-6">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
        <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.74 15.5301H12.26C13.41 15.5301 14.16 14.7301 14.16 13.5201C14.16 11.5101 11.83 11.1601 11.83 10.0001C11.83 9.47012 12.27 9.12012 12.92 9.12012C13.56 9.12012 13.9 9.46012 13.9 10.0501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.1 14.5001C10.1 14.5001 10.3 15.5201 10.74 15.5201" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.07 10.0501C14.07 10.0501 13.92 9.12012 12.92 9.12012C11.82 9.12012 11 9.94012 11 11.0201C11 13.0601 13.33 13.3901 13.33 14.5501C13.33 15.1101 12.87 15.5001 12.21 15.5001C11.54 15.5001 11.16 15.1101 11.16 14.4901" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 7.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {isRtl ? "الدفع وإثبات الدفع" : "Payment & Proof of Payment"}
        </h3>
        <div className="ml-auto flex shrink-0">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium ${statusConfig.colorClass}`}>
            {statusConfig.label}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-8">
        <div className="flex flex-col gap-1.5">
          <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "المبلغ الإجمالي المتفق عليه" : "Agreed Total Amount"}</span>
          <span className="font-semibold text-lg text-gray-900 dark:text-white">{request.totalAmount} <span className="text-sm font-normal text-gray-500">{isRtl ? "ر.س" : "SAR"}</span></span>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "موعد الدفع" : "Payment Timing"}</span>
          <span className="font-semibold text-gray-900 dark:text-white">{getTimingText(request.paymentTiming)}</span>
        </div>
      </div>

      {currentStatus === "AWAITING_UPLOAD" && (
        <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
            {isRtl ? "رفع إثبات الدفع" : "Upload Payment Proof"}
          </h4>
          <p className="text-sm text-gray-500 mb-6">
            {isRtl 
              ? "يرجى تحويل المبلغ خارجياً ثم إرفاق إيصال التحويل ومعلومات العملية ليتمكن مزود الخدمة من التحقق." 
              : "Please transfer the amount externally, then upload the transfer receipt and details for the provider to verify."}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {isRtl ? "المبلغ المحول" : "Transferred Amount"}
              </label>
              <input
                type="number"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:border-brand-500 focus:outline-none dark:text-white"
                placeholder={isRtl ? "مثال: 450" : "e.g. 450"}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {isRtl ? "الرقم المرجعي للتحويل" : "Transfer Reference"}
              </label>
              <input
                type="text"
                required
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:border-brand-500 focus:outline-none dark:text-white"
                placeholder={isRtl ? "رقم العملية من البنك" : "Bank transaction ID"}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {isRtl ? "تاريخ ووقت التحويل" : "Transfer Date/Time"}
              </label>
              <input
                type="datetime-local"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:border-brand-500 focus:outline-none dark:text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {isRtl ? "ملف الإيصال" : "Receipt File"}
              </label>
              <input
                type="file"
                required
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-1.5 text-sm file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 dark:file:bg-gray-800 dark:file:text-gray-300 cursor-pointer dark:text-gray-400"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2.5 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors font-medium text-sm"
            >
              {isRtl ? "إرسال الإثبات" : "Submit Proof"}
            </button>
          </div>
        </form>
      )}

      {currentStatus !== "AWAITING_UPLOAD" && (
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-6">
            {isRtl ? "معلومات إثبات الدفع المقدم" : "Submitted Proof Information"}
          </h4>
          
          {currentStatus === "REJECTED" && (
            <div className="mb-6 p-4 rounded-lg bg-error-50 dark:bg-error-500/10 border border-error-200 dark:border-error-500/20 text-error-700 dark:text-error-400">
              <p className="text-sm font-semibold mb-1">{isRtl ? "سبب الرفض:" : "Rejection Reason:"}</p>
              <p className="text-sm">{paymentProof?.rejectionReason || (isRtl ? "لم يتم توضيح السبب" : "Reason not provided")}</p>
            </div>
          )}

          {currentStatus === "DISPUTED" && (
            <div className="mb-6 p-4 rounded-lg bg-warning-50 dark:bg-warning-500/10 border border-warning-200 dark:border-warning-500/20 text-warning-700 dark:text-warning-400">
              <p className="text-sm font-semibold mb-1">{isRtl ? "حالة نزاع" : "Disputed State"}</p>
              <p className="text-sm">{isRtl ? "يوجد نزاع مالي مرتبط بهذا الطلب." : "There is a financial dispute associated with this request."}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">{isRtl ? "المبلغ المحول" : "Transferred Amount"}</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {isSimulatedSubmit ? amount : paymentProof?.transferredAmount} {isRtl ? "ر.س" : "SAR"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">{isRtl ? "الرقم المرجعي" : "Transfer Reference"}</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {isSimulatedSubmit ? reference : paymentProof?.transferReference}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">{isRtl ? "تاريخ التحويل" : "Transfer Date"}</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {isSimulatedSubmit 
                  ? new Date(date).toLocaleString(isRtl ? 'ar-SA' : 'en-US') 
                  : paymentProof?.transferDateTime ? new Date(paymentProof.transferDateTime).toLocaleString(isRtl ? 'ar-SA' : 'en-US') : '-'}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">{isRtl ? "ملف الإيصال" : "Receipt File"}</span>
              <span className="text-sm font-medium text-brand-600 dark:text-brand-400 underline decoration-brand-300 dark:decoration-brand-700 underline-offset-2">
                {isSimulatedSubmit ? file?.name : paymentProof?.receiptFile}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
