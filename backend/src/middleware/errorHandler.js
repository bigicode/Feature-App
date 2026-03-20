const { Prisma } = require("@prisma/client");

const AppError = require("../lib/AppError");

function notFoundHandler(req, res, next) {
  next(new AppError(`Route ${req.originalUrl} not found.`, 404));
}

function errorHandler(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
      errors: error.details || null,
    });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2025") {
      return res.status(404).json({
        message: "Feature request not found.",
        errors: null,
      });
    }

    if (error.code === "P2021" || error.code === "P2022") {
      return res.status(500).json({
        message:
          "The database schema is out of date. Run the latest SQL schema or migration query, then try again.",
        errors: null,
      });
    }
  }

  console.error(error);

  return res.status(500).json({
    message: "Something went wrong on the server.",
    errors: null,
  });
}

module.exports = {
  errorHandler,
  notFoundHandler,
};
