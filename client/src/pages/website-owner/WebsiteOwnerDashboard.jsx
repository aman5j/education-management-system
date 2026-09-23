import { useAuth } from "../../context/AuthContext";

function WebsiteOwnerDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <div className="page-title">
        <h1>Website Owner Dashboard</h1>
        <p>
          Manage website content, pages, and publishing.
        </p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Homepage</h3>
          <p>Manage homepage sections</p>
        </div>

        <div className="dashboard-card">
          <h3>About Page</h3>
          <p>Manage institute information</p>
        </div>

        <div className="dashboard-card">
          <h3>Website Courses</h3>
          <p>Manage public course content</p>
        </div>

        <div className="dashboard-card">
          <h3>SEO Settings</h3>
          <p>Manage website SEO content</p>
        </div>
      </div>

      <div className="welcome-panel">
        <h2>Welcome, {user?.name}</h2>
        <p>
          You are logged in as the Website Editor.
        </p>
      </div>
    </div>
  );
}

export default WebsiteOwnerDashboard;