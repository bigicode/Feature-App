import dayjs from "dayjs";
import { Clock3, Flag, Layers3, Mail, UserRound } from "lucide-react";

import {
  deliveryStatusStyles,
  priorityStyles,
  reviewStatusStyles,
} from "../data/featureRequests";

export function RequestMetaPanel({ request }) {
  return (
    <section className="rounded-[30px] border border-sand-200/85 bg-white/72 p-6 shadow-soft backdrop-blur-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clove-700">
        Request profile
      </p>

      <div className="mt-5 space-y-4">
        <div className="rounded-[24px] bg-sand-50/80 p-5 ring-1 ring-inset ring-sand-200">
          <p className="text-xs uppercase tracking-[0.22em] text-clove-700">
            Review status
          </p>
          <div className="mt-3">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${reviewStatusStyles[request.reviewStatus]}`}
            >
              {request.reviewStatus}
            </span>
          </div>
        </div>

        <div className="rounded-[24px] bg-sand-50/80 p-5 ring-1 ring-inset ring-sand-200">
          <p className="text-xs uppercase tracking-[0.22em] text-clove-700">
            Delivery status
          </p>
          <div className="mt-3">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${deliveryStatusStyles[request.deliveryStatus]}`}
            >
              {request.deliveryStatus}
            </span>
          </div>
        </div>

        <div className="rounded-[24px] bg-sand-50/80 p-5 ring-1 ring-inset ring-sand-200">
          <p className="text-xs uppercase tracking-[0.22em] text-clove-700">
            Priority
          </p>
          <div className="mt-3">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${priorityStyles[request.priority]}`}
            >
              {request.priority}
            </span>
          </div>
        </div>

        <div className="space-y-3 rounded-[24px] bg-sand-50/80 p-5 ring-1 ring-inset ring-sand-200">
          <div className="flex items-center gap-3 text-sm text-clove-700">
            <UserRound className="h-4 w-4 text-copper-500" />
            {request.submitterName || "Anonymous suggestion"}
          </div>
          {request.submitterEmail ? (
            <div className="flex items-center gap-3 text-sm text-clove-700">
              <Mail className="h-4 w-4 text-copper-500" />
              {request.submitterEmail}
            </div>
          ) : null}
          <div className="flex items-center gap-3 text-sm text-clove-700">
            <Clock3 className="h-4 w-4 text-copper-500" />
            Created {dayjs(request.createdAt).format("MMM D, YYYY")}
          </div>
          {request.reviewedAt ? (
            <div className="flex items-center gap-3 text-sm text-clove-700">
              <Flag className="h-4 w-4 text-copper-500" />
              Reviewed {dayjs(request.reviewedAt).format("MMM D, YYYY")}
            </div>
          ) : null}
          <div className="flex items-center gap-3 text-sm text-clove-700">
            <Layers3 className="h-4 w-4 text-moss-500" />
            Updated {dayjs(request.updatedAt).format("MMM D, YYYY")}
          </div>
          {request.declinedReason ? (
            <p className="rounded-[18px] bg-[#f7e6df] px-4 py-3 text-sm leading-6 text-[#8a4c3b]">
              Declined reason: {request.declinedReason}
            </p>
          ) : null}
          {request.adminNotes ? (
            <p className="rounded-[18px] bg-white/80 px-4 py-3 text-sm leading-6 text-clove-700">
              Admin notes: {request.adminNotes}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
