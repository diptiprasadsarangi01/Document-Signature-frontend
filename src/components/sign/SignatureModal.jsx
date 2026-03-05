import { useState, useRef, useEffect } from "react";
import SignaturePad from "signature_pad";

export default function SignatureModal({ onClose, onApply }) {
  const [tab, setTab] = useState("Type");
  const canvasRef = useRef(null);
  const padRef = useRef(null);

  useEffect(() => {
    if (tab === "Draw" && canvasRef.current) {
      padRef.current = new SignaturePad(canvasRef.current);
    }
  }, [tab]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[600px] rounded-2xl p-6">

        <h2 className="text-xl font-semibold mb-4">
          Set Your Signature
        </h2>

        <div className="flex bg-gray-100 rounded-lg mb-6">
          {["Type", "Draw", "Upload", "Company Stamp"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg ${
                tab === t ? "bg-white shadow" : ""
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "Draw" && (
          <canvas
            ref={canvasRef}
            width={500}
            height={200}
            className="border rounded-lg"
          />
        )}

        {tab === "Upload" && (
          <input type="file" accept="image/*" />
        )}

        {tab === "Type" && (
          <div className="space-y-4">
            <p className="font-cursive text-2xl">Your Name</p>
            <p className="font-serif text-2xl">Your Name</p>
          </div>
        )}

        <button
          onClick={onApply}
          className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg"
        >
          Apply
        </button>

      </div>
    </div>
  );
}