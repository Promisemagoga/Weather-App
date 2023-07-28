import React, { useEffect, useState } from 'react'
import ForeCast from '../ForecastService'
import coldbg from "../Assets/cold.webp"
import hotbg from "../Assets/hot2.jpg"
import getForecastData from '../ForecastService'
import getWeatherData from '../WeatherService'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'

export default function Forecast() {
    const [weather, setWeather] = useState(null)
    const [forecast, setForecast] = useState(null)

    const [units, setUnits] = useState('metric')
    const [location, setLocation] = useState(null);


    const [searchCity, setSearchCity] = useState("Pretoria")
    const [background, setBackground] = useState(hotbg)


    useEffect(() => {
        const fetchForeCast = async () => {
          const data = await getForecastData("Soshanguve")
          setForecast(data)
          //dynamic background
          console.log(data)
        };
        fetchForeCast()

      }, [])

    useEffect(() => {
        const fetchdata = async () => {
            const data = await getWeatherData("Soshanguve")
            setWeather(data)
            //dynamic background
            const treshhold = units === 'metric' ? 20 : 60;
            if (data.temp <= treshhold) setBackground(coldbg)
            else setBackground(hotbg)

        };
        fetchdata()

    }, [])

    const handleUnitsClick = (event) => {
        const button = event.currentTarget;
        const currentUnit = button.innerText.slice(1)
        const isCelsius = currentUnit === 'C'
        button.innerText = isCelsius ? '°F' : '°C'
        setUnits(isCelsius ? 'metric' : 'imperial')
        console.log(currentUnit);
    }

    const tempUnits = units === "metric" ? "°C" : "°F"
    const windUnits = units === "metric" ? "m/s" : "m/h"
    const pressureUnits = units === "metric" ? "hpa" : "inHg"
    const humidity = units === "metric" ? "%" : "%"
    return (
        <div className='App' style={{ backgroundImage: `url(${hotbg})` }}>
            <div className='overlay'>
                {weather && (
                    <div className='forcast'>
                        <div className='Container'>
                            <div className='subContainer '>
                                <div >
                                    <div className='headingPart'>
                                        <div>
                                            <h1>{`${weather.name},${weather.country}`}</h1>
                                            <p>{`${weather.dt}`}</p>
                                        </div>
                                        <button>°F</button>
                                    </div>
                                    <div className='headingPart'>
                                        <div>
                                            <img src="./cloud-icon.png" alt="" />
                                            <h1>52°C</h1>
                                            <p>{`${weather.description}`}</p>
                                        </div>
                                        <div className='card'>
                                            <div className="description__card-icon headingLeft">
                                                <FaArrowDown />
                                                <small>min</small>
                                                <h2>{`${weather.temp_min.toFixed()}${tempUnits}`}</h2>
                                            </div>
                                            <div className="description__card-icon">
                                                <FaArrowUp />
                                                <small>max</small>
                                                <h2>{`${weather.temp_max.toFixed()}${tempUnits}`}</h2>
                                            </div>
                                            <div className="description__card-icon">
                                                <BiHappy />
                                                <small>feels like</small>
                                                <h2>{`${weather.feels_like.toFixed()}${tempUnits}`}</h2>
                                            </div>
                                            <div className="description__card-icon">
                                                <MdCompress />
                                                <small>Pressure</small>
                                                <h2>{`${weather.pressure.toFixed()} ${pressureUnits}`}</h2>
                                            </div>
                                            <div className="description__card-icon">
                                                <MdOutlineWaterDrop />
                                                <small>Humidity</small>
                                                <h2>{`${weather.humidity.toFixed()}${humidity}`}</h2>
                                            </div>

                                            <div className="description__card-icon">
                                                <FaArrowDown />
                                                <small>Wind speed</small>
                                                <h2>{`${weather.temp_min.toFixed()}${windUnits}`}</h2>


                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='forecastData'>
                                <div>
                                    <h2>Fri</h2>
                                    <img src="./cloud-icon.png" alt="" className='forcastIcon' />
                                    <h3>Humidity: 1%</h3>
                                    <h3>wind: 8 mph ⬆</h3>
                                    <h3>wind: 15 mph ⬇</h3>
                                    <h3>Feels like: 52°C</h3>

                                </div>
                                <div>
                                    <h2>Sat</h2>
                                    <img src="./cloud-icon.png" alt="" className='forcastIcon' />
                                    <h3>Humidity: 1%</h3>
                                    <h3>wind: 8 mph ⬆</h3>
                                    <h3>wind: 15 mph ⬇</h3>
                                    <h3>Feels like: 52°C</h3>

                                </div>
                                <div>
                                    <h2>Sun</h2>
                                    <img src="./cloud-icon.png" alt="" className='forcastIcon' />
                                    <h3>Humidity: 1%</h3>
                                    <h3>wind: 8 mph ⬆</h3>
                                    <h3>wind: 15 mph ⬇</h3>
                                    <h3>Feels like: 52°C</h3>

                                </div>
                                <div>
                                    <h2>Mon</h2>
                                    <img src="./cloud-icon.png" alt="" className='forcastIcon' />
                                    <h3>Humidity: 1%</h3>
                                    <h3>wind: 8 mph ⬆</h3>
                                    <h3>wind: 15 mph ⬇</h3>
                                    <h3>Feels like: 52°C</h3>

                                </div>
                                <div>
                                    <h2>Tues</h2>
                                    <img src="./cloud-icon.png" alt="" className='forcastIcon' />
                                    <h3>Humidity: 1%</h3>
                                    <h3>wind: 8 mph ⬆</h3>
                                    <h3>wind: 15 mph ⬇</h3>
                                    <h3>Feels like: 52°C</h3>

                                </div>
                                <div>
                                    <h2>Wed</h2>
                                    <img src="./cloud-icon.png" alt="" className='forcastIcon' />
                                    <h3>Humidity: 1%</h3>
                                    <h3>wind: 8 mph ⬆</h3>
                                    <h3>wind: 15 mph ⬇</h3>
                                    <h3>Feels like: 52°C</h3>

                                </div>
                                <div>
                                    <h2>Fri</h2>
                                    <img src="./cloud-icon.png" alt="" className='forcastIcon' />
                                    <h3>Humidity: 1%</h3>
                                    <h3>wind: 8 mph ⬆</h3>
                                    <h3>wind: 15 mph ⬇</h3>
                                    <h3>Feels like: 52°C</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
