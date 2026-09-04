import React, { useState } from "react";
import { MockCustomerUser } from "./mockData";
import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../ui/modal";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";

interface CustomerAddressInfoProps {
  user: MockCustomerUser;
}

export default function CustomerAddressInfo({ user }: CustomerAddressInfoProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const [formData, setFormData] = useState({
    city: user.city,
  });

  const [displayData, setDisplayData] = useState(formData);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    setTimeout(() => {
      setDisplayData(formData);
      setIsSaving(false);
      closeModal();
    }, 600);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-500">
            <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.62 8.49001C5.59 -0.169987 18.42 -0.159987 20.38 8.50001C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39999 20.54C5.62999 17.88 2.46999 13.57 3.62 8.49001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white/90">
            Address / Location
          </h4>
        </div>

        <button
          onClick={openModal}
          className="flex items-center gap-2 rounded-lg border border-brand-200 text-brand-600 bg-white px-4 py-2 text-sm font-medium shadow-theme-xs hover:bg-brand-50 hover:text-brand-700 dark:border-brand-500/30 dark:bg-gray-800 dark:text-brand-400 dark:hover:bg-brand-500/10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.04 3.02L8.16003 10.9C7.86003 11.2 7.56003 11.79 7.50003 12.22L7.07003 15.23C6.91003 16.32 7.68003 17.08 8.77003 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96C22.34 6.6 22.98 5.02 20.98 3.02C18.98 1.02 17.4 1.66 16.04 3.02Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.91 4.15C15.58 6.54 17.45 8.41 19.85 9.09" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Edit
        </button>
      </div>

      <div className="grid grid-cols-1">
        <div>
          <span className="block mb-1.5 text-sm font-medium text-gray-500 dark:text-gray-400">City / Area</span>
          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90">
            {displayData.city}
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-6 dark:bg-gray-900 lg:p-11">
          <div className="mb-6">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Address Information
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Update your city or service area.
            </p>
          </div>
          <form onSubmit={handleSave} className="flex flex-col">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5">
              <div className="col-span-1">
                <Label>City / Area</Label>
                <Input 
                  type="text" 
                  value={formData.city} 
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600 disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
