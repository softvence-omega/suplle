// components/icons/MessageSquareIcon.tsx
import React from "react";

// Define the types for the props
interface MessageSquareIconProps {
  size?: number; // Default to 18px if not provided
  color?: string; // Default to #CDCDCD if not provided
  className?: string; // Optional className for styling
}

const MessageSquareIcon: React.FC<MessageSquareIconProps> = ({
  size = 18,
  color = "#CDCDCD", // Default color for the icon
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    className={className}
  >
    <g clipPath="url(#clip0_39_3974)">
      <path
        d="M17.9655 4.1565L11.652 10.47C10.948 11.1722 9.99431 11.5665 9 11.5665C8.00569 11.5665 7.05197 11.1722 6.348 10.47L0.0345 4.1565C0.024 4.275 0 4.38225 0 4.5V13.5C0.00119089 14.4942 0.396661 15.4473 1.09966 16.1503C1.80267 16.8533 2.7558 17.2488 3.75 17.25H14.25C15.2442 17.2488 16.1973 16.8533 16.9003 16.1503C17.6033 15.4473 17.9988 14.4942 18 13.5V4.5C18 4.38225 17.976 4.275 17.9655 4.1565Z"
        fill={color}
      />
      <path
        d="M10.5915 9.4095L17.442 2.55825C17.1101 2.00799 16.6421 1.55253 16.083 1.2358C15.5239 0.919067 14.8926 0.751755 14.25 0.75H3.74998C3.1074 0.751755 2.47611 0.919067 1.917 1.2358C1.3579 1.55253 0.889842 2.00799 0.557983 2.55825L7.40848 9.4095C7.83116 9.83048 8.40342 10.0669 8.99998 10.0669C9.59655 10.0669 10.1688 9.83048 10.5915 9.4095Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_39_3974">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default MessageSquareIcon;
