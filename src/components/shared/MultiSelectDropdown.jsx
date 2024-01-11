import React, { useState, useEffect, useRef } from 'react';

const MultiSelectDropdown = ({ options, onSelect }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
    console.log('I have been clicked!');
  };

  const handleOptionClick = option => {
    const isSelected = selectedValues.includes(option);

    if (isSelected) {
      setSelectedValues(prevValues =>
        prevValues.filter(value => value !== option)
      );
    } else {
      setSelectedValues(prevValues => [...prevValues, option]);
    }

    // Use the callback function of setState to ensure onSelect receives updated values
    setSelectedValues(prevValues => {
      onSelect(prevValues);
      return prevValues;
    });
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div className="text-black relative py-3 px-5 border-[1px] w-full border-main-text-color bg-white rounded-lg cursor-pointer after:content-['▼'] after:text-xs after:ml-1 after:inline-flex after:items-center" onClick={toggleDropdown}>
        {isDropdownOpen ? `${selectedValues.length} seleccionado(s)` : 'Cualquiera'}
      </div>
      {isDropdownOpen && (
        <div
          className='px-3 py-3 absolute mt-3 flex flex-col w-[16rem] gap-1 p-2 text-gray-700 bg-white shadow-md rounded-xl bg-clip-border h-[20rem] overflow-y-auto overflow-x-hidden z-10 transition-all border-[1px] border-main-text-color'
        >
          {options.map(option => (
            <div
              key={option.id}
              className='flex items-center w-full p-0 leading-tight transition-all 
              rounded-lg outline-none text-start hover:bg-[#ddddda] hover:bg-opacity-80 focus:bg-[#ddddda] focus:bg-opacity-80 active:bg-[#ddddda] active:bg-opacity-80'
            >
              <label className='dropdown-option flex items-center justify-start w-full px-3 py-2 cursor-pointer'>
                <div className='grid mr-3 place-items-center'>
                  <div className='inline-flex items-center'>
                    <label className='relative flex items-center p-0 rounded-full cursor-pointer'>
                      <input
                        type='checkbox'
                        checked={selectedValues.includes(option)}
                        onChange={() => handleOptionClick(option)}
                        className="before:content[''] focus:ring-0 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                      />
                      <span className='absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3.5 w-3.5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          stroke='currentColor'
                          strokeWidth='1'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
                <p className='block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>
                  {option.name}
                </p>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
