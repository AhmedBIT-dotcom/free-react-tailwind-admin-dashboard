import { useState } from "react";

interface Service {
  id: string;
  nameAr: string;
  nameEn: string;
  image: string;
  isActive: boolean;
}

interface ProviderServicesProps {
  isRtl: boolean;
}

export default function ProviderServices({ isRtl }: ProviderServicesProps) {
  const [services, setServices] = useState<Service[]>([
    {
      id: "SRV-01",
      nameAr: "تركيب المكيفات",
      nameEn: "AC Installation",
      image: "https://images.unsplash.com/photo-1527689638836-411945a2b57c?w=150&h=100&fit=crop",
      isActive: true,
    },
    {
      id: "SRV-02",
      nameAr: "الأعمال الكهربائية",
      nameEn: "Electrical Work",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=150&h=100&fit=crop",
      isActive: true,
    },
    {
      id: "SRV-03",
      nameAr: "السباكة والتمديدات",
      nameEn: "Plumbing",
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=150&h=100&fit=crop",
      isActive: true,
    },
    {
      id: "SRV-04",
      nameAr: "أعمال الدهان",
      nameEn: "Painting Work",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=150&h=100&fit=crop",
      isActive: false,
    }
  ]);

  const toggleServiceStatus = (id: string) => {
    setServices(services.map(s => 
      s.id === id ? { ...s, isActive: !s.isActive } : s
    ));
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-800 dark:text-white/90 text-lg">
          {isRtl ? "خدماتي" : "My Services"}
        </h3>
        <button className="text-sm font-medium text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5">
          {isRtl ? "عرض الكل" : "View All"}
        </button>
      </div>
      
      <div className="flex flex-col gap-4">
        {services.map((service) => (
          <div key={service.id} className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={service.isActive}
                  onChange={() => toggleServiceStatus(service.id)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-500"></div>
              </label>
              
              <div className="flex flex-col items-start gap-1 w-32">
                <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90 leading-tight">
                  {isRtl ? service.nameAr : service.nameEn}
                </h4>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                  service.isActive 
                    ? 'bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-400' 
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                }`}>
                  <span className={`inline-block w-1 h-1 rounded-full mr-1 rtl:mr-0 rtl:ml-1 ${service.isActive ? 'bg-success-500' : 'bg-gray-400'}`}></span>
                  {service.isActive ? (isRtl ? "نشطة" : "Active") : (isRtl ? "غير نشطة" : "Inactive")}
                </span>
              </div>
            </div>
            
            <div className="w-16 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={service.image} alt={service.nameEn} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
