import React, { useState } from "react";
import axios from "axios";
import "./UserHome.css";
// import Navbar from "../Authentication/Navbar";

function UserHome() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const apiKey = "78f6b87e87d905303d2a498fde1bc61f";

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

      axios
        .get(apiUrl)
        .then((response) => {
          setData(response.data);
          setError("");
        })
        .catch((error) => {
          setData({});
          setError("Invalid location. Please enter a valid city.");
        });

      setLocation("");
    }
  };

  const kelvinToFahrenheit = (kelvin) => {
    return ((kelvin - 273.15) * 9) / 5 + 32;
  };

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="app">
        <div className="logout-container">
          <button>Logout</button>
        </div>
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location..."
            type="text"
          />
        </div>

        <div>
          <div className="container">
            <div className="top">
              <div className="location">
                <p className="locationname">{data.name}</p>
              </div>
              <div className="temp">
                {data.main ? (
                  <h1>{kelvinToCelsius(data.main.temp).toFixed()}°C</h1>
                ) : null}
              </div>
              <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>

            {data.name !== undefined && (
              <div className="bottom">
                <div className="feels">
                  {data.main ? (
                    <p className="bold">
                      {kelvinToFahrenheit(data.main.feels_like).toFixed()}°F
                    </p>
                  ) : null}
                  <p>Feels Like</p>
                </div>
                <div className="humidity">
                  {data.main ? (
                    <p className="bold">{data.main.humidity}%</p>
                  ) : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  {data.wind ? (
                    <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                  ) : null}
                  <p>Wind Speed</p>
                </div>
              </div>
            )}
            {error && (
              <div className="error">
                <p>
                  <span role="img" aria-label="Warning">
                    ⚠️
                  </span>{" "}
                  {error}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHome;
