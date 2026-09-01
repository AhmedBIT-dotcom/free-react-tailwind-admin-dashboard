import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import { EyeIcon, PencilIcon, HorizontaLDots } from "../../icons"; 

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "customer" | "provider" | "admin";
  status: "active" | "pending";
  date: string;
  time: string;
  avatar: string;
}

const mockData: UserData[] = [
  {
    id: "#USR-1001",
    name: "أحمد محمد المنصور",
    email: "ahmed@example.com",
    phone: "+967 770 123 456",
    role: "customer",
    status: "active",
    date: "2024-05-25",
    time: "10:30 ص",
    avatar: "/images/user/user-17.jpg",
  },
  {
    id: "#USR-1002",
    name: "فاطمة علي الحكيمي",
    email: "fatima@example.com",
    phone: "+967 771 987 654",
    role: "provider",
    status: "active",
    date: "2024-05-24",
    time: "09:15 ص",
    avatar: "/images/user/user-18.jpg",
  },
  {
    id: "#USR-1003",
    name: "محمد عبدالله باوزير",
    email: "mohammed@example.com",
    phone: "+967 773 555 789",
    role: "customer",
    status: "pending",
    date: "2024-05-23",
    time: "08:45 ص",
    avatar: "/images/user/user-19.jpg",
  },
  {
    id: "#USR-1004",
    name: "سلمى مختار ثابت",
    email: "salma@example.com",
    phone: "+967 774 222 333",
    role: "provider",
    status: "active",
    date: "2024-05-22",
    time: "07:20 ص",
    avatar: "/images/user/user-20.jpg",
  },
  {
    id: "#USR-1005",
    name: "عبدالله ناصر السعيدي",
    email: "admin@example.com",
    phone: "+967 775 111 222",
    role: "admin",
    status: "active",
    date: "2024-05-21",
    time: "06:30 ص",
    avatar: "/images/user/user-21.jpg",
  },
];

const getRoleBadge = (role: UserData["role"]) => {
  switch (role) {
    case "customer":
      return <Badge color="success">عميل</Badge>;
    case "provider":
      return <Badge color="info">مقدم خدمة</Badge>;
    case "admin":
      return <div className="inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-sm font-medium bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">مدير</div>;
    default:
      return <Badge color="light">غير معروف</Badge>;
  }
};

const getStatusBadge = (status: UserData["status"]) => {
  switch (status) {
    case "active":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-sm font-medium bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-400">
          <span className="w-1.5 h-1.5 rounded-full bg-success-500"></span>
          نشط
        </span>
      );
    case "pending":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-sm font-medium bg-warning-50 text-warning-600 dark:bg-warning-500/10 dark:text-warning-400">
          <span className="w-1.5 h-1.5 rounded-full bg-warning-500"></span>
          معلق
        </span>
      );
    default:
      return null;
  }
};

export default function UsersTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-gray-800">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                المستخدم
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                البريد الإلكتروني
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                رقم الهاتف
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">
                الدور
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">
                الحالة
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                تاريخ التسجيل
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">
                الإجراءات
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {mockData.map((user) => (
              <TableRow key={user.id}>
                
                {/* User */}
                <TableCell className="px-5 py-4 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-100 dark:border-gray-800 shrink-0">
                      <img width={40} height={40} src={user.avatar} alt={user.name} className="object-cover" />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {user.name}
                      </span>
                      <span className="block text-gray-500 text-xs dark:text-gray-400" dir="ltr">
                        {user.id}
                      </span>
                    </div>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell className="px-5 py-4 text-gray-800 font-medium text-theme-sm dark:text-gray-300 text-start">
                  {user.email}
                </TableCell>

                {/* Phone */}
                <TableCell className="px-5 py-4 text-gray-800 font-medium text-theme-sm dark:text-gray-300 text-start">
                  <span className="text-start block" dir="ltr">{user.phone}</span>
                </TableCell>

                {/* Role */}
                <TableCell className="px-5 py-4 text-center">
                  {getRoleBadge(user.role)}
                </TableCell>

                {/* Status */}
                <TableCell className="px-5 py-4 text-center">
                  {getStatusBadge(user.status)}
                </TableCell>

                {/* Date */}
                <TableCell className="px-5 py-4 text-start">
                  <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90 text-start" dir="ltr">
                    {user.date}
                  </span>
                  <span className="block text-gray-500 text-xs dark:text-gray-400 text-start">
                    {user.time}
                  </span>
                </TableCell>

                {/* Actions */}
                <TableCell className="px-5 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 p-1.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors" title="المزيد">
                      <HorizontaLDots className="size-4" />
                    </button>
                    <button className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 p-1.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors" title="عرض التفاصيل">
                      <EyeIcon className="size-4" />
                    </button>
                    <button className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 p-1.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors" title="تعديل">
                      <PencilIcon className="size-4" />
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
            412
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          عرض 1 إلى 10 من 4,116 مستخدم
        </div>
      </div>
    </div>
  );
}
