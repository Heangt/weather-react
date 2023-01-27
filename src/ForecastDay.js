import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props){
  console.log(props);
     function showDay(day){
          let currentDay = new Date(day * 1000).getDay();
          let nameDays =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
          return nameDays[currentDay];
       } 
       function maxTemp(){
        let max= Math.round(props.data.temp.max);
        return max;
      }
      function minTemp(){
      let min =Math.round(props.data.temp.min);
      return min
    }
      
         return <div>
          <div class="px-2 my-2" >{showDay(props.data.dt)}</div>
          <WeatherIcon code={props.data.weather[0].icon} size={40}/> 
          <div className="forecastTemp">
          <span className="max">{maxTemp()}º</span>
          <span className="min">{minTemp()}º</span>
          </div>
          </div>     
}