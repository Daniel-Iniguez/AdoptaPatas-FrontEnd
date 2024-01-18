import axios from "axios";

export const CommentPost = async (commentContent, user, post) => {
  // ========== Peticion POST usando api axios ================
  const url = "http://localhost:8080/adoptapatas/v1/comments";
    try {
      const commentPost = {
        commentContent: commentContent,
        user: {id:user},
        post: {id:post},
      }

      const response = await axios.post(url, commentPost);
      console.log("%cRespuesta Existosa",'color: green; font-weight: bold;', response.data);
    } catch (error) {
      console.error('Error en la solicitud 2', error);
      throw error.response.data;
    }
  
}