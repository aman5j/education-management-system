import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

// Authentication
import Login from "./pages/auth/Login";

// Layouts
import AdminLayout from "./layouts/AdminLayout";
import WebsiteOwnerLayout from "./layouts/WebsiteOwnerLayout";
import StudentLayout from "./layouts/StudentLayout";

// Dashboards
import AdminDashboard from "./pages/admin/AdminDashboard";
import WebsiteOwnerDashboard from "./pages/website-owner/WebsiteOwnerDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";

// Common Pages
import Unauthorized from "./pages/common/Unauthorized";

// Route Protection
import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* =====================================================
              PUBLIC ROUTES
          ===================================================== */}

          {/* Default route */}
          <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />

          {/* Login */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* Unauthorized */}
          <Route
            path="/unauthorized"
            element={<Unauthorized />}
          />

          {/* =====================================================
              PROTECTED ROUTES
          ===================================================== */}

          <Route element={<ProtectedRoute />}>

            {/* =================================================
                ADMIN ROUTES
                Role: admin
            ================================================= */}

            <Route
              element={
                <RoleRoute
                  allowedRoles={["admin"]}
                />
              }
            >
              <Route
                path="/admin"
                element={<AdminLayout />}
              >
                {/* /admin → /admin/dashboard */}
                <Route
                  index
                  element={
                    <Navigate
                      to="/admin/dashboard"
                      replace
                    />
                  }
                />

                {/* Admin Dashboard */}
                <Route
                  path="dashboard"
                  element={<AdminDashboard />}
                />

                {/* Future Admin Modules */}

                <Route
                  path="profile"
                  element={
                    <div>
                      Admin Profile
                    </div>
                  }
                />

                <Route
                  path="students"
                  element={
                    <div>
                      Manage Students
                    </div>
                  }
                />

                <Route
                  path="admissions"
                  element={
                    <div>
                      Manage Admissions
                    </div>
                  }
                />

                <Route
                  path="course-categories"
                  element={
                    <div>
                      Course Categories
                    </div>
                  }
                />

                <Route
                  path="courses"
                  element={
                    <div>
                      Manage Courses
                    </div>
                  }
                />

                <Route
                  path="batches"
                  element={
                    <div>
                      Manage Batches
                    </div>
                  }
                />

                <Route
                  path="fees"
                  element={
                    <div>
                      Fees Management
                    </div>
                  }
                />

                <Route
                  path="payments"
                  element={
                    <div>
                      Payment Management
                    </div>
                  }
                />

                <Route
                  path="attendance"
                  element={
                    <div>
                      Attendance
                    </div>
                  }
                />

                <Route
                  path="exams"
                  element={
                    <div>
                      Exams
                    </div>
                  }
                />

                <Route
                  path="certificates"
                  element={
                    <div>
                      Certificates
                    </div>
                  }
                />

                <Route
                  path="faculty"
                  element={
                    <div>
                      Faculty & Staff
                    </div>
                  }
                />

                <Route
                  path="communication"
                  element={
                    <div>
                      Communication
                    </div>
                  }
                />

                <Route
                  path="website"
                  element={
                    <div>
                      Website Manager
                    </div>
                  }
                />

                <Route
                  path="reports"
                  element={
                    <div>
                      Reports
                    </div>
                  }
                />

                <Route
                  path="settings"
                  element={
                    <div>
                      Settings
                    </div>
                  }
                />
              </Route>
            </Route>


            {/* =================================================
                WEBSITE OWNER ROUTES
                Roles: admin, website_owner

                admin is allowed here because your existing
                RBAC architecture already permits:
                ["admin", "website_owner"]
            ================================================= */}

            <Route
              element={
                <RoleRoute
                  allowedRoles={[
                    "admin",
                    "website_owner",
                  ]}
                />
              }
            >
              <Route
                path="/website-owner"
                element={<WebsiteOwnerLayout />}
              >
                {/* /website-owner → dashboard */}
                <Route
                  index
                  element={
                    <Navigate
                      to="/website-owner/dashboard"
                      replace
                    />
                  }
                />

                {/* Website Owner Dashboard */}
                <Route
                  path="dashboard"
                  element={
                    <WebsiteOwnerDashboard />
                  }
                />

                {/* Future Website Modules */}

                <Route
                  path="home"
                  element={
                    <div>
                      Homepage Editor
                    </div>
                  }
                />

                <Route
                  path="about"
                  element={
                    <div>
                      About Page Editor
                    </div>
                  }
                />

                <Route
                  path="courses"
                  element={
                    <div>
                      Website Courses
                    </div>
                  }
                />

                <Route
                  path="admissions"
                  element={
                    <div>
                      Admission Website
                    </div>
                  }
                />

                <Route
                  path="gallery"
                  element={
                    <div>
                      Gallery
                    </div>
                  }
                />

                <Route
                  path="testimonials"
                  element={
                    <div>
                      Testimonials
                    </div>
                  }
                />

                <Route
                  path="faq"
                  element={
                    <div>
                      FAQ
                    </div>
                  }
                />

                <Route
                  path="contact"
                  element={
                    <div>
                      Contact
                    </div>
                  }
                />

                <Route
                  path="seo"
                  element={
                    <div>
                      SEO Settings
                    </div>
                  }
                />

                <Route
                  path="settings"
                  element={
                    <div>
                      Website Settings
                    </div>
                  }
                />
              </Route>
            </Route>


            {/* =================================================
                STUDENT ROUTES
                Role: student
            ================================================= */}

            <Route
              element={
                <RoleRoute
                  allowedRoles={["student"]}
                />
              }
            >
              <Route
                path="/student"
                element={<StudentLayout />}
              >
                {/* /student → /student/dashboard */}
                <Route
                  index
                  element={
                    <Navigate
                      to="/student/dashboard"
                      replace
                    />
                  }
                />

                {/* Student Dashboard */}
                <Route
                  path="dashboard"
                  element={<StudentDashboard />}
                />

                {/* Future Student Modules */}

                <Route
                  path="profile"
                  element={
                    <div>
                      My Profile
                    </div>
                  }
                />

                <Route
                  path="admission"
                  element={
                    <div>
                      My Admission
                    </div>
                  }
                />

                <Route
                  path="course"
                  element={
                    <div>
                      My Course
                    </div>
                  }
                />

                <Route
                  path="batch"
                  element={
                    <div>
                      My Batch
                    </div>
                  }
                />

                <Route
                  path="fees"
                  element={
                    <div>
                      My Fees
                    </div>
                  }
                />

                <Route
                  path="payments"
                  element={
                    <div>
                      My Payments
                    </div>
                  }
                />

                <Route
                  path="documents"
                  element={
                    <div>
                      My Documents
                    </div>
                  }
                />

                <Route
                  path="notifications"
                  element={
                    <div>
                      Notifications
                    </div>
                  }
                />
              </Route>
            </Route>

          </Route>


          {/* =====================================================
              FALLBACK ROUTE
          ===================================================== */}

          <Route
            path="*"
            element={
              <Navigate
                to="/login"
                replace
              />
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;