import React from 'react'
import clipPathImage from '../../assets/img/Home/clip_path_img2.jpg'
import ClipPathImgR from '../ui/ClipPathImgR'

function InfoRightSection() {
  return (
    <section className='w-[100%]  relative overflow-hidden flex flex-col-reverse md:flex-row items-center justify-end '>

      <ClipPathImgR image={clipPathImage} width={100} height={180} />

      <div className='w-[100%] flex flex-col justify-center items-center flex-[1_0_50%] gap-10 px-20 py-[6rem]'>
        <h3 className='font-["Nunito_Black"] md:text-[3rem] text-[2rem] text-main-text-color md:text-right text-center'>Descubre la alegría de la compañia peluda</h3>
        <p className='font-["Open_Sans_Medium"] text-main-text-color text-[1.1rem] md:text-[1.2rem] md:text-right text-center'>Explora nuestra galería de amigos peludos. Cada uno tiene una historia única y espera ansiosamente unirse a tu vida. La adopción no solo te brinda un amigo, sino que también trae consigo una serie de beneficios inigualables.Descubre la felicidad de encontrar a tu compañero perfecto y marca la diferencia en su vida hoy.</p>
      </div>

    </section>
  )
}

export default InfoRightSection