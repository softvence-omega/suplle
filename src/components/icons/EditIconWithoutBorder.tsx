// components/icons/EditIcon.tsx
import React from "react";

// Define the types for the props
interface EditIconProps {
  size?: number; // Default to 24px if not provided
  color?: string; // Default to black if not provided
  className?: string; // Optional className for styling
}

const EditIconWithoutBorder: React.FC<EditIconProps> = ({
  size = 24,
  color = "#292D32", // Default color for the icon
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M13.2601 3.6L5.0501 12.29C4.7401 12.62 4.4401 13.27 4.3801 13.72L4.0101 16.96C3.8801 18.13 4.7201 18.93 5.8801 18.73L9.1001 18.18C9.5501 18.1 10.1801 17.77 10.4901 17.43L18.7001 8.74C20.1201 7.24 20.7601 5.53 18.5501 3.44C16.3501 1.37 14.6801 2.1 13.2601 3.6Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.8899 5.05C12.3199 7.81 14.5599 9.92 17.3399 10.2"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 22H21"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EditIconWithoutBorder;
