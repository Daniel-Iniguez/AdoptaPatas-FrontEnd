import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const sliderVariant = {
  initial: {
    x: "-50%",
  },
  animate: {
    x: "-130%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20
    }
  }
};

function HomeFAQSection() {
  return (
    <section className='w-[100%] flex flex-col items-center justify-center py-20 gap-20 bg-bg-light-green relative overflow-hidden'>
      <div className='w-[100%] flex flex-col justify-center items-center flex-[1_0_50%] gap-20 px-20 py-[3rem] z-10'>
        <h3 className='font-["Nunito_Black"] text-[3rem] text-main-text-color text-center'>¿Tienes preguntas?<br />Tenemos respuestas</h3>
        <button className='w-[13rem] h-[3rem] shadow-sm hover:text-white transition duration-200 ease-in-out cursor-pointer bg-white px-7 py-[0.5rem] text-main-text-color rounded-3xl border-2 border-main-text-color hover:bg-main-text-color'>
          <Link to='/'>
            Explora recursos
          </Link>
        </button>

      </div>
      <motion.div className='w-[50%] font-["Open_Sans_Bold"] text-white opacity-[0.8] absolute text-[10vh] bottom-[70%] whitespace-nowrap' variants={sliderVariant} initial="initial" animate="animate">
        Como funciona la página? Como puedo registrarme? Como funciona la página? Como puedo registrarme?
      </motion.div>
      <motion.div className='w-[50%] font-["Open_Sans_Bold"] text-white opacity-[0.8] absolute text-[10vh] bottom-[40%] whitespace-nowrap' variants={sliderVariant} initial="initial" animate="animate">
        Cuales son los requisitos? Como puedo comenzar mi proceso? Cuales son los requisitos? Como puedo comenzar mi proceso?
      </motion.div>
      <motion.div className='w-[50%] font-["Open_Sans_Bold"] text-white opacity-[0.8] absolute text-[10vh] bottom-[10%] whitespace-nowrap' variants={sliderVariant} initial="initial" animate="animate">
        Cuales son los beneficios de adoptar? Como puedo cuidar a mi nueva mascota? Cuales son los beneficios de adoptar? Como puedo cuidar a mi nueva mascota?
      </motion.div>
    </section>
  )
}

export default HomeFAQSection