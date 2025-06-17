import axios from "axios";  
import AuthForm from "../components/AuthForm";

export default function Login() {
   const handleLogin = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", data);

      console.log("Login successful:", response.data);

      // Save the JWT token
      localStorage.setItem("token", response.data.token);

      alert("Login successful!");
      // Redirect user based on role
      const role = response.data.user.role;
      if (role === "user") {
        window.location.href = "/Dashboard";
      } else if (role === "provider") {
        window.location.href = "/provider/ProviderDashboard";
      } else if (role === "admin") {
        window.location.href = "/admin/AdminDashboard";
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed: " + (error.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
}