import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './CountryWeather.css';

function CountryWeather() {
  const {state} = useLocation();

  return (
    <div className="weather-details">
        
      <div className="card-weather">
        <div className="card">{state.country}</div>
      <div><span className="text">Humidity:</span> {state.humidity}</div>
      <div><span className="text">Temperature:</span> {state.temp - 273.15} C</div>
      <div><span className="text">Wind Speed:</span> {state.wind.speed}, <span className="text">deg:</span> {state.wind.deg}, <span className="text">gust:</span> {state.wind.gust}</div>
      </div>
      
    </div>
  );
}

export default CountryWeather;
