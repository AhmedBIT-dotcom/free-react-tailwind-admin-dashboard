import { BoxCubeIcon, DocsIcon, GridIcon, PencilIcon } from "../../icons";

export default function MostRequestedServices() {
  const services = [
    {
      name: "التصميم الجرافيكي",
      requests: "856 طلب",
      percentage: "28%",
      color: "bg-brand-500",
      icon: <PencilIcon className="size-5 text-gray-700 dark:text-gray-300" />
    },
    {
      name: "تطوير المواقع",
      requests: "718 طلب",
      percentage: "23%",
      color: "bg-blue-500",
      icon: <BoxCubeIcon className="size-5 text-gray-700 dark:text-gray-300" />
    },
    {
      name: "الكتابة والترجمة",
      requests: "623 طلب",
      percentage: "19%",
      color: "bg-success-500",
      icon: <DocsIcon className="size-5 text-gray-700 dark:text-gray-300" />
    },
    {
      name: "التسويق الرقمي",
      requests: "512 طلب",
      percentage: "16%",
      color: "bg-warning-500",
      icon: <GridIcon className="size-5 text-gray-700 dark:text-gray-300" />
    },
    {
      name: "خدمات الأعمال",
      requests: "386 طلب",
      percentage: "14%",
      color: "bg-error-500",
      icon: <DocsIcon className="size-5 text-gray-700 dark:text-gray-300" />
    }
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          أعلى الخدمات طلباً
        </h3>
        <select className="h-8 pl-2 pr-6 py-1 rounded-md border border-gray-200 bg-white text-xs font-medium text-gray-700 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 cursor-pointer appearance-none">
          <option>هذا الشهر</option>
        </select>
      </div>

      <div className="flex flex-col gap-5">
        {services.map((service, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3 w-1/3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800">
                {service.icon}
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                  {service.name}
                </h5>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {service.requests}
                </span>
              </div>
            </div>
            
            <div className="flex-1 px-4 hidden sm:block">
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full ${service.color}`} 
                  style={{ width: service.percentage }}
                ></div>
              </div>
            </div>

            <div className="text-sm font-bold text-gray-800 dark:text-white/90">
              {service.percentage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
