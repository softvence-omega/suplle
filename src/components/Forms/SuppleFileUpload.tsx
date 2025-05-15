import { cn } from "@/lib/utils";
import React from "react";

interface SuppleFileUploadProps {
  label?: string;
  accept?: string;
  required?: boolean;
  className?: string;
  icon?: React.ReactNode;
  helperText?: string;
  defaultFileName?: string;
  onChange?: (file: File | null) => void;
}

const SuppleFileUpload = ({
  label,
  accept,
  required,
  className,
  icon,
  helperText,
  defaultFileName,
  onChange
}: SuppleFileUploadProps) => {
  const [fileName, setFileName] = React.useState<string | undefined>(defaultFileName);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileName(file?.name);
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
      {fileName ? (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{fileName}</span>
        </div>
      ) : (
        <div className="border-2 border-dashed border-[#E8E8E8] bg-[#F8FDFD] p-4 rounded-md cursor-pointer">
          <label className="flex items-center gap-2 cursor-pointer">
            {icon}
            <span className="text-sm text-gray-500">{helperText}</span>
            <input
              type="file"
              accept={accept}
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default SuppleFileUpload; 