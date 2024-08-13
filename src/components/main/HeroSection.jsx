import React, { useRef } from 'react'
import './herosection.css';
import Paw from '../shared/Paw';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

function HeroSection() {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);


  return (
    <section ref={ref} className='w-[100%] h-[90vh] bg-secondary-bg-color relative overflow-hidden flex flex-col items-center justify-end gap-20 '>
      <Paw fillColor="#F8EDED" rotate='rotate-[34.241deg]' position='absolute md:left-[10%] sm:left-[0%] left-[-10%] top-[10%] md:top-[0%] z-[1]' size={'md:h-[381px] md:w-[391px] h-[250px]'} />
      <Paw fillColor="#F8EDED" rotate='rotate-[-25.106deg]' position='absolute md:right-[-15%] right-[-20%] top-[25%] md:top-[10%] z-[2]' size={'md:h-[532px] md:w-[538px] h-[350px]'} />

      <motion.h1 style={{ y: yText }} className='mx-5 text-[3rem] sm:mb-8 sm:text-[4rem] md:text-[7rem] font-[Coiny] text-main-text-color z-10'>AdoptaPatas</motion.h1>
      <motion.div style={{ y: yBg }} className='img-container w-[200px] sm:h-[70%] h-[60%] md:h-[90%] top-[5%] sm:right-[-5%] right-[-10%] md:top-[10%] md:right-[-5%] md:w-[320px]'></motion.div>
      <motion.div style={{ y: yBg }} className='img-container2 md:w-[350px] md:h-[85%] md:bottom-0 md:left-0 sm:w-[240px] sm:h-[80%] sm:left-[-10%] sm:bottom-[-10%] w-[210px] h-[60%] -left-16 bottom-[35%]'></motion.div>

      <div className='z-[30] md:w-[50%] w-[43%] flex-col flex lg:flex-row justify-between mb-16 md:mb-20 items-center' >
        <div className='w-[20rem] sm:w-[30rem] md:w-[33rem] flex justify-center items-center'>
          <h5 className='font-["Open_Sans_Medium"] text-main-text-color text-[0.9rem] sm:text-[1rem]'>Descubre la alegría de encontrar a tu nuevo compañero peludo y conecta con amantes de los animales en nuestra red social.
            <br />
            Estas listo? </h5>
        </div>
        <button className='md:w-[13rem] md:h-[3rem] hover:text-black transition duration-200 ease-in-out w-[10rem] h-[2rem] cursor-pointer md:text-[1rem] text-[.85rem] px-5 py-[.40rem] mt-8 bg-main-text-color md:px-7 md:py-[0.5rem] text-white rounded-3xl hover:bg-white'>
          <Link to='/'>
            Comencemos!
          </Link>
        </button>
      </div>


    </section>
  )
}

export default HeroSection