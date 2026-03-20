import { useNavigate } from "react-router";

import { PageErrorPanel, PageLoadingPanel } from "../components/DataStates";
import { HeroPanel } from "../components/HeroPanel";
import { QuickActionsPanel } from "../components/QuickActionsPanel";
import { RecentRequestsPanel } from "../components/RecentRequestsPanel";
import { SummaryCards } from "../components/SummaryCards";
import { useFeatureSummary } from "../hooks/useFeatureRequests";
import { buildFeatureSummary } from "../utils/featureSummary";

export function OverviewPage() {
  const navigate = useNavigate();
  const featuresQuery = useFeatureSummary();
  const requests = featuresQuery.data || [];
  const summary = buildFeatureSummary(requests);
  const recentRequests = requests.slice(0, 3);

  return (
    <main>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <HeroPanel
          summary={summary}
          recentRequests={recentRequests}
          isLoading={featuresQuery.isPending}
          onPrimaryAction={() => navigate("/admin/requests/new")}
          onSecondaryAction={() => navigate("/admin/requests")}
          primaryLabel="Create managed request"
          secondaryLabel="Open review board"
        />

        <SummaryCards summary={summary} />

        {featuresQuery.isPending ? <PageLoadingPanel rows={2} /> : null}
        {featuresQuery.isError ? (
          <PageErrorPanel
            message={
              featuresQuery.error?.message ||
              "The overview could not be loaded from the backend."
            }
          />
        ) : null}

        {!featuresQuery.isPending && !featuresQuery.isError ? (
          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
            <RecentRequestsPanel requests={recentRequests} />
            <QuickActionsPanel />
          </div>
        ) : null}
      </div>
    </main>
  );
}
