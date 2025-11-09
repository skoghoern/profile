import React from "react";
const GOOGLE_SCHOLAR_PATH =
  "M24 9.5L12 0 0 9.5l12 9.5 12-9.5zm-12 1.9l-7.7-6 7.7-6 7.7 6-7.7 6zm0 1.9l-7.7 6 7.7 6 7.7-6-7.7-6z";

// The component will accept 'size' and any other props (like className)
const GoogleScholar = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor" // This allows the color class on the anchor tag to style the icon
    aria-hidden="true"
    {...props}
  >
    <title>Google Scholar icon</title>
    <path d={GOOGLE_SCHOLAR_PATH} />
  </svg>
);

export default GoogleScholar;
