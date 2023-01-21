
import React from "react";
import FormattedDate from "./FormattedDate";
import ConversionTemp from "./ConversionTemp";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props){
let temperature = Math.round(props.data.temp);
return <div className="header">
 <div class="container">
 <div class="row">
 <div class="col-5">
 <h1>{props.data.city}</h1>
 <FormattedDate dateData={props.data.date}/>
 <ConversionTemp celsius={temperature}/>
 <small class="climate">Sunny</small>
 <p class="condition">Humidity Wind</p>
  <p class="degree"> {props.data.humidity}% {Math.round(props.data.wind)}km/h</p>
 </div>
 <div class="col-7">
 <WeatherIcon code={props.data.icon}/>
 </div>
  </div>
</div>
</div>
 }
    
  
   

