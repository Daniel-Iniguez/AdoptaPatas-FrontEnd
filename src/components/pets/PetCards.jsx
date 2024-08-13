import React from 'react';
import LocationIcon from '../icons/LocationIcon';
import { useNavigate } from 'react-router-dom';

const PetCards = ({ pet, breedData, locationData }) => {
  const { id, name, breed, age, size, location, image } = pet;
  const navigate = useNavigate();

  console.log('PetCard - pet object:', pet);
  console.log("Breed data:", breedData);
  console.log("Location data:", locationData);

  return (
    <div
      className="hover:bg-[#e7b4b6] sm:w-[15rem] w-[100%] flex flex-row justify-between sm:inline-block rounded-lg bg-secondary-bg-color shadow-xl transition-all duration-500 ease-in-out"
      onClick={() => navigate(`/pet-detail/${id}`, { state: { pet, breedData, locationData } })}>
      <div className='w-[40%] sm:w-[100%] overflow-hidden m-0 rounded-l-lg sm:rounded-t-lg'>
        <img
          className="sm:rounded-t-lg rounded-l-lg block w-[100%] h-[12rem]  sm:h-[14rem] object-cover hover:scale-110 transition-all ease-in-out duration-500"
          src={image}
          alt="" />
      </div>
      <div className=" pt-3 pb-3 px-4 flex flex-row flex-wrap sm:items-start sm:w-full w-[60%] sm:flex-col sm:gap-[.15rem]">
        <h5
          className=" text-[1.2rem] text-center font-['Open_Sans_Semi'] text-main-text-color">
          {name}
        </h5>
        <div className='mb-1 text-gray-700 w-[100%] flex flex-row flex-wrap gap-2 font-["Open_Sans_Semi"] text-[.9rem]'>
          <h6>{breed}</h6>
        </div>
        <div className='text-gray-600 w-[100%] flex flex-row flex-wrap gap-2 font-["Open_Sans_Medium"] text-[.85rem]'>
          <h6
            className="leading-tight">
            {age}
          </h6>
          <span> | </span>
          <h6
            className="text-center leading-tight">
            {size}
          </h6>
        </div>
        <div className='w-[100%] flex flex-row gap-2 items-center font-["Open_Sans_Regular"]'>
          <LocationIcon />
          <p className="text-[0.9rem] text-neutral-600">
            {location.city}
          </p>
        </div>
      </div>
    </div>

  );
};

export default PetCards;
