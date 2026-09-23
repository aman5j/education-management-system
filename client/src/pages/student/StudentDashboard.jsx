import { useAuth } from "../../context/AuthContext";

function StudentDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <div className="page-title">
        <h1>Student Dashboard</h1>
        <p>
          View your personal academic and payment information.
        </p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>My Profile</h3>
          <p>View and update your profile</p>
        </div>

        <div className="dashboard-card">
          <h3>My Admission</h3>
          <p>View your admission details</p>
        </div>

        <div className="dashboard-card">
          <h3>My Course</h3>
          <p>View your enrolled course</p>
        </div>

        <div className="dashboard-card">
          <h3>My Fees</h3>
          <p>View fees and payment history</p>
        </div>
      </div>

      <div className="welcome-panel">
        <h2>Welcome, {user?.name}</h2>
        <p>
          You are logged in as a Student.
        </p>
      </div>
    </div>
  );
}

export default StudentDashboard;