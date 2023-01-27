import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
export default function Forecast(props){
  
  const [dataForecast, setdataForecast] =useState({loaded:false});
  function displayForecast(response){
   setdataForecast({
    loaded:true,
    daily:response.data.daily
   });
}  
 if (dataForecast.loaded){
  return <div className="Forcast">
          <div class="container">
          <div class="row">
          <div class="col">
           <ForecastDay data={dataForecast.daily[0]}/> 
          </div>
          </div> 
          </div> 
          </div> 
          }
 else {
  let  apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
  let apiForecast =`https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&units=metric&appid=${apiKey}`;
  axios.get(apiForecast).then(displayForecast);
  return null;
}
}
