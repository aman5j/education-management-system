import React, { useContext, useState } from "react";
import {
  Menu,
  Search,
  Bell,
  Maximize,
  LogOut,
  User,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import "./Header.css";

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      navigate("/login");
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <header className="admin-header">
      <div className="header-left">
        <button
          className="mobile-menu-button"
          onClick={onMenuClick}
        >
          <Menu size={23} />
        </button>

        <div className="header-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search students, courses, admissions..."
          />
        </div>
      </div>

      <div className="header-right">
        <button className="header-icon-button">
          <Bell size={20} />

          <span className="notification-count">3</span>
        </button>

        <button
          className="header-icon-button"
          onClick={toggleFullscreen}
        >
          <Maximize size={19} />
        </button>

        <div className="profile-wrapper">
          <button
            className="header-profile"
            onClick={() => setProfileOpen((prev) => !prev)}
          >
            <div className="profile-avatar">
              {user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>

            <div className="profile-details">
              <strong>{user?.name || "Admin"}</strong>
              <span>
                {user?.role === "admin"
                  ? "Institute Admin"
                  : user?.role || "Admin"}
              </span>
            </div>

            <ChevronDown size={16} />
          </button>

          {profileOpen && (
            <div className="profile-dropdown">
              <button
                onClick={() => navigate("/admin/profile")}
              >
                <User size={16} />
                Profile
              </button>

              <button onClick={handleLogout}>
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;