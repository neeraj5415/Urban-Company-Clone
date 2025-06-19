export default function ServiceCard({ service }) {
  return (
    <div className="bg-red-200 rounded-lg shadow-md hover:shadow-lg transition p-4">
      <img src={service.image} alt={service.title} className="h-40 w-full object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="text-gray-600 text-sm">{service.description}</p>
    </div>
  );
}