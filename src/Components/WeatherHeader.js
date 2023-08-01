

import coldbg from "../Assets/cold.webp"
import hotbg from "../Assets/hot2.jpg"
import getSearchData from "../Services/SearchServices";
import getWeatherData from "../Services/WeatherService";
import Description from "./Descriptions";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


function WeatherHeader() {
  const navigate = useNavigate()
  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState('metric')


  const [searchCity, setSearchCity] = useState("Pretoria")
  const [background, setBackground] = useState(hotbg)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async(position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      // const accuracy = position.coords.accuracy;
      console.log(lat, lon);
      const data = await getWeatherData(lat, lon,units)
      console.log(data);
      setWeather(data)
      const treshhold = units === 'metric' ? 20 : 60;
          if (data.temp <= treshhold) setBackground(coldbg)
         else setBackground(hotbg)
    });
  }, [units]);


  useEffect(() => {
    const fetchdata = async () => {
      const data = await getSearchData(searchCity, units)
      setWeather(data)
      const treshhold = units === 'metric' ? 20 : 60;
      if (data.temp <= treshhold) setBackground(coldbg)
      else setBackground(hotbg)
    };
    fetchdata()

  }, [ searchCity])

  const handleUnitsClick = (event) => {
    const button = event.currentTarget;
    const currentUnit = button.innerText.slice(1)
    const isCelsius = currentUnit === 'C'
    button.innerText = isCelsius ? '°F' : '°C'
    setUnits(isCelsius ? 'metric' : 'imperial')
    console.log(currentUnit);
  }



  const enterCity = (event) => {
    if (event.keyCode === 13) {
      setSearchCity(event.currentTarget.value)
      event.currentTarget.blur()
    }
  }



  function Forecast() {
    navigate("/Forecast")
  }

  function News() {
    navigate("/News")
  }

  if(!weather)return<div>Loading..</div>

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
              <div className=" section section__inputs search">
                <input type="text" name='city' placeholder='Enter City...' onKeyDown={enterCity} />
                <button onClick={(event) => handleUnitsClick(event)}>°F</button>
              </div>
              <div className="section section__temperature">
                <div className="icon">
                  <h3>{`${weather.name},${weather.country}`}</h3>
                  {/* <img src="./cloud-icon.png" alt="" /> */}
                  <img src={weather.iconUrl} />
                  <h3>{weather.description}</h3>
                </div>
                <div className="temperature">
                  <h1>{`${weather.temp.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}</h1>
                </div>
              </div>
              {/* Bottom description */}
              <Description weather={weather} units={units} />
              <div className="navigation">
                <button onClick={Forecast} >Forecast</button>
                <button onClick={News}>Read News</button>

              </div>
            </div>
          )
        }

      </div>
    </div>
  );
}

export default WeatherHeader;

