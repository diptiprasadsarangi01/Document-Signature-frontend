import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../../components/StatusBadge";

export default function MyDocuments() {
  const [docs, setDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/documents").then((res) => setDocs(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-6 font-semibold">My Documents</h1>

      <table className="w-full bg-white rounded-xl overflow-hidden">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">File</th>
            <th>Status</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {docs.map((doc) => (
            <tr key={doc._id} className="border-b">
              <td className="p-4">{doc.fileName}</td>
              <td><StatusBadge status={doc.status} /></td>
              <td>{new Date(doc.createdAt).toDateString()}</td>
              <td className="space-x-3">
                <button onClick={() => navigate(`/sign/${doc._id}`)}>
                  ✍️
                </button>
                <button>⬇️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}