import axios from "axios";
import React from "react";

const Weather_app_location_form = () =>
{
    const open_weather_api = fetch("http://127.0.0.1:80/api/v1/data").then(response => response.json()).then(data => { return data })
    //not working
    console.log(open_weather_api)




    const get_geo_location = async () =>
    {
        try
        {
            const geolocation = await axios(
                {
                    "method": "get",
                    "url": "http://api.openweathermap.org/geo/1.0/direct?q=trakai&limit=5&appid=1e049bc5a6c197798505ba15c8a0e8cf"
                }
            )
        }
        catch (err)
        {
            console.log(err)
        }
    }

    fetch('http://localhost:80/api/data')
        .then(response => response.json())
        .then(data =>
        {
            console.log(data)
            // Do something with the data
        });

    return (
        <form>
            <input type="text" placeholder="Enter City name" />
            <button type="submit">submit</button>
        </form>
    )
}

export default Weather_app_location_form;