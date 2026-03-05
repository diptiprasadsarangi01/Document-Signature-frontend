import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3 mb-4"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 mb-6"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg">
            Log In
          </button>

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-purple-600">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}