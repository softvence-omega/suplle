// components/icons/EditIcon.tsx
import React from "react";

// Define the types for the props
interface EditIconProps {
  size?: number; // Default to 24px if not provided
  color?: string; // Default to black if not provided
  className?: string; // Optional className for styling
}

const EditIconWithBorder: React.FC<EditIconProps> = ({
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
      d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.0399 3.01999L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.95999C22.3399 6.59999 22.9799 5.01999 20.9799 3.01999C18.9799 1.01999 17.3999 1.65999 16.0399 3.01999Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9099 4.14999C15.5799 6.53999 17.4499 8.40999 19.8499 9.08999"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EditIconWithBorder;
