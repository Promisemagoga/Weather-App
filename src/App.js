import './App.css';

import coldbg from "../src/Assets/cold.webp"
import hotbg from "../src/Assets/hot2.jpg"
import Description from './Components/Descriptions';
import { useEffect, useState } from 'react';
import getWeatherData from './WeatherService';
import WeatherHeader from './Components/WeatherHeader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Forecast from './Components/Forecast';
import News from './Components/News';

function App() {

  // const [weather, setWeather] = useState(null)
  // const [units, setUnits] = useState('metric')
  // const [location, setLocation] = useState(null);


  // const [searchCity, setSearchCity] = useState("Pretoria")
  // const [background, setBackground] = useState(hotbg)


  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLocation(position.coords);
  //   });
  // }, []);


  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const data = await getWeatherData(searchCity, units)
  //     setWeather(data)
  //     //dynamic background
  //     const treshhold = units === 'metric' ? 20 : 60;
  //     if (data.temp <= treshhold) setBackground(coldbg)
  //     else setBackground(hotbg)
  //   };
  //   fetchdata()

  // }, [units, searchCity, location])

  // const handleUnitsClick = (event) => {
  //   const button = event.currentTarget;
  //   const currentUnit = button.innerText.slice(1)
  //   const isCelsius = currentUnit === 'C'
  //   button.innerText = isCelsius ? '°F' : '°C'
  //   setUnits(isCelsius ? 'metric' : 'imperial')
  //   console.log(currentUnit);
  // }

  // const enterCity = (event) => {
  //   if (event.keyCode === 13) {
  //     setSearchCity(event.currentTarget.value)
  //     event.currentTarget.blur()
  //   }
  // }

  return (

    <Router>
      <Routes>
        <Route path='/' element={<div><WeatherHeader/></div>}></Route>
        <Route path='/Forecast' element={<Forecast/>}></Route>
        <Route path='/News' element={<News/>}></Route>

      </Routes>
    </Router>
    //  <div className='app'>
    //   <WeatherHeader/>
    //  </div>
  );
              // <Description weather={weather} units={units} />
}

export default App;
