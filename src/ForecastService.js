const API_key = 'd5e69b5d7313d1ec87277475ab8ef86e'

 const iconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getForecastData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=${units}`
    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);

    console.log(data)
    // destructuring to format data to find exactly the data you need
    // const { weather, main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, wind: { speed }, city: { name,country },dt_txt } = data;
    // const { description, icon } = weather[0]
    // return {
    //     description, 
    //     iconUrl: iconUrl(icon), 
    //     temp, 
    //     feels_like, 
    //     temp_max, 
    //     temp_min, 
    //     pressure, 
    //     humidity, 
    //     speed, 
    //     country, 
    //     name,
    //     dt_txt
    //  }

}

export default getForecastData