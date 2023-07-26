import {FaArrowUp,FaArrowDown,FaWind } from 'react-icons/fa'
import {BiHappy} from "react-icons/bi";
import {MdCompress,MdOutlineWaterDrop} from "react-icons/md"

function Description({weather,units}) {
    const tempUnits =  units === "metric" ? "°C" : "°F"
    const windUnits = units === "metric" ? "m/s" : "m/h"
    const pressureUnits =  units === "metric" ? "hpa" : "inHg"
    const humidity =  units === "metric" ? "%" : "%"


    
    return (
        <div className="section section__descriptions">
            <div className="card">
                <div className="description__card-icon">
                    <FaArrowDown />
                    <small>min</small>
                </div>
                <h2>{`${weather.temp_min.toFixed()}${tempUnits}`}</h2>
            </div>
            <div className="card">
                <div className="description__card-icon">
                    <FaArrowUp />
                    <small>max</small>
                </div>
                <h2>{`${weather.temp_max.toFixed()}${tempUnits}`}</h2>
            </div>
            <div className="card">
                <div className="description__card-icon">
                    <BiHappy />
                    <small>feels like</small>
                </div>
                <h2>{`${weather.feels_like.toFixed()}${tempUnits}`}</h2>
            </div>
            <div className="card">
                <div className="description__card-icon">
                    <MdCompress />
                    <small>Pressure</small>
                </div>
                <h2>{`${weather.pressure.toFixed()} ${pressureUnits}`}</h2>
            </div>
            <div className="card">
                <div className="description__card-icon">
                    <MdOutlineWaterDrop />
                    <small>Humidity</small>
                </div>
                <h2>{`${weather.humidity.toFixed()}${humidity}`}</h2>
            </div>
            <div className="card">
                <div className="description__card-icon">
                    <FaArrowDown />
                    <small>Wind speed</small>
                </div>
                <h2>{`${weather.temp_min.toFixed()}${windUnits}`}</h2>
            </div>
        </div>
    )
}

export default Description