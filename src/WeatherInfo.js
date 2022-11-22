import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import WeatherForecast from './WeatherForecast';

export default function weatherInfo(props) {
    return (
        <div>
          <h1>
            <span id="city-now"> {props.data.city} </span>
            <WeatherTemperature celsius={props.data.temperature} />
          </h1>
          <p className="text-capitalize"> {props.data.description} </p>
          <div>
            Last updated: <FormattedDate date={props.data.date }/>
          </div>
          <div className="container">
            <div className="row cols">
              <div className="col">
                <h3 className="colName">Daily weather</h3>
                
                <WeatherIcon code={props.data.icon} size={45}/>

                <div className="daily">
                  <p id="weatherDescription"></p>
                  <hr />
                  <p>
                    Wind speed: <span id="windSpeed">{props.data.wind}</span>km/h
                  </p>
                  <p>
                    Humidity: <span id="humidity">{props.data.humidity}</span>%
                  </p>
                </div>
              </div>
              <div className="col">
                < WeatherForecast />
              </div>
            </div>
          </div>
        </div>
        );
}