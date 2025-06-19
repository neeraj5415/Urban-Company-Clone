import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  // This will receive data object from AuthForm: { name, email, password, role }
  const handleSignup = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", data);
      console.log("Signup successful:", res.data);

      // Store token if returned
      localStorage.setItem("token", res.data.token);

      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.error("Signup failed:", err.response?.data || err.message);
      alert("Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <AuthForm type="signup" onSubmit={handleSignup} />
    </div>
  );
};

export default Signup;