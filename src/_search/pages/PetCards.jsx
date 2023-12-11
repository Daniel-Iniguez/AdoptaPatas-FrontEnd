import './pet-cards.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import AddObjectModal from './Adopt/AddObjectModal';


export const PetCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [objects, setObjects] = useState([]);
  const [editIndex, setEditIndex] = useState();
  
  const handleAddObject = (newObject) => {
    setObjects([...objects, newObject]);
    // Guardar en el local storage
    localStorage.setItem('objects', JSON.stringify([...objects, newObject]));

  };

  const handleEditClick = (index) => {
    // Abre el modal para editar el objeto en la posición 'index'
    setEditIndex(index);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const storedObjects = JSON.parse(localStorage.getItem('objects')) || [];
    setObjects(storedObjects);
  }, []);

  const handleEditObject = (editedObject) => {
    const updatedObjects = [...objects];
    updatedObjects[editIndex] = editedObject;

    setObjects(updatedObjects);
    localStorage.setItem('objects', JSON.stringify(updatedObjects));
    setIsModalOpen(false);
    setEditIndex(null);
  };

  console.log("Objeto a editar:", editIndex !== null ? objects[editIndex] : null);

  console.log(objects)
  return (

    <>
      <h1 className='mainText mx-24 my-4 text-main-text-color text-[4.2rem] flex justify-center'>Empecemos. Busque mascotas en refugios, rescates e individuos.</h1>
      <form className='text-center max-w-[60%] mx-auto mt-10 bg-secondary-bg-color p-10 rounded-3xl'>
        <div className="form-floating mb-3  max-w-[100%]">
          <select className="rounded-md p-4 form-select " aria-label="Default select example" name='lugar' >
            <option value=''>Selecciona ciudad</option>
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
          <select className="border-black rounded-md p-4 mx-5 form-select" aria-label="Default select example" name="tipo" >
            <option value=''>Perro - Gato</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </select>
          <select className="rounded-md p-4 mr-5 form-select" aria-label="Default select example" name="tamaño"  >
            <option value=''>Tamaño</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
          <select className="mr-5 rounded-md p-4 form-select" aria-label="Default select example" name="edad"  >
            <option value=''>Edad</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Joven">Joven</option>
            <option value="Adulto">Adulto</option>
            <option value="Viejito">Viejito</option>
          </select>
          <select className="rounded-md p-4 form-select" aria-label="Default select example" name="sexo"  >
            <option value=''>Sexo</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>

        </div>
        <div>
          <button
            type="button"
            className="min-w-[75%] inline-block align-middle text-center select-none border font-normal whitespace-no-wrap mt-5 py-2 px-3 leading-normal no-underline bg-pink text-white hover:bg-blue-600 rounded-full"
          >
            Buscar Mascota...
          </button>
        </div>
      </form>

      <h2 className='secondaryText text-main-text-color text-[4rem] flex justify-center'>Resultado para Perros... </h2>

      <p className=' text-main-text-color text-[2rem] mx-20 flex justify-center my-3'>¡Encuentra a tu compañero perfecto en AdoptaPatas.
        Utiliza nuestra herramienta de búsqueda avanzada para descubrir mascotas que se adapten a tu hogar y estilo de vida. </p>

      <div className="flex justify-center my-10">
        <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600" onClick={() => {
          setIsModalOpen(true)
        }} >
          Publica una mascota</button>

        <AddObjectModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditIndex(null); // Restablecer editIndex a null al cerrar el modal
          }}
          onAddObject={handleAddObject}
          editObject={editIndex !== null ? objects[editIndex] : null}
          onEditObject={handleEditObject}
        />
      </div>
      <Grid container spacing={2} >
        {objects.map((objeto, index) => (
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
                <Button onClick={() => handleEditClick(index)}>Editar</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

