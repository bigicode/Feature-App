const express = require("express");
const { z } = require("zod");

const adminFeatureController = require("../controllers/adminFeatureController");
const authenticateAdmin = require("../middleware/authenticateAdmin");
const {
  DELIVERY_STATUS_LABELS,
  PRIORITY_LABELS,
  REVIEW_STATUS_LABELS,
} = require("../lib/constants");
const validate = require("../middleware/validate");

const router = express.Router();

const paramsSchema = z.object({
  id: z.coerce.number().int().positive(),
});

const querySchema = z.object({
  reviewStatus: z.enum(REVIEW_STATUS_LABELS).optional(),
  deliveryStatus: z.enum(DELIVERY_STATUS_LABELS).optional(),
});

const adminFeatureBodySchema = z
  .object({
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
    reviewStatus: z.enum(REVIEW_STATUS_LABELS),
    deliveryStatus: z.enum(DELIVERY_STATUS_LABELS),
    submitterName: z
      .string()
      .trim()
      .max(100, "Name must be at most 100 characters.")
      .optional()
      .or(z.literal("")),
    submitterEmail: z
      .email("A valid email is required.")
      .optional()
      .or(z.literal("")),
    adminNotes: z.string().trim().max(2000).optional().or(z.literal("")),
    declinedReason: z
      .string()
      .trim()
      .max(2000)
      .optional()
      .or(z.literal("")),
  })
  .superRefine((data, context) => {
    if (data.reviewStatus === "Declined" && !data.declinedReason?.trim()) {
      context.addIssue({
        code: "custom",
        path: ["declinedReason"],
        message: "Declined reason is required when declining a request.",
      });
    }
  });

const reviewBodySchema = z
  .object({
    reviewStatus: z.enum(REVIEW_STATUS_LABELS),
    adminNotes: z.string().trim().max(2000).optional().or(z.literal("")),
    declinedReason: z
      .string()
      .trim()
      .max(2000)
      .optional()
      .or(z.literal("")),
  })
  .superRefine((data, context) => {
    if (data.reviewStatus === "Declined" && !data.declinedReason?.trim()) {
      context.addIssue({
        code: "custom",
        path: ["declinedReason"],
        message: "Declined reason is required when declining a request.",
      });
    }
  });

const deliveryStatusSchema = z.object({
  deliveryStatus: z.enum(DELIVERY_STATUS_LABELS),
});

router.use(authenticateAdmin);

router.get("/", validate(querySchema, "query"), adminFeatureController.getAdminFeatures);
router.get(
  "/:id",
  validate(paramsSchema, "params"),
  adminFeatureController.getAdminFeatureById,
);
router.post("/", validate(adminFeatureBodySchema), adminFeatureController.createAdminFeature);
router.put(
  "/:id",
  validate(paramsSchema, "params"),
  validate(adminFeatureBodySchema),
  adminFeatureController.updateAdminFeature,
);
router.patch(
  "/:id/review",
  validate(paramsSchema, "params"),
  validate(reviewBodySchema),
  adminFeatureController.reviewAdminFeature,
);
router.patch(
  "/:id/delivery-status",
  validate(paramsSchema, "params"),
  validate(deliveryStatusSchema),
  adminFeatureController.updateAdminDeliveryStatus,
);
router.delete(
  "/:id",
  validate(paramsSchema, "params"),
  adminFeatureController.deleteAdminFeature,
);

module.exports = router;
