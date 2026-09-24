import React from "react";
import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
  const normalizedStatus = String(status || "")
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <span className={`status-badge status-${normalizedStatus}`}>
      <span className="status-dot"></span>
      {status}
    </span>
  );
};

export default StatusBadge;