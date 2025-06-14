import type {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  RegisterOptions,
  Path,
} from "react-hook-form";

interface InputComponentProps<T extends FieldValues> {
  name: Path<T>; // Name of the input field, type-safe
  label: string;
  className?: string;
  register: UseFormRegister<T>; // Register function for your form fields
  rules?: RegisterOptions<T, Path<T>>;
  errors?: FieldErrors<T>; // Errors for your form fields
  placeholder?: string;
  type?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const InputComponent = <T extends FieldValues>({
  name,
  label,
  className = "",
  labelClassName = "",
  inputClassName = "",
  register,
  rules = {},
  errors,
  placeholder,
  type,
  ...props
}: InputComponentProps<T>) => {
  const error = errors ? errors[name] : undefined;
  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={name}
        className={`text-[#484B52] dark:text-white text-sm font-medium ${labelClassName}`}
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
          className={`border border-[#EDF1F3] rounded-lg py-[13px] px-3 pr-4 w-full focus:outline-none ${inputClassName} ${
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
