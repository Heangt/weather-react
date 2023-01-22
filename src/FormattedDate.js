import React from "react";
export default function FormattedDate(props){
    let nameDay =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let date =new Date(props.dateData *1000);
    let day = nameDay[date.getDay()];
    let hour = date.getHours();
    let minute = date.getMinutes();
    if(hour<10) hour=`0${hour}`;
    if(minute<10) minute=`0${minute}`;
    
    return <p>{day} {hour}:{minute}</p>
}
