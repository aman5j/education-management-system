import { Search, RotateCcw } from "lucide-react";
import "./SearchFilter.css";

export default function SearchFilter({
  searchValue,
  onSearchChange,
  placeholder = "Search...",
  filters = [],
  onSubmit,
  onReset,
}) {
  return (
    <div className="search-filter">

      <div className="search-input-wrapper">
        <Search size={18} />

        <input
          value={searchValue}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          placeholder={placeholder}
        />
      </div>

      {filters.map((filter) => (
        <div
          className="filter-control"
          key={filter.name}
        >
          {filter.type === "select" && (
            <select
              value={filter.value}
              onChange={(e) =>
                filter.onChange(e.target.value)
              }
            >
              <option value="">
                {filter.placeholder || "All"}
              </option>

              {filter.options?.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          )}

          {filter.type === "date" && (
            <input
              type="date"
              value={filter.value}
              onChange={(e) =>
                filter.onChange(e.target.value)
              }
            />
          )}
        </div>
      ))}

      <button
        className="filter-button"
        onClick={onSubmit}
      >
        <Search size={16} />
        Search
      </button>

      <button
        className="reset-button"
        onClick={onReset}
      >
        <RotateCcw size={15} />
        Reset
      </button>

    </div>
  );
}