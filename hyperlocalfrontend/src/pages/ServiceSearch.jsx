import { useState } from "react";

export default function ServiceSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const services = [
    { name: "Home Cleaning", category: "Cleaning" },
    { name: "Electrician", category: "Repairs" },
    { name: "Plumber", category: "Repairs" },
    { name: "AC Repair", category: "Appliances" },
    { name: "Salon at Home", category: "Beauty" },
    { name: "Pest Control", category: "Sanitation" },
  ];

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length > 1) {
      const filtered = services.filter((s) =>
        s.name.toLowerCase().includes(val.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-red-200">
      <h2 className="text-2xl font-semibold mb-4 text-red-800">Search Services</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for services like 'cleaning', 'electrician'..."
        className="w-full px-4 py-2 rounded border border-black-900 focus:outline-none focus:ring focus:ring-red-900"
      />

      <div className="mt-6">
        {results.length > 0 ? (
          <ul className="space-y-2">
            {results.map((service, idx) => (
              <li
                key={idx}
                className="bg-red-400 p-4 rounded shadow hover:bg-red-600 transition"
              >
                <div className="font-medium">{service.name}</div>
                <div className="text-sm text-black-500">
                  Category: {service.category}
                </div>
              </li>
            ))}
          </ul>
        ) : query.length > 1 ? (
          <p className="text-red-900 mt-4">No services found for "{query}"</p>
        ) : null}
      </div>
    </div>
  );
}