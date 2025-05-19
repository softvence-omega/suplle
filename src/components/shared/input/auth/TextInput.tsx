import React from "react";
import type {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  RegisterOptions,
} from "react-hook-form";

interface InputComponentProps {
  name: string; // Name of the input field
  label: string; // Label for the input field
  className?: string; // Optional additional class names
  register: UseFormRegister<FieldValues>; // React Hook Form's register function
  rules?: RegisterOptions; // Optional validation rules
  errors?: FieldErrors<FieldValues>; // Full errors object from React Hook Form
  placeholder?: string;
  type?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
  name,
  label,
  className = "",
  register,
  rules = {},
  errors,
  placeholder,
  type,
  ...props
}) => {
  const error = errors ? errors[name] : undefined;
  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={name}
        className="text-[#484B52] dark:text-white text-sm font-medium"
      >
        {label}
      </label>
      <div className="relative w-full">
        {/* Display Icon if provided */}
        <input
          {...props} // Spread other props like placeholder, type, etc.
          {...register(name, rules)} // Register the input field with React Hook Form, with optional rules
          id={name}
          name={name}
          className={`border border-[#EDF1F3] rounded-lg py-[13px] px-3 pr-4 w-full focus:outline-none ${
            error ? "border-red-500" : ""
          }`}
          placeholder={placeholder || "Type here"}
          type={type || "text"}
        />
      </div>
      {error?.message && (
        <p className="text-red-500 text-sm">{String(error.message)}</p>
      )}
      {/* Display error message */}
    </div>
  );
};

export default InputComponent;
