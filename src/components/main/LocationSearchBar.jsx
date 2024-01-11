import React, { useState, useRef, useEffect } from 'react';
import { citiesData } from '../../constants/citiesData';

const LocationSearchBar = ({ onChange, location }) => {
  const [query, setQuery] = useState(location ? location : '');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const inputRef = useRef(null);


  useEffect(() => {
    // Close suggestions when clicking outside the component
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleSuggestionClick = (location) => {
    onChange(location.city);
    setQuery(location.city);
    setSuggestions([]);
    setSelectedLocation(location.city);
  };

  const handleInputChange = (event) => {
    const filteredSuggestions = citiesData.filter(
      (city) =>
        city.city.toLowerCase().includes(query.toLowerCase()) ||
        city.state.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    // Update the query and reset the selected location when the user starts typing
    setQuery(event.target.value);
    setSelectedLocation(null);
  };

  return (
    <div className="relative w-[100%]" ref={inputRef}>
      <input
        id="locationInput"
        type="text"
        placeholder=''
        value={query}
        onChange={handleInputChange}
        className="font-['Open_Sans_Semi'] text-black relative pt-5 pb-3 px-5 border-[1px] w-full border-black bg-white rounded-lg placeholder-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer "
      />
      <label
        htmlFor="locationInput"
        className="absolute text-gray-500 font-['Open_Sans_Extra'] peer-focus:font-['Open_Sans_Extra'] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
        {selectedLocation ? 'Ubicación seleccionada:' : 'Selecciona una ubicación:'}
      </label>
      {suggestions.length > 0 && (
        <div
          className="px-3 py-3 absolute mt-3 flex flex-col w-[100%] gap-1 p-2 text-gray-700 bg-white shadow-md rounded-xl bg-clip-border h-[18rem] overflow-y-auto overflow-x-hidden z-20 transition-all border-[1px] border-main-text-color">
          {suggestions.map((location) => (
            <div
              key={`${location.city}-${location.state}`}
              onClick={() => handleSuggestionClick(location)}
              className="flex font-['Open_Sans_Medium'] text-gray-900 items-center w-full px-2 py-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-[#ddddda] hover:bg-opacity-80 focus:bg-[#ddddda] focus:bg-opacity-80 active:bg-[#ddddda] active:bg-opacity-80">
              {`${location.city}, ${location.state}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearchBar;