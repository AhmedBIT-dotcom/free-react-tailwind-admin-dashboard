import PageMeta from "../../components/common/PageMeta";
import ServiceRequestKpiCards from "../../components/service-requests/ServiceRequestKpiCards";
import ServiceRequestFilters from "../../components/service-requests/ServiceRequestFilters";
import ServiceRequestStatusTabs from "../../components/service-requests/ServiceRequestStatusTabs";
import ServiceRequestsTable from "../../components/service-requests/ServiceRequestsTable";

export default function ServiceRequests() {
  return (
    <>
      <PageMeta
        title="طلبات الخدمة | صنّعة"
        description="إدارة ومتابعة جميع طلبات الخدمات في منصة صنّعة"
      />
      
      {/* 
        Breadcrumb can be hidden or modified based on existing layouts. 
        Using existing PageBreadcrumb, but since it's english focused typically, we just pass the arabic title 
      */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            طلبات الخدمة
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            إدارة ومتابعة جميع طلبات الخدمات في منصة صنّعة
          </p>
        </div>
        
        <div className="mt-4 sm:mt-0">
          <nav>
            <ol className="flex items-center gap-1.5 text-sm">
              <li>
                <a href="/" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400">
                  الرئيسية
                </a>
              </li>
              <li className="text-gray-500 dark:text-gray-400">/</li>
              <li className="text-brand-500 font-medium dark:text-brand-400">طلبات الخدمة</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="space-y-6">
        {/* KPI Cards */}
        <ServiceRequestKpiCards />

        {/* Filters and Search */}
        <ServiceRequestFilters />

        {/* Main Table Area (Tabs + Table) */}
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
          <ServiceRequestStatusTabs />
          <div className="p-0 sm:p-0 border-t-0 border-gray-100 dark:border-gray-800">
             {/* The table component has its own padding/border logic, so wrapper can be paddingless */}
            <ServiceRequestsTable />
          </div>
        </div>
      </div>
    </>
  );
}
