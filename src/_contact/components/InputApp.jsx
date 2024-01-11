import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { colors } from '../../assets/MUI/Colors';

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

const Input = ({name, label, type, id, validation}) => {

    const {register, formState:{errors}} = useFormContext();
    const inputError = findInputError(errors,label);
    const isInvalid = isFormInvalid(inputError);

    return (
        <div className="mb-4">
            <TextFieldStyle
                variant="standard"
                fullWidth
                id={id}
                type={type}
                label={label}
                {...register(name, validation)}
            />
            <AnimatePresence mode="wait" initial={false}>
                {isInvalid && (
                    <InputError 
                        message={inputError.error.message}
                        key={inputError.error.message}
                    />
                )}
            </AnimatePresence>
        </div>
    );

}

const InputError = ({ message }) => {
    
    return (
        <motion.p
            className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
            {...framer_error}
        >
            <MdError />
            {message}
        </motion.p>
    )
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}

export default Input;

