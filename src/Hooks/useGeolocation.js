import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });
  const [locationInfo, setLocationInfo] = useState({
    LocalizedName: "",
    CountryID: "",
    apiLocalID: 0,
  });

  const [currentWeatherInfo, setCurrentWeatherInfo] = useState({
    temperature: 0,
    WeatherIcon: "",
    WeatherText: "",
  });

  const apiKey = "apikey=Hydrjh5zJvGkKsYIM4nAMIntEstLgGjx";

  const getGeolocation = () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          latitude: Math.floor(pos.coords.latitude * 1000) / 1000,
          longitude: Math.floor(pos.coords.longitude * 1000) / 1000,
        });
      },
      (err) => {
        console.log(err);
      },
      options
    );
  };

  //gets the geolocation of the user
  useEffect(() => {
    getGeolocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //from the geolocation info, the general info about the location is obtained
  useEffect(() => {
    const apiUrl =
      "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?";

    if (coords.latitude !== 0 && coords.longitude !== 0) {
      fetch(apiUrl + apiKey + `&q=${coords.latitude}%2C${coords.longitude}`)
        .then((res) => {
          res.json().then((data) => {
            setLocationInfo({
              LocationName: data.EnglishName,
              CountryName: data.Country.EnglishName,
              apiLocalID: data.Key,
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [coords]);

  //using the ID of the geolocation, current weather is requested
  useEffect(() => {
    const apiUrl = "http://dataservice.accuweather.com/currentconditions/v1/";

    if (locationInfo.apiLocalID !== 0) {
      fetch(apiUrl + `${locationInfo.apiLocalID}?` + apiKey)
        .then((res) => {
          res.json().then((data) => {
            setCurrentWeatherInfo({
              temperature: data[0].Temperature.Metric.Value,
              WeatherIcon: data[0].WeatherIcon,
              WeatherText: data[0].WeatherText,
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationInfo]);

  return [locationInfo, currentWeatherInfo];
};

export default useGeolocation;
