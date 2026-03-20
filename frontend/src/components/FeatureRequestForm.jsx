import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Plus, RotateCcw } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import {
  DELIVERY_STATUS_OPTIONS,
  PRIORITY_OPTIONS,
  REVIEW_STATUS_OPTIONS,
} from "../data/featureRequests";
import { AppSelect } from "./ui/AppSelect";

const adminFeatureSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(3, "Title must be at least 3 characters.")
      .max(120, "Title must stay under 120 characters."),
    description: z
      .string()
      .trim()
      .min(10, "Description must be at least 10 characters.")
      .max(2000, "Description must stay under 2000 characters."),
    priority: z.enum(PRIORITY_OPTIONS),
    reviewStatus: z.enum(REVIEW_STATUS_OPTIONS),
    deliveryStatus: z.enum(DELIVERY_STATUS_OPTIONS),
    submitterName: z
      .string()
      .trim()
      .max(100, "Name must stay under 100 characters.")
      .optional()
      .or(z.literal("")),
    submitterEmail: z
      .email("A valid email is required.")
      .optional()
      .or(z.literal("")),
    adminNotes: z.string().trim().max(2000).optional().or(z.literal("")),
    declinedReason: z.string().trim().max(2000).optional().or(z.literal("")),
  })
  .superRefine((data, context) => {
    if (data.reviewStatus === "Declined" && !data.declinedReason?.trim()) {
      context.addIssue({
        code: "custom",
        path: ["declinedReason"],
        message: "Declined reason is required when declining a request.",
      });
    }
  });

const baseDefaultValues = {
  title: "",
  description: "",
  priority: "Medium",
  reviewStatus: "Accepted",
  deliveryStatus: "Backlog",
  submitterName: "",
  submitterEmail: "",
  adminNotes: "",
  declinedReason: "",
};

function buildDefaultValues(overrides = {}) {
  return {
    ...baseDefaultValues,
    ...overrides,
  };
}

function buildRequestValues(request) {
  return {
    title: request.title,
    description: request.description,
    priority: request.priority,
    reviewStatus: request.reviewStatus,
    deliveryStatus: request.deliveryStatus,
    submitterName: request.submitterName || "",
    submitterEmail: request.submitterEmail || "",
    adminNotes: request.adminNotes || "",
    declinedReason: request.declinedReason || "",
  };
}

export function FeatureRequestForm({
  selectedRequest,
  onSubmit,
  onReset,
  resetSignal,
  totalRequests,
  noteLabel = "Tracker volume",
  defaultValuesOverride,
}) {
  const defaultValues = useMemo(
    () => buildDefaultValues(defaultValuesOverride),
    [defaultValuesOverride],
  );
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(adminFeatureSchema),
    defaultValues,
  });

  const reviewStatus = watch("reviewStatus");

  useEffect(() => {
    if (reviewStatus !== "Accepted") {
      setValue("deliveryStatus", "Backlog");
    }
  }, [reviewStatus, setValue]);

  useEffect(() => {
    if (selectedRequest) {
      reset(buildRequestValues(selectedRequest));
      return;
    }

    reset(defaultValues);
  }, [defaultValues, reset, resetSignal, selectedRequest]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.48, delay: 0.32 }}
      className="rounded-[30px] border border-sand-200/85 bg-[linear-gradient(180deg,rgba(255,250,244,0.95),rgba(248,242,233,0.95))] p-6 shadow-card"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-clove-700">
            {selectedRequest ? "Admin editing" : "Admin creation"}
          </p>
          <h2 className="mt-3 font-display text-3xl text-clove-900">
            {selectedRequest ? "Manage feature request" : "Create managed request"}
          </h2>
        </div>

        <div className="rounded-2xl bg-white/85 p-3 ring-1 ring-inset ring-sand-200">
          {selectedRequest ? (
            <ArrowRight className="h-5 w-5 text-clove-800" />
          ) : (
            <Plus className="h-5 w-5 text-clove-800" />
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-clove-700">
        Admins can curate the full lifecycle here: review user suggestions,
        control delivery progression, and keep the record aligned with notes and
        decline context.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-clove-700">
            Feature title
          </span>
          <input
            {...register("title")}
            placeholder="Example: AI summary for duplicate requests"
            className="w-full rounded-[20px] border border-sand-300 bg-white/85 px-4 py-3 text-sm text-clove-900 outline-none transition placeholder:text-clove-700/70 focus:border-clove-700"
          />
          {errors.title ? (
            <span className="mt-2 block text-sm text-[#8a4c3b]">
              {errors.title.message}
            </span>
          ) : null}
        </label>

        <div className="grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-clove-700">
              Priority
            </span>
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <AppSelect
                  value={field.value}
                  onValueChange={field.onChange}
                  options={PRIORITY_OPTIONS}
                />
              )}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-clove-700">
              Review status
            </span>
            <Controller
              name="reviewStatus"
              control={control}
              render={({ field }) => (
                <AppSelect
                  value={field.value}
                  onValueChange={field.onChange}
                  options={REVIEW_STATUS_OPTIONS}
                />
              )}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-clove-700">
              Delivery status
            </span>
            <Controller
              name="deliveryStatus"
              control={control}
              render={({ field }) => (
                <AppSelect
                  value={field.value}
                  onValueChange={field.onChange}
                  options={DELIVERY_STATUS_OPTIONS}
                  disabled={reviewStatus !== "Accepted"}
                />
              )}
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-clove-700">
            Description
          </span>
          <textarea
            {...register("description")}
            rows="5"
            placeholder="Describe the feature request clearly so the admin team can assess it."
            className="w-full resize-none rounded-[24px] border border-sand-300 bg-white/85 px-4 py-3 text-sm leading-7 text-clove-900 outline-none transition placeholder:text-clove-700/70 focus:border-clove-700"
          />
          {errors.description ? (
            <span className="mt-2 block text-sm text-[#8a4c3b]">
              {errors.description.message}
            </span>
          ) : null}
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-clove-700">
              Submitter name
            </span>
            <input
              {...register("submitterName")}
              placeholder="Optional name from public suggestion"
              className="w-full rounded-[20px] border border-sand-300 bg-white/85 px-4 py-3 text-sm text-clove-900 outline-none transition placeholder:text-clove-700/70 focus:border-clove-700"
            />
            {errors.submitterName ? (
              <span className="mt-2 block text-sm text-[#8a4c3b]">
                {errors.submitterName.message}
              </span>
            ) : null}
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-clove-700">
              Submitter email
            </span>
            <input
              {...register("submitterEmail")}
              placeholder="Optional contact email"
              className="w-full rounded-[20px] border border-sand-300 bg-white/85 px-4 py-3 text-sm text-clove-900 outline-none transition placeholder:text-clove-700/70 focus:border-clove-700"
            />
            {errors.submitterEmail ? (
              <span className="mt-2 block text-sm text-[#8a4c3b]">
                {errors.submitterEmail.message}
              </span>
            ) : null}
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-clove-700">
            Admin notes
          </span>
          <textarea
            {...register("adminNotes")}
            rows="4"
            placeholder="Add internal notes for prioritization, scope, or follow-up."
            className="w-full resize-none rounded-[24px] border border-sand-300 bg-white/85 px-4 py-3 text-sm leading-7 text-clove-900 outline-none transition placeholder:text-clove-700/70 focus:border-clove-700"
          />
          {errors.adminNotes ? (
            <span className="mt-2 block text-sm text-[#8a4c3b]">
              {errors.adminNotes.message}
            </span>
          ) : null}
        </label>

        {reviewStatus === "Declined" ? (
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-clove-700">
              Declined reason
            </span>
            <textarea
              {...register("declinedReason")}
              rows="4"
              placeholder="Explain why this request is being declined."
              className="w-full resize-none rounded-[24px] border border-sand-300 bg-white/85 px-4 py-3 text-sm leading-7 text-clove-900 outline-none transition placeholder:text-clove-700/70 focus:border-clove-700"
            />
            {errors.declinedReason ? (
              <span className="mt-2 block text-sm text-[#8a4c3b]">
                {errors.declinedReason.message}
              </span>
            ) : null}
          </label>
        ) : null}

        {typeof totalRequests === "number" ? (
          <div className="rounded-[22px] bg-white/75 p-4 ring-1 ring-inset ring-sand-200">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clove-700">
              {noteLabel}
            </p>
            <p className="mt-2 text-sm leading-6 text-clove-700">
              Total requests in the system:{" "}
              <span className="font-semibold text-clove-900">
                {totalRequests}
              </span>
            </p>
          </div>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-clove-900 px-5 py-3 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-clove-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {selectedRequest ? "Save changes" : "Create request"}
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-300 bg-white/80 px-5 py-3 text-sm font-semibold text-clove-800 transition hover:border-clove-700"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>
      </form>
    </motion.section>
  );
}
