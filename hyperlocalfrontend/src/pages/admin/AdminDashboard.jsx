import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar role="admin" />
      <div className="flex-1 p-8 bg-red-200 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="flex flex-wrap gap-6">
          <DashboardCard title="Total Users" value="102" />
          <DashboardCard title="Providers" value="15" />
          <DashboardCard title="Bookings" value="128" />
          <DashboardCard title="Revenue" value="₹84,000" />
        </div>
      </div>
    </div>
  );
}