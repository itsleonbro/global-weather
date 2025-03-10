import React, { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Map from "./components/Map/Map";
import Weather from "./components/Weather/Weather";
import { getWeatherByCoordinates, getWeatherByCity } from "./services/weather";
import Search from "./components/Search/Search";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);

  // handle location selection from map
  const handleLocationSelected = async (lat, lng) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getWeatherByCoordinates(lat, lng);
      setWeatherData(data);

      // update map center when location is selected
      setMapCenter([lat, lng]);
    } catch (err) {
      setError("failed to fetch weather data. please try again.");
    } finally {
      setLoading(false);
    }
  };

  // handle search by city
  const handleCitySearch = async cityName => {
    if (!cityName.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const data = await getWeatherByCity(cityName);
      setWeatherData(data);

      // update map center with city coordinates
      if (data && data.coord) {
        setMapCenter([data.coord.lat, data.coord.lon]);
      }
    } catch (err) {
      setError("City not found or error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Navbar onSearch={handleCitySearch} />

        <div className={styles.searchContainer}>
          <Search onSearch={handleCitySearch} />
        </div>

        <div>
          <Map onLocationSelected={handleLocationSelected} center={mapCenter} />
          <Weather weatherData={weatherData} loading={loading} error={error} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
