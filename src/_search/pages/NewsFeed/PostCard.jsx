import React from 'react'
import { colors } from '../../../assets/MUI/Colors';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Avatar, Button, Checkbox, MenuItem } from '@mui/material';

export const PostCard = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <section className='main-auth grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1  gap-2 mx-auto bg-main-bg-color max-w-[40%] rounded-3xl border-2 border-buttonColor my-2'>
            <div className='m-7'>
                <MenuItem >
                    <Avatar className='mx-2' alt='Daniel' src="src\assets\img\About-Us\DanielIñiguezz.jpeg" sx={{ width: 40, height: 40, bgcolor: colors.buttonColor }} /> Daniel Iñiguez
                </MenuItem>
                <p className='my-3 mx-auto w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt eius rem omnis illo est temporibus suscipit cum! Officia eaque iusto laboriosam nam tempore quis vel deserunt ab numquam quae?</p>
                <img className='max-h-[80%] w-[90%] object-cover mx-auto rounded-2xl' src='src\assets\img\contact\Carousel\OIG (2).jpeg' alt="Hola" />
            </div>
            <div className='grid lg:grid-cols-2'>
                <div className='mx-auto'>
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /><span>Like</span>
                </div>
                <div className='mx-auto'>
                    <Button component="label" variant="contained" startIcon={<CommentIcon  />}>
                        Foto
                    </Button>
                </div>
            </div>

        </section>
    )
}
