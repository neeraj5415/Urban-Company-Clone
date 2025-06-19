import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    address: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data submitted:", formData);
    // TODO: Call booking API here
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-red-400 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6">Book a Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="service"
          placeholder="Service Name"
          className="w-full p-3 border rounded"
          value={formData.service}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          className="w-full p-3 border rounded"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          className="w-full p-3 border rounded"
          value={formData.time}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Address"
          className="w-full p-3 border rounded"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="notes"
          placeholder="Additional Notes (optional)"
          className="w-full p-3 border rounded"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-red-300 text-white p-3 rounded hover:bg-red-800"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}