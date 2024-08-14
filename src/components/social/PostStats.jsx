import React, { useState } from 'react'
import Liked from '../icons/Liked'
import Like from '../icons/Like'
import CommentIcon from '../icons/CommentIcon'

function PostStats() {

  const [toggle, setToggle] = useState(false);
  const [isLiked, setLiked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const mountedStyle = { animation: "inAnimation 250ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
  };

  const handleLike = () => {
    setLiked(!isLiked);
    console.log(isLiked);
  }

  const handleToggle = () => {
    setIsMounted(!isMounted)
    if (!toggle) setToggle(true);
  }

  return (
    <div className='w-full'>
      <div className='flex justify-start gap-4 items-center z-20'>
        <div className='flex gap-2 mr-5 items-center'>
          <Like size={25} liked={isLiked} cursor={'cursor-pointer'} color={"#4b5563"} onClick={handleLike} />
          <p className='text-[14px] font-medium leading-[140%]lg:text-[16px]'>0</p>
        </div>
        <div className='flex gap-2 items-center'>
          <CommentIcon size={25} handleToggle={handleToggle} cursor={'cursor-pointer'} color={"#4b5563"} />
          <p className='text-[14px] font-medium leading-[140%]lg:text-[16px]'>0</p>
        </div>
      </div>
      {toggle && <div style={isMounted ? mountedStyle : unmountedStyle}
        onAnimationEnd={() => { if (!isMounted) setToggle(false) }}
        className=' w-full flex pt-6 items-center justify-center '>
        <div className='w-[100%]'>
          <div className='flex  items-center'>
            <div className=" pr-4 ">
              <div className="h-[50px] w-[50px] overflow-hidden rounded-[50%] bg-cover bg-center">
                <img className="h-[100%] w-[100%] rounded-[50%] object-cover object-center" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1705628003~exp=1705628603~hmac=92fe5c1a8a85c15dcea68a149f488d6ccbd18bb2eee35e6a5c1edd6f855ebc3e" alt="" />
              </div>
            </div>
            <input type="text" id="small-input" className="h-[2.5rem] block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-100 text-[0.9rem] focus:ring-0 focus:border-none placeholder:px-3 " placeholder="Escribe un comentario..." />
          </div>
        </div>
      </div>}
    </div>
  )
}

export default PostStats