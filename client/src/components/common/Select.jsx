import "./Input.css";

export default function Select({
  label,
  required = false,
  value,
  onChange,
  options = [],
  placeholder = "Select",
  name,
  error,
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

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={error ? "input-error" : ""}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <span className="field-error">
          {error}
        </span>
      )}

    </div>
  );
}