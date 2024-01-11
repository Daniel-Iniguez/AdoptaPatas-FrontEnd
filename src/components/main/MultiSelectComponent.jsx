import React, { useState, useRef, useEffect } from 'react';
import { dogbreeds } from '../../constants/dogbreeds';
import { catbreeds } from '../../constants/catbreeds';

const MultiSelectComponent = ({ type, onTypeChange, onBreedChange, selectedBreeds = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [breeds, setBreeds] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(breeds);

  const dropdownRef = useRef(null);

  useEffect(() => {
    // Update breeds based on the selected type
    setBreeds(type === 'dog' ? dogbreeds : catbreeds);
  }, [type]);

  useEffect(() => {
    // Update filteredOptions when the selected type changes
    setFilteredOptions(breeds); // Reset selected values when the type changes
  }, [breeds]);

  useEffect(() => {
    // Close the dropdown when clicking outside the component
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleTypeChange = (newType) => {
    onTypeChange(newType);
    setIsOpen(false);
  };

  const handleBreedChange = (breed) => {
    // Toggle the selected breed in the array
    const updatedBreeds = selectedBreeds.includes(breed)
      ? selectedBreeds.filter((selected) => selected !== breed)
      : [...selectedBreeds, breed];

    onBreedChange(updatedBreeds); // Pass the updated breeds to the parent component
  }

  const handleInputChange = (value) => {
    setInputValue(value);

    const filtered = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(filtered);
  };



  return (
    <div className="relative w-[100%]" ref={dropdownRef}>
      <input
        type="text"
        id='breed-options'
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        className="font-['Open_Sans_Semi'] text-black relative pt-5 pb-3 px-5 border-[1px] w-full border-black bg-white rounded-lg cursor-pointer after:content-['▼'] after:text-xs after:ml-1 after:inline-flex after:items-center placeholder-black"
        onClick={() => setIsOpen(!isOpen)}
        placeholder={
          selectedBreeds.length == 0 ? "Cualquiera" : (selectedBreeds.length == 1 ? selectedBreeds : `${selectedBreeds.length} seleccionada(s)`)
        }
      />
      <label
        htmlFor="breed-options"
        className=" absolute text-md text-gray-500 w-full font-['Open_Sans_Extra'] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {type === 'dog' ? 'Selecciona raza(s) de perros:' : 'Selecciona raza(s) de gatos:'}
      </label>
      {isOpen && (
        <div
          className="px-3 py-3 absolute mt-3 flex flex-col w-[100%] gap-1 p-2 text-gray-700 bg-white shadow-md rounded-xl bg-clip-border h-[20rem] overflow-y-auto overflow-x-hidden z-10 transition-all border-[1px] border-main-text-color">
          {filteredOptions.map((breed) => (
            <div
              key={breed.name}
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-[#ddddda] hover:bg-opacity-80 focus:bg-[#ddddda] focus:bg-opacity-80 active:bg-[#ddddda] active:bg-opacity-80">
              <label className="dropdown-option flex items-center justify-start w-full px-3 py-2 cursor-pointer">
                <div className="grid mr-3 place-items-center">
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center p-0 rounded-full cursor-pointer">
                      <input
                        type="checkbox"
                        id={breed.name}
                        checked={selectedBreeds.includes(breed.name)}
                        onChange={() => {
                          handleBreedChange(breed.name)
                          setInputValue("")
                        }}
                        className="before:content[''] focus:ring-0 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
                <p className="block font-['Open_Sans_Medium'] text-base antialiased text-gray-900">
                  {breed.name}
                </p>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectComponent;