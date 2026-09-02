import React from "react";
import CustomerWelcome from "../../components/customer/home/CustomerWelcome";
import CustomerCategories from "../../components/customer/home/CustomerCategories";
import CustomerFeaturedServices from "../../components/customer/home/CustomerFeaturedServices";
import CustomerActiveRequests from "../../components/customer/home/CustomerActiveRequests";
import CustomerQuickActions from "../../components/customer/home/CustomerQuickActions";

const CustomerHome: React.FC = () => {
  return (
    <div className="max-w-(--breakpoint-xl) mx-auto p-4 md:p-6 2xl:p-10">
      <CustomerWelcome />
      <CustomerCategories />
      <CustomerFeaturedServices />
      <CustomerActiveRequests />
      <CustomerQuickActions />
    </div>
  );
};

export default CustomerHome;
