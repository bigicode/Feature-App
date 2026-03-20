const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const adminAuthRoutes = require("./routes/adminAuthRoutes");
const adminFeatureRoutes = require("./routes/adminFeatureRoutes");
const { errorHandler, notFoundHandler } = require("./middleware/errorHandler");
const publicFeatureRoutes = require("./routes/publicFeatureRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "Feature Request Tracker API is running.",
  });
});

app.use("/api/public", publicFeatureRoutes);
app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/admin/feature-requests", adminFeatureRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
