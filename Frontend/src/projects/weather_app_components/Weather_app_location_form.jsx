import s from "./Weather.module.css";

const Weather_app_location_form = (props) =>
{
    const handle_input_change = (e) => props.set_city(e.target.value);

    const handle_submit = (e) =>
    {
        e.preventDefault();
        props.geo_location();
    }

    return (
        <form className={s.Weather_form} onSubmit={handle_submit}>
            <input
                type="text"
                placeholder="Enter City name"
                onChange={handle_input_change}
            />
            <button type="submit">{props.is_loading ? "Loading..." : "Get weather"}</button>
            {props.error && <p>{props.error}</p>}
        </form>

    )
}

export default Weather_app_location_form;