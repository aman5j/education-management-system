const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

// Any authenticated user
router.get(
  "/authenticated",
  authMiddleware,
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Authenticated user can access this route",
      data: {
        userId: req.user._id,
        role: req.user.role,
      },
    });
  }
);

// Admin only
router.get(
  "/admin",
  authMiddleware,
  authorizeRoles("admin"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Admin route accessed successfully",
      data: {
        role: req.user.role,
      },
    });
  }
);

// Admin + Website Owner
router.get(
  "/website-management",
  authMiddleware,
  authorizeRoles("admin", "website_owner"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Website management route accessed successfully",
      data: {
        role: req.user.role,
      },
    });
  }
);

// Student only
router.get(
  "/student",
  authMiddleware,
  authorizeRoles("student"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Student route accessed successfully",
      data: {
        role: req.user.role,
      },
    });
  }
);

module.exports = router;