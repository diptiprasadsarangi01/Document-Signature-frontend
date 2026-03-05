import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../../components/StatusBadge";
import ChooseSignerModal from "../../components/upload/ChooseSignerModal";

export default function MyDocuments() {

  const [docs, setDocs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [documentId, setDocumentId] = useState(null);

  const navigate = useNavigate();

  // FETCH DOCUMENTS
  useEffect(() => {
    api.get("/docs").then((res) => setDocs(res.data));
  }, []);

  // HANDLE PDF UPLOAD
  const handleUpload = async (e) => {

    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("pdf", file);

    try {

      const res = await api.post("/docs/upload", formData);

      setDocumentId(res.data._id);
      setShowModal(true);

      // refresh document list
      const docsRes = await api.get("/docs");
      setDocs(docsRes.data);

    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-semibold">
          My Documents
        </h1>

        {/* Upload Button */}
        <label className="bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer">
          Upload PDF
          <input
            type="file"
            accept="application/pdf"
            onChange={handleUpload}
            className="hidden"
          />
        </label>

      </div>

      {/* DOCUMENT TABLE */}
      <table className="w-full bg-white rounded-xl overflow-hidden">

        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">File Name</th>
            <th>Status</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {docs.map((doc) => (

            <tr key={doc._id} className="border-b">

              <td className="p-4">
                {doc.title || doc.fileName}
              </td>

              <td>
                <StatusBadge status={doc.status} />
              </td>

              <td>
                {new Date(doc.createdAt).toDateString()}
              </td>

              <td>

                {/* SIGN BUTTON */}
                <button
                  onClick={() => navigate(`/sign/${doc._id}`)}
                  className="mr-3"
                >
                  ✍️
                </button>

                {/* VIEW BUTTON */}
                <button
                  onClick={() => window.open(`http://localhost:5000/${doc.filePath}`)}
                >
                  👁
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* SIGNER MODAL */}
      {showModal && (
        <ChooseSignerModal
          documentId={documentId}
          onClose={() => setShowModal(false)}
        />
      )}

    </div>
  );
}