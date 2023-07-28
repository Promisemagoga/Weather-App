import React from 'react'
import { FaCloudRain } from 'react-icons/fa'

function ForecastDes({title}) {
    return (
        <div  className='forecastA'>
          
                <p>{title}</p>
          
            <hr className='horizontalLine' />
            <div className='weatherData'>
                <div className='table-col'>
                    <p>04:30 PM</p>
                    <FaCloudRain />
                    <p>22°C</p>
                </div>
                <div className='table-col'>
                    <p>04:30 PM</p>
                    <FaCloudRain />
                    <p>22°C</p>
                </div>
                <div className='table-col'>
                    <p>04:30 PM</p>
                    <FaCloudRain />
                    <p>22°C</p>
                </div>
                <div className='table-col'>
                    <p>04:30 PM</p>
                    <FaCloudRain />
                    <p>22°C</p>
                </div>
                <div className='table-col'>
                    <p>04:30 PM</p>
                    <FaCloudRain />
                    <p>22°C</p>
                </div>
            </div>
        </div>
    )
}

export default ForecastDes
