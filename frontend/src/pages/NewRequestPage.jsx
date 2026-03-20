import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

import { createAdminFeatureRequest } from "../api/featureRequests";
import { FeatureRequestForm } from "../components/FeatureRequestForm";
import { PageIntro } from "../components/PageIntro";
import { StyleNotes } from "../components/StyleNotes";
import { featureQueryKeys, useFeatureSummary } from "../hooks/useFeatureRequests";

export function NewRequestPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [resetSignal, setResetSignal] = useState(0);
  const summaryQuery = useFeatureSummary();

  const createFeatureMutation = useMutation({
    mutationFn: createAdminFeatureRequest,
    onSuccess: (feature) => {
      toast.success("Managed request created.");
      queryClient.invalidateQueries({ queryKey: featureQueryKeys.all });
      navigate(`/admin/requests/${feature.id}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <main>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <PageIntro
          eyebrow="Admin creation"
          title="Create a managed request from the admin workspace"
          description="Use this screen when the team wants to create work directly, or when a public suggestion needs to be entered with richer admin context from the start."
          actions={[
            <Link
              key="requests"
              to="/admin/requests"
              className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white/75 px-5 py-3 text-sm font-semibold text-clove-800 transition hover:border-clove-700"
            >
              Open request board
              <ArrowRight className="h-4 w-4" />
            </Link>,
          ]}
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_360px]">
          <FeatureRequestForm
            onSubmit={(values) => createFeatureMutation.mutateAsync(values)}
            onReset={() => setResetSignal((current) => current + 1)}
            resetSignal={resetSignal}
            totalRequests={summaryQuery.data?.length}
            noteLabel="Managed volume"
          />
          <StyleNotes />
        </div>
      </div>
    </main>
  );
}
