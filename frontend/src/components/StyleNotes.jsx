import { motion } from "motion/react";

export function StyleNotes() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.48, delay: 0.38 }}
      className="rounded-[30px] border border-sand-200/85 bg-white/75 p-6 shadow-soft backdrop-blur-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clove-700">
        Workflow notes
      </p>

      <div className="mt-5 space-y-4">
        <div className="rounded-[22px] bg-sand-50 p-4 ring-1 ring-inset ring-sand-200">
          <p className="text-sm font-semibold text-clove-900">
            Separate review from delivery
          </p>
          <p className="mt-2 text-sm leading-6 text-clove-700">
            Pending, accepted, and declined tell us whether a suggestion was
            approved. Backlog, in progress, and completed only apply once it is
            accepted into delivery.
          </p>
        </div>

        <div className="rounded-[22px] bg-sand-50 p-4 ring-1 ring-inset ring-sand-200">
          <p className="text-sm font-semibold text-clove-900">
            Keep traceable context
          </p>
          <p className="mt-2 text-sm leading-6 text-clove-700">
            Submitter details, admin notes, and decline reasons make later
            reviews easier and keep decisions explainable.
          </p>
        </div>

        <div className="rounded-[22px] bg-clove-900 p-4 text-sand-50">
          <p className="text-sm font-semibold">Admin guidance</p>
          <p className="mt-2 text-sm leading-6 text-sand-100">
            If you decline a request, capture a clear reason. If you accept it,
            keep delivery status aligned with the actual implementation stage.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
