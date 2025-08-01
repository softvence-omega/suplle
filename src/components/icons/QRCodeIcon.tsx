import React from "react";

// Define the types for the props
interface QRCodeIconProps {
  size?: number; // Default to 24px if not provided
  color?: string; // Default to white if not provided
  className?: string; // Optional className for styling
}

const QRCodeIcon: React.FC<QRCodeIconProps> = ({
  size = 24,
  color = "white", // Default color is white
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      aspectRatio: "1/1", // Ensures the icon maintains the aspect ratio
    }}
  >
    <path
      d="M3.75 4.875C3.75 4.254 4.254 3.75 4.875 3.75H9.375C9.996 3.75 10.5 4.254 10.5 4.875V9.375C10.5 9.996 9.996 10.5 9.375 10.5H4.875C4.57663 10.5 4.29048 10.3815 4.0795 10.1705C3.86853 9.95952 3.75 9.67337 3.75 9.375V4.875ZM3.75 14.625C3.75 14.004 4.254 13.5 4.875 13.5H9.375C9.996 13.5 10.5 14.004 10.5 14.625V19.125C10.5 19.746 9.996 20.25 9.375 20.25H4.875C4.57663 20.25 4.29048 20.1315 4.0795 19.9205C3.86853 19.7095 3.75 19.4234 3.75 19.125V14.625ZM13.5 4.875C13.5 4.254 14.004 3.75 14.625 3.75H19.125C19.746 3.75 20.25 4.254 20.25 4.875V9.375C20.25 9.996 19.746 10.5 19.125 10.5H14.625C14.3266 10.5 14.0405 10.3815 13.8295 10.1705C13.6185 9.95952 13.5 9.67337 13.5 9.375V4.875Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.75 6.75H7.5V7.5H6.75V6.75ZM6.75 16.5H7.5V17.25H6.75V16.5ZM16.5 6.75H17.25V7.5H16.5V6.75ZM13.5 13.5H14.25V14.25H13.5V13.5ZM13.5 19.5H14.25V20.25H13.5V19.5ZM19.5 13.5H20.25V14.25H19.5V13.5ZM19.5 19.5H20.25V20.25H19.5V19.5ZM16.5 16.5H17.25V17.25H16.5V16.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default QRCodeIcon;
