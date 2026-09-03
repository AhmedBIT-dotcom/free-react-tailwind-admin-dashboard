import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router";
import { useCustomerDisputes, CustomerDispute } from "../../components/customer/disputes/mockData";

export default function CustomerDisputes() {
  const disputes = useCustomerDisputes();
  const [searchParams] = useSearchParams();
  const targetRequestId = searchParams.get("requestId");

  const targetDisputeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (targetRequestId && targetDisputeRef.current) {
      targetDisputeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [targetRequestId]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "OPEN":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-error-200 bg-error-50 text-error-600 dark:border-error-500/20 dark:bg-error-500/10 dark:text-error-400 text-xs font-medium">OPEN</span>;
      case "UNDER_REVIEW":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-warning-200 bg-warning-50 text-warning-600 dark:border-warning-500/20 dark:bg-warning-500/10 dark:text-warning-400 text-xs font-medium">UNDER REVIEW</span>;
      case "RESOLVED":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-success-200 bg-success-50 text-success-600 dark:border-success-500/20 dark:bg-success-500/10 dark:text-success-400 text-xs font-medium">RESOLVED</span>;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="w-full">
      <div className="bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-theme-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-error-50 dark:bg-error-500/10 rounded-xl text-error-600 dark:text-error-400">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                My Disputes
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                Track and manage disputes opened for your service requests
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {disputes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {disputes.map((dispute: CustomerDispute) => {
              const isTarget = dispute.requestId === targetRequestId;
              return (
              <Link
                key={dispute.id}
                to={`/customer/requests/${dispute.requestId}`}
                ref={isTarget ? targetDisputeRef : null}
                className={`flex flex-col bg-white dark:bg-gray-900 border rounded-2xl p-5 sm:p-6 shadow-theme-sm transition-all hover:shadow-theme-md hover:-translate-y-0.5 ${
                  isTarget
                    ? "border-brand-500 dark:border-brand-400 ring-4 ring-brand-500/10"
                    : "border-gray-200 dark:border-gray-800"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {dispute.id}
                  </span>
                  {getStatusBadge(dispute.status)}
                </div>
                
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                  {dispute.category}
                </h4>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-5 flex-1">
                  {dispute.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-gray-400">Request</span>
                    <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
                      {dispute.requestId}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 text-right">
                    <span className="text-xs text-gray-400">Opened</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {formatDate(dispute.createdAt)}
                    </span>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        ) : (
          <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-theme-sm min-h-[400px]">
            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              No Disputes Found
            </h3>
            <p className="text-gray-500 mb-6">
              You haven't opened any disputes. If you have an issue with a service, you can open a dispute from the request details page.
            </p>
            <Link
              to="/customer/requests"
              className="px-5 py-2.5 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors font-medium text-sm"
            >
              Go to My Requests
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
