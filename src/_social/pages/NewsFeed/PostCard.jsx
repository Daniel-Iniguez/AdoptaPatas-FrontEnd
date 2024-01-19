import React, { useState } from 'react'
import { colors } from '../../../assets/MUI/Colors';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import { Avatar, AvatarGroup, Box, Button, Checkbox, MenuItem, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../_auth/context/UserContext';
import { useContext } from 'react';
import './PostDetails.css'
import { PostDetails } from './PostDetails';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '1%',
    left: '20%',

    width: 400,
    pt: 2,
    px: 4,
    pb: 3,

};



export const PostCard = ({ posts }) => {

    const navigate = useNavigate();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    //const [postId, setPostId] = useState('');

    const { setPostId, setUserPostId, usuario } = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const handlePostClick = (postId) => {
        console.log(postId);
        setPostId(postId);
        setOpen(true);
    };
    const handleUserPostClick = (userPostId) => {
        navigate(`/user-post/${userPostId}`);
        console.log(userPostId);
        setUserPostId(userPostId);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeletePost = async (postId) => {
        const url = `http://localhost:8080/adoptapatas/v1/posts/${postId}`;
        try {
            const response = await axios.delete(url);
            console.log("%Publicación Eliminada", 'color: green; font-weight: bold;', response.data);
            alert("Publicación Eliminada!")
        } catch (error) {
            console.error('Error en la solicitud de eliminación', error);
            throw error.response.data;
        }
    }

    return (
        <>
            {posts.slice().reverse().map((post) => (
                <section key={post.id} className=' grid sm:grid-cols-1 lg:grid-cols-1  gap-2 mx-auto bg-main-bg-color max-w-[40%] rounded-3xl border-2 border-buttonColor my-2'>
                    <div className=' ' >
                        <div className='grid sm:grid-cols-1 lg:grid-cols-12'>
                            <div className='col-span-9'>
                                <MenuItem onClick={() => handleUserPostClick(post.user.id)} >
                                    <Avatar className='mx-2' alt={post.user.firstName} src="src\assets\img\About-Us\DanielIñiguezz.jpeg" sx={{ width: 40, height: 40, bgcolor: colors.buttonColor }} /> <span className='title-username1'>@{post.user.username}</span>
                                </MenuItem>
                            </div>
                            <div className='my-auto flex justify-center col-span-3 '>
                                
                                {post.user.id == usuario.id ?
                                    <Button className='title-like' variant="Contained" style={{ color: 'red', borderColor: 'red', width: '60%' }} onClick={() => handleDeletePost(post.id)}>
                                        eliminar
                                    </Button>
                                    : ''}
                            </div>
                        </div>
                        <p className='my-3 mx-auto w-[90%] title-postContent'>{post.postContent}</p>
                        <img className='max-h-[70%] w-[90%] object-cover mx-auto rounded-2xl' src={post.postImage} alt={post.postImage} />
                    </div>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2'>
                        <div className='mx-auto'>
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /><span className='title-like'>Like</span>
                        </div>
                        {/* VENTANA MODAL */}
                        <div>
                            <Button className='title-like' variant="Contained" startIcon={<CommentIcon />} style={{ color: colors.mainTextColor, marginLeft: '3%' }} onClick={() => handlePostClick(post.id)} /* onClick={() => handlePostClick(post.id)} */>
                                Comentar
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="parent-modal-title"
                                aria-describedby="parent-modal-description"
                            >
                                <Box sx={{ ...style, minWidth: '60%', maxHeight: '60%' }}>
                                    <PostDetails></PostDetails>

                                </Box>
                            </Modal>
                        </div>
                    </div>
                    {/* <Button onClick={() => handlePostClick(post.id)}>
                        <ModalPosts ></ModalPosts>
                    </Button> */}

                </section>
            ))}

        </>
    )
}
