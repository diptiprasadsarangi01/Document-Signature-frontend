import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        
        {/* Left */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
            📄
          </div>
          <span className="font-medium text-gray-700">SignFlow</span>
        </div>

        {/* Center Links */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link to="#" className="hover:text-black">
            Privacy
          </Link>
          <Link to="#" className="hover:text-black">
            Terms
          </Link>
          <Link to="#" className="hover:text-black">
            Contact
          </Link>
          <Link to="#" className="hover:text-black">
            Help
          </Link>
        </div>

        {/* Right */}
        <div>
          © {new Date().getFullYear()} SignFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}