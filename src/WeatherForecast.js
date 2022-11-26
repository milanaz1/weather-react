import React, { useState } from 'react';
import './WeatherForecastStyle.css';
import WeatherForecastDay from './WeatherForecastDay';
import axios from 'axios';

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div>
                <div className="future-forecast" id="card-body-forecast">
                <div className="col">
                <h3 className="colName">Weekly weather</h3>
                <WeatherForecastDay data={forecast[0]} />
                </div>
            </div>
            </div>
        );
    }
    else {
        let apiKey = `9b71ae985af1baa6a806c916c0a028f9`;
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}