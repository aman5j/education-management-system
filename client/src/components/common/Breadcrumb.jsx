import { ChevronRight } from "lucide-react";
import "./PageHeader.css";

export default function Breadcrumb({
  items = [],
}) {
  return (
    <div className="breadcrumb">

      {items.map((item, index) => (
        <div
          className="breadcrumb-item"
          key={`${item.label}-${index}`}
        >
          <span
            className={
              index === items.length - 1
                ? "current"
                : ""
            }
          >
            {item.label}
          </span>

          {index !== items.length - 1 && (
            <ChevronRight size={14} />
          )}
        </div>
      ))}

    </div>
  );
}