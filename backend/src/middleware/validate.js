const AppError = require("../lib/AppError");

function validate(schema, source = "body") {
  return (req, res, next) => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      return next(
        new AppError("Validation failed.", 400, result.error.flatten()),
      );
    }

    req[source] = result.data;
    return next();
  };
}

module.exports = validate;
