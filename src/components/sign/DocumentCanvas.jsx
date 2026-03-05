import { useState } from "react";
import { Rnd } from "react-rnd";
import { v4 as uuid } from "uuid";

export default function DocumentCanvas() {
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    setFields([
      ...fields,
      { id: uuid(), type, x: 100, y: 100, width: 150, height: 50 },
    ]);
  };

  return (
    <div className="flex-1 flex justify-center overflow-auto">
      <div className="relative bg-white w-[800px] h-[1100px] shadow-lg my-10">

        {fields.map((field) => (
          <Rnd
            key={field.id}
            default={{
              x: field.x,
              y: field.y,
              width: field.width,
              height: field.height,
            }}
            bounds="parent"
            className="border border-purple-500 bg-purple-50 flex items-center justify-center"
          >
            {field.type}
          </Rnd>
        ))}

      </div>
    </div>
  );
}