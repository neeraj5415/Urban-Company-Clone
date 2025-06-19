import { useEffect, useState } from "react";
import axios from "axios";

export default function ProviderServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get("/api/provider/services", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setServices(data);
      } catch (err) {
        setError("Failed to load services");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Services</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{service.description}</p>
              <p className="text-sm font-medium">Price: ₹{service.price}</p>
              <p className="text-sm font-medium">Duration: {service.duration}</p>
              <p className="text-sm text-green-700 mt-2">
                {service.available ? "Available" : "Unavailable"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}