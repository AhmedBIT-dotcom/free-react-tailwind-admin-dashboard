interface Request {
  id: string;
  serviceAr: string;
  serviceEn: string;
  customerAr: string;
  customerEn: string;
  timeAr: string;
  timeEn: string;
  status: "new" | "pending" | "progress" | "completed" | "cancelled";
  avatar: string;
}

interface ProviderRecentRequestsProps {
  isRtl: boolean;
}

export default function ProviderRecentRequests({ isRtl }: ProviderRecentRequestsProps) {
  const requests: Request[] = [
    {
      id: "REQ-01",
      serviceAr: "تركيب مكيف سبليت",
      serviceEn: "Split AC Installation",
      customerAr: "سارة محمد",
      customerEn: "Sara Mohammed",
      timeAr: "منذ 30 دقيقة",
      timeEn: "30 mins ago",
      status: "progress",
      avatar: "/images/user/user-15.jpg"
    },
    {
      id: "REQ-02",
      serviceAr: "صيانة كهرباء منزل",
      serviceEn: "Home Electrical Maintenance",
      customerAr: "خالد العتيبي",
      customerEn: "Khalid Al-Otaibi",
      timeAr: "منذ 2 ساعة",
      timeEn: "2 hours ago",
      status: "progress",
      avatar: "/images/user/user-16.jpg"
    },
    {
      id: "REQ-03",
      serviceAr: "إصلاح تسربات المياه",
      serviceEn: "Water Leak Repair",
      customerAr: "مريم علي",
      customerEn: "Maryam Ali",
      timeAr: "منذ 5 ساعات",
      timeEn: "5 hours ago",
      status: "pending",
      avatar: "/images/user/user-17.jpg"
    },
    {
      id: "REQ-04",
      serviceAr: "تركيب إنارة داخلية",
      serviceEn: "Indoor Lighting Installation",
      customerAr: "فهد السبيعي",
      customerEn: "Fahad Al-Subaie",
      timeAr: "منذ يوم",
      timeEn: "1 day ago",
      status: "completed",
      avatar: "/images/user/user-18.jpg"
    },
    {
      id: "REQ-05",
      serviceAr: "صيانة سخان المياه",
      serviceEn: "Water Heater Maintenance",
      customerAr: "أحمد المالكي",
      customerEn: "Ahmed Al-Malki",
      timeAr: "منذ يومين",
      timeEn: "2 days ago",
      status: "cancelled",
      avatar: "/images/user/user-19.jpg"
    }
  ];

  const getStatusBadge = (status: Request["status"]) => {
    switch (status) {
      case "new":
        return <span className="inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">{isRtl ? "جديد" : "New"}</span>;
      case "pending":
        return <span className="inline-flex rounded-full bg-warning-50 px-2.5 py-1 text-xs font-medium text-warning-600 dark:bg-warning-500/10 dark:text-warning-400">{isRtl ? "بانتظار الموافقة" : "Pending Approval"}</span>;
      case "progress":
        return <span className="inline-flex rounded-full bg-success-50 px-2.5 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">{isRtl ? "قيد التنفيذ" : "In Progress"}</span>;
      case "completed":
        return <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">{isRtl ? "مكتمل" : "Completed"}</span>;
      case "cancelled":
        return <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">{isRtl ? "ملغي" : "Cancelled"}</span>;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-800 dark:text-white/90 text-lg">
          {isRtl ? "الطلبات الأخيرة" : "Recent Requests"}
        </h3>
        <button className="text-sm font-medium text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5">
          {isRtl ? "عرض الكل" : "View All"}
        </button>
      </div>
      
      <div className="flex flex-col gap-4">
        {requests.map((req) => (
          <div key={req.id} className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
                <img src={req.avatar} alt={req.customerEn} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90 mb-0.5">
                  {isRtl ? req.serviceAr : req.serviceEn}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {isRtl ? req.customerAr : req.customerEn}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-1.5">
              {getStatusBadge(req.status)}
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {isRtl ? req.timeAr : req.timeEn}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
