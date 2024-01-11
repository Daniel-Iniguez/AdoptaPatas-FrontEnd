import React from 'react'

const ButtonApp = props => {
  return (
    <div className="w-[50%] mx-auto mt-10 mb-10 border-2 rounded-[50px] border-main-text-color bg-buttonColor hover:bg-main-text-color text-white">

      <button
        id={props.id}
        type={props.type}
        className="hover:text-white cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[1.3rem] flex justify-center align-middle w-full"
        onClick={props.onClick}
      >
        {props.title}
      </button>

    </div>
  )
}

export default ButtonApp