import React from 'react'
import { useState } from 'react';

export const SignUpValidation = (isValidName, name) => {
  // valores de los inputs
  const [name, setName] = useState('');

  // validadores de los inputs
  const [isValidName, setIsValidName] = useState(true);

  const handleInputNameChange = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    const regeName = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/;
    if (inputValue.length < 3 || inputValue.length > 50 || !inputValue.match(regeName)
    ) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
    setName(inputValue);
    console.log("handleInputNameChange called");

  };
}
