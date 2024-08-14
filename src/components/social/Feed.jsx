import React from 'react'
import { provisionalUserData } from '../../constants/provisionalUserData';
import PostCard from './PostCard';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Feed() {

  const [posts, setPosts] = useState([])

  // ========= Peticion Get usando api Axios =================
  const getPosts = async () => {
    try {
      const response = await axios.get("localhost:8080/adoptapatas/v1/posts");
      setPosts(response.data);
      console.log("GET Axios", posts);
    } catch (error) {
      console.log('Error al obtener datos de publicaciones:', error);
    }
  };
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className='w-full flex flex-col gap-5 px-5 lg:px-0 items-center'>
      {posts.map(post => {
        return (
          <PostCard key={post.id}  post={post} />
        );
      })}
    </div>
  )
}

export default Feed