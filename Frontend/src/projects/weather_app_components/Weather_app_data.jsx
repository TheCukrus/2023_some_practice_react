import React from "react";

const Weather_app_data = (props) =>
{
    return (
        <div>
            < hr />
            {props.data.name}
            <p>temp</p>
            {props.data.main.temp}
            <p>feels like</p>
            {props.data.main.feels_like}
            <p>wind speed</p>
            {props.data.wind.speed}
            <p>weather description</p>
            {props.data.weather[0].description}
            <p>weather</p>
            {props.data.weather[0].main}
            <p>humidity</p>
            {props.data.main.humidity}
            <p></p>
        </div>
    )
}

export default Weather_app_data;