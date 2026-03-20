const express = require("express");
const { z } = require("zod");

const adminAuthController = require("../controllers/adminAuthController");
const authenticateAdmin = require("../middleware/authenticateAdmin");
const validate = require("../middleware/validate");

const router = express.Router();

const loginSchema = z.object({
  email: z.email("A valid email is required."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters."),
});

router.post("/login", validate(loginSchema), adminAuthController.loginAdmin);
router.get("/me", authenticateAdmin, adminAuthController.getCurrentAdmin);

module.exports = router;
