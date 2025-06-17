import React from "react";

// Define the types for the props
interface EditButtonProps {
  size?: number; // Default to 20px if not provided
  color?: string; // Default to white if not provided
  className?: string; // Optional className for styling
}

const EditButton: React.FC<EditButtonProps> = ({
  size = 20,
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
  >
    <path
      d="M5.616 20C5.15533 20 4.771 19.846 4.463 19.538C4.155 19.23 4.00067 18.8453 4 18.384V5.61596C4 5.1553 4.15433 4.77096 4.463 4.46296C4.77167 4.15496 5.156 4.00063 5.616 3.99996H14.002L13.002 4.99996H5.616C5.462 4.99996 5.32067 5.06396 5.192 5.19196C5.06333 5.31996 4.99933 5.4613 5 5.61596V18.385C5 18.5383 5.064 18.6793 5.192 18.808C5.32 18.9366 5.461 19.0006 5.615 19H18.385C18.5383 19 18.6793 18.936 18.808 18.808C18.9367 18.68 19.0007 18.539 19 18.385V10.896L20 9.89596V18.385C20 18.845 19.846 19.2293 19.538 19.538C19.23 19.8466 18.8453 20.0006 18.384 20H5.616ZM10 14V11.385L18.944 2.44096C19.0547 2.3303 19.1707 2.25363 19.292 2.21096C19.4133 2.1683 19.5417 2.1473 19.677 2.14796C19.803 2.14796 19.9257 2.1693 20.045 2.21196C20.1643 2.25463 20.273 2.32463 20.371 2.42196L21.483 3.49996C21.5897 3.61063 21.6703 3.7323 21.725 3.86496C21.7797 3.99763 21.8073 4.13096 21.808 4.26496C21.8087 4.39896 21.7883 4.5263 21.747 4.64696C21.707 4.76696 21.6317 4.88196 21.521 4.99196L12.52 14H10ZM11 13H12.092L18.758 6.33396L18.212 5.78796L17.602 5.20396L11 11.806V13Z"
      fill={`url(#paint0_linear_1118_20679)`}
      style={{ stroke: color }}
    />
    <defs>
      <linearGradient id="paint0_linear_1118_20679" x1="12.904" y1="-2.08175" x2="14.6756" y2="22.6721" gradientUnits="userSpaceOnUse">
        <stop stopColor="#56DAAB"/>
        <stop offset="1" stopColor="#0F9996"/>
      </linearGradient>
    </defs>
  </svg>
);

export default EditButton;