import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import vg from '../assets/homeservice.jpg';

const mockServices = [
  {
    id: 1,
    title: "Plumber",
    description: "Fix leaks, install faucets, and more.",
    image: "/plumber.jpg",
  },
  {
    id: 2,
    title: "Electrician",
    description: "Install fans, fix wiring, and more.",
    image: "/electrician.jpg",
  },
  {
    id: 3,
    title: "Beautician",
    description: "Home beauty and grooming services.",
    image: "/beautician.jpg",
  },
];

export default function Home() {
  return (
    <div className='bg-red-400'>
      <Navbar />
      <section className="bg-red-200 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-800">Book Services At Your Doorstep</h1>
        <p className="text-red-800 text-lg">Plumbers, Electricians, Beauticians & more</p>
      </section>

      <div className="min-h-80 flex flex-row items-center justify-center text-2xl font-semibold">
        <div className='text-red-800 mr-20 '>Hyperlocal Service Booking Plateform <br/>Where any service is provided at your home</div>
        <img className="h-60 w-116 object-scale-down fill-white drop-shadow-xl/200 mr-3 size-5 size-1 animate-bounce" src={vg}/>
      </div>

      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl text-center font-semibold mb-4 text-red-800">Popular Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {mockServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}