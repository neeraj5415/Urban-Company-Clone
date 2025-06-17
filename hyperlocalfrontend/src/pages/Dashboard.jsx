import DashboardCard from "../components/DashboardCard";
import Sidebar from "../components/Sidebar";

export default function UserDashboard() {
  return (
    <div className="flex">
      <Sidebar role="user" />
      <main className="flex-1 p-8 bg-red-200 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-red-800">Welcome to Your Dashboard</h1>
        <div className="flex flex-wrap gap-6">
          <DashboardCard title="Total Bookings" value="5" />
          <DashboardCard title="Upcoming Services" value="2" />
          <DashboardCard title="Reviews Given" value="3" />
          <DashboardCard title="Wallet Balance" value="₹1200" />
        </div>
      </main>
    </div>
  );
}