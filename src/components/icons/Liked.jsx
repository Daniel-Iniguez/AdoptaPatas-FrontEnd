import React from 'react'

function Liked({ size, cursor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
      className={cursor}
    >
      <path
        fill="#F14D4D"
        d="M1.667 7.614c0 4.053 3.35 6.212 5.801 8.145.865.682 1.699 1.324 2.532 1.324s1.667-.642 2.532-1.324c2.452-1.933 5.801-4.092 5.801-8.145 0-4.052-4.583-6.926-8.333-3.03C6.25.688 1.667 3.562 1.667 7.614z"
      ></path>
    </svg>
  )
}

export default Liked