import React from 'react'
import PetCardsContainer from './PetCardsContainer'

function PetCardsSection() {
  return (
    <section className='w-[100%] flex flex-col items-center justify-center py-24 gap-20  bg-first-section-color'>
      <h3 className='font-["Nunito_Black"] text-[2.25rem] md:text-[3rem] px-6 text-main-text-color text-center mx-0 md:mx-[20%]'>Conoce algunos de nuestros amigos peludos</h3>
      <PetCardsContainer />
    </section>
  )
}

export default PetCardsSection