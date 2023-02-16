import axios from "axios";
import { useEffect, useState } from "react";

const Weather_app_location_form = (props) =>
{
    const [location, set_location] = useState({ "lat": "", "lon": "" });
    const [city, set_city] = useState("");
    const [data, set_data] = useState({});
    const [error, set_error] = useState("");
    const [is_loading, set_is_loading] = useState(false);

    const handle_input_change = (e) => set_city(e.target.value);

    const geo_location = async () =>
    {
        try
        {
            const geolocation = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${props.open_weather_api}`);
            set_location({ "lat": geolocation.data[0].lat, "lon": geolocation.data[0].lon });
            set_error("");
        }
        catch (err)
        {
            console.log(err);
            set_error("Could not find location. Please try again.")
        }
    };

    const fetch_data = async () =>
    {
        if (location.lat && location.lon)
        {
            try
            {
                const weather_data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${props.open_weather_api}`);
                set_data(weather_data.data);
                set_error("");
            }
            catch (err)
            {
                console.log(err);
                set_error("Could not retrieve weather data. Please try again.");
            }
        }
    };

    const handle_submit = (e) =>
    {
        e.preventDefault();

        geo_location();

        fetch_data();

    }

    useEffect(() => console.log(data), [data]);

    return (
        <div>
            <form onSubmit={handle_submit}>
                <input
                    type="text"
                    placeholder="Enter City name"
                    onChange={handle_input_change}
                />


                <button type="submit">Get weather</button>
            </form>

            {error && <p>{error}</p>}

            {data && (
                <div>
                    <h2>{data.name}</h2>
                    {/* <p>{data.weather[0].description}</p>
                    <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
                    <p>Feels like: {Math.round(data.main.feels_like - 273.15)}°C</p> */}
                </div>
            )}

        </div>
    )
}

export default Weather_app_location_form;