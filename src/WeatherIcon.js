import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "03n": "CLOUDY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "SLEET",
        "09n": "SLEET",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "WIND",
        "11n": "WIND",
        "13d": "SNOW",
        "13n": "SNOW",
        "50n": "FOG",
        "50n": "FOG"
    }
    return (
        <ReactAnimatedWeather
          icon={codeMapping[props.code]}
          color="black"
          size={props.size}
          animate={true}
        />
      );
}