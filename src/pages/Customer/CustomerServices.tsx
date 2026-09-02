import { useState, useEffect } from "react";
import CustomerServiceCategories from "../../components/customer/services/CustomerServiceCategories";
import CustomerServiceBrowseCard from "../../components/customer/services/CustomerServiceBrowseCard";
import { mockBrowseCategories, mockBrowseServices } from "../../components/customer/services/mockData";

export default function CustomerServices() {
  const [isRtl, setIsRtl] = useState(document.documentElement.dir === "rtl");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsRtl(document.documentElement.dir === "rtl");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, []);

  const filteredServices = mockBrowseServices.filter((service) => {
    if (selectedCategory === "all") return true;
    // Map simple category IDs back to string matches
    const catMap: Record<string, string> = {
      plumbing: "Plumbing",
      electrical: "Electrical",
      carpentry: "Carpentry",
      cleaning: "Cleaning",
      ac: "AC",
    };
    return service.categoryEn === catMap[selectedCategory];
  });

  return (
    <div className="w-full">
      {/* Header section matching mockup */}
      <div className="bg-gray-900 rounded-2xl p-8 mb-8 relative overflow-hidden shadow-theme-sm border border-transparent dark:border-gray-800">
        <div className="relative z-10 flex items-center justify-between">
          <div className="max-w-2xl text-right">
            <h1 className="text-3xl font-bold text-white mb-3">
              {isRtl ? "الخدمات" : "Services"}
            </h1>
            <p className="text-gray-300">
              {isRtl
                ? "استكشف مجموعة متنوعة من الخدمات المقدمة من أفضل مقدمي الخدمات في منطقتك."
                : "Explore a variety of services offered by the best service providers in your area."}
            </p>
          </div>
          <div className="hidden md:flex w-20 h-20 bg-brand-500/20 text-brand-400 rounded-2xl items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 13H12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 17H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {isRtl ? "التصنيفات" : "Categories"}
        </h2>
      </div>

      <CustomerServiceCategories
        isRtl={isRtl}
        categories={mockBrowseCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-theme-xs">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isRtl ? "فلترة" : "Filter"}
          </button>
          <div className="relative">
            <select className="appearance-none bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg py-2 px-4 pr-8 text-sm font-medium outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:text-white cursor-pointer shadow-theme-xs text-gray-700">
              <option value="rating">{isRtl ? "ترتيب: الأعلى تقييماً" : "Sort: Highest Rated"}</option>
              <option value="price_asc">{isRtl ? "ترتيب: الأقل سعراً" : "Sort: Lowest Price"}</option>
              <option value="price_desc">{isRtl ? "ترتيب: الأعلى سعراً" : "Sort: Highest Price"}</option>
            </select>
          </div>

          <div className="hidden sm:flex items-center gap-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-1 rounded-lg ml-auto shadow-theme-xs">
            <button className="p-1.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 17H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 w-full sm:w-auto justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
            <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3.62 8.49C5.59 -0.17 18.42 -0.16 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {isRtl ? "جميع المناطق" : "All Locations"}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredServices.map((service) => (
          <CustomerServiceBrowseCard key={service.id} service={service} isRtl={isRtl} />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-theme-sm min-h-[300px] mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {isRtl ? "لا توجد خدمات" : "No services found"}
          </h3>
          <p className="text-gray-500">
            {isRtl ? "لا توجد خدمات متاحة في هذا التصنيف حالياً" : "There are no services available in this category right now."}
          </p>
        </div>
      )}

      {/* Pagination */}
      {filteredServices.length > 0 && (
        <div className="flex items-center justify-center gap-2 mb-10">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-theme-xs">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRtl ? "rotate-180" : ""}>
              <path d="M15 19.9201L8.48 13.4001C7.71 12.6301 7.71 11.3701 8.48 10.6001L15 4.08008" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-500 text-white font-medium shadow-theme-xs">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-theme-xs">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-theme-xs">
            3
          </button>
          <span className="text-gray-500 px-2">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-theme-xs">
            8
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-theme-xs">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRtl ? "rotate-180" : ""}>
              <path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

    </div>
  );
}
