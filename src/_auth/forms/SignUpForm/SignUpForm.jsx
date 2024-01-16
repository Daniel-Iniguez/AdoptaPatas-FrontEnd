import React from 'react'
import { Autocomplete, Container, Grid, IconButton, InputAdornment } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';//Redigire al usuario despues de registar
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import '../SignUpForm/SignUp.css'
import { colors } from '../../../assets/MUI/Colors';
import { TextFieldStyle } from '../TextFieldStyles';
import { RegisterPost } from './RegisterPost.js';
import axios from 'axios';


function SignUpForm() {

  const navigate = useNavigate(); //Inicio el historial

  //Use state para ver u ocultar la contraseña
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // valores y validaciones de los inputs
  const [name, setName] = useState(''); // Valor
  const [isValidName, setIsValidName] = useState(true); // Validación
  const [lastName, setLastName] = useState('');
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [userName, setUserName] = useState('');
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [age, setAge] = useState('');
  const [isValidAge, setIsValidAge] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  /* const [postalCode, setPostalCode] = useState('');
  const [isValidPostalCode, setIsValidPostalCode] = useState(true); */
  const [place, setPlace] = useState('');
  const [isValidPlace, setIsValidPlace] = useState(true);
  const [userType, setUserType] = useState();
  const [isValidUserType, setIsValidUserType] = useState(true);
  const [isValidUser, setIsValidUser] = useState(false);

  //Validacion si ya existe un usuario y correo electronico
  const [existUser, setExistUser] = useState(false);
  const [existEmail, setExistEmail] = useState(false);

  //Error
  const [error, setError] = useState('');


  //Funciones para obtener el valor del input de cada campo
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
      console.log("%cRespuesta Existosa",'color: green; font-weight: bold;', users.data);
      //const users = JSON.parse(localStorage.getItem('users')) || [];
      const existUser = users.find(u => (u.username === userNameValue));
      const regeName = /^[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*$/;
      if (userNameValue.length < 3 || userNameValue.length > 50 || !userNameValue.match(regeName)) {
        setIsValidUserName(false);
      } else {
        if (existUser) {
          setExistUser(true);
        } else {
          setExistUser(false);
          setIsValidUserName(true);
        }
      }
      setUserName(userNameValue);
      console.log("handleUserNameChange called");
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
        if (existEmail) {
          setExistEmail(true);
        } else {
          setExistEmail(false)
          setIsValidEmail(true);
        }
      }
      setEmail(userEmail);
      console.log("handleEmailChange called");
    } catch (error) {
      console.log(error);
    }
  };
  const handlePasswordChange = (e) => {
    const userPassword = e.target.value;
    //console.log(userPassword);
    const regeName = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (userPassword.length < 8 || userPassword.length > 50 || !userPassword.match(regeName)) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
    setPassword(userPassword);
    console.log("handlePasswordChange called");
  };
  const handleConfirmPasswordChange = (e) => {
    const userConfirmPassword = e.target.value;
    //console.log(userConfirmPassword);
    if (userConfirmPassword != password) {
      setIsValidConfirmPassword(false);
    } else {
      setIsValidConfirmPassword(true);
    }
    setConfirmPassword(userConfirmPassword);
    console.log("handlePasswordChange called");
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
  /* const handlePostalCodeChange = (e) => {
    const userPostalCode = e.target.value;
    console.log(userPostalCode);
    if (userPostalCode.length < 5 || userPostalCode.length > 10) {
      setIsValidPostalCode(false);
    } else {
      setIsValidPostalCode(true);
    }
    setPostalCode(userPostalCode);
    console.log("handlePostalCodeChange called");
  }; */
  const handlePlaceChange = (e) => {
    const userPlace = e.target.value;
    console.log(userPlace);
    if (userPlace == '') {
      setIsValidPlace(false);
    } else {
      setIsValidPlace(true);
      setPlace(userPlace);
      console.log("handlePlaceChange called");
    }
  };
  const handleUserTypeChange = (e) => {
    const userType = e.target.value;
    console.log(userType);
    if (userType == 'Individual') {
      setIsValidUserType(true);
      setUserType(1);
      console.log("handleUserTypeChange called");
    } else if (userType == 'Shelter') {
      setIsValidUserType(true);
      setUserType(2);
      console.log("handleUserTypeChange called");
    } else {
      setIsValidUserType(false);
    }

  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verifica si todos los campos son válidos antes de proceder
    if (
      isValidName &&
      isValidLastName &&
      isValidUserName &&
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword &&
      isValidAge &&
      isValidPhoneNumber &&
      isValidPlace &&
      isValidUserType &&
      !existUser && !existEmail
    ) {
      try {
        await RegisterPost(name, lastName, userName, email, password, age, phoneNumber, place, userType);
        setIsValidUser(true);
        // Redirige al usuario a la página de inicio de sesión
        navigate('/sign-in');
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
      <main className="main-auth grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5  gap-2 mx-auto bg-main-bg-color ">
        {/* Carrusel Perritos*/}
        <div className=" hidden lg:block col-span-2 my-auto">
          <img
            src="src\assets\img\contact\Carousel\imgContact(3).jpeg"
            className="mx-auto max-w-[60%] rounded-[100%]"
            alt="..."
          />
        </div>
        {/* Formulario */}
        <div className=" col-span-3 my-auto text-main-text-color ">
          <h2 className="my-10 text-center text-[4rem]" id='place-signUp'>¡Únete y Adopta!</h2>
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
            <Container disableGutters >
              <Grid container >
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }} >
                  <TextFieldStyle
                    id="password"
                    label="Contraseña"
                    variant="standard"
                    value={password}
                    required
                    error={!isValidPassword}
                    helperText={isValidPassword ? '' : 'La contraseña debe tener 8 o mas caracteres , al menos una letra Mayuscula, un numero y un caracter especial'}
                    sx={{ width: '98%', marginBottom: '1%' }}
                    onChange={handlePasswordChange}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            //onMouseDown={handleMouseDownPassword}
                            edge="end"
                            style={{ color: colors.buttonColor }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <TextFieldStyle
                    id="confirmPassword"
                    label="Confirmar Contraseña"
                    variant="standard"
                    value={confirmPassword}
                    required
                    error={!isValidConfirmPassword}
                    helperText={isValidConfirmPassword ? '' : 'La contraseña no coincide'}
                    onChange={handleConfirmPasswordChange}
                    sx={{ width: '98%', marginBottom: '1%' }}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            //onMouseDown={handleMouseDownPassword}
                            edge="end"
                            style={{ color: colors.buttonColor }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
            </Container>
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
            <Container disableGutters >
              <Grid container >
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }} >
                  <Autocomplete
                    options={placeMx}
                    id="flat-demo"
                    sx={{ width: '98%' }}
                    renderInput={(params) => (
                      <TextFieldStyle
                        {...params}
                        label="Seleccionar Ciudad"
                        variant="standard"
                        value={place}
                        error={!isValidPlace}
                        onChange={handlePlaceChange}
                        helperText={isValidPlace ? '' : 'Selecciona un Estado'}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Autocomplete
                    id="flat-demo"
                    options={usersType}
                    sx={{ width: '98%' }}
                    renderInput={(params) => (
                      <TextFieldStyle
                        {...params}
                        label="Tipo de cuenta"
                        variant="standard"
                        value={userType}
                        error={!isValidUserType}
                        onChange={handleUserTypeChange}
                        helperText={isValidUserType ? '' : 'Selecciona que tipo de cuenta es'}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Container>

            <div className="w-[50%] mx-auto mt-10 border-2 rounded-[50px] border-buttonColor bg-buttonColor hover:bg-main-text-color  text-white ">
              <button
                id="buttonContact"
                className="cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[1.3rem] flex justify-center align-middle w-full"
              >
                Regístrate
              </button>
            </div>

          </form>

          <p className="text-center text-[1.2rem] my-4">¿Ya tienes cuenta?</p>
          <div className=' flex justify-center align-middle text-center'>
            <Link
              className="text-[1.2rem] flex justify-center align-middle my-4 text-buttonColor"
              to="/sign-in"
            >
              Inicia Sesion
            </Link>
          </div>
          {/* <div className="flex flex-wrap  mb-0">
              <div className="flex-1 px-4 flex justify-center items-center">
                <a className="flex justify-center items-center" href="https://www.facebook.com/">
                  <img
                    className="fbImage max-w-[20%]"
                    src="src\assets\img\logos\facebook.png"
                    alt="Logo Facebook"
                  />
                </a>
              </div>
              <div className="flex-1 px-4 flex justify-center items-center">
                <a className="flex justify-center items-center" href="https://www.google.com/">
                  <img
                    className="goImage max-w-[20%]"
                    src="src\assets\img\logos\google.png"
                    alt="Logo Google"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap  mb-10">
              <div className="  flex-1 px-4 flex justify-center items-center">
                <a className="fbImage" href="#">
                  Facebook
                </a>
              </div>
              <div className="flex-1 px-4 flex justify-center items-center">
                <a className="goImage" href="#">
                  Google
                </a>
              </div>
            </div> */}
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


export default SignUpForm;