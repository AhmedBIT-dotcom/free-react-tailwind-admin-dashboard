import { CalenderIcon } from "../../icons";

interface Appointment {
  id: string;
  timeAr: string;
  timeEn: string;
  serviceAr: string;
  serviceEn: string;
  locationAr: string;
  locationEn: string;
  avatar: string;
  status: "upcoming" | "completed" | "cancelled";
}

interface ProviderAppointmentsProps {
  isRtl: boolean;
}

export default function ProviderAppointments({ isRtl }: ProviderAppointmentsProps) {
  const appointments: Appointment[] = [
    {
      id: "APT-01",
      timeAr: "10:00 ص",
      timeEn: "10:00 AM",
      serviceAr: "تركيب مكيف سبليت",
      serviceEn: "Split AC Installation",
      locationAr: "حي النخيل، الرياض",
      locationEn: "Al-Nakheel, Riyadh",
      avatar: "/images/user/user-15.jpg",
      status: "upcoming",
    },
    {
      id: "APT-02",
      timeAr: "01:00 م",
      timeEn: "01:00 PM",
      serviceAr: "صيانة كهرباء منزل",
      serviceEn: "Home Electrical Maintenance",
      locationAr: "حي العقيق، الرياض",
      locationEn: "Al-Aqeeq, Riyadh",
      avatar: "/images/user/user-16.jpg",
      status: "upcoming",
    },
    {
      id: "APT-03",
      timeAr: "04:00 م",
      timeEn: "04:00 PM",
      serviceAr: "إصلاح تسربات المياه",
      serviceEn: "Water Leak Repair",
      locationAr: "حي الياسمين، الرياض",
      locationEn: "Al-Yasmeen, Riyadh",
      avatar: "/images/user/user-17.jpg",
      status: "upcoming",
    }
  ];

  const getStatusColor = (status: Appointment["status"]) => {
    switch (status) {
      case "upcoming":
        return "bg-brand-500 shadow-[0_0_0_4px_rgba(122,90,248,0.15)] dark:shadow-[0_0_0_4px_rgba(122,90,248,0.15)]";
      case "completed":
        return "bg-success-500 shadow-[0_0_0_4px_rgba(34,197,94,0.15)] dark:shadow-[0_0_0_4px_rgba(34,197,94,0.15)]";
      case "cancelled":
        return "bg-error-500 shadow-[0_0_0_4px_rgba(239,68,68,0.15)] dark:shadow-[0_0_0_4px_rgba(239,68,68,0.15)]";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-800 dark:text-white/90 text-lg flex items-center gap-2">
          <CalenderIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          {isRtl ? "مواعيد اليوم" : "Today's Appointments"}
        </h3>
      </div>
      
      <div className="flex flex-col gap-5">
        {appointments.map((apt) => (
          <div key={apt.id} className="flex items-center gap-4 group">
            <div className="w-16 flex-shrink-0 text-right">
              <span className="text-sm font-bold text-gray-800 dark:text-white/90 block">
                {isRtl ? apt.timeAr : apt.timeEn}
              </span>
            </div>
            
            <div className="flex-grow flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50 group-hover:bg-white group-hover:border-brand-100 group-hover:shadow-sm transition-all dark:border-gray-800 dark:bg-gray-900/30 dark:group-hover:bg-gray-800/50 dark:group-hover:border-brand-900/30">
              <div>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90 mb-0.5">
                  {isRtl ? apt.serviceAr : apt.serviceEn}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {isRtl ? apt.locationAr : apt.locationEn}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-sm">
                  <img src={apt.avatar} alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(apt.status)}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-auto pt-6 text-center">
        <button className="text-sm text-brand-500 dark:text-brand-400 hover:underline flex items-center justify-center gap-1 w-full">
          {isRtl ? "عرض كل المواعيد" : "View All Appointments"}
          <svg className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
