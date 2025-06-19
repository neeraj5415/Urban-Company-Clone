import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-400 shadow-md">
      <div className="max-w-6xl mx-auto px-2 py-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-red-800">Home Serves</Link>
        <div className="space-x-4">
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-red-800">Login</Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-red-800">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}