import React from "react";
import { AlertTriangle } from "lucide-react";
import Button from "./Button";
import "./ErrorState.css";

const ErrorState = ({
  title = "Something went wrong",
  message = "Unable to load the requested information.",
  onRetry,
}) => {
  return (
    <div className="error-state">
      <div className="error-icon">
        <AlertTriangle size={28} />
      </div>

      <h3>{title}</h3>

      <p>{message}</p>

      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorState;