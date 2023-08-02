import { DateTime } from "luxon";


const API_key = '38d54820a460d2b097e05f513fcc2deb';

// const iconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getForecastData = async (lat, lon,units) => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=${units}`
    const data = await fetch(URL)
  
    return data


}




    







export default getForecastData







