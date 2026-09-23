const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");

const {
  notFoundMiddleware,
  errorMiddleware,
} = require("./middleware/errorMiddleware");

const app = express();

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Request body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Education Management API is running",
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

// 404
app.use(notFoundMiddleware);

// Central error handler
app.use(errorMiddleware);

module.exports = app;