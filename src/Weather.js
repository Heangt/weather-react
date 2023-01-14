import React from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(){
    return <div className="Weather">
    <form>
    <input
      id="input-city"
      type="search"
      class="form-control styleform"
      placeholder="   Enter location  "
    />
  </form>
  <hr/>
  <WeatherInfo/>
  </div>
}