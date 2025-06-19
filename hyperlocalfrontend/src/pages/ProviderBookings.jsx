import Sidebar from "../components/Sidebar";

const bookings = [
  {
    id: "BKG201",
    user: "Neeraj Kumar",
    service: "AC Repair",
    date: "2025-06-18",
    status: "Scheduled",
  },
  {
    id: "BKG202",
    user: "Anjali Sharma",
    service: "Haircut",
    date: "2025-06-16",
    status: "Completed",
  },
];

export default function ProviderBookings() {
  const handleStatusChange = (id, newStatus) => {
    alert(`Booking ${id} marked as ${newStatus}`);
    // TODO: Update booking status in backend
  };

  return (
    <div className="flex">
      <Sidebar role="provider" />
      <main className="flex-1 p-8 bg-red-300 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-red-800">My Service Bookings</h1>
        <table className="w-full bg-red-100 rounded shadow overflow-hidden">
          <thead className="bg-red-100 text-left text-red-800 font-semibold">
            <tr>
              <th className="p-4">Booking ID</th>
              <th className="p-4">Client</th>
              <th className="p-4">Service</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="p-4">{b.id}</td>
                <td className="p-4">{b.user}</td>
                <td className="p-4">{b.service}</td>
                <td className="p-4">{b.date}</td>
                <td className="p-4">{b.status}</td>
                <td className="p-4 space-x-2">
                  {b.status === "Scheduled" && (
                    <>
                      <button
                        onClick={() => handleStatusChange(b.id, "Completed")}
                        className="bg-green-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Mark Done
                      </button>
                      <button
                        onClick={() => handleStatusChange(b.id, "Cancelled")}
                        className="bg-red-500 hover:bg-red-800 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                  {b.status === "Completed" && (
                    <span className="text-green-700 font-semibold">Done</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}