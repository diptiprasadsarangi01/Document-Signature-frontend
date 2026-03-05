import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", form);
    navigate("/login");
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
            Create Account
          </h2>

          <input
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3 mb-4"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
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
            Register
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}