import React from 'react'
import { useState } from 'react';
import { colors } from '../../../assets/MUI/Colors';

import { UpdateUser } from './UpdateUser.js';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../../_auth/context/UserContext.jsx';
import { TextFieldStyle } from '../../../_auth/forms/TextFieldStyles.js';


function UpdatePorfile() {
    const { usuario, setUsuario } = useContext(UserContext);
    // valores y validaciones de los inputs
    const [userId, setUserId] = useState(usuario.id); 
    const [city, setCity] = useState(usuario.city); 
    const [state, setState] = useState(usuario.state); 
    const [name, setName] = useState(usuario.firstName); // Valor
    const [isValidName, setIsValidName] = useState(true); // Validación
    const [lastName, setLastName] = useState(usuario.lastName);
    const [isValidLastName, setIsValidLastName] = useState(true);
    const [userName, setUserName] = useState(usuario.username);
    const [isValidUserName, setIsValidUserName] = useState(true);
    const [email, setEmail] = useState(usuario.email);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [age, setAge] = useState(usuario.age);
    const [isValidAge, setIsValidAge] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState(usuario.phone);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const [userBio, setUserBio] = useState('');
    const [isValidUserBio, setIsValidUserBio] = useState(true);


    const user = {
        id: userId,
        firstName: name,
        lastName: lastName,
        username: userName,
        email: email,
        age: age,
        phone: phoneNumber,
        city: city,
        state: state,
        bio: userBio
    }

    const [isValidUser, setIsValidUser] = useState(false);

    //Validacion si ya existe un usuario y correo electronico
    const [existUser, setExistUser] = useState(false);
    const [existEmail, setExistEmail] = useState(false);

    //Error
    const [error, setError] = useState('');


    //Funciones para obtener el valor del input de cada campo
    const handleUserBioChange = (e) => {
        const nameValue = e.target.value;
        //console.log(nameValue);
        const regeName = /^[A-Za-z\s]+$/;
        if (nameValue.length <= 0 || nameValue.length > 200 || !nameValue.match(regeName)) {
            setIsValidUserBio(false);
        } else {
            setIsValidUserBio(true);
        }
        setUserBio(nameValue);
        console.log("handleUserBioChange called");
    };
    const handleNameChange = (e) => {
        const nameValue = e.target.value;
        //console.log(nameValue);
        const regeName = /^[A-Za-z\s]+$/;
        if (nameValue.length < 3 || nameValue.length > 50 || !nameValue.match(regeName)) {
            setIsValidName(false);
        } else {
            setIsValidName(true);
        }
        setName(nameValue);
        console.log("handleNameChange called");
    };
    const handleLastNameChange = (e) => {
        const lastNameValue = e.target.value;
        //console.log(lastNameValue);
        const regeName = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/;
        if (lastNameValue.length < 4 || lastNameValue.length > 50 || !lastNameValue.match(regeName)) {
            setIsValidLastName(false);
        } else {
            setIsValidLastName(true);
        }
        setLastName(lastNameValue);
        console.log("handleLastNameChange called");

    };
    const handleUserNameChange = async (e) => {

        try {
            const userNameValue = e.target.value;
            //console.log(userNameValue);
            const response = await axios.get("http://localhost:8080/adoptapatas/v2/users");
            const users = response.data
            console.log(userNameValue);
            //const users = JSON.parse(localStorage.getItem('users')) || [];
            const existUser = users.find(u => (u.username === userNameValue));
            const regeName = /^[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*$/;
            if (userNameValue.length < 3 || userNameValue.length > 50 || !userNameValue.match(regeName)) {
                setIsValidUserName(false);
            } else {
                setExistUser(false);
                setIsValidUserName(true);
            }
            setUserName(userNameValue);
            console.log("%cRespuesta Existosa", 'color: green; font-weight: bold;', "handleUserNameChange called");
        } catch (error) {
            console.log(error);
        }
    };
    const handleEmailChange = async (e) => {
        try {
            const userEmail = e.target.value;
            //console.log(userEmail);
            const response = await axios.get("http://localhost:8080/adoptapatas/v2/users");
            const users = response.data
            console.log("GET Axios", users.data);
            //const users = JSON.parse(localStorage.getItem('users')) || [];
            const existEmail = users.find(u => (u.email === userEmail));
            const regeName = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (userEmail.length < 1 || userEmail.length > 50 || !userEmail.match(regeName)) {
                setIsValidEmail(false);
            } else {
                setExistEmail(false)
                setIsValidEmail(true);
            }
            setEmail(userEmail);
            console.log("%cRespuesta Existosa", 'color: green; font-weight: bold;', "handleEmailChange called");
        } catch (error) {
            console.log(error);
        }
    };
    const handleAgeChange = (e) => {
        const userAge = e.target.value;
        //console.log(userAge);
        if (userAge < 18 || userAge > 125) {
            setIsValidAge(false);
        } else {
            setIsValidAge(true);
        }
        setAge(userAge);
        console.log("handleAgeChange called");
    };
    const handleNumberChange = (e) => {
        const userPhoneNumber = e.target.value;
        //console.log(userPhoneNumber);
        if (userPhoneNumber.length < 10 || userPhoneNumber.length > 12) {
            setIsValidPhoneNumber(false);
        } else {
            setIsValidPhoneNumber(true);
        }
        setPhoneNumber(userPhoneNumber);
        console.log("handlePhoneNumberChange called");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Verifica si todos los campos son válidos antes de proceder
        if (
            isValidName &&
            isValidLastName &&
            isValidUserName &&
            isValidEmail &&
            isValidAge &&
            isValidPhoneNumber &&
            isValidUserBio &&
            !existUser && !existEmail
        ) {
            try {
                await UpdateUser(userId, name, lastName, userName, email, age, phoneNumber, userBio);
                setUsuario(user)
                setIsValidUser(true);
                alert("Se acualizaron los datos");
            } catch (error) {
                console.error('Error en la solicitud', error);
                setError('Error en la solicitud');
            }

        } else {
            setIsValidUser(false);
            setError('Error en el formulario, verifica los datos');
            console.log('Error en el formulario, verifica los datos');
        }
    };

    return (
        <>
            <main className="main-auth grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1  gap-2 mx-auto bg-main-bg-color rounded-3xl ">
                {/* Formulario */}
                <div className=" col-span-3 my-auto text-main-text-color ">
                    <h2 className="my-10 text-center text-[4rem]" id='place-signUp'>Actualiza tus Datos:</h2>
                    {!isValidUser ? <p className='text-center text-[2rem] mb-10' style={{ color: 'red' }}>{error}</p> : ''}
                    <form className='mx-auto max-w-[85%]' onSubmit={handleSubmit} >
                        <TextFieldStyle
                            id="name"
                            type='text'
                            label="Nombre(s)"
                            variant="standard"
                            value={name}
                            helperText={isValidName ? '' : 'Nombre Invalido'}
                            required
                            error={!isValidName}
                            fullWidth
                            inputProps={{ style: { textTransform: "capitalize" } }}
                            onChange={handleNameChange}
                            sx={{ marginBottom: '1%' }}
                        />
                        <TextFieldStyle
                            id="lastName"
                            label="Apellidos"
                            variant="standard"
                            value={lastName}
                            helperText={isValidLastName ? '' : 'Apellido Invalido'}
                            required
                            error={!isValidLastName}
                            fullWidth
                            onChange={handleLastNameChange}
                            sx={{ marginBottom: '1%' }}
                        />
                        <TextFieldStyle
                            id="userName"
                            label="Nombre de usuario"
                            variant="standard"
                            value={userName}
                            required
                            fullWidth
                            error={!isValidUserName || existUser}
                            helperText={isValidUserName ? (existUser ? 'El usuaro ya existe, pruebe con otro' : '') : 'Nombre de Usuario Invalido'}
                            onChange={handleUserNameChange}
                            sx={{ marginBottom: '1%' }}
                        />
                        <TextFieldStyle
                            id="email"
                            type='email'
                            label="Correo electrónico"
                            variant="standard"
                            value={email}
                            required
                            fullWidth
                            error={!isValidEmail || existEmail}
                            helperText={isValidEmail ? (existEmail ? 'El correo ya esta en uso, pruebe con otro' : '') : 'Email Invalido'}
                            onChange={handleEmailChange}
                            sx={{ marginBottom: '1%' }}
                        />
                        <TextFieldStyle
                            type='Number'
                            id="age"
                            label="Edad"
                            variant="standard"
                            value={age}
                            fullWidth
                            required
                            error={!isValidAge}
                            helperText={isValidAge ? '' : 'Debes ser mayor de edad'}
                            onChange={handleAgeChange}
                            sx={{ marginBottom: '1%' }}
                        />
                        <TextFieldStyle
                            type='Number'
                            id="phone"
                            label="Teléfono"
                            variant="standard"
                            value={phoneNumber}
                            fullWidth
                            required
                            error={!isValidPhoneNumber}
                            helperText={isValidPhoneNumber ? '' : 'Numero de 10 o 12 digitos'}
                            onChange={handleNumberChange}
                            inputProps={{ maxLength: 10 }}
                            sx={{ marginBottom: '1%' }}
                        />
                        <TextFieldStyle
                            id="userBio"
                            label="Bio"
                            variant="standard"
                            value={userBio}
                            fullWidth
                            error={!isValidUserBio || existUser}
                            helperText={isValidUserBio ? '' : 'Bio Invalida Invalido'}
                            onChange={handleUserBioChange}
                            sx={{ marginBottom: '1%' }}
                        />
                        <div className="w-[50%] mx-auto mt-10 border-2 rounded-[50px] border-buttonColor bg-buttonColor hover:bg-main-text-color  text-white my-3 ">
                            <button
                                id="buttonContact"
                                className="cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[1.3rem] flex justify-center align-middle w-full"
                            >
                                Actualizar
                            </button>
                        </div>

                    </form>
                </div>

            </main>


        </>
    )
}

const placeMx = [
    { label: 'Ciudad de México' },
    { label: 'Guadalajara' },
    { label: 'Monterrey' },
    { label: 'Puebla' },
    { label: 'Tijuana' },
    { label: 'Ciudad Juárez' },
    { label: 'León' },
    { label: 'Zapopan' },
    { label: 'Monclova' },
    { label: 'Cancún' },
    { label: 'Mérida' },
    { label: 'Acapulco' },
    { label: 'Querétaro' },
    { label: 'Toluca' },
    { label: 'Morelia' },
    { label: 'Tuxtla Gutiérrez' },
    { label: 'Culiacán' },
    { label: 'Hermosillo' },
    { label: 'Chihuahua' },
    { label: 'Oaxaca' },
    { label: 'Aguascalientes' },
    { label: 'Cuernavaca' },
    { label: 'Tampico' },
    { label: 'Veracruz' },
    { label: 'Campeche' },
    { label: 'Mazatlán' },
    { label: 'Xalapa' },
    { label: 'La Paz' },
    { label: 'Saltillo' },
];

const usersType = [
    { label: 'Individual' },
    { label: 'Shelter' },
];


export default UpdatePorfile;