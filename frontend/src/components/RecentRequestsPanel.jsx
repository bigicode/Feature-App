import dayjs from "dayjs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import {
  deliveryStatusStyles,
  priorityStyles,
  reviewStatusStyles,
} from "../data/featureRequests";

export function RecentRequestsPanel({ requests }) {
  return (
    <section className="rounded-[30px] border border-sand-200/85 bg-white/72 p-6 shadow-soft backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clove-700">
            Recent requests
          </p>
          <h2 className="mt-3 font-display text-3xl text-clove-900">
            Fresh signals from the backlog
          </h2>
        </div>

        <Link
          to="/admin/requests"
          className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white/75 px-4 py-2 text-sm font-semibold text-clove-800 transition hover:border-clove-700"
        >
          Open board
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        {requests.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-sand-300 bg-sand-50/80 p-6">
            <p className="font-semibold text-clove-900">No requests yet</p>
            <p className="mt-2 text-sm leading-6 text-clove-700">
              No public suggestions or admin-created requests have landed yet.
              Once the intake flow starts, this panel will highlight the latest
              submissions automatically.
            </p>
          </div>
        ) : (
          requests.map((request) => (
            <Link
              key={request.id}
              to={`/admin/requests/${request.id}`}
              className="block rounded-[24px] border border-sand-200/80 bg-sand-50/70 p-5 transition hover:border-clove-700 hover:bg-white/85"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${reviewStatusStyles[request.reviewStatus]}`}
                >
                  {request.reviewStatus}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${priorityStyles[request.priority]}`}
                >
                  {request.priority}
                </span>
                {request.reviewStatus === "Accepted" ? (
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${deliveryStatusStyles[request.deliveryStatus]}`}
                  >
                    {request.deliveryStatus}
                  </span>
                ) : null}
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-clove-900">
                    {request.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-clove-700">
                    {request.description}
                  </p>
                </div>

                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-clove-700" />
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-clove-700">
                Added {dayjs(request.createdAt).format("MMM D, YYYY")}
              </p>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
