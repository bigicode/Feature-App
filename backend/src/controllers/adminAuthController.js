const bcrypt = require("bcryptjs");

const AppError = require("../lib/AppError");
const { signAdminToken } = require("../lib/jwt");
const prisma = require("../lib/prisma");

async function loginAdmin(req, res) {
  const admin = await prisma.adminUser.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (!admin) {
    throw new AppError("Invalid email or password.", 401);
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    admin.passwordHash,
  );

  if (!isPasswordValid) {
    throw new AppError("Invalid email or password.", 401);
  }

  const safeAdmin = {
    id: admin.id,
    name: admin.name,
    email: admin.email,
  };

  res.status(200).json({
    message: "Admin login successful.",
    data: {
      token: signAdminToken(safeAdmin),
      admin: safeAdmin,
    },
  });
}

async function getCurrentAdmin(req, res) {
  res.status(200).json({
    data: req.admin,
  });
}

module.exports = {
  getCurrentAdmin,
  loginAdmin,
};
