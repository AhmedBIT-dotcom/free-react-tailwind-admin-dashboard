import CountryMap from "../ecommerce/CountryMap";

export default function ProviderDistribution() {
  const locations = [
    { name: "صنعاء", providers: "450 مقدم خدمة", percentage: "45%" },
    { name: "عدن", providers: "289 مقدم خدمة", percentage: "23%" },
    { name: "تعز", providers: "200 مقدم خدمة", percentage: "13%" },
    { name: "المكلا", providers: "200 مقدم خدمة", percentage: "12%" },
    { name: "أخرى", providers: "286 مقدم خدمة", percentage: "14%" },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          توزيع مقدمي الخدمات حسب المدينة
        </h3>
      </div>
      
      <div className="px-4 py-6 my-6 overflow-hidden border border-gray-100 rounded-2xl dark:border-gray-800 sm:px-6 flex justify-center items-center opacity-60">
        <div className="h-[200px] w-full flex items-center justify-center">
          {/* Reusing CountryMap as a visual placeholder for map since TailAdmin has it */}
          <CountryMap />
        </div>
      </div>

      <div className="space-y-4">
        {locations.map((loc, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3 w-24">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                {loc.name}
              </p>
            </div>
            
            <div className="flex-1 text-center">
              <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                {loc.providers}
              </span>
            </div>

            <div className="w-12 text-left">
              <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90" dir="ltr">
                {loc.percentage}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center pt-2">
        <button className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400">
          عرض جميع المدن
        </button>
      </div>
    </div>
  );
}
