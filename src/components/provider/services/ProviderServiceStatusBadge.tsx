export type ServiceStatus = "active" | "review" | "suspended";

interface ProviderServiceStatusBadgeProps {
  status: ServiceStatus;
  isRtl: boolean;
}

export default function ProviderServiceStatusBadge({
  status,
  isRtl,
}: ProviderServiceStatusBadgeProps) {
  switch (status) {
    case "active":
      return (
        <span className="inline-flex rounded-full bg-success-50 px-2.5 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
          {isRtl ? "نشطة" : "Active"}
        </span>
      );
    case "review":
      return (
        <span className="inline-flex rounded-full bg-warning-50 px-2.5 py-1 text-xs font-medium text-warning-700 dark:bg-warning-500/10 dark:text-warning-400">
          {isRtl ? "قيد المراجعة" : "Under Review"}
        </span>
      );
    case "suspended":
      return (
        <span className="inline-flex rounded-full bg-error-50 px-2.5 py-1 text-xs font-medium text-error-600 dark:bg-error-500/10 dark:text-error-400">
          {isRtl ? "موقوفة" : "Suspended"}
        </span>
      );
    default:
      return null;
  }
}
