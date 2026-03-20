import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main>
      <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-start justify-center px-5 py-10 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clove-700">
          404
        </p>
        <h1 className="mt-4 font-display text-5xl text-clove-900">
          This page slipped out of the workflow
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-clove-700 sm:text-base">
          The page you are looking for does not exist, or the route has changed.
          Head back to the overview and continue from there.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-clove-900 px-5 py-3 text-sm font-semibold text-sand-50 shadow-soft"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to overview
        </Link>
      </div>
    </main>
  );
}
