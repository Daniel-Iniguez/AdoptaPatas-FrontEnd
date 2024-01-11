/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
    name: 'Nombre',
    label: 'Nombre',
    type: 'text',
    id: 'name',
    validation: {
      required: {
        value: true,
        message: 'Requerido',
      },
      maxLength: {
        value: 30,
        message: 'Máximo 30 carácteres',
      },
    },
  }
  
  export const desc_validation = {
    name: 'Mensaje',
    label: 'Mensaje',
    id: 'description',
    validation: {
      required: {
        value: true,
        message: 'Requerido',
      },
      maxLength: {
        value: 200,
        message: 'Máximo 200 carácteres',
      },
    },
  }
  
  export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      minLength: {
        value: 6,
        message: 'Mínimo 6 carácteres',
      },
    },
  }
  
  export const num_validation = {
    name: 'Telefono',
    label: 'Teléfono',
    type: 'number',
    id: 'num',
    validation: {
      required: {
        value: true,
        message: 'Requerido',
      },
      minLength: {
        value: 10,
        message: 'Mínimo 10 carácteres'
      }, 
      maxLength: {
        value: 12,
        message: 'Máximo 12 carácteres'
      }
    },
  }
  
  export const email_validation = {
    name: 'Correo Electronico',
    label: 'Correo Electrónico ',
    type: 'email',
    id: 'email',
    validation: {
      required: {
        value: true,
        message: 'Requerido',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'No es válido',
      },
    },
  }