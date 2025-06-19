import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <div className="p-8">Loading profile...</div>;

  return (
    <div className="flex">
      <Sidebar role="user" />
      <main className="flex-1 p-8 bg-red-200 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-red-800">My Profile</h1>

        <div className="bg-red-400 shadow-md rounded p-6 max-w-md">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone || "Not provided"}</p>
          <p><strong>Address:</strong> {user.address || "Not provided"}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      </main>
    </div>
  );
}