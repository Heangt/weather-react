import React from "react";
export default function WeatherInfo(){
 return <div className="header">
  <h1>Spain</h1>
  <small > Saturday 11:00 </small>
  <strong>25</strong>
  <span class="units">
    <a href="/" >ºC</a>
    | <a href="/">ºF</a>
  </span>
  <small class="climate">Sunny</small>

  <p class="condition">Precipitation Humidity Wind</p>
  <p class="degree">1% 60% 16km/h</p>
  </div>
}