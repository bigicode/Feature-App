import { useMutation } from "@tanstack/react-query";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import { submitPublicFeatureSuggestion } from "../api/featureRequests";
import { PageIntro } from "../components/PageIntro";
import { PublicSuggestionForm } from "../components/PublicSuggestionForm";

export function SuggestFeaturePage() {
  const [resetSignal, setResetSignal] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const suggestionMutation = useMutation({
    mutationFn: submitPublicFeatureSuggestion,
    onSuccess: () => {
      toast.success("Suggestion submitted successfully.");
      setIsSubmitted(true);
      setResetSignal((current) => current + 1);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <main>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <PageIntro
          eyebrow="Public intake"
          title="Submit a feature suggestion"
          description="Share a well-framed idea with the product team. Your suggestion will enter the admin review queue, where it can be accepted into delivery or declined with context."
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_360px]">
          <PublicSuggestionForm
            onSubmit={(values) => suggestionMutation.mutateAsync(values)}
            resetSignal={resetSignal}
          />

          <section className="space-y-6">
            <div className="rounded-[30px] border border-sand-200/85 bg-white/72 p-6 shadow-soft backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clove-700">
                Review path
              </p>
              <div className="mt-5 space-y-4">
                <div className="rounded-[22px] bg-sand-50 p-4 ring-1 ring-inset ring-sand-200">
                  <p className="text-sm font-semibold text-clove-900">1. Submitted</p>
                  <p className="mt-2 text-sm leading-6 text-clove-700">
                    Your idea lands in the admin queue as pending review.
                  </p>
                </div>
                <div className="rounded-[22px] bg-sand-50 p-4 ring-1 ring-inset ring-sand-200">
                  <p className="text-sm font-semibold text-clove-900">2. Reviewed</p>
                  <p className="mt-2 text-sm leading-6 text-clove-700">
                    Admins accept or decline the suggestion with notes and rationale.
                  </p>
                </div>
                <div className="rounded-[22px] bg-sand-50 p-4 ring-1 ring-inset ring-sand-200">
                  <p className="text-sm font-semibold text-clove-900">3. Managed</p>
                  <p className="mt-2 text-sm leading-6 text-clove-700">
                    Accepted requests move into backlog, in progress, and completed states.
                  </p>
                </div>
              </div>
            </div>

            {isSubmitted ? (
              <div className="rounded-[30px] border border-[#bcd0bb] bg-[#edf5ed] p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-moss-500" />
                  <p className="text-sm font-semibold text-clove-900">
                    Suggestion received
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-clove-700">
                  Thanks for sharing an idea. The admin team can now review it in
                  the protected workspace.
                </p>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
}
