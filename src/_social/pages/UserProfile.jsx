import React from 'react'
import TextareaPost from '../../components/shared/TextareaPost'
import ProfileHeaderCard from '../../components/social/ProfileHeaderCard'
import { provisionalUserProfilePosts } from '../../constants/provisionalUserProfilePosts'
import PostCard from '../../components/social/PostCard'
import axios from 'axios'
import { UserContext } from '../../_auth/context/UserContext'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function UserProfile() {
  const {usuario} = useContext(UserContext)
  const [userPosts, setUserPosts] = useState([])

  // ========= Peticion Get usando api Axios =================
  const getUserPosts = async () => {
    try {
      const response = await axios.get(`https://adoptapatas.onrender.com/adoptapatas/v1/posts/user-post/${usuario.id}`);
      setUserPosts(response.data);
      console.log("GET Axios", posts);
    } catch (error) {
      console.log('Error al obtener datos de publicaciones:', error);
    }
  };
  useEffect(() => {
    getUserPosts()
  }, [])
  return (
    <section className='max-w-[45rem] h-[800px] flex-col flex gap-2 lg:gap-4 pt-5 pb-10 lg:px-8 px-6 mx-0 lg:mx-10'>

      <div className='overflow-y-auto h-full flex-col flex gap-10 lg:gap-10 items-center'>
        <div className='w-full flex flex-col gap-5 '>
          <h4 className='text-[18px] md:text-[22px] font-["Open_Sans_Medium"] text-main-text-color tracking-[-.010rem]'>Mi Perfil</h4>
          <ProfileHeaderCard />
        </div>

        <div className=' w-full flex-col flex gap-2 lg:gap-4 '>
          <div className='w-full flex flex-col gap-5 '>
            <h4 className='text-[18px] md:text-[22px] font-["Open_Sans_Medium"] text-main-text-color tracking-[-.010rem]'>Mis publicaciones</h4>
            {userPosts.map(post => {
              return (
                <PostCard post={post} />
              )
            })}
          </div>
        </div>
      </div>

    </section>
  )
}

export default UserProfile