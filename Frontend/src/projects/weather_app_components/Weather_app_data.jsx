import React from "react";
import Weather_icon from "./Weather_icon.jsx";

const Weather_app_data = (props) =>
{

    const air_quality_index = () =>
    {
        // AQI = [(I_high - I_low)/(BP_high - BP_low)] * (C - BP_low) + I_low
    
    }

    if (Object.keys(props.data).length === 0) return null;

    return (
        <div>
            < hr />

            {props.data.name}
            <br />
            <Weather_icon code={props.data.weather[0].icon} alt={props.data.weather[0].description} />
            {props.data.main.temp}
            {/* two icons C and F */}
            {props.data.weather[0].description}

            {/* smoller information */}
            {/*
            Air quality index
            severity
            feels like temp+
            wind+
            wind direction+
            visibility+
            barometer
            */}
            <p>Air Quality Index</p>
            <p>severity</p>
            <p>feels like</p>
            {props.data.main.feels_like}
            <p>wind speed</p>
            {props.data.wind.speed}
            <p>wind direction</p>
            {props.data.wind.deg}
            <p>visibility</p>
            {props.data.visibility}


        </div>
    )
}

export default Weather_app_data;