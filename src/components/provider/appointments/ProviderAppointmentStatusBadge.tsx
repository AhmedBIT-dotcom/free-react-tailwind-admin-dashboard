export type AppointmentStatus = 
  | "scheduled" 
  | "confirmed" 
  | "progress" 
  | "completed" 
  | "cancelled" 
  | "no_show";

interface ProviderAppointmentStatusBadgeProps {
  status: AppointmentStatus;
  isRtl: boolean;
}

export default function ProviderAppointmentStatusBadge({
  status,
  isRtl,
}: ProviderAppointmentStatusBadgeProps) {
  switch (status) {
    case "scheduled":
      return (
        <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          {isRtl ? "مجدول" : "Scheduled"}
        </span>
      );
    case "confirmed":
      return (
        <span className="inline-flex rounded-full bg-success-50 px-2.5 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
          {isRtl ? "مؤكد" : "Confirmed"}
        </span>
      );
    case "progress":
      return (
        <span className="inline-flex rounded-full bg-warning-50 px-2.5 py-1 text-xs font-medium text-warning-700 dark:bg-warning-500/10 dark:text-warning-400">
          {isRtl ? "قيد التنفيذ" : "In Progress"}
        </span>
      );
    case "completed":
      return (
        <span className="inline-flex rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
          {isRtl ? "مكتمل" : "Completed"}
        </span>
      );
    case "cancelled":
      return (
        <span className="inline-flex rounded-full bg-error-50 px-2.5 py-1 text-xs font-medium text-error-600 dark:bg-error-500/10 dark:text-error-400">
          {isRtl ? "ملغى" : "Cancelled"}
        </span>
      );
    case "no_show":
      return (
        <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
          {isRtl ? "لم يحضر" : "No Show"}
        </span>
      );
    default:
      return null;
  }
}
