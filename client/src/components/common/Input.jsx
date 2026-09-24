import "./Input.css";

export default function Input({
  label,
  required = false,
  error,
  value,
  onChange,
  placeholder,
  type = "text",
  name,
  disabled = false,
}) {
  return (
    <div className="form-field">

      {label && (
        <label>
          {label}

          {required && (
            <span className="required">*</span>
          )}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={error ? "input-error" : ""}
      />

      {error && (
        <span className="field-error">
          {error}
        </span>
      )}

    </div>
  );
}