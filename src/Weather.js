import React, { useState } from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import FormatDate from "./FormatDate";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [display, setDisplay] = useState({ ready: false });

  const apiKey = "cc927259dd293f79531abf4c09787aca";
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  function handleResponse(response) {
    setDisplay({
      ready: true,
      city: city,
      dateTime: response.data.dt * 1000,
      temp: response.data.main.temp,
      weather: response.data.weather[0].main,
      humidity: `${response.data.main.humidity}%`,
      windSpeed: `${response.data.wind.speed} km/h`,
      iconCode: response.data.weather[0].icon,
    });
  }

  function getWeather() {
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getWeather();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (!display.ready) {
    getWeather();
    return "Loading..";
  } else {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-6 offset-3">
            <h1>{display.city}</h1>
          </div>
          <FormatDate dateTime={display.dateTime} />
        </div>
        <div className="row justify-content-center">
          <form className="location-updater-form" onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-5">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a city.."
                  autoFocus="on"
                  onChange={updateCity}
                />
              </div>
            </div>
          </form>
        </div>
        <CurrentWeather display={display} />
      </div>
    );
  }
}
