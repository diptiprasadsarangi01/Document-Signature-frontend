export default function PlaceOnPagesModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-96 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">
          Place Field On
        </h2>

        {[
          "Only this page",
          "All pages",
          "All pages except last",
          "Last page only",
          "Custom range",
        ].map((option, i) => (
          <div
            key={i}
            className="border p-3 rounded-lg mb-3 cursor-pointer hover:bg-purple-50"
          >
            {option}
          </div>
        ))}

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg mt-4">
          Apply
        </button>
      </div>
    </div>
  );
}