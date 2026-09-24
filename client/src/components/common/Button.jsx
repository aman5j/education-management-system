import React from "react";
import "./Button.css";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  icon = null,
  loading = false,
  disabled = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`common-btn common-btn-${variant} common-btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="button-spinner"></span>
      ) : (
        icon && <span className="button-icon">{icon}</span>
      )}

      <span>{loading ? "Please wait..." : children}</span>
    </button>
  );
};

export default Button;