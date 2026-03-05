export default function AuditModal({ logs, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-96 rounded-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400"
        >
          ✖
        </button>

        <h2 className="text-xl font-semibold mb-6">Audit Trail</h2>

        <div className="space-y-4 text-sm">
          {logs?.map((log, i) => (
            <div key={i}>
              <p className="font-medium">{log.action}</p>
              <p className="text-gray-500">
                {log.date} — {log.ip || ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}