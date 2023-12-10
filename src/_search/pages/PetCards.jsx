import './pet-cards.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',

  p: 4,
};

export const PetCards = () => {
  const resultadoPet = (pet) => {
    if (pet == 'gato') {
      return pet = 'Gatos...';
    } else if (pet == 'dog') {
      return pet = 'Perros...';
    } else {
      return pet = 'Perros y gatos'
    }
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [arrayDeObjetos, setArrayDeObjetos] = useState(JSON.parse(localStorage.getItem('objetos')) || []);
  const [nuevoObjeto, setNuevoObjeto] = useState({ nombre: '', lugar: '', edad: '', tamaño: '', raza: '', imagen: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'imagen') {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          setNuevoObjeto({
            ...nuevoObjeto,
            imagen: e.target.result, // Guardar la imagen como base64
          });
        };
        reader.readAsDataURL(file); // Leer el archivo como base64
      }
    } else {
      setNuevoObjeto({ ...nuevoObjeto, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArrayDeObjetos([...arrayDeObjetos, nuevoObjeto]);
    setNuevoObjeto({ nombre: '', lugar: '', edad: '', tamaño: '', raza: '', imagen: '' });
  }

  useEffect(() => {
    localStorage.setItem('objetos', JSON.stringify(arrayDeObjetos));
  }, [arrayDeObjetos]);

  return (

    <>
      <form className='text-center max-w-[60%] mx-auto mt-10 bg-secondary-bg-color p-10 rounded-3xl'>
        <div className="form-floating mb-3  max-w-[100%]">
          <select className="rounded-md p-2 form-select" aria-label="Default select example" name='lugar' value={nuevoObjeto.lugar} onChange={handleChange}>
            <option selected="">Selecciona ciudad</option>
            <option value="Aguascalientes">Aguascalientes</option>
            <option value="Baja California">Baja California</option>
            <option value="Baja California Sur">Baja California Sur</option>
            <option value="Campeche">Campeche</option>
            <option value="Chiapas">Chiapas</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="Coahuila">Coahuila</option>
            <option value="Colima">Colima</option>
            <option value="Durango">Durango</option>
            <option value="Guanajuato">Guanajuato</option>
            <option value="Guerrero">Guerrero</option>
            <option value="Hidalgo">Hidalgo</option>
            <option value="Jalisco">Jalisco</option>
            <option value="Estado de México">Estado de México</option>
            <option value="Michoacán">Michoacán</option>
            <option value="Morelos">Morelos</option>
            <option value="Nayarit">Nayarit</option>
            <option value="Nuevo León">Nuevo León</option>
            <option value="Oaxaca">Oaxaca</option>
            <option value="Puebla">Puebla</option>
            <option value="Querétaro">Querétaro</option>
            <option value="Quintana Roo">Quintana Roo</option>
            <option value="San Luis Potosí">San Luis Potosí</option>
            <option value="Sinaloa">Sinaloa</option>
            <option value="Sonora">Sonora</option>
            <option value="Tabasco">Tabasco</option>
            <option value="Tamaulipas">Tamaulipas</option>
            <option value="Tlaxcala">Tlaxcala</option>
            <option value="Veracruz">Veracruz</option>
            <option value="Yucatán">Yucatán</option>
            <option value="Zacatecas">Zacatecas</option>
          </select>
          <select className="border-black rounded-md p-2 mx-2 form-select" aria-label="Default select example" name="edad" value={nuevoObjeto.edad} onChange={handleChange}>
            <option selected>Selecciona tipo</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </select>
          <select className="rounded-md p-2 mr-2 form-select" aria-label="Default select example" name="tamaño" value={nuevoObjeto.tamaño} onChange={handleChange}>
            <option selected>Tamaño</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
          <select className="rounded-md p-2 form-select" aria-label="Default select example" name="edad" value={nuevoObjeto.edad} onChange={handleChange}>
            <option selected>Edad</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Joven">Joven</option>
            <option value="Adulto">Adulto</option>
            <option value="Viejito">Viejito</option>
          </select>

        </div>
        <div>
          <button
            type="submit"
            className="min-w-[50%] inline-block align-middle text-center select-none border font-normal whitespace-no-wrap  py-1 px-3 leading-normal no-underline bg-pink text-white hover:bg-blue-600 rounded-full"
          >
            Buscar Mascota...
          </button>
        </div>
      </form>

      <h1 className='mainText text-main-text-color text-[5rem] flex justify-center'>Resultado para {resultadoPet('dog')} </h1>

      <p className=' text-main-text-color text-[2rem] flex justify-center my-3'>¡Encuentra a tu compañero perfecto en AdoptaPatas.
        Utiliza nuestra herramienta de búsqueda avanzada para descubrir mascotas que se
        adapten a tu hogar y estilo de vida. </p>

      <div className="flex justify-center my-10">
        <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600" onClick={handleOpen} >Publica una mascota</button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit} action="/upload" method="post" enctype="multipart/form-data">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  name="nombre"
                  placeholder='nombre'
                  value={nuevoObjeto.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <select className="form-select" aria-label="Default select example" name="edad" value={nuevoObjeto.edad} onChange={handleChange}>
                  <option selected>Edad</option>
                  <option value="Cachorro">Cachorro</option>
                  <option value="Joven">Joven</option>
                  <option value="Adulto">Adulto</option>
                  <option value="Viejito">Viejito</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="raza" className="form-label">
                  Raza
                </label>
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  name="raza"
                  value={nuevoObjeto.raza}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <select className="form-select" aria-label="Default select example" name="tamaño" value={nuevoObjeto.tamaño} onChange={handleChange}>
                  <option selected>Tamaño</option>
                  <option value="Pequeño">Pequeño</option>
                  <option value="Mediano">Mediano</option>
                  <option value="Grande">Grande</option>
                </select>
              </div>
              <div className="mb-3">
                <select className="form-select" aria-label="Default select example" name='lugar' value={nuevoObjeto.lugar} onChange={handleChange}>
                  <option selected="">Selecciona ciudad</option>
                  <option value="Aguascalientes">Aguascalientes</option>
                  <option value="Baja California">Baja California</option>
                  <option value="Baja California Sur">Baja California Sur</option>
                  <option value="Campeche">Campeche</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Coahuila">Coahuila</option>
                  <option value="Colima">Colima</option>
                  <option value="Durango">Durango</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Michoacán">Michoacán</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Nayarit">Nayarit</option>
                  <option value="Nuevo León">Nuevo León</option>
                  <option value="Oaxaca">Oaxaca</option>
                  <option value="Puebla">Puebla</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Quintana Roo">Quintana Roo</option>
                  <option value="San Luis Potosí">San Luis Potosí</option>
                  <option value="Sinaloa">Sinaloa</option>
                  <option value="Sonora">Sonora</option>
                  <option value="Tabasco">Tabasco</option>
                  <option value="Tamaulipas">Tamaulipas</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Veracruz">Veracruz</option>
                  <option value="Yucatán">Yucatán</option>
                  <option value="Zacatecas">Zacatecas</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="img" className="form-label">
                  Sube una imagen
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  name="imagen"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </Box>
        </Modal>
      </div>
      <Grid container spacing={2} >
        {arrayDeObjetos.map((objeto, index) => (
          <Grid item xs={12} lg={4} md={6} key={index} display="flex" justifyContent="center" alignItems="center" >
            <Card sx={{
              maxWidth: 400, minWidth: 500,
              '&:hover': { minWidth: 510, filter: 'drop-shadow(0 0 5px rgb(255, 0, 212))' },
            }} >
              <CardActionArea  >
                <CardMedia
                  sx={{ maxHeight: 400, minHeight: 400, maxWidth: "100%", }}
                  component="img"
                  image={objeto.imagen}
                  alt="green iguana"
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

