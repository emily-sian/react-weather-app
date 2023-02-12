import React from "react";
import "./Location.css";

export default function Location() {
  return (
    <div className="row justify-content-center">
      <div className="col-6 offset-3">
        <h1 id="city-name">New York</h1>
      </div>
      <div className="col-3 time-and-unit-container">
        <div id="date-time">Wednesday 22:00</div>
      </div>
    </div>
  );
}
