import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import MyDocuments from "./pages/dashboard/MyDocuments";
import SignedHistory from "./pages/dashboard/SignedHistory";
import Profile from "./pages/dashboard/Profile";

import SignPage from "./pages/sign/SignPage";
import SignatureRequest from "./pages/sign/SignatureRequest";

import DashboardLayout from "./layout/DashboardLayout";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<MyDocuments />} />
          <Route path="history" element={<SignedHistory />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route
          path="/request/:documentId"
          element={<SignatureRequest />}
        />
        {/* SIGN DOCUMENT */}

        <Route
          path="/sign/:documentId"
          element={
            <ProtectedRoute>
              <SignPage />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}