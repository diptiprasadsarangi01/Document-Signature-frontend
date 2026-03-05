import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function SignatureRequest() {

  const { documentId } = useParams();

  const [receivers, setReceivers] = useState([
    { name: "", email: "", role: "signer", order: 1 }
  ]);

  const addReceiver = () => {
    setReceivers([
      ...receivers,
      { name: "", email: "", role: "signer", order: receivers.length + 1 }
    ]);
  };

  const handleSubmit = async () => {

    await api.post("/signature-request", {
      documentId,
      receivers
    });

    alert("Signature request sent");
  };

  return (
    <div className="max-w-3xl mx-auto">

      <h1 className="text-2xl font-semibold mb-6">
        Create your signature request
      </h1>

      {receivers.map((r, i) => (

        <div key={i} className="flex gap-3 mb-4">

          <input
            placeholder="Name"
            value={r.name}
            onChange={(e) => {
              const copy = [...receivers];
              copy[i].name = e.target.value;
              setReceivers(copy);
            }}
          />

          <input
            placeholder="Email"
            value={r.email}
            onChange={(e) => {
              const copy = [...receivers];
              copy[i].email = e.target.value;
              setReceivers(copy);
            }}
          />

          <select
            value={r.role}
            onChange={(e) => {
              const copy = [...receivers];
              copy[i].role = e.target.value;
              setReceivers(copy);
            }}
          >
            <option value="signer">Signer</option>
            <option value="validator">Validator</option>
            <option value="witness">Witness</option>
          </select>

        </div>

      ))}

      <button onClick={addReceiver}>
        Add receiver
      </button>

      <button onClick={handleSubmit}>
        Apply
      </button>

    </div>
  );
}