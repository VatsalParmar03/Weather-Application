import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch coordinates using OpenCage API
  const fetchCoordinates = async () => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=0ad1b697e9d24272853fb6ff2bfa8642`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch coordinates');
      }

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        fetchWeather(lat, lng);
      } else {
        setError('City not found');
        setWeatherData(null);
      }
    } catch (error) {
      setError('Failed to fetch coordinates');
      setWeatherData(null);
    }
  };

  // Fetch weather data based on lat/lon
  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeatherData(data.current_weather);
      setError(null); // Reset the error message if the data is fetched
    } catch (error) {
      setError('Failed to fetch weather data');
      setWeatherData(null);
    }
  };

  // Handle form submit to get data
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCoordinates();
  };

  return (
    <div className="app">
      <h1>Weather Now</h1>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit} id='weather'>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        
        <button type="submit">Get Weather</button>  
        
      </form>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2>Current Weather in {city}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Wind Speed: {weatherData.windspeed} km/h</p>
          <p>Weather: {weatherData.weathercode}</p>
        </div>
      )}
    </div>
  );
};

export default App;
