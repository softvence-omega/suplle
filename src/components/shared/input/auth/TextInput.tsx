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
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Optional icon component
  register: UseFormRegister<FieldValues>; // React Hook Form's register function
  rules?: RegisterOptions; // Optional validation rules
  errors?: FieldErrors<FieldValues>; // Full errors object from React Hook Form
}

const InputComponent: React.FC<InputComponentProps> = ({
  name,
  label,
  className = "",
  icon: Icon,
  register,
  rules = {},
  errors,
  ...props
}) => {
  const error = errors ? errors[name] : undefined;

  return (
    <div
      className={`p-4 border border-[#EDF1F3] bg-white rounded-lg shadow-sm ${className}`}
    >
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {Icon && <Icon className="w-5 h-5 text-gray-500" />}{" "}
      {/* Display Icon if provided */}
      <input
        {...props} // Spread other props like placeholder, type, etc.
        {...register(name, rules)} // Register the input field with React Hook Form, with optional rules
        className={`flex-1 h-12 px-4 py-2 text-base text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-md ${
          error ? "border-red-500" : ""
        }`}
      />
      {error?.message && (
        <p className="text-red-500 text-sm">{String(error.message)}</p>
      )}
      {/* Display error message */}
    </div>
  );
};

export default InputComponent;
