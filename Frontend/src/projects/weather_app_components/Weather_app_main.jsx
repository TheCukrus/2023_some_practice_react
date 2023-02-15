import React from "react";
import axios from "axios";
import Weather_app_location_form from "./Weather_app_location_form.jsx";

const Weather_app_main = () =>
{




    return (
        <div>
            weather_app
            <Weather_app_location_form />
        </div>
    )
}

export default Weather_app_main;

/*
1.Location selection: Allow users to enter a location to get the weather forecast.
2.Current conditions: Display the current temperature, wind speed and direction, humidity, and other relevant information for the selected location.
3.Forecast: Show the forecast for the next several days, with details like high and low temperatures, precipitation, and wind speed and direction.
4.Units: Allow the user to choose between metric and imperial units for temperature and other measurements.
5.Visualizations: Use icons or images to represent the current conditions and forecast.
6.Alerts: Display severe weather alerts or warnings for the selected location.
7.History: Allow the user to view the weather history for a specific date or range of dates.
8.API integration: Use a weather API to get real-time weather data for the selected location.
*/

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

//lat=54.63333
//lon=24.93333
//appid=1e049bc5a6c197798505ba15c8a0e8cf

//api for weather
//https://api.openweathermap.org/data/2.5/weather?lat=54.63333&lon=24.93333&appid=1e049bc5a6c197798505ba15c8a0e8cf

//api for geo location
//http://api.openweathermap.org/geo/1.0/direct?q=trakai&limit=5&appid=1e049bc5a6c197798505ba15c8a0e8cf