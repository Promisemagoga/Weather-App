import React, { useEffect, useState } from 'react'
import ForeCast from '../ForecastService'
import coldbg from "../Assets/cold.webp"
import hotbg from "../Assets/hot2.jpg"
import getForecastData from '../ForecastService'
import getWeatherData from '../WeatherService'
import { FaArrowDown, FaArrowUp, FaLocationArrow, FaLocationDot } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'
import ForecastDes from './ForecastDes'
import formattedForecast from '../ForecastService'
import getFormattedWeatherData from '../ForecastService'

export default function Forecast() {

    
        const fetchForecast = async() =>{
            const data = await getFormattedWeatherData( {q: 'Pretoria'})
            console.log(data)
            }
            fetchForecast()
   



    return (
        <div className="App" style={{ backgroundImage: `url(${hotbg})` }}>
            <div className="overlay">
                <div className="container">
                    <div className=" section section__inputs search">
                        <input type="text" name='city' placeholder='Enter City...' />
                        <FaLocationArrow />
                        <button >°F</button>
                    </div>
                    <div className='date-time'>
                   
                            <p>Tues, 28 july 2023</p>
                            <p>time: 10:26</p>
                      
                    </div>
                    <div className="section section__temperature">
                        <div className="icon">
                            {/* <h3>{`${weather.name},${weather.country}`}</h3> */}
                            <h3>Pretoria,ZA</h3>

                            <br />
                            <img src="./cloud-icon.png" alt="" />
                            {/* <img src={weather.iconUrl} /> */}
                            <h3>Cloudy</h3>
                            {/* <h3>{weather.description}</h3> */}

                        </div>
                        <div className="temperature">
                            <div>
                                <p>Sunrise, 06:00am</p>
                                <p>Sunset: 11:59pm</p>
                            </div>

                            {/* <h1>{`${weather.temp.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}</h1> */}
                            <h1>6°C</h1>
                        </div>

                    </div>
                    {/* Bottom description */}
                    <ForecastDes title="hourly forecast" />
                    <ForecastDes title="daily forecast" />

                    {/* <Description weather={weather} units={units} /> */}
                </div>


            </div>
        </div>
    )
}
