const express = require("express");
const { z } = require("zod");

const publicFeatureController = require("../controllers/publicFeatureController");
const { PRIORITY_LABELS } = require("../lib/constants");
const validate = require("../middleware/validate");

const router = express.Router();

const publicSuggestionSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters.")
    .max(120, "Title must be at most 120 characters."),
  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters.")
    .max(2000, "Description must be at most 2000 characters."),
  priority: z.enum(PRIORITY_LABELS),
  submitterName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be at most 100 characters.")
    .optional()
    .or(z.literal("")),
  submitterEmail: z
    .email("A valid email is required.")
    .optional()
    .or(z.literal("")),
});

router.post(
  "/feature-requests",
  validate(publicSuggestionSchema),
  publicFeatureController.createPublicSuggestion,
);

module.exports = router;
