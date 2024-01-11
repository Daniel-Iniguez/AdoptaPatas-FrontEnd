import React from 'react'
import PetCareIcon from '../icons/PetCareIcon'
import PetShelterIcon from '../icons/PetShelterIcon'
import PetAdoptIcon from '../icons/PetAdoptIcon'
import { Link } from 'react-router-dom'
import ButtonPrimary from '../shared/ButtonPrimary'


function IconSection() {
  return (
    <section className='w-[100%] flex flex-col items-center justify-between py-24 gap-20 bg-first-section-color'>
      <h3 className='font-["Nunito_Black"] text-[3rem] text-main-text-color text-center mx-[20%]'>No sabes si estas listo para adoptar?</h3>

      <div className="container h-[70vh] flex flex-row justify-around ">
        <div className=" w-[22rem] items-center flex flex-col justify-center gap-5 ">
          <PetAdoptIcon />
          <h5
            className='py-1 text-[1.2rem] text-center font-["Open_Sans_Bold"] leading-tight text-main-text-color '>
            Puntos a considerar antes de adoptar
          </h5>
          <p className='font-["Open_Sans_Regular"] text-center text-main-text-color text-[0.95rem] pb-5'>Consulta información sobre todo lo que hay que saber antes de comenzar con el proceso.</p>
          <ButtonPrimary path='/' text="Explora recursos" />

        </div>
        <div className=" w-[22rem] items-center flex flex-col justify-center gap-5 ">
          <PetCareIcon />
          <p></p>
          <h5
            className='py-1 text-center text-[1.2rem] font-["Open_Sans_Semi"] leading-tight text-main-text-color '>
            Recomendaciones para el cuidado de tu nueva mascota
          </h5>
          <p className='font-["Open_Sans_Regular"] text-center text-main-text-color text-[0.95rem] pb-5'>Nueva mascota peluda, nuevas responsabilidades.</p>
          <ButtonPrimary path='/' text="Explora recursos" />

        </div>
        <div className=" w-[22rem] items-center flex flex-col justify-center gap-5">
          <PetShelterIcon />
          <p></p>
          <h5
            className='py-1 text-center text-[1.2rem] font-["Open_Sans_Bold"] leading-tight text-main-text-color '>
            Como funciona el proceso de adopción
          </h5>
          <p className='font-["Open_Sans_Regular"] text-center text-main-text-color text-[0.95rem] pb-5'>Vayamos paso por paso para hacer del proceso algo fácil para tí.</p>
          <ButtonPrimary path='/' text="Explora recursos" />
        </div>
      </div>
    </section>
  )
}

export default IconSection