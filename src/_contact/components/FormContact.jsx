import React from 'react'
import { TextField } from '@mui/material';
import './Contact.css'
import styled from '@emotion/styled';
import { colors } from '../../assets/MUI/Colors';

const FormContact = () => {

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

    return (
        <div>FormContact</div>
    )
}

export default FormContact