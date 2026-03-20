import { apiRequest } from "./client";

export async function loginAdmin(credentials) {
  const response = await apiRequest("/admin/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

  return response.data;
}

export async function getCurrentAdmin() {
  const response = await apiRequest("/admin/auth/me");
  return response.data;
}
