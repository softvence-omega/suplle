
import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  hover?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  [key: string]: any;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  hover,
  type = "button",
  className = "",
  disabled = false,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-5 w-1/2 h-12 flex items-center justify-center gap-2.5 rounded-xl bg-green-500 text-white hover:bg-green-700 text-xl font-medium  ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
