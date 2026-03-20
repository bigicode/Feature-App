import { apiRequest } from "./client";

export async function submitPublicFeatureSuggestion(featureData) {
  const response = await apiRequest("/public/feature-requests", {
    method: "POST",
    body: JSON.stringify(featureData),
  });

  return response.data;
}

export async function getAdminFeatureRequests(filters = {}) {
  const searchParams = new URLSearchParams();

  if (filters.reviewStatus) {
    searchParams.set("reviewStatus", filters.reviewStatus);
  }

  if (filters.deliveryStatus) {
    searchParams.set("deliveryStatus", filters.deliveryStatus);
  }

  const query = searchParams.toString();
  const response = await apiRequest(
    `/admin/feature-requests${query ? `?${query}` : ""}`,
  );
  return response.data;
}

export async function getAdminFeatureRequestById(id) {
  const response = await apiRequest(`/admin/feature-requests/${id}`);
  return response.data;
}

export async function createAdminFeatureRequest(featureData) {
  const response = await apiRequest("/admin/feature-requests", {
    method: "POST",
    body: JSON.stringify(featureData),
  });

  return response.data;
}

export async function updateAdminFeatureRequest(id, featureData) {
  const response = await apiRequest(`/admin/feature-requests/${id}`, {
    method: "PUT",
    body: JSON.stringify(featureData),
  });

  return response.data;
}

export async function reviewAdminFeatureRequest(id, reviewData) {
  const response = await apiRequest(`/admin/feature-requests/${id}/review`, {
    method: "PATCH",
    body: JSON.stringify(reviewData),
  });

  return response.data;
}

export async function updateAdminDeliveryStatus(id, deliveryStatus) {
  const response = await apiRequest(
    `/admin/feature-requests/${id}/delivery-status`,
    {
      method: "PATCH",
      body: JSON.stringify({ deliveryStatus }),
    },
  );

  return response.data;
}

export async function deleteAdminFeatureRequest(id) {
  await apiRequest(`/admin/feature-requests/${id}`, {
    method: "DELETE",
  });
}
