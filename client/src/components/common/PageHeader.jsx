import React from "react";
import { ChevronRight } from "lucide-react";
import "./PageHeader.css";

const PageHeader = ({
  breadcrumb = [],
  title,
  description,
  actions,
}) => {
  return (
    <div className="page-header">
      {breadcrumb.length > 0 && (
        <div className="breadcrumb">
          {breadcrumb.map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <span
                className={
                  index === breadcrumb.length - 1
                    ? "breadcrumb-current"
                    : "breadcrumb-link"
                }
              >
                {item}
              </span>

              {index < breadcrumb.length - 1 && (
                <ChevronRight size={15} />
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      <div className="page-header-content">
        <div>
          <h1>{title}</h1>

          {description && <p>{description}</p>}
        </div>

        {actions && (
          <div className="page-header-actions">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;