export default function PageSidebar({ pages = 5 }) {
  return (
    <div className="w-24 bg-white border-r p-3 space-y-4">
      {Array.from({ length: pages }).map((_, i) => (
        <div
          key={i}
          className="border rounded-lg h-24 flex items-center justify-center cursor-pointer hover:border-purple-500"
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}