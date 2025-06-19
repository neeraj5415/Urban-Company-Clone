import { useEffect, useState } from "react";

// Dummy data
const mockBookings = [
  {
    id: 1,
    service: "Electrician",
    date: "2025-06-15",
    time: "10:00 AM",
    status: "Completed",
  },
  {
    id: 2,
    service: "Beautician",
    date: "2025-06-17",
    time: "2:00 PM",
    status: "Scheduled",
  },
  {
    id: 3,
    service: "Plumber",
    date: "2025-06-10",
    time: "11:30 AM",
    status: "Cancelled",
  },
];

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // TODO: Replace this with actual API call
    setBookings(mockBookings);
  }, []);

  return (
    <div className="p-6 bg-red-400">
      <h2 className="text-2xl font-bold mb-4 text-red-800">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-red-800">No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="p-4 bg-red-200 rounded shadow border flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-red-800">{booking.service}</p>
                <p className="text-sm text-red-800">
                  {booking.date} at {booking.time}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded text-black text-sm font-medium ${
                  booking.status === "Completed"
                    ? "bg-green-600"
                    : booking.status === "Scheduled"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              >
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}