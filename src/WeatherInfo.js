
import React from "react";
import FormattedDate from "./FormattedDate";
import ConversionTemp from "./ConversionTemp";

export default function WeatherInfo(props){
let temperature = Math.round(props.data.temp);
return <div className="header">
  <h1>{props.data.city}</h1>
  <FormattedDate dateData={props.data.date}/>
  
   <ConversionTemp celsius={temperature}/>
  
  <small class="climate">Sunny</small>

  <p class="condition">Humidity Wind</p>
  <p class="degree"> {props.data.humidity}% {Math.round(props.data.wind)}km/h</p>
  </div>

  }
    
  
   

