import React, { useEffect, useState } from 'react'
import coldbg from "../Assets/cold.webp"
import hotbg from "../Assets/hot2.jpg"

import { FaArrowDown, FaArrowUp, FaLocationArrow, FaLocationDot } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'
import ForecastDes from './ForecastDes'
import getForecastData from '../Services/ForecastService'
import getWeatherData from '../Services/WeatherService'
import getSearchData from '../Services/SearchServices'
import moment from 'moment/moment'

export default function Forecast() {
    const [weather, setWeather] = useState(null)
    const [searchCity, setSearchCity] = useState("Pretoria")
    const [background, setBackground] = useState(hotbg)
    const [units, setUnits] = useState('metric')

    useEffect(() => {
        fetchForecast()
    }, [units])

    const fetchForecast = async () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const data = await getWeatherData(lat, lon, units)
            setWeather(data)
            const treshhold = units === 'metric' ? 20 : 60;
            if (data.temp <= treshhold) setBackground(coldbg)
            else setBackground(hotbg)

        })
    }
    // fetchForecast()

    useEffect(() => {
        const fetchdata = async () => {
            const data = await getSearchData(searchCity, units)
            setWeather(data)
            const treshhold = units === 'metric' ? 20 : 60;
            if (data.temp <= treshhold) setBackground(coldbg)
            else setBackground(hotbg)
        };
        fetchdata()

    }, [searchCity])

    const handleUnitsClick = (event) => {
        const button = event.currentTarget;
        const currentUnit = button.innerText.slice(1)
        const isCelsius = currentUnit === 'C'
        button.innerText = isCelsius ? '°F' : '°C'
        setUnits(isCelsius ? 'metric' : 'imperial')
        console.log(currentUnit);
    }


    return (
        <div className="App" style={{ backgroundImage: `url(${background})` }}>
            <div className="overlay">
                {weather && (
                    <div className="container">
                        <div className=" section section__inputs search">
                            <input type="text" name='city' placeholder='Enter City...' />
                            <button onClick={(event) => handleUnitsClick(event)}>°F</button>
                        </div>
                        <div className="section section__temperature">
                            <div className="icon">
                                <h3>{`${weather.name},${weather.country}`}</h3>
                                {/* <h3>Pretoria,ZA</h3> */}

                                <br />
                                {/* <img src="./cloud-icon.png" alt="" /> */}
                                <img src={weather.iconUrl} />
                                <h3>Cloudy</h3>
                                {/* <h3>{weather.description}</h3> */}

                            </div>
                            <div className="temperature">
                                <div>
                                    <p>{moment().format('LL')}</p>
                                    <p>{moment().format('dddd')}</p>
                                </div>
                                <h1>{`${weather.temp.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}</h1>
                            </div>

                        </div>
                        {/* Bottom description */}
                        {/* <ForecastDes title="hourly forecast" /> */}
                        <ForecastDes units={units} />

                        {/* <Description weather={weather} units={units} /> */}
                    </div>
                )}



            </div>
        </div>
    )
}
