import React, { useState } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { BiSad } from 'react-icons/bi';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

export default function WeatherApp() {
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const toDateFunction = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const weekDays = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    const currentDate = new Date();
    const date = `${weekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
    return date;
  };

  const search = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setInput('');
      setWeather({ ...weather, loading: true });

      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const api_key = 'f00c38e0279b7bc85480c3fe775d518c';

      try {
        const res = await axios.get(url, {
          params: { q: input, units: 'metric', appid: api_key },
        });
        setWeather({ data: res.data, loading: false, error: false });
      } catch (error) {
        setWeather({ ...weather, data: {}, error: true });
        setInput('');
        console.log('error', error);
      }
    }
  };

  // Helper to choose a weather icon based on the weather condition
  const getWeatherIcon = (main) => {
    switch (main) {
      case 'Clear': return <WiDaySunny className="text-yellow-400 text-8xl" />;
      case 'Clouds': return <WiCloud className="text-gray-400 text-8xl" />;
      case 'Rain': return <WiRain className="text-blue-400 text-8xl" />;
      case 'Snow': return <WiSnow className="text-blue-200 text-8xl" />;
      case 'Thunderstorm': return <WiThunderstorm className="text-purple-500 text-8xl" />;
      default: return <WiDaySunny className="text-yellow-400 text-8xl" />;
    }
  };

  return (
    <div
  className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-white p-6"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1740&q=80')",
  }}
>

      <h1 className="text-4xl text-yellow-600 font-bold mb-6">Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={search}
        className="w-80 px-6 py-4 text-gray-800 bg-white rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
      />

      {weather.loading && (
        <div className="mt-10">
          <Oval color="white" height={80} width={80} />
        </div>
      )}

      {weather.error && (
        <div className="flex flex-col items-center mt-10 text-red-200">
          <BiSad className="text-6xl mb-2" />
          <span className="text-xl font-medium">City not found</span>
        </div>
      )}

      {weather && weather.data && weather.data.main && (
       <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-6 w-80 text-center text-white">

          <h2 className="text-2xl  font-semibold">
            {weather.data.name}, <span className="text-sm opacity-80">{weather.data.sys.country}</span>
          </h2>
          <p className="text-sm mt-1 opacity-80">{toDateFunction()}</p>

          <div className="flex flex-col  items-center mt-4">
            {getWeatherIcon(weather.data.weather[0].main)}
            <p className="text-5xl  font-bold mt-2">
              {Math.round(weather.data.main.temp)}
              <sup className="text-lg font-medium">°C</sup>
            </p>
          </div>

          <div className="mt-3 text-sm">
            <p className="uppercase tracking-wide font-medium">
              {weather.data.weather[0].description}
            </p>
            <p className="mt-1">Wind Speed: {weather.data.wind.speed} m/s</p>
          </div>
        </div>
      )}
      <p className="fixed bottom-4 right-4 text-sm sm:text-base md:text-lg text-yellow-400 opacity-90">
  <b><i>Developed by Charan</i></b>
</p>

    </div>
  );
}
