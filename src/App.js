import './App.css';

import coldbg from "../src/Assets/cold.webp"
import hotbg from "../src/Assets/hot2.jpg"
import Description from './Components/Descriptions';
import { useEffect, useState } from 'react';
import getWeatherData from './WeatherService';

function App() {

  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState('metric')
  const [location, setLocation] = useState(null);


  const [searchCity, setSearchCity] = useState("Pretoria")
  const [background, setBackground] = useState(hotbg)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords);
    });
  }, []);


  useEffect(() => {
    const fetchdata = async () => {
      const data = await getWeatherData(searchCity, units)
      setWeather(data)
      //dynamic background
      const treshhold = units === 'metric' ? 20 : 60;
      if (data.temp <= treshhold) setBackground(coldbg)
      else setBackground(hotbg)
    };
    fetchdata()

  }, [units, searchCity,location])

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

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
              <div className=" section section__inputs">
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


            </div>
          )
        }

      </div>
    </div>
  );
}

export default App;
