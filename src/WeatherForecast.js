import React from 'react';
import './WeatherForecastStyle.css';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecast() {
    return (
        <div>
            <h3 className="colName">Weekly weather</h3>
            <div className="future-forecast" id="card-body-forecast"></div>
            <div className="Weather-day"> Thu </div>
            <WeatherIcon code="01d" size={30}/>
            <div>
            <span className="Weather-max-temp">19°</span> <span className="Weather-min-temp"> 10°</span>
            </div>
        </div>
    )
}