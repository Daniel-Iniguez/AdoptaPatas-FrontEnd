import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LocationSearchBar from './LocationSearchBar'
import MultiSelectComponent from './MultiSelectComponent';
import './animation.css'

const SearchBarHome = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [petType, setPetType] = useState('dog');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [showError, setShowError] = useState(false);

  const mountedStyle = { animation: "inAnimation 250ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
  };

  useEffect(() => {
    // Update the URL with the current filters only if at least one filter is selected
    if (petType !== 'dog' || selectedLocation || selectedBreeds.length > 0) {
      const params = new URLSearchParams();
      params.append('type', petType);
      params.append('location', selectedLocation);
      params.append('breed', selectedBreeds.join(',')); // Join selected breeds into a comma-separated string
      // navigate(`/search?${params.toString()}`);
    }
  }, [petType, selectedLocation, selectedBreeds, navigate]);

  const handleTypeChange = (newType) => {
    setPetType(newType);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  const handleBreedChange = (breeds) => {
    setSelectedBreeds(breeds);
  };

  const handleApplyFilters = () => {

    if (!selectedLocation) {
      setIsMounted(!isMounted)
      if (!showError) setShowError(true);
      return;
    }

    console.log('Fetching data with filters:', {
      type: petType,
      location: selectedLocation,
      breeds: selectedBreeds,
    });

    setShowError(false);


    // Redirect to the Search page with the selected filters
    navigate(`/search?type=${petType}&location=${selectedLocation}&breed=${selectedBreeds.join(',')}`);
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


  return (
    <section className="w-[100%] h-[550px] flex flex-col items-center justify-around py-16">
      <h3 className='p-10 font-["Nunito_Black"] text-[3rem] text-main-text-color text-center'>
        Encuentra a tu próximo mejor amigo
      </h3>
      {/* Pet Type Selection */}
      <div className="w-[80%] bg-[#292929] rounded-2xl p-14 pb-16">
        <div className="w-[100%] flex flex-col items-center gap-8">
          <div className="w-[90%] md:w-[62%] lg:w-[90%] flex flex-col gap-3 text-white text-[1.5rem] justify-center">
            <div>
              <span
                className='inline-block pr-4'
                style={{
                  fontFamily: petType === "dog" ? "Open Sans Black" : "Open Sans Semi",
                  color: petType === "dog" ? "white" : "#d6d3d1"
                }}
                onClick={() => setPetType("dog")}>Perros</span>
              <span
                className='inline-block'
                style={{
                  fontFamily: petType === "cat" ? "Open Sans Black" : "Open Sans Semi",
                  color: petType === "cat" ? "white" : "#d6d3d1"
                }}
                onClick={() => setPetType("cat")}>Gatos</span>
            </div>
          </div>

          <div className=" w-[90%] flex flex-col lg:flex-row justify-between gap-10 items-center">
            <div className='w-[100%] md:w-[70%] flex flex-col gap-3 lg:gap-7 lg:flex-row lg:w-[100%] justify-around '>
              <div className='relative w-[100%]'>
                <LocationSearchBar onChange={handleLocationChange} />
                {showError && (
                  <p className=" absolute text-[#f87171] font-['Open_Sans_Medium'] text-[.8rem] mt-3 left-0"
                    style={isMounted ? mountedStyle : unmountedStyle}
                    onAnimationEnd={() => { if (!isMounted) setShowError(false) }}>
                    Introduce una ubicación
                  </p>
                )}
              </div>
              <MultiSelectComponent
                type={petType}
                onTypeChange={handleTypeChange}
                onBreedChange={handleBreedChange}
                selectedBreeds={selectedBreeds}
              />
            </div>
            <div className="flex flex-row gap-10">
              {/* "Apply Filters" button should be outside MultiSelectComponent */}
              <button
                ref={buttonRef}
                onClick={handleApplyFilters}
                className='w-[10rem] h-[3rem] transition duration-200 ease-in-out cursor-pointer bg-[#f3f3f3] px-7 py-[0.5rem] text-main-text-color text-[0.95rem] rounded-3xl hover:bg-gray-300 font-["Open_Sans_Medium"]'>Buscar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBarHome;