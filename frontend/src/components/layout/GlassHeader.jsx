import { LogOut, Menu, Plus, ShieldCheck, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";

import { useAuth } from "../../context/AuthContext";
import { cn } from "../../utils/cn";

const publicNavigation = [
  { to: "/", label: "Home" },
  { to: "/suggest-feature", label: "Suggest Feature" },
  { to: "/admin/login", label: "Admin Login" },
];

const adminNavigation = [
  { to: "/admin", label: "Overview" },
  { to: "/admin/requests", label: "Requests" },
  { to: "/admin/requests/new", label: "New Request" },
];

export function GlassHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const { admin, isAuthenticated, logout } = useAuth();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const isAdminLoginRoute = location.pathname === "/admin/login";
  const isAdminRoute =
    location.pathname.startsWith("/admin") && !isAdminLoginRoute;
  const navigation = isAdminRoute ? adminNavigation : publicNavigation;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 16);

      if (currentScrollY < 64) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const delta = currentScrollY - lastScrollY.current;

      if (delta > 8) {
        setIsVisible(false);
      } else if (delta < -8) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  function handleLogout() {
    logout();
    navigate("/admin/login");
  }

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -120,
        opacity: isVisible ? 1 : 0.96,
      }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "rounded-[28px] border px-4 py-3 transition sm:px-5",
            isScrolled
              ? "border-white/45 bg-white/56 shadow-card backdrop-blur-xl"
              : "border-white/30 bg-white/42 shadow-soft backdrop-blur-md",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <Link to={isAdminRoute ? "/admin" : "/"} className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-clove-900 text-sm font-bold text-sand-50 shadow-soft">
                FT
              </div>
              <div>
                <p className="text-sm font-semibold text-clove-900">
                  Feature Track
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-clove-700">
                  {isAdminRoute
                    ? "Admin workspace"
                    : isAdminLoginRoute
                      ? "Secure access"
                      : "Public idea portal"}
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/" || item.to === "/admin"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition",
                      isActive
                        ? "bg-clove-900 text-sand-50 shadow-soft"
                        : "text-clove-700 hover:bg-white/70 hover:text-clove-900",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              {isAdminRoute ? (
                <>
                  {isAuthenticated && admin ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white/75 px-4 py-2 text-sm font-medium text-clove-800">
                      <ShieldCheck className="h-4 w-4 text-moss-500" />
                      {admin.name}
                    </div>
                  ) : null}
                  {isAuthenticated ? (
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="inline-flex items-center gap-2 rounded-full bg-clove-900 px-5 py-3 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-clove-800"
                    >
                      Logout
                      <LogOut className="h-4 w-4" />
                    </button>
                  ) : null}
                </>
              ) : (
                <Link
                  to="/suggest-feature"
                  className="inline-flex items-center gap-2 rounded-full bg-clove-900 px-5 py-3 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-clove-800"
                >
                  Suggest feature
                  <Plus className="h-4 w-4" />
                </Link>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-sand-300 bg-white/70 text-clove-900 md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {isMobileMenuOpen ? (
            <div className="mt-4 rounded-[24px] border border-white/35 bg-white/65 p-3 backdrop-blur-xl md:hidden">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/" || item.to === "/admin"}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-2xl px-4 py-3 text-sm font-medium transition",
                        isActive
                          ? "bg-clove-900 text-sand-50"
                          : "bg-white/60 text-clove-800",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              {isAdminRoute ? (
                isAuthenticated ? (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-clove-900 px-5 py-3 text-sm font-semibold text-sand-50"
                  >
                    Logout
                    <LogOut className="h-4 w-4" />
                  </button>
                ) : null
              ) : (
                <Link
                  to="/suggest-feature"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-clove-900 px-5 py-3 text-sm font-semibold text-sand-50"
                >
                  Suggest feature
                  <Plus className="h-4 w-4" />
                </Link>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </motion.header>
  );
}
