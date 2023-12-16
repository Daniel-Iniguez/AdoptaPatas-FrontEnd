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
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
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
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
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
      message: 'min 6 characters',
    },
  },
}

export const num_validation = {
  name: 'Telefono',
  label: 'Telefono',
  type: 'number',
  id: 'num',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 10,
      message: 'min 10 characters'
    }, 
    maxLength: {
      value: 12,
      message: 'max 12 characters'
    }
  },
}

export const email_validation = {
  name: 'Correo Electronico',
  label: 'Correo Electronico',
  type: 'email',
  id: 'email',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}
