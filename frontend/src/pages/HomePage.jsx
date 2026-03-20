import { ArrowRight, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Link } from "react-router";

import { PageIntro } from "../components/PageIntro";

const featurePoints = [
  {
    title: "Public submission flow",
    description:
      "Anyone can propose a feature through a clean intake form without touching the admin workspace.",
    icon: Sparkles,
  },
  {
    title: "Admin review workflow",
    description:
      "Admins can accept or decline suggestions, record reasons, and keep the pipeline accountable.",
    icon: ShieldCheck,
  },
  {
    title: "Delivery management",
    description:
      "Accepted requests continue into backlog, in-progress, and completed delivery stages.",
    icon: Workflow,
  },
];

export function HomePage() {
  return (
    <main>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <PageIntro
          eyebrow="Feature suggestion portal"
          title="Collect better ideas from users and review them with a cleaner admin workflow"
          description="This public portal lets users suggest features while the admin workspace handles acceptance, decline decisions, and delivery management. The result is a more professional intake pipeline from suggestion to shipped work."
          actions={[
            <Link
              key="suggest"
              to="/suggest-feature"
              className="inline-flex items-center gap-2 rounded-full bg-clove-900 px-5 py-3 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-clove-800"
            >
              Suggest a feature
              <ArrowRight className="h-4 w-4" />
            </Link>,
            <Link
              key="login"
              to="/admin/login"
              className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white/75 px-5 py-3 text-sm font-semibold text-clove-800 transition hover:border-clove-700"
            >
              Admin login
              <ShieldCheck className="h-4 w-4" />
            </Link>,
          ]}
        />

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          {featurePoints.map((point) => (
            <article
              key={point.title}
              className="rounded-[30px] border border-sand-200/85 bg-white/72 p-6 shadow-soft backdrop-blur-sm"
            >
              <div className="rounded-2xl bg-sand-50 p-3 ring-1 ring-inset ring-sand-200 w-fit">
                <point.icon className="h-5 w-5 text-clove-900" />
              </div>
              <h2 className="mt-5 font-display text-3xl text-clove-900">
                {point.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-clove-700">
                {point.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
