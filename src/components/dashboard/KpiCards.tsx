import {
  ArrowUpIcon,
  GroupIcon,
  UserCircleIcon,
  BoxIconLine,
  TimeIcon,
  CheckCircleIcon,
  DollarLineIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 md:gap-6">
      
      {/* Metric 1 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-brand-500 size-6 dark:text-brand-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">إجمالي العملاء</span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              3,782
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge>
        </div>
      </div>

      {/* Metric 2 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <UserCircleIcon className="text-blue-500 size-6 dark:text-blue-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">مقدمو الخدمات</span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              1,254
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            8.23%
          </Badge>
        </div>
      </div>

      {/* Metric 3 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-success-500 size-6 dark:text-success-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">طلبات الخدمة</span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              5,359
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            9.05%
          </Badge>
        </div>
      </div>

      {/* Metric 4 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <TimeIcon className="text-warning-500 size-6 dark:text-warning-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">قيد التنفيذ</span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              1,145
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            6.37%
          </Badge>
        </div>
      </div>

      {/* Metric 5 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <CheckCircleIcon className="text-error-500 size-6 dark:text-error-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">المكتملة</span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              3,892
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            13.44%
          </Badge>
        </div>
      </div>

      {/* Metric 6 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <DollarLineIcon className="text-info-500 size-6 dark:text-info-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">إجمالي الإيرادات</span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              $32,875
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            18.23%
          </Badge>
        </div>
      </div>

    </div>
  );
}
