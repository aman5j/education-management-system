import React from "react";
import {
  Users,
  UserPlus,
  MessageSquare,
  BookOpen,
  IndianRupee,
  AlertCircle,
  CalendarDays,
  Bell,
} from "lucide-react";

import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";

import "./AdminDashboard.css";

const stats = [
  {
    title: "Total Students",
    value: "1,248",
    change: "12%",
    icon: <Users size={22} />,
  },
  {
    title: "New Admissions",
    value: "42",
    change: "20%",
    icon: <UserPlus size={22} />,
  },
  {
    title: "Enquiries",
    value: "86",
    change: "15%",
    icon: <MessageSquare size={22} />,
  },
  {
    title: "Active Courses",
    value: "24",
    change: "No change",
    icon: <BookOpen size={22} />,
  },
  {
    title: "Fees Collected",
    value: "₹8,45,000",
    change: "18%",
    icon: <IndianRupee size={22} />,
  },
  {
    title: "Pending Fees",
    value: "₹2,15,000",
    change: "5%",
    icon: <AlertCircle size={22} />,
  },
];

const recentAdmissions = [
  {
    name: "Aryan Sharma",
    course: "B.Tech Entrance",
    date: "18 Sep 2026",
  },
  {
    name: "Pooja Kumari",
    course: "Web Development",
    date: "17 Sep 2026",
  },
  {
    name: "Rahul Singh",
    course: "Graphic Design",
    date: "17 Sep 2026",
  },
  {
    name: "Nisha Tomar",
    course: "Python Programming",
    date: "16 Sep 2026",
  },
  {
    name: "Vikash Kushwah",
    course: "Data Science",
    date: "16 Sep 2026",
  },
];

const classes = [
  {
    time: "09:00 AM",
    end: "10:00 AM",
    subject: "Mathematics",
    batch: "Batch A",
    status: "Ongoing",
  },
  {
    time: "11:00 AM",
    end: "12:00 PM",
    subject: "Physics",
    batch: "Batch B",
    status: "Upcoming",
  },
  {
    time: "02:00 PM",
    end: "03:00 PM",
    subject: "Web Development",
    batch: "Batch C",
    status: "Upcoming",
  },
  {
    time: "04:00 PM",
    end: "05:00 PM",
    subject: "Aptitude",
    batch: "Batch D",
    status: "Upcoming",
  },
];

const AdminDashboard = () => {
  return (
    <div className="dashboard-page">
      <PageHeader
        title="Good Morning, Admin 👋"
        description="Here's what's happening at IT Learning Institute today."
      />

      {/* Statistics */}
      <div className="dashboard-stats">
        {stats.map((stat) => (
          <div className="dashboard-stat-card" key={stat.title}>
            <div className="stat-icon">
              {stat.icon}
            </div>

            <div className="stat-title">
              {stat.title}
            </div>

            <div className="stat-value">
              {stat.value}
            </div>

            <div className="stat-change">
              {stat.change === "No change" ? (
                <span className="neutral">
                  ● {stat.change}
                </span>
              ) : (
                <span className="positive">
                  ↑ {stat.change}
                </span>
              )}

              <small>from last month</small>
            </div>
          </div>
        ))}
      </div>

      {/* Main dashboard */}
      <div className="dashboard-grid">

        {/* Fee collection */}
        <Card
          title="Fee Collection"
          icon={<IndianRupee size={22} />}
          actions={
            <select className="dashboard-select">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          }
        >
          <div className="fee-summary">
            <div className="fee-circle">
              <strong>₹8,45,000</strong>
              <span>Total Collection</span>
            </div>

            <div className="fee-legend">
              <div>
                <span className="legend-dot collected"></span>
                <div>
                  <strong>Collected</strong>
                  <b>₹8,45,000</b>
                  <small>80%</small>
                </div>
              </div>

              <div>
                <span className="legend-dot pending"></span>
                <div>
                  <strong>Pending</strong>
                  <b>₹2,15,000</b>
                  <small>20%</small>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Recent admissions */}
        <Card
          title="Recent Admissions"
          icon={<UserPlus size={22} />}
          actions={
            <button className="view-all-btn">
              View All
            </button>
          }
        >
          <div className="recent-admissions">
            {recentAdmissions.map((student) => (
              <div
                className="recent-admission"
                key={student.name}
              >
                <div className="student-avatar">
                  {student.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div className="student-info">
                  <strong>{student.name}</strong>
                  <span>{student.course}</span>
                </div>

                <div className="student-date">
                  {student.date}
                </div>

                <span className="new-badge">New</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Classes */}
        <Card
          title="Today's Classes"
          icon={<CalendarDays size={22} />}
          actions={
            <button className="view-all-btn">
              View All
            </button>
          }
        >
          <div className="classes-list">
            {classes.map((item) => (
              <div className="class-row" key={item.time}>
                <div className="class-time">
                  <strong>{item.time}</strong>
                  <span>{item.end}</span>
                </div>

                <div className="class-info">
                  <strong>{item.subject}</strong>
                  <span>{item.batch}</span>
                </div>

                <span
                  className={`class-status ${
                    item.status === "Ongoing"
                      ? "ongoing"
                      : "upcoming"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Pending actions */}
        <Card
          title="Pending Actions"
          icon={<Bell size={22} />}
          actions={
            <button className="view-all-btn">
              View All
            </button>
          }
        >
          <div className="pending-actions">
            <div>
              <span className="pending-action-icon red">
                ₹
              </span>

              <strong>12</strong>

              <span>Fee payments pending</span>

              <b>›</b>
            </div>

            <div>
              <span className="pending-action-icon yellow">
                👤
              </span>

              <strong>5</strong>

              <span>Admission follow-ups</span>

              <b>›</b>
            </div>

            <div>
              <span className="pending-action-icon purple">
                📄
              </span>

              <strong>3</strong>

              <span>Exams to review</span>

              <b>›</b>
            </div>

            <div>
              <span className="pending-action-icon blue">
                ✓
              </span>

              <strong>8</strong>

              <span>Certificates pending</span>

              <b>›</b>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;