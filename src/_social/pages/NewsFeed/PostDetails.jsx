// Dentro de PostDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Avatar, Button, Checkbox, MenuItem } from '@mui/material';
import { colors } from '../../../assets/MUI/Colors';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';

export const PostDetails = () => {
    const { postId } = useParams();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [post, setPost] = useState([])

    useEffect(() => {
        // ========= Peticion Get usando api Axios =================
        const getPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/adoptapatas/v1/posts/1`);
                setPost(response.data);
                console.log("GET Post", post);
            } catch (error) {
                console.log('Error al obtener detalles del post:', error);
            }
        };
        
        if (postId) {
            getPosts();
        }
    }, [postId]);
    return (
        <>

            <section className='main-auth grid sm:grid-cols-1 lg:grid-cols-1  gap-2 mx-auto bg-main-bg-color max-w-[40%] rounded-3xl border-2 border-buttonColor my-2'>
                <div className='m-7'>
                    <MenuItem >
                        <Avatar className='mx-2' alt={post.user} src="src\assets\img\About-Us\DanielIñiguezz.jpeg" sx={{ width: 40, height: 40, bgcolor: colors.buttonColor }} />{post.user} {post.user}
                    </MenuItem>
                    <p className='my-3 mx-auto w-[90%]'>{post.postContent}</p>
                    <img className='max-h-[80%] w-[90%] object-cover mx-auto rounded-2xl' src='src\assets\img\contact\Carousel\OIG (2).jpeg' alt="Img" />
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