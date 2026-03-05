import { useEffect, useState } from "react";
import api from "../../services/api";
import AuditModal from "../../components/AuditModal";

export default function SignedHistory() {
  const [docs, setDocs] = useState([]);
  const [auditOpen, setAuditOpen] = useState(false);
  const [selectedLogs, setSelectedLogs] = useState([]);

  useEffect(() => {
    api.get("/docs/signed").then((res) =>
      setDocs(res.data)
    );
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Signed History
      </h1>

      {docs.map((doc) => (
        <div
          key={doc._id}
          className="bg-white border rounded-xl p-6 mb-4 flex justify-between"
        >
          <div>
            <p className="font-medium">{doc.fileName}</p>
            <p className="text-sm text-gray-500">
              Signed on{" "}
              {new Date(doc.updatedAt).toDateString()}
            </p>
          </div>

          <div className="space-x-3">
            <button className="border px-4 py-2 rounded-lg">
              Download
            </button>

            <button
              onClick={() => {
                setSelectedLogs(doc.auditLogs);
                setAuditOpen(true);
              }}
              className="border px-4 py-2 rounded-lg"
            >
              Audit Trail
            </button>
          </div>
        </div>
      ))}

      {auditOpen && (
        <AuditModal
          logs={selectedLogs}
          onClose={() => setAuditOpen(false)}
        />
      )}
    </div>
  );
}