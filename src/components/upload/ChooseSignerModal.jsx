import { useNavigate } from "react-router-dom";

export default function ChooseSignerModal({ documentId, onClose }) {

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white rounded-xl p-8 w-[500px]">

        <h2 className="text-xl font-semibold mb-6">
          Who will sign this document?
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={() => navigate(`/sign/${documentId}`)}
            className="border p-6 rounded-xl"
          >
            Only me
          </button>

          <button
            onClick={() => navigate(`/request/${documentId}`)}
            className="border p-6 rounded-xl"
          >
            Several people
          </button>

        </div>

      </div>
    </div>
  );
}