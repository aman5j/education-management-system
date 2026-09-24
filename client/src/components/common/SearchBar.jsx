import React from "react";
import { Search, X } from "lucide-react";
import "./SearchBar.css";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  onClear,
}) => {
  return (
    <div className="search-bar">
      <Search size={18} />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      {value && (
        <button type="button" onClick={onClear}>
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;