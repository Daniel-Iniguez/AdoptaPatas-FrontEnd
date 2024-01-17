import React, { useState } from 'react'
import { colors } from '../../../assets/MUI/Colors';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import { Avatar, Button, Checkbox, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PostDetails } from './PostDetails';
import { UserContext } from '../../../_auth/context/UserContext';
import { useContext } from 'react';

export const PostCard = ({posts}) => {
    const navigate = useNavigate();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    //const [postId, setPostId] = useState('');

    const { setPostId } = useContext(UserContext);
    const handlePostClick = (postId) => {
        navigate(`/post-detail/${postId}`);
        console.log(postId);
        setPostId(postId);
      };

      
      

    return (
        <>
            {posts.slice().reverse().map((post) => (
                <section key={post.id} className=' grid sm:grid-cols-1 lg:grid-cols-1  gap-2 mx-auto bg-main-bg-color max-w-[40%] rounded-3xl border-2 border-buttonColor my-2'>
                    <div className='m-7' >
                        <MenuItem >
                            <Avatar className='mx-2' alt={post.user.firstName} src="src\assets\img\About-Us\DanielIñiguezz.jpeg" sx={{ width: 40, height: 40, bgcolor: colors.buttonColor }} />{post.user.firstName} {post.user.lastName}
                        </MenuItem>
                        <p className='my-3 mx-auto w-[90%]'>{post.postContent}</p>
                        <img className='max-h-[80%] w-[90%] object-cover mx-auto rounded-2xl' src='src/assets/img/contact/Carousel/OIG (2).jpeg' alt={post.postImage} />
                    </div>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2'>
                        <div className='mx-auto'>
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /><span>Like</span>
                        </div>
                        <div className='mx-auto'>
                            <Button variant="Contained" startIcon={<CommentIcon />} style={{ color: colors.mainTextColor, marginLeft: '3%' }}  onClick={() => handlePostClick(post.id)}>
                                Comentar
                            </Button>
                        </div>
                    </div>

                </section>
            ))}
            
        </>
    )
}
