import React from "react";

import GeolocationWeather from "../Components/GeolocationWeather";

import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="app_logo__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61nuuPxUvaL.png"
          alt="App logo"
          className="app_logo"
        />
      </div>
      <div className="app_name__container">
        <h1 className="app_name">
          <u>Weatherify</u>
        </h1>
      </div>
      <div className="current_location_sup">
        <GeolocationWeather />
      </div>
    </div>
  );
};

export default Header;
