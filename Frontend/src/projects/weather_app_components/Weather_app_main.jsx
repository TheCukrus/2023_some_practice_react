import { useState, useEffect } from "react";
import axios from "axios";
import Weather_app_location_form from "./Weather_app_location_form.jsx";
import Weather_app_data from "./Weather_app_data.jsx";

const Weather_app_main = () =>
{
    const [open_weather_api, set_open_weather_api] = useState("");


    //fetching api from server
    const fetch_api = async () =>
    {
        try
        {
            const open_weather_api = await axios.get("http://127.0.0.1:80/api/v1/data");
            set_open_weather_api(open_weather_api.data);
        }
        catch (err) 
        {
            console.log(err);
        }
    }


    useEffect(() => fetch_api, []);

    return (
        <div>
            weather_app
            <Weather_app_location_form open_weather_api={open_weather_api} />
            <Weather_app_data />
        </div>
    )
}

export default Weather_app_main;

/*
*Search bar or location input for users to input a location and get weather information
*Current weather information such as temperature, humidity, wind speed, and weather condition (e.g. sunny, cloudy, rainy)
*Forecasted weather information for the upcoming days, typically up to a week
*Interactive weather maps with zoom and pan functionality
*Ability to switch between units of measurement (e.g. Celsius and Fahrenheit)
*Customizable alerts and notifications for severe weather conditions
*Integration with other apps and services, such as calendar or email, to plan activities or travel based on weather conditions
*In-app purchases for premium features such as ad-free experience or extended forecast data
*/
