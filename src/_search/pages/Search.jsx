import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Checkbox from '../../components/shared/Checkbox'
import SelectBar from '../../components/shared/SelectBar'
import LocationSearchBar from '../../components/main/LocationSearchBar';
import MultiSelectComponent from '../../components/main/MultiSelectComponent';
import { petsData } from '../../constants/petsData';
import PetCards from '../../components/pets/PetCards';
import './../../components/main/animation.css'


function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const buttonRef = useRef(null);
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type') || 'dog';
  const locationFilter = searchParams.get('location') || '';
  const breedFilter = searchParams.get('breed');
  const [selectedBreeds, setSelectedBreeds] = useState(
    breedFilter ? breedFilter.split(',') : []
  );
  const [selectedLocation, setSelectedLocation] = useState(locationFilter);
  const [pets, setPets] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [showError, setShowError] = useState(false);
  const mountedStyle = { animation: "inAnimation 250ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
  };

  const fetchData = () => {
    // Replace this with your actual data filtering logic
    console.log(locationFilter);
    console.log("Selected breeds :", selectedBreeds);
    const breedArray = selectedBreeds.map(breed => breed.toLowerCase());
    // const hasJustOneEmptyString = breedArray.filter(breed => breed === "").length === 1;
    const filteredPets = petsData.filter((pet) => {
      console.log(pet);
      const typeMatch = !type || pet.type === type;
      console.log(typeMatch);

      const locationMatch =
        !selectedLocation ||
        pet.location.city.toLowerCase().includes(selectedLocation.toLowerCase());
      console.log(locationMatch)

      const breedsMatch =
        !breedArray.length || breedArray.includes(pet.breed.toLowerCase());
      console.log(breedsMatch)

      return typeMatch && locationMatch && breedsMatch;
    });
    setPets(filteredPets);
    console.log(filteredPets);
  };

  useEffect(() => {
    // Fetch data based on filters when the component mounts
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to ensure it runs only once when the component mounts

  useEffect(() => {
    // Update the URL with the current filters
    const params = new URLSearchParams();
    params.append('type', type);
    params.append('location', selectedLocation);
    params.append('breed', selectedBreeds.join(','));
    navigate(`/search?${params.toString()}`);

    // Fetch data based on the updated filters
    // fetchData();

  }, [type, selectedLocation, selectedBreeds, navigate]);

  const handleApplyFilters = async () => {

    if (!selectedLocation) {
      setIsMounted(!isMounted)
      if (!showError) setShowError(true);
      return;
    }
    // Wait for the selectedBreeds state to be updated
    await new Promise((resolve) => setTimeout(resolve, 0));

    console.log('Selected Breeds on Apply Filters:', selectedBreeds);

    // Update the URL with the current filters
    const params = new URLSearchParams();
    params.append('type', type);
    params.append('location', selectedLocation); // Display only the city in the URL
    params.append('breed', selectedBreeds.join(','));
    navigate(`/search?${params.toString()}`);

    setShowError(false);
    // Fetch data based on the updated filters
    fetchData();
  };

  const handleDocumentClick = (event) => {
    // Hide error message when clicking anywhere
    if (buttonRef.current && buttonRef.current.contains(event.target)) {
      return;
    }
    setIsMounted(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);



  const options = [
    "10 km o menos",
    "25 km o menos",
    "30 km o menos",
    "35 km o menos"
  ]

  return (
    <section className='py-11 gap-10  pb-11 w-[100%] flex flex-col items-center justify-center'>

      {/*Top Bar*/}

      <div className="w-[80%] bg-secondary-bg-color rounded-2xl p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="w-[100%] flex flex-col items-center gap-5">
          <h3 className="text-main-text-color font-['Open_Sans_Bold'] text-[2rem]">Resultados para: {`${type === 'dog' ? 'Perro' : 'Gato'}`}</h3>
          <div className=" w-[90%] flex flex-col lg:flex-row gap-10 justify-center items-center">
            <div className='w-[100%] md:w-[70%] flex flex-col gap-3 lg:gap-7 lg:flex-row lg:w-[70%] justify-around  '>
              <div className='relative w-[100%]'>
                <LocationSearchBar onChange={setSelectedLocation} location={locationFilter} />
                {showError && (
                  <p className="absolute mt-3 text-[#b91c1c] font-['Open_Sans_Medium'] text-[.8rem] left-0 mb-2"
                    style={isMounted ? mountedStyle : unmountedStyle}
                    onAnimationEnd={() => { if (!isMounted) setShowError(false) }}>
                    Location is required
                  </p>
                )}
              </div>
            </div>
            {/* <div className="border-solid border-yellow-500 border-2 flex flex-row gap-10">
              /* "Apply Filters" button should be outside MultiSelectComponent 
              <button
                ref={buttonRef}
                onClick={handleApplyFilters}
                className='w-[10rem] h-[3rem] hover:text-white transition duration-200 ease-in-out cursor-pointer bg-[#f3f3f3] px-7 py-[0.5rem] text-black text-[0.95rem] rounded-3xl hover:bg-main-text-color font-["Open_Sans_Medium"]'>Aplicar Filtros</button>
            </div> */}
          </div>
        </div>
      </div>

      {/*Left side bar*/}
      <section class=" grid md:grid-cols-12 p-4 m-2 w-[100%] ">
        <div className='md:col-span-3 justify-self-center md:pt-0 p-2'>
          <div className='left flex flex-col justify-around w-[17.5rem] rounded-lg bg-secondary-bg-color shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all ease-in-out px-4 py-4'>
            {/* <div className='py-[1rem] border-solid border-b-gray-500 border-b-[1px]'>
              <h4 className='font-["Open_Sans_Semi"] text-[1.15rem] text-main-text-color py-[0.5rem]'>Distancia</h4>
              <SelectBar selected="20 km o menos" label="Distancia" options={options} />
            </div> */}
            <div className='py-[1rem] border-solid border-b-gray-500 border-b-[1px]'>
              <h4 className='font-["Open_Sans_Semi"] text-[1.15rem] text-main-text-color py-[0.5rem]'>Raza</h4>
              <MultiSelectComponent type={type} onBreedChange={setSelectedBreeds} selectedBreeds={selectedBreeds} />
            </div>
            <div className='py-[1rem] border-solid border-b-gray-500 border-b-[1px]'>
              <h4 className='font-["Open_Sans_Semi"] text-[1.15rem] text-main-text-color py-[0.5rem]'>Edad</h4>
              <div className="flex flex-col items-start justify-center">
                <Checkbox htmlFor={"1"} id={"1"} value={1} text="Cachorro" />
                <Checkbox htmlFor={"2"} id={"2"} value={2} text="Juvenil" />
                <Checkbox htmlFor={"3"} id={"3"} value={3} text="Adulto" />
                <Checkbox htmlFor={"4"} id={"4"} value={4} text="Senior" />
              </div>
            </div>
            <div className='py-[1rem] border-solid border-b-gray-500 border-b-[1px]'>
              <h4 className='font-["Open_Sans_Semi"] text-[1.15rem] text-main-text-color py-[0.5rem]'>Sexo</h4>
              <div className="flex flex-col items-start justify-center">
                <Checkbox htmlFor={"5"} id={"5"} value={5} text="Macho" />
                <Checkbox htmlFor={"6"} id={"6"} value={6} text="Hembra" />
              </div>
            </div>
            <div className='py-[1rem] pb-10'>
              <h4 className='font-["Open_Sans_Semi"] text-[1.15rem] text-main-text-color py-[0.5rem]'>Tamaño</h4>
              <div className="flex flex-col items-start justify-center">
                <Checkbox htmlFor={"7"} id={"7"} value={7} text="Pequeño" />
                <Checkbox htmlFor={"8"} id={"8"} value={8} text="Mediano" />
                <Checkbox htmlFor={"9"} id={"9"} value={9} text="Grande" />
                <Checkbox htmlFor={"10"} id={"10"} value={10} text="Gigante" />
              </div>
            </div>
            <button
              ref={buttonRef}
              onClick={handleApplyFilters}
              className='w-[10rem] h-[3rem] hover:text-main-text-color transition duration-200 ease-in-out cursor-pointer bg-main-text-color px-7 py-[0.5rem] text-white text-[0.95rem] rounded-3xl hover:bg-[#3f3f3] font-["Open_Sans_Medium"]'>Aplicar Filtros</button>
          </div>
        </div>

        {/*Grid Pets */}
        <div className='col-span-8 md:col-span-9 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-6 border-solid auto-rows-min'>
          {pets.map((pet) => (
            <PetCards key={pet.id} pet={pet} breedData={selectedBreeds} locationData={locationFilter} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default Search