import { Link } from "react-router";
import { useLocation } from "react-router";

const publicFooterLinks = [
  { to: "/", label: "Home" },
  { to: "/suggest-feature", label: "Suggest Feature" },
  { to: "/admin/login", label: "Admin Login" },
];

const adminFooterLinks = [
  { to: "/admin", label: "Overview" },
  { to: "/admin/requests", label: "Requests" },
  { to: "/admin/requests/new", label: "New Request" },
];

export function Footer() {
  const location = useLocation();
  const year = new Date().getFullYear();
  const isAdminRoute =
    location.pathname.startsWith("/admin") &&
    location.pathname !== "/admin/login";
  const footerLinks = isAdminRoute ? adminFooterLinks : publicFooterLinks;

  return (
    <footer className="mt-16 border-t border-white/40 bg-white/28 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 lg:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-2xl text-clove-900">Feature Track</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-clove-700">
            {isAdminRoute
              ? "A warm admin workspace for reviewing, accepting, declining, and managing feature suggestions."
              : "A professional portal for collecting feature ideas and routing them into a clean admin review workflow."}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-10">
          <nav className="flex flex-wrap gap-4">
            {footerLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-clove-700 transition hover:text-clove-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-clove-700">
            {year} Feature Track. React, Express, Prisma, and MySQL.
          </p>
        </div>
      </div>
    </footer>
  );
}
