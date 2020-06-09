import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Containers/Header";
import SearchLocations from "../Components/SearchLocations";
import PopularLocations from "../Components/PopularLocations";
import SelectedLocation from "../Components/SelectedLocation";
import Loader from "../Containers/Loader";

import usePopularLocations from "../Hooks/usePopularLocations";

import "./Main.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 450);
  }, []);

  return isLoaded ? (
    <Router>
      <div className="header__container_sup">
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route
          path="/location/:cityName/:countryID"
          component={SelectedLocation}
        />
      </Switch>
    </Router>
  ) : (
    <Loader />
  );
};

const Main = () => {
  const popularLocations = usePopularLocations();

  return (
    <div className="main">
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

export default App;
