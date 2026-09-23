import { Link, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import "../styles/dashboard.css";

function AdminLayout() {
  const {
    user,
    logout,
  } = useAuth();

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          EMS Admin
        </div>

        <nav className="sidebar-nav">
          <Link to="/admin/dashboard">
            Dashboard
          </Link>

          <Link to="/admin/dashboard">
            Institute Profile
          </Link>

          <Link to="/admin/dashboard">
            Students
          </Link>

          <Link to="/admin/dashboard">
            Courses
          </Link>

          <Link to="/admin/dashboard">
            Admissions
          </Link>

          <Link to="/admin/dashboard">
            Payments
          </Link>

          <Link to="/admin/dashboard">
            Users
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
            <h2>Admin Panel</h2>
            <p>Welcome, {user?.name}</p>
          </div>

          <span className="role-badge">
            Super Admin
          </span>
        </header>

        <section className="dashboard-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default AdminLayout;