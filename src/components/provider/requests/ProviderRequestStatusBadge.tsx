

export type RequestStatus = 
  | "new" 
  | "pending" 
  | "accepted" 
  | "progress" 
  | "completed" 
  | "cancelled" 
  | "disputed";

interface ProviderRequestStatusBadgeProps {
  status: RequestStatus;
  isRtl: boolean;
}

export default function ProviderRequestStatusBadge({ status, isRtl }: ProviderRequestStatusBadgeProps) {
  switch (status) {
    case "new":
      return (
        <span className="inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
          {isRtl ? "جديد" : "New"}
        </span>
      );
    case "pending":
      return (
        <span className="inline-flex rounded-full bg-warning-50 px-2.5 py-1 text-xs font-medium text-warning-600 dark:bg-warning-500/10 dark:text-warning-400">
          {isRtl ? "قيد الانتظار" : "Pending"}
        </span>
      );
    case "accepted":
      return (
        <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          {isRtl ? "مقبول" : "Accepted"}
        </span>
      );
    case "progress":
      return (
        <span className="inline-flex rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
          {isRtl ? "قيد التنفيذ" : "In Progress"}
        </span>
      );
    case "completed":
      return (
        <span className="inline-flex rounded-full bg-success-50 px-2.5 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
          {isRtl ? "مكتمل" : "Completed"}
        </span>
      );
    case "cancelled":
      return (
        <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
          {isRtl ? "ملغي" : "Cancelled"}
        </span>
      );
    case "disputed":
      return (
        <span className="inline-flex rounded-full bg-error-50 px-2.5 py-1 text-xs font-medium text-error-600 dark:bg-error-500/10 dark:text-error-400">
          {isRtl ? "متنازع عليه" : "Disputed"}
        </span>
      );
    default:
      return null;
  }
}
