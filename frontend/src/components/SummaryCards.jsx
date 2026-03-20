import { CheckCircle2, CircleDashed, Clock3 } from "lucide-react";
import { motion } from "motion/react";

const cardIcons = {
  pending: CircleDashed,
  accepted: Clock3,
  declined: CheckCircle2,
};

export function SummaryCards({ summary }) {
  const cards = [
    {
      key: "pending",
      label: "Pending review",
      value: String(summary.pending).padStart(2, "0"),
      note: `${summary.highPriorityPending} high-priority waiting for admin action`,
    },
    {
      key: "accepted",
      label: "Accepted",
      value: String(summary.accepted).padStart(2, "0"),
      note: `${summary.inProgress} accepted request${
        summary.inProgress === 1 ? "" : "s"
      } currently in progress`,
    },
    {
      key: "declined",
      label: "Declined",
      value: String(summary.declined).padStart(2, "0"),
      note: `${summary.completedThisMonth} completed this month from accepted work`,
    },
  ];

  return (
    <section className="mt-8 grid gap-4 md:grid-cols-3">
      {cards.map((card, index) => {
        const Icon = cardIcons[card.key];

        return (
          <motion.article
            key={card.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
            className="rounded-[28px] border border-sand-200/85 bg-white/72 p-5 shadow-soft backdrop-blur-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-clove-700">
                  {card.label}
                </p>
                <p className="mt-2 font-display text-4xl text-clove-900">
                  {card.value}
                </p>
              </div>

              <div className="rounded-2xl bg-sand-50 p-3 ring-1 ring-inset ring-sand-200">
                <Icon className="h-5 w-5 text-clove-800" />
              </div>
            </div>

            <p className="mt-4 text-sm text-clove-700">{card.note}</p>
          </motion.article>
        );
      })}
    </section>
  );
}
