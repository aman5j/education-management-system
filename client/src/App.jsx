import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/auth/Login";

import AdminLayout from "./layouts/AdminLayout";
import WebsiteOwnerLayout from "./layouts/WebsiteOwnerLayout";
import StudentLayout from "./layouts/StudentLayout";

import AdminDashboard from "./pages/admin/AdminDashboard";
import WebsiteOwnerDashboard from "./pages/website-owner/WebsiteOwnerDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";

import Unauthorized from "./pages/common/Unauthorized";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/unauthorized"
            element={<Unauthorized />}
          />

          {/* Authenticated routes */}
          <Route element={<ProtectedRoute />}>
            {/* Admin routes */}
            <Route
              element={
                <RoleRoute allowedRoles={["admin"]} />
              }
            >
              <Route
                path="/admin"
                element={<AdminLayout />}
              >
                <Route
                  path="dashboard"
                  element={<AdminDashboard />}
                />
              </Route>
            </Route>

            {/* Website Owner routes */}
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
                <Route
                  path="dashboard"
                  element={<WebsiteOwnerDashboard />}
                />
              </Route>
            </Route>

            {/* Student routes */}
            <Route
              element={
                <RoleRoute allowedRoles={["student"]} />
              }
            >
              <Route
                path="/student"
                element={<StudentLayout />}
              >
                <Route
                  path="dashboard"
                  element={<StudentDashboard />}
                />
              </Route>
            </Route>
          </Route>

          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;