const PRIORITY_LABELS = ["Low", "Medium", "High"];
const REVIEW_STATUS_LABELS = ["Pending", "Accepted", "Declined"];
const DELIVERY_STATUS_LABELS = ["Backlog", "In Progress", "Completed"];

const API_TO_DB_PRIORITY = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
};

const DB_TO_API_PRIORITY = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
};

const API_TO_DB_REVIEW_STATUS = {
  Pending: "PENDING",
  Accepted: "ACCEPTED",
  Declined: "DECLINED",
};

const DB_TO_API_REVIEW_STATUS = {
  PENDING: "Pending",
  ACCEPTED: "Accepted",
  DECLINED: "Declined",
};

const API_TO_DB_DELIVERY_STATUS = {
  Backlog: "BACKLOG",
  "In Progress": "IN_PROGRESS",
  Completed: "COMPLETED",
};

const DB_TO_API_DELIVERY_STATUS = {
  BACKLOG: "Backlog",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
};

module.exports = {
  API_TO_DB_DELIVERY_STATUS,
  API_TO_DB_PRIORITY,
  API_TO_DB_REVIEW_STATUS,
  DB_TO_API_DELIVERY_STATUS,
  DB_TO_API_PRIORITY,
  DB_TO_API_REVIEW_STATUS,
  DELIVERY_STATUS_LABELS,
  PRIORITY_LABELS,
  REVIEW_STATUS_LABELS,
};
