import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 22.55,
    humidity: 23,
    temp: 23.54,
    tempMax: 23.54,
    tempMin: 23.54,
    weather: "scattered clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Weather App </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
