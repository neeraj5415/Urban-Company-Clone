import { useState } from "react";

export default function AuthForm({ type, onSubmit }) {
  const isSignup = type === "signup";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // could be user, provider, admin
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-red-200 p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
        {isSignup ? "Create an Account" : "Login"}
      </h2>

      {isSignup && (
        <div className="mb-4">
          <label className="block mb-1 font-medium text-red-600">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
            required
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block mb-1 font-medium text-red-600">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border px-3 py-2 rounded"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-red-600">Password</label>
        <input
          type="password"
          name="password"
          className="w-full border px-3 py-2 rounded"
          onChange={handleChange}
          required
        />
      </div>

      {isSignup && (
        <div className="mb-4">
          <label className="block mb-1 font-medium text-red-600">Role</label>
          <select
            name="role"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="provider">Service Provider</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-red-400"
      >
        {isSignup ? "Sign Up" : "Login"}
      </button>
    </form>
  );
}