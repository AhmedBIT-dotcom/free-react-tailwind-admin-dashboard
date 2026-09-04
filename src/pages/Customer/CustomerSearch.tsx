import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CustomerSearchBar from "../../components/customer/search/CustomerSearchBar";
import CustomerSearchFilters from "../../components/customer/search/CustomerSearchFilters";
import CustomerSearchResults from "../../components/customer/search/CustomerSearchResults";
import CustomerSearchEmptyState from "../../components/customer/search/CustomerSearchEmptyState";
import { mockServices } from "../../components/customer/search/mockData";

export default function CustomerSearch() {
  const { isRtl } = useLanguage();

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [priceRange, setPriceRange] = useState(1500);
  const [minRating, setMinRating] = useState(0);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLocation("all");
    setPriceRange(1500);
    setMinRating(0);
  };

  // Simple client-side filtering for demonstration
  const filteredResults = mockServices.filter((service) => {
    // Category match
    const categoryMatch = selectedCategory === "all" || service.categoryEn.toLowerCase() === selectedCategory.toLowerCase();
    
    // Location match (mock string match for now)
    const locationMatch = selectedLocation === "all" || 
      (service.serviceAreaEn.toLowerCase() === selectedLocation.toLowerCase() || service.serviceAreaAr === selectedLocation);
    
    // Price match
    const priceMatch = service.dailyPrice <= priceRange;
    
    // Rating match
    const ratingMatch = service.rating >= minRating;
    
    // Text search match
    const searchMatch = searchQuery.trim() === "" || 
      service.titleAr.includes(searchQuery) || 
      service.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.providerNameAr.includes(searchQuery) ||
      service.providerNameEn.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && locationMatch && priceMatch && ratingMatch && searchMatch;
  });

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {isRtl ? "البحث عن خدمة" : "Search Services"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {isRtl ? "اكتشف أفضل الخدمات والمزودين الموثوقين." : "Discover the best services and trusted providers."}
        </p>
      </div>

      <CustomerSearchBar 
        isRtl={isRtl} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <CustomerSearchFilters
          isRtl={isRtl}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minRating={minRating}
          setMinRating={setMinRating}
        />

        <div className="w-full lg:flex-1">
          {filteredResults.length > 0 ? (
            <CustomerSearchResults isRtl={isRtl} results={filteredResults} />
          ) : (
            <CustomerSearchEmptyState isRtl={isRtl} onClearFilters={handleClearFilters} />
          )}
        </div>
      </div>
    </div>
  );
}
