
import React from "react";
import FormattedDate from "./FormattedDate";
import ConversionTemp from "./ConversionTemp";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
let temperature = Math.round(props.data.temp);
return <div className="WeatherInfo">
 <div class="container">
 <div class="row">
 <div class="col-8">
 <h1>{props.data.city}</h1>
 <FormattedDate dateData={props.data.date}/>
<p class="condition">Humidity: {props.data.humidity}% Wind:{""} {Math.round(props.data.wind)}km/h</p>
 </div>
<div class="col-1">
<WeatherIcon code={props.data.icon} size={55}/>
 </div>
<div class="col-3">
<ConversionTemp celsius={temperature}/>
<p class="climate">Sunny</p>
 </div>
 </div>
 </div>
   </div>
}
    
  
   

