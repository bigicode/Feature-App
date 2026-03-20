import { ArrowRight, ChartColumnIncreasing, Files, Plus } from "lucide-react";
import { Link } from "react-router";

const actions = [
  {
    title: "Create a new request",
    description:
      "Capture a managed request directly from the admin workspace.",
    to: "/admin/requests/new",
    icon: Plus,
  },
  {
    title: "Review the request board",
    description:
      "Accept, decline, and move accepted requests through delivery states.",
    to: "/admin/requests",
    icon: Files,
  },
  {
    title: "Track delivery health",
    description:
      "Use the overview to keep review load and delivery momentum visible.",
    to: "/admin",
    icon: ChartColumnIncreasing,
  },
];

export function QuickActionsPanel() {
  return (
    <section className="rounded-[30px] border border-sand-200/85 bg-white/72 p-6 shadow-soft backdrop-blur-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clove-700">
        Quick actions
      </p>
      <h2 className="mt-3 font-display text-3xl text-clove-900">
        Move through the workflow with intention
      </h2>

      <div className="mt-6 space-y-4">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.to}
            className="flex items-start justify-between gap-4 rounded-[24px] border border-sand-200/80 bg-sand-50/70 p-5 transition hover:border-clove-700 hover:bg-white/90"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white/90 p-3 ring-1 ring-inset ring-sand-200">
                <action.icon className="h-5 w-5 text-clove-900" />
              </div>
              <div>
                <p className="text-base font-semibold text-clove-900">
                  {action.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-clove-700">
                  {action.description}
                </p>
              </div>
            </div>

            <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-clove-700" />
          </Link>
        ))}
      </div>
    </section>
  );
}
