import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
  const [city, setcity] = useState(props.city);
  const [weatherData, setWeatherData]= useState({ready:false});
  function showWeatherData(response){
    console.log(response.data)
    setWeatherData({
     ready:true,
     city: response.data.name,
     temp: response.data.main.temp,
     description: response.data.weather[0].description,
     humidity:response.data.main.humidity,
     wind:response.data.wind.speed
  })
}
function searchWeatherData() {
  let  apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
  let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiWeather).then(showWeatherData);
}
  function handleSubmit(event){
    event.preventDefault()
    searchWeatherData();
  }

   function updateCity(event){
    setcity(event.target.value)
   }
  
  if(weatherData.ready){
    return(
     <div className="Weather">
    <form onSubmit={handleSubmit}>
    <input onChange={updateCity}
      id="input-city"
      type="search"
      class="form-control styleform"
      placeholder="   Enter location  "
    />
  </form>
  <hr/>
  <WeatherInfo data={weatherData}/>
  </div>
    )
} else {
  searchWeatherData(city);
}  
} 