

interface ProviderReviewRatingProps {
  rating: number;
  showNumber?: boolean;
}

export default function ProviderReviewRating({ rating, showNumber = false }: ProviderReviewRatingProps) {
  const roundedRating = Math.round(rating);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center text-warning-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= roundedRating
                ? "text-warning-500 fill-warning-500"
                : "text-gray-300 fill-gray-300 dark:text-gray-600 dark:fill-gray-600"
            }`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        ))}
      </div>
      {showNumber && (
        <span className="text-sm font-semibold text-gray-800 dark:text-white/90">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
