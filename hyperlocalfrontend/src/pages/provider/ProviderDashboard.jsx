import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";

export default function ProviderDashboard() {
  return (
    <div className="flex">
      <Sidebar role="provider" />
      <div className="flex-1 p-8 bg-red-200 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Provider Dashboard</h1>
        <div className="flex flex-wrap gap-6">
          <DashboardCard title="Total Bookings" value="24" />
          <DashboardCard title="Upcoming Appointments" value="6" />
          <DashboardCard title="Services Offered" value="3" />
          <DashboardCard title="Rating" value="4.5⭐" />
        </div>
      </div>
    </div>
  );
}