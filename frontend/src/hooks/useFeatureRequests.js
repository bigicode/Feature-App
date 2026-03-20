import { useQuery } from "@tanstack/react-query";

import {
  getAdminFeatureRequestById,
  getAdminFeatureRequests,
} from "../api/featureRequests";

export const featureQueryKeys = {
  all: ["admin-feature-requests"],
  summary: () => [...featureQueryKeys.all, "summary"],
  list: (filters) => [
    ...featureQueryKeys.all,
    "list",
    filters?.reviewStatus || "All",
    filters?.deliveryStatus || "All",
  ],
  detail: (id) => [...featureQueryKeys.all, "detail", id],
};

export function useFeatureSummary() {
  return useQuery({
    queryKey: featureQueryKeys.summary(),
    queryFn: () => getAdminFeatureRequests(),
  });
}

export function useFeatureRequests(filters = {}) {
  return useQuery({
    queryKey: featureQueryKeys.list(filters),
    queryFn: () => getAdminFeatureRequests(filters),
  });
}

export function useFeatureRequest(id) {
  return useQuery({
    queryKey: featureQueryKeys.detail(id),
    queryFn: () => getAdminFeatureRequestById(id),
    enabled: Boolean(id),
  });
}
