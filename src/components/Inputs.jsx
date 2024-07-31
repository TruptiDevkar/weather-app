import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords; // Fixed typo here
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  const handleUnitChange = (unit) => {
    setUnits(unit);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="search by city..."
          className="text-gray-500 font-light p-2 text-xl w-full capitalize shadow-xl focus:outline-none placeholder:lowercase"
        />

        <BiSearch
          size={30}
          onClick={handleSearchClick}
          className="cursor-pointer transition ease-out hover:scale-125 text-white"
        />
        <BiCurrentLocation
          size={30}
          onClick={handleLocationClick}
          className="cursor-pointer transition ease-out hover:scale-125 text-white"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125 text-white"
          onClick={() => handleUnitChange('metric')} // °C button
         >
          °C
        </button>
        <p className="text-2xl font-medium mx-1 custom-font">|</p>
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125 text-white"
          onClick={() => handleUnitChange('imperial')} // °F button
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
