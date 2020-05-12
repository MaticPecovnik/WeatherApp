import React from "react";
import "./Header.css";

const Header = ({ coords }) => {
  console.log(coords);

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
      <div className="info__container">
        Your latitude is {coords.latitude} and your longitude is{" "}
        {coords.longitude}.
      </div>
    </div>
  );
};

export default Header;
