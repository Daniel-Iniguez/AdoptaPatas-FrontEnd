import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Label, TextInput } from 'flowbite-react';

function UpdatePet() {
  const [pet, setPet] = useState({
    name: "",
    breed: "",
    age: "",
    location: "",
    image: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  const petId = location.pathname.split('/')[2];
  console.log(petId);

  const handleChange = (e) => {
    setPet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:9000/pets/" + petId, pet);
      navigate("/pets")
    } catch (err) {
      console.log(err);
    }
  }


  console.log(pet)
  return (
    <div className="flex w-5/6 md:w-[40%] items-center bg-main-bg-color flex-col gap-4 py-6 rounded-2xl">
      <h3>Editar información</h3>
      <div className="w-5/6">
        <div className="mb-2 block">
          <Label htmlFor="pet-name" value="Nombre:" />
        </div>
        <TextInput
          id="pet-name"
          type="text"
          placeholder="Agregar nombre..."
          onChange={handleChange}
          name='name'
          required />
      </div>
      <div className="w-5/6">
        <div className="mb-2 block">
          <Label htmlFor="pet-breed" value="Raza:" />
        </div>
        <TextInput
          id="pet-breed"
          type="text"
          placeholder="Agregar raza..."
          onChange={handleChange}
          name='breed'
          required />
      </div>
      <div className="w-5/6">
        <div className="mb-2 block">
          <Label htmlFor="pet-age" value="Edad:" />
        </div>
        <TextInput
          id="pet-age"
          type="text"
          placeholder="Adulto..."
          onChange={handleChange}
          name='age'
          required />
      </div>
      <div className="w-5/6">
        <div className="mb-2 block">
          <Label htmlFor="pet-location" value="Ubicación:" />
        </div>
        <TextInput
          id="pet-location"
          type="text"
          placeholder="Ciudad de México..."
          onChange={handleChange}
          name='location'
          required />
      </div>
      <div className="w-5/6 mb-8">
        <div className="mb-2 block">
          <Label htmlFor="pet-image" value="Agrega una imágen:" />
        </div>
        <TextInput
          id="pet-image"
          type="text"
          placeholder="URL..."
          onChange={handleChange}
          name='image'
          required />
      </div>
      <button
        href="#"
        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-20 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        onClick={handleClick}>
        Guardar
      </button>
    </div>
  )
}

export default UpdatePet