import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.city);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: Math.round(response.data.main.temp),
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            wind: Math.round(response.data.wind.speed),
            humidity: response.data.main.humidity,
            city: response.data.name
        });
    }

function search() {
  const api_key = `34ae1065362d42545661451bda2b8a1f`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  axios.get(url).then(handleResponse);
}


function handleSubmit(event) {
      event.preventDefault();
      search();
    }

function handleCityChange(event) {
  setCity(event.target.value);
}

    if (weatherData.ready) {
        return (
          <div className="all-info">
                    <div className="info">
              <div className="search">
                <form onSubmit={handleSubmit} className="city-form">
                  <input
                    className="m-1 rounded"
                    id="search-text"
                    type="text"
                    placeholder="Choose the city"
                    onChange={handleCityChange}
                  />
                  <input type="submit" id="submit-button" className="m-1 rounded"/>
                </form>
              </div>
              <WeatherInfo data={weatherData}/>
              </div>
            <p>
              Coded by Milana Zadorozhna -
              <a href="https://github.com/milanaz1/weather-react" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </div>
        );
    } else {
        search();
        return "Loading..";
    }
  }