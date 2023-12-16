import React from 'react'
import { Autocomplete, Container, Grid, IconButton, InputLabel, OutlinedInput, TextField, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import './SignUp.css'
import styled from '@emotion/styled';
import { colors } from '../../assets/MUI/Colors';


function SignUpForm() {

  //Estilos de los componentes de MUI con @emotion/styled
  const TextFieldStyle = styled(TextField)`
 input {
    color: black; 
  }
  label {
    color: black;
    margin-bottom: 2px;
  }
  /* Color linea */
  .MuiInput-underline:before {
    border-bottom-color: ${colors.hoverPink};
  }
  /* Cambio linea hover */
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: ${colors.buttonColor};
  }
  /* Color input al dar click */
  .MuiInput-underline:after {
    border-bottom-color: ${colors.buttonColor};
  }
  /* Color de label al darl click */
  .MuiInputLabel-root.Mui-focused {
    color: ${colors.buttonColor};
  }
  .MuiFormHelperText-root {
    color: ${colors.textColor};
  }
  /* Mensajes de error */
  .MuiFormLabel-root.Mui-error {
    color: red;
  }
  .Mui-error{
    color: red;
  }
  .MuiInputLabel-root {
    font-size: 1.3rem;
    margin-bottom:1%;
    margin-left:1%;
    font-family: Nunito Bold;
  }
  
`;

  //Use state para ver u ocultar la contraseña
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
 
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };


  return (
    <>
      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-2 mx-auto bg-main-bg-color ">
        {/* Carrusel Perritos*/}
        <div className=" hidden md:block col-span-2 my-auto">
          <img
            src="src\assets\img\contact\Carousel\imgContact(3).jpeg"
            className="mx-auto max-w-[90%] rounded-[100%]"
            alt="..."
          />
        </div>
        {/* Formulario */}
        <div className=" col-span-3 my-auto text-main-text-color ">
          <form
            id="formUser"
            className=" max-w-[90%] mx-auto "
            action="https://formsubmit.co/lopezrogelio020799@gmail.com"
            method="POST"
          >
            <h2 className="my-10 text-center text-[4rem]" id='title-signUp'>¡Únete y Adopta!</h2>
            <div className="mb-3">
              <TextFieldStyle id="name" label="Nombre(s)" variant="standard" required fullWidth error={false} />
            </div>
            <div className="mb-3">
              <TextFieldStyle id="lastName" label="Apellidos" variant="standard" required fullWidth />
            </div>
            <div className="mb-3">
              <TextFieldStyle id="userName" label="Nombre de usuario" variant="standard" required fullWidth />
            </div>
            <div className="mb-3">
              <TextFieldStyle id="email" label="Correo Electronico" variant="standard" required fullWidth />
            </div>
            <Container disableGutters >
              <Grid container >
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }} >
                  <TextFieldStyle
                    id="password"
                    label="Contraseña"
                    variant="standard"
                    required
                    sx={{ width: '98%' }}
                    helperText='Contraseña invalida'
                    error={false}
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
                    required
                    error={false}
                    sx={{ width: '98%' }}
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
            <div className="mb-3">
              <TextFieldStyle type='Number' id="age" label="Edad" variant="standard" fullWidth required />
            </div>
            <div className="mb-3">
              <TextFieldStyle type='Number' id="phone" label="Telefono" variant="standard" helperText="Numero de 10 a 12 digitos" fullWidth required />
            </div>
            <Container disableGutters >
              <Grid container >
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }} >
                  <Autocomplete
                    {...flatProps}
                    id="flat-demo"
                    sx={{ width: '98%' }}
                    renderInput={(params) => (
                      <TextFieldStyle {...params} label="Seleccionar Estado" variant="standard" />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <TextFieldStyle type='Number' id="postalCode" label="Codigo Postal" variant="standard" sx={{ width: '98%' }} required />
                </Grid>
              </Grid>
            </Container>
            <div className="w-[50%] mx-auto mt-10 border-2 rounded-[50px] border-buttonColor bg-buttonColor hover:bg-main-text-color  text-white ">
              <button
                id="buttonContact"
                type="button"
                className="cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[1.3rem] flex justify-center align-middle w-full"
              >
                Registrate
              </button>
            </div>
            <p className="text-center text-[1.2rem] my-4">¿Ya tienes cuenta?</p>
            <Link
              className="text-center text-[1.2rem] flex justify-center my-4 text-buttonColor"
              to="/sign-in"
            >
              Inicia Sesion
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