import React from "react";

import "./ChangeLocation.css";

export default function ChangeLocation() {
  return (
    <div>
      <div className="row justify-content-center">
        <form className="location-updater-form" id="location-form">
          <div className="row justify-content-center">
            <div className="col-5">
              <input
                className="form-control"
                type="search"
                id="location-input"
                placeholder="Enter location"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="row justify-content-center">
        <div className="col-6">
          <button className="update-location" id="current-city-btn">
            Use Current Location
          </button>
        </div>
      </div>
    </div>
  );
}
