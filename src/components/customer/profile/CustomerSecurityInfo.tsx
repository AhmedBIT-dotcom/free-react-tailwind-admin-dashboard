import React, { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../ui/modal";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";

export default function CustomerSecurityInfo() {
  const { isOpen, openModal, closeModal } = useModal();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    setError("");
    setIsSaving(true);
    
    setTimeout(() => {
      setIsSaving(false);
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      closeModal();
    }, 600);
  };

  const handleClose = () => {
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setError("");
    closeModal();
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-500 mt-1 sm:mt-0">
            <path d="M11.9998 21.8101C10.1698 21.8101 8.35977 21.3501 6.97977 20.4301C4.52977 18.7901 3.03977 15.6501 2.99977 11.2701C2.96977 8.24005 5.34977 5.75005 8.35977 5.62005L11.5398 5.48005C11.8398 5.47005 12.1598 5.47005 12.4598 5.48005L15.6398 5.62005C18.6498 5.75005 21.0298 8.24005 20.9998 11.2701C20.9598 15.6501 19.4698 18.7901 17.0198 20.4301C15.6398 21.3501 13.8298 21.8101 11.9998 21.8101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.4502 14.15V15.71C11.4502 16.01 11.6902 16.25 11.9902 16.25C12.2902 16.25 12.5302 16.01 12.5302 15.71V14.15C13.0602 13.91 13.4302 13.38 13.4302 12.75C13.4302 11.92 12.7602 11.25 11.9302 11.25C11.1002 11.25 10.4302 11.92 10.4302 12.75C10.4402 13.38 10.8202 13.91 11.4502 14.15Z" fill="currentColor"/>
          </svg>
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white/90">
              Security
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Manage your account password and keep your account secure.
            </p>
          </div>
        </div>

        <button
          onClick={openModal}
          className="flex items-center gap-2 rounded-lg border border-brand-200 text-brand-600 bg-white px-4 py-2 text-sm font-medium shadow-theme-xs hover:bg-brand-50 hover:text-brand-700 dark:border-brand-500/30 dark:bg-gray-800 dark:text-brand-400 dark:hover:bg-brand-500/10 shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Change Password
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 border-t border-gray-100 pt-6 dark:border-gray-800">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 text-gray-400 dark:text-gray-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white/90">Password</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-mono tracking-widest">********</span>
          </div>
        </div>
        
        <div>
          <span className="block mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">Last changed</span>
          <span className="text-sm text-gray-900 dark:text-white/90">May 18, 2024</span>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={handleClose} className="max-w-[700px] m-4">
        <div className="relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-6 dark:bg-gray-900 lg:p-11">
          <div className="mb-6">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Update Password
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ensure your account is using a long, random password to stay secure.
            </p>
          </div>
          
          {error && (
            <div className="mb-6 rounded-lg bg-error-50 p-4 text-sm text-error-600 dark:bg-error-500/10 dark:text-error-500">
              {error}
            </div>
          )}

          <form onSubmit={handleSave} className="flex flex-col">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5">
              <div className="col-span-1">
                <Label>Current Password</Label>
                <Input 
                  type="password" 
                  value={formData.currentPassword} 
                  onChange={(e) => setFormData({...formData, currentPassword: e.target.value})}
                />
              </div>

              <div className="col-span-1">
                <Label>New Password</Label>
                <Input 
                  type="password" 
                  value={formData.newPassword} 
                  onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                />
              </div>

              <div className="col-span-1">
                <Label>Confirm Password</Label>
                <Input 
                  type="password" 
                  value={formData.confirmPassword} 
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600 disabled:opacity-50"
              >
                {isSaving ? "Updating..." : "Update Password"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
