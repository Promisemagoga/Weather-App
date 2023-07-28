import { DateTime } from "luxon";


const API_key = '38d54820a460d2b097e05f513fcc2deb';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// const iconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getWeatherData =  (infoType, searchParams) => {
    // const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}`
    const url = new URL(BASE_URL + "/" + infoType)
    url.search = new URLSearchParams({ ...searchParams, appid: API_key})

    console.log(url)
    return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
  
};

const formatCurrentWeather = (data) =>{
const {
   coord: {lat,lon} ,main: {
    temp, 
    feels_like, 
    humidity, 
    temp_min,
    temp_max,
},
   name,
   dt,
   sys: {
    country, 
    sunrise,
    sunset},
   weather,
   wind: {speed}
} = data;

const {main:details,icon } = weather[0]

return{
    lat,
    lon,
    temp,
    feels_like,
    humidity,
    temp_min,
    temp_max,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed
}
}

const formatForecastWeather = (data) =>{
    let {timezone, daily, hourly} = data;
    // daily = daily.slice(1,6).map(d => {
    //     return{
    //        title: formatToLocalTime(d.dt, timezone,'ccc'),
    //        temp: d.temp.day,
    //        icon: d.weather[0].icon
    //     }
    // });

    // hourly = hourly.slice(1,6).map(d => {
    //     return({
    //        title: formatToLocalTime(d.dt, timezone,'hh:mm a'),
    //        temp: d.temp.day,
    //        icon: d.weather[0].icon
    // })
    // });
    // return{timezone,daily,hourly}
}

const getFormattedWeatherData = async(searchParams) =>{
const formattedCurrentWeather = await  getWeatherData('weather',searchParams).then(formatCurrentWeather)

    const {lat, lon} = formattedCurrentWeather;
    const formattedForecastWeather = await getWeatherData("onecall", {
        lat,
        lon,
        exclude: 'current,minutetly,alerts', units: searchParams.units
    }).then(formatForecastWeather)
// return formattedCurrentWeather
 return {...formattedCurrentWeather, ...formattedForecastWeather}
}

const formatToLocalTime = (secs,zone, format = "cccc, dd LLL, yyyy' Local time:' hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// export default getForecastData
export default getFormattedWeatherData





    
 
