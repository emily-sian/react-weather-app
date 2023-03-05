import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./CurrentWeather.css";
import Temperature from "./Temperature";

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
          <WeatherIcon iconCode={props.display.iconCode} />
        </h2>
      </div>
      <div className="col-3">
        <h2>
          <Temperature temp={props.display.temp} />
        </h2>
        <div className="weather-details">
          Wind Speed:{props.display.windSpeed}
        </div>
      </div>
    </div>
  );
}
