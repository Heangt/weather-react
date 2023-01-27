import React, { useEffect, useState } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props){
  const [loaded,setLoaded]=useState(false);
  const [dataForecast, setdataForecast] =useState();
  
  function displayForecast(response){
   setLoaded(true);
  setdataForecast(response.data.daily);
  } 
  useEffect(()=>{
    setLoaded(false);
  },[props.data]);
 if (loaded){
  return <div className="Forcast">
          <div class="container">
          <div class="row">
          {dataForecast.map((dailyForecast,index) =>{
            if(index <6){
          return <div class="col" key={index}>
           <ForecastDay data={dailyForecast}/> 
           </div>
           } else return null
           
            })}
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
