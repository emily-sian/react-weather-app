import React from "react";
import "./CurrentWeather.css";
export default function CurrentWeather() {
  return (
    <div className="row justify-content-center">
      <div className="col-3">
        <h2>
          <div id="current-weather">Stormy</div>
        </h2>
        <div className="weather-details">
          Humidity: <span id="humidity">27</span>%
        </div>
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
          <div>
            <span id="current-temperature">27</span>
            <span className="units">
              <a id="celsius" className="active" href="/">
                °C
              </a>{" "}
              |
              <a id="farenheit" href="/">
                °F
              </a>
            </span>
          </div>
        </h2>

        <div className="weather-details">
          Wind Speed: <span id="wind-speed">27</span>km
        </div>
      </div>
    </div>
  );
}
