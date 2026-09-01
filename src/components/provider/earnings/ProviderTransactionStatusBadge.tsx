export type TransactionStatus = "completed" | "pending" | "processing" | "cancelled";

interface ProviderTransactionStatusBadgeProps {
  status: TransactionStatus;
  isRtl: boolean;
}

export default function ProviderTransactionStatusBadge({
  status,
  isRtl,
}: ProviderTransactionStatusBadgeProps) {
  switch (status) {
    case "completed":
      return (
        <span className="inline-flex rounded-full bg-success-50 px-2.5 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
          {isRtl ? "مكتمل" : "Completed"}
        </span>
      );
    case "pending":
      return (
        <span className="inline-flex rounded-full bg-warning-50 px-2.5 py-1 text-xs font-medium text-warning-700 dark:bg-warning-500/10 dark:text-warning-400">
          {isRtl ? "قيد التحويل" : "Pending Transfer"}
        </span>
      );
    case "processing":
      return (
        <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          {isRtl ? "قيد المعالجة" : "Processing"}
        </span>
      );
    case "cancelled":
      return (
        <span className="inline-flex rounded-full bg-error-50 px-2.5 py-1 text-xs font-medium text-error-600 dark:bg-error-500/10 dark:text-error-400">
          {isRtl ? "ملغى" : "Cancelled"}
        </span>
      );
    default:
      return null;
  }
}
