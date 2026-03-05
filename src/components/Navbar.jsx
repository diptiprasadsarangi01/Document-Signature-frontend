import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
            📄
          </div>
          <span className="text-xl font-semibold">SignFlow</span>
        </Link>

        {/* Right Section */}
        {!isAuthPage && (
          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="text-gray-600 hover:text-black transition"
            >
              Log in
            </Link>

            <Link
              to="/register"
              className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}