import { motion } from "motion/react";

import { FeatureRequestCard } from "./FeatureRequestCard";

export function FeatureRequestList({
  requests,
  onViewDetails,
  onDelete,
  onReviewStatusChange,
  onDeliveryStatusChange,
}) {
  if (requests.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 rounded-[30px] border border-dashed border-sand-300 bg-white/55 p-10 text-center shadow-soft"
      >
        <p className="font-display text-3xl text-clove-900">No matches found</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-clove-700">
          Try switching the review filter or broadening your search text. This
          board will populate again as suggestions move through the workflow.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="mt-5 space-y-4">
      {requests.map((request, index) => (
        <FeatureRequestCard
          key={request.id}
          request={request}
          index={index}
          onViewDetails={onViewDetails}
          onDelete={onDelete}
          onReviewStatusChange={onReviewStatusChange}
          onDeliveryStatusChange={onDeliveryStatusChange}
        />
      ))}
    </div>
  );
}
