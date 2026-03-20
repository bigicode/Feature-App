const {
  API_TO_DB_DELIVERY_STATUS,
  API_TO_DB_PRIORITY,
  API_TO_DB_REVIEW_STATUS,
  DB_TO_API_DELIVERY_STATUS,
  DB_TO_API_PRIORITY,
  DB_TO_API_REVIEW_STATUS,
} = require("./constants");

function normalizeOptionalString(value) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmedValue = value.trim();
  return trimmedValue.length > 0 ? trimmedValue : null;
}

function mapPublicSuggestionForDatabase(feature) {
  return {
    title: feature.title,
    description: feature.description,
    priority: API_TO_DB_PRIORITY[feature.priority],
    reviewStatus: "PENDING",
    deliveryStatus: "BACKLOG",
    submitterName: normalizeOptionalString(feature.submitterName),
    submitterEmail: normalizeOptionalString(feature.submitterEmail),
    adminNotes: null,
    declinedReason: null,
    reviewedAt: null,
  };
}

function mapAdminFeatureForDatabase(feature) {
  const reviewStatus = API_TO_DB_REVIEW_STATUS[feature.reviewStatus];
  const isAccepted = reviewStatus === "ACCEPTED";
  const declinedReason =
    reviewStatus === "DECLINED"
      ? normalizeOptionalString(feature.declinedReason)
      : null;

  return {
    title: feature.title,
    description: feature.description,
    priority: API_TO_DB_PRIORITY[feature.priority],
    reviewStatus,
    deliveryStatus: isAccepted
      ? API_TO_DB_DELIVERY_STATUS[feature.deliveryStatus]
      : "BACKLOG",
    submitterName: normalizeOptionalString(feature.submitterName),
    submitterEmail: normalizeOptionalString(feature.submitterEmail),
    adminNotes: normalizeOptionalString(feature.adminNotes),
    declinedReason,
    reviewedAt: reviewStatus === "PENDING" ? null : new Date(),
  };
}

function mapReviewForDatabase(review) {
  const reviewStatus = API_TO_DB_REVIEW_STATUS[review.reviewStatus];

  return {
    reviewStatus,
    adminNotes: normalizeOptionalString(review.adminNotes),
    declinedReason:
      reviewStatus === "DECLINED"
        ? normalizeOptionalString(review.declinedReason)
        : null,
    reviewedAt: reviewStatus === "PENDING" ? null : new Date(),
  };
}

function mapDeliveryStatusForDatabase(deliveryStatus) {
  return {
    deliveryStatus: API_TO_DB_DELIVERY_STATUS[deliveryStatus],
  };
}

function mapFeatureForResponse(feature) {
  return {
    id: feature.id,
    title: feature.title,
    description: feature.description,
    priority: DB_TO_API_PRIORITY[feature.priority],
    reviewStatus: DB_TO_API_REVIEW_STATUS[feature.reviewStatus],
    deliveryStatus: DB_TO_API_DELIVERY_STATUS[feature.deliveryStatus],
    submitterName: feature.submitterName,
    submitterEmail: feature.submitterEmail,
    adminNotes: feature.adminNotes,
    declinedReason: feature.declinedReason,
    reviewedAt: feature.reviewedAt,
    createdAt: feature.createdAt,
    updatedAt: feature.updatedAt,
  };
}

module.exports = {
  mapAdminFeatureForDatabase,
  mapDeliveryStatusForDatabase,
  mapFeatureForResponse,
  mapPublicSuggestionForDatabase,
  mapReviewForDatabase,
};
