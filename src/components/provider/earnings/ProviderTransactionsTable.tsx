import ProviderTransactionStatusBadge, { TransactionStatus } from "./ProviderTransactionStatusBadge";

interface ProviderTransactionsTableProps {
  isRtl: boolean;
}

interface TransactionItem {
  id: string;
  requestId: string;
  customerNameAr: string;
  customerNameEn: string;
  customerPhone: string;
  avatar: string;
  serviceNameAr: string;
  serviceNameEn: string;
  dateAr: string;
  dateEn: string;
  amountAr: string;
  amountEn: string;
  commissionAr: string;
  commissionEn: string;
  netEarningsAr: string;
  netEarningsEn: string;
  status: TransactionStatus;
}

const mockTransactions: TransactionItem[] = [
  {
    id: "TXN-1001",
    requestId: "REQ-1001",
    customerNameAr: "أحمد محمد",
    customerNameEn: "Ahmed Mohammed",
    customerPhone: "0555 123 456",
    avatar: "/images/user/user-15.jpg",
    serviceNameAr: "صيانة مكيفات",
    serviceNameEn: "AC Maintenance",
    dateAr: "30 مايو 2025\n10:30 ص",
    dateEn: "May 30, 2025\n10:30 AM",
    amountAr: "500 ر.س",
    amountEn: "500 SAR",
    commissionAr: "50 ر.س",
    commissionEn: "50 SAR",
    netEarningsAr: "450 ر.س",
    netEarningsEn: "450 SAR",
    status: "completed",
  },
  {
    id: "TXN-1002",
    requestId: "REQ-1002",
    customerNameAr: "سارة عبدالله",
    customerNameEn: "Sara Abdullah",
    customerPhone: "0555 456 789",
    avatar: "/images/user/user-17.jpg",
    serviceNameAr: "تنظيف منازل",
    serviceNameEn: "Home Cleaning",
    dateAr: "29 مايو 2025\n04:15 م",
    dateEn: "May 29, 2025\n04:15 PM",
    amountAr: "350 ر.س",
    amountEn: "350 SAR",
    commissionAr: "35 ر.س",
    commissionEn: "35 SAR",
    netEarningsAr: "315 ر.س",
    netEarningsEn: "315 SAR",
    status: "pending",
  },
  {
    id: "TXN-1003",
    requestId: "REQ-1003",
    customerNameAr: "محمد علي",
    customerNameEn: "Mohammed Ali",
    customerPhone: "0555 987 654",
    avatar: "/images/user/user-16.jpg",
    serviceNameAr: "إصلاح كهرباء",
    serviceNameEn: "Electrical Repair",
    dateAr: "28 مايو 2025\n11:20 ص",
    dateEn: "May 28, 2025\n11:20 AM",
    amountAr: "300 ر.س",
    amountEn: "300 SAR",
    commissionAr: "30 ر.س",
    commissionEn: "30 SAR",
    netEarningsAr: "270 ر.س",
    netEarningsEn: "270 SAR",
    status: "processing",
  },
  {
    id: "TXN-1004",
    requestId: "REQ-1004",
    customerNameAr: "خالد حسن",
    customerNameEn: "Khalid Hassan",
    customerPhone: "0555 321 987",
    avatar: "/images/user/user-18.jpg",
    serviceNameAr: "Plumbing Repair",
    serviceNameEn: "Plumbing Repair",
    dateAr: "27 مايو 2025\n03:40 م",
    dateEn: "May 27, 2025\n03:40 PM",
    amountAr: "750 ر.س",
    amountEn: "750 SAR",
    commissionAr: "75 ر.س",
    commissionEn: "75 SAR",
    netEarningsAr: "675 ر.س",
    netEarningsEn: "675 SAR",
    status: "completed",
  },
  {
    id: "TXN-1005",
    requestId: "REQ-1005",
    customerNameAr: "فاطمة أحمد",
    customerNameEn: "Fatima Ahmed",
    customerPhone: "0555 789 123",
    avatar: "/images/user/user-19.jpg",
    serviceNameAr: "تركيب ستائر",
    serviceNameEn: "Curtain Installation",
    dateAr: "26 مايو 2025\n09:00 ص",
    dateEn: "May 26, 2025\n09:00 AM",
    amountAr: "200 ر.س",
    amountEn: "200 SAR",
    commissionAr: "0 ر.س",
    commissionEn: "0 SAR",
    netEarningsAr: "0 ر.س",
    netEarningsEn: "0 SAR",
    status: "cancelled",
  }
];

export default function ProviderTransactionsTable({ isRtl }: ProviderTransactionsTableProps) {
  const renderTableHead = () => (
    <thead className="bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <tr>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "رقم المعاملة" : "Transaction ID"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "الطلب" : "Request"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "العميل" : "Customer"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "الخدمة" : "Service"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "التاريخ" : "Date"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "المبلغ" : "Amount"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "العمولة" : "Commission"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "صافي الأرباح" : "Net Earnings"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-start">
          {isRtl ? "الحالة" : "Status"}
        </th>
        <th className="px-5 py-3 font-medium text-gray-500 dark:text-gray-400 text-sm text-center">
          {isRtl ? "الإجراءات" : "Actions"}
        </th>
      </tr>
    </thead>
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[1100px] w-full text-start">
          {renderTableHead()}
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {mockTransactions.map((txn) => (
              <tr key={txn.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-5 py-4">
                  <span className="text-sm font-medium text-gray-800 dark:text-white/90">{txn.id}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-500 cursor-pointer">{txn.requestId}</span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
                      <img src={txn.avatar} alt="User" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90 mb-0.5">
                        {isRtl ? txn.customerNameAr : txn.customerNameEn}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400" dir="ltr">
                        {txn.customerPhone}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {isRtl ? txn.serviceNameAr : txn.serviceNameEn}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="whitespace-pre-line leading-relaxed" dir={isRtl ? "rtl" : "ltr"}>
                    {isRtl ? txn.dateAr : txn.dateEn}
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-800 dark:text-white/90 font-medium">
                  {isRtl ? txn.amountAr : txn.amountEn}
                </td>
                <td className="px-5 py-4 text-sm text-error-600 dark:text-error-400 font-medium">
                  {isRtl ? txn.commissionAr : txn.commissionEn}
                </td>
                <td className="px-5 py-4 text-sm text-success-600 dark:text-success-400 font-medium">
                  {isRtl ? txn.netEarningsAr : txn.netEarningsEn}
                </td>
                <td className="px-5 py-4">
                  <ProviderTransactionStatusBadge status={txn.status} isRtl={isRtl} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-center gap-2 relative">
                    <button className="text-gray-500 hover:text-brand-500 transition-colors p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor"/>
                        <path d="M12 6.5C12.8284 6.5 13.5 5.82843 13.5 5C13.5 4.17157 12.8284 3.5 12 3.5C11.1716 3.5 10.5 4.17157 10.5 5C10.5 5.82843 11.1716 6.5 12 6.5Z" fill="currentColor"/>
                        <path d="M12 20.5C12.8284 20.5 13.5 19.8284 13.5 19C13.5 18.1716 12.8284 17.5 12 17.5C11.1716 17.5 10.5 18.1716 10.5 19C10.5 19.8284 11.1716 20.5 12 20.5Z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (Mock) */}
      <div className="border-t border-gray-100 p-5 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {isRtl ? "عرض 1 إلى 5 من 15 معاملة" : "Showing 1 to 5 of 15 transactions"}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border border-gray-200 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900 p-1">
            <span className="text-sm text-gray-500 px-2">{isRtl ? "عرض" : "Show"}</span>
            <select className="bg-transparent text-sm text-gray-700 dark:text-gray-300 outline-none pr-1">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="flex border border-gray-200 rounded-lg dark:border-gray-700 overflow-hidden">
            <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400 border-e border-gray-200 dark:border-gray-700">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
              </svg>
            </button>
            <button className="px-3 py-1.5 text-sm font-medium bg-brand-500 text-white border-e border-gray-200 dark:border-gray-700">1</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">2</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 border-e border-gray-200 dark:border-gray-700">3</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
