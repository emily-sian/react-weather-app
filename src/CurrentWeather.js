import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-3">
        <h2>
          <div>{props.display.weather}</div>
        </h2>
        <div className="weather-details">Humidity:{props.display.humidity}</div>
      </div>
      <div className="col-3">
        <h2>
          <img
            className="current-weather-icon"
            id="current-weather-icon"
            src=""
            alt=""
          />
        </h2>
      </div>
      <div className="col-3">
        <h2>
          {props.display.temp}
          {""}
          <span className="units">
            <a className="active" href="/">
              °C
            </a>{" "}
            |<a href="/">°F</a>
          </span>
        </h2>
        <div className="weather-details">
          Wind Speed:{props.display.windSpeed}
        </div>
      </div>
    </div>
  );
}
