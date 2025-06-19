import { Link } from "react-router-dom";

export default function Sidebar({ role }) {
  const links = {
    provider: [
      { to: "/provider/dashboard", label: "Dashboard" },
      { to: "/provider/bookings", label: "My Bookings" },
      { to: "/provider/services", label: "My Services" },
    ],
    admin: [
      { to: "/admin/dashboard", label: "Dashboard" },
      { to: "/admin/users", label: "Users" },
      { to: "/admin/providers", label: "Providers" },
      { to: "/admin/bookings", label: "All Bookings" },
      { to: "/admin/services", label: "Services" },
    ],
    user: [
    { to: "/user/UserProfile", label: "Profile" },
    { to: "/pages/bookings", label: "My Bookings" },
    { to: "/search", label: "Browse Services" },
    ],
  };

  return (
    <aside className="w-64 bg-red-400 text-red-800 h-screen p-6 space-y-4">
      <h2 className="text-xl font-bold mb-4">{role} Panel</h2>
      <nav className="space-y-2">
        {links[role].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block px-4 py-2 rounded hover:bg-red-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}