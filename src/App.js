import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Location from "./Location";
import CurrentWeather from "./CurrentWeather";
import ChangeLocation from "./ChangeLocation";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Location />
        <CurrentWeather />
        <ChangeLocation />
        <Footer />
      </div>
    </div>
  );
}
