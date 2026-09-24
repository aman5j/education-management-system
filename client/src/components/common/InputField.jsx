import React from "react";
import "./InputField.css";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error = "",
  disabled = false,
}) => {
  return (
    <div className="form-field">
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span className="required-mark"> *</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value ?? ""}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={error ? "field-error" : ""}
      />

      {error && <span className="field-error-text">{error}</span>}
    </div>
  );
};

export default InputField;