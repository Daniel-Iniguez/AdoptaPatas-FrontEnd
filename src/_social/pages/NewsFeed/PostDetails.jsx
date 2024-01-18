// Dentro de PostDetails.jsx
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Button, Checkbox, MenuItem } from '@mui/material';
import { colors } from '../../../assets/MUI/Colors';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import { UserContext } from '../../../_auth/context/UserContext';
import { Textarea } from './TextArea';

export const PostDetails = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);
    const { postId } = useContext(UserContext);
    const [postContent, setPostContent] = useState('')
    const [isValidComment, setIsValidComment] = useState(false)
    console.log(postId);


    useEffect(() => {
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
        getPosts()


    }, []);
    useEffect(() => {
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
            setPostContent(text);
        }
    }



    return (
        <>
            <section className=' grid sm:grid-cols-1 lg:grid-cols-2  mx-auto bg-main-bg-color max-w-[50%] rounded-3xl border-2 border-buttonColor my-2'>
                <div className='m-7'>
                    <img className='max-h-[100%] w-[90%] object-cover mx-auto rounded-2xl' src='src/assets/img/contact/Carousel/OIG (2).jpeg' alt='hola' />
                </div>
                <div className=''>
                    <div className='mx-auto'>
                        <MenuItem >
                            <Avatar className='mx-2 my-2' alt={post.user.firstName} src="src\assets\img\About-Us\DanielIñiguezz.jpeg" sx={{ width: 35, height: 35, bgcolor: colors.buttonColor }} />{post.user.firstName} {post.user.lastName}
                        </MenuItem>
                        <p className='my-3 ml-3 w-[90%]'>{post.postContent}</p>
                    </div>
                    {comments.map((comment) => (
                        <div key={comment.id}>
                            {comment.commentContent}
                        </div>
                    ))}
                    <div>
                        <Textarea onChange={HandleTextChange} className='max-w-[80%]' aria-label="minimum height" minRows={1} placeholder="escribe un comentario" required value={postContent} />
                    </div>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2'>
                        <div className=''>
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /><span>Like</span>
                        </div>
                        <div className=''>
                            <Button variant="Contained" startIcon={<CommentIcon />} style={{ color: colors.mainTextColor, marginLeft: '3%' }} >
                                Comentar
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
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