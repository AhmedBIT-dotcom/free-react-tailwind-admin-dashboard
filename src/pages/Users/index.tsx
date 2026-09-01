import PageMeta from "../../components/common/PageMeta";
import UsersKpiCards from "../../components/users/UsersKpiCards";
import UsersFilters from "../../components/users/UsersFilters";
import UsersTabs from "../../components/users/UsersTabs";
import UsersTable from "../../components/users/UsersTable";

export default function Users() {
  return (
    <>
      <PageMeta
        title="المستخدمون | صنّعة"
        description="إدارة جميع المستخدمين في منصة صنّعة ومراقبة حساباتهم وصلاحياتهم"
      />
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            المستخدمون
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            إدارة جميع المستخدمين في منصة صنّعة ومراقبة حساباتهم وصلاحياتهم
          </p>
        </div>
        
        <div className="mt-4 sm:mt-0">
          <nav>
            <ol className="flex items-center gap-1.5 text-sm">
              <li>
                <a href="/" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400">
                  لوحة التحكم
                </a>
              </li>
              <li className="text-gray-500 dark:text-gray-400">/</li>
              <li className="text-brand-500 font-medium dark:text-brand-400">المستخدمون</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="space-y-6">
        {/* KPI Cards */}
        <UsersKpiCards />

        {/* Main Area: Tabs, Filters, Table */}
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
          <UsersTabs />
          <div className="p-4 sm:p-5 border-t border-gray-100 dark:border-gray-800 space-y-5">
            <UsersFilters />
            <UsersTable />
          </div>
        </div>
      </div>
    </>
  );
}
