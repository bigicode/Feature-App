const AppError = require("../lib/AppError");
const prisma = require("../lib/prisma");
const {
  API_TO_DB_DELIVERY_STATUS,
  API_TO_DB_REVIEW_STATUS,
} = require("../lib/constants");
const {
  mapAdminFeatureForDatabase,
  mapDeliveryStatusForDatabase,
  mapFeatureForResponse,
  mapPublicSuggestionForDatabase,
  mapReviewForDatabase,
} = require("../lib/featureMapper");

async function getFeatures(filters = {}) {
  const where = {};

  if (filters.reviewStatus) {
    where.reviewStatus = API_TO_DB_REVIEW_STATUS[filters.reviewStatus];
  }

  if (filters.deliveryStatus) {
    where.deliveryStatus = API_TO_DB_DELIVERY_STATUS[filters.deliveryStatus];
  }

  const features = await prisma.featureRequest.findMany({
    where: Object.keys(where).length > 0 ? where : undefined,
    orderBy: {
      createdAt: "desc",
    },
  });

  return features.map(mapFeatureForResponse);
}

async function getFeatureById(id) {
  const feature = await prisma.featureRequest.findUnique({
    where: { id },
  });

  if (!feature) {
    throw new AppError("Feature request not found.", 404);
  }

  return mapFeatureForResponse(feature);
}

async function createPublicSuggestion(featureData) {
  const feature = await prisma.featureRequest.create({
    data: mapPublicSuggestionForDatabase(featureData),
  });

  return mapFeatureForResponse(feature);
}

async function createAdminFeature(featureData) {
  const feature = await prisma.featureRequest.create({
    data: mapAdminFeatureForDatabase(featureData),
  });

  return mapFeatureForResponse(feature);
}

async function updateFeature(id, featureData) {
  await ensureFeatureExists(id);

  const feature = await prisma.featureRequest.update({
    where: { id },
    data: mapAdminFeatureForDatabase(featureData),
  });

  return mapFeatureForResponse(feature);
}

async function reviewFeature(id, reviewData) {
  const currentFeature = await ensureFeatureExists(id);

  const feature = await prisma.featureRequest.update({
    where: { id },
    data: {
      ...mapReviewForDatabase(reviewData),
      deliveryStatus:
        reviewData.reviewStatus === "Accepted"
          ? currentFeature.deliveryStatus
          : "BACKLOG",
    },
  });

  return mapFeatureForResponse(feature);
}

async function updateDeliveryStatus(id, deliveryStatus) {
  const currentFeature = await ensureFeatureExists(id);

  if (currentFeature.reviewStatus !== "ACCEPTED") {
    throw new AppError(
      "Only accepted feature requests can move through delivery states.",
      400,
    );
  }

  const feature = await prisma.featureRequest.update({
    where: { id },
    data: mapDeliveryStatusForDatabase(deliveryStatus),
  });

  return mapFeatureForResponse(feature);
}

async function deleteFeature(id) {
  await ensureFeatureExists(id);

  await prisma.featureRequest.delete({
    where: { id },
  });
}

async function ensureFeatureExists(id) {
  const existingFeature = await prisma.featureRequest.findUnique({
    where: { id },
    select: {
      id: true,
      reviewStatus: true,
      deliveryStatus: true,
    },
  });

  if (!existingFeature) {
    throw new AppError("Feature request not found.", 404);
  }

  return existingFeature;
}

module.exports = {
  createAdminFeature,
  createPublicSuggestion,
  deleteFeature,
  getFeatureById,
  getFeatures,
  reviewFeature,
  updateFeature,
  updateDeliveryStatus,
};
