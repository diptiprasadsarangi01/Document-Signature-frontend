import { Rnd } from "react-rnd";
import { useState } from "react";

export default function FieldWrapper({
  field,
  onUpdate,
  onDelete,
  onDuplicate,
}) {
  const [active, setActive] = useState(false);

  return (
    <Rnd
      size={{ width: field.width, height: field.height }}
      position={{ x: field.x, y: field.y }}
      bounds="parent"
      onDragStop={(e, d) =>
        onUpdate(field.id, { x: d.x, y: d.y })
      }
      onResizeStop={(e, direction, ref, delta, position) =>
        onUpdate(field.id, {
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          ...position,
        })
      }
      onClick={() => setActive(true)}
      className="absolute border border-purple-500 bg-purple-50 flex items-center justify-center text-sm cursor-move"
    >
      {/* FIELD CONTENT */}
      <div className="w-full h-full flex items-center justify-center">
        {field.type === "Signature" && "✍️ Signature"}
        {field.type === "Initials" && "Initials"}
        {field.type === "Name" && "Name"}
        {field.type === "Date" && "Date"}
        {field.type === "Text" && (
          <input
            className="w-full h-full bg-transparent text-center outline-none"
            placeholder="Enter text"
            value={field.value || ""}
            onChange={(e) =>
              onUpdate(field.id, { value: e.target.value })
            }
          />
        )}
        {field.type === "Company Stamp" && "🏢 Stamp"}
      </div>

      {/* FLOATING TOOLBAR */}
      {active && (
        <div className="absolute -top-10 flex gap-2 bg-white border rounded-lg shadow px-2 py-1 text-xs">

          <button
            onClick={() => onDuplicate(field)}
            className="hover:text-purple-600"
          >
            Duplicate
          </button>

          <button
            onClick={() => onDelete(field.id)}
            className="hover:text-red-600"
          >
            Remove
          </button>

          <button className="hover:text-blue-600">
            Place on Pages
          </button>

        </div>
      )}
    </Rnd>
  );
}