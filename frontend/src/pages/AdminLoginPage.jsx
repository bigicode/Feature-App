import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router";
import { z } from "zod";

import { loginAdmin } from "../api/adminAuth";
import { PageIntro } from "../components/PageIntro";
import { useAuth } from "../context/AuthContext";

const loginSchema = z.object({
  email: z.email("A valid email is required."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters."),
});

export function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: loginAdmin,
    onSuccess: (session) => {
      login(session);
      toast.success("Admin login successful.");
      navigate(location.state?.from || "/admin", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <main>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <PageIntro
          eyebrow="Admin access"
          title="Enter the review workspace"
          description="This protected area is for admins who accept, decline, and manage feature suggestions after they have been submitted by users."
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_360px]">
          <section className="rounded-[32px] border border-sand-200/85 bg-[linear-gradient(180deg,rgba(255,250,244,0.95),rgba(248,242,233,0.95))] p-6 shadow-card sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-clove-700">
                  Sign in
                </p>
                <h2 className="mt-4 font-display text-3xl text-clove-900 sm:text-4xl">
                  Admin login
                </h2>
              </div>
              <div className="rounded-2xl bg-white/85 p-3 ring-1 ring-inset ring-sand-200">
                <ShieldCheck className="h-5 w-5 text-moss-500" />
              </div>
            </div>

            <form
              onSubmit={handleSubmit((values) => loginMutation.mutateAsync(values))}
              className="mt-6 space-y-4"
            >
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-clove-700">
                  Email
                </span>
                <input
                  {...register("email")}
                  className="w-full rounded-[20px] border border-sand-300 bg-white/85 px-4 py-3 text-sm text-clove-900 outline-none transition focus:border-clove-700"
                />
                {errors.email ? (
                  <span className="mt-2 block text-sm text-[#8a4c3b]">
                    {errors.email.message}
                  </span>
                ) : null}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-clove-700">
                  Password
                </span>
                <input
                  {...register("password")}
                  type="password"
                  className="w-full rounded-[20px] border border-sand-300 bg-white/85 px-4 py-3 text-sm text-clove-900 outline-none transition focus:border-clove-700"
                />
                {errors.password ? (
                  <span className="mt-2 block text-sm text-[#8a4c3b]">
                    {errors.password.message}
                  </span>
                ) : null}
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-clove-900 px-6 py-3 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-clove-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Enter admin workspace
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </section>

          <section className="rounded-[30px] border border-sand-200/85 bg-white/72 p-6 shadow-soft backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clove-700">
              Admin role
            </p>
            <div className="mt-5 space-y-4">
              <div className="rounded-[22px] bg-sand-50 p-4 ring-1 ring-inset ring-sand-200">
                <p className="text-sm font-semibold text-clove-900">Review</p>
                <p className="mt-2 text-sm leading-6 text-clove-700">
                  Accept or decline new suggestions with rationale and notes.
                </p>
              </div>
              <div className="rounded-[22px] bg-sand-50 p-4 ring-1 ring-inset ring-sand-200">
                <p className="text-sm font-semibold text-clove-900">Manage</p>
                <p className="mt-2 text-sm leading-6 text-clove-700">
                  Move accepted work through backlog, in progress, and completed states.
                </p>
              </div>
              <div className="rounded-[22px] bg-sand-50 p-4 ring-1 ring-inset ring-sand-200">
                <p className="text-sm font-semibold text-clove-900">Trace</p>
                <p className="mt-2 text-sm leading-6 text-clove-700">
                  Keep submitter context, decline reasons, and admin notes in one place.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
