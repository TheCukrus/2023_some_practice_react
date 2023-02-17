import React from "react";

const Weather_icon = ({ code, alt }) =>
{
    const base_url = "http://openweathermap.org/img/w/";
    const icon_url = `${base_url}${code}.png`;
    
    return <img src={icon_url} alt={alt} />
}

export default Weather_icon;