export const PRIORITY_OPTIONS = ["Low", "Medium", "High"];

export const REVIEW_STATUS_OPTIONS = ["Pending", "Accepted", "Declined"];

export const DELIVERY_STATUS_OPTIONS = ["Backlog", "In Progress", "Completed"];

export const REVIEW_FILTER_OPTIONS = ["All", ...REVIEW_STATUS_OPTIONS];

export const reviewStatusStyles = {
  Pending: "bg-[#f6ede0] text-[#8c5c28] ring-[#dcb88f]",
  Accepted: "bg-[#e7eee7] text-[#4c6251] ring-[#a9bda9]",
  Declined: "bg-[#f7e4dd] text-[#8a4c3b] ring-[#d6a391]",
};

export const deliveryStatusStyles = {
  Backlog: "bg-[#f3ebe0] text-[#6f4e34] ring-[#d4baa1]",
  "In Progress": "bg-[#efe4d1] text-[#8e5d27] ring-[#d7b48d]",
  Completed: "bg-[#e3ebe3] text-[#49614f] ring-[#a9bca7]",
};

export const priorityStyles = {
  Low: "bg-white/70 text-clove-700 ring-sand-300",
  Medium: "bg-[#f8eee1] text-[#8a5826] ring-[#dcc0a2]",
  High: "bg-[#f6dfd7] text-[#854d42] ring-[#d9a898]",
};
