import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    if (loaded) {
        return (
            <div>
                <div className="future-forecast" id="card-body-forecast">
                <h3 className="colName">Weekly weather</h3>
                <div className="row row-cols-3">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 6) {
                        return (
                            <div className="col pt-1 pb-2" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
                </div>
                </div>
            </div>
        );
    }
    else {
        let apiKey = `082d3d02ffdb12f2fd9b259e2ced1d0d`;
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}