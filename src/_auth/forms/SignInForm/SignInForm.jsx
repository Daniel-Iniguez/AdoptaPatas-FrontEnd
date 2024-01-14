import React from 'react'
import { IconButton, InputAdornment } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';//Redigire al usuario despues de registar
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import '../SignUpForm/SignUp.css'
import { colors } from '../../../assets/MUI/Colors';
import { TextFieldStyle } from '../TextFieldStyles';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';


function SignInForm({ setIsLogin }) {

  const navigate = useNavigate(); //Inicio el historial

  //Use state para ver u ocultar la contraseña
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidUser, setIsValidUser] = useState(true);
  const [error, setError] = useState('');


  const handleUserNameChange = async (e) => {
    try {
      const userNameValue = e.target.value;
      console.log(userNameValue);
      const response = await axios.get("http://localhost:8080/adoptapatas/v1/users");
      const users = response.data;
      //const usersData = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => (u.username === userNameValue || u.email === userNameValue));
      if (user) {
        console.log('Usuario Registrado:');
        console.log(user);
        setIsValidUserName(true);
      } else {
        setIsValidUserName(false);
      }
      setUserName(userNameValue);
      setEmail(userNameValue);

    } catch (error) {
      console.log(error);
    }

  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    console.log(passwordValue);
    setPassword(passwordValue);
  };


  const { setUsuario } = useContext(UserContext);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      // Validar los datos aquí (comparar con datos en local storage)
      //const usersData = JSON.parse(localStorage.getItem('users')) || [];
      const response = await axios.get("http://localhost:8080/adoptapatas/v2/users");
      const users = response.data;
      const user = users.find(u => (u.username === userName || u.email === email) && u.password === password);
      if (user) {
        console.log('Correcto');
        console.log(user);
        setIsValidUser(true);
        setIsValidPassword(true);
        navigate('/');
        //setIsLogin(true);
        setIsLogin(userName);
        setUsuario(user);
      } else {
        if (isValidUserName) {
          setIsValidPassword(false);

        }
        console.log('Incorrecto');
        setIsValidUser(false);
        setError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error("Error en el servidor",error);
    }

  };

  return (
    <>
      <main className="main-auth grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-5 mx-auto bg-main-bg-color ">
        {/* Formulario */}
        <div className=" col-span-3 my-auto  text-main-text-color ">
          <h2 className="my-10 text-center text-[4rem]" id='place-signUp'>Iniciar Sesión</h2>
          {!isValidUser ? <p className='text-center text-[2rem]' style={{ color: 'red' }}>{error}</p> : ''}
          <form className=' max-w-[70%] mx-auto' onSubmit={handleLogin} >
            <TextFieldStyle
              id="name"
              type='text'
              label="Email o Nombre de Usuario"
              variant="standard"
              value={userName || email}
              helperText={isValidUserName ? '' : 'Correo o Nombre de usuario no registrado'}
              required
              error={!isValidUserName}
              fullWidth
              onChange={handleUserNameChange}
              sx={{ marginBottom: '15%', marginTop: '5%' }}
            />
            <TextFieldStyle
              id="password"
              label="Contraseña"
              variant="standard"
              value={password}
              required
              error={!isValidPassword}
              helperText={isValidPassword ? '' : 'Contraseña Incorrecta'}
              sx={{ marginBottom: '1%' }}
              fullWidth
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
            <div className="w-[50%] mx-auto mt-10 border-2 rounded-[50px] border-buttonColor bg-buttonColor hover:bg-main-text-color  text-white ">
              <button
                id="buttonContact"
                className="cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[1.3rem] flex justify-center align-middle w-full"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>

          <p className="text-center text-[1.2rem] my-4">¿No tienes una cuenta?</p>
          <Link
            className="text-center text-[1.2rem] flex justify-center my-4 text-buttonColor"
            to="/sign-up"
          >
            Regístrate
          </Link>

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
        {/* Carrusel Perritos*/}
        <div className="hidden lg:block col-span-2 my-auto">
          <img
            src="src\assets\img\contact\Carousel\imgContact(4).jpeg"
            className="mx-auto max-w-[60%] rounded-[100%]"
            alt="..."
          />
        </div>


      </main>
    </>
  )
}

export default SignInForm;
