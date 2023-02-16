import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Weather_app_location_form = (props) =>
{
    const [location, set_location] = useState({ "lat": "", "lon": "" });
    const [city, set_city] = useState("");
    const [temp, set_temp] = useState({});

    const handle_input_change = (e) => set_city(e.target.value)

    const geo_location = async () =>
    {
        try
        {
            const geolocation = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${props.open_weather_api}`)
            set_location({ "lat": geolocation.data[1].lat, "lon": geolocation.data[1].lon })
        }
        catch (err)
        {
            console.log(err);

        }
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Enter City name"
                    onChange={handle_input_change}
                />


                <button type="button" onClick={geo_location}>submit</button>
            </form>

            {props.open_weather_api}<br />
            {city}<br />
            {location.lat}<br />
            {location.lon}
        </div>
    )
}

export default Weather_app_location_form;