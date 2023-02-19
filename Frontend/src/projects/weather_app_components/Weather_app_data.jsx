import React from "react";
import Weather_icon from "./Weather_icon.jsx";
import s from "./Weather.module.css";

const Weather_app_data = (props) =>
{

    if (Object.keys(props.data).length === 0) return null;

    //function to calculate severity
    const calculate_severity = (aqi) =>
    {
        if (typeof aqi === "undefined") return "Unknown";
        if (aqi === 1) return "Good air";
        if (aqi === 2) return "Fair air";
        if (aqi === 3) return "Moderate air";
        if (aqi === 4) return "Poor air";
        if (aqi === 5) return "Very poor air"
    }

    //calculate severity from open weather
    let severity;
    try
    {
        severity = calculate_severity(props.air_pollution.list[0].main.aqi);
    }
    catch (err)
    {
        severity = "N/A";
        console.log(err);
    }

    //transform unix, UTC to date
    const unix_time_stamp = props.data.dt;
    const date = new Date(unix_time_stamp * 1000);
    const formated_date = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: "true",
        timeZone: "UTC"
    })

    //round temperature
    const temperature = Math.round(props.data.main.temp)

    return (
        <div className={s.main_data_container}>

            <div className={s.big_data}>

                <div className={s.item1}>
                    <p>{props.data.name}</p>
                </div>

                <div className={s.item2}>
                    <Weather_icon code={props.data.weather[0].icon} alt={props.data.weather[0].description} />
                </div>

                <div className={s.item3}>
                    <p>{temperature}</p>
                </div>

                <div className={s.item4}>
                    <input type="checkbox" value="temp" />
                </div>

                <div className={s.item5}>
                    {props.data.weather[0].description}
                </div>

            </div>
            <br />
            {/* smoller information */}
            <div className={s.small_data}>
                {`Updated as of ${formated_date}`}
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

        </div>
    )
}

export default Weather_app_data;