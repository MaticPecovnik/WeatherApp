import React, { useState, useEffect } from "react";

import Header from "./Header";

import "./Main.css";

const Main = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLatitude(Math.round(pos.coords.latitude * 100) / 100);
        setLongitude(Math.round(pos.coords.longitude * 100) / 100);
      },
      (err) => {
        console.log(err);
      },
      options
    );
  }, []);

  return (
    <div className="main">
      {latitude !== undefined && longitude !== undefined ? (
        <Header coords={{ latitude, longitude }} />
      ) : null}
    </div>
  );
};

export default Main;
