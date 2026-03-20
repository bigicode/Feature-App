const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || "feature-track-dev-secret";
const JWT_EXPIRES_IN = process.env.ADMIN_JWT_EXPIRES_IN || "1d";

function signAdminToken(admin) {
  return jwt.sign(
    {
      sub: admin.id,
      email: admin.email,
      name: admin.name,
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRES_IN,
    },
  );
}

function verifyAdminToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  signAdminToken,
  verifyAdminToken,
};
