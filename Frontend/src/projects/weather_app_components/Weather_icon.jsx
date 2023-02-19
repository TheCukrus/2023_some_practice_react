import React from "react";
import s from "./Weather.module.css";

const Weather_icon = ({ code, alt }) =>
{
    const base_url = "http://openweathermap.org/img/w/";
    const icon_url = `${base_url}${code}.png`;
    
    return <img className={s.icon} src={icon_url} alt={alt} />
}

export default Weather_icon;