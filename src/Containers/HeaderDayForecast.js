import React from "react";
import "./HeaderDayForecast.css";
import useDate from "../Hooks/useDate";

const HeaderDayForecast = ({ dailyForecast }) => {
  //url for weather icon that represents the state of current weather
  let apiWeatherIconUrl;

  dailyForecast.Day.Icon >= 10
    ? (apiWeatherIconUrl = `https://developer.accuweather.com/sites/default/files/${dailyForecast.Day.Icon}-s.png`)
    : (apiWeatherIconUrl = `https://developer.accuweather.com/sites/default/files/0${dailyForecast.Day.Icon}-s.png`);
  const date = useDate(dailyForecast.Date);

  const setColor = (min, max, value) => {
    return value <= min
      ? "blue"
      : value >= max
      ? "red"
      : value > min && value <= (max - min) / 4
      ? `rgb(0, ${(255 / (max / 4 + (5 * min) / 4)) * (value - min)}, 255)` //goes from rgb(0, 0, 255) at min to rgb(0, 255, 255) at (max - min) / 4
      : value > (max - min) / 4 && value <= (max - min) / 2
      ? `rgb(0, 255, ${-255 * ((4 / (max - min)) * value - 2)})` //goes from rgb(0, 255, 255) at (max - min) / 4 to rgb(0, 255, 0) at (max - min) / 2
      : value > (max - min) / 2 && value <= (3 * (max - min)) / 4
      ? `rgb(${255 * ((4 / (max - min)) * value - 2)}, 255, 0)` //goes from rgb(0, 255, 0) at (max - min) / 2 to rgb(255, 255, 0) at 3 * (max - min) / 4
      : `rgb(255, ${(255 / (max / 4 + (3 * min) / 4)) * (max - value)}, 0)`; //goes from rgb(255, 255, 0) at 3 * (max - min) / 4 to rgb(255, 0, 0) at max
  };

  console.log(setColor(0, 30, 22));

  return (
    <div className="header_day_forecast__container">
      <div className="forecast_date__container">{date}</div>
      <div className="forecast_icon__container">
        <img
          src={apiWeatherIconUrl}
          alt={dailyForecast.Day.IconPhrase}
          className="forecast_weather_icon"
        ></img>
      </div>
      <div className="forecast_temperature__container">
        <span
          style={{
            color: setColor(0, 30, dailyForecast.Temperature.Minimum.Value),
          }}
        >
          {Math.floor(dailyForecast.Temperature.Minimum.Value)}&#8451;
        </span>{" "}
        /{" "}
        <span
          style={{
            color: setColor(0, 30, dailyForecast.Temperature.Maximum.Value),
          }}
        >
          {Math.floor(dailyForecast.Temperature.Maximum.Value)}&#8451;
        </span>
      </div>
    </div>
  );
};

export default HeaderDayForecast;
