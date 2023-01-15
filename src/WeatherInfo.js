
import React from "react";
export default function WeatherInfo(props){

return <div className="header">
  <h1>{props.data.city}</h1>
  <small > Saturday 11:00 </small>
  <strong>{Math.round(props.data.temp)}</strong>
  <span class="units">
    <a href="/" >ºC</a>
    | <a href="/">ºF</a>
  </span>
  <small class="climate">Sunny</small>

  <p class="condition">Humidity Wind</p>
  <p class="degree"> {props.data.humidity}% {Math.round(props.data.wind)}km/h</p>
  </div>

  }
    
  
   

