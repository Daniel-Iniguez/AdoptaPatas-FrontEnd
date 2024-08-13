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
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedSexes, setSelectedSexes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
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
    const sizeArray = selectedSizes.map(size => size.toLowerCase());
    const sexArray = selectedSexes.map(sex => sex.toLowerCase());
    const ageArray = selectedAges.map(age => age.toLowerCase());

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

      console.log("Selected Ages:", selectedAges);
      console.log("Pet Age:", pet.age);
      const ageMatch =
        !ageArray.length || ageArray.includes(pet.age.toLowerCase());
      console.log("Age Match:", ageMatch);

      const sizeMatch =
        !sizeArray.length || sizeArray.includes(pet.size.toLowerCase());

      const sexMatch =
        !sexArray.length || sexArray.includes(pet.sex.toLowerCase());


      return typeMatch && locationMatch && breedsMatch && ageMatch && sizeMatch && sexMatch;
    });
    setPets(filteredPets);
    console.log(filteredPets);
  };

  useEffect(() => {

    fetchData();


  }, []);

  useEffect(() => {

    const params = new URLSearchParams();
    params.append('type', type);
    params.append('location', selectedLocation);
    params.append('breed', selectedBreeds.join(','));
    navigate(`/search?${params.toString()}`);

    // Fetch data based on the updated filters
    // fetchData();

  }, [type, selectedLocation, selectedBreeds, navigate]);

  const handleAgeChange = (value) => {
    console.log("Selected Age:", value);
    console.log(selectedAges);
    // Toggle the value in selectedAges
    setSelectedAges((prevAges) =>
      prevAges.includes(value)
        ? prevAges.filter((age) => age !== value)
        : [...prevAges, value]
    );
  };

  const handleSexChange = (value) => {
    setSelectedSexes((prevSexes) => {
      if (prevSexes.includes(value)) {
        return prevSexes.filter((sex) => sex !== value);
      } else {
        return [...prevSexes, value];
      }
    });
    console.log(selectedSexes);
  };

  const handleSizeChange = (size) => {
    // Use the functional form of set function to ensure the latest state
    setSelectedSizes((prevSizes) => {
      // Check if the size is already in the selectedSizes array
      const isSelected = prevSizes.includes(size);

      // If the size is not selected, add it to the array; otherwise, remove it
      return isSelected
        ? prevSizes.filter((selectedSize) => selectedSize !== size)
        : [...prevSizes, size];
    });
    console.log(selectedSizes)
  };

  const handleApplyFilters = async () => {
    console.log("Selected Ages:", selectedAges);

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
    params.append('age', selectedAges.join(','));
    params.append('sex', selectedSexes.join(','));
    params.append('size', selectedSizes.join(','));

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
    <section className='py-11 gap-10 px-5 pb-11 w-[100%] flex flex-col items-center justify-center'>

      {/*Top Bar*/}

      <div className="w-[80%] bg-secondary-bg-color rounded-2xl p-10">
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
                    Introduce una ubicación
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Left side bar*/}
      <section class=" grid md:grid-cols-12 p-4 m-2 w-[100%] ">
        <div className='md:col-span-3 justify-self-center md:pt-0 p-2'>
          <div className='left flex flex-wrap md:flex-col justify-around w-[100%] md:max-w-[17.5rem] rounded-lg bg-secondary-bg-color shadow-xl transition-all ease-in-out px-6 py-4'>
            <div className='py-[1rem] w-[90%] md:border-solid md:border-b-gray-500 md:border-b-[1px]'>
              <h4 className='font-["Open_Sans_Semi"] text-[1.15rem] text-main-text-color py-[0.5rem]'>Raza</h4>
              <MultiSelectComponent type={type} onBreedChange={setSelectedBreeds} selectedBreeds={selectedBreeds} />
            </div>
            <div className='py-[1rem] md:border-solid md:border-b-gray-500 md:border-b-[1px]'>
              <h4 className='font-["Open_Sans_Semi"] text-[1.15rem] text-main-text-color py-[0.5rem]'>Edad</h4>
              <div className="flex flex-col items-start justify-center">
                <Checkbox htmlFor={"1"} id={"1"} value={"Cachorro"} text="Cachorro" onChange={() => handleAgeChange("Cachorro")} />
                <Checkbox htmlFor={"2"} id={"2"} value={"Juvenil"} text="Juvenil" onChange={() => handleAgeChange("Juvenil")} />
                <Checkbox htmlFor={"3"} id={"3"} value={"Adulto"} text="Adulto" onChange={() => handleAgeChange("Adulto")} />
                <Checkbox htmlFor={"4"} id={"4"} value={"Senior"} text="Senior" onChange={() => handleAgeChange("Senior")} />
              </div>
            </div>
            <div className='py-[1rem] md:border-solid md:border-b-gray-500 md:border-b-[1px]'>
              <h4 className='font-["Open_Sans_Semi"] text-[1.15rem] text-main-text-color py-[0.5rem]'>Sexo</h4>
              <div className="flex flex-col items-start justify-center">
                <Checkbox htmlFor={"5"} id={"5"} value={"Macho"} text="Macho" onChange={() => handleSexChange("Macho")} />
                <Checkbox htmlFor={"6"} id={"6"} value={"Hembra"} text="Hembra" onChange={() => handleSexChange("Hembra")} />
              </div>
            </div>
            <div className='py-[1rem] pb-10'>
              <h4 className='font-["Open_Sans_Semi"] text-[1.15rem] text-main-text-color py-[0.5rem]'>Tamaño</h4>
              <div className="flex flex-col items-start justify-center">
                <Checkbox htmlFor={"7"} id={"7"} value={"Pequeño"} text="Pequeño" onChange={() => handleSizeChange("Pequeño")} />
                <Checkbox htmlFor={"8"} id={"8"} value={"Mediano"} text="Mediano" onChange={() => handleSizeChange("Mediano")} />
                <Checkbox htmlFor={"9"} id={"9"} value={"Grande"} text="Grande" onChange={() => handleSizeChange("Grande")} />
                <Checkbox htmlFor={"10"} id={"10"} value={"Gigante"} text="Gigante" onChange={() => handleSizeChange("Gigante")} />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center pb-4'>
              <button
                ref={buttonRef}
                onClick={handleApplyFilters}
                className='w-[10rem] h-[3rem] hover:text-main-text-color transition duration-200 ease-in-out cursor-pointer bg-main-text-color px-7 py-[0.5rem] text-white text-[0.95rem] rounded-3xl hover:bg-white font-["Open_Sans_Medium"]'>Aplicar Filtros</button>
            </div>
          </div>
        </div>

        {/*Grid Pets */}
        <div className='col-span-8 md:col-span-9 lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-6 border-solid auto-rows-min sm:px-0 sm:py-0 py-8'>
          {pets.map((pet) => (
            <PetCards key={pet.id} pet={pet} breedData={selectedBreeds} locationData={locationFilter} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default Search