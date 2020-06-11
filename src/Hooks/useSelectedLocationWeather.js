import { useState, useEffect } from "react";

const useSelectedLocationWeather = (cityName, cityCountryID, cityKey) => {
  const [forecastInfo, setForecastInfo] = useState([]);
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState({});
  const [fullLocationInfo, setFullLocationInfo] = useState({});

  useEffect(() => {
    const openWeatherApiKey = "48f6c5dc045dd8ad305f552108ec5d49";
    const openWeatherForecastApiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${cityCountryID}&appid=${openWeatherApiKey}`;
    const openWeatherCurrentApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${cityCountryID}&appid=${openWeatherApiKey}`;

    //fetches the forecast of the selected city based on the cityName and cityCountryID
    fetch(openWeatherForecastApiUrl)
      .then((res) =>
        res.json().then((data) => {
          setForecastInfo(
            data.list.map((el) => {
              return {
                date: el.dt_txt,
                temperature: {
                  trueTemperature: Math.round(el.main.temp - 273),
                  feelsLikeTemperature: Math.round(el.main.feels_like - 273),
                },
                weather: {
                  iconUrl: `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`,
                  description: el.weather[0].description,
                  cloudsCoverage: el.clouds.all,
                  rainVolume: el.rain === undefined ? 0 : el.rain["3h"],
                },
                wind: { speed: el.wind.speed, deg: el.wind.deg },
              };
            })
          );
        })
      )
      .catch((err) => console.log(err));

    //fetches the current weather of the selected city based on the cityName and cityCountryID
    fetch(openWeatherCurrentApiUrl)
      .then((res) =>
        res.json().then((data) => {
          setCurrentWeatherInfo({
            temperature: {
              trueTemperature: Math.round(data.main.temp - 273),
              feelsLikeTemperature: Math.round(data.main.feels_like - 273),
            },
            weather: {
              iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
              description: data.weather[0].description,
              cloudsCoverage: data.clouds.all,
              rainVolume: data.rain === undefined ? 0 : data.rain["1h"],
            },
            wind: { speed: data.wind.speed, deg: data.wind.deg },
          });
        })
      )
      .catch((err) => console.log(err));
  }, [cityCountryID, cityName]);

  useEffect(() => {
    const accuweatherApiKey = "?apikey=R9EfisYbJAGY8KGcfymWyGAYGuNUdrIU"; //apikey=R9EfisYbJAGY8KGcfymWyGAYGuNUdrIU apikey=Hydrjh5zJvGkKsYIM4nAMIntEstLgGjx
    const accuweatherKeySearchApiUrl =
      `http://dataservice.accuweather.com/locations/v1/${cityKey}` +
      accuweatherApiKey;

    //fetches detailed information for the selected location based on the cityKey
    fetch(accuweatherKeySearchApiUrl)
      .then((res) =>
        res
          .json()
          .then((data) => {
            setFullLocationInfo({
              cityInfo: {
                cityName: data.LocalizedName,
                coords: {
                  x: data.GeoPosition.Latitude,
                  y: data.GeoPosition.Longitude,
                },
                elevation: data.GeoPosition.Elevation.Metric.Value,
              },
              countryInfo: {
                countryName: data.Country.LocalizedName,
                countryID: data.Country.ID,
              },
            });
          })
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  }, [cityKey]);

  return [forecastInfo, currentWeatherInfo, fullLocationInfo];
};

export default useSelectedLocationWeather;
