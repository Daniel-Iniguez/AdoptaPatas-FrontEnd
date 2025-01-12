import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../_auth/context/UserContext'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function ProfileHeaderCard() {

  const {usuario} = useContext(UserContext)
  const [userPosts, setUserPosts] = useState([])

  // ========= Peticion Get usando api Axios =================
  const getUserPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/adoptapatas/v1/posts/user-post/${userPosts.usuario.id}`);
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
    <div
      className="w-full  md:mx-auto lg:mx-auto xl:mx-auto bg-white rounded-lg text-gray-900">
      <div className="rounded-t-lg h-40 overflow-hidden">
        <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
      </div>
      <div className="mx-auto w-40 h-40 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-40" src="https://img.freepik.com/free-photo/portrait-happy-smiley-man_23-2149022624.jpg?w=1480&t=st=1705451996~exp=1705452596~hmac=419ca553cbb84511e0be340ab1d6c7152e4315a2ed2a03e53175c37fe979923c" alt='User Profile Picture' />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-['Open_Sans_Semi'] text-[1.2rem]">{usuario.firstName} {usuario.lastName}</h2>
        <p className="text-gray-500 font-['Open_Sans_Medium']">{usuario.bio}</p>
      </div>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
          <p className='font-["Open_Sans_Semi"] text-gray-600'>Seguidores</p>
          <div className='font-["Open_Sans_Medium"] text-gray-500'>2k</div>
        </li>
        <li className="flex flex-col items-center justify-between">
          <p className='font-["Open_Sans_Semi"] text-gray-600'>Siguiendo</p>
          <div className='font-["Open_Sans_Medium"] text-gray-500'>10k</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <p className='font-["Open_Sans_Semi"] text-gray-600'>Publicaciones</p>
          <div className='font-["Open_Sans_Medium"] text-gray-500'>{userPosts.length}</div>
        </li>
      </ul>
      {/* Agregar modificacion que permita editar o ver perfil dependiendo usuario */}
      <div className="p-4 border-t mx-8 mt-2">
        <button className="w-1/2 transition ease-in duration-150 hover:shadow-md block mx-auto rounded-full bg-main-text-color hover:bg-white hover:text-main-text-color font-['Open_Sans_Semi'] text-white px-6 py-2">Seguir</button>
      </div>
    </div>
  )
}

export default ProfileHeaderCard