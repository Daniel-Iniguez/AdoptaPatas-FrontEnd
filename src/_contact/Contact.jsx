import React from 'react'
import './Contact.css'
import Carousel from './components/carousel';
import FormApp from './components/FormApp';
import pets from '../assets/img/contact/Carousel/imgContact.jpeg'



const Contact = () => {

  return (
    <>

      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-2 mx-auto bg-main-bg-color ">

        {/* Carrusel Perritos*/}
        <div className=" hidden md:block col-span-2 my-auto">
          <Carousel
            src={pets}
            alt="Imagen de Perritos"
          />
        </div>

        {/* Formulario */}
        <div className=" col-span-3 text-main-text-color ">
          <h3 className="my-10 text-center text-[4rem]" id='title-signUp'>Contacto</h3>
          <FormApp />
        </div>

      </main>



    </>
  )
}

export default Contact;