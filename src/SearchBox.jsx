import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let getWeatherInfo = async () => {
    try {
      let data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&${API_KEY}&units=metric`
      );
      let json = await data.json();
      let result = {
        city: city,
        temp: json.main.temp,
        tempMin: json.main.temp_min,
        tempMax: json.main.temp_max,
        humidity: json.main.humidity,
        feelsLike: json.main.feels_like,
        weather: json.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No Such Place exists!</p>}
      </form>
    </div>
  );
};

export default SearchBox;
