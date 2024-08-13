import React, { useState } from 'react'
import { sliderData } from '../../constants/sliderData'
import LeftArrowIcon from '../icons/LeftArrowIcon';
import RightArrowIcon from '../icons/RightArrowIcon';

function PetImageSlider({ slides }) {

  const [current, setCurrent] = useState(0);
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='relative bg-white flex justify-center items-center rounded-md  p-2 lg:p-3 w-[27rem] lg:w-[34rem]'>
      <LeftArrowIcon size={35} color={"white"} className={'absolute top-[50%] left-[32px] z-[11] cursor-pointer select-none'} prevSlide={prevSlide} />
      <RightArrowIcon size={35} color={"white"} className={'absolute top-[50%] right-[32px] z-[11] cursor-pointer select-none'} nextSlide={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div className={index === current ? 'duration-100 ease-in opacity-[1] scale-[1.08]' : 'opacity-0 duration-100 ease-in'} key={slide.id}>
            {index === current && (<img className='h-60 xs:h-[300px] lg:h-[310px] w-full rounded-[18px] object-cover shadow-md' key={slide.id} src={slide.image} alt="image" />)}

          </div>
        )
      })
      }
    </section >
  )
}

export default PetImageSlider