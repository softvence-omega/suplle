import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

interface SuppleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    error?: string;
    fullWidth?: boolean;
    containerClassName?: string;
    labelClassName?: string;
    helperText?: string;
}

const SuppleInput = ({
    name,
    label,
    error,
    fullWidth = false,
    className,
    containerClassName,
    labelClassName,
    helperText,
    type = "text",
    required,
    ...props
}: SuppleInputProps) => {
    const { control } = useFormContext();

    return (
        <div className={cn("space-y-2", fullWidth && "w-full", containerClassName)}>
            {label && (
                <Label 
                    htmlFor={name}
                    className={cn(
                        "text-sm font-medium",
                        error && "text-destructive",
                        labelClassName
                    )}
                >
                    {label}
                    {required && <span className="text-destructive ml-1">*</span>}
                </Label>
            )}
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState: { error: fieldError } }) => (
                    <div className="space-y-1">
                        <Input
                            {...field}
                            {...props}
                            id={name}
                            type={type}
                            className={cn(
                                fullWidth && "w-full",
                                (error || fieldError) && "border-destructive focus-visible:ring-destructive/50",
                                className
                            )}
                            aria-invalid={!!error || !!fieldError}
                        />
                        {(error || fieldError) && (
                            <p className="text-sm text-destructive">
                                {error || fieldError?.message}
                            </p>
                        )}
                        {helperText && !error && !fieldError && (
                            <p className="text-sm text-muted-foreground">
                                {helperText}
                            </p>
                        )}
                    </div>
                )}
            />
        </div>
    );
};

export default SuppleInput;