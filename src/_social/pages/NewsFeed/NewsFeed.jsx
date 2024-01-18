import './pet-cards.css'
import * as React from 'react';
import { PostCard } from './PostCard';
import { Textarea } from './TextArea';
import { Avatar, Button, Checkbox, MenuItem } from '@mui/material';
import { colors } from '../../../assets/MUI/Colors';
import ImageIcon from '@mui/icons-material/Image';
import { VisuallyHiddenInput } from './VisuallyHiddenInput'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { RegisterPost } from './RegisterPost';
import { useContext } from 'react';
import { UserContext } from '../../../_auth/context/UserContext';

export const NewsFeed = () => {
  const [posts, setPosts] = useState([])

  // ========= Peticion Get usando api Axios =================
  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/adoptapatas/v1/posts");
      setPosts(response.data);
      console.log("GET Axios", posts);
    } catch (error) {
      console.log('Error al obtener datos de publicaciones:', error);
    }
  };
  useEffect(() => {
    getPosts()
  }, [])

  const { usuario } = useContext(UserContext)
  const [postContent, setPostContent] = useState('')
  const [isValidDescription, setIsValidDescription] = useState(false)
  const [postImage, setPostImage] = useState('')
  const [isValidImage, setIsValidImage] = useState(false)
  const [isValidPost, setIsValidPost] = useState(false)
  const [user, setUser] = useState(usuario.id)

  const HandleTextChange = (e) => {
    const text = e.target.value;
    console.log(text);
    if (text == '') {
      setIsValidDescription(false);
    } else {
      setIsValidDescription(true);
      setPostContent(text);
    }
  }

  const HandleImage = (e) => {
    const img = e.target.value;
    setPostImage(img);
    console.log(img);
    if (img == '') {
      setIsValidImage(false);
    } else {
      setIsValidImage(true);
      setPostImage(img);
    }
  }

  const HandleSubmit = async (e) => {

    if (
      isValidDescription && isValidImage
    ) {
      try {
        await RegisterPost(user, postContent, postImage);
        setIsValidPost(true)
        setPostContent('');
        setPostImage('');
        console.log('publicado');
        getPosts()
      } catch (error) {
        console.error('Error en la solicitud 1', error);
      }

    } else {
      e.preventDefault();
      setIsValidPost(false);
      console.log('Error en el formulario, verifica los datos');
    }
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (

    <>
      <section className='py-11 gap-10  pb-11 w-[100%] flex flex-col items-center justify-center'>
        {/*Top Bar*/}

        <div className="w-[80%] bg-secondary2-bg-color border-2 border-buttonColor rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="w-[100%] flex flex-col items-center gap-5">
            <h3 className="text-main-text-color font-['Open_Sans_Bold'] text-[2rem]">Hola {usuario.firstName} Que nos quieres compartir? </h3>
            <div className='w-[100%]'>
              <div className="flex justify-center my-1">
                <MenuItem >
                  <Avatar className='mx-2' alt={usuario.firstName} src="src\assets\img\About-Us\DanielIñiguezz.jpeg" sx={{ width: 40, height: 40, bgcolor: colors.buttonColor }} />
                </MenuItem>
                <Textarea onChange={HandleTextChange} className='min-w-[50%]' aria-label="minimum height" minRows={3} placeholder="Que estas pensando...?" required value={postContent} />
              </div>
              <div className="flex justify-center my-auto">
                <ImageIcon className='mx-8' />
                <Textarea component="label" variant="Contained" onChange={HandleImage} value={postImage} startIcon={<ImageIcon />} minRows={1} placeholder="Ingresa el link de tu imagen:" required val style={{ color: colors.mainTextColor }} className='min-w-[50%]' >
                  {/* {postImage != '' ? postImage : 'Subir Imagen'} */}
                  {/* <VisuallyHiddenInput type="file" onChange={HandleImage} accept='image*' /> */}
                </Textarea>
              </div>
              <div className='flex justify-center my-auto'>
                <Button variant="Contained" startIcon={<AddBoxIcon />} style={{ color: colors.mainTextColor, marginLeft: '0%' }} type='button' onClick={HandleSubmit} className='mx-auto'>
                  Publicar
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>
      {<PostCard posts={posts}></PostCard>}
    </>
  )
}

{/* <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-buttonColor text-white hover:bg-blue-600" onClick={() => {
                      setIsModalOpen(true)
                    }} >
                      Realiza una publicacion</button>
                    <AddObjectModal
                      isOpen={isModalOpen}
                      onClose={() => {
                        setIsModalOpen(false);
                        setEditIndex(null); // Restablecer editIndex a null al cerrar el modal
                      }}
                      onAddObject={handleAddObject}
                      editObject={editIndex !== null ? objects[editIndex] : null}
                      onEditObject={handleEditObject}
                    /> */}

{/* <Grid container spacing={2} >
        {objects.map((objeto, index) => (
          <Grid item xs={12} lg={12} md={12} key={index} display="flex" justifyContent="center" alignItems="center" >
            <Card sx={{
              maxWidth: 400, minWidth: 500,
              '&:hover': { minWidth: 510, filter: 'drop-shadow(0 0 5px rgb(255, 0, 212))' },
            }} >
              <CardActionArea  >
                <CardMedia
                  sx={{ maxHeight: 400, minHeight: 400, maxWidth: "100%", }}
                  component="img"
                  image={objeto.imagen}
                  alt="foto"
                />
                <CardContent >
                  <Typography variant="h4" fontFamily={'Nunito Bold'}>{objeto.nombre}:</Typography>
                  <Typography color='#F28482' variant="h6" gutterBottom fontFamily={'Nunito Bold'}>
                    {objeto.lugar}
                  </Typography>
                  <p><b>Edad:</b> {objeto.edad}</p>
                  <p ><b>Tamaño:</b> {objeto.tamaño}</p>
                  <p className='inline'><b>Raza:</b> {objeto.raza}</p>
                </CardContent>
              </CardActionArea >
              <CardActions style={{ justifyContent: 'flex-end' }} >
                <Button variant="contained" color="secondary">Adoptame...</Button>
                <Button onClick={() => handleEditClick(index)}>Editar</Button>
                <Button onClick={() => handleDeleteObject(index)}>Eliminar</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid> */}

