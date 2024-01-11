import React from 'react'

function AboutSection() {
  return (
    <section className='w-[100%] py-[5rem] relative overflow-hidden flex flex-row items-center justify-end '>

      <div className='w-[100%] flex justify-center items-center flex-[1_0_50%] gap-10 px-20 py-[2rem]'>
        <h3 className='font-["Nunito_Black"] text-[4rem] text-main-text-color text-center'>Acerca del Proyecto</h3>
      </div>
      <div className='w-[100%] flex justify-center items-center flex-[1_0_50%] gap-10 px-[5.5rem] py-[2rem]'>
        <p className='font-["Open_Sans_Regular"] text-[#717171] text-[1.15rem]'>Nuestro proyecto surge con el objetivo de simplificar el proceso de adopción de mascotas, proporcionando una interfaz fácil de usar para que los usuarios exploren, adopten y contribuyan al bienestar de nuestros amigos peludos que lo necesitan. Experimenta la alegría de encontrar a tu compañero(a) ideal y haz un impacto duradero en la vida de estos adorables animales. Únete a nosotros en la creación de una comunidad que celebra la compasión y los vínculos que se forman a través de la adopción de mascotas.</p>
      </div>
    </section>
  )
}

export default AboutSection