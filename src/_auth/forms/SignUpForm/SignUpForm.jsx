import { Autocomplete, Container, Grid, IconButton, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Margin } from '@mui/icons-material';
import { useState } from 'react';
import '../SignUpForm/SignUp.css'


function SignUpForm() {

  //Use state para ver u ocultar la contraseña
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };
  const [value, setValue] = useState(null);

  return (
    <>
      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-2 mx-auto bg-main-bg-color ">
        {/* Carrusel Perritos*/}
        <div className=" hidden md:block col-span-2 my-auto">
          <img
            src="src\assets\img\contact\imgContact.png"
            className="mx-auto "
            alt="..."
          />
        </div>
        {/* Formulario */}
        <div className=" col-span-3 my-auto text-main-text-color">
          <form
            id="formUser"
            className=" max-w-[70%] mx-auto"
            action="https://formsubmit.co/lopezrogelio020799@gmail.com"
            method="POST"
          >
            <h2 className="my-10 text-center text-[4rem]" id='title-signUp'>¡Únete y Adopta!</h2>
            <div className="mb-3">
              <TextField id="name" label="Nombre(s)" variant="standard" required sx={{ width: '100%' }} />
            </div>
            <div className="mb-3">
              <TextField id="lastName" label="Apellidos" variant="standard" required sx={{ width: '100%' }} />
            </div>
            <div className="mb-3">
              <TextField id="userName" label="Nombre de usuario" variant="standard" required sx={{ width: '100%' }} />
            </div>
            <div className="mb-3">
              <TextField id="email" label="Correo Electronico" variant="standard" required sx={{ width: '100%' }} />
            </div>
            <Container disableGutters >
              <Grid container >
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }} >
                  <TextField id="password" label="Contraseña" variant="standard" required sx={{ width: '98%' }}
                    helperText='Contraseña invalida'
                    error
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField id="confirmPassword" label="Confirmar Contraseña" variant="standard" required sx={{ width: '98%' }}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
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
            <div className="mb-3">
              <TextField type='Number' id="age" label="Edad" variant="standard" sx={{ width: '100%' }} required />
            </div>
            <div className="mb-3">
              <TextField type='Number' id="phone" label="Telefono" variant="standard" sx={{ width: '100%' }} required />
            </div>
            <Container disableGutters >
              <Grid container >
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }} >
                  <Autocomplete
                    {...flatProps}
                    id="flat-demo"
                    sx={{ width: '98%' }}
                    renderInput={(params) => (
                      <TextField {...params} label="flat" variant="standard"  />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField type='Number' id="postalCode" label="Codigo Postal" variant="standard" sx={{ width: '98%' }} required />
                </Grid>
              </Grid>
            </Container>

            <div className="mt-5 text-center">
              <button
                id="buttonContact"
                type="button"
                className="w-full py-1 px-2 mb-1 text-[1.5rem]"
              >
                Registrate
              </button>
            </div>
            <p className="text-center text-[1.2rem] my-4">¿Ya tienes cuenta?</p>
            <Link
              className="text-center text-[1.2rem] flex justify-center my-4"
              to="/sign-in"
            >
              Inicia Sesion
            </Link>
            <div className="flex flex-wrap  mb-0">
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
            </div>
          </form>
        </div>

      </main>


    </>
  )
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
];

export default SignUpForm;