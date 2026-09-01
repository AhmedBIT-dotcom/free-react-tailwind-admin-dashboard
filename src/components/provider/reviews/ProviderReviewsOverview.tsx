import ProviderReviewRating from "./ProviderReviewRating";

interface ProviderReviewsOverviewProps {
  isRtl: boolean;
}

export default function ProviderReviewsOverview({ isRtl }: ProviderReviewsOverviewProps) {
  const distribution = [
    { stars: 5, percentage: 82, count: 203 },
    { stars: 4, percentage: 11, count: 27 },
    { stars: 3, percentage: 4, count: 10 },
    { stars: 2, percentage: 2, count: 5 },
    { stars: 1, percentage: 1, count: 3 },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white/90 mb-6">
        {isRtl ? "نظرة عامة على التقييمات" : "Reviews Overview"}
      </h3>
      
      <div className="flex flex-col items-center mb-8">
        <h4 className="text-5xl font-bold text-brand-500 mb-2">4.8</h4>
        <div className="mb-2">
          <ProviderReviewRating rating={4.8} />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {isRtl ? "بناءً على 248 تقييم" : "Based on 248 reviews"}
        </p>
      </div>

      <div className="space-y-3">
        {distribution.map((item) => (
          <div key={item.stars} className="flex items-center gap-3">
            <div className="flex items-center gap-1 w-16 shrink-0">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-3">{item.stars}</span>
              <svg className="w-4 h-4 text-warning-500 fill-warning-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            
            <div className="flex-1 h-2 bg-gray-100 rounded-full dark:bg-gray-800 overflow-hidden flex">
              <div
                className="h-full bg-brand-500 rounded-full"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            
            <div className="w-12 text-sm text-gray-500 dark:text-gray-400 font-medium text-end shrink-0">
              {item.percentage}%
            </div>
            <div className="w-8 text-xs text-gray-400 dark:text-gray-500 text-end shrink-0">
              {item.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
