import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import api from "../../services/api";

export default function Profile() {
  const { user } = useAuth();

  const [form, setForm] = useState({
    name: user?.name || "",
    company: user?.company || "",
  });

  const handleSave = async () => {
    await api.patch("/user/update", form);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Profile
      </h1>

      <div className="bg-white p-8 rounded-xl border max-w-xl">
        <input
          className="w-full border rounded-lg px-4 py-3 mb-4"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          disabled
          className="w-full border rounded-lg px-4 py-3 mb-4 bg-gray-100"
          value={user?.email}
        />

        <input
          className="w-full border rounded-lg px-4 py-3 mb-6"
          placeholder="Company"
          value={form.company}
          onChange={(e) =>
            setForm({ ...form, company: e.target.value })
          }
        />

        <button
          onClick={handleSave}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}