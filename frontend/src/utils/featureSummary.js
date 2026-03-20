export function buildFeatureSummary(requests) {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 7);

  return requests.reduce(
    (accumulator, request) => {
      accumulator.total += 1;

      const requestDate = new Date(request.createdAt);

      if (request.reviewStatus === "Pending") {
        accumulator.pending += 1;
      }

      if (request.reviewStatus === "Accepted") {
        accumulator.accepted += 1;
      }

      if (request.reviewStatus === "Declined") {
        accumulator.declined += 1;
      }

      if (request.deliveryStatus === "In Progress") {
        accumulator.inProgress += 1;
      }

      if (request.deliveryStatus === "Completed") {
        accumulator.completed += 1;

        if (
          requestDate.getMonth() === currentMonth &&
          requestDate.getFullYear() === currentYear
        ) {
          accumulator.completedThisMonth += 1;
        }
      }

      if (request.reviewStatus === "Pending" && request.priority === "High") {
        accumulator.highPriorityPending += 1;
      }

      if (requestDate >= sevenDaysAgo) {
        accumulator.createdThisWeek += 1;
      }

      return accumulator;
    },
    {
      total: 0,
      pending: 0,
      accepted: 0,
      declined: 0,
      inProgress: 0,
      completed: 0,
      completedThisMonth: 0,
      highPriorityPending: 0,
      createdThisWeek: 0,
    },
  );
}
