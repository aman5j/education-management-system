const express = require("express");

const {
  register,
  login,
  getMe,
  logout,
  updateProfile,
  changePassword,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const {
  registerValidator,
  loginValidator,
  changePasswordValidator,
} = require("../validators/authValidator");

const {
  validateRequest,
} = require("../middleware/errorMiddleware");

const router = express.Router();

router.post(
  "/register",
  registerValidator,
  validateRequest,
  register
);

router.post(
  "/login",
  loginValidator,
  validateRequest,
  login
);

router.get(
  "/me",
  authMiddleware,
  getMe
);

router.post(
  "/logout",
  authMiddleware,
  logout
);

router.put(
  "/profile",
  authMiddleware,
  updateProfile
);

router.put(
  "/change-password",
  authMiddleware,
  changePasswordValidator,
  validateRequest,
  changePassword
);

module.exports = router;