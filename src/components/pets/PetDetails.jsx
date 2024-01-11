import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LocationIcon from '../icons/LocationIcon';

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
    location,
    image
  } = pet;


  return (

    <section className="py-36 flex flex-col justify-center items-center self-center">
      <div className="w-[auto] px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-secondary-bg-color w-[45rem] mb-6 shadow-xl rounded-lg mt-16">

          <img src={image} className="shadow-xl rounded-full h-[250px] object-cover border-none absolute left-[31%] top-[-17%]  max-w-[250px]" />

          <div className="px-6 flex flex-col justify-center items-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">

              </div>
              <div className="w-full px-4 text-center mt-20">
                <div className="flex justify-center py-4 lg:pt-24 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-['Open_Sans_Bold'] block tracking-wide text-main-text-color">
                      {color}
                    </span>
                    <span className="text-sm text-blueGray-400">Color</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-['Open_Sans_Bold'] block tracking-wide text-main-text-color">
                      {age}
                    </span>
                    <span className="text-sm text-blueGray-400">Edad</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-['Open_Sans_Bold'] block tracking-wide text-main-text-color">
                      {size}
                    </span>
                    <span className="text-sm text-blueGray-400">Tamaño</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-2 w-full">
              <h3 className="text-xl  text-main-text-color mb-8">
                Hola! Me llamo <span className='font-["Open_Sans_Bold"]'>{name}</span>
              </h3>
              <div className="mb-2 text-[1rem] text-main-text-color font-['Open_Sans_Semi'] ">
                {location.city}, {location.state}
              </div>
              <div className="mb-2 text-[1rem] text-main-text-color font-['Open_Sans_Semi']">
                Sexo: {sex} - Peso: {weight}
              </div>
              <div className="mb-2 text-[1rem] text-main-text-color font-['Open_Sans_Semi']">
                Raza: {breed}
              </div>
            </div>
            <div className="mt-8 py-10 border-t border-main-text-color text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-6 text-lg leading-relaxed text-main-text-color">
                    <span className='font-["Open_Sans_Bold"]'>Sobre mi:</span> <br />{description}
                  </p>
                  <button className="text-[1rem] text-main-text-color font-['Open_Sans_Semi']" onClick={() => navigate(`/search?type=${type}&location=${locationData}&breed=${breedData}`)}>Volver a mi búsqueda</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >


  );
};

export default PetDetails;

