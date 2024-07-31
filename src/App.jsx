import React, { useEffect, useState } from "react";
import Topbuttons from "./components/Topbuttons";
import Inputs from "./components/Inputs";
import Timeandlocation from "./components/Timeandlocation";
import TempandDetails from "./components/TempandDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/WeatherService";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({ q: "ahmedabad" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
  const message = query.q ? query.q : 'current location';
  toast.info(`fetching weather data for ${message.toUpperCase()}`);


    try {
      const data = await getFormattedWeatherData({ ...query, units });
      setWeather(data);
      console.log(data); // Log data after it has been fetched
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
    return 'from-yellow-600 to-orange-700'; // Fixed typo
  };

  return (
    <div className={`mx-auto max-w-screen-xl mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <Topbuttons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <>
          <Timeandlocation weather={weather} />
          <TempandDetails weather={weather} units={units} />
          <Forecast title='3 hour step forecast' data={weather.hourly} />
          <Forecast title='daily forecast' data={weather.daily} />
        </>
      )}

<ToastContainer autoClose={2500} hideProgressBar={true} theme='colored' />


    </div>
  );
}

export default App;
