import { useLanguage } from "../../context/LanguageContext";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { useCustomerFavorites } from "../../components/customer/favorites/mockData";
import CustomerServiceBrowseCard from "../../components/customer/services/CustomerServiceBrowseCard";
import { BrowseServiceListing } from "../../components/customer/services/mockData";
import { Link } from "react-router";

export default function CustomerFavorites() {
  const { isRtl } = useLanguage();
  const { favorites, removeFavorite } = useCustomerFavorites();

  return (
    <div className="w-full">
      <PageBreadcrumb pageTitle={isRtl ? "المفضلة" : "Favorites"} />

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-theme-sm mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {isRtl ? "خدماتك المفضلة" : "Your Favorite Services"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            {isRtl 
              ? "الخدمات التي قمت بحفظها للرجوع إليها لاحقاً" 
              : "Services you've saved for later reference"}
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((fav) => {
              // Map FavoriteItem back to BrowseServiceListing for rendering
              const mappedService: BrowseServiceListing = {
                id: fav.originalId,
                titleAr: fav.titleAr,
                titleEn: fav.titleEn,
                providerNameAr: fav.providerNameAr,
                providerNameEn: fav.providerNameEn,
                isProviderVerified: fav.isProviderVerified || false,
                categoryAr: fav.categoryAr,
                categoryEn: fav.categoryEn,
                dailyPrice: fav.dailyPrice,
                rating: fav.rating,
                reviewCount: fav.reviewCount,
                serviceAreaAr: fav.serviceAreaAr,
                serviceAreaEn: fav.serviceAreaEn,
                image: fav.image,
                providerAvatar: fav.providerAvatar || "/images/user/user-01.jpg",
              };

              return (
                <CustomerServiceBrowseCard 
                  key={fav.identity}
                  service={mappedService}
                  isRtl={isRtl}
                  isFavorited={true}
                  onToggleFavorite={() => removeFavorite(fav.identity)}
                />
              );
            })}
          </div>
        ) : (
          <div className="w-full border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 text-gray-400">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {isRtl ? "لا توجد مفضلة بعد" : "No favorites yet"}
            </h3>
            <p className="text-gray-500 mb-6 max-w-sm mx-auto">
              {isRtl 
                ? "قم بتصفح الخدمات المتاحة واضغط على أيقونة القلب لحفظ الخدمات التي تعجبك هنا." 
                : "Browse available services and click the heart icon to save the ones you like here."}
            </p>
            <Link 
              to="/customer/services"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors shadow-theme-xs"
            >
              {isRtl ? "تصفح الخدمات" : "Browse Services"}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
