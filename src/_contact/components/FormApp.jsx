import { useState } from 'react'
import ButtonApp from './ButtonApp';
import Input from './InputApp';
import { FormProvider, useForm } from 'react-hook-form';
import { BsFillCheckSquareFill } from 'react-icons/bs'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
} from '../utils/inputValidations'

const FormApp = () => {

  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <>
      <FormProvider {...methods}>
        <form
          className=" max-w-[90%] mx-auto "
          onSubmit={e => e.preventDefault()}
          noValidate
        >
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...num_validation} />
          <Input {...desc_validation} />

          {success && (
            <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
              <BsFillCheckSquareFill />Tu mensaje ha sido enviado de manera exitosa.
            </p>
          )}

        </form>
      </FormProvider>

      <ButtonApp
        title="Enviar"
        id="buttonContact"
        type="button"
        onClick={onSubmit}
      />
    </>
  )
}

export default FormApp;