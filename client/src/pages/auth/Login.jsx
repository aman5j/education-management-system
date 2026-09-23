import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import "../../styles/auth.css";

function getDashboardPath(role) {
  switch (role) {
    case "admin":
      return "/admin/dashboard";

    case "website_owner":
      return "/website-owner/dashboard";

    case "student":
      return "/student/dashboard";

    default:
      return "/unauthorized";
  }
}

function Login() {
  const {
    login,
    user,
    isAuthenticated,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isAuthenticated && user) {
    return (
      <Navigate
        to={getDashboardPath(user.role)}
        replace
      />
    );
  }

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const loggedInUser = await login(formData);

      const requestedPath = location.state?.from?.pathname;

      const dashboardPath = getDashboardPath(
        loggedInUser.role
      );

      navigate(requestedPath || dashboardPath, {
        replace: true,
      });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Login failed. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Education Management System</h1>
          <p>Login to your account</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="primary-button"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;