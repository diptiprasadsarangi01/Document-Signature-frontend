import { useState } from "react";
import SignatureModal from "./SignatureModal";

export default function FieldPanel({ onAddField }) {
  const [openSignature, setOpenSignature] = useState(false);

  const fields = [
    { label: "Signature", required: true },
    { label: "Initials" },
    { label: "Name" },
    { label: "Date" },
    { label: "Text" },
    { label: "Company Stamp" },
  ];

  return (
    <div className="w-72 bg-white border-l p-4">
      <h3 className="font-semibold mb-4">Fields</h3>

      {fields.map((field, i) => (
        <div
          key={i}
          onClick={() =>
            field.label === "Signature"
              ? setOpenSignature(true)
              : onAddField(field.label)
          }
          className="border rounded-lg px-4 py-3 mb-3 cursor-pointer hover:bg-purple-50"
        >
          {field.required && (
            <span className="text-xs text-purple-600 block mb-1">
              Required
            </span>
          )}
          {field.label}
        </div>
      ))}

      <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg">
        Finalize & Sign
      </button>

      <button className="mt-3 w-full bg-red-600 text-white py-3 rounded-lg">
        Reject
      </button>

      {openSignature && (
        <SignatureModal
          onClose={() => setOpenSignature(false)}
          onApply={() => {
            onAddField("Signature");
            setOpenSignature(false);
          }}
        />
      )}
    </div>
  );
}