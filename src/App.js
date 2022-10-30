import './App.css';

export default function App() {
  return (
    <div className="App">
      <div class="all-info">
        <div class="info">
          <h1>
            <span id="city-now">Kyiv</span>
            <span id="degrees">20 </span>{" "}
            <span id="units">
              {" "}
              <a href="/" id="celsius" class="active">
                °C
              </a>{" "}
              |{" "}
              <a href="/" id="fahrenheit">
                °F
              </a>
            </span>
          </h1>
          <h2>
            Last updated: <span id="currentDate"></span>
          </h2>
          <div class="search">
            <form class="city-form">
              <input
                id="search-text"
                type="text"
                placeholder="Choose the city"
              />
              <input type="submit" id="submit-button" />
            </form>
          </div>
          <div class="container">
            <div class="row cols">
              <div class="col">
                <h3 class="colName">Daily weather</h3>
                <img
                  src="https://openweathermap.org/img/wn/04n@2x.png"
                  alt="weather-icon"
                  id="weather-icon"
                />
                <div class="daily">
                  <p id="weatherDescription"></p>
                  <hr />
                  <p>
                    Wind speed: <span id="windSpeed"></span>km/h
                  </p>
                  <p>
                    Humidity: <span id="humidity"></span>%
                  </p>
                </div>
              </div>
              <div class="col">
                <h3 class="colName">Weekly weather</h3>
                <div class="future-forecast" id="card-body-forecast"></div>
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
    </div>
  );
}

