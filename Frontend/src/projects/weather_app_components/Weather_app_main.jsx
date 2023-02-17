import { useState, useEffect } from "react";
import axios from "axios";
import Weather_app_location_form from "./Weather_app_location_form.jsx";
import Weather_app_data from "./Weather_app_data.jsx";

const Weather_app_main = () =>
{
    const [open_weather_api, set_open_weather_api] = useState("");
    const [location, set_location] = useState({ "lat": "", "lon": "" });
    const [city, set_city] = useState("");
    const [error, set_error] = useState("");
    const [data, set_data] = useState({});
    const [is_loading, set_is_loading] = useState(false);



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

    //find geolocation
    const geo_location = async () =>
    {
        try
        {
            const geolocation = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${open_weather_api}`);
            set_location({ "lat": geolocation.data[0].lat, "lon": geolocation.data[0].lon });
            set_error("");
        }
        catch (err)
        {
            console.log(err);
            set_error("Could not find location. Please try again.")
        }
    };

    //fetching data from open weather 
    const fetch_data = async () =>
    {
        if (location.lat && location.lon)
        {
            try
            {
                set_is_loading(true);
                const weather_data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${open_weather_api}`);
                set_data(weather_data.data);
                set_error("");
                set_is_loading(false);

            }
            catch (err)
            {
                console.log(err);
                set_error("Could not retrieve weather data. Please try again.");
                set_is_loading(false);
            }
        }
    };




    useEffect(() => fetch_api, []);
    useEffect(() => { fetch_data(); }, [location]);
    useEffect(() => console.log(data), [data]);


    return (
        <div>
            weather_app
            <Weather_app_location_form set_city={set_city} error={error} geo_location={geo_location} is_loading={is_loading} />
            <Weather_app_data data={data} />
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
