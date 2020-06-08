import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "../Containers/Header";
import SearchLocations from "../Components/SearchLocations";
import PopularLocations from "../Components/PopularLocations";

import usePopularLocations from "../Hooks/usePopularLocations";

import "./Main.css";

const Main = () => {
  const popularLocations = usePopularLocations();

  return (
    <div className="main">
      <div className="header__container_sup">
        <Header />
      </div>
      <div className="content__container">
        <div className="popular_locations__container_1 popular_locations__container_sup">
          <PopularLocations popularLocations={popularLocations.slice(0, 2)} />
        </div>
        <div className="search__container_sup">
          <SearchLocations />
        </div>
        <div className="popular_locations__container_2 popular_locations__container_sup">
          <PopularLocations popularLocations={popularLocations.slice(2, 4)} />
        </div>
      </div>
    </div>
  );
};

export default Main;
