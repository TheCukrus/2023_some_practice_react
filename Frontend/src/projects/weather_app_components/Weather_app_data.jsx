import React from "react";
import Weather_icon from "./Weather_icon.jsx";

const Weather_app_data = (props) =>
{

    //function to calculate severity
    const calculate_severity = (aqi) =>
    {
        if (aqi === 1) return "Good air";
        if (aqi === 2) return "Fair air";
        if (aqi === 3) return "Moderate air";
        if (aqi === 4) return "Poor air";
        if (aqi === 5) return "Very poor air"
    }
    //calculate severity from open weather
    const severity = calculate_severity(props.air_pollution.list[0].main.aqi);


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
            */}
            {props.air_pollution.list[0].components.co}
            <p>severity</p>
            {severity}
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