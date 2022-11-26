import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
    return (
        <div>
            <div className="Weather-day"> {props.data.dt} </div>
            <WeatherIcon code={props.data.weather[0].icon} size={30}/>
            <div>
            <span className="Weather-max-temp"> {Math.round(props.data.temp.max)}° </span> 
            <span className="Weather-min-temp"> {Math.round(props.data.temp.min)}° </span>
            </div>
        </div>
    )
}