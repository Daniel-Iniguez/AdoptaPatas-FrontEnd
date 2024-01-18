// Dentro de PostDetails.jsx
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Button, Checkbox, MenuItem } from '@mui/material';
import { colors } from '../../../assets/MUI/Colors';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import { UserContext } from '../../../_auth/context/UserContext';
import { Textarea } from './TextArea';
import { CommentPost } from './CommentPost';
import './PostDetails.css'


export const PostDetails = () => {

    const [renderizar, setRenderizar] = useState(false);

    useEffect(() => {
        const temporizador = setTimeout(() => {
            setRenderizar(true);
        }, 500);

        // Limpieza del temporizador en caso de que el componente se desmonte antes de que se complete el temporizador
        return () => clearTimeout(temporizador);
    }, []); // El efecto se ejecuta solo en el montaje inicial del componente

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);
    const [commentContent, setCommentContent] = useState('')
    const [isValidComment, setIsValidComment] = useState(false)
    const { postId } = useContext(UserContext);
    const { usuario } = useContext(UserContext);
    console.log(postId);

    // ========= Peticion Get usando api Axios =================
    const getPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/adoptapatas/v1/posts/${postId}`);
            setPost(response.data);
            console.log("GET Post", response.data);
        } catch (error) {
            console.log('Error al obtener detalles del post:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getPosts()
    }, []);

    // ========= Peticion Get usando api Axios =================
    const getComment = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/adoptapatas/v1/comments/post/${postId}`);
            setComments(response.data);
            console.log("GET Comments", response.data);
        } catch (error) {
            console.log('Error al obtener comentarios:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getComment()
    }, []);

    if (loading) {
        return <p>Cargando...</p>; // Muestra un mensaje de carga mientras se realiza la petición
    }

    const HandleTextChange = (e) => {
        const text = e.target.value;
        console.log(text);
        if (text == '') {
            setIsValidComment(false);
        } else {
            setIsValidComment(true);
            setCommentContent(text);
        }
    }

    const HandleCommentSubmit = async (e) => {
        e.preventDefault();
        if (
            isValidComment
        ) {
            try {
                await CommentPost(commentContent, usuario.id, postId);
                setCommentContent('');
                console.log('publicado');
                getComment();
            } catch (error) {
                console.error('Error en la solicitud 1', error);
            }

        } else {
            console.log('Error en el formulario, verifica los datos');
        }
    }

    return renderizar ? <>
        <section className=' grid sm:grid-cols-1 lg:grid-cols-2  mx-auto bg-main-bg-color max-w-[100%] rounded-3xl border-2 border-buttonColor my-2'>
            <div className='m-7'>
                <img className='max-h-[100%] w-[100%] object-cover mx-auto rounded-2xl' src='src/assets/img/contact/Carousel/OIG (2).jpeg' alt='hola' />
            </div>
            <div className='border-l border-buttonColor  '>
                <div className='mx-auto border-b border-buttonColor '>
                    <MenuItem >
                        <Avatar className='mx-2 my-1' alt={post.user.firstName} src="src\assets\img\About-Us\DanielIñiguezz.jpeg" sx={{ width: 35, height: 35, bgcolor: colors.buttonColor }} /> <span className='title-username1'>@{post.user.username}</span>
                    </MenuItem>

                    <p className='my-3 ml-8 w-[90%] title-postContent'>{post.postContent}</p>
                </div>
                {comments.map((comment) => (
                    <section key={comment.id} className=' my-2 grid lg:grid-cols-12 '>

                        <div className=' my-auto col-span-2'>
                            <MenuItem >
                                <Avatar className='mx-2 my-1' alt={comment.user.firstName} src="src\assets\img\About-Us\DanielIñiguezz.jpeg" sx={{ width: 25, height: 25, bgcolor: colors.buttonColor }} /> <span className='title-username'>@{comment.user.username}</span>
                            </MenuItem>
                        </div>
                        <div className=' my-auto mx-8 col-span-10'>
                            <p className='mx-2 title-comment'> {comment.commentContent}</p>

                        </div>
                    </section>

                ))}
                <div className='text-start my-7 '>
                    <Textarea onChange={HandleTextChange} className='ml-2 title-comment min-w-[90%]' aria-label="minimum height" minRows={1} placeholder="escribe un comentario" required value={commentContent} />
                </div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 border-t border-buttonColor'>
                    <div className='mx-auto'>
                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /><span className='title-like'>Like</span>
                    </div>
                    <div className='mx-auto'>
                        <form onSubmit={HandleCommentSubmit}>
                            <Button variant="Contained" className='title-like' startIcon={<CommentIcon />} style={{ color: colors.mainTextColor, marginLeft: '3%' }} type='submit'>
                                Comentar
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </> : null
};


{/* <section className='main-auth grid sm:grid-cols-1 lg:grid-cols-1  gap-2 mx-auto bg-main-bg-color max-w-[40%] rounded-3xl border-2 border-buttonColor my-2'>
    <div className='m-7'>
        <MenuItem >
            <Avatar className='mx-2' alt={post.user.firstName} src="src\assets\img\About-Us\DanielIñiguezz.jpeg" sx={{ width: 40, height: 40, bgcolor: colors.buttonColor }} />{post.user.firstName} {post.user.lastName}
        </MenuItem>
        <p className='my-3 mx-auto w-[90%]'>{post.postContent}</p>
        <img className='max-h-[80%] w-[90%] object-cover mx-auto rounded-2xl' src='src\assets\img\contact\Carousel\OIG (2).jpeg' alt="Hola" />
    </div>
    <div className='grid lg:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2'>
        <div className='mx-auto'>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /><span>Like</span>
        </div>
        <div className='mx-auto'>
            <Button variant="Contained" startIcon={<CommentIcon />} style={{ color: colors.mainTextColor, marginLeft: '3%' }} >
                Comentar
            </Button>
        </div>
    </div>

</section> */}