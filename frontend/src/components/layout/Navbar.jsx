import { Link, useLocation } from "react-router-dom";
import { Users } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-surface-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/users" className="flex items-center gap-2.5 group">
            <span
              className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center
                             group-hover:bg-brand-700 transition-colors duration-150"
            >
              <Users size={16} className="text-white" />
            </span>
            <span className="font-display font-700 text-surface-900 text-base tracking-tight">
              X<span className="text-brand-600">.</span>Users
            </span>
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              to="/users"
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150
                ${
                  location.pathname === "/users"
                    ? "bg-brand-50 text-brand-700"
                    : "text-surface-600 hover:text-surface-900 hover:bg-surface-100"
                }`}
            >
              All Users
            </Link>
            <Link
              to="/users/add"
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150
                ${
                  location.pathname === "/users/add"
                    ? "bg-brand-50 text-brand-700"
                    : "text-surface-600 hover:text-surface-900 hover:bg-surface-100"
                }`}
            >
              Add User
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
