import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-white border-r flex flex-col justify-between">
      <div>
        <div className="p-6 text-xl font-semibold flex items-center gap-2">
          <div className="w-9 h-9 bg-purple-600 text-white rounded-lg flex items-center justify-center">
            📄
          </div>
          SignFlow
        </div>

        <nav className="px-4 space-y-2">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            My Documents
          </NavLink>

          <NavLink
            to="/dashboard/history"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            Signed History
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            Profile
          </NavLink>
        </nav>
      </div>

      <div
        onClick={() => {
          logout();
          navigate("/");
        }}
        className="p-6 text-gray-500 cursor-pointer hover:text-black"
      >
        Logout
      </div>
    </div>
  );
}