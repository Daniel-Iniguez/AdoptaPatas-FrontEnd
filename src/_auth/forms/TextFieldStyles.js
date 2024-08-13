import React from 'react'
import styled from '@emotion/styled';
import { colors } from '../../assets/MUI/Colors';
import { TextField } from '@mui/material';

export const TextFieldStyle = styled(TextField)`
label {
  color: black;
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
  font-family: Nunito Bold;
}

`;
