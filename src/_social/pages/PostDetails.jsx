import React from 'react'

import { useLocation, Link } from 'react-router-dom'
import PostStats from '../../components/social/PostStats';

function PostDetails() {
  const locationHook = useLocation();
  const user = locationHook.state || {};

  if (!user) {
    return (
      <section className='max-w-[45rem] h-[800px] flex-col flex gap-2 lg:gap-4 pt-5 pb-10 lg:px-8 px-6  mx-0 lg:mx-10'>
        <h1 className='text-[22px] md:text-[29px] font-["Open_Sans_Medium"] text-main-text-color tracking-[-.010rem]'>Ooops! Algo pasó, intenta más tarde.</h1>
        <Link to="/social/home">
          <button>Regresar a Inicio</button>
        </Link>
      </section>
    );
  }
  const { id, location, imageUrl, username, createdAt, postImage, caption } = user;

  return (
    <section className='max-w-[45rem] h-[800px] flex-col flex gap-2 lg:gap-4 pt-5 pb-10 lg:px-8 px-6 mx-0 lg:mx-10'>
      <div className=' w-full flex-col flex gap-2 lg:gap-4 '>
        <div className='w-full flex flex-col gap-5 '>
          <h4 className='text-[18px] md:text-[22px] font-["Open_Sans_Medium"] text-main-text-color tracking-[-.010rem]'>Detalles de la publicación</h4>
          <div className='bg-white rounded-3xl border border-dark-4 p-5 lg:p-7 w-full max-w-screen-sm'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <Link to={`/social/profile/${id}`}>
                  <img src={imageUrl} alt="" className='rounded-full w-12 h-12 object-cover object-center' />
                </Link>
                <div className='flex flex-col'>
                  <p className='text-[16px] font-medium leading-[140%] lg:text-[18px] lg:font-bold text-main-text-color'>{username}</p>
                  <div className='flex justify-center items-center gap-2 text-gray-600'>
                    <p className='text-[12px] font-semibold leading-[140%] lg:text-[14px] lg:font-normal'>{createdAt}</p>
                    -
                    <p className='text-[12px] font-semibold leading-[140%] lg:text-[14px] lg:font-normal'>{location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-[14px] font-medium leading-[140%] lg:text-[16px] lg:font-medium py-5'>
              <p>{caption}</p>
            </div>
            <img src={postImage} className='h-80 xs:h-[400px] lg:h-[400px] w-full rounded-[24px] object-cover mb-5' />

            <PostStats />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostDetails