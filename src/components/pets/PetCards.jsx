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
      className="hover:bg-[#e7b4b6] w-[14rem] inline-block rounded-lg bg-secondary-bg-color shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-500 ease-in-out"
      onClick={() => navigate(`/pet-detail/${id}`, { state: { pet, breedData, locationData } })}>
      <div className='w-[100%] overflow-hidden m-0 rounded-t-lg'>
        <img
          className="rounded-t-lg block w-[100%] h-[10rem] object-cover hover:scale-110 transition-all ease-in-out duration-500"
          src={image}
          alt="" />
      </div>
      <div className="py-3 px-4 flex flex-col items-start gap-1">
        <h5
          className="mb-[.15rem] text-[1.2rem] text-center font-['Open_Sans_Semi'] text-main-text-color">
          {name}
        </h5>
        <div className='mb-2 text-gray-600 w-[100%] flex flex-row flex-wrap gap-2 font-["Open_Sans_Semi"] text-[.85rem]'>
          <h6
            className="leading-tight">
            {breed}
          </h6>
          <span> | </span>
          <h6
            className="text-center leading-tight">
            {size}
          </h6>
        </div>
        <div className='w-[100%] flex flex-row gap-2 items-center font-["Open_Sans_Medium"]'>
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
