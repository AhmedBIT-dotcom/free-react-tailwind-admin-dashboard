import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import { EyeIcon, ChatIcon, HorizontaLDots } from "../../icons";

interface ServiceRequest {
  id: string;
  customer: { name: string; phone: string; avatar: string };
  provider: { name: string; type: string; avatar: string };
  service: string;
  amount: string;
  date: string;
  time: string;
  status: "new" | "pending" | "accepted" | "in_progress" | "completed" | "cancelled" | "disputed";
}

const mockData: ServiceRequest[] = [
  {
    id: "#SR-2024-0001",
    customer: { name: "أحمد محمد", phone: "771234567", avatar: "/images/user/user-17.jpg" },
    provider: { name: "مؤسسة الإنشاء للمقاولات", type: "شركة", avatar: "/images/user/user-01.jpg" },
    service: "تركيب كهرباء منزلية",
    amount: "$120",
    date: "2024/06/01",
    time: "10:30 ص",
    status: "in_progress",
  },
  {
    id: "#SR-2024-0002",
    customer: { name: "سارة علي", phone: "772345678", avatar: "/images/user/user-18.jpg" },
    provider: { name: "محمد السقاف", type: "فرد", avatar: "/images/user/user-02.jpg" },
    service: "صيانة تكييف",
    amount: "$85",
    date: "2024/06/01",
    time: "09:15 ص",
    status: "pending",
  },
  {
    id: "#SR-2024-0003",
    customer: { name: "يوسف أحمد", phone: "773456789", avatar: "/images/user/user-19.jpg" },
    provider: { name: "ورشة النخبة", type: "ورشة", avatar: "/images/user/user-03.jpg" },
    service: "تبديل زيوت وفلتر",
    amount: "$200",
    date: "2024/05/31",
    time: "04:45 م",
    status: "accepted",
  },
  {
    id: "#SR-2024-0004",
    customer: { name: "فاطمة علي", phone: "774567890", avatar: "/images/user/user-20.jpg" },
    provider: { name: "مركز المهارة", type: "مركز", avatar: "/images/user/user-04.jpg" },
    service: "تنظيف خزانات",
    amount: "$150",
    date: "2024/05/31",
    time: "02:20 م",
    status: "completed",
  },
  {
    id: "#SR-2024-0005",
    customer: { name: "عبدالله حسن", phone: "775678901", avatar: "/images/user/user-21.jpg" },
    provider: { name: "أبو البراء للسباكة", type: "فرد", avatar: "/images/user/user-05.jpg" },
    service: "إصلاح تسريبات",
    amount: "$60",
    date: "2024/05/30",
    time: "11:10 ص",
    status: "cancelled",
  },
];

const getStatusBadge = (status: ServiceRequest["status"]) => {
  switch (status) {
    case "new":
      return <Badge color="info">جديدة</Badge>;
    case "pending":
      return <Badge color="warning">قيد الانتظار</Badge>;
    case "accepted":
      return <Badge color="info">مقبولة</Badge>; // using info color for accepted
    case "in_progress":
      return <Badge color="success">قيد التنفيذ</Badge>; // using success for in progress as in reference image (greenish)
    case "completed":
      return <Badge color="success">مكتملة</Badge>;
    case "cancelled":
      return <Badge color="error">ملغاة</Badge>;
    case "disputed":
      return <Badge color="error">متنازع عليها</Badge>;
    default:
      return <Badge color="light">غير معروف</Badge>;
  }
};

export default function ServiceRequestsTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-gray-800">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                رقم الطلب
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                العميل
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                الخدمة
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                مقدم الخدمة
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                المبلغ
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                تاريخ الطلب
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                الحالة
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">
                الإجراءات
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {mockData.map((request) => (
              <TableRow key={request.id}>
                {/* ID */}
                <TableCell className="px-5 py-4 text-brand-500 font-medium text-theme-sm dark:text-brand-400 text-start ltr">
                  {request.id}
                </TableCell>
                
                {/* Customer */}
                <TableCell className="px-5 py-4 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-100 dark:border-gray-800">
                      <img width={40} height={40} src={request.customer.avatar} alt={request.customer.name} className="object-cover" />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {request.customer.name}
                      </span>
                      <span className="block text-gray-500 text-xs dark:text-gray-400">
                        {request.customer.phone}
                      </span>
                    </div>
                  </div>
                </TableCell>

                {/* Service */}
                <TableCell className="px-5 py-4 text-gray-800 font-medium text-theme-sm dark:text-white/90 text-start">
                  {request.service}
                </TableCell>

                {/* Provider */}
                <TableCell className="px-5 py-4 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-100 dark:border-gray-800">
                      <img width={40} height={40} src={request.provider.avatar} alt={request.provider.name} className="object-cover" />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {request.provider.name}
                      </span>
                      <span className="block text-gray-500 text-xs dark:text-gray-400">
                        {request.provider.type}
                      </span>
                    </div>
                  </div>
                </TableCell>

                {/* Amount */}
                <TableCell className="px-5 py-4 text-gray-800 font-medium text-theme-sm dark:text-white/90 text-start">
                  {request.amount}
                </TableCell>

                {/* Date */}
                <TableCell className="px-5 py-4 text-start">
                  <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90 text-start" dir="ltr">
                    {request.date}
                  </span>
                  <span className="block text-gray-500 text-xs dark:text-gray-400 text-start">
                    {request.time}
                  </span>
                </TableCell>

                {/* Status */}
                <TableCell className="px-5 py-4 text-start">
                  {getStatusBadge(request.status)}
                </TableCell>

                {/* Actions */}
                <TableCell className="px-5 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 p-1.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors" title="محادثة">
                      <ChatIcon className="size-4" />
                    </button>
                    <button className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 p-1.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors" title="عرض التفاصيل">
                      <EyeIcon className="size-4" />
                    </button>
                    <button className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 p-1.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors" title="المزيد">
                      <HorizontaLDots className="size-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 dark:border-gray-800 px-5 py-4 gap-4">
        <div className="flex items-center gap-2">
          <select className="h-9 px-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            <option>عرض 10</option>
            <option>عرض 20</option>
            <option>عرض 50</option>
          </select>
        </div>
        
        <div className="flex items-center gap-1.5">
          <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white font-medium text-sm">
            1
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium text-sm dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
            2
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium text-sm dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
            3
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium text-sm dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
            ...
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium text-sm dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
            54
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          عرض 1 إلى 10 من 534 طلب
        </div>
      </div>
    </div>
  );
}
