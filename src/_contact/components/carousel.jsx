import React from 'react'

const Carousel = (props) => {
  return (
    <img
            src={props.src}
            className="mx-auto max-w-[60%] rounded-[100%]"
            alt={props.alt}
          />
  )
}

export default Carousel;