import { cn } from "@/lib/utils";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

interface SuppleFileUploadProps {
  name: string;
  label?: string;
  accept?: string;
  required?: boolean;
  className?: string;
  icon?: React.ReactNode;
  helperText?: string;
  defaultFileName?: string;
  onChange?: (file: File | null) => void;
  InputClassName?: string;
}

const SuppleFileUpload = ({
  name,
  label,
  accept,
  required,
  className,
  icon,
  helperText,
  defaultFileName,
  onChange,
InputClassName
}: SuppleFileUploadProps) => {
  const { control } = useFormContext();
  const {
    field: { onChange: fieldOnChange, value, ...field },
    fieldState: { error }
  } = useController({
    name,
    control,
    defaultValue: defaultFileName || ""
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    fieldOnChange(file?.name || "");
    onChange?.(file);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="text-sm font-medium">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}
      {value ? (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{value}</span>
          <button
            type="button"
            className="text-red-500 hover:text-red-700"
            onClick={() => {
              fieldOnChange("");
              onChange?.(null);
            }}
          >
            ×
          </button>
        </div>
      ) : (
        <div className={`border-2 border-dashed border-[#E8E8E8] bg-[#F8FDFD] rounded-md cursor-pointer ${InputClassName}`}>
          <label className="flex items-center gap-2 cursor-pointer">
            {icon}
            <span className="text-sm text-gray-500">{helperText || "Click to upload file"}</span>
            <input
              type="file"
              accept={accept}
              onChange={handleFileChange}
              className="hidden"
              {...field}
            />
          </label>
        </div>
      )}
      {error && (
        <p className="text-sm text-destructive mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default SuppleFileUpload; 