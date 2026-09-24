import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function WebsiteOwnerLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const user = {
    name: "Website Owner",
    role: "website_owner",
  };

  return (
    <div className="admin-layout">

      <Sidebar
        role="website_owner"
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Header
        user={user}
        setMobileOpen={setMobileOpen}
      />

      <main className="main-wrapper">
        <div className="page-content">
          <Outlet />
        </div>
      </main>

    </div>
  );
}