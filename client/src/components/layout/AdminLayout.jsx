import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

import "./AdminLayout.css";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <Header
        onMenuClick={() => setSidebarOpen(true)}
      />

      <main className="admin-main">
        <div className="admin-content">
          <Outlet />
        </div>

        <footer className="admin-footer">
          <span>
            Copyright © 2026 IT Learning Institute. All rights reserved.
          </span>

          <div>
            <span>Learn</span>
            <span>|</span>
            <span>Grow</span>
            <span>|</span>
            <span>Achieve More!</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AdminLayout;