import { Outlet } from "react-router";

import { Footer } from "../components/layout/Footer";
import { GlassHeader } from "../components/layout/GlassHeader";

export function MainLayout() {
  return (
    <>
      <GlassHeader />
      <div className="min-h-screen pt-28 sm:pt-32">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
