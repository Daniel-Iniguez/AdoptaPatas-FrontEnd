import './pet-cards.css'
import * as React from 'react';
import { PostCard } from './PostCard';
import { Textarea } from './TextArea';
import { Avatar, Button, MenuItem } from '@mui/material';
import { colors } from '../../../assets/MUI/Colors';
import ImageIcon from '@mui/icons-material/Image';
import { VisuallyHiddenInput } from './VisuallyHiddenInput'
import AddBoxIcon from '@mui/icons-material/AddBox';



export const NewsFeed = () => {
  //const [isModalOpen, setIsModalOpen] = useState(false);

  const HandleTextChange = (e) => {
    const text = e.target.value;
    console.log(text);
  }

  return (

    <>
      <section className='py-11 gap-10  pb-11 w-[100%] flex flex-col items-center justify-center'>
        {/*Top Bar*/}

        <div className="w-[80%] bg-secondary-bg-color rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="w-[100%] flex flex-col items-center gap-5">
            <h3 className="text-main-text-color font-['Open_Sans_Bold'] text-[2rem]">Que nos quieres compartir? </h3>
            <div className='w-[100%]'>
              <form action="">
                <div className="flex justify-center my-1">
                  <MenuItem >
                    <Avatar className='mx-2' alt='Daniel' src="src\assets\img\About-Us\DanielIñiguezz.jpeg" sx={{ width: 40, height: 40, bgcolor: colors.buttonColor }} />
                  </MenuItem>
                  <Textarea onChange={HandleTextChange} className='min-w-[50%]' aria-label="minimum height" minRows={3} placeholder="Que estas pensando...?" />
                </div>
                <div className="mx-auto my-3">
                  <Button component="label" variant="outlined" startIcon={<ImageIcon />} style={{ color: colors.mainTextColor }} >
                    Subir Imagen
                    <VisuallyHiddenInput type="file" />
                  </Button>
                  <Button component="label" variant="outlined" startIcon={<AddBoxIcon />} style={{ color: colors.mainTextColor, marginLeft: '3%' }}  >
                    Publicar
                  </Button>


                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <PostCard></PostCard>




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

