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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    pt: 2,
    px: 4,
    pb: 3,

};

export const PostCard = ({ posts }) => {
    //const navigate = useNavigate();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    //const [postId, setPostId] = useState('');

    const { setPostId } = useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const handlePostClick = (postId) => {
        //navigate(`/post-detail/${postId}`);
        console.log(postId);
        setPostId(postId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {posts.slice().reverse().map((post) => (
                <section key={post.id} className=' grid sm:grid-cols-1 lg:grid-cols-1  gap-2 mx-auto bg-main-bg-color max-w-[40%] rounded-3xl border-2 border-buttonColor my-2'>
                    <div className='m-7' >
                        <MenuItem >
                            <Avatar className='mx-2' alt={post.user.firstName} src="src\assets\img\About-Us\DanielIñiguezz.jpeg" sx={{ width: 40, height: 40, bgcolor: colors.buttonColor }} /> <span className='title-username1'>{post.user.firstName} {post.user.lastName}</span>
                        </MenuItem>
                        <p className='my-3 mx-auto w-[90%] title-postContent'>{post.postContent}</p>
                        <img className='max-h-[80%] w-[90%] object-cover mx-auto rounded-2xl' src='src/assets/img/contact/Carousel/OIG (2).jpeg' alt={post.postImage} />
                    </div>
                    <div>
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
                                <Box sx={{ ...style, minWidth: '80%', maxHeight: '80%' }}>
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
