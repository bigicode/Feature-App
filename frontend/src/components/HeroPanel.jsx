import { ArrowRight, Plus, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { HeroInsightSlider } from "./HeroInsightSlider";

export function HeroPanel({
  summary,
  recentRequests,
  isLoading,
  onPrimaryAction,
  onSecondaryAction,
  primaryLabel = "Create feature",
  secondaryLabel = "Open request board",
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[34px] border border-sand-200/85 bg-[linear-gradient(135deg,rgba(255,250,244,0.95),rgba(243,235,224,0.95))] p-6 shadow-card sm:p-8 lg:p-10"
    >
      <div className="absolute -left-16 bottom-[-5rem] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(60,36,21,0.18)_0%,rgba(60,36,21,0)_72%)]" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(250,245,235,0.96)_0%,rgba(250,245,235,0)_70%)]" />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white/70 px-4 py-2 text-sm font-medium text-clove-800 shadow-soft backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-copper-500" />
            Calm product command view
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-[-0.03em] text-clove-900 sm:text-5xl lg:text-6xl">
            Keep feature intake, backlog health, and delivery momentum visible
            in one refined workspace.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-clove-700 sm:text-lg">
            Feature Track gives product teams a calmer way to collect ideas,
            surface urgent requests, and keep work moving without letting the
            board turn into noise. Every section is designed to make decisions
            feel more deliberate.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onPrimaryAction}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clove-900 px-6 py-3 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-clove-800"
            >
              {primaryLabel}
              <Plus className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={onSecondaryAction}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-300 bg-white/75 px-6 py-3 text-sm font-semibold text-clove-800 backdrop-blur-sm transition hover:border-clove-700"
            >
              {secondaryLabel}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <HeroInsightSlider
          summary={summary}
          recentRequests={recentRequests}
          isLoading={isLoading}
        />
      </div>
    </motion.section>
  );
}
