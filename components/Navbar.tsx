import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-gray-200 py-4 px-6 flex items-center justify-between border-b border-gray-800">
      {/* Logo / Title */}
      <Link href="/" className="text-xl font-semibold text-white tracking-tight">
        NarrowOne Hub
      </Link>

      {/* Nav Links */}
      <div className="space-x-6">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>
      </div>

      {/* Custom Styling */}
      <style>{`
        .nav-link {
          position: relative;
          font-size: 1rem;
          color: #a0aec0;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #ffffff;
        }
      `}</style>
    </nav>
  );
}
