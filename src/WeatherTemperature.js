import React, { useState } from 'react'; 

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault()
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
    return (
        <div>
            <span id="degrees"> {props.celsius} </span>{" "}
            <span id="units">
                °C {" "}
              |{" "}
              <a href="/" id="fahrenheit" onClick={convertToFahrenheit} className="active">
                °F
              </a>
            </span>
        </div>
    );
} else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
        <div>
        <span id="degrees"> {Math.round(fahrenheit)} </span>{" "}
        <span id="units">
          {" "}
          <a href="/" id="celsius" onClick={convertToCelsius} className="active">
            °C
          </a>
          | °F 
        </span>
    </div>
    )
}
}