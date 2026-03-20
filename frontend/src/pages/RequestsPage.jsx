import { useDeferredValue, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowRight, Plus } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

import {
  deleteAdminFeatureRequest,
  reviewAdminFeatureRequest,
  updateAdminDeliveryStatus,
} from "../api/featureRequests";
import { PageErrorPanel, PageLoadingPanel } from "../components/DataStates";
import { FeatureRequestList } from "../components/FeatureRequestList";
import { FilterBar } from "../components/FilterBar";
import { PageIntro } from "../components/PageIntro";
import {
  DELIVERY_STATUS_OPTIONS,
  REVIEW_FILTER_OPTIONS,
} from "../data/featureRequests";
import { featureQueryKeys, useFeatureRequests } from "../hooks/useFeatureRequests";

export function RequestsPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [activeReviewFilter, setActiveReviewFilter] = useState("All");
  const [activeDeliveryFilter, setActiveDeliveryFilter] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const deferredSearchValue = useDeferredValue(searchValue);

  const requestsQuery = useFeatureRequests({
    reviewStatus:
      activeReviewFilter === "All" ? undefined : activeReviewFilter,
    deliveryStatus:
      activeDeliveryFilter === "All" ? undefined : activeDeliveryFilter,
  });

  const reviewFeatureMutation = useMutation({
    mutationFn: ({ id, data }) => reviewAdminFeatureRequest(id, data),
    onSuccess: (_, variables) => {
      toast.success(variables.successMessage || "Review status updated.");
      queryClient.invalidateQueries({ queryKey: featureQueryKeys.all });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateDeliveryMutation = useMutation({
    mutationFn: ({ id, deliveryStatus }) =>
      updateAdminDeliveryStatus(id, deliveryStatus),
    onSuccess: () => {
      toast.success("Delivery status updated.");
      queryClient.invalidateQueries({ queryKey: featureQueryKeys.all });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const deleteFeatureMutation = useMutation({
    mutationFn: deleteAdminFeatureRequest,
    onSuccess: () => {
      toast.success("Feature request removed.");
      queryClient.invalidateQueries({ queryKey: featureQueryKeys.all });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const requests = requestsQuery.data || [];
  const filteredRequests = requests.filter((request) => {
    const normalizedSearch = deferredSearchValue.trim().toLowerCase();

    if (!normalizedSearch) {
      return true;
    }

    return `${request.title} ${request.description} ${request.submitterName || ""} ${request.submitterEmail || ""}`
      .toLowerCase()
      .includes(normalizedSearch);
  });

  async function handleReviewStatusChange(id, nextReviewStatus) {
    const currentRequest = requests.find((request) => request.id === id);

    if (!currentRequest || nextReviewStatus === currentRequest.reviewStatus) {
      return;
    }

    let declinedReason = currentRequest.declinedReason || "";

    if (nextReviewStatus === "Declined" && !declinedReason.trim()) {
      const providedReason = window.prompt(
        "Add a short decline reason for this suggestion:",
      );

      if (!providedReason?.trim()) {
        toast.error("A decline reason is required to decline a request.");
        return;
      }

      declinedReason = providedReason.trim();
    }

    return reviewFeatureMutation.mutateAsync({
      id,
      data: {
        reviewStatus: nextReviewStatus,
        adminNotes: currentRequest.adminNotes || "",
        declinedReason:
          nextReviewStatus === "Declined" ? declinedReason : "",
      },
      successMessage:
        nextReviewStatus === "Accepted"
          ? "Suggestion accepted."
          : nextReviewStatus === "Declined"
            ? "Suggestion declined."
            : "Suggestion moved back to pending review.",
    });
  }

  async function handleDeliveryStatusChange(id, nextDeliveryStatus) {
    const currentRequest = requests.find((request) => request.id === id);

    if (
      !currentRequest ||
      nextDeliveryStatus === currentRequest.deliveryStatus
    ) {
      return;
    }

    return updateDeliveryMutation.mutateAsync({
      id,
      deliveryStatus: nextDeliveryStatus,
    });
  }

  function handleDelete(id) {
    const currentRequest = requests.find((request) => request.id === id);
    const shouldDelete = window.confirm(
      `Delete "${currentRequest?.title || "this request"}" from the system?`,
    );

    if (!shouldDelete) {
      return;
    }

    deleteFeatureMutation.mutate(id);
  }

  return (
    <main>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <PageIntro
          eyebrow="Admin operations"
          title="Review, accept, and manage feature suggestions"
          description="This protected board is where admins turn public suggestions into managed work. Review the intake queue, accept or decline ideas with context, and move accepted requests through delivery."
          actions={[
            <Link
              key="new-request"
              to="/admin/requests/new"
              className="inline-flex items-center gap-2 rounded-full bg-clove-900 px-5 py-3 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-clove-800"
            >
              Create request
              <Plus className="h-4 w-4" />
            </Link>,
            <Link
              key="overview"
              to="/admin"
              className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white/75 px-5 py-3 text-sm font-semibold text-clove-800 transition hover:border-clove-700"
            >
              Back to overview
              <ArrowRight className="h-4 w-4" />
            </Link>,
          ]}
        />

        <section className="mt-8 rounded-[30px] border border-sand-200/85 bg-white/72 p-5 shadow-soft backdrop-blur-sm sm:p-6">
          <FilterBar
            filters={REVIEW_FILTER_OPTIONS}
            activeFilter={activeReviewFilter}
            deliveryFilter={activeDeliveryFilter}
            deliveryOptions={["All", ...DELIVERY_STATUS_OPTIONS]}
            searchValue={searchValue}
            onFilterChange={setActiveReviewFilter}
            onDeliveryFilterChange={setActiveDeliveryFilter}
            onSearchChange={setSearchValue}
          />
        </section>

        {requestsQuery.isPending ? <PageLoadingPanel rows={3} /> : null}
        {requestsQuery.isError ? (
          <PageErrorPanel
            message={
              requestsQuery.error?.message ||
              "The request board could not be loaded from the backend."
            }
          />
        ) : null}

        {!requestsQuery.isPending && !requestsQuery.isError ? (
          <FeatureRequestList
            requests={filteredRequests}
            onViewDetails={(id) => navigate(`/admin/requests/${id}`)}
            onDelete={handleDelete}
            onReviewStatusChange={handleReviewStatusChange}
            onDeliveryStatusChange={handleDeliveryStatusChange}
          />
        ) : null}
      </div>
    </main>
  );
}
