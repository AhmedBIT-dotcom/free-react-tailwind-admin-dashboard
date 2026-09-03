import { useState } from "react";
import { Link } from "react-router";
import { useCustomerDisputes } from "./mockData";
import OpenDisputeModal from "./OpenDisputeModal";

export default function CustomerDisputeSection({ requestId }: { requestId: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const disputes = useCustomerDisputes();
  const dispute = disputes.find((d) => d.requestId === requestId);

  // Status Badge Helper
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

  const canOpenDispute = !dispute; // Can refine this logic if needed

  return (
    <>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-theme-sm">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-error-50 dark:bg-error-500/10 flex items-center justify-center text-error-500">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Dispute</h3>
            </div>
          </div>
          {canOpenDispute ? (
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-error-50 text-error-600 rounded-lg hover:bg-error-100 transition-colors font-medium text-sm dark:bg-error-500/10 dark:text-error-400 dark:hover:bg-error-500/20"
            >
              Open Dispute
            </button>
          ) : (
            <Link
              to={`/customer/disputes?requestId=${requestId}`}
              className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            >
              View Dispute
            </Link>
          )}
        </div>

        {!dispute ? (
          <div className="text-center py-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              There is currently no dispute for this request.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">Dispute ID</span>
                <span className="font-semibold text-gray-900 dark:text-white">{dispute.id}</span>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Status</span>
                {getStatusBadge(dispute.status)}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">Category</span>
                <span className="text-base font-semibold text-gray-900 dark:text-white">{dispute.category}</span>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">Description</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
                  {dispute.description}
                </p>
              </div>
              
              {dispute.evidence && dispute.evidence.length > 0 && (
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">Evidence Provided</span>
                  <div className="flex flex-col gap-2">
                    {dispute.evidence.map((ev) => (
                      <div key={ev.id} className="flex items-center gap-2 text-sm text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/10 p-2.5 rounded-lg border border-brand-100 dark:border-brand-800/30">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {ev.fileName} {ev.fileSize ? `(${ev.fileSize})` : ""}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {dispute.status === "RESOLVED" && dispute.resolution && (
              <div className="mt-2 p-5 bg-success-50 dark:bg-success-900/10 border border-success-100 dark:border-success-800/30 rounded-xl">
                <h4 className="text-sm font-bold text-success-700 dark:text-success-400 mb-3 flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Resolution Details
                </h4>
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="text-xs text-success-600/80 dark:text-success-400/80 block mb-0.5">Decision</span>
                    <span className="text-sm font-medium text-success-800 dark:text-success-300">{dispute.resolution.decision}</span>
                  </div>
                  <div>
                    <span className="text-xs text-success-600/80 dark:text-success-400/80 block mb-0.5">Reason</span>
                    <span className="text-sm text-success-800 dark:text-success-300">{dispute.resolution.reason}</span>
                  </div>
                  <div className="flex items-center gap-4 border-t border-success-200/50 dark:border-success-800/30 pt-3 mt-1">
                    <div>
                      <span className="text-xs text-success-600/80 dark:text-success-400/80 block mb-0.5">Resolved By</span>
                      <span className="text-xs font-medium text-success-800 dark:text-success-300">{dispute.resolution.resolvedBy}</span>
                    </div>
                    <div>
                      <span className="text-xs text-success-600/80 dark:text-success-400/80 block mb-0.5">Date</span>
                      <span className="text-xs font-medium text-success-800 dark:text-success-300">{new Date(dispute.resolution.resolvedAt).toLocaleDateString("en-US")}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <OpenDisputeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        requestId={requestId}
      />
    </>
  );
}
