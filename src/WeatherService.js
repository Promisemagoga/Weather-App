const API_key = '38d54820a460d2b097e05f513fcc2deb'

const iconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getWeatherData = async (lat, lon) => {
    // const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=${units}`
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    console.log(lat, lon);

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);

    console.log(data)
    // destructuring to format data to find exactly the data you need
    const { weather, main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, wind: { speed }, sys: { country }, name } = data;
    const { description, icon, dt } = weather[0]
    // const{dt_txt } = weather[0]
    return {
        description,
        iconUrl: iconUrl(icon),
        temp,
        feels_like,
        temp_max,
        temp_min,
        pressure,
        humidity,
        speed,
        country,
        name,
        // dt_txt
        dt
    }

}

export default getWeatherData