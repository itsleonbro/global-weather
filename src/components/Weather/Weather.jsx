import React from "react";
import styles from "./Weather.module.css";

const Weather = ({ weatherData, loading, error }) => {
  if (loading) {
    return <div className={styles.weatherCard}>Loading weather data...</div>;
  }

  if (error) {
    return <div className={styles.weatherCard}>Error: {error}</div>;
  }

  if (!weatherData) {
    return (
      <div className={styles.weatherCard}>
        <p>Click on the map to see weather details for that location</p>
      </div>
    );
  }

  // destructuring required weather data from the API response
  const {
    name,
    main: { temp, humidity },
    weather,
    wind,
    sys: { country },
  } = weatherData;

  return (
    <div className={styles.weatherCard}>
      <h2>
        {name}, {country}
      </h2>
      <div className={styles.weatherMain}>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
          className={styles.weatherIcon}
        />
        <div className={styles.temperature}>{Math.round(temp)}°C</div>
      </div>
      <div className={styles.weatherDescription}>{weather[0].description}</div>
      <div className={styles.weatherDetails}>
        <div className={styles.detailItem}>
          <span>Humidity:</span>
          <span>{humidity}%</span>
        </div>
        <div className={styles.detailItem}>
          <span>Wind Speed:</span>
          <span>{wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
