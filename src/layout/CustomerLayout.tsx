import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import CustomerHeader from "./CustomerHeader";
import Backdrop from "./Backdrop";
import CustomerSidebar from "./CustomerSidebar";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <CustomerSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px] rtl:lg:ml-0 rtl:lg:mr-[290px]" : "lg:ml-[90px] rtl:lg:ml-0 rtl:lg:mr-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <CustomerHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const CustomerLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default CustomerLayout;
