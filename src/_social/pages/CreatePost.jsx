import React from 'react'
import AddPost from '../../components/icons/AddPost'
import PostForm from '../../components/social/PostForm'
import { useFormik } from 'formik'
import CreatePostIcon from '../../components/icons/CreatePostIcon'

function CreatePost() {

  return (
    <div className='flex flex-1 md:max-w-[50rem]'>
      <div className='flex flex-col flex-1 items-center gap-6 overflow-scroll py-10 px-5 md:px-8 lg:p-14'>
        <div className='max-w-5xl flex items-center gap-3 justify-start w-full'>
          <CreatePostIcon size={35} color={"#393838"} />
          < h3 className='text-[24px] md:text-[30px] font-["Open_Sans_Medium"] text-main-text-color leading-[140%] tracking-tight'>Crear una publicación</h3>
        </div>
        <PostForm />
      </div>
    </div>
  )
}

export default CreatePost