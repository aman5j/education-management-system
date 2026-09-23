const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },

    mobile: {
      type: String,
      trim: true,
      default: "",
    },

    role: {
      type: String,
      enum: {
        values: ["admin", "website_owner", "student"],
        message: "Invalid user role",
      },
      default: "student",
    },

    profile_image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: {
        values: ["active", "inactive", "suspended"],
        message: "Invalid user status",
      },
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);