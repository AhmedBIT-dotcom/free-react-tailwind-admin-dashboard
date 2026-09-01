import PageMeta from "../../components/common/PageMeta";
import KpiCards from "../../components/dashboard/KpiCards";
import ServiceRequestsChart from "../../components/dashboard/ServiceRequestsChart";
import RequestStatusChart from "../../components/dashboard/RequestStatusChart";
import MostRequestedServices from "../../components/dashboard/MostRequestedServices";
import RecentActivity from "../../components/dashboard/RecentActivity";
import ProviderDistribution from "../../components/dashboard/ProviderDistribution";

export default function Home() {
  return (
    <>
      <PageMeta
        title="San'ah Admin Dashboard | صنّعة"
        description="San'ah Service Marketplace Admin Dashboard"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* KPI Cards Row */}
        <div className="col-span-12">
          <KpiCards />
        </div>

        {/* Charts Row */}
        <div className="col-span-12 xl:col-span-4">
          <RequestStatusChart />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <ServiceRequestsChart />
        </div>

        {/* Bottom Cards Row */}
        <div className="col-span-12 xl:col-span-4">
          <MostRequestedServices />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <RecentActivity />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <ProviderDistribution />
        </div>
      </div>
    </>
  );
}
