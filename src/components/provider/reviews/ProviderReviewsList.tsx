import { useState } from "react";
import ProviderReviewRating from "./ProviderReviewRating";

interface ReviewItem {
  id: string;
  customerNameAr: string;
  customerNameEn: string;
  avatar: string;
  rating: number;
  dateAr: string;
  dateEn: string;
  serviceNameAr: string;
  serviceNameEn: string;
  reviewTextAr: string;
  reviewTextEn: string;
  providerReplyAr?: string;
  providerReplyEn?: string;
}

const mockReviews: ReviewItem[] = [
  {
    id: "REV-001",
    customerNameAr: "محمد أحمد",
    customerNameEn: "Mohammed Ahmed",
    avatar: "/images/user/user-15.jpg",
    rating: 5,
    dateAr: "28 أغسطس 2026",
    dateEn: "Aug 28, 2026",
    serviceNameAr: "سباكة",
    serviceNameEn: "Plumbing",
    reviewTextAr: "خدمة ممتازة جدًا، وصل الفني في الموعد وأنجز العمل بسرعة واحترافية.",
    reviewTextEn: "Excellent service. The provider arrived on time and completed the work quickly and professionally.",
    providerReplyAr: "شكرًا لك محمد على تقييمك الجميل. سعدنا بخدمتك ونتمنى التعامل معك مرة أخرى.",
    providerReplyEn: "Thank you Mohammed for your kind review. We were happy to serve you and look forward to serving you again."
  },
  {
    id: "REV-002",
    customerNameAr: "سارة عبدالله",
    customerNameEn: "Sara Abdullah",
    avatar: "/images/user/user-17.jpg",
    rating: 4,
    dateAr: "26 أغسطس 2026",
    dateEn: "Aug 26, 2026",
    serviceNameAr: "كهرباء",
    serviceNameEn: "Electrical",
    reviewTextAr: "عمل رائع وأسعار مناسبة، أنصح بالتعامل معهم.",
    reviewTextEn: "Great work and reasonable prices. Highly recommended.",
    providerReplyAr: "شكرًا لك سارة على ثقتك بنا. نتمنى لك كل التوفيق.",
    providerReplyEn: "Thank you Sara for trusting us. Best wishes."
  },
  {
    id: "REV-003",
    customerNameAr: "عبدالله علي",
    customerNameEn: "Abdullah Ali",
    avatar: "/images/user/user-16.jpg",
    rating: 3,
    dateAr: "24 أغسطس 2026",
    dateEn: "Aug 24, 2026",
    serviceNameAr: "تكييف",
    serviceNameEn: "Air Conditioning",
    reviewTextAr: "الخدمة جيدة لكن تأخروا في الوصول قليلًا.",
    reviewTextEn: "Service was good but they arrived a bit late.",
  },
  {
    id: "REV-004",
    customerNameAr: "خالد حسن",
    customerNameEn: "Khalid Hassan",
    avatar: "/images/user/user-18.jpg",
    rating: 5,
    dateAr: "22 أغسطس 2026",
    dateEn: "Aug 22, 2026",
    serviceNameAr: "دهانات",
    serviceNameEn: "Painting",
    reviewTextAr: "شغل نظيف واحترافي، وتعامل راقي جداً.",
    reviewTextEn: "Clean and professional work, very polite.",
    providerReplyAr: "شكرًا لك خالد. نسعد بخدمتك دائماً.",
    providerReplyEn: "Thank you Khalid. Always happy to serve you."
  },
  {
    id: "REV-005",
    customerNameAr: "فاطمة سالم",
    customerNameEn: "Fatima Salem",
    avatar: "/images/user/user-19.jpg",
    rating: 4,
    dateAr: "20 أغسطس 2026",
    dateEn: "Aug 20, 2026",
    serviceNameAr: "نجارة",
    serviceNameEn: "Carpentry",
    reviewTextAr: "جودة العمل ممتازة. السعر مناسب، وسأتعامل معهم مجدداً.",
    reviewTextEn: "Excellent quality. Reasonable price, will hire again.",
  }
];

interface ProviderReviewsListProps {
  isRtl: boolean;
}

export default function ProviderReviewsList({ isRtl }: ProviderReviewsListProps) {
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
      
      <div className="p-5 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">
          {isRtl ? "قائمة التقييمات" : "Reviews List"}
        </h3>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        {mockReviews.map((review) => {
          const hasReply = !!(isRtl ? review.providerReplyAr : review.providerReplyEn);
          const isReplying = replyingTo === review.id;

          return (
            <div key={review.id} className="p-5 hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
              <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Left side: Reviewer Info & Review */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 shrink-0">
                      <img src={review.avatar} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
                        <h4 className="font-bold text-gray-800 dark:text-white/90 text-sm sm:text-base">
                          {isRtl ? review.customerNameAr : review.customerNameEn}
                        </h4>
                        <div className="flex items-center gap-2">
                          <ProviderReviewRating rating={review.rating} />
                          <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                            {isRtl ? review.serviceNameAr : review.serviceNameEn}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {isRtl ? review.dateAr : review.dateEn}
                      </div>
                    </div>
                    
                    {/* Status Badge (Desktop) */}
                    <div className="hidden sm:block shrink-0">
                      {hasReply ? (
                        <span className="inline-flex rounded-full bg-success-50 px-2.5 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
                          {isRtl ? "تم الرد" : "Replied"}
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-warning-50 px-2.5 py-1 text-xs font-medium text-warning-700 dark:bg-warning-500/10 dark:text-warning-400">
                          {isRtl ? "لم يتم الرد" : "Not Replied"}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                    {isRtl ? review.reviewTextAr : review.reviewTextEn}
                  </p>
                  
                  {/* Status Badge (Mobile only) */}
                  <div className="mt-3 sm:hidden">
                    {hasReply ? (
                      <span className="inline-flex rounded-full bg-success-50 px-2.5 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
                        {isRtl ? "تم الرد" : "Replied"}
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-warning-50 px-2.5 py-1 text-xs font-medium text-warning-700 dark:bg-warning-500/10 dark:text-warning-400">
                        {isRtl ? "لم يتم الرد" : "Not Replied"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right side: Provider Reply or Action */}
                <div className="lg:w-1/3 shrink-0">
                  {hasReply ? (
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700/50 relative">
                      {/* Triangle pointer */}
                      <div className={`absolute top-4 w-3 h-3 bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700 transform rotate-45 border-t border-s ${isRtl ? '-right-1.5' : '-left-1.5'} hidden lg:block`}></div>
                      <h5 className="text-xs font-bold text-brand-600 dark:text-brand-400 mb-1">
                        {isRtl ? "ردك:" : "Your reply:"}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {isRtl ? review.providerReplyAr : review.providerReplyEn}
                      </p>
                    </div>
                  ) : isReplying ? (
                    <div className="bg-white dark:bg-gray-900 rounded-xl border border-brand-200 dark:border-brand-900 p-4">
                      <textarea
                        className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-brand-500 dark:text-white/90 resize-none mb-3"
                        rows={3}
                        placeholder={isRtl ? "اكتب ردك على هذا التقييم..." : "Write your reply to this review..."}
                      ></textarea>
                      <div className="flex gap-2 justify-end">
                        <button 
                          onClick={() => setReplyingTo(null)}
                          className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          {isRtl ? "إلغاء" : "Cancel"}
                        </button>
                        <button 
                          onClick={() => setReplyingTo(null)}
                          className="px-3 py-1.5 text-xs font-medium bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
                        >
                          {isRtl ? "إرسال الرد" : "Send Reply"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex lg:justify-end items-start h-full pt-2">
                      <button 
                        onClick={() => setReplyingTo(review.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-brand-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-brand-400 transition-colors w-full sm:w-auto justify-center"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 14L4 9M4 9L9 4M4 9H15C17.7614 9 20 11.2386 20 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {isRtl ? "الرد" : "Reply"}
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination (Mock) */}
      <div className="border-t border-gray-100 p-5 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {isRtl ? "عرض 1 - 5 من أصل 248 تقييم" : "Showing 1 - 5 of 248 reviews"}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border border-gray-200 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900 p-1">
            <span className="text-sm text-gray-500 px-2">{isRtl ? "لكل صفحة" : "Per page"}</span>
            <select className="bg-transparent text-sm text-gray-700 dark:text-gray-300 outline-none pr-1">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="flex border border-gray-200 rounded-lg dark:border-gray-700 overflow-hidden">
            <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400 border-e border-gray-200 dark:border-gray-700">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
              </svg>
            </button>
            <button className="px-3 py-1.5 text-sm font-medium bg-brand-500 text-white border-e border-gray-200 dark:border-gray-700">1</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">2</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">3</button>
            <span className="px-2 py-1.5 text-sm text-gray-500 dark:text-gray-400 border-e border-gray-200 dark:border-gray-700">...</span>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">50</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
