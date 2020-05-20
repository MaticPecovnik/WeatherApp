import React from "react";

import PopularLocationsCard from "./PopularLocationsCard";

import "./PopularLocations.css";

const PopularLocations = ({ popularLocations }) => {
  if (popularLocations[0] === undefined) {
    return <div></div>;
  } else {
    return (
      <div className="popular_locations__container_sub">
        <PopularLocationsCard location={popularLocations[0]} />
        <PopularLocationsCard location={popularLocations[1]} />
      </div>
    );
  }
};

export default PopularLocations;
