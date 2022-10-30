import axios from 'axios';

export default function Weather(props) {
    function handleResponse(response) {
        alert (`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }
    let api_key = `9b71ae985af1baa6a806c916c0a028f9`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${api_key}&units=metric`;
    axios.get(url).then(handleResponse);
}