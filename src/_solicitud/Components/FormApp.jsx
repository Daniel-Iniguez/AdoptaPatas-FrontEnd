import { useEffect, useState } from 'react'
import ButtonApp from '../../_contact/components/ButtonApp';
import { FormProvider, useForm } from 'react-hook-form';
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { question } from '../utils/inputValidations'
import Input from './InputApp';
import CheckApp from './CheckApp';
import { useNavigate } from 'react-router-dom';



const FormApp = () => {

  const navigate = useNavigate();

  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = methods.handleSubmit(data => {
    const values = methods.getValues()
    console.log(values)
    console.log(question);
    methods.reset();
    alert("Gracias! Tu información ha sido enviada");
    setTimeout(() => {
      navigate('/');
    }, 1000);
  })


  return (
    <>
      <FormProvider {...methods}>
        <form
          className=" max-w-[90%] mx-auto "
          onSubmit={e => e.preventDefault()}
          noValidate
        >

          {question.map((element, index) =>
            <Input key={index} {...element} />
          )}



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