import React from "react";
import CustomerServiceCard from "./CustomerServiceCard";
import { ServiceListing } from "./mockData";
import { useCustomerFavorites, FavoriteItem } from "../favorites/mockData";

interface CustomerSearchResultsProps {
  isRtl: boolean;
  results: ServiceListing[];
}

const CustomerSearchResults: React.FC<CustomerSearchResultsProps> = ({ isRtl, results }) => {
  const { toggleFavorite, isFavorited } = useCustomerFavorites();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {results.length} {isRtl ? "خدمات متاحة" : "Services Available"}
        </h2>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {isRtl ? "ترتيب حسب:" : "Sort by:"}
          </label>
          <select className="appearance-none bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg py-2 px-4 pr-8 text-sm font-medium outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:text-white cursor-pointer shadow-theme-xs">
            <option value="recommended">{isRtl ? "الموصى بها" : "Recommended"}</option>
            <option value="price_asc">{isRtl ? "السعر: الأقل للأعلى" : "Price: Low to High"}</option>
            <option value="price_desc">{isRtl ? "السعر: الأعلى للأقل" : "Price: High to Low"}</option>
            <option value="rating">{isRtl ? "الأعلى تقييماً" : "Highest Rated"}</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {results.map((service) => {
          const identity = `search:${service.id}`;
          const isFav = isFavorited(identity);

          const handleToggle = () => {
            const item: FavoriteItem = {
              identity,
              source: 'search',
              originalId: service.id,
              titleAr: service.titleAr,
              titleEn: service.titleEn,
              providerNameAr: service.providerNameAr,
              providerNameEn: service.providerNameEn,
              categoryAr: service.categoryAr,
              categoryEn: service.categoryEn,
              dailyPrice: service.dailyPrice,
              rating: service.rating,
              reviewCount: service.reviewCount,
              serviceAreaAr: service.serviceAreaAr,
              serviceAreaEn: service.serviceAreaEn,
              image: service.image,
              descriptionAr: service.descriptionAr,
              descriptionEn: service.descriptionEn,
            };
            toggleFavorite(item);
          };

          return (
            <CustomerServiceCard
              key={service.id}
              service={service}
              isRtl={isRtl}
              isFavorited={isFav}
              onToggleFavorite={handleToggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomerSearchResults;
