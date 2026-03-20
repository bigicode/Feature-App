const featureService = require("../services/featureService");

async function getAdminFeatures(req, res) {
  const features = await featureService.getFeatures({
    reviewStatus: req.query.reviewStatus,
    deliveryStatus: req.query.deliveryStatus,
  });

  res.status(200).json({
    data: features,
  });
}

async function getAdminFeatureById(req, res) {
  const feature = await featureService.getFeatureById(req.params.id);

  res.status(200).json({
    data: feature,
  });
}

async function createAdminFeature(req, res) {
  const feature = await featureService.createAdminFeature(req.body);

  res.status(201).json({
    message: "Feature request created successfully.",
    data: feature,
  });
}

async function updateAdminFeature(req, res) {
  const feature = await featureService.updateFeature(req.params.id, req.body);

  res.status(200).json({
    message: "Feature request updated successfully.",
    data: feature,
  });
}

async function reviewAdminFeature(req, res) {
  const feature = await featureService.reviewFeature(req.params.id, req.body);

  res.status(200).json({
    message: "Feature review updated successfully.",
    data: feature,
  });
}

async function updateAdminDeliveryStatus(req, res) {
  const feature = await featureService.updateDeliveryStatus(
    req.params.id,
    req.body.deliveryStatus,
  );

  res.status(200).json({
    message: "Delivery status updated successfully.",
    data: feature,
  });
}

async function deleteAdminFeature(req, res) {
  await featureService.deleteFeature(req.params.id);

  res.status(200).json({
    message: "Feature request deleted successfully.",
  });
}

module.exports = {
  createAdminFeature,
  deleteAdminFeature,
  getAdminFeatureById,
  getAdminFeatures,
  reviewAdminFeature,
  updateAdminDeliveryStatus,
  updateAdminFeature,
};
