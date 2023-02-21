import Weather_icon from "./Weather_icon.jsx";
import s from "./Weather.module.css";

const Weather_app_data = (props) =>
{


    if (Object.keys(props.data).length === 0) return null;

    //change temperature from Celsius to Farenghaite
    const handle_temp_change = () =>
    {
        props.set_unit(props.unit === "C°" ? "F°" : "C°");
    }

    //function to calculate severity
    const calculate_severity = (aqi) =>
    {
        const severity_levels =
        {
            1: "Good air",
            2: "Fair air",
            3: "Moderate air",
            4: "Poor air",
            5: "Very poor air"
        };
        return severity_levels[aqi] || "Unknown";
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

    //round feels like temperature
    const feels_like = Math.round(props.data.main.feels_like)

    //calculate wind speed
    const wind_speed = Math.round(props.data.wind.speed);

    //count km visibility
    const visibility = props.data.visibility / 1000

    return (
        <div className={s.main_data_container}>
            {/* Bigger information */}
            <div className={s.big_data}>

                <div className={s.b_item1}>
                    <p>{props.data.name}</p>
                </div>

                <div className={s.b_item2}>
                    <Weather_icon code={props.data.weather[0].icon} alt={props.data.weather[0].description} />
                </div>

                <div className={s.b_item3}>
                    <p>{`${props.temp_converter(temperature)}°`}</p>
                </div>

                <div className={s.b_item4}>
                    <button className={s.Weather_temp_changer} onClick={handle_temp_change}>{props.unit}</button>
                </div>

                <div className={s.b_item5}>
                    {props.data.weather[0].description}
                </div>

            </div>
            <br />
            {/* smoller information */}
            <div className={s.small_data}>

                <div className={s.s_item1}>
                    {`Updated as of ${formated_date}`}
                </div>

                <div className={s.s_item2}>
                    <p>Visibility {visibility} km</p>
                </div>

                <div className={s.s_item3}>
                    <p>severity {severity}</p>
                </div>

                <div className={s.s_item4}>
                    <p>feels like {props.temp_converter(feels_like)}°</p>
                </div>

                <div className={s.s_item5}>
                    <p>{`Wind speed ${wind_speed} km/h`}</p>
                </div>

                <div className={s.s_item6}>
                    <p>Humidity {props.data.main.humidity}%</p>
                </div>

            </div>

        </div >
    )
}

export default Weather_app_data;