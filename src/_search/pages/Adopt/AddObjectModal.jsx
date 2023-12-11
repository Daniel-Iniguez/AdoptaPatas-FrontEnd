import React, { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { useEffect } from 'react';

const AddObjectModal = ({ isOpen, onClose, onAddObject, editObject, onEditObject }) => {

  const [formData, setFormData] = useState({
    nombre: editObject ? editObject.nombre : '',
    edad: editObject ? editObject.edad : '',
    raza: editObject ? editObject.raza : '',
    tamaño: editObject ? editObject.tamaño : '',
    lugar: editObject ? editObject.lugar : '',
    imagen: editObject ? editObject.imagen : null,
    // Agrega aquí más campos según sea necesario
  });

  console.log("Edit Object:", editObject);
  console.log("Form Data:", formData);

  const handleChange = (e) => {
    console.log("Evento:", e.target.name, e.target.value);
    if (e.target.name === 'imagen') {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData({ ...formData, imagen: reader.result });
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {

    editObject ? onEditObject(formData) : onAddObject(formData);

    setFormData({
      nombre: '',
      edad: '',
      raza: '',
      tamaño: '',
      lugar: '',
      imagen: null,
      // Reiniciar otros campos si es necesario
    });
    onClose();

  };

  useEffect(() => {
    if (editObject) {
      setFormData((prevData) => ({
        ...prevData,
        imagen: editObject.imagen || null,
      }));
    }
  }, [editObject]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',

        p: 4,
      }}>
        <h2>{editObject ? 'Editar Objeto' : 'Agregar Objeto'}</h2>
        <form onSubmit={handleSubmit} action="/upload" method="post" encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              name="nombre"
              placeholder='nombre'
              value={editObject ? editObject.nombre : formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="Default select example" name="edad" value={editObject ? editObject.edad : formData.edad} onChange={handleChange}>
              <option value=''>Edad</option>
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
              value={editObject ? editObject.raza : formData.raza}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="Default select example" name="tamaño" value={editObject ? editObject.tamaño : formData.tamaño} onChange={handleChange}>
              <option value=''>Tamaño</option>
              <option value="Pequeño">Pequeño</option>
              <option value="Mediano">Mediano</option>
              <option value="Grande">Grande</option>
            </select>
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="Default select example" name='lugar' value={editObject ? editObject.lugar : formData.lugar} onChange={handleChange}>
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
            {formData.imagen && (
              <img
                src={formData.imagen}
                alt="preview"
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            )}
          </div>
          <button
            type="submit"
            className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
          >
            {editObject ? 'Editar' : 'Agregar'}
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddObjectModal;