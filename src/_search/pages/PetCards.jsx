import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './pet-cards.css'
import { Hidden } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export const PetCards = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Item className='mainText'>Resultado para perros..</Item>
      </Grid>
    </Grid>
  </Box>

    
  )
}

