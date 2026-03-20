import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { PRIORITY_OPTIONS } from "../data/featureRequests";
import { AppSelect } from "./ui/AppSelect";

const suggestionSchema = z.object({
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
  submitterName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must stay under 100 characters.")
    .optional()
    .or(z.literal("")),
  submitterEmail: z
    .email("A valid email is required.")
    .optional()
    .or(z.literal("")),
});

const defaultValues = {
  title: "",
  description: "",
  priority: "Medium",
  submitterName: "",
  submitterEmail: "",
};

export function PublicSuggestionForm({ onSubmit, resetSignal }) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(suggestionSchema),
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [reset, resetSignal]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-[32px] border border-sand-200/85 bg-[linear-gradient(180deg,rgba(255,250,244,0.95),rgba(248,242,233,0.95))] p-6 shadow-card sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-clove-700">
            Suggest a feature
          </p>
          <h2 className="mt-4 font-display text-3xl text-clove-900 sm:text-4xl">
            Share an idea with the product team
          </h2>
        </div>
        <div className="rounded-2xl bg-white/85 p-3 ring-1 ring-inset ring-sand-200">
          <Sparkles className="h-5 w-5 text-copper-500" />
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-clove-700">
        Clear suggestions make review easier. Describe the problem, the value,
        and how urgent it feels so the admin team can accept or decline it with
        confidence.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-clove-700">
            Feature title
          </span>
          <input
            {...register("title")}
            placeholder="Example: Let me export my roadmap view"
            className="w-full rounded-[20px] border border-sand-300 bg-white/85 px-4 py-3 text-sm text-clove-900 outline-none transition placeholder:text-clove-700/70 focus:border-clove-700"
          />
          {errors.title ? (
            <span className="mt-2 block text-sm text-[#8a4c3b]">
              {errors.title.message}
            </span>
          ) : null}
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-clove-700">
              Your name
            </span>
            <input
              {...register("submitterName")}
              placeholder="Optional"
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
              Your email
            </span>
            <input
              {...register("submitterEmail")}
              placeholder="Optional"
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
            Description
          </span>
          <textarea
            {...register("description")}
            rows="6"
            placeholder="Explain the problem, who it helps, and what the feature should do."
            className="w-full resize-none rounded-[24px] border border-sand-300 bg-white/85 px-4 py-3 text-sm leading-7 text-clove-900 outline-none transition placeholder:text-clove-700/70 focus:border-clove-700"
          />
          {errors.description ? (
            <span className="mt-2 block text-sm text-[#8a4c3b]">
              {errors.description.message}
            </span>
          ) : null}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-clove-900 px-6 py-3 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-clove-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Submit suggestion
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </motion.section>
  );
}
