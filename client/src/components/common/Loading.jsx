import React from "react";
import "./Loading.css";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <span>{text}</span>
    </div>
  );
};

export default Loading;