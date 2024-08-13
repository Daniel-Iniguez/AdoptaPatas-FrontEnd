import React from 'react'
import { Link } from 'react-router-dom'
import PostStats from './PostStats'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function PostCard({ post }) {

  return (
    <div className='bg-white rounded-3xl border border-dark-4 p-5 lg:p-7 w-full max-w-screen-sm'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <Link to={`/social/profile/${post.user.id}`}>
            <img src='{.imageUrl}' alt="" className='rounded-full w-12 h-12 object-cover object-center' />
          </Link>
          <div className='flex flex-col'>
            <p className='text-[16px] font-medium leading-[140%] lg:text-[18px] lg:font-bold text-main-text-color'>{post.user.firstName}</p>
            <div className='flex justify-center items-center gap-2 text-gray-600'>
              <p className='text-[12px] font-semibold leading-[140%] lg:text-[14px] lg:font-normal'>'12/23/23'</p>
              -
              <p className='text-[12px] font-semibold leading-[140%] lg:text-[14px] lg:font-normal'>Guadalajara</p>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/social/posts/1`}  >
        <div className='text-[14px] font-medium leading-[140%] lg:text-[16px] lg:font-medium py-5'>
          <p>{post.postContent}</p>
        </div>
        <img src={post.postImage} className='h-80 xs:h-[400px] lg:h-[400px] w-full rounded-[24px] object-cover mb-5' />
      </Link>
      <PostStats />
    </div>
  )
}

export default PostCard