import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router";

import {
  deleteAdminFeatureRequest,
  updateAdminFeatureRequest,
} from "../api/featureRequests";
import { PageErrorPanel, PageLoadingPanel } from "../components/DataStates";
import { FeatureRequestForm } from "../components/FeatureRequestForm";
import { PageIntro } from "../components/PageIntro";
import { RequestMetaPanel } from "../components/RequestMetaPanel";
import { featureQueryKeys, useFeatureRequest } from "../hooks/useFeatureRequests";

export function RequestDetailsPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [resetSignal, setResetSignal] = useState(0);

  const requestQuery = useFeatureRequest(id);

  const updateFeatureMutation = useMutation({
    mutationFn: ({ id: featureId, data }) =>
      updateAdminFeatureRequest(featureId, data),
    onSuccess: () => {
      toast.success("Feature request updated.");
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
      navigate("/admin/requests");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const request = requestQuery.data;

  return (
    <main>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <PageIntro
          eyebrow="Request details"
          title={request ? request.title : "Inspect and refine the request"}
          description={
            request
              ? request.description
              : "Review the full metadata for this request and keep it aligned with delivery."
          }
          actions={[
            <Link
              key="back"
              to="/admin/requests"
              className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white/75 px-5 py-3 text-sm font-semibold text-clove-800 transition hover:border-clove-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to requests
            </Link>,
          ]}
        />

        {requestQuery.isPending ? <PageLoadingPanel rows={2} /> : null}
        {requestQuery.isError ? (
          <PageErrorPanel
            title="Unable to open request"
            message={
              requestQuery.error?.message ||
              "The selected feature request could not be loaded."
            }
          />
        ) : null}

        {!requestQuery.isPending && !requestQuery.isError && request ? (
          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.75fr)_minmax(360px,0.9fr)]">
            <div className="space-y-6">
              <RequestMetaPanel request={request} />

              <section className="rounded-[30px] border border-[#dfbdae] bg-[#fbefe9] p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7a4638]">
                  Destructive action
                </p>
                <h2 className="mt-3 font-display text-3xl text-clove-900">
                  Remove this request if it is no longer needed
                </h2>
                <p className="mt-4 text-sm leading-7 text-clove-700">
                  Deleting removes the item from the board and the database. Use
                  this only when the request should fully disappear from the
                  workflow.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const shouldDelete = window.confirm(
                      `Delete "${request.title}" from the system?`,
                    );

                    if (shouldDelete) {
                      deleteFeatureMutation.mutate(request.id);
                    }
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#c88e7a] bg-[#f6e5de] px-5 py-3 text-sm font-semibold text-[#7a4638] transition hover:border-[#a96954]"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete request
                </button>
              </section>
            </div>

            <FeatureRequestForm
              selectedRequest={request}
              onSubmit={(values) =>
                updateFeatureMutation.mutateAsync({
                  id: request.id,
                  data: values,
                })
              }
              onReset={() => setResetSignal((current) => current + 1)}
              resetSignal={resetSignal}
              noteLabel="Current request"
            />
          </div>
        ) : null}
      </div>
    </main>
  );
}
