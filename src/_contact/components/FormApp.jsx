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
import emailjs from '@emailjs/browser';

const FormApp = () => {

  const templateIdUser = 'template_d6jry9h';
  const templateIdAP = 'template_rg2962p';
  const serviceId = 'service_x7b0spl';
  const publicKey = '03gtQ4pLP2OqkrdB1';

  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
    methods.reset();
    setSuccess(true);

    sendFeedback(templateIdUser, {message: data.Mensaje, from_name: data.Nombre, email: data["Correo Electronico"], tel:data.Telefono});
    sendFeedback(templateIdAP, {message: data.Mensaje, from_name: data.Nombre, email: data["Correo Electronico"], tel:data.Telefono})


  });


  const sendFeedback = (templateId, variables) => {
    emailjs.send(
      serviceId,
      templateId,
      variables,
      publicKey
    ).then(res => {
      console.log('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

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