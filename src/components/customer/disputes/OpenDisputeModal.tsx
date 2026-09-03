import React, { useState } from "react";
import { DISPUTE_CATEGORIES, disputeStore, CustomerDispute } from "./mockData";

interface OpenDisputeModalProps {
  isOpen: boolean;
  onClose: () => void;
  requestId: string;
}

export default function OpenDisputeModal({ isOpen, onClose, requestId }: OpenDisputeModalProps) {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [evidence, setEvidence] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setEvidence(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !description) return;

    setIsSubmitting(true);

    // Mock API call delay
    setTimeout(() => {
      const newDispute: CustomerDispute = {
        id: `DSP-${Math.floor(Math.random() * 10000) + 5000}`,
        requestId,
        category,
        description,
        status: "OPEN",
        createdAt: new Date().toISOString(),
        evidence: evidence.map((file, idx) => ({
          id: `EV-${Date.now()}-${idx}`,
          fileName: file.name,
          fileSize: `${(file.size / 1024).toFixed(1)} KB`
        }))
      };

      disputeStore.addDispute(newDispute);
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-theme-lg overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 shrink-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Open a Dispute</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
          <form id="dispute-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Dispute Category <span className="text-error-500">*</span>
              </label>
              <div className="relative z-20 bg-transparent dark:bg-gray-900">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="relative z-20 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-5 py-3 outline-hidden transition focus:border-brand-500 active:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:border-brand-500 text-gray-900 dark:text-white"
                >
                  <option value="" disabled className="text-gray-500 dark:text-gray-400">
                    Select a category
                  </option>
                  {DISPUTE_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="text-gray-900 dark:text-white">
                      {cat}
                    </option>
                  ))}
                </select>
                <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Description <span className="text-error-500">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                placeholder="Please describe the issue in detail..."
                className="w-full rounded-lg border border-gray-300 bg-transparent px-5 py-3 outline-hidden transition focus:border-brand-500 active:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:border-brand-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              ></textarea>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Supporting Evidence (Optional)
              </label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-hidden transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-brand-500 file:hover:bg-opacity-10 focus:border-brand-500 active:border-brand-500 disabled:cursor-default disabled:bg-whiter dark:border-gray-700 dark:bg-gray-900 dark:file:border-gray-700 dark:file:bg-white/5 dark:file:text-white dark:focus:border-brand-500"
              />
              {evidence.length > 0 && (
                <div className="mt-3 flex flex-col gap-2">
                  {evidence.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {file.name} ({(file.size / 1024).toFixed(1)} KB)
                    </div>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 dark:border-gray-800 shrink-0 bg-gray-50 dark:bg-gray-800/50">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="dispute-form"
            disabled={isSubmitting}
            className="px-5 py-2.5 bg-error-500 text-white rounded-lg hover:bg-error-600 transition-colors font-medium text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? "Submitting..." : "Submit Dispute"}
          </button>
        </div>
      </div>
    </div>
  );
}
