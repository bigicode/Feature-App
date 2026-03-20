import { getStoredAdminToken } from "../utils/authStorage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export async function apiRequest(path, options = {}) {
  const token = getStoredAdminToken();
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const contentType = response.headers.get("content-type") || "";
  const payload = contentType.includes("application/json")
    ? await response.json()
    : null;

  if (!response.ok) {
    throw new Error(payload?.message || "Request failed.");
  }

  return payload;
}
