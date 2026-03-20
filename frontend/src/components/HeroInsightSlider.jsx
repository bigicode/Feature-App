import dayjs from "dayjs";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Clock3,
  Flag,
  Radar,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useEffectEvent, useState } from "react";

import {
  deliveryStatusStyles,
  priorityStyles,
  reviewStatusStyles,
} from "../data/featureRequests";
import { cn } from "../utils/cn";

function buildSlides(summary, recentRequests) {
  const latestRequest = recentRequests[0];

  return [
    {
      id: "backlog-health",
      eyebrow: "Review queue",
      title: "Pending suggestions need product review",
      description:
        summary.pending > 0
          ? "The pending queue shows what has been suggested by users and still needs a product decision from the admin side."
          : "There are no pending user suggestions right now, which means the intake queue is fully reviewed.",
      highlightLabel: "Pending review",
      highlightValue: String(summary.pending).padStart(2, "0"),
      icon: Activity,
      stats: [
        { label: "Total in system", value: summary.total },
        { label: "High-priority pending", value: summary.highPriorityPending },
        { label: "Added this week", value: summary.createdThisWeek },
      ],
    },
    {
      id: "delivery-momentum",
      eyebrow: "Delivery momentum",
      title: "Accepted work is moving through delivery",
      description:
        summary.inProgress > 0
          ? "Once a suggestion is accepted, delivery status becomes the next operational signal. This helps separate review from execution."
          : "There is currently no accepted work in progress, which can signal a planning gap or a recently cleared sprint.",
      highlightLabel: "In progress",
      highlightValue: String(summary.inProgress).padStart(2, "0"),
      icon: Radar,
      stats: [
        { label: "Accepted overall", value: summary.accepted },
        { label: "Completed this month", value: summary.completedThisMonth },
        {
          label: "Pending vs. active",
          value:
            summary.pending + summary.inProgress > 0
              ? `${summary.pending}:${summary.inProgress}`
              : "0:0",
        },
      ],
    },
    {
      id: "priority-watch",
      eyebrow: "Priority watch",
      title:
        summary.highPriorityPending > 0
          ? "High-priority suggestions still need a decision"
          : "No urgent pending items are waiting",
      description:
        summary.highPriorityPending > 0
          ? "Use the admin board to accept, decline, or reframe these ideas before they create unnecessary backlog pressure."
          : "The urgent pending queue is currently under control, which creates room for cleaner prioritization across the rest of the intake flow.",
      highlightLabel: "Priority focus",
      highlightValue: String(summary.highPriorityPending).padStart(2, "0"),
      icon: Flag,
      stats: [
        { label: "Pending review", value: summary.pending },
        { label: "Declined overall", value: summary.declined },
        { label: "Added this week", value: summary.createdThisWeek },
      ],
    },
    {
      id: "recent-signal",
      eyebrow: "Recent signal",
      title: latestRequest
        ? latestRequest.title
        : "No feature requests have been created yet",
      description: latestRequest
        ? "The latest suggestion is a useful signal of what users are asking for right now, before the admin team decides what enters delivery."
        : "Once suggestions start coming in, the most recent one will appear here to make intake feel immediate and visible.",
      highlightLabel: latestRequest ? "Latest request" : "Backlog state",
      highlightValue: latestRequest ? dayjs(latestRequest.createdAt).format("MMM D") : "Empty",
      icon: Clock3,
      badge: latestRequest
        ? {
            reviewStatus: latestRequest.reviewStatus,
            deliveryStatus: latestRequest.deliveryStatus,
            priority: latestRequest.priority,
          }
        : null,
      stats: latestRequest
        ? [
            { label: "Created", value: dayjs(latestRequest.createdAt).format("MMM D, YYYY") },
            { label: "Review", value: latestRequest.reviewStatus },
            { label: "Priority", value: latestRequest.priority },
          ]
        : [
            { label: "Pending", value: summary.pending },
            { label: "In progress", value: summary.inProgress },
            { label: "Declined", value: summary.declined },
          ],
    },
  ];
}

function LoadingCard() {
  return (
    <div className="rounded-[30px] border border-sand-300/80 bg-white/72 p-6 shadow-soft backdrop-blur-sm">
      <div className="h-4 w-28 animate-pulse rounded-full bg-sand-200" />
      <div className="mt-6 h-10 w-40 animate-pulse rounded-2xl bg-sand-200" />
      <div className="mt-4 h-16 animate-pulse rounded-2xl bg-sand-100" />
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-24 animate-pulse rounded-[22px] bg-sand-100"
          />
        ))}
      </div>
    </div>
  );
}

export function HeroInsightSlider({ summary, recentRequests, isLoading }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = buildSlides(summary, recentRequests);
  const activeSlide = slides[activeIndex];

  const advanceSlide = useEffectEvent(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  });

  useEffect(() => {
    if (prefersReducedMotion || isPaused || slides.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      advanceSlide();
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [advanceSlide, isPaused, prefersReducedMotion, slides.length]);

  useEffect(() => {
    setActiveIndex((current) => {
      if (current < slides.length) {
        return current;
      }

      return 0;
    });
  }, [slides.length]);

  if (isLoading) {
    return <LoadingCard />;
  }

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="rounded-[30px] border border-sand-300/80 bg-white/72 p-6 shadow-soft backdrop-blur-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-clove-700">
            {activeSlide.eyebrow}
          </p>
          <p className="mt-3 text-sm font-medium text-clove-700">
            Slide {activeIndex + 1} of {slides.length}
          </p>
        </div>

        <div className="rounded-2xl bg-sand-50 p-3 ring-1 ring-inset ring-sand-200">
          <activeSlide.icon className="h-5 w-5 text-clove-800" />
        </div>
      </div>

      <div className="relative mt-5 min-h-[17rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.35, ease: "easeOut" }}
            className="space-y-5"
          >
            <div className="rounded-[24px] bg-sand-50 p-5 ring-1 ring-inset ring-sand-200">
              <p className="text-sm font-medium text-clove-700">
                {activeSlide.highlightLabel}
              </p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <p className="font-display text-5xl leading-none text-clove-900">
                  {activeSlide.highlightValue}
                </p>

                {activeSlide.badge ? (
                    <div className="flex flex-wrap justify-end gap-2">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
                          reviewStatusStyles[activeSlide.badge.reviewStatus],
                        )}
                      >
                        {activeSlide.badge.reviewStatus}
                      </span>
                      {activeSlide.badge.reviewStatus === "Accepted" ? (
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
                            deliveryStatusStyles[activeSlide.badge.deliveryStatus],
                          )}
                        >
                          {activeSlide.badge.deliveryStatus}
                        </span>
                      ) : null}
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
                        priorityStyles[activeSlide.badge.priority],
                      )}
                    >
                      {activeSlide.badge.priority}
                    </span>
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl leading-tight text-clove-900">
                {activeSlide.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-clove-700">
                {activeSlide.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {activeSlide.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[22px] border border-sand-200/80 bg-white/80 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-clove-700">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-clove-900">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${slide.title}`}
              className={cn(
                "h-2.5 rounded-full transition",
                index === activeIndex
                  ? "w-8 bg-clove-900"
                  : "w-2.5 bg-sand-300 hover:bg-clove-700/40",
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setActiveIndex((current) =>
                current === 0 ? slides.length - 1 : current - 1,
              )
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 bg-white/80 text-clove-900 transition hover:border-clove-700"
            aria-label="Previous insight"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setActiveIndex((current) => (current + 1) % slides.length)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 bg-white/80 text-clove-900 transition hover:border-clove-700"
            aria-label="Next insight"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
