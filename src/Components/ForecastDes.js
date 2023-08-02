import React, { useEffect, useState } from 'react'
import { FaCloudRain } from 'react-icons/fa'
import getForecastData from '../Services/ForecastService'
import tempImg from "../Assets/cloudy.png";
function ForecastDes(props) {
    const [forecast, setForecast] = useState([])
    const [weather, setWeather] = useState([])
    useEffect(() => {
        const fetchForecast = async () => {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const data = await getForecastData(lat, lon)
                    .then((res) => res.json())
                    .then((data) => {



                        let myForecast = [];
                        myForecast = data.list.reduce((acc, obj) => {
                            const date = new Date(obj.dt * 1000).toLocaleDateString();
                            if (!acc[date]) {
                                acc[date] = [obj]
                            } else {
                                acc[date].push({ obj });
                            }
                            return acc;
                        }, {})
                        const arr = Object.entries(myForecast).map(([date, value]) => ({ date, value }))
                        console.log(arr);
                        setForecast(arr.slice(1))
                        // setWeather(arr.slice(0, 1))

                    })

            })
        }
        fetchForecast()
    }, [])

    const units = (value) => {
        let convert = 0;
        let str = ""
        if (props.units === "metric") {
            convert = value - 273.15;
            str = `${convert.toFixed()}°C`;
        } else {
            convert =  (value - 273.15) * 9/5 + 32
            str = `${convert.toFixed()}°F`;
        }

         
        return str
        // °${units === 'metric' ? 'C' : 'F'}
    }
    if (!forecast) {
        return <div>Loading...</div>
    }

    return (
        <div className='forecastA'>
            <p>daily forecast</p>

            <hr className='horizontalLine' />
            <div className='weatherData'>


                {forecast.map((data, index) => (
                    <div className='table-col' key={index}>
                        <p>{data.value[0].dt_txt}</p>
                        <img src={!data.value[3]?.obj ? tempImg : `https://openweathermap.org/img/wn/${data.value[3].obj.weather[0].icon}@2x.png`} alt="" width={!data.value[3]?.obj ? 85 : 100} />
                        <p>{!data.value[3]?.obj ? "Upcoming" : units(data.value[3].obj.main.temp)}</p>
                        {console.log(data.value[0].dt_txt)}

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ForecastDes
