import React from 'react';
import './WeatherForecastStyle.css';
import WeatherIcon from './WeatherIcon';
import axios from 'axios';

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = `9b71ae985af1baa6a806c916c0a028f9`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div>
            <div className="col">
            <h3 className="colName">Weekly weather</h3>
            <div className="future-forecast" id="card-body-forecast"></div>
            <div className="Weather-day"> Thu </div>
            <WeatherIcon code="01d" size={30}/>
            <div>
            <span className="Weather-max-temp">19°</span> <span className="Weather-min-temp"> 10°</span>
            </div>
            </div>
        </div>
    )
}