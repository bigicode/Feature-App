const featureService = require("../services/featureService");

async function createPublicSuggestion(req, res) {
  const feature = await featureService.createPublicSuggestion(req.body);

  res.status(201).json({
    message: "Feature suggestion submitted successfully.",
    data: feature,
  });
}

module.exports = {
  createPublicSuggestion,
};
