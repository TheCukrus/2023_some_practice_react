import { useState, useEffect } from "react";
import axios from "axios";
import Weather_app_location_form from "./Weather_app_location_form.jsx";
import Weather_app_data from "./Weather_app_data.jsx";
import s from "./Weather.module.css";
import Footer from "../../Footer.jsx";

const Weather_app_main = () =>
{
    const [open_weather_api, set_open_weather_api] = useState("");
    const [location, set_location] = useState({ "lat": "", "lon": "" });
    const [city, set_city] = useState("");
    const [error, set_error] = useState("");
    const [data, set_data] = useState({});
    const [air_pollution, set_air_pollution] = useState({});
    const [is_loading, set_is_loading] = useState(false);
    const [unit, set_unit] = useState("C°");


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

    //fetching current Air pollution data from open weather
    const fetch_air_polution = async () =>
    {
        if (location.lat && location.lon)
        {
            try
            {
                const pollution_data = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${open_weather_api}`);
                set_air_pollution(pollution_data.data)
                set_error("");
            }
            catch (err)
            {
                console.log(err);
                set_error("Could not retrieve air pollution data. Please try again.");
            }
        }
    }

    //fetching current Weather data from open weather 
    const fetch_data = async () =>
    {
        if (location.lat && location.lon)
        {
            try
            {
                set_is_loading(true);
                const weather_data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${open_weather_api}`);
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

    //C to F temp converter
    const temp_converter = (temp) =>
    {
        if (unit === "C°") return temp;
        return (temp * 9 / 5) + 32;
    }



    useEffect(() => fetch_api, []);
    useEffect(() => { fetch_data(); }, [location]);
    useEffect(() => { fetch_air_polution(); }, [location]);

    return (
        <div className={s.main_container}>
            <Weather_app_location_form set_city={set_city} error={error} geo_location={geo_location} is_loading={is_loading} />
            <Weather_app_data data={data} air_pollution={air_pollution} unit={unit} set_unit={set_unit} temp_converter={temp_converter} />
            <Footer />
        </div>
    )
}

export default Weather_app_main;