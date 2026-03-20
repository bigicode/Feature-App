import dayjs from "dayjs";
import {
  ArrowRight,
  CalendarDays,
  Mail,
  Trash2,
  UserRound,
} from "lucide-react";
import { motion } from "motion/react";

import {
  DELIVERY_STATUS_OPTIONS,
  REVIEW_STATUS_OPTIONS,
  deliveryStatusStyles,
  priorityStyles,
  reviewStatusStyles,
} from "../data/featureRequests";
import { AppSelect } from "./ui/AppSelect";

export function FeatureRequestCard({
  request,
  index,
  onViewDetails,
  onDelete,
  onReviewStatusChange,
  onDeliveryStatusChange,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.2 + index * 0.06 }}
      className="group rounded-[30px] border border-sand-200/80 bg-white/75 p-5 shadow-soft backdrop-blur-sm sm:p-6"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${reviewStatusStyles[request.reviewStatus]}`}
            >
              {request.reviewStatus}
            </span>

            {request.reviewStatus === "Accepted" ? (
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${deliveryStatusStyles[request.deliveryStatus]}`}
              >
                {request.deliveryStatus}
              </span>
            ) : null}

            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${priorityStyles[request.priority]}`}
            >
              {request.priority} priority
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-clove-900">
            {request.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-clove-700 sm:text-[15px]">
            {request.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-clove-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-white/85 px-3 py-2">
              <UserRound className="h-4 w-4 text-copper-500" />
              {request.submitterName || "Anonymous"}
            </span>
            {request.submitterEmail ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-white/85 px-3 py-2">
                <Mail className="h-4 w-4 text-copper-500" />
                {request.submitterEmail}
              </span>
            ) : null}
          </div>
        </div>

        <div className="grid gap-3 lg:w-[240px]">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-clove-700">
              Review status
            </span>
            <AppSelect
              value={request.reviewStatus}
              onValueChange={(value) => onReviewStatusChange(request.id, value)}
              options={REVIEW_STATUS_OPTIONS}
              triggerClassName="border-sand-200 bg-sand-50/85"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-clove-700">
              Delivery status
            </span>
            <AppSelect
              value={request.deliveryStatus}
              disabled={request.reviewStatus !== "Accepted"}
              onValueChange={(value) =>
                onDeliveryStatusChange(request.id, value)
              }
              options={DELIVERY_STATUS_OPTIONS}
              triggerClassName="border-sand-200 bg-sand-50/85"
            />
          </label>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-white/85 px-3 py-2 text-xs font-medium text-clove-700">
          <CalendarDays className="h-4 w-4 text-copper-500" />
          Submitted {dayjs(request.createdAt).format("MMM D, YYYY")}
        </div>

        <button
          type="button"
          onClick={() => onViewDetails(request.id)}
          className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-white/85 px-4 py-2 text-sm font-medium text-clove-900 transition hover:border-clove-700"
        >
          <ArrowRight className="h-4 w-4" />
          View details
        </button>

        <button
          type="button"
          onClick={() => onDelete(request.id)}
          className="inline-flex items-center gap-2 rounded-full border border-[#d9b3a5] bg-[#f6e9e2] px-4 py-2 text-sm font-medium text-[#7a4638] transition hover:border-[#b67864]"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>
    </motion.article>
  );
}
