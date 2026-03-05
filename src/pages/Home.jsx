import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Sign Documents <br />
            Online <span className="text-purple-600">Securely</span>
          </h1>

          <p className="text-gray-600 mb-8">
            Upload, sign, and share PDFs with full audit tracking.
            Streamline your workflow in minutes.
          </p>

          <div className="flex gap-4">
            <Link
              to="/login"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
            >
              Start Signing
            </Link>

            <Link
              to="/login"
              className="border px-6 py-3 rounded-lg text-gray-700"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-purple-100 rounded-3xl h-96 flex items-center justify-center text-5xl text-purple-600">
          📄✍️
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to go paperless?
        </h2>

        <Link
          to="/login"
          className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700"
        >
          Start Signing Free
        </Link>
      </section>

      <Footer />
    </div>
  );
}