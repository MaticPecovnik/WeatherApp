import React, { useState } from "react";
import { debounce } from "lodash";

import "./SearchLocations.css";

/*
// a function that handles the amount of times a function "func" can be called in a certain period of time.
// The function "func" is only called once per time equal to "wait"

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}*/

/* 
The component handles the search function of the app. The user searches by inputing a string which is saved to state "searchLocation".
An API call is made to the autocomplete service of accuweather which returns a array of suggestions saved into state "suggestionList"
When a "suggestion" is clicked by the user the application redirects the user to /{suggestion.LocalizedName},{suggestion.Country.LocalizedName}
which is handled by the Location component.
*/
const SearchLocations = () => {
  const [searchLocation, setSearchLocation] = useState(""); //state of the controlled input component used to call the autocomplete api
  const [suggestionList, setSuggestionList] = useState([]); //list of suggested locations returned by the autocomplete api

  //handles the behaviour of the app as the controlled input components value changes
  const onChange = (value) => {
    const apiKey = "apikey=R9EfisYbJAGY8KGcfymWyGAYGuNUdrIU"; //apikey=R9EfisYbJAGY8KGcfymWyGAYGuNUdrIU apikey=Hydrjh5zJvGkKsYIM4nAMIntEstLgGjx
    const autocompleteApiUrl =
      "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?";

    if (value.length > 0) {
      //if the user has written an input the autocomplete api is called
      fetch(autocompleteApiUrl + apiKey + `&q=${value}`)
        .then((res) => {
          res
            .json()
            .then((data) => {
              setSuggestionList(data); //saves the returned suggestions list to "suggestionList"
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //defines the debounced onChange function to limit the number of API calls
  const debounceOnChange = React.useCallback(debounce(onChange, 300), []);

  return (
    <div className="search__container_sub">
      <div className="search_form__container">
        <form className="search_form">
          <label className="form_label">
            <center>
              Search by location name and choose from the list bellow.
            </center>
          </label>
          <input
            className="form_input"
            type="text"
            value={searchLocation}
            onChange={(e) => {
              e.preventDefault();
              setSearchLocation(e.target.value); //sets the value of the controled component
              debounceOnChange(e.target.value); //calls the autocomplete API after a delay
            }}
          />
        </form>
      </div>
      <div className="suggestions__container">
        {suggestionList.map((suggestion, k) => {
          return (
            <div
              className="suggestion"
              key={k}
              onClick={(e) => {
                console.log(suggestion.Key);
              }}
            >
              <div className="city_name">{suggestion.LocalizedName}</div>
              <div className="country_name">
                {suggestion.Country.LocalizedName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchLocations;
