import { useAuth } from "../../context/AuthContext";

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <div className="page-title">
        <h1>Admin Dashboard</h1>
        <p>
          Manage the complete Education Management System.
        </p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Students</h3>
          <p className="card-number">--</p>
          <span>Coming in Student Management phase</span>
        </div>

        <div className="dashboard-card">
          <h3>Total Courses</h3>
          <p className="card-number">--</p>
          <span>Coming in Course Management phase</span>
        </div>

        <div className="dashboard-card">
          <h3>Total Admissions</h3>
          <p className="card-number">--</p>
          <span>Coming in Admission phase</span>
        </div>

        <div className="dashboard-card">
          <h3>Pending Fees</h3>
          <p className="card-number">--</p>
          <span>Coming in Fees phase</span>
        </div>
      </div>

      <div className="welcome-panel">
        <h2>Welcome, {user?.name}</h2>
        <p>
          You are logged in as the Super Admin.
        </p>
      </div>
    </div>
  );
}

export default AdminDashboard;