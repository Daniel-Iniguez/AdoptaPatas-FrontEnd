import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ObjectForm = ({ onSubmit, initialObject = {} }) => {
  const [object, setObject] = useState(initialObject);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(object);
    setObject({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObject({ ...object, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={object.name || ''} onChange={handleChange} />
      <input type="text" name="description" value={object.description || ''} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};



export const Contact = () => {
  const [objects, setObjects] = useState(JSON.parse(localStorage.getItem('objects')) || []);

  useEffect(() => {
    localStorage.setItem('objects', JSON.stringify(objects));
  }, [objects]);

  const handleAddObject = (newObject) => {
    setObjects([...objects, newObject]);
  };

  const handleEditObject = (editedObject, index) => {
    const updatedObjects = [...objects];
    updatedObjects[index] = editedObject;
    setObjects(updatedObjects);
  };

  const handleDeleteObject = (index) => {
    const updatedObjects = objects.filter((_, i) => i !== index);
    setObjects(updatedObjects);
  };

  return (
    <div>
      {/* Formulario para agregar objetos */}
      <ObjectForm onSubmit={handleAddObject} />

      {/* Mostrar lista de objetos */}
      <ul>
        {objects.map((obj, index) => (
          <li key={index}>
            {obj.name} --- {obj.description} ----

            {/* Botones para editar y eliminar */}
            <button onClick={() => handleEditObject(obj, index)}>Editar</button>
            <button onClick={() => handleDeleteObject(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


