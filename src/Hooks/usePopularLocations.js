import { useState, useEffect } from "react";

const usePopularLocations = () => {
  let [popularLocations, setPopularLocations] = useState([]);
  let finalPopularLocations = [];

  const apiKey = "apikey=R9EfisYbJAGY8KGcfymWyGAYGuNUdrIU"; //apikey=R9EfisYbJAGY8KGcfymWyGAYGuNUdrIU apikey=Hydrjh5zJvGkKsYIM4nAMIntEstLgGjx
  const apiUrl =
    "http://dataservice.accuweather.com/currentconditions/v1/topcities/50?" +
    apiKey;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) =>
        res.json().then((data) => {
          setPopularLocations(data);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, [apiUrl]);

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * popularLocations.length);

    //adds the randomly selected location
    finalPopularLocations.push(popularLocations[index]);

    //removes it from the original list so we do not get duplicates
    popularLocations.splice(index, 1);
  }

  return finalPopularLocations;
};

export default usePopularLocations;
