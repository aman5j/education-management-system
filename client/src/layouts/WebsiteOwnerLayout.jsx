import { Link, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import "../styles/dashboard.css";

function WebsiteOwnerLayout() {
  const {
    user,
    logout,
  } = useAuth();

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          Website Editor
        </div>

        <nav className="sidebar-nav">
          <Link to="/website-owner/dashboard">
            Dashboard
          </Link>

          <Link to="/website-owner/dashboard">
            Homepage
          </Link>

          <Link to="/website-owner/dashboard">
            About Page
          </Link>

          <Link to="/website-owner/dashboard">
            Website Courses
          </Link>

          <Link to="/website-owner/dashboard">
            Gallery
          </Link>

          <Link to="/website-owner/dashboard">
            Testimonials
          </Link>

          <Link to="/website-owner/dashboard">
            FAQ
          </Link>

          <Link to="/website-owner/dashboard">
            SEO Settings
          </Link>
        </nav>

        <button
          className="logout-button"
          onClick={logout}
        >
          Logout
        </button>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h2>Website Management</h2>
            <p>Welcome, {user?.name}</p>
          </div>

          <span className="role-badge">
            Website Editor
          </span>
        </header>

        <section className="dashboard-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default WebsiteOwnerLayout;