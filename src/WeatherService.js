const API_key = '0cd9cff4f5719c277fdf0415c370ee58'

const iconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=${units}`
    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);


    // destructuring to format data to find exactly the data you need
    const { weather, main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, wind: { speed }, sys: { country }, name, } = data;
    const { description, icon } = weather[0]
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
        name
    }

}

export default getWeatherData