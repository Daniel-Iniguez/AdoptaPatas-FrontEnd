import React from 'react'

function RightArrowIcon({ size, color, nextSlide, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 225 360"
      className={`${className}`}
      onClick={nextSlide}
    >
      <path
        fill={color}
        d="M13.5 346.5c18 18 45 18 63 0l135-135c18-18 18-45 0-63l-135-135C67.5 4.5 54 0 45 0S22.5 4.5 13.5 13.5c-18 18-18 45 0 63L117 180 13.5 283.5c-18 18-18 45 0 63z"
      ></path>
    </svg>
  )
}

export default RightArrowIcon