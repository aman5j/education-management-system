import { Link, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import "../styles/dashboard.css";

function StudentLayout() {
  const {
    user,
    logout,
  } = useAuth();

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          Student Portal
        </div>

        <nav className="sidebar-nav">
          <Link to="/student/dashboard">
            Dashboard
          </Link>

          <Link to="/student/dashboard">
            My Profile
          </Link>

          <Link to="/student/dashboard">
            My Admission
          </Link>

          <Link to="/student/dashboard">
            My Course
          </Link>

          <Link to="/student/dashboard">
            My Batch
          </Link>

          <Link to="/student/dashboard">
            My Fees
          </Link>

          <Link to="/student/dashboard">
            My Payments
          </Link>

          <Link to="/student/dashboard">
            My Documents
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
            <h2>Student Portal</h2>
            <p>Welcome, {user?.name}</p>
          </div>

          <span className="role-badge">
            Student
          </span>
        </header>

        <section className="dashboard-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default StudentLayout;