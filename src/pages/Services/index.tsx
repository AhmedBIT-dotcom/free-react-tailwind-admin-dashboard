import { useState, useMemo, useEffect } from "react";
import PageMeta from "../../components/common/PageMeta";
import ServicesKpiCards from "../../components/services/ServicesKpiCards";
import ServicesFilters from "../../components/services/ServicesFilters";
import ServicesTable, { Service } from "../../components/services/ServicesTable";
import { PlusIcon } from "../../icons";

const initialServices: Service[] = [
  {
    id: "SRV-001",
    nameAr: "تركيب وصيانة الكهرباء المنزلية",
    nameEn: "Home Electrical Installation & Repair",
    providerNameAr: "مؤسسة النور للكهرباء",
    providerNameEn: "Al-Noor Electricals",
    categoryAr: "كهرباء",
    categoryEn: "Electrical",
    categoryValue: "Electrical",
    price: 75000,
    status: "active",
    rating: 4.8,
    requests: 124,
    createdAt: "2024-05-20"
  },
  {
    id: "SRV-002",
    nameAr: "إصلاح تسربات المياه",
    nameEn: "Water Leak Repair",
    providerNameAr: "البيت المتميز للسباكة",
    providerNameEn: "Elite Home Plumbing",
    categoryAr: "سباكة",
    categoryEn: "Plumbing",
    categoryValue: "Plumbing",
    price: 45000,
    status: "pending",
    rating: 4.6,
    requests: 89,
    createdAt: "2024-05-18"
  },
  {
    id: "SRV-003",
    nameAr: "صيانة وتركيب المكيفات",
    nameEn: "Air Conditioner Installation & Maintenance",
    providerNameAr: "نسيم بارد للتكييف",
    providerNameEn: "Cool Breeze HVAC",
    categoryAr: "تكييف وتبريد",
    categoryEn: "HVAC",
    categoryValue: "HVAC",
    price: 120000,
    status: "active",
    rating: 4.9,
    requests: 156,
    createdAt: "2024-05-15"
  },
  {
    id: "SRV-004",
    nameAr: "دهان المنازل",
    nameEn: "Home Painting",
    providerNameAr: "لمسات الإبداع للدهانات",
    providerNameEn: "Creative Touches Painting",
    categoryAr: "دهانات",
    categoryEn: "Painting",
    categoryValue: "Painting",
    price: 75000,
    status: "suspended",
    rating: 4.2,
    requests: 67,
    createdAt: "2024-05-12"
  },
  {
    id: "SRV-005",
    nameAr: "تنظيف المنازل",
    nameEn: "Home Cleaning",
    providerNameAr: "البيت النظيف للخدمات",
    providerNameEn: "Clean Home Services",
    categoryAr: "تنظيف",
    categoryEn: "Cleaning",
    categoryValue: "Cleaning",
    price: 35000,
    status: "active",
    rating: 4.7,
    requests: 203,
    createdAt: "2024-05-10"
  },
  {
    id: "SRV-006",
    nameAr: "تفصيل وتركيب أبواب خشبية",
    nameEn: "Custom Wooden Doors",
    providerNameAr: "نجارة الأمانة",
    providerNameEn: "Al-Amanah Carpentry",
    categoryAr: "نجارة",
    categoryEn: "Carpentry",
    categoryValue: "Carpentry",
    price: 150000,
    status: "active",
    rating: 4.5,
    requests: 42,
    createdAt: "2024-05-08"
  },
  {
    id: "SRV-007",
    nameAr: "إصلاح الثلاجات والغسالات",
    nameEn: "Fridge & Washing Machine Repair",
    providerNameAr: "مركز الصيانة السريع",
    providerNameEn: "Fast Repair Center",
    categoryAr: "كهرباء",
    categoryEn: "Electrical",
    categoryValue: "Electrical",
    price: 25000,
    status: "rejected",
    rating: 3.8,
    requests: 15,
    createdAt: "2024-05-05"
  },
  {
    id: "SRV-008",
    nameAr: "تسليك مجاري وصرف صحي",
    nameEn: "Sewage Unblocking",
    providerNameAr: "خدمات الطوارئ للسباكة",
    providerNameEn: "Emergency Plumbing Services",
    categoryAr: "سباكة",
    categoryEn: "Plumbing",
    categoryValue: "Plumbing",
    price: 55000,
    status: "active",
    rating: 4.3,
    requests: 110,
    createdAt: "2024-05-02"
  },
  {
    id: "SRV-009",
    nameAr: "تأسيس كهرباء مباني",
    nameEn: "Building Electrical Wiring",
    providerNameAr: "مؤسسة النور للكهرباء",
    providerNameEn: "Al-Noor Electricals",
    categoryAr: "كهرباء",
    categoryEn: "Electrical",
    categoryValue: "Electrical",
    price: 500000,
    status: "active",
    rating: 4.9,
    requests: 24,
    createdAt: "2024-04-28"
  },
  {
    id: "SRV-010",
    nameAr: "تعبئة فريون مكيفات",
    nameEn: "AC Freon Refill",
    providerNameAr: "نسيم بارد للتكييف",
    providerNameEn: "Cool Breeze HVAC",
    categoryAr: "تكييف وتبريد",
    categoryEn: "HVAC",
    categoryValue: "HVAC",
    price: 30000,
    status: "active",
    rating: 4.6,
    requests: 312,
    createdAt: "2024-04-25"
  },
  {
    id: "SRV-011",
    nameAr: "طلاء واجهات خارجية",
    nameEn: "Exterior Facade Painting",
    providerNameAr: "لمسات الإبداع للدهانات",
    providerNameEn: "Creative Touches Painting",
    categoryAr: "دهانات",
    categoryEn: "Painting",
    categoryValue: "Painting",
    price: 250000,
    status: "pending",
    rating: 0,
    requests: 0,
    createdAt: "2024-05-21"
  }
];

export default function ServicesPage() {
  const [isRtl, setIsRtl] = useState(document.documentElement.dir === "rtl");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsRtl(document.documentElement.dir === "rtl");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, []);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    provider: "",
    status: "",
    minPrice: "",
    maxPrice: "",
    startDate: "",
    endDate: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Use 5 for demo to show pagination working with 11 items

  const handleResetFilters = () => {
    setFilters({
      search: "",
      category: "",
      provider: "",
      status: "",
      minPrice: "",
      maxPrice: "",
      startDate: "",
      endDate: "",
    });
    setCurrentPage(1);
  };

  const filteredServices = useMemo(() => {
    return initialServices.filter((service) => {
      const searchMatch =
        filters.search === "" ||
        service.nameAr.toLowerCase().includes(filters.search.toLowerCase()) ||
        service.nameEn.toLowerCase().includes(filters.search.toLowerCase());

      const categoryMatch = filters.category === "" || service.categoryValue === filters.category;
      
      const statusMatch = filters.status === "" || service.status === filters.status;
      
      const providerMatch = filters.provider === "" || 
        service.providerNameAr.toLowerCase().includes(filters.provider.toLowerCase()) ||
        service.providerNameEn.toLowerCase().includes(filters.provider.toLowerCase());

      const minPriceMatch = filters.minPrice === "" || service.price >= parseFloat(filters.minPrice);
      const maxPriceMatch = filters.maxPrice === "" || service.price <= parseFloat(filters.maxPrice);

      const startDateMatch = filters.startDate === "" || new Date(service.createdAt) >= new Date(filters.startDate);
      const endDateMatch = filters.endDate === "" || new Date(service.createdAt) <= new Date(filters.endDate);

      return searchMatch && categoryMatch && statusMatch && providerMatch && minPriceMatch && maxPriceMatch && startDateMatch && endDateMatch;
    });
  }, [filters]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  
  const currentServices = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredServices.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredServices, currentPage]);

  return (
    <>
      <PageMeta
        title={isRtl ? "الخدمات | صنّعة" : "Services | San'ah"}
        description={isRtl ? "إدارة جميع الخدمات المقدمة عبر منصة صنّعة" : "Manage all services available on the San'ah platform"}
      />
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            {isRtl ? "الخدمات" : "Services"}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {isRtl ? "إدارة جميع الخدمات المقدمة عبر منصة صنّعة" : "Manage all services available on the San'ah platform"}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <nav>
            <ol className="flex items-center gap-1.5 text-sm">
              <li>
                <a href="/" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400">
                  {isRtl ? "لوحة التحكم" : "Dashboard"}
                </a>
              </li>
              <li className="text-gray-500 dark:text-gray-400">/</li>
              <li className="text-brand-500 font-medium dark:text-brand-400">
                {isRtl ? "الخدمات" : "Services"}
              </li>
            </ol>
          </nav>
          
          <button className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors">
            <PlusIcon className="w-5 h-5" />
            {isRtl ? "إضافة خدمة" : "Add Service"}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <ServicesKpiCards isRtl={isRtl} />

        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-semibold text-gray-800 dark:text-white/90 text-lg">
              {isRtl ? "جميع الخدمات" : "All Services"}
            </h3>
          </div>
          <div className="p-4 sm:p-5 space-y-5">
            <ServicesFilters 
              isRtl={isRtl} 
              filters={filters} 
              setFilters={setFilters} 
              onReset={handleResetFilters} 
            />
            <ServicesTable 
              services={currentServices} 
              isRtl={isRtl} 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
