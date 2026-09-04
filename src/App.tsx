import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import ServiceRequests from "./pages/ServiceRequests";
import Users from "./pages/Users";
import Services from "./pages/Services";
import ProviderLayout from "./layout/ProviderLayout";
import ProviderDashboard from "./pages/Provider/Dashboard";
import ProviderRequests from "./pages/Provider/Requests";
import ProviderServices from "./pages/Provider/Services";
import ProviderAppointments from "./pages/Provider/Appointments";
import ProviderEarnings from "./pages/Provider/Earnings";
import ProviderReviews from "./pages/Provider/Reviews";
import ProviderMessages from "./pages/Provider/Messages";
import ProviderNotifications from "./pages/Provider/Notifications";
import ProviderProfile from "./pages/Provider/Profile";
import CustomerLayout from "./layout/CustomerLayout";
import CustomerHome from "./pages/Customer/CustomerHome";
import CustomerSearch from "./pages/Customer/CustomerSearch";
import CustomerServices from "./pages/Customer/CustomerServices";
import CustomerRequests from "./pages/Customer/CustomerRequests";
import CustomerRequestDetails from "./pages/Customer/CustomerRequestDetails";
import CustomerMessages from "./pages/Customer/CustomerMessages";
import CustomerNotifications from "./pages/Customer/CustomerNotifications";
import CustomerDisputes from "./pages/Customer/CustomerDisputes";
import CustomerFavorites from "./pages/Customer/CustomerFavorites";
import CustomerProfile from "./pages/Customer/CustomerProfile";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/service-requests" element={<ServiceRequests />} />
            <Route path="/users" element={<Users />} />
            <Route path="/services" element={<Services />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Provider Layout */}
          <Route path="/provider" element={<ProviderLayout />}>
            <Route index element={<ProviderDashboard />} />
            <Route path="requests" element={<ProviderRequests />} />
            <Route path="services" element={<ProviderServices />} />
            <Route path="appointments" element={<ProviderAppointments />} />
            <Route path="earnings" element={<ProviderEarnings />} />
            <Route path="reviews" element={<ProviderReviews />} />
            <Route path="messages" element={<ProviderMessages />} />
            <Route path="notifications" element={<ProviderNotifications />} />
            <Route path="profile" element={<ProviderProfile />} />
            {/* Additional Provider routes will be added here later */}
          </Route>

          <Route path="/customer" element={<CustomerLayout />}>
            <Route index element={<CustomerHome />} />
            <Route path="search" element={<CustomerSearch />} />
            <Route path="services" element={<CustomerServices />} />
            <Route path="requests" element={<CustomerRequests />} />
            <Route path="requests/:id" element={<CustomerRequestDetails />} />
            <Route path="messages" element={<CustomerMessages />} />
            <Route path="notifications" element={<CustomerNotifications />} />
            <Route path="disputes" element={<CustomerDisputes />} />
            <Route path="favorites" element={<CustomerFavorites />} />
            <Route path="profile" element={<CustomerProfile />} />
            {/* Additional Customer routes will be added here later */}
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
