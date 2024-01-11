import React from 'react'
import PetCardsContainer from './PetCardsContainer'

function PetCardsSection() {
  return (
    <section className='w-[100%] flex flex-col items-center justify-center py-24 gap-20  bg-first-section-color'>
      <h3 className='font-["Nunito_Black"] text-[3rem] text-main-text-color text-centermx-[20%]'>Conoce algunos de nuestros amigos peludos</h3>
      <PetCardsContainer />
    </section>
  )
}

export default PetCardsSection