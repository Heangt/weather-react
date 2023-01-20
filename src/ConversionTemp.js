
import React, { useState } from "react";
export default function ConversionTemp(props){
    const [unit, setUnit]= useState("celsius");
    
    function convertFahrenthei(event){
     event.preventDefault();
     setUnit(Math.round(props.celsius* 9/5 + 32));
    }
    function convertCelsius(event){
      event.preventDefault();
      setUnit(props.celsius);
    }
    if (unit==="celsius") {
    return (
    <div className="ConversionTemp">
      <strong>{props.celsius}</strong>
      <span className="units">
     <a href="/" class="text-decoration-none"onClick={convertCelsius}>ºC</a>
      | <a href="/" class="text-decoration-none" onClick={convertFahrenthei}>ºF</a>
    </span>
    </div>
   ) 
    } else { 
      return (
          <div className="ConversionTemp">
          <strong>{unit}</strong>
        <span className="units">
         <a href="/" class="text-decoration-none"onClick={convertCelsius}>ºC</a>
        |<a href="/"class="text-decoration-none" onClick={convertFahrenthei}>ºF</a>
          </span>
      </div>
          ) 
      
    } 
  }
