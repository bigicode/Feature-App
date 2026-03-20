import { Navigate, Route, Routes, useParams } from "react-router";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { HomePage } from "./pages/HomePage";
import { NewRequestPage } from "./pages/NewRequestPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { OverviewPage } from "./pages/OverviewPage";
import { RequestDetailsPage } from "./pages/RequestDetailsPage";
import { RequestsPage } from "./pages/RequestsPage";
import { SuggestFeaturePage } from "./pages/SuggestFeaturePage";

function LegacyRequestRedirect() {
  const { id } = useParams();

  return (
    <Navigate
      to={id ? `/admin/requests/${id}` : "/admin/requests"}
      replace
    />
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="suggest-feature" element={<SuggestFeaturePage />} />
        <Route path="admin/login" element={<AdminLoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="admin" element={<OverviewPage />} />
          <Route path="admin/requests" element={<RequestsPage />} />
          <Route path="admin/requests/new" element={<NewRequestPage />} />
          <Route path="admin/requests/:id" element={<RequestDetailsPage />} />
        </Route>

        <Route path="dashboard" element={<Navigate to="/admin" replace />} />
        <Route
          path="requests/new"
          element={<Navigate to="/admin/requests/new" replace />}
        />
        <Route
          path="requests"
          element={<Navigate to="/admin/requests" replace />}
        />
        <Route path="requests/:id" element={<LegacyRequestRedirect />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
