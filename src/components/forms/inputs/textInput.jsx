export function TextInput(
  {
    label,
    value,
    onChange,
    placeholder = "",
    error = null,
    className = ""
  }
) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          px-3 py-2 rounded-xl border 
          border-gray-300 
          focus:outline-none focus:ring-2 focus:ring-blue-400
          transition-all
          ${error ? "border-red-500" : ""}
        `}
      />

      {error && (
        <span className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}