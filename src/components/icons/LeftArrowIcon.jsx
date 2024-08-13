import React from 'react'

function LeftArrowIcon({ size, color, prevSlide, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 225 360"
      className={`${className}`}
      onClick={prevSlide}
    >
      <path
        fill={color}
        d="M211.5 13.5c-18-18-45-18-63 0l-135 135c-18 18-18 45 0 63l135 135c9 9 22.5 13.5 31.5 13.5s22.5-4.5 31.5-13.5c18-18 18-45 0-63L108 180 211.5 76.5c18-18 18-45 0-63z"
      ></path>
    </svg>
  )
}

export default LeftArrowIcon