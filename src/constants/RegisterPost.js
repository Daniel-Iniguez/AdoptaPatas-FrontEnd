import axios from "axios";

export const RegisterPost = async (user, postContent, postImage) => {
  // ========== Peticion POST usando api axios ================
  const url = "https://adoptapatas.onrender.com/adoptapatas/v1/posts";
    try {
      const posts = {
        user: {id:user},
        postContent: postContent,
        postImage: postImage,
      }
      const response = await axios.post(url, posts);
      console.log("%cRespuesta Existosa",'color: green; font-weight: bold;', response.data);
    } catch (error) {
      console.error('Error en la solicitud 2', error);
      throw error.response.data;
    }
  
}