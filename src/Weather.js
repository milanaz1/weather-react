import React, { useState } from 'react';
import axios from 'axios';
import FormattedDate from './FormattedDate';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            imgUrl: '',
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            wind: Math.round(response.data.wind.speed),
            humidity: response.data.main.humidity,
            city: response.data.name
        });
    }

    if (weatherData.ready) {
        return (
            <div className="all-info">
            <div className="info">
              <h1>
                <span id="city-now"> {weatherData.city} </span>
                <span id="degrees"> {weatherData.temperature} </span>{" "}
                <span id="units">
                  {" "}
                  <a href="/" id="celsius" className="active">
                    °C
                  </a>{" "}
                  |{" "}
                  <a href="/" id="fahrenheit">
                    °F
                  </a>
                </span>
              </h1>
              <p className="text-capitalize"> {weatherData.description} </p>
              <div>
                Last updated: <FormattedDate date={ weatherData.date }/>
              </div>
              <div className="search">
                <form className="city-form">
                  <input
                    id="search-text"
                    type="text"
                    placeholder="Choose the city"
                  />
                  <input type="submit" id="submit-button" />
                </form>
              </div>
              <div className="container">
                <div className="row cols">
                  <div className="col">
                    <h3 className="colName">Daily weather</h3>
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      id="weather-icon"
                    />
                    <div className="daily">
                      <p id="weatherDescription"></p>
                      <hr />
                      <p>
                        Wind speed: <span id="windSpeed">{weatherData.wind}</span>km/h
                      </p>
                      <p>
                        Humidity: <span id="humidity">{weatherData.humidity}</span>%
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <h3 className="colName">Weekly weather</h3>
                    <div className="future-forecast" id="card-body-forecast"></div>
                    
                  </div>
                </div>
              </div>
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
        const api_key = `9b71ae985af1baa6a806c916c0a028f9`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${api_key}&units=metric`;
        axios.get(url).then(handleResponse);

        return "Loading..";
    }

}