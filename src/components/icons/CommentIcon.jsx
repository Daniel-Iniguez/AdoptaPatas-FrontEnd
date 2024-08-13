import React from 'react'

function CommentIcon({ size, color, cursor, handleToggle }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`${cursor}`}
      onClick={handleToggle}
    >
      <g>
        <g fill="none" fillRule="evenodd" strokeWidth="0">
          <g fill={color} transform="translate(-204 -255)">
            <path d="M228 267a2 2 0 10.001 4.001A2 2 0 00228 267zm-8 14c-1.168 0-2.296-.136-3.38-.367l-4.708 2.83.063-4.639c-3.609-2.17-5.975-5.758-5.975-9.824 0-6.627 6.268-12 14-12s14 5.373 14 12c0 6.628-6.268 12-14 12zm0-26c-8.836 0-16 6.269-16 14 0 4.419 2.345 8.354 6 10.919V287l7.009-4.253c.97.16 1.968.253 2.991.253 8.836 0 16-6.268 16-14 0-7.731-7.164-14-16-14zm-8 12a2 2 0 10.001 4.001A2 2 0 00212 267zm8 0a2 2 0 10.001 4.001A2 2 0 00220 267z"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default CommentIcon