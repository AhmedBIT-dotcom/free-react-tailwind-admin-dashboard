import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import CustomerProfileMeta from "../../components/customer/profile/CustomerProfileMeta";
import CustomerPersonalInfo from "../../components/customer/profile/CustomerPersonalInfo";
import CustomerAddressInfo from "../../components/customer/profile/CustomerAddressInfo";
import CustomerSecurityInfo from "../../components/customer/profile/CustomerSecurityInfo";
import { mockCustomerProfile } from "../../components/customer/profile/mockData";

export default function CustomerProfile() {
  return (
    <div className="w-full">
      <PageBreadcrumb pageTitle="Profile" />
      
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1">
            <CustomerProfileMeta user={mockCustomerProfile} />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <CustomerPersonalInfo user={mockCustomerProfile} />
          </div>
        </div>
        <CustomerAddressInfo user={mockCustomerProfile} />
        <CustomerSecurityInfo />
      </div>
    </div>
  );
}
