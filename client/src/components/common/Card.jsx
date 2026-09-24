import React from "react";
import "./Card.css";

const Card = ({
  children,
  title,
  subtitle,
  icon,
  actions,
  className = "",
}) => {
  return (
    <section className={`common-card ${className}`}>
      {(title || subtitle || icon || actions) && (
        <div className="common-card-header">
          <div className="common-card-heading">
            {icon && <div className="common-card-icon">{icon}</div>}

            <div>
              {title && <h3>{title}</h3>}
              {subtitle && <p>{subtitle}</p>}
            </div>
          </div>

          {actions && <div className="common-card-actions">{actions}</div>}
        </div>
      )}

      <div className="common-card-body">{children}</div>
    </section>
  );
};

export default Card;