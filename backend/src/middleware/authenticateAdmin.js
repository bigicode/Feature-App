const AppError = require("../lib/AppError");
const { verifyAdminToken } = require("../lib/jwt");
const prisma = require("../lib/prisma");

async function authenticateAdmin(req, res, next) {
  const authorizationHeader = req.headers.authorization || "";

  if (!authorizationHeader.startsWith("Bearer ")) {
    return next(new AppError("Authentication required.", 401));
  }

  const token = authorizationHeader.replace("Bearer ", "").trim();

  try {
    const payload = verifyAdminToken(token);

    const admin = await prisma.adminUser.findUnique({
      where: {
        id: Number(payload.sub),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!admin) {
      return next(new AppError("Admin account no longer exists.", 401));
    }

    req.admin = admin;
    return next();
  } catch (error) {
    return next(new AppError("Invalid or expired token.", 401));
  }
}

module.exports = authenticateAdmin;
