import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BarChart, Users, Calendar, FileText, DollarSign, LogOut } from "lucide-react";

const adminNavItems = [
  { href: "/admin", icon: <BarChart className="mr-2 h-4 w-4" />, label: "Overview" },
  { href: "/admin/events", icon: <Calendar className="mr-2 h-4 w-4" />, label: "Events" },
  { href: "/admin/spr", icon: <FileText className="mr-2 h-4 w-4" />, label: "SPR" },
  { href: "/admin/finance", icon: <DollarSign className="mr-2 h-4 w-4" />, label: "Finance" },
  { href: "/admin/work", icon: <Users className="mr-2 h-4 w-4" />, label: "Assigned Work" },
];

const userNavItems = [
  { href: "/dashboard", icon: <Users className="mr-2 h-4 w-4" />, label: "Profile" },
  { href: "/dashboard/awards", icon: <FileText className="mr-2 h-4 w-4" />, label: "Awards" },
  { href: "/dashboard/payments", icon: <DollarSign className="mr-2 h-4 w-4" />, label: "Payments" },
];

function AdminLayout({ children }) {
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <aside className="w-full lg:w-64 bg-white p-4 shadow-md">
        <nav className="space-y-2">
          {adminNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-md ${
                location.pathname === item.href
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-gray-50">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </button>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-4 lg:p-8">
        <div className="bg-white shadow rounded-lg p-6">{children}</div>
      </main>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function UserLayout({ children }) {
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <aside className="w-full lg:w-64 bg-white p-4 shadow-md">
        <nav className="space-y-2">
          {userNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-md ${
                location.pathname === item.href
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-gray-50">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </button>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-4 lg:p-8">
        <div className="bg-white shadow rounded-lg p-6">{children}</div>
      </main>
    </div>
  );
}

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function DashboardLayout({ children, isAdmin = false }) {
  return isAdmin ? <AdminLayout>{children}</AdminLayout> : <UserLayout>{children}</UserLayout>;
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isAdmin: PropTypes.bool,
};
