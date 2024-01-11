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
    <section ref={ref} className='w-[100%] h-[90vh] bg-secondary-bg-color relative overflow-hidden flex flex-col items-center justify-end gap-20'>
      <Paw fillColor="#F8EDED" rotate='rotate-[34.241deg]' position='absolute left-[10%] top-[0%] z-[1]' height="381" width="393" />
      <Paw fillColor="#F8EDED" rotate='rotate-[-25.106deg]' position='absolute right-[-15%] top-[10%] z-[2]' className='top' height="532" width="538" />

      <motion.h1 style={{ y: yText }} className=' text-[7rem] font-[Coiny] text-main-text-color z-10'>AdoptaPatas</motion.h1>
      <motion.div style={{ y: yBg }} className='img-container'></motion.div>
      <motion.div style={{ y: yBg }} className='img-container2'></motion.div>

      <div className='z-[30] w-[50rem] flex flex-row justify-between mb-20 items-center' >
        <div className='w-[33rem] flex justify-center items-center'>
          <h5 className='font-["Open_Sans_Medium"] text-main-text-color text-[1rem]'>Descubre la alegría de encontrar a tu nuevo compañero peludo y conecta con amantes de los animales en nuestra red social.
            <br />
            Estas listo? </h5>
        </div>
        <button className='w-[13rem] h-[3rem] hover:text-black transition duration-200 ease-in-out cursor-pointer bg-main-text-color px-7 py-[0.5rem] text-white rounded-3xl hover:bg-white'>
          <Link to='/'>
            Comencemos!
          </Link>
        </button>
      </div>


    </section>
  )
}

export default HeroSection