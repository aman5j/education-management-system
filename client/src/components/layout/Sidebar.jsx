import React, { useState } from "react";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  Layers,
  CalendarDays,
  Wallet,
  ClipboardCheck,
  Award,
  UserRoundCog,
  MessageCircle,
  Globe,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight,
  UserPlus,
  FolderTree,
  BookMarked,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  const [openMenus, setOpenMenus] = useState({
    admissions: false,
    courses: false,
    fees: false,
    exams: false,
    website: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose}></div>
      )}

      <aside className={`admin-sidebar ${isOpen ? "sidebar-open" : ""}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-icon">
            {"</>"}
          </div>

          <div className="logo-text">
            <strong>IT Learning</strong>
            <span>Institute</span>
            <small>Achieve More! ✨</small>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <NavLink
            to="/admin/dashboard"
            className="sidebar-link"
            onClick={onClose}
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </NavLink>

          {/* Admissions */}
          <div className="sidebar-menu">
            <button
              className="sidebar-link sidebar-menu-button"
              onClick={() => toggleMenu("admissions")}
            >
              <GraduationCap size={19} />
              <span>Admissions</span>

              {openMenus.admissions ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {openMenus.admissions && (
              <div className="sidebar-submenu">
                <NavLink to="/admin/admissions">
                  <span className="submenu-dot"></span>
                  Manage Admissions
                </NavLink>

                <NavLink to="/admin/admissions/enquiries">
                  <span className="submenu-dot"></span>
                  Enquiries
                </NavLink>

                <NavLink to="/admin/admissions/forms">
                  <span className="submenu-dot"></span>
                  Admission Forms
                </NavLink>

                <NavLink to="/admin/admissions/follow-ups">
                  <span className="submenu-dot"></span>
                  Follow-ups
                </NavLink>
              </div>
            )}
          </div>

          {/* Students */}
          <NavLink
            to="/admin/students"
            className="sidebar-link"
            onClick={onClose}
          >
            <Users size={19} />
            <span>Students</span>
          </NavLink>

          {/* Courses */}
          <div className="sidebar-menu">
            <button
              className="sidebar-link sidebar-menu-button"
              onClick={() => toggleMenu("courses")}
            >
              <BookOpen size={19} />
              <span>Courses</span>

              {openMenus.courses ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {openMenus.courses && (
              <div className="sidebar-submenu">
                <NavLink to="/admin/course-categories">
                  <FolderTree size={14} />
                  Course Categories
                </NavLink>

                <NavLink to="/admin/subjects">
                  <BookMarked size={14} />
                  Subjects
                </NavLink>

                <NavLink to="/admin/courses">
                  <BookOpen size={14} />
                  Courses
                </NavLink>
              </div>
            )}
          </div>

          {/* Batches */}
          <NavLink
            to="/admin/batches"
            className="sidebar-link"
            onClick={onClose}
          >
            <Layers size={19} />
            <span>Batches</span>
          </NavLink>

          {/* Attendance */}
          <NavLink
            to="/admin/attendance"
            className="sidebar-link"
            onClick={onClose}
          >
            <CalendarDays size={19} />
            <span>Attendance</span>
          </NavLink>

          {/* Fees */}
          <div className="sidebar-menu">
            <button
              className="sidebar-link sidebar-menu-button"
              onClick={() => toggleMenu("fees")}
            >
              <Wallet size={19} />
              <span>Fees & Finance</span>

              {openMenus.fees ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {openMenus.fees && (
              <div className="sidebar-submenu">
                <NavLink to="/admin/fees">
                  <span className="submenu-dot"></span>
                  Fee Records
                </NavLink>

                <NavLink to="/admin/fees/add">
                  <span className="submenu-dot"></span>
                  Add Fee
                </NavLink>

                <NavLink to="/admin/fees/structure">
                  <span className="submenu-dot"></span>
                  Fee Structure
                </NavLink>

                <NavLink to="/admin/fees/reports">
                  <span className="submenu-dot"></span>
                  Reports
                </NavLink>
              </div>
            )}
          </div>

          {/* Exams */}
          <div className="sidebar-menu">
            <button
              className="sidebar-link sidebar-menu-button"
              onClick={() => toggleMenu("exams")}
            >
              <ClipboardCheck size={19} />
              <span>Exams</span>

              {openMenus.exams ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {openMenus.exams && (
              <div className="sidebar-submenu">
                <NavLink to="/admin/exams/schedule">
                  <span className="submenu-dot"></span>
                  Exam Schedule
                </NavLink>

                <NavLink to="/admin/exams/review">
                  <span className="submenu-dot"></span>
                  Exam Review
                </NavLink>

                <NavLink to="/admin/exams/question-bank">
                  <span className="submenu-dot"></span>
                  Question Bank
                </NavLink>

                <NavLink to="/admin/exams/results">
                  <span className="submenu-dot"></span>
                  Result Reports
                </NavLink>
              </div>
            )}
          </div>

          {/* Certificates */}
          <NavLink
            to="/admin/certificates"
            className="sidebar-link"
            onClick={onClose}
          >
            <Award size={19} />
            <span>Certificates</span>
          </NavLink>

          {/* Faculty */}
          <NavLink
            to="/admin/faculty"
            className="sidebar-link"
            onClick={onClose}
          >
            <UserRoundCog size={19} />
            <span>Faculty & Staff</span>
          </NavLink>

          {/* Communication */}
          <NavLink
            to="/admin/communication"
            className="sidebar-link"
            onClick={onClose}
          >
            <MessageCircle size={19} />
            <span>Communication</span>
          </NavLink>

          {/* Website */}
          <div className="sidebar-menu">
            <button
              className="sidebar-link sidebar-menu-button"
              onClick={() => toggleMenu("website")}
            >
              <Globe size={19} />
              <span>Website Manager</span>

              {openMenus.website ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {openMenus.website && (
              <div className="sidebar-submenu">
                <NavLink to="/admin/website">
                  <span className="submenu-dot"></span>
                  Website Dashboard
                </NavLink>

                <NavLink to="/admin/website/home">
                  <span className="submenu-dot"></span>
                  Homepage
                </NavLink>

                <NavLink to="/admin/website/about">
                  <span className="submenu-dot"></span>
                  About
                </NavLink>

                <NavLink to="/admin/website/gallery">
                  <span className="submenu-dot"></span>
                  Gallery
                </NavLink>

                <NavLink to="/admin/website/testimonials">
                  <span className="submenu-dot"></span>
                  Testimonials
                </NavLink>

                <NavLink to="/admin/website/faq">
                  <span className="submenu-dot"></span>
                  FAQ
                </NavLink>

                <NavLink to="/admin/website/contact">
                  <span className="submenu-dot"></span>
                  Contact
                </NavLink>
              </div>
            )}
          </div>

          {/* Reports */}
          <NavLink
            to="/admin/reports"
            className="sidebar-link"
            onClick={onClose}
          >
            <BarChart3 size={19} />
            <span>Reports</span>
          </NavLink>

          {/* Settings */}
          <NavLink
            to="/admin/settings"
            className="sidebar-link"
            onClick={onClose}
          >
            <Settings size={19} />
            <span>Settings</span>
          </NavLink>
        </nav>

        {/* Help */}
        <div className="sidebar-help">
          <div className="help-icon">
            <UserPlus size={25} />
          </div>

          <strong>Need Help?</strong>

          <p>Our support team is here for you.</p>

          <button>Contact Support</button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;