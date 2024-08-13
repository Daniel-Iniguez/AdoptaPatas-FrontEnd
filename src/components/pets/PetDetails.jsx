import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LocationIcon from '../icons/LocationIcon';
import PetImageSlider from './PetImageSlider';
import { sliderData } from '../../constants/sliderData';
import ButtonPrimary from '../shared/ButtonPrimary';

const PetDetails = () => {
  const navigate = useNavigate();
  const locationHook = useLocation();
  const { pet, locationData, breedData } = locationHook.state || {};

  console.log('Retrieved pet object:', pet);

  if (!pet) {
    return (
      <div>
        <h1>Ooops! Algo pasó, intenta más tarde.</h1>
        <Link to="/search">
          <button>Regresar a mi búsqueda</button>
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    breed,
    color,
    age,
    size,
    weight,
    sex,
    type,
    image,
    location,

  } = pet;


  return (

    <section className="pt-20 pb-28 w-full items-center justify-center flex flex-col ">

      <div className='w-full px-5 md:px-[15%] flex flex-col items-start gap-5 '>
        <button className="underline text-[1rem] text-main-text-color font-['Open_Sans_Semi']" onClick={() => navigate(`/search?type=${type}&location=${locationData}&breed=${breedData}`)}>Volver a mi búsqueda</button>
        <h3 className="text-[2.6rem] md:text-[3.5rem] font-['Open_Sans_Bold'] text-main-text-color mb-8" >
          Hola! Me llamo <span className='font-["Open_Sans_Bold"]'>{name}!</span></h3>
      </div>

      <div className=' w-full px-10 md:px-0 md:items-start justify-center flex md:flex-row md:gap-0 items-center flex-col gap-10 '>

        <div className='flex flex-col gap-6 max-w-[35rem] items-center'>
          <PetImageSlider slides={sliderData} />
          <div className='px-7 flex flex-col gap-7'>
            <h3 className=" text-[1.30rem] text-main-text-color font-['Open_Sans_Bold']">Algunos datos sobre mi:</h3>
            <div className='max-w-[30rem] flex flex-row  justify-around'>
              <div className='w-1/2 flex flex-col gap-2'>
                <span className="mb-2 text-[1.15rem] text-gray-700 font-['Open_Sans_Medium']">Color: {color}</span>
                <span className="mb-2 text-[1.15rem] text-gray-700 font-['Open_Sans_Medium']">Edad: {age}</span>
                <span className="mb-2 text-[1.15rem] text-gray-700 font-['Open_Sans_Medium']">Raza: {breed}</span>
              </div>
              <div className='w-1/2 flex flex-col gap-2'>
                <span className="mb-2 text-[1.15rem] text-gray-700 font-['Open_Sans_Medium']">Tamaño: {size}</span>
                <span className="mb-2 text-[1.15rem] text-gray-700 font-['Open_Sans_Medium']">Sexo: {sex}</span>
                <span className="mb-2 text-[1.15rem] text-gray-700 font-['Open_Sans_Medium']">Peso: {weight}</span>
              </div>

            </div>
            <h3 className="mb-3 text-[1.30rem] text-main-text-color font-['Open_Sans_Semi'] ">
              Ubicación:<br />
              <span className="mb-2 text-[1.15rem] text-gray-700 font-['Open_Sans_Medium']" >
                {location.city}, {location.state}
              </span>
            </h3>
            <div>
              <span className="mb-3 text-[1.30rem] text-main-text-color font-['Open_Sans_Bold']">Sobre mi:</span> <br />
              <p className="mb-2 text-[1.15rem] text-gray-700 font-['Open_Sans_Medium']">{description}</p>
            </div>
            <h3 className="mt-6 text-[1.30rem] text-main-text-color font-['Open_Sans_Bold']">No te pierdas la oportunidad de conocerme!</h3>
          </div>
        </div>

        <div className='flex flex-col w-full lg:max-w-[27rem] md:max-w-[25rem]  rounded-xl bg-secondary-bg-color shadow-md '>
          <div class="flex items-start py-4 px-3">
            <div class="flex flex-col p-6 ">
              <h5 class="pb-8 text-[1.4rem] font-['Open_Sans_Bold'] text-main-text-color">{name} es cuidado por la asociación "Patas Encontradas"</h5>
              <h3 className="pb-4 text-[1.1rem] font-['Open_Sans_Bold'] text-main-text-color">
                Me interesa adoptar a {name}. Que debo hacer?
              </h3>
              <div className='px-4 pb-20'>
                <h4 className="pb-4 text-[1rem] font-['Open_Sans_Bold'] text-main-text-color">
                  1. Llena la solicitud de adopción
                </h4>
                <h4 className="pb-4 text-[1rem] font-['Open_Sans_Bold'] text-main-text-color">
                  2. Conoce a {name}
                </h4>
                <h4 className="pb-4 text-[1rem] font-['Open_Sans_Bold'] text-main-text-color">
                  3. Se evalua tu situación de vivienda
                </h4>
              </div>
              <div className='text-center'>
                <ButtonPrimary text={'Aplicar ahora'} path={'/solicitud'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default PetDetails;


