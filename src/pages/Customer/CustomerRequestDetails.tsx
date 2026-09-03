import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { mockCustomerRequests, getStatusDetails, RequestStatus } from "../../components/customer/requests/mockData";
import CustomerPaymentSection from "../../components/customer/payment/CustomerPaymentSection";
import { mockPaymentProofs } from "../../components/customer/payment/mockPaymentData";
import { mockMessages } from "../../components/customer/messages/mockMessages";
import CustomerDisputeSection from "../../components/customer/disputes/CustomerDisputeSection";

const STATUS_ORDER: RequestStatus[] = [
  "PENDING",
  "ACCEPTED",
  "READY_TO_START",
  "IN_PROGRESS",
  "PROVIDER_COMPLETED",
  "CUSTOMER_CONFIRMED",
  "CLOSED",
];

export default function CustomerRequestDetails() {
  const { id } = useParams<{ id: string }>();
  const [isRtl, setIsRtl] = useState(document.documentElement.dir === "rtl");
  const messageCount = id ? mockMessages.filter((m) => m.requestId === id).length : 0;

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsRtl(document.documentElement.dir === "rtl");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, []);

  const request = mockCustomerRequests.find((req) => req.id === id);

  if (!request) {
    return (
      <div className="w-full">
        <div className="mb-6">
          <Link
            to="/customer/requests"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-theme-xs"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRtl ? "rotate-180" : ""}>
              <path d="M15 19.9201L8.48 13.4001C7.71 12.6301 7.71 11.3701 8.48 10.6001L15 4.08008" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isRtl ? "العودة إلى طلباتي" : "Back to My Requests"}
          </Link>
        </div>
        <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-theme-sm min-h-[400px]">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {isRtl ? "الطلب غير موجود" : "Request Not Found"}
          </h3>
          <p className="text-gray-500 mb-6">
            {isRtl ? "تعذر العثور على الطلب المطلوب. قد يكون محذوفاً أو غير صحيح." : "The requested service request could not be found."}
          </p>
          <Link
            to="/customer/requests"
            className="px-5 py-2.5 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors font-medium text-sm"
          >
            {isRtl ? "عرض كل الطلبات" : "View All Requests"}
          </Link>
        </div>
      </div>
    );
  }

  const statusDetails = getStatusDetails(request.status, isRtl);
  const paymentProof = mockPaymentProofs.find((proof) => proof.requestId === id);
  const formattedDate = new Date(request.requestDate).toLocaleDateString(isRtl ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const currentStatusIndex = STATUS_ORDER.indexOf(request.status);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <Link
          to="/customer/requests"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-theme-xs"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRtl ? "rotate-180" : ""}>
            <path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.5 12H3.67004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {isRtl ? "العودة إلى طلباتي" : "Back to My Requests"}
        </Link>
        
        <div className="flex flex-col text-right">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isRtl ? "تفاصيل الطلب" : "Request Details"}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
            <span>{isRtl ? "الرئيسية / طلباتي / تفاصيل الطلب" : "Home / Requests / Request Details"}</span>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        
        {/* Main Column - Request Info & Timeline */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          
          {/* Timeline Card */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-theme-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-8">
              {isRtl ? "مراحل الطلب" : "Request Stages"}
            </h3>
            <div className="relative w-full pt-2 pb-4 px-2 overflow-x-auto no-scrollbar">
              <div className="flex items-center justify-between min-w-[700px] relative">
                {/* Background line */}
                <div className="absolute top-5 left-4 right-4 h-0.5 bg-gray-200 dark:bg-gray-800 -z-10"></div>
                {/* Active line */}
                <div 
                  className="absolute top-5 h-0.5 bg-brand-500 transition-all duration-500 -z-10"
                  style={{ 
                    width: currentStatusIndex >= 0 ? `${(currentStatusIndex / (STATUS_ORDER.length - 1)) * 100}%` : '0%',
                    left: isRtl ? 'auto' : '1rem',
                    right: isRtl ? '1rem' : 'auto',
                  }}
                ></div>
                
                {STATUS_ORDER.map((statusKey, index) => {
                  const isCompleted = index < currentStatusIndex;
                  const isActive = index === currentStatusIndex;
                  const isFuture = index > currentStatusIndex;
                  const details = getStatusDetails(statusKey, isRtl);

                  return (
                    <div key={statusKey} className="flex flex-col items-center gap-3 relative z-0 w-24">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 bg-white dark:bg-gray-900
                        ${isCompleted ? 'border-brand-500 text-brand-500' : ''}
                        ${isActive ? 'border-brand-500 bg-brand-50 text-brand-600 dark:bg-brand-500/20' : ''}
                        ${isFuture ? 'border-gray-300 text-gray-400 dark:border-gray-700' : ''}
                      `}>
                        {isCompleted ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : isActive ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                        )}
                      </div>
                      <span className={`text-xs font-medium text-center ${isActive ? 'text-brand-600 dark:text-brand-400' : isCompleted ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
                        {details.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Request Information Card */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-theme-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.75 9H8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.75 15H8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {isRtl ? "تفاصيل الطلب" : "Request Information"}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "رقم الطلب" : "Request No."}</span>
                <span className="font-semibold text-lg text-gray-900 dark:text-white">{request.id}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "تاريخ الطلب" : "Request Date"}</span>
                <span className="font-semibold text-gray-900 dark:text-white">{formattedDate}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "المدة المتفق عليها" : "Agreed Duration"}</span>
                <span className="font-semibold text-gray-900 dark:text-white">{isRtl ? request.durationAr : request.durationEn}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "السعر الإجمالي" : "Total Amount"}</span>
                <span className="font-semibold text-gray-900 dark:text-white">{request.totalAmount} <span className="text-sm font-normal text-gray-500">{isRtl ? "ر.س" : "SAR"}</span></span>
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">{isRtl ? "الحالة الحالية" : "Current Status"}</span>
                <span className={`inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium ${statusDetails.colorClass}`}>
                  {statusDetails.label}
                </span>
              </div>
            </div>
          </div>

          {/* Payment & Proof Section */}
          <CustomerPaymentSection request={request} paymentProof={paymentProof} isRtl={isRtl} />

          {/* Dispute Section */}
          <CustomerDisputeSection requestId={request.id} />

          {/* Messages Section */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-theme-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center text-brand-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {isRtl ? "الرسائل" : "Messages"}
                </h3>
                {messageCount > 0 && (
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {messageCount} {isRtl ? "رسالة" : "messages"}
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              {isRtl
                ? "تواصل مع مقدم الخدمة لمناقشة تفاصيل الطلب أو طرح الاستفسارات."
                : "Communicate with the service provider to discuss request details or ask questions."}
            </p>

            <Link
              to={`/customer/messages?requestId=${id}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors font-medium text-sm"
            >
              {isRtl ? "فتح الرسائل" : "Open Messages"}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRtl ? "rotate-180" : ""}>
                <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>

        {/* Sidebar Column - Service & Provider Info */}
        <div className="xl:col-span-1 flex flex-col gap-6">
          
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-theme-sm h-full">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C18 22 22 18 22 12C22 6 18 2 12 2C6 2 2 6 2 12C2 18 6 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {isRtl ? "معلومات الخدمة" : "Service Information"}
              </h3>
            </div>
            
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? "اسم الخدمة" : "Service Name"}</span>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {isRtl ? request.serviceNameAr : request.serviceNameEn}
                </span>
              </div>

              <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mt-2">
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-4">{isRtl ? "مقدم الخدمة" : "Provider"}</span>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-800 bg-gray-50 shrink-0">
                    <img src={request.providerAvatar} alt="Provider Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-1">
                      {isRtl ? request.providerNameAr : request.providerNameEn}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-500">
                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                      </svg>
                    </h4>
                    <span className="text-xs text-gray-500">{isRtl ? "مقدم خدمة معتمد" : "Verified Provider"}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
