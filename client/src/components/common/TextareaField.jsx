import React from "react";
import "./TextareaField.css";

const TextareaField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
  error = "",
}) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {required && <span className="required-mark"> *</span>}
      </label>

      <textarea
        id={name}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={error ? "field-error" : ""}
      />

      {error && <span className="field-error-text">{error}</span>}
    </div>
  );
};

export default TextareaField;